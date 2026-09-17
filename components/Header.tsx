"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { site } from "@/lib/site";
import {
  ArrowRight,
  CalendarCheck,
  Cart,
  ChevronDown,
  CreditCard,
  Headphones,
  Mail,
  Menu,
  PhoneCall,
  socialIcons,
  X,
} from "./icons";

const infoItems = [
  /* { icon: PhoneCall, title: "Contact Us", sub: site.contact.phone, href: site.contact.phoneHref }, */
  { icon: Mail, title: "Contact Us", sub: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: CalendarCheck, title: "Online Appointment", sub: "Book Now", href: "/contact-us" },
  { icon: Headphones, title: "Supports", sub: "24x7 Supports", href: "/contact-us" },
  { icon: CreditCard, title: "Payment", sub: "Pay Online", href: "/#services" },
];

const homeDropdown = [
  { label: "About Us", href: "/#about" },
  { label: "Our Services", href: "/#services" },
  /* { label: "Why Choose Us", href: "/#why-choose" }, */
  /* { label: "Testimonials", href: "/#testimonials" }, */
  { label: "FAQs", href: "/#faq" },
];

const pagesDropdown = [
  { label: "Pharmacy Information", href: "/pharmacy-information" },
  /* { label: "Consulting & Prescribing", href: "/consulting-prescribing" }, */
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Feedback & Complaints", href: "/feedback-and-complaints" },
  { label: "Contact Us", href: "/contact-us" },
];

function NavItem({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  return (
    <li className="group relative">
      <button
        type="button"
        className="flex cursor-pointer items-center gap-1.5 py-4 text-[15px] font-medium text-white/90 transition group-hover:text-primary"
      >
        {label}
        <ChevronDown width={14} height={14} className="transition-transform duration-300 group-hover:rotate-180" />
      </button>
      <ul className="invisible absolute left-0 top-full z-50 min-w-[240px] translate-y-2 rounded-base bg-white py-2 opacity-0 shadow-card transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((it) => (
          <li key={it.label}>
            <Link
              href={it.href}
              className="block px-5 py-2.5 text-sm font-medium text-secondary transition hover:bg-light hover:text-primary"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="relative z-40">
      {/* ---- Info bar ---- */}
      <div className="hidden border-b border-line bg-light xl:block">
        <div className="container-cm grid grid-cols-5 divide-x divide-line">
          {infoItems.map((item) => (
            <a key={item.title} href={item.href} className="group flex items-center gap-3.5 px-6 py-5 transition hover:bg-white">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-soft text-primary transition group-hover:bg-primary group-hover:text-white">
                <item.icon width={20} height={20} />
              </span>
              <span>
                <span className="block text-[15px] font-semibold leading-tight text-primary">{item.title}</span>
                <span className="mt-0.5 block truncate text-[13px] font-medium text-body">{item.sub}</span>
              </span>
            </a>
          ))}
          <div className="flex items-center gap-3.5 px-6 py-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-soft text-primary">
              <Cart width={20} height={20} />
            </span>
            <span>
              <span className="block text-[15px] font-semibold leading-tight text-primary">My Cart</span>
              <span className="mt-0.5 block text-[13px] font-medium text-body">0 Items</span>
            </span>
          </div>
        </div>
      </div>

      {/* ---- Main nav bar ---- */}
      <div className="sticky top-0 z-40 bg-secondary shadow-lg shadow-secondary/10">
        <div className="container-cm flex items-center justify-between gap-6 py-4">
          <Logo variant="light" />

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <NavItem label="Home" items={homeDropdown} />
              <li>
                <Link href="/pharmacy-information" className="block py-4 text-[15px] font-medium text-white/90 transition hover:text-primary">
                  Pharmacy Information
                </Link>
              </li>
              {/* <li>
                <Link href="/consulting-prescribing" className="block py-4 text-[15px] font-medium text-white/90 transition hover:text-primary">
                  Consulting &amp; Prescribing
                </Link>
              </li> */}
              <li>
                <Link href="/#services" className="block py-4 text-[15px] font-medium text-white/90 transition hover:text-primary">
                  Services
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact-us" className="btn btn-primary hidden !rounded-full md:inline-flex">
              Appointment
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 text-white lg:hidden"
            >
              <Menu width={22} height={22} />
            </button>
          </div>
        </div>
      </div>

      {/* ---- Mobile drawer ---- */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-secondary/70 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[320px] max-w-[85vw] flex-col overflow-y-auto bg-white p-7 transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line text-secondary"
            >
              <X width={20} height={20} />
            </button>
          </div>

          <p className="mb-6 text-sm leading-relaxed">
            A GPhC-registered online pharmacy delivering safe, regulated healthcare and medicines across the UK.
          </p>

          <nav aria-label="Mobile navigation">
            <ul className="space-y-1 border-t border-line pt-4">
              <li>
                <Link href="/" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] font-semibold text-secondary hover:bg-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] font-semibold text-secondary hover:bg-light">
                  Services
                </Link>
              </li>
              {pagesDropdown.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-[15px] font-semibold text-secondary hover:bg-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#faq" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] font-semibold text-secondary hover:bg-light">
                  FAQs
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-auto space-y-4 border-t border-line pt-6">
            <a href={site.contact.phoneHref} className="flex items-center gap-3 text-sm font-semibold text-secondary">
              <PhoneCall width={18} height={18} className="text-primary" /> {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 break-all text-sm font-semibold text-secondary">
              <Mail width={18} height={18} shrink-0 className="shrink-0 text-primary" /> {site.contact.email}
            </a>
            <div className="flex gap-2 pt-2">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-light text-secondary transition hover:bg-primary hover:text-white"
                  >
                    <Icon width={15} height={15} />
                  </a>
                );
              })}
            </div>
            <Link href="/contact-us" className="btn btn-primary w-full">
              Book Appointment <ArrowRight width={16} height={16} />
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
