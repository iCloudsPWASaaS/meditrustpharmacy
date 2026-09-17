import Link from "next/link";
import { ArrowRight } from "./icons";

export default function PageHero({
  title,
  crumb,
}: {
  title: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
      <div className="blob-primary pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full" />
      <div className="blob-primary pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full opacity-60" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden>
        <defs>
          <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.6" fill="#fff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      <div className="container-cm relative text-center">
        <h1 className="mx-auto max-w-3xl text-3xl text-white md:text-[44px] md:leading-tight">{title}</h1>
        <nav aria-label="Breadcrumb" className="mt-4 flex items-center justify-center gap-2 text-sm font-medium">
          <Link href="/" className="text-white/70 transition hover:text-primary">
            Home
          </Link>
          <ArrowRight width={14} height={14} className="text-primary" />
          <span className="text-primary">{crumb}</span>
        </nav>
      </div>
    </section>
  );
}
