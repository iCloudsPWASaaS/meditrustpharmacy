import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";
import { dataCollected, purposes, rights, sharing } from "@/lib/privacy-data";
import {
  Check,
  Clock,
  Eye,
  FileText,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
  UserCheck,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Meditrust Pharmacy collects, uses and protects your personal data, the legal basis for processing, who we share it with, and how to raise a concern with the ICO.",
};

const icoDetails = [
  { icon: PhoneCall, label: "Helpline", value: "0303 123 1113", href: "tel:03031231113" },
  { icon: MapPin, label: "Address", value: "Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF" },
  { icon: FileText, label: "Online", value: "ico.org.uk/make-a-complaint", href: "https://ico.org.uk/make-a-complaint/" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy & Patient Privacy Notice" crumb="Privacy Policy" />

      <section className="section-padding">
        <div className="container-cm max-w-4xl">
          {/* Controller summary */}
          <div className="card mb-8 !bg-light p-7 md:p-9">
            <h2 className="flex items-center gap-2.5 text-xl">
              <ShieldCheck width={22} height={22} className="text-primary" /> Who controls and processes your data
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed">
              <strong className="text-secondary">{site.legalName}</strong> (trading as{" "}
              <strong className="text-secondary">{site.pharmacy.name}</strong>, GPhC No. {site.pharmacy.gphcNumber}) is
              the <strong>data controller</strong> for personal data you provide through this website. Our clinical team
              — prescribers and pharmacists registered with the GMC or GPhC — process your health data to provide care.
              Our Data Protection Lead can be contacted at{" "}
              <a href={`mailto:${site.contact.email}`} className="font-semibold text-primary underline underline-offset-2">
                {site.contact.email}
              </a>{" "}
              or in writing at {site.pharmacy.addressLines.join(", ")}.
            </p>
            <p className="mt-3 rounded-lg bg-primary/5 p-4 text-sm leading-relaxed">
              We are registered with the Information Commissioner&apos;s Office (ICO) and pay the applicable data
              protection fee. Registration number available on request.
            </p>
          </div>

          {/* What we collect */}
          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2.5 text-xl">
              <FileText width={22} height={22} className="text-primary" /> 1. What information we collect
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {dataCollected.map((d) => (
                <div key={d.title} className="rounded-base border border-line p-5">
                  <h3 className="mb-3 font-semibold text-primary">{d.title}</h3>
                  <ul className="space-y-1.5">
                    {d.items.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check width={14} height={14} className="mt-1 shrink-0 text-primary" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Health information is classed as “special category” data. We only use it where the law allows us to, as
              explained below.
            </p>
          </section>

          {/* Purposes & legal basis */}
          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2.5 text-xl">
              <Check width={22} height={22} className="text-primary" /> 2. Why we use your data and our legal basis
            </h2>
            <div className="overflow-hidden rounded-base border border-line">
              {purposes.map((p) => (
                <div key={p.why} className="border-b border-line p-4 last:border-0 sm:flex sm:gap-6">
                  <p className="text-sm font-medium text-secondary sm:w-1/2">{p.why}</p>
                  <p className="mt-1.5 text-sm sm:mt-0 sm:w-1/2">{p.basis}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Screening */}
          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2.5 text-xl">
              <Eye width={22} height={22} className="text-primary" /> 3. Order screening — identifying repeat requests
            </h2>
            <div className="rounded-base border border-line p-6">
              <p className="text-[15px] leading-relaxed">
                To protect patients from harm, addiction and medicine diversion, every order passes through automated
                and pharmacist-led screening designed to identify multiple or duplicate requests. As part of this we
                compare:
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Your name, date of birth and address",
                  "Contact details (email address & phone number)",
                  "Payment method / card identifiers",
                  "Delivery addresses used across orders",
                  "Order frequency, quantities and medicine types",
                  "Device fingerprints and IP addresses",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm font-medium text-secondary">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check width={11} height={11} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed">
                If screening flags a concern, your order may be held pending a pharmacist review, limited, declined, or
                refunded. Where we suspect fraud or illegal activity we may report it to the relevant authorities. This
                processing is carried out under our legitimate interests (Art. 6(1)(f)) and to comply with our legal
                duties as a pharmacy.
              </p>
            </div>
          </section>

          {/* Sharing */}
          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2.5 text-xl">
              <UserCheck width={22} height={22} className="text-primary" /> 4. Who we share your data with
            </h2>
            <div className="overflow-hidden rounded-base border border-line">
              {sharing.map((s) => (
                <div key={s.who} className="border-b border-line p-4 last:border-0 sm:flex sm:gap-6">
                  <p className="text-sm font-semibold text-secondary sm:w-1/2">{s.who}</p>
                  <p className="mt-1.5 text-sm sm:mt-0 sm:w-1/2">{s.why}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              We never sell your data. Any third party only receives the minimum data needed for its purpose.
            </p>
          </section>

          {/* Retention + transfers */}
          <section className="mb-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-base border border-line p-6">
              <h2 className="mb-3 flex items-center gap-2.5 text-lg">
                <Clock width={20} height={20} className="text-primary" /> 5. How long we keep data
              </h2>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>Clinical &amp; pharmacy records: <strong className="text-secondary">8 years</strong> after your last consultation or supply</li>
                <li>Financial records: <strong className="text-secondary">6 years</strong> (tax law)</li>
                <li>Marketing preferences: until you withdraw consent</li>
                <li>CCTV/security logs (if any): up to 31 days</li>
              </ul>
            </div>
            <div className="rounded-base border border-line p-6">
              <h2 className="mb-3 flex items-center gap-2.5 text-lg">
                <ShieldCheck width={20} height={20} className="text-primary" /> 6. International transfers
              </h2>
              <p className="text-sm leading-relaxed">
                We keep your data in the UK. If a supplier ever processes it outside the UK, we ensure an approved
                transfer mechanism (such as UK adequacy or an International Data Transfer Agreement) is in place first.
              </p>
            </div>
          </section>

          {/* Rights */}
          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2.5 text-xl">7. Your rights</h2>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {rights.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm font-medium text-secondary">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check width={11} height={11} />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed">
              To exercise any right, email{" "}
              <a href={`mailto:${site.contact.email}`} className="font-semibold text-primary underline underline-offset-2">
                {site.contact.email}
              </a>{" "}
              — we respond within one month. You will never be discriminated against for exercising your rights.
            </p>
          </section>

          {/* ICO complaint */}
          <section id="ico" className="scroll-mt-28">
            <div className="card !bg-secondary text-white p-7 md:p-9">
              <h2 className="text-xl !text-white">8. Raising a concern with the ICO</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                First talk to us — we will always try to resolve data concerns quickly. But you have the right to
                complain directly to the Information Commissioner&apos;s Office, the UK supervisory authority for data
                protection, at any time without charge:
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {icoDetails.map((d) => (
                  <div key={d.label} className="rounded-xl bg-white/[0.06] p-4">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                      <d.icon width={15} height={15} /> {d.label}
                    </p>
                    {d.href ? (
                      <a href={d.href} target="_blank" rel="noopener noreferrer" className="mt-1.5 block break-words text-sm font-semibold text-white underline underline-offset-2 hover:text-primary">
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-sm leading-relaxed text-white">{d.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs text-body">
              This notice was last reviewed in August 2026 and may be updated from time to time; the current version is
              always published on this page. Questions? Contact our Data Protection Lead at {site.contact.email}.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
