import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubha Coworking | Premium Virtual Office & Meeting Rooms in Kathmandu",
  description: "Shubha Coworking offers prestigious virtual office addresses and fully equipped meeting rooms in Kathmandu. Elevate your business presence today.",
  keywords: "coworking space Kathmandu, virtual office Nepal, meeting rooms Kathmandu, business address Nepal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
