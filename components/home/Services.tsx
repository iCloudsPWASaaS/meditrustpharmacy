import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bandage,
  Bug,
  Check,
  ClipboardCheck,
  FileText,
  Home,
  Kidney,
  Nose,
  Throat,
  Virus,
} from "../icons";

const pharmacyFirst = [
  { icon: Throat, title: "Acute Sore Throat", desc: "Assessment for sore throat and treatment with antibiotics if clinically appropriate." },
  { icon: Nose, title: "Sinusitis", desc: "Diagnosis and treatment for sinus infections following pharmacist consultation & review." },
  { icon: Kidney, title: "Urinary Tract Infection", desc: "Confidential UTI consultation with treatment for eligible patients." },
  { icon: Bug, title: "Infected Skin Bite", desc: "Assessment for infected skin bites and treatment with antibiotics after pharmacist consultation & review." },
  { icon: Virus, title: "Shingles", desc: "Assessment for shingles and treatment after pharmacist consultation & review." },
  { icon: Bandage, title: "Impetigo", desc: "Assessment for impetigo and treatment after pharmacist consultation & review." },
];

const prescriptions = [
  {
    icon: ClipboardCheck,
    title: "NHS Prescription Service",
    desc: "Request your NHS prescriptions through our pharmacy and have your medication delivered directly to your door. Our convenient delivery service means you can manage your prescriptions from the comfort of your home, without the need to visit a pharmacy.",
    highlight: "Free Delivery",
  },
  {
    icon: FileText,
    title: "Private Prescriptions",
    desc: "We accept private prescriptions from UK registered prescribers. Simply post your prescription securely via a tracked postal service, Once received, your prescription will be processed by our pharmacy team and your medication will be securely delivered to you.",
    highlight: "We Accept Private Prescriptions",
  },
];

const careHomeFeatures = [
  "Dosette boxes (blister packs) prepared by our pharmacists",
  "Regular, scheduled deliveries to your care home",
  "Medication reviews and clinical support",
  "Emergency supply arrangements when needed",
  "Direct liaison with GPs and care home staff",
  "Free delivery on all care home orders",
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-light">
      <div className="container-cm">
        {/* Pharmacy First */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="section-head max-w-xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
              NHS Pharmacy First
            </p>
            <h2 className="title">
              Conditions We Can
              <br />
              Treat Today
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Through the NHS Pharmacy First service, our pharmacists can assess and
              supply treatment for the following conditions — no GP appointment needed.
            </p>
          </div>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3 mb-16">
          {pharmacyFirst.map((s, i) => (
            <article key={s.title} className={`card card-hover group ${i === 0 ? "!bg-primary" : ""}`}>
              <div className={`icon-box mb-5 transition-colors group-hover:bg-primary group-hover:text-white ${i === 0 ? "!bg-white/20 !text-white" : ""}`}>
                <s.icon width={26} height={26} />
              </div>
              <h3 className={`mb-2.5 text-lg font-semibold ${i === 0 ? "text-white" : ""}`}>{s.title}</h3>
              <p className={`text-sm leading-relaxed ${i === 0 ? "text-white/85" : ""}`}>{s.desc}</p>
              <div className={`mt-5 flex items-center justify-between border-t pt-4 ${i === 0 ? "border-white/25" : "border-line"}`}>
                {/* <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide ${i === 0 ? "text-white" : "text-body"}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-white" : "bg-primary"}`} /> GPhC Regulated
                </span> */}
                <Link
                  href="/contact-us"
                  aria-label={`Learn more about ${s.title}`}
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                    i === 0 ? "bg-white text-primary hover:bg-secondary hover:text-white" : "bg-light text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  <ArrowUpRight width={17} height={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Prescriptions */}
        <div style={{ marginTop: "4rem" }} className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="section-head max-w-xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
              Prescriptions
            </p>
            <h2 className="title">
              NHS &amp; Private
              <br />
              Prescription Services
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Whether you use the NHS or have a private prescription, our pharmacy
              team will dispense and deliver your medicines safely.
            </p>
          </div>
        </div>

        <div className="grid gap-7 sm:grid-cols-2">
          {prescriptions.map((s, i) => (
            <article key={s.title} className="card card-hover group">
              <div className="icon-box mb-5 transition-colors group-hover:bg-primary group-hover:text-white">
                <s.icon width={26} height={26} />
              </div>
              {/* <span className="mb-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                {s.highlight}
              </span> */}
              <h3 className="mb-2.5 text-lg font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                {/* <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-body">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> GPhC Regulated
                </span> */}
                <Link
                  href="/consulting-prescribing"
                  aria-label={`Learn more about ${s.title}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-light text-primary transition hover:bg-primary hover:text-white"
                >
                  <ArrowUpRight width={17} height={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Care Homes */}
        <div style={{ marginTop: "4rem" }} className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="section-head max-w-xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
              Care Homes
            </p>
            <h2 className="title">
              Pharmacy Services
              <br />
              for Care Homes
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-body">
              We work with care homes across the UK to provide reliable pharmacy
              support — from dosette box preparation to regular deliveries and
              clinical advice for your care team.
            </p>
          </div>
        </div>

        <div className="card !bg-secondary mb-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-primary">
              <Home width={30} height={30} />
            </div>
            <div className="flex-1">
              <h3 className="mb-4 text-xl font-semibold !text-white">
                Dedicated Care Home Pharmacy Support
              </h3>
              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/75">
                Our pharmacy team understands the unique demands of care home
                medication management. We handle everything from prescription
                ordering to delivery, so your staff can focus on resident care.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {careHomeFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-medium text-white/85">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check width={13} height={13} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact-us"
                className="btn mt-8 bg-white !text-secondary hover:!bg-secondary hover:!text-white"
              >
                Get in Touch <ArrowRight width={16} height={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: "5rem" }} className="flex flex-wrap items-center justify-between gap-5 rounded-lg bg-primary px-7 py-6 text-white">
          <p className="max-w-xl text-sm leading-relaxed text-white/90">
            Not sure which service is right for you? Our pharmacy team can advise on
            the best option — whether it's a Pharmacy First consultation, an NHS
            prescription, or a private prescription supply.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/consulting-prescribing" className="btn bg-white !text-secondary hover:!bg-secondary hover:!text-white">
              Start Consultation <ArrowRight width={16} height={16} />
            </Link>
            <Link href="/contact-us" className="btn btn-outline-light">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
