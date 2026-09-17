"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-secondary placeholder:text-body/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function FeedbackForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="card p-7 md:p-9">
      {sent ? (
        <div className="py-10 text-center">
          <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
            <ArrowRight width={24} height={24} />
          </span>
          <h3 className="text-xl">Thank you — we&apos;ve received your message.</h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed">
            We acknowledge all feedback within 3 working days. If you raised a complaint, our complaints lead will
            respond fully within 3 working days.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="grid gap-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Your Name" aria-label="Your name" className={inputCls} />
            <input required type="email" placeholder="Your Email" aria-label="Your email" className={inputCls} />
          </div>
          <select required defaultValue="" aria-label="Type of feedback" className={inputCls}>
            <option value="" disabled>
              What is this about?
            </option>
            <option>Compliment / positive feedback</option>
            <option>Suggestion for improvement</option>
            <option>Complaint about a product</option>
            <option>Complaint about service or staff</option>
            <option>Data protection concern</option>
          </select>
          <input placeholder="Order number (optional)" aria-label="Order number" className={inputCls} />
          <textarea
            required
            rows={6}
            placeholder="Tell us what happened and how you'd like us to put it right…"
            aria-label="Your feedback or complaint details"
            className={inputCls}
          />
          <button type="submit" className="btn btn-primary">
            Send Feedback <ArrowRight width={16} height={16} />
          </button>
          {/* <p className="text-xs leading-relaxed text-body">
            Please do not include sensitive medical details in this form. For clinical queries about an order, call{" "}
            +44 20 7946 0123 so we can verify your identity securely.
          </p> */}
        </form>
      )}
    </div>
  );
}
