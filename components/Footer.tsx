import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { ArrowRight, Check, Mail, MapPin, PhoneCall, ShieldCheck, socialIcons, Star } from "./icons";

const serviceLinks = [
  "Acute Sore Throat",
  "Sinusitis",
  "Urinary Tract Infection",
  "Infected Skin Bite",
  "Shingles",
  "Impetigo",
  "NHS Prescription Service",
  "Private Prescriptions",
];

const usefulLinks = [
  { label: "Pharmacy Information", href: "/pharmacy-information" },
  /* { label: "Consulting & Prescribing", href: "/consulting-prescribing" }, */
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Feedback & Complaints", href: "/feedback-and-complaints" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Check GPhC Pharmacy Register", href: site.registers.pharmacyRegisterUrl, ext: true },
  //{ label: "Check GPhC Pharmacist Register", href: site.registers.pharmacistRegisterUrl, ext: true },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-secondary text-white/70">
      {/* Regulatory strip */}
      <div className="border-b border-white/10 bg-white/[0.03]">
        <div className="container-cm flex flex-col items-start gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="flex items-start gap-3 text-sm leading-relaxed text-white/80">
            <ShieldCheck width={22} height={22} className="mt-0.5 shrink-0 text-primary" />
            <span>
              <strong className="font-semibold text-white">{site.pharmacy.name}</strong> is registered with the General
              Pharmaceutical Council (GPhC) — <strong className="font-semibold text-primary">GPhC No. {site.pharmacy.gphcNumber}</strong>.
              Verify at{" "}
              <a href={site.registers.pharmacyRegisterUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-white">
                pharmacyregulation.org
              </a>
            </span>
          </p>
          {/* <div className="flex items-center gap-1 text-[#FFB01F]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} width={16} height={16} />
            ))}
            <span className="ml-2 text-sm font-medium text-white">4.8 · Excellent</span>
          </div> */}
        </div>
      </div>

      {/* Main footer */}
      <div className="container-cm grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {site.name} is a UK distance-selling pharmacy providing safe, regulated online consultations, private
            prescriptions and medicine supplies — overseen by our superintendent pharmacist and GPhC-registered team.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin width={17} height={17} className="mt-0.5 shrink-0 text-primary" />
              <span>{site.pharmacy.addressLines.join(", ")}</span>
            </li>
            {/* <li>
              <a href={site.contact.phoneHref} className="flex items-center gap-3 transition hover:text-white">
                <PhoneCall width={17} height={17} className="shrink-0 text-primary" /> {site.contact.phone}
              </a>
            </li> */}
            <li>
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 break-all transition hover:text-white">
                <Mail width={17} height={17} className="shrink-0 text-primary" /> {site.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Our services">
          <h4 className="mb-5 text-lg font-semibold text-white">Our Services</h4>
          <ul className="space-y-3 text-sm">
            {serviceLinks.map((l) => (
              <li key={l}>
                <Link href="/#services" className="transition hover:text-primary">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Useful links">
          <h4 className="mb-5 text-lg font-semibold text-white">Useful Links</h4>
          <ul className="space-y-3 text-sm">
            {usefulLinks.map((l) => (
              <li key={l.label}>
                {l.ext ? (
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-primary">
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href} className="transition hover:text-primary">
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div id="newsletter">
          <h4 className="mb-5 text-lg font-semibold text-white">Health Updates</h4>
          <p className="mb-4 text-sm">Get pharmacy safety tips and service news straight to your inbox.</p>
          <form className="flex overflow-hidden rounded-full border border-white/15 bg-white/[0.06] p-1.5 focus-within:border-primary">
            <input
              type="email"
              required
              placeholder="Your Email Address"
              aria-label="Email address for newsletter"
              className="w-full min-w-0 bg-transparent px-4 text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <button type="submit" aria-label="Subscribe" className="btn shrink-0 !rounded-full !bg-primary !px-4 !py-2.5 hover:!bg-primary-hover">
              <ArrowRight width={16} height={16} />
            </button>
          </form>
          <div className="mt-6 flex gap-2">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary"
                >
                  <Icon width={15} height={15} />
                </a>
              );
            })}
          </div>
          <ul className="mt-6 space-y-2 text-xs text-white/60">
            <li className="flex items-center gap-2">
              <Check width={14} height={14} className="text-primary" /> Regulated by the GPhC
            </li>
            {/* <li className="flex items-center gap-2">
              <Check width={14} height={14} className="text-primary" /> GMC-registered prescribers
            </li> */}
            <li className="flex items-center gap-2">
              <Check width={14} height={14} className="text-primary" /> Discreet, tracked UK delivery
            </li>
          </ul>
        </div>
      </div>

      {/* Out-of-hours notice */}
      <div className="border-b border-white/10">
        <div className="container-cm flex flex-col gap-1.5 py-4 text-center text-[13px] leading-relaxed text-white/70 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-2 md:text-left">
          <span className="font-semibold text-white">When we are closed:</span>
          <span>
            for urgent advice or an emergency supply of a prescription call{" "}
            <a href="tel:111" className="font-semibold text-primary hover:text-white">NHS 111</a> (free, 24/7) or visit{" "}
            <a href="https://111.nhs.uk" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-white underline underline-offset-2">
              111.nhs.uk
            </a>{" "}
            — NHS 111 can also refer you to an out-of-hours GP.
          </span>
          <span>
            In a life-threatening emergency, always call{" "}
            <a href="tel:999" className="font-semibold text-primary hover:text-white">999</a>.
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-cm flex flex-col items-center justify-between gap-3 py-5 text-center text-[13px] md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All Rights Reserved. Registered in England &amp; Wales.
          </p>
          <p className="text-white/50">
            Hussain Healthcare Group Ltd - 16524576, Superintendent Pharmacist: {site.superintendentPharmacist.name} - GPHC 2228430
          </p>
          <p className="text-white/50">
            Premises GPhC Number – To Be Confirmed
          </p>
        </div>
      </div>
    </footer>
  );
}
