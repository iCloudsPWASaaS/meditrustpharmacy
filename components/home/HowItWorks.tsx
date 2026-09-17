import { CalendarCheck, ClipboardCheck, Pill, UserCheck } from "../icons";

const steps = [
  { icon: CalendarCheck, title: "Book an Appointment", desc: "Choose a time that suits you and complete a short medical questionnaire." },
  { icon: UserCheck, title: "Consultation & Checkup", desc: "A GMC/GPhC-registered prescriber reviews your case via secure video or form." },
  { icon: ClipboardCheck, title: "Clinical Approval", desc: "Our pharmacist verifies safety, interactions and suitability before dispensing." },
  { icon: Pill, title: "Prescribe & Delivery", desc: "Approved medicines are dispensed and dispatched in discreet, tracked packaging." },
];

export default function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="container-cm">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Simple process
          </p>
          <h2 className="section-head title mx-auto max-w-xl">How It Works</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed">
            Four simple steps from request to treatment — every stage supervised by registered healthcare
            professionals.
          </p>
        </div>

        <ol className="relative grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="card card-hover relative text-center">
              <span className="absolute right-5 top-4 text-5xl font-bold leading-none text-light" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="icon-box mx-auto mb-4 !h-16 !w-16 !rounded-full">
                <s.icon width={28} height={28} />
              </span>
              <h3 className="mb-2 text-lg">{s.title}</h3>
              <p className="text-sm leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
