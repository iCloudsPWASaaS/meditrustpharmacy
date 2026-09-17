"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "../icons";

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-secondary placeholder:text-body/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function AppointmentForm() {
  const [sent, setSent] = useState(false);

  return (
    <section className="section-padding">
      <div className="container-cm grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        {/* <div className="relative order-2 lg:order-1">
          <svg viewBox="0 0 480 420" fill="none" className="w-full" aria-hidden>
            <rect x="30" y="10" width="420" height="380" rx="36" fill="#ECF5FB" />
            <circle cx="150" cy="140" r="52" fill="#fff" />
            <path d="M138 132c0-8 6-14 14-14s14 6 14 14" stroke="#031B4E" strokeWidth="5" strokeLinecap="round" fill="none" />
            <rect x="120" y="132" width="60" height="40" rx="8" fill="#00BDE0" />
            <rect x="132" y="144" width="36" height="6" rx="3" fill="#fff" opacity="0.9" />
            <rect x="132" y="156" width="24" height="6" rx="3" fill="#fff" opacity="0.7" />
            <rect x="230" y="90" width="180" height="16" rx="8" fill="#fff" />
            <rect x="230" y="122" width="140" height="16" rx="8" fill="#fff" opacity="0.85" />
            <rect x="70" y="220" width="340" height="16" rx="8" fill="#fff" opacity="0.9" />
            <rect x="70" y="252" width="290" height="16" rx="8" fill="#fff" opacity="0.75" />
            <rect x="70" y="284" width="320" height="56" rx="16" fill="#031B4E" />
            <circle cx="330" cy="312" r="18" fill="#00BDE0" />
            <path d="M323 312l5 5 9-10" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <div className="animate-floaty absolute -bottom-2 -right-2 rounded-base bg-primary px-7 py-5 text-center text-white shadow-card md:-right-6">
            <span className="block text-4xl font-bold leading-none">15+</span>
            <span className="mt-1 block text-sm font-medium leading-snug">
              Years
              <br />
              Experienced
            </span>
          </div>
        </div> */}

        <div className="order-1 lg:order-2">
          {/* <div className="section-head mb-8 max-w-lg">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Book online
            </p>
            <h2 className="title">
              Make An Appointment
              <br />
              Apply For Treatments
            </h2>
          </div> */}

          <div className="section-head mb-8 max-w-lg">
            <h2 className="title">
              Contact Us
            </h2>
          </div>

          {sent ? (
            <div className="card !bg-primary/5 text-center">
              <p className="text-lg font-semibold text-secondary">Thank you — request received.</p>
              <p className="mt-2 text-sm">
                A member of our pharmacy team will contact you to confirm your consultation slot. For urgent issues call{" "}
                <a href="tel:+442079460123" className="font-semibold text-primary">
                  +44 20 7946 0123
                </a>
                .
              </p>
            </div>
          ) : (
            <form
              className="card grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input required placeholder="Your Name" aria-label="Your name" className={inputCls} />
              <input required type="email" placeholder="Your Email" aria-label="Your email" className={inputCls} />
              <input required type="tel" placeholder="Phone Number" aria-label="Phone number" className={inputCls} />
              <select aria-label="Select service" defaultValue="" required className={inputCls}>
                <option value="" disabled>
                  Select Service
                </option>
                <option>Acute Sore Throat</option>
                <option>Sinusitis</option>
                <option>Urinary Tract Infection</option>
                <option>Infected Skin Bite</option>
                <option>Shingles</option>
                <option>Impetigo</option>
                <option>NHS Prescription Service</option>
                <option>Care Home Service</option>
                <option>Others (please specify below)</option>
              </select>
              <textarea rows={4} placeholder="Message (optional)" aria-label="Message" className={`${inputCls} sm:col-span-2`} />
              <button type="submit" className="btn btn-primary sm:col-span-2">
                Submit <ArrowRight width={16} height={16} />
              </button>
              <p className="text-center text-xs text-body sm:col-span-2">
                By submitting you agree to our{" "}
                <Link href="/terms-and-conditions" className="text-primary underline underline-offset-2">
                  Terms &amp; Conditions
                </Link>{" "}
                and privacy notice.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
