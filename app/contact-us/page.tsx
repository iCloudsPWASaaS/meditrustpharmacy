import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  Mail,
  MapPin,
  PhoneCall,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} — phone, email and address details for our GPhC-registered pharmacy.`,
};

const cards = [
  /* {
    icon: PhoneCall,
    title: "Call Us",
    line1: site.contact.phone,
    href: site.contact.phoneHref,
    cta: "Call now",
  }, */
  {
    icon: Mail,
    title: "Send us a Mail",
    line1: site.contact.email,
    href: `mailto:${site.contact.email}`,
    cta: "Email us",
  },
];

const hours = [
  ["Monday", "09:30 – 17:30"],
  ["Tuesday", "09:30 – 17:30"],
  ["Wednesday", "09:30 – 17:30"],
  ["Thursday", "09:30 – 17:30"],
  ["Friday", "09:30 – 17:30"],
  ["Saturday & Sunday", "Closed — 111 for urgent advice"],
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero title="Get in Touch With Us" crumb="Contact Us" />

      <section className="section-padding">
        <div className="container-cm">
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {cards.map((c) => (
              <article key={c.title} className="card card-hover text-center">
                <span className="icon-box mx-auto mb-4 !h-16 !w-16 !rounded-full">
                  <c.icon width={26} height={26} />
                </span>
                <h2 className="mb-1.5 text-lg">{c.title}</h2>
                <p className="break-words font-semibold text-primary">{c.line1}</p>
                <a
                  href={c.href}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-light px-6 py-2.5 text-sm font-semibold text-secondary transition hover:bg-primary hover:text-white"
                >
                  {c.cta} <ArrowRight width={15} height={15} />
                </a>
              </article>
            ))}
            <article className="card card-hover text-center">
              <span className="icon-box mx-auto mb-4 !h-16 !w-16 !rounded-full">
                <MapPin width={26} height={26} />
              </span>
              <h2 className="mb-1.5 text-lg">Write to Us</h2>
              <address className="not-italic leading-relaxed">
                {site.pharmacy.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <a
                href="https://www.pharmacyregulation.org/registers/pharmacy"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-light px-6 py-2.5 text-sm font-semibold text-secondary transition hover:bg-secondary hover:text-white"
              >
                GPhC No. {site.pharmacy.gphcNumber} <ArrowRight width={15} height={15} />
              </a>
            </article>
          </div>

          <div className="grid items-start gap-10 rounded-lg bg-light p-7 md:p-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-2xl md:text-[32px] md:leading-snug">Opening Time</h2>
              <ul className="mt-6 space-y-3">
                {hours.map(([d, t]) => (
                  <li
                    key={d}
                    className="flex flex-wrap justify-between gap-2 border-b border-line pb-3 text-sm last:border-0"
                  >
                    <span className="font-medium text-body">{d}</span>
                    <strong className="text-secondary">{t}</strong>
                  </li>
                ))}
                <p>We are open on bank holidays and all other public holidays.</p>
              </ul>
              <p className="mt-6 flex items-start gap-3 rounded-base bg-white p-4 text-sm leading-relaxed shadow-soft">
                <Clock width={18} height={18} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  <strong className="text-secondary">Outside our opening hours:</strong> for urgent advice, an urgent
                  repeat medicine, or an emergency supply of a prescription, call{" "}
                  <a href="tel:111" className="font-semibold text-primary">NHS 111</a> (free, 24/7) or visit{" "}
                  <a href="https://111.nhs.uk" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-2">
                    111.nhs.uk
                  </a>{" "}
                  — NHS 111 can also refer you to an out-of-hours GP. In a life-threatening emergency, always call{" "}
                  <a href="tel:999" className="font-semibold text-primary">999</a>.
                </span>
              </p>
            </div>

            <form className="card grid gap-4 sm:grid-cols-2">
              <h2 className="text-xl sm:col-span-2">Send a Message</h2>
              <input required placeholder="Your Name" aria-label="Your name" className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
              <input required type="email" placeholder="Your Email" aria-label="Your email" className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
              <select defaultValue="" required aria-label="Reason for contact" className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:col-span-2">
                <option value="" disabled>
                  Reason for Contact
                </option>
                <option>Book an appointment</option>
                <option>Question about an order</option>
                <option>Registration verification request</option>
                <option>Feedback or complaint</option>
              </select>
              <textarea rows={5} placeholder="Message" aria-label="Message" className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:col-span-2" />
              <button type="submit" className="btn btn-primary sm:col-span-2">
                Submit <ArrowRight width={16} height={16} />
              </button>
            </form>
          </div>

          {/* <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-body">
            <CalendarCheck width={16} height={16} className="text-primary" />
            Prefer to talk first? Call{" "}
            <a href={site.contact.phoneHref} className="font-semibold text-primary">
              {site.contact.phone}
            </a>{" "}
            during opening hours.
          </p> */}
        </div>
      </section>
    </>
  );
}
