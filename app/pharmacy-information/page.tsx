import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";
import {
  ArrowUpRight,
  Check,
  Clock,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  UserCheck,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Pharmacy Information",
  description:
    "Ownership, GPhC registration, supplying pharmacy details and how to verify our registrations — Meditrust Pharmacy.",
};

const quickNav = [
  { label: "Owner", href: "#owner" },
  { label: "Superintendent Pharmacist", href: "#superintendent" },
  { label: "Supplying Pharmacy", href: "#supplying" },
  { label: "GPhC Registration", href: "#gphc-registration" },
  { label: "Contact Details", href: "#contact" },
  /* { label: "Other Premises", href: "#other-premises" }, */
  { label: "Verify Registrations", href: "#verify-registrations" },
];

function Section({
  id,
  icon: Icon,
  letter,
  title,
  children,
}: {
  id: string;
  icon: (p: React.SVGProps<SVGSVGElement>) => JSX.Element;
  letter: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-line py-10 first:pt-0 last:border-0">
      <div className="mb-5 flex items-center gap-3.5">
        <span className="icon-box">
          <Icon width={24} height={24} />
        </span>
        <div>
          {/* <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Requirement {letter}</p> */}
          <h2 className="text-xl md:text-2xl">{title}</h2>
        </div>
      </div>
      <div className="space-y-4 leading-relaxed text-[15px]">{children}</div>
    </section>
  );
}

export default function PharmacyInformationPage() {
  return (
    <>
      <PageHero title="Registered Pharmacy Information" crumb="Pharmacy Information" />

      <section className="section-padding">
        <div className="container-cm grid gap-12 lg:grid-cols-[260px_1fr]">
          {/* Sticky quick nav */}
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-28 space-y-1.5 rounded-base border border-line bg-light p-4">
              <p className="px-2 pb-2 text-xs font-bold uppercase tracking-widest text-body">On this page</p>
              {quickNav.map((n) => (
                <a key={n.href} href={n.href} className="block rounded-lg px-3 py-2 text-sm font-medium text-secondary transition hover:bg-white hover:text-primary">
                  {n.label}
                </a>
              ))}
            </nav>
          </aside>

          <article className="card p-7 md:p-10">
            <p className="mb-8 rounded-base bg-primary/5 p-4 text-sm leading-relaxed">
              The information below is provided in accordance with the General Pharmaceutical Council&apos;s standards
              for registered pharmacies providing services at a distance, including via the internet. It is kept
              up to date at all times.
            </p>

            {/* a) Owner */}
            <Section id="owner" icon={UserCheck} letter="A" title="Owner of the Registered Pharmacy">
              <dl className="grid gap-x-10 gap-y-3 sm:grid-cols-[180px_1fr] sm:gap-y-4">
                <dt className="font-semibold text-secondary">Owner</dt>
                <dd className="font-semibold text-primary">{site.owner.name}</dd>
                {/* <dt className="font-semibold text-secondary">Role</dt>
                <dd>{site.owner.role} of {site.pharmacy.name}</dd> */}
                <dt className="font-semibold text-secondary">Legal Entity</dt>
                <dd>{site.legalName}, registered in England &amp; Wales</dd>
              </dl>
            </Section>

            {/* b) Superintendent pharmacist */}
            <Section id="superintendent" icon={ShieldCheck} letter="B" title="Superintendent Pharmacist & Registration Number">
              <dl className="grid gap-x-10 gap-y-3 sm:grid-cols-[180px_1fr] sm:gap-y-4">
                <dt className="font-semibold text-secondary">Name</dt>
                <dd className="font-semibold text-primary">{site.superintendentPharmacist.name}</dd>
                <dt className="font-semibold text-secondary">Registration Body</dt>
                <dd>{site.superintendentPharmacist.registrationBody}</dd>
                <dt className="font-semibold text-secondary">Registration Number</dt>
                <dd>
                  <strong className="text-secondary">GPhC {site.superintendentPharmacist.gphcNumber}</strong>
                </dd>
                <dt className="font-semibold text-secondary">Accountable For</dt>
                <dd>The safe and effective running of all pharmacy services provided through this website.</dd>
              </dl>
            </Section>

            {/* c) Supplying pharmacy */}
            <Section id="supplying" icon={MapPin} letter="C" title="Pharmacy Supplying Your Medicines">
              <address className="not-italic">
                <p className="text-lg font-semibold text-primary">{site.pharmacy.name}</p>
                <p className="mt-1">
                  {site.pharmacy.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
              </address>
              <p>
                All medicines dispensed through this website are supplied by the pharmacy named above.
              </p>
            </Section>

            {/* d) GPhC number */}
            <Section id="gphc-registration" icon={FileText} letter="D" title="GPhC Registration Number of the Pharmacy">
              <div className="flex flex-wrap items-center gap-5 rounded-base border border-line bg-light p-6">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                  <ShieldCheck width={30} height={30} />
                </span>
                <div>
                  <p className="text-sm font-medium text-body">General Pharmaceutical Council registration number</p>
                  <p className="text-3xl font-bold tracking-wide text-secondary">{site.pharmacy.gphcNumber}</p>
                  <a
                    href={site.registers.pharmacyRegisterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline underline-offset-2"
                  >
                    View entry on the GPhC register <ArrowUpRight width={14} height={14} />
                  </a>
                </div>
              </div>
            </Section>

            {/* e) Phone + email */}
            <Section id="contact" icon={PhoneCall} letter="E" title="Contact Us">
              <ul className="grid gap-4 sm:grid-cols-2">
                {/* <li className="rounded-base border border-line p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-body">
                    <PhoneCall width={15} height={15} className="text-primary" /> Phone
                  </p>
                  <a href={site.contact.phoneHref} className="mt-1 block text-lg font-semibold text-primary">
                    {site.contact.phone}
                  </a>
                </li> */}
                <li className="rounded-base border border-line p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-body">
                    <Mail width={15} height={15} className="text-primary" /> Email
                  </p>
                  <a href={`mailto:${site.contact.email}`} className="mt-1 block break-all text-lg font-semibold text-primary">
                    {site.contact.email}
                  </a>
                </li>
              </ul>
              <p className="flex items-center gap-2 text-sm">
                <Clock width={15} height={15} className="text-primary" /> Telephone &amp; email support hours:{" "}
                <strong className="text-secondary">{site.contact.hours}</strong>
              </p>
            </Section>

            {/* f) Other premises */}
            {/* <Section id="other-premises" icon={FileText} letter="F" title="Other Pharmacies Involved in Labelling & Assembling">
              <p>
                The following registered pharmacies may be involved in assembling or labelling your medicines where an
                order is fulfilled away from our main dispensary. Each is separately registered with the GPhC.
              </p>
              <div className="grid gap-5 md:grid-cols-2">
                {site.otherPremises.map((o) => (
                  <div key={o.gphcNumber} className="rounded-base border border-line p-5">
                    <h3 className="font-semibold text-primary">{o.name}</h3>
                    <p className="mt-1 text-sm">
                      GPhC No. <strong className="text-secondary">{o.gphcNumber}</strong>
                      <br />
                      Superintendent: {o.superintendentPharmacist}
                      <br />
                      <span className="mt-1 block">{o.addressLines.join(", ")}</span>
                    </p>
                    <p className="mt-3 rounded-lg bg-light p-3 text-sm">{o.role}</p>
                  </div>
                ))}
              </div>
            </Section> */}

            {/* g) Verify registrations */}
            <Section id="verify-registrations" icon={Check} letter="G" title="How to Check Our Registration Status">
              <p>You can independently confirm the registration status of our pharmacy and superintendent pharmacist:</p>
              <ol className="space-y-5">
                <li className="rounded-base border border-line p-5">
                  <h3 className="mb-2 font-semibold text-secondary">1. Check the pharmacy registration</h3>
                  <p className="text-sm">
                    Visit the{" "}
                    <a href={site.registers.pharmacyRegisterUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-2">
                      GPhC pharmacy register
                    </a>{" "}
                    and search for “{site.pharmacy.name}”, by address, or by registration number{" "}
                    <strong className="text-secondary">{site.pharmacy.gphcNumber}</strong>. The register shows whether
                    the pharmacy is active and any conditions attached to its registration.
                  </p>
                </li>
                <li className="rounded-base border border-line p-5">
                  <h3 className="mb-2 font-semibold text-secondary">2. Check the superintendent pharmacist</h3>
                  <p className="text-sm">
                    Visit the{" "}
                    <a href={site.registers.pharmacistRegisterUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-2">
                      GPhC pharmacist register
                    </a>{" "}
                    and search for “{site.superintendentPharmacist.name}” or registration number{" "}
                    <strong className="text-secondary">{site.superintendentPharmacist.gphcNumber}</strong>.
                  </p>
                </li>
                {/* <li className="rounded-base border border-line p-5">
                  <h3 className="mb-2 font-semibold text-secondary">3. Prescribers</h3>
                  <p className="text-sm">
                    Doctors who prescribe via this website are registered with the GMC — see our{" "}
                    <Link href="/consulting-prescribing" className="font-semibold text-primary underline underline-offset-2">
                      Consulting &amp; Prescribing page
                    </Link>{" "}
                    for their names, GMC numbers and direct links to check them.
                  </p>
                </li> */}
              </ol>
              {/* <p className="rounded-base bg-primary/5 p-4 text-sm">
                If anything on the register does not match the details shown here, please contact us immediately on{" "}
                {site.contact.phone} before placing an order.
              </p> */}
            </Section>

            {/* Related */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/terms-and-conditions" className="btn btn-secondary">
                <FileText width={16} height={16} /> Terms &amp; Conditions
              </Link>
              <Link href="/feedback-and-complaints" className="btn btn-outline-light !border-line !bg-light !text-secondary hover:!border-secondary">
                <MessageSquare width={16} height={16} /> Feedback &amp; Complaints
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
