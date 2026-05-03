import { NextResponse } from "next/server";
import { createSign } from "node:crypto";

export const runtime = "nodejs";

type InquiryPayload = {
  email?: string;
  inquiryType?: string;
  inquiryTypeLabel?: string;
  message?: string;
  name?: string;
  phone?: string;
  subjectPrefix?: string;
};

const requiredEnvVars = [
  "GOOGLE_SHEETS_CLIENT_EMAIL",
  "GOOGLE_SHEETS_PRIVATE_KEY",
  "GOOGLE_SHEETS_SPREADSHEET_ID",
  "GOOGLE_SHEETS_SHEET_NAME",
] as const;

function missingEnvVars() {
  return requiredEnvVars.filter((key) => !process.env[key]);
}

function toBase64Url(input: string) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

async function getGoogleAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL!;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY!.replace(/\\n/g, "\n");

  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const claimSet = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const unsignedToken = `${toBase64Url(JSON.stringify(header))}.${toBase64Url(
    JSON.stringify(claimSet),
  )}`;

  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();

  const signature = signer
    .sign(privateKey, "base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");

  const assertion = `${unsignedToken}.${signature}`;
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  const tokenData = (await tokenResponse.json()) as {
    access_token?: string;
    error?: string;
    error_description?: string;
  };

  if (!tokenResponse.ok || !tokenData.access_token) {
    throw new Error(
      tokenData.error_description ||
        tokenData.error ||
        "Unable to obtain Google access token.",
    );
  }

  return tokenData.access_token;
}

export async function POST(request: Request) {
  try {
    const missingVars = missingEnvVars();

    if (missingVars.length > 0) {
      return NextResponse.json(
        {
          error: `Booking is not configured. Missing: ${missingVars.join(", ")}`,
        },
        { status: 500 },
      );
    }

    const {
      email = "",
      inquiryType = "",
      inquiryTypeLabel = "Inquiry Type",
      message = "",
      name = "",
      phone = "",
      subjectPrefix = "Website Booking",
    } = (await request.json()) as InquiryPayload;

    if (!name.trim() || !email.trim() || !inquiryType.trim() || !message.trim()) {
      return NextResponse.json(
        {
          error: "Name, email, inquiry type, and requirements are required.",
        },
        { status: 400 },
      );
    }

    const accessToken = await getGoogleAccessToken();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;
    const sheetRange = `${process.env.GOOGLE_SHEETS_SHEET_NAME}!A:H`;
    const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(
      sheetRange,
    )}:append?valueInputOption=USER_ENTERED`;

    const appendResponse = await fetch(appendUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [
          [
            new Date().toISOString(),
            subjectPrefix,
            inquiryTypeLabel,
            inquiryType,
            name,
            phone || "Not provided",
            email,
            message,
          ],
        ],
      }),
    });

    if (!appendResponse.ok) {
      const appendError = await appendResponse.text();
      throw new Error(appendError || "Unable to append row to Google Sheets.");
    }

    return NextResponse.json({
      message: "Your booking has been saved successfully.",
    });
  } catch (error) {
    console.error("Booking save failed:", error);
    const message =
      error instanceof Error
        ? error.message
        : "Booking save failed. Check your Google Sheets settings and server logs.";

    return NextResponse.json(
      {
        error: message,
      },
      { status: 500 },
    );
  }
}
