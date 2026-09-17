import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowRight, Check, Clock, PhoneCall } from "../icons";

const facilities = [
  "GPhC-Registered Pharmacy",
  "NHS prescriptions",
  "Private prescriptions",
  "Pharmacy First Service",
  "Confidential Online Consultations",
  "UK-Licensed Medicines",
  "Discreet Tracked Delivery",
  "Free Delivery Service",
];

function MediaComposition() {
  return (
    <div className="relative mx-auto max-w-[520px]">
      <svg viewBox="0 0 520 560" fill="none" className="w-full" aria-hidden>
        <defs>
          <linearGradient id="ab1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ECF5FB" />
            <stop offset="100%" stopColor="#CCF2F8" />
          </linearGradient>
        </defs>
        <rect x="20" y="20" width="480" height="520" rx="40" fill="url(#ab1)" />
        {/* pharmacist character (abstract) */}
        <circle cx="260" cy="200" r="70" fill="#fff" />
        <path d="M140 460c0-66 54-120 120-120s120 54 120 120z" fill="#fff" />
        <rect x="238" y="150" width="44" height="44" rx="12" fill="#00BDE0" opacity="0.15" />
        <path d="M246 158h28v28h-28z" fill="none" />
        <path d="M252 164v20M242 174h20" stroke="#00BDE0" strokeWidth="6" strokeLinecap="round" />
        <circle cx="260" cy="196" r="34" fill="#031B4E" opacity="0.08" />
        <path d="M226 214c8 14 62 14 68 0" stroke="none" />
        <rect x="212" y="330" width="96" height="26" rx="13" transform="rotate(-40 212 330)" fill="#031B4E" />
        <circle cx="318" cy="292" r="16" fill="none" stroke="#031B4E" strokeWidth="7" />
        <rect x="30" y="30" width="460" height="500" rx="32" fill="none" stroke="#00BDE0" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="10 10" />
      </svg>

      {/* Video call chip */}
      {/* <div className="animate-floaty absolute -right-3 top-10 rounded-2xl bg-secondary p-3 shadow-card md:-right-8">
        <p className="mb-2 rounded-lg bg-primary px-3 py-1 text-xs font-semibold text-white">Video Consultation</p>
        <div className="flex gap-1.5">
          {["#ffffff33", "#ffffff33", "#ffffff", "#ffffff33", "#ffffff33"].map((bg, i) => (
            <span key={i} className="flex h-7 w-7 items-center justify-center rounded-md" style={{ background: bg }}>
              <span className={`block h-1.5 w-1.5 rounded-full ${i === 2 ? "bg-primary" : "bg-white/50"}`} />
            </span>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default function AboutFacilities() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="blob-navy pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full" />
      <div className="container-cm grid items-center gap-12 lg:grid-cols-2">
        <div className="m-b30 relative order-2 lg:order-1">
          <MediaComposition />

          {/* Open hours card */}
          <div className="animate-floaty-slow absolute -bottom-6 -left-2 hidden w-56 rounded-base bg-primary p-5 text-white shadow-card sm:block md:-left-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                <Clock width={22} height={22} />
              </span>
              <h4 className="text-lg font-semibold text-white">Open Hours</h4>
            </div>
            <ul className="mt-4 space-y-1.5 text-[13px]">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((d) => (
                <li key={d} className="flex justify-between gap-2">
                  <span>{d}</span> <strong className="font-semibold">09:30 – 17:30</strong>
                </li>
              ))}
            </ul>
            <br />
            <p>We are open on bank holidays and all other public holidays.</p>
          </div>
          
        </div>

        <div className="order-1 lg:order-2">
          <div className="section-head mb-8">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Why patients trust us
            </p>
            <h2 className="title">Trusted Pharmacy Care Delivered to you</h2>
            <p className="mt-4 leading-relaxed">
              Trusted pharmacy services delivered to you. Our service are designed to be safe, discreet, and convenient for all your health needs. All medications are distributed from our registered pharmacy located in Luton.
            </p>
          </div>

          <ul className="mb-9 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {facilities.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm font-medium text-secondary">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check width={13} height={13} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/contact-us" className="btn btn-lg btn-secondary">
              Appointment <ArrowRight width={17} height={17} />
            </Link>
            {/* <div className="info-widget flex items-center gap-3.5">
              <span className="dz-ring-effect relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" aria-hidden />
                <PhoneCall width={20} height={20} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-secondary">Contact us</span>
                <a href={site.contact.phoneHref} className="text-base font-semibold text-primary">
                  {site.contact.phone}
                </a>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
