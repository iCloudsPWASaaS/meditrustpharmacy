import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowRight, ArrowUpRight, Check, FileText, MapPin, MessageSquare, PhoneCall, ShieldCheck, UserCheck } from "../icons";

export default function PharmacyInfoSection() {
  return (
    <section id="pharmacy-information" className="section-padding bg-secondary/[0.03]">
      <div className="container-cm">
        {/* <div className="mb-12 text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
            Full transparency
          </p>
          <h2 className="section-head title mx-auto max-w-3xl">Registered Pharmacy Information You Can Verify</h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed">
            In line with the GPhC standards for registered pharmacies, we clearly display the ownership, registration
            and contact details of every pharmacy involved in supplying your medicines.
          </p>
        </div> */}

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {/* Owner */}
          <article className="card card-hover flex flex-col">
            <span className="icon-box mb-4 !bg-secondary/5 text-secondary">
              <UserCheck width={24} height={24} />
            </span>
            <h3 className="mb-1 text-lg">About Us</h3>
            <p className="text-sm font-semibold text-primary">Hussain Healthcare Group Ltd - 16524576</p>
            <p className="mt-2 text-sm leading-relaxed">
              Registered owner of {site.pharmacy.name}, responsible for the safe and effective running of the pharmacy.
            </p>
          </article>

          {/* Superintendent */}
          <article className="card card-hover flex flex-col">
            <span className="icon-box mb-4">
              <ShieldCheck width={24} height={24} />
            </span>
            <h3 className="mb-1 text-lg">Superintendent Pharmacist</h3>
            <p className="text-sm font-semibold text-primary">{site.superintendentPharmacist.name}</p>
            <p className="mt-2 text-sm leading-relaxed">
              Registration body: {site.superintendentPharmacist.registrationBody}
              <br />
              Registration number:{" "}
              <strong className="text-secondary">GPhC {site.superintendentPharmacist.gphcNumber}</strong>
            </p>
          </article>

          {/* Supplying pharmacy + GPhC number */}
          <article className="card card-hover flex flex-col">
            <span className="icon-box mb-4">
              <MapPin width={24} height={24} />
            </span>
            <h3 className="mb-1 text-lg">Supplying Pharmacy</h3>
            <p className="text-sm font-semibold text-primary">{site.pharmacy.name}</p>
            <p className="mt-2 text-sm leading-relaxed">
              {site.pharmacy.addressLines.join(", ")}
              <br />
              GPhC registration: <strong className="text-secondary">{site.pharmacy.gphcNumber}</strong>
            </p>
          </article>

          {/* Contact */}
          <article className="card card-hover flex flex-col">
            <span className="icon-box mb-4">
              <PhoneCall width={24} height={24} />
            </span>
            <h3 className="mb-1 text-lg">Contact</h3>
            <p className="mt-2 text-sm leading-relaxed">
              {/* Phone:{" "}
              <a href={site.contact.phoneHref} className="font-semibold text-primary">
                {site.contact.phone}
              </a>
              <br /> */}
              Email:{" "}
              <a href={`mailto:${site.contact.email}`} className="break-all font-semibold text-primary">
                {site.contact.email}
              </a>
              <br />
              Opening hours: {site.contact.hours}
            </p>
          </article>

          {/* Other premises */}
          {/* <article className="card card-hover flex flex-col">
            <span className="icon-box mb-4">
              <FileText width={24} height={24} />
            </span>
            <h3 className="mb-1 text-lg">Other Premises Involved</h3>
            <ul className="mt-2 space-y-2 text-sm leading-relaxed">
              {site.otherPremises.map((o) => (
                <li key={o.gphcNumber}>
                  <strong className="text-secondary">{o.name}</strong> — GPhC {o.gphcNumber}: {o.role}
                </li>
              ))}
            </ul>
          </article> */}

          {/* Verification */}
          {/* <article className="card card-hover flex flex-col !bg-primary text-white hover:!bg-primary-hover">
            <span className="icon-box mb-4 !bg-white/20 !text-white">
              <Check width={24} height={24} />
            </span>
            <h3 className="mb-1 text-lg !text-white">Verify Our Registrations</h3>
            <ul className="mt-2 space-y-2.5 text-sm leading-relaxed text-white/90">
              <li>
                <a href={site.registers.pharmacyRegisterUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold underline underline-offset-2 hover:text-secondary">
                  Check the pharmacy register <ArrowUpRight width={14} height={14} />
                </a>
                <br />
                Search “{site.pharmacy.name}” or {site.pharmacy.gphcNumber}.
              </li>
              <li>
                <a href={site.registers.pharmacistRegisterUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold underline underline-offset-2 hover:text-secondary">
                  Check the pharmacist register <ArrowUpRight width={14} height={14} />
                </a>
                <br />
                Search “{site.owner.name}” or GPhC {site.owner.gphcNumber}.
              </li>
            </ul>
          </article> */}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Link href="/pharmacy-information" className="btn btn-secondary w-full md:w-auto md:justify-self-start">
            View Full Pharmacy Information <ArrowRight width={16} height={16} />
          </Link>
          <Link href="/terms-and-conditions" className="btn btn-outline-light !border-line !bg-white !text-secondary hover:!border-secondary w-full md:w-auto">
            <FileText width={16} height={16} /> Terms &amp; Conditions
          </Link>
          <Link href="/feedback-and-complaints" className="btn btn-outline-light !border-line !bg-white !text-secondary hover:!border-secondary w-full md:w-auto md:justify-self-end">
            <MessageSquare width={16} height={16} /> Feedback &amp; Complaints
          </Link>
        </div>
      </div>
    </section>
  );
}
