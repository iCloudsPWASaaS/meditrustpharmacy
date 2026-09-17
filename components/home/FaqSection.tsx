import Faq from "../Faq";

const faqs = [
  {
    q: "Are you a registered pharmacy?",
    a: "Yes. Meditrust Pharmacy is registered with the General Pharmaceutical Council (GPhC), registration number [TO BE CONFIRMED]. You can confirm this at any time on the GPhC pharmacy register at pharmacyregulation.org.",
  },
  {
    q: "Who owns the pharmacy and who is accountable?",
    a: "The pharmacy is owned by Hussain Healthcare Group Ltd and our superintendent pharmacist is Abid Hussain (GPhC 2228430). Their details — and those of every other pharmacy involved in assembling or labelling your medicines — are listed on our Pharmacy Information page.",
  },
  /* {
    q: "Can I always speak to a real prescriber?",
    a: "Yes. Every consultation is reviewed by a prescriber registered with the GMC or GPhC. We display each prescriber's name and registration number on the Consulting & Prescribing page, with links to verify them on the public registers.",
  }, */
  {
    q: "How do I give feedback or make a complaint?",
    a: "We welcome all feedback. You can use the form on our Feedback & Complaints page, email info@meditrustpharmacy.co.uk or write to the pharmacy. Every complaint receives a written response within set timescales, and independent escalation routes are provided.",
  },
  /* {
    q: "Can I cancel my order?",
    a: "You can cancel any order before it has been dispatched by contacting us. Once dispatched, medicines cannot be resold and refunds are handled in line with our Terms & Conditions.",
  }, */
  {
    q: "What if I need a medicine urgently when you are closed?",
    a: "Our pharmacy operates during published opening hours only. Outside these hours, call NHS 111 (free, 24/7) or use 111.nhs.uk for urgent advice, an urgent repeat medicine, or an emergency supply of a prescription — they can also refer you to an out-of-hours GP. In a life-threatening emergency always call 999.",
  },
  /* {
    q: "How do you prevent people ordering the same medicine repeatedly?",
    a: "Every request passes through automated and pharmacist-led screening that compares contact details (name, address, email, phone), payment details, delivery addresses, order frequency and technical identifiers such as device fingerprint and IP address. Orders flagged as duplicate or suspicious are held for review, limited or declined, and suspected fraud may be reported to the authorities.",
  }, */
];

export default function FaqSection() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-cm grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="section-head title">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-md leading-relaxed">
            Everything patients most commonly ask about our services, consultations, delivery and complaints
            process.
          </p>
        </div>
        <Faq items={faqs} />
      </div>
    </section>
  );
}
