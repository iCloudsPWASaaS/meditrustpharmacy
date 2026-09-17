import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FeedbackForm from "@/components/FeedbackForm";
import { site } from "@/lib/site";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Star,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Feedback & Complaints",
  description:
    "How to give feedback and raise complaints about Meditrust Pharmacy, including timescales and independent escalation routes.",
};

const channels = [
  /* {
    icon: PhoneCall,
    title: "By phone",
    lines: [`${site.contact.phone}`, `Mon – Sat, ${site.contact.hours.split(": ")[1]}`],
    href: site.contact.phoneHref,
    linkLabel: "Call the pharmacy team",
  }, */
  {
    icon: Mail,
    title: "By email",
    lines: [`General feedback & Complaints: ${site.contact.supportEmail}`],
    href: `mailto:${site.contact.complaintsEmail}`,
    linkLabel: "Email our complaints lead",
  },
  {
    icon: MapPin,
    title: "In writing",
    lines: ["FAO: The Pharmacy Manager", `${site.pharmacy.addressLines.join(", ")}`],
    href: "#feedback-form",
    linkLabel: "Or use the form below",
  },
];

const stages = [
  {
    step: "Stage 1 — Local resolution",
    body: [
      "Raise your concern with any member of the pharmacy team, or use any of the channels on this page. We will acknowledge within 3 working days.",
      "Our complaints lead (the superintendent pharmacist) investigates and sends a written response within 3 working days. If more time is needed we will tell you why and keep you updated.",
    ],
  },
  {
    step: "Stage 2 — Review by the owner",
    body: [
      `If you are not satisfied with our response, you can ask for a review by the pharmacy owner (${site.owner.name}), who will respond within a further 3 working days.`,
    ],
  },
  {
    step: "Independent escalation",
    body: [
      "If you remain unhappy, or would prefer to raise concerns outside the pharmacy, you can contact:",
      "• NHS England — for complaints about NHS services (call 0300 311 22 33)",
      "• The General Pharmaceutical Council — concerns about a pharmacist or pharmacy: pharmacyregulation.org",
      "• The Parliamentary and Health Service Ombudsman — after an NHS complaint has been through NHS England's process",
    ],
  },
];

export default function FeedbackPage() {
  return (
    <>
      <PageHero title="Feedback & Complaints" crumb="Feedback & Complaints" />

      <section className="section-padding">
        <div className="container-cm">
          <div className="mb-12 mx-auto max-w-3xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              We listen &amp; improve
            </p>
            <h2 className="text-3xl md:text-[40px] md:leading-snug">Your Feedback Shapes Our Pharmacy</h2>
            <p className="mt-4 leading-relaxed">
              Whether it&apos;s praise for our team or a concern about your care, every message is read and acted upon.
              Raising a complaint will never affect the standard of care you receive.
            </p>
          </div>

          {/* Channels */}
          <div className="mb-14 grid gap-6 md:grid-cols-3">
            {channels.map((c) => (
              <article key={c.title} className="card card-hover flex flex-col">
                <span className="icon-box mb-4">
                  <c.icon width={24} height={24} />
                </span>
                <h3 className="mb-2 text-lg">{c.title}</h3>
                <ul className="flex-1 space-y-1 text-sm leading-relaxed">
                  {c.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                <a
                  href={c.href}
                  className="mt-4 inline-flex items-center gap-1.5 font-semibold text-primary hover:text-secondary"
                >
                  {c.linkLabel} <ArrowUpRight width={14} height={14} />
                </a>
              </article>
            ))}
          </div>

          {/* Procedure */}
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <div className="mb-6 flex items-center gap-3.5">
                <span className="icon-box">
                  <MessageSquare width={24} height={24} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Complaints procedure</p>
                  <h2 className="text-xl md:text-2xl">How Your Complaint Is Handled</h2>
                </div>
              </div>

              <ol className="space-y-6">
                {stages.map((s) => (
                  <li key={s.step} className="rounded-base border border-line p-6">
                    <h3 className="mb-2 font-semibold text-primary">{s.step}</h3>
                    {s.body.map((p, i) => (
                      <p key={i} className="mt-2 text-sm leading-relaxed first:mt-0">
                        {p}
                      </p>
                    ))}
                  </li>
                ))}
              </ol>

              <p className="mt-6 rounded-base bg-primary/5 p-5 text-sm leading-relaxed">
                <strong className="text-secondary">Response times at a glance:</strong> acknowledgement within{" "}
                <strong>3 working days</strong>, full written response within{" "}
                <strong>3 working days</strong>. Urgent safety concerns are escalated to the superintendent pharmacist
                the same day.
              </p>
            </div>

            <div id="feedback-form" className="scroll-mt-28">
              <FeedbackForm />

              {/* <div className="card mt-6 !bg-light">
                <h3 className="mb-3 flex items-center gap-2 text-lg">
                  <ShieldCheck width={20} height={20} className="text-primary" /> Independent reviews
                </h3>
                <p className="text-sm leading-relaxed">
                  You can also leave public feedback about our pharmacy via the{" "}
                  <a
                    href="https://www.nhs.uk/services/pharmacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline underline-offset-2"
                  >
                    NHS website
                  </a>
                  . We monitor these reviews and respond where appropriate.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-secondary">
                  <span className="flex gap-0.5 text-[#FFB01F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} width={15} height={15} />
                    ))}
                  </span>
                  4.8 average from 12k+ ratings
                </div>
              </div> */}

              <div className="card mt-6">
                <h3 className="mb-3 flex items-center gap-2 text-lg">
                  <Clock width={20} height={20} className="text-primary" /> When we&apos;re available
                </h3>
                <p className="text-sm leading-relaxed">{site.contact.hours}</p>
                <Link href="/pharmacy-information" className="mt-3 inline-block text-sm font-semibold text-primary underline underline-offset-2">
                  See full contact details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
