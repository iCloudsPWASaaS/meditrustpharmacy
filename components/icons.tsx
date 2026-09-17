import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base(p)}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export const PhoneCall = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const CalendarCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="m9 16 2 2 4-4" />
  </svg>
);

export const Headphones = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

export const CreditCard = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

export const Cart = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

export const MapPin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Clock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base(p)}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const Plus = (p: IconProps) => (
  <svg {...base(p)}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const ChevronDown = (p: IconProps) => (
  <svg {...base(p)}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base(p)}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const X = (p: IconProps) => (
  <svg {...base(p)}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const ShieldCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const FileText = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

export const MessageSquare = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const ClipboardCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="m9 14 2 2 4-4" />
  </svg>
);

export const Video = (p: IconProps) => (
  <svg {...base(p)}>
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

export const Truck = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

export const Quote = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })} viewBox="0 0 24 24">
    <path d="M9.6 5C6 6.9 3.9 10 3.9 14.1c0 3 1.7 4.9 4 4.9 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.2-3.1-3.2-.3 0-.8.1-.9.1.3-2.1 2-4.4 4-5.6L9.6 5zm10 0c-3.6 1.9-5.7 5-5.7 9.1 0 3 1.7 4.9 4 4.9 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.2-3.1-3.2-.3 0-.8.1-.9.1.3-2.1 2-4.4 4-5.6L19.6 5z" />
  </svg>
);

export const UserCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" />
  </svg>
);

export const Pill = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M10.5 20.5 3.5 13.5a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7z" transform="rotate(45 12 12)" />
    <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
  </svg>
);

export const HeartPulse = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
  </svg>
);

export const Tooth = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5.5C10.5 4 8.5 3 6.5 3 4 3 2 5 2 8c0 5 2.5 7 3.5 13 .5 2.5 3 2.5 3.5 0 .6-3 1-5 3-5s2.4 2 3 5c.5 2.5 3 2.5 3.5 0C19.5 15 22 13 22 8c0-3-2-5-4.5-5-2 0-4 1-5.5 2.5z" />
  </svg>
);

export const Eye = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Brain = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 4 17.5a2.5 2.5 0 0 1-1.98-4A2.5 2.5 0 0 1 3 9.5a2.5 2.5 0 0 1 2.04-4.04A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 20 17.5a2.5 2.5 0 0 0 1.98-4A2.5 2.5 0 0 0 21 9.5a2.5 2.5 0 0 0-2.04-4.04A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

export const Bone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M17 10c.7-.7 1.69 0 2.5-1a3 3 0 1 0-4.24-4.24c-.34.34-.5.8-.66 1.25L10 10.5 5.24 6.01c-.16-.45-.32-.91-.66-1.25A3 3 0 1 0 .35 9C1.16 10 2.15 9.3 2.85 10L7 14.15 2.85 18.3C2.15 19 1.16 18.3.35 19.3a3 3 0 1 0 4.24 4.24c.34-.34.5-.8.66-1.25L10 17.75l4.75 4.54c.16.45.32.91.66 1.25a3 3 0 1 0 4.24-4.24c-.81-1-1.8-.3-2.5-1L13.35 14Z" transform="translate(1 -2)" />
  </svg>
);

export const Stethoscope = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

export const Microscope = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0 0-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
  </svg>
);

export const Throat = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 11a8 8 0 0 0 16 0" />
    <path d="M5.5 15C8 19.2 16 19.2 18.5 15" />
    <path d="M12 11v2.5" />
  </svg>
);

export const Kidney = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 3H6a2 2 0 0 0-2 2 2 2 0 0 1-2 2v6a2 2 0 0 1 2 2 2 2 0 0 0 2 2h3" />
    <path d="M15 3h3a2 2 0 0 1 2 2 2 2 0 0 0 2 2v6a2 2 0 0 1-2 2 2 2 0 0 0-2 2h-3" />
  </svg>
);

export const Virus = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
    <line x1="5" y1="5" x2="7.5" y2="7.5" />
    <line x1="16.5" y1="16.5" x2="19" y2="19" />
    <line x1="5" y1="19" x2="7.5" y2="16.5" />
    <line x1="16.5" y1="7.5" x2="19" y2="5" />
    <circle cx="12" cy="4" r="1" />
    <circle cx="12" cy="20" r="1" />
    <circle cx="4" cy="12" r="1" />
    <circle cx="20" cy="12" r="1" />
  </svg>
);

export const Facebook = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })} viewBox="0 0 320 512">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
  </svg>
);

export const XTwitter = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })} viewBox="0 0 512 512">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
);

export const LinkedIn = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })} viewBox="0 0 448 512">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3z" />
  </svg>
);

export const Instagram = (p: IconProps) => (
  <svg {...base(p)} viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const YouTube = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })} viewBox="0 0 576 512">
    <path d="M549.65 124.08a68.62 68.62 0 0 0-48.28-48.6C458.78 64 288 64 288 64S117.22 64 74.63 75.49a68.62 68.62 0 0 0-48.28 48.6C15 167 15 256.39 15 256.39s0 89.38 11.35 132.3a68.62 68.62 0 0 0 48.28 48.6C117.22 448 288 448 288 448s170.78 0 213.37-11.49a68.62 68.62 0 0 0 48.28-48.6c11.35-42.92 11.35-132.3 11.35-132.3s0-89.4-11.35-132.33zm-317.51 213.5V175.19l142.74 81.2z" />
  </svg>
);

export const Bandage = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M18 2c-2.2 0-4 1.8-4 4v4H6c-2.2 0-4 1.8-4 4s1.8 4 4 4h8v4c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4h-8V6c0-2.2-1.8-4-4-4" transform="rotate(45 12 12)" />
    <line x1="12" y1="8" x2="12" y2="16" transform="rotate(45 12 12)" />
    <line x1="8" y1="12" x2="16" y2="12" transform="rotate(45 12 12)" />
  </svg>
);

export const Bug = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M8 2 6 4" /><path d="m16 2 2 2" />
    <path d="M9 10h6" />
    <path d="M12 10v6" />
    <path d="M8 16a4 4 0 0 1 8 0" />
    <path d="M6 8a6 6 0 0 1 12 0" />
    <path d="M6 8v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    <circle cx="10" cy="6" r="0.5" fill="currentColor" />
    <circle cx="14" cy="6" r="0.5" fill="currentColor" />
  </svg>
);

export const Nose = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 4c-1 0-2.5 1-3 3-1 4-3 5-3 7a3 3 0 0 0 6 0c0-2-2-3-3-7" />
    <path d="M12 4c1 0 2.5 1 3 3 1 4 3 5 3 7a3 3 0 0 1-6 0c0-2 2-3 3-7" />
    <path d="M10 18h4" />
  </svg>
);

export const Zap = (p: IconProps) => (
  <svg {...base(p)}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const Home = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const socialIcons = {
  facebook: Facebook,
  x: XTwitter,
  linkedin: LinkedIn,
  instagram: Instagram,
  youtube: YouTube,
};
