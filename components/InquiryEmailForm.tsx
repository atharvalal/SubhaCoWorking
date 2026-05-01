"use client";

import { useRef, useState } from "react";

type InquiryEmailFormProps = {
  idPrefix: string;
  inquiryTypeLabel: string;
  inquiryTypePlaceholder: string;
  inquiryTypeOptions: string[];
  subjectPrefix: string;
  messagePlaceholder: string;
};

export default function InquiryEmailForm({
  idPrefix,
  inquiryTypeLabel,
  inquiryTypePlaceholder,
  inquiryTypeOptions,
  subjectPrefix,
  messagePlaceholder,
}: InquiryEmailFormProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const inquiryTypeRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    tone: "success" | "error";
    message: string;
  } | null>(null);

  const handleBooking = async () => {
    const name = nameRef.current?.value.trim() || "";
    const phone = phoneRef.current?.value.trim() || "";
    const email = emailRef.current?.value.trim() || "";
    const inquiryType = inquiryTypeRef.current?.value.trim() || "";
    const message = messageRef.current?.value.trim() || "";

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          inquiryType,
          inquiryTypeLabel,
          message,
          subjectPrefix,
        }),
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setFeedback({
          tone: "error",
          message: data.error || "Unable to save your booking right now.",
        });
        return;
      }

      if (nameRef.current) {
        nameRef.current.value = "";
      }
      if (phoneRef.current) {
        phoneRef.current.value = "";
      }
      if (emailRef.current) {
        emailRef.current.value = "";
      }
      if (inquiryTypeRef.current) {
        inquiryTypeRef.current.value = "";
      }
      if (messageRef.current) {
        messageRef.current.value = "";
      }

      setFeedback({
        tone: "success",
        message: data.message || "Your booking has been saved.",
      });
    } catch {
      setFeedback({
        tone: "error",
        message: "Unable to save your booking right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="form-grid"
      onSubmit={(event) => {
        event.preventDefault();
        handleBooking();
      }}
    >
      <div className="form-field">
        <label className="form-label" htmlFor={`${idPrefix}-name`}>
          Name
        </label>
        <input
          ref={nameRef}
          id={`${idPrefix}-name`}
          className="form-input"
          type="text"
          placeholder="Your full name"
          required
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor={`${idPrefix}-phone`}>
          Phone
        </label>
        <input
          ref={phoneRef}
          id={`${idPrefix}-phone`}
          className="form-input"
          type="tel"
          placeholder="+977"
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor={`${idPrefix}-email`}>
          Email
        </label>
        <input
          ref={emailRef}
          id={`${idPrefix}-email`}
          className="form-input"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor={`${idPrefix}-type`}>
          {inquiryTypeLabel}
        </label>
        <select
          ref={inquiryTypeRef}
          id={`${idPrefix}-type`}
          className="form-input"
          defaultValue=""
          required
        >
          <option value="" disabled>
            {inquiryTypePlaceholder}
          </option>
          {inquiryTypeOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="form-field-full">
        <label className="form-label" htmlFor={`${idPrefix}-message`}>
          Requirements
        </label>
        <textarea
          ref={messageRef}
          id={`${idPrefix}-message`}
          className="form-textarea"
          placeholder={messagePlaceholder}
          required
        />
      </div>

      {feedback ? (
        <div
          className="form-field-full"
          style={{
            color: feedback.tone === "success" ? "#d7f5d1" : "#ffd6d6",
            fontSize: "0.95rem",
            lineHeight: 1.5,
          }}
        >
          {feedback.message}
        </div>
      ) : null}

      <div className="form-field-full">
        <button
          type="submit"
          className="button-light"
          style={{ width: "fit-content" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Booking..." : "Book"}
        </button>
      </div>
    </form>
  );
}
