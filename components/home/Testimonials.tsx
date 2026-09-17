import { AvatarInitials } from "../AvatarInitials";
import { Quote, Star } from "../icons";

const testimonials = [
  {
    name: "Tariq Najeeb",
    role: "Patient — Asthma Review",
    text: "The online consultation was thorough and the prescriber explained everything clearly. My inhaler prescription was dispensed and delivered within 24 hours.",
  },
  {
    name: "Nasir Qadiri",
    role: "Patient — Travel Clinic",
    text: "Booking was simple, and I could verify the pharmacist's GPhC number on the register myself before ordering. That transparency gave me real confidence.",
  },
  {
    name: "Faisal Darwish",
    role: "Patient — Repeat Prescription",
    text: "Excellent service from start to finish. Real pharmacists check every order, and their complaints procedure is easy to find — though I've never needed it.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-light">
      <div className="container-cm">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="section-head max-w-xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
              Feedback
            </p>
            <h2 className="title">Real Patients, Real Stories. And Our Achievements</h2>
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="card card-hover relative">
              <span className="absolute -top-4 right-6 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                <Quote width={20} height={20} />
              </span>
              <div className="mb-4 flex items-center gap-3">
                <AvatarInitials name={t.name} index={i} size={52} ring={false} />
                <figcaption>
                  <p className="font-semibold text-secondary">{t.name}</p>
                  <p className="text-xs font-medium text-primary">{t.role}</p>
                </figcaption>
              </div>
              <div className="mb-3 flex gap-0.5 text-[#FFB01F]">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} width={14} height={14} />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed">{t.text}</blockquote>
            </figure>
          ))}
        </div>

        <p className="mt-10 rounded-base border border-line bg-white p-5 text-center text-sm">
          We publish independent patient feedback via the{" "}
          <a
            href="https://www.nhs.uk/services/pharmacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-2"
          >
            NHS website
          </a>{" "}
          — see our{" "}
          <a href="/feedback-and-complaints" className="font-semibold text-primary underline underline-offset-2">
            Feedback &amp; Complaints Procedure
          </a>{" "}
          for all the ways to share your experience.
        </p>
      </div>
    </section>
  );
}
