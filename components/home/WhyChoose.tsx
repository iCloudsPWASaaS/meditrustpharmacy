import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Stethoscope, Truck, UserCheck } from "../icons";

const items = [
  {
    icon: ShieldCheck,
    title: "More Experience",
    desc: "A fully GPhC-registered pharmacy with over 15 years serving patients across the UK.",
  },
  {
    icon: UserCheck,
    title: "Seamless Care",
    desc: "From online consultation to doorstep delivery — one connected, confidential service.",
  },
  {
    icon: Stethoscope,
    title: "The Right Answers?",
    desc: "Every order is clinically checked by our superintendent pharmacist before dispatch.",
  },
  {
    icon: Truck,
    title: "Unparalleled Delivery",
    desc: "Discreet, temperature-aware packaging with tracked next-day UK delivery.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="section-padding bg-light">
      <div className="container-cm grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="section-head mb-10 max-w-lg">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
              Why choose us
            </p>
            <h2 className="title">Why Choose Us for Your Health Care Needs</h2>
          </div>
          <ul className="mb-9 space-y-3.5">
            {["Every prescriber is GMC or GPhC registered", "Medicines sourced only from UK licensed wholesalers", "Clear pricing — no hidden consultation fees"].map((t) => (
              <li key={t} className="flex items-center gap-3 font-medium text-secondary">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Check width={14} height={14} />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <Link href="/contact-us" className="btn btn-primary">
            Appointment <ArrowRight width={16} height={16} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((it) => (
            <article key={it.title} className="card card-hover">
              <span className="icon-box mb-4">
                <it.icon width={24} height={24} />
              </span>
              <h3 className="mb-2 text-lg">{it.title}</h3>
              <p className="text-sm leading-relaxed">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
