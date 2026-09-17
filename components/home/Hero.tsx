import Link from "next/link";
import { site } from "@/lib/site";
import { AvatarGroup, AvatarInitials } from "../AvatarInitials";
import { ArrowRight, ShieldCheck, Star } from "../icons";

function PillIllustration() {
  return (
    <svg viewBox="0 0 420 420" fill="none" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="cap1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00BDE0" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
        <linearGradient id="cap2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>
        <pattern id="heroDots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="#00BDE0" opacity="0.25" />
        </pattern>
      </defs>

      {/* backdrop rings */}
      <circle cx="210" cy="210" r="200" fill="#ECF5FB" />
      <circle cx="210" cy="210" r="150" fill="url(#heroDots)" />
      <circle cx="210" cy="210" r="120" fill="#fff" opacity="0.9" />

      {/* big capsule */}
      <g transform="rotate(-38 210 210)">
        <rect x="90" y="180" width="240" height="62" rx="31" fill="url(#cap1)" />
        <path d="M90 211a31 31 0 0 1 31-31h89v62h-89a31 31 0 0 1-31-31z" fill="url(#cap2)" />
        <line x1="209" y1="186" x2="209" y2="236" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="2" strokeDasharray="4 6" />
        <rect x="118" y="204" width="34" height="7" rx="3.5" fill="#fff" opacity="0.85" />
        <rect x="248" y="204" width="52" height="7" rx="3.5" fill="#fff" opacity="0.6" />
      </g>

      {/* small tablets */}
      <g transform="translate(96 96)">
        <circle r="26" fill="#031B4E" opacity="0.92" />
        <path d="M-8 -14h16v6H8v16H-8V-8h-16v-16h16z" transform="scale(0.9) translate(0 -1)" fill="#fff" />
      </g>
      <g transform="translate(330 300) rotate(18)">
        <rect x="-30" y="-12" width="60" height="24" rx="12" fill="#fff" stroke="#E1EBF1" strokeWidth="2" />
        <line x1="0" y1="-12" x2="0" y2="12" stroke="#ECF5FB" strokeWidth="2" />
      </g>

      {/* cross sparkles */}
      <path d="M340 84l6 14 14 6-14 6-6 14-6-14-14-6 14-6z" fill="#00BDE0" opacity="0.85" />
      <path d="M70 320l5 11 11 5-11 5-5 11-5-11-11-5 11-5z" fill="#F59E0B" opacity="0.9" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-secondary">
      <div className="blob-primary pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} aria-hidden />

      <span className="absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/40 xl:block">
        24/7 Pharmacy Service
      </span>

      <div className="container-cm relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
        {/* Left */}
        <div className="max-w-xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <ShieldCheck width={15} height={15} /> GPhC Registered · No. {site.pharmacy.gphcNumber}
          </p>
          <h1 className="text-4xl leading-tight text-white md:text-[52px] md:leading-[1.15]">
            Pharmacy Services
            <svg viewBox="0 0 260 14" className="mx-2 inline-block h-3 w-auto md:h-4" aria-hidden>
              <path d="M4 10 C 50 2, 100 12, 150 6 S 240 4, 256 8" stroke="#FFB01F" strokeWidth="6" strokeLinecap="round" fill="none" />
            </svg>
            Delivered to You 
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
            UK online pharmacy providing a wide range of services for your medical needs
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact-us" className="btn btn-lg btn-primary">
              Appointment <ArrowRight width={17} height={17} />
            </Link>
            <Link href="/contact-us" className="btn btn-lg btn-outline-light">
              Contact Us <ArrowRight width={17} height={17} />
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="animate-floaty-slow">
            <PillIllustration />
          </div>

          {/* floating: patients recovered */}
          {/* <div className="animate-floaty absolute -left-2 top-6 flex items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-card md:-left-8">
            <AvatarGroup names={["Anna Lee", "Mark Cole", "Sara Iqbal", "Tom Reid"]} size={40} />
            <span>
              <span className="block text-lg font-bold leading-none text-secondary">
                150k<span className="text-primary">+</span>
              </span>
              <span className="text-xs font-medium text-body">Patients treated</span>
            </span>
          </div> */}

          {/* floating: review */}
          {/* <div className="animate-floaty absolute -right-2 top-1/3 w-64 rounded-2xl bg-white p-4 shadow-card md:-right-10">
            <div className="flex items-center gap-3">
              <AvatarInitials name="Natali Jackson" index={4} size={42} />
              <div>
                <p className="text-sm font-semibold text-secondary">Natali Jackson</p>
                <div className="flex gap-0.5 text-[#FFB01F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} width={12} height={12} />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-2.5 text-xs leading-relaxed text-body">
              “Fast, safe and fully regulated service. My prescription arrived next day.”
            </p>
          </div> */}

          {/* floating: GPhC badge */}
          {/* <div className="animate-floaty-slow absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-primary p-4 pr-6 text-white shadow-card md:left-0">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
              <ShieldCheck width={22} height={22} />
            </span>
            <span>
              <span className="block text-sm font-semibold">Registered Pharmacy</span>
              <span className="text-xs text-white/80">GPhC No. {site.pharmacy.gphcNumber}</span>
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
