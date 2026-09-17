import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowUpRight, Check, UserCheck, Video } from "../icons";

export default function PrescribingSection() {
  return (
    <section id="consulting-prescribing" className="section-padding bg-light">
      <div className="container-cm grid items-start gap-12 lg:grid-cols-2">
        <div>
          <div className="section-head mb-8">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
              Pharmacy First Consultation
            </p>
            <h2 className="title">Pharmacy First Consultation Services</h2>
            <p className="mt-4 leading-relaxed">
              Medicines are supplied following a consultation with our pharmacists. Our pharmacists assess each consultation individually and make a clinical decision based on your symptoms, medical history and current medicines.
            </p>
          </div>

          <ul className="space-y-3.5">
            {[
              {
                //title: "Pharmacist-led consultations",
                text: "Pharmacist-led consultations - each consultation is reviewed by a pharmacist",
              },
              {
                text: "Medicines are supplied only when clinically appropriate, with suitable alternatives or further care recommended where necessary",
              },
              {
                text: "Your medical information is reviewed confidentially to support a safe and appropriate clinical decision",
              },
              {
                text: "Patients are referred to an appropriate healthcare professional where further assessment or treatment is required",
              },
            ].map((t) => (
              <li key={t.text} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check width={13} height={13} />
                </span>
                <p className="font-medium text-secondary">{t.text}</p>
              </li>
            ))}
          </ul>

          {/* <Link href="/consulting-prescribing" className="btn btn-primary mt-8">
            Full Prescribing Service Details <ArrowUpRight width={16} height={16} />
          </Link> */}
        </div>

        <div className="space-y-5">
          <div className="card !bg-secondary text-white">
            <div className="flex items-center gap-3.5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-primary">
                <Video width={22} height={22} />
              </span>
              <div>
                <h3 className="text-lg !text-white">How your consultation works</h3>
                {/* <p className="text-sm text-white/60">Secure video or detailed online form</p> */}
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              A registered prescriber assesses your medical history, current medication and symptoms. If treatment is
              appropriate they issue a private prescription, which our pharmacy dispenses. If not, you pay nothing and
              we advise on next steps.
            </p>
          </div>

          {/* <div className="grid gap-5 sm:grid-cols-2">
            {site.prescribers.map((p) => (
              <article key={p.regNumber} className="card card-hover">
                <span className="icon-box mb-3">
                  <UserCheck width={22} height={22} />
                </span>
                <h3 className="text-base">{p.name}</h3>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-body">{p.role}</p>
                <p className="mt-2.5 text-sm leading-relaxed">
                  {p.body}
                  <br />
                  Reg. No: <strong className="text-secondary">{p.regNumber}</strong>
                  <br />
                  <a href={p.checkUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-2">
                    Check registration <ArrowUpRight width={13} height={13} />
                  </a>
                </p>
              </article>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
