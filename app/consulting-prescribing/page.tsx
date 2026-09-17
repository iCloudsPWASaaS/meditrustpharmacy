import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";
import {
  ArrowUpRight,
  Check,
  ClipboardCheck,
  MessageSquare,
  ShieldCheck,
  UserCheck,
  Video,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Consulting & Prescribing Services",
  description:
    "How our online consultations work, who prescribes, and how to verify every prescriber's registration with the GMC or GPhC.",
};

const steps = [
  {
    title: "1. Consultation",
    desc: "You will have a confidential consultation with one of our pharmacists, who will discuss your symptoms, medical history, current medicines and any allergies to assess your healthcare needs.",
  },
  {
    title: "2. Consultation review",
    desc: "The pharmacist will then review your consultation and assess your symptoms to determine the most appropriate treatment.",
  },
  /* {
    title: "3. Clinical decision",
    desc: "If treatment is clinically appropriate a private prescription is issued. If not, we explain why and advise on alternatives — you are not charged for an declined consultation.",
  }, */
  {
    title: "3. Dispensing & supply",
    desc: "Our pharmacy dispenses, performs a final clinical check, and dispatches your medicine in discreet tracked packaging.",
  },
];

const safeguards = [
  "Every prescription requires a valid consultation — we never prescribe without one",
  "Age and identity checks are completed before any medicine is supplied",
  "Prescriptions are only issued within the prescriber's area of competence",
  "All orders receive a final safety check by a pharmacist before dispatch",
  "We do not supply addictive or 'lifestyle' medicines outside strict clinical protocols",
  "Consultation records are stored securely in line with UK GDPR",
];

export default function ConsultingPrescribingPage() {
  return (
    <>
      <PageHero title="Pharmacy First Consultation Services" crumb="Pharmacy First Consultation" />

      <section className="section-padding">
        <div className="container-cm">
          <div className="card mb-10 flex flex-col gap-6 !bg-secondary p-8 text-white md:flex-row md:items-center md:p-10">
            {/* <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-primary">
              <Video width={30} height={30} />
            </span> */}
            {/* <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-soft text-primary transition group-hover:bg-primary group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span> */}
            <div>
              <h2 className="text-xl !text-white md:text-2xl">Medicines prescribed after an online consultation</h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/75">
                Our Pharmacy First service allows eligible patients to receive advice and treatment for a range of common conditions without needing to visit a GP. Your consultation will be reviewed by a pharmacist, who will assess your symptoms and determine the most appropriate treatment. Where clinically appropriate, the pharmacist may supply or prescribe treatment, including antibiotics where the relevant clinical criteria are met
              </p>
            </div>
          </div>

          {/* Prescribers */}
          <div className="mb-12">
            {/* <div className="mb-6 flex items-center gap-3.5">
              <span className="icon-box">
                <UserCheck width={24} height={24} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Your prescribers</p>
                <h2 className="text-xl md:text-2xl">Name, Registration Body & Registration Number</h2>
              </div>
            </div> */}

            {/* <div className="grid gap-6 md:grid-cols-3">
              {site.prescribers.map((p) => (
                <article key={p.regNumber} className="card card-hover">
                  <h3 className="text-lg">{p.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-primary">{p.role}</p>
                  <dl className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
                    <div className="flex justify-between gap-3">
                      <dt className="font-semibold text-secondary">Registration body</dt>
                      <dd className="text-right">{p.body}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="font-semibold text-secondary">Registration No.</dt>
                      <dd className="font-bold text-primary">{p.regNumber}</dd>
                    </div>
                  </dl>
                  <a
                    href={p.checkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-light px-4 py-2 text-xs font-bold uppercase tracking-wide text-secondary transition hover:bg-primary hover:text-white"
                  >
                    Check this registration <ArrowUpRight width={13} height={13} />
                  </a>
                </article>
              ))}
            </div> */}

            {/* <p className="mt-5 rounded-base bg-primary/5 p-4 text-sm leading-relaxed">
              You can verify any prescriber above on the public register before your consultation:
              doctors on the{" "}
              <a href="https://www.gmc-uk.org/doctors" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-2">
                GMC register
              </a>{" "}
              and pharmacist prescribers on the{" "}
              <a href={site.registers.pharmacistRegisterUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-2">
                GPhC pharmacist register
              </a>
              .
            </p> */}
          </div>

          {/* Process */}
          <div className="mb-12 grid gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-3.5">
                <span className="icon-box">
                  <ClipboardCheck width={24} height={24} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">The process</p>
                  <h2 className="text-xl md:text-2xl">How Your Online Consultation Works</h2>
                </div>
              </div>
              <ol className="space-y-4">
                {steps.map((s) => (
                  <li key={s.title} className="rounded-base border border-line p-5">
                    <h3 className="mb-1 font-semibold text-primary">{s.title}</h3>
                    <p className="text-sm leading-relaxed">{s.desc}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* <div>
              <div className="mb-6 flex items-center gap-3.5">
                <span className="icon-box">
                  <ShieldCheck width={24} height={24} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Clinical governance</p>
                  <h2 className="text-xl md:text-2xl">Our Safety Safeguards</h2>
                </div>
              </div>
              <ul className="space-y-3">
                {safeguards.map((s) => (
                  <li key={s} className="flex items-start gap-3 rounded-base border border-line p-4 text-sm font-medium text-secondary">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check width={13} height={13} />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5 rounded-lg bg-primary px-7 py-6 text-white">
            <p className="max-w-xl text-sm leading-relaxed text-white/90">
              If you would like to use this service, please click *“Contact Us”* below and complete the form. A member of our team will get in touch with you as soon as possible.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn bg-white !text-secondary hover:!bg-secondary hover:!text-white">
                Contact Us
              </Link>
              <Link href="/feedback-and-complaints" className="btn btn-outline-light">
                <MessageSquare width={15} height={15} /> Feedback
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
