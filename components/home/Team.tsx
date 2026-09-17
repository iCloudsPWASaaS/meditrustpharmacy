import { site } from "@/lib/site";
import Link from "next/link";
import { AvatarInitials } from "../AvatarInitials";
import { ArrowUpRight, LinkedIn } from "../icons";

export default function Team() {
  const people = [
    ...site.prescribers.map((p) => ({ name: p.name, role: p.role, reg: `${p.body.split(" (")[0]} · ${p.regNumber}` })),
    { name: site.superintendentPharmacist.name, role: "Superintendent Pharmacist", reg: `GPhC · ${site.superintendentPharmacist.gphcNumber}` },
    { name: site.owner.name, role: "Owner — Registered Pharmacist", reg: `GPhC · ${site.owner.gphcNumber}` },
  ].slice(0, 4);

  return (
    <section id="team" className="section-padding">
      <div className="container-cm">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Our clinicians
          </p>
          <h2 className="section-head title mx-auto max-w-2xl">We Employ Only Registered Specialists</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed">
            Your consultation and prescription are handled exclusively by clinicians registered with the GMC or GPhC.
            You can independently verify every registration on our{" "}
            <Link href="/pharmacy-information" className="font-semibold text-primary underline underline-offset-2">
              Pharmacy Information
            </Link>{" "}
            page.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {people.map((p, i) => (
            <article key={p.name} className="card card-hover group text-center">
              <div className="relative mx-auto mb-5 w-fit">
                <AvatarInitials name={p.name} index={i + 1} size={110} ring={false} />
                <a
                  href="#"
                  aria-label={`${p.name} profile`}
                  className="absolute -right-1 bottom-0 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white opacity-0 shadow-card transition group-hover:opacity-100"
                >
                  <LinkedIn width={16} height={16} />
                </a>
              </div>
              <h3 className="text-lg">{p.name}</h3>
              <p className="mt-0.5 text-sm font-medium text-primary">{p.role}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-body">{p.reg}</p>
              <Link
                href="/consulting-prescribing"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition hover:text-primary"
              >
                View Profile <ArrowUpRight width={15} height={15} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
