import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";
import { FileText, Mail, PhoneCall } from "@/components/icons";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${site.name} website and pharmacy services.`,
};

const LAST_UPDATED = "25 August 2026";

const sections = [
  {
    title: "1. About Meditrust Pharmacy",
    body: [
      `${site.pharmacy.name} is a registered distance-selling pharmacy operating in England.`,
      `Registered pharmacy name: ${site.pharmacy.name}\nPharmacy owner: ${site.owner.name}\nGPhC registration number: ${site.pharmacy.gphcNumber}\nRegistered pharmacy address: ${site.pharmacy.addressLines.join(", ")}\nTelephone: ${site.contact.phone}\nEmail: ${site.contact.email}\nSuperintendent Pharmacist: ${site.superintendentPharmacist.name}\nSuperintendent Pharmacist GPhC number: ${site.superintendentPharmacist.gphcNumber}`,
      `${site.pharmacy.name} provides pharmacy services remotely and does not provide a walk-in pharmacy service to the public from its registered premises.`,
      "Our pharmacy services are provided by appropriately qualified and registered pharmacy professionals in accordance with applicable legislation, professional standards and guidance issued by the General Pharmaceutical Council (GPhC).",
    ],
  },
  {
    title: "2. Use of Our Website",
    body: [
      "You agree to use this website lawfully and only for legitimate purposes.",
      "You must not:",
      "• provide false, inaccurate or misleading information;\n• impersonate another person;\n• create an account using another person's details;\n• submit information relating to another person without appropriate authority;\n• attempt to obtain medicines by deception or fraud;\n• place an order for someone else without their knowledge and consent;\n• interfere with the security or operation of the website;\n• attempt to gain unauthorised access to our systems; or\n• use the website for any unlawful purpose.",
      "We reserve the right to restrict or terminate access to the website where we reasonably believe that these Terms and Conditions have been breached.",
    ],
  },
  {
    title: "3. Registration and Patient Information",
    body: [
      "Where registration is required, you must provide accurate, complete and current information.",
      "This may include your:",
      "• full name;\n• date of birth;\n• address;\n• contact details;\n• relevant medical information;\n• medication history;\n• allergies;\n• relevant health information; and\n• other information reasonably required to provide pharmacy or clinical services safely.",
      "You are responsible for ensuring that information provided to us remains accurate and up to date.",
      "Providing false or incomplete information may result in an order or consultation being cancelled or a medicine not being supplied.",
      "Where appropriate, we may undertake identity, address or other verification checks to protect patients and prevent fraud, misuse or unsafe supply of medicines.",
    ],
  },
  {
    title: "4. Remote Consultations and Pharmacy First Service",
    body: [
      `${site.pharmacy.name} does not sell or offer P, GSL or Prescription Only Medicines (POMs) for purchase through this website.`,
      "The website may be used to request access to the NHS Pharmacy First service, where available and where the patient meets the relevant eligibility requirements.",
      "Pharmacy First consultations may be provided remotely using appropriate communication methods, including telephone or other secure remote consultation methods. The pharmacist will obtain relevant information from the patient regarding their symptoms, medical history, current medicines, allergies and other relevant clinical information required to assess the patient's condition safely.",
      `${site.pharmacy.name} provides Pharmacy First consultations for the six NHS Pharmacy First clinical pathways:`,
      "• Acute otitis media (earache) – children aged 1 to 17 years\n• Impetigo – adults and children aged 1 year and over\n• Infected insect bites – adults and children aged 1 year and over\n• Shingles – adults aged 18 years and over\n• Sinusitis – adults and children aged 12 years and over\n• Uncomplicated urinary tract infections (UTIs) in women aged 16 to 64 years",
      "The pharmacist will assess the information obtained during the remote consultation against the relevant Pharmacy First clinical pathway, including the applicable inclusion and exclusion criteria.",
      "A remote consultation does not guarantee that treatment or a medicine will be supplied.",
      "Following the consultation, the pharmacist may:",
      "• provide appropriate clinical advice and self-care recommendations;\n• provide treatment where clinically appropriate;\n• supply a medicine where this is permitted under the relevant Pharmacy First PGD and the patient meets all applicable criteria;\n• determine that no medicine is required;\n• refer the patient to their GP, NHS 111, urgent treatment service or another appropriate healthcare professional or service; or\n• advise the patient to attend a face-to-face consultation where a remote assessment is insufficient to safely assess their condition.",
      "Where the pharmacist considers that a remote consultation does not provide sufficient information to make a safe clinical assessment, treatment will not be supplied solely on the basis of the remote consultation and the patient may be referred for an appropriate face-to-face assessment.",
      "All clinical decisions are made independently by the pharmacist based on the information available during the consultation and in accordance with the relevant Pharmacy First requirements, PGDs, professional standards and applicable legislation.",
    ],
  },
  {
    title: "5. Pharmacy First Medicines",
    body: [
      "Where a medicine is supplied as part of the NHS Pharmacy First service, the supply will only take place where the pharmacist has assessed the patient and determined that the requirements of the relevant Pharmacy First PGD and clinical pathway have been met.",
      "Pharmacy First medicines are not purchased through the website. Any medicine supplied is provided as part of the NHS Pharmacy First clinical service following an appropriate pharmacist assessment.",
      "Patients cannot select, purchase or order Pharmacy First medicines directly through the website or require the pharmacy to supply a particular medicine without an appropriate clinical assessment.",
      "The pharmacist may determine that a medicine is not required, that another treatment or advice is more appropriate, or that referral to another healthcare professional is necessary.",
    ],
  },
  {
    title: "6. Pharmacy Medicines and General Sale Medicines",
    body: [
      "Some medicines may be available without a prescription, depending on their legal classification.",
      "The availability of a medicine on the website does not mean that every person is suitable to use it.",
      "Pharmacy medicines may be subject to a pharmacist assessment before supply.",
      "We may refuse or limit supply where this is considered necessary for patient safety or to comply with legal or professional requirements.",
    ],
  },
  {
    title: "7. Private Prescriptions and Private PGDs",
    body: [
      "Where medicines are supplied through a private prescribing service or under a private Patient Group Direction (PGD), the relevant clinical and legal requirements will apply.",
      "Where a medicine is supplied under a PGD, the supply will only take place where the patient meets the applicable inclusion criteria and none of the exclusion criteria apply.",
      "The completion of an online questionnaire does not itself constitute authorisation to supply a medicine.",
      "A pharmacist or other appropriately authorised healthcare professional will determine whether the requirements for supply have been met.",
    ],
  },
  {
    title: "8. Clinical Information and Medical Emergencies",
    body: [
      "Our online services are not intended to replace emergency medical care.",
      "If you are experiencing a medical emergency, severe symptoms or a condition requiring urgent assessment, you should seek appropriate urgent medical assistance rather than relying on our online service.",
      `${site.pharmacy.name} may advise you to contact your GP, NHS 111, an urgent treatment service, emergency department or emergency services where appropriate.`,
    ],
  },
  {
    title: "9. Ordering Medicines",
    body: [
      "Submitting an order through the website constitutes a request to purchase the selected product or service.",
      "An order is not accepted simply because you have received an automated acknowledgement.",
      "For medicines requiring clinical assessment, the order will be subject to the necessary clinical and legal checks.",
      "We reserve the right to decline or cancel an order where:",
      "• the medicine is clinically inappropriate;\n• the patient does not meet the relevant criteria;\n• required information has not been provided;\n• the prescription cannot legally be dispensed;\n• the medicine is unavailable;\n• there are concerns regarding misuse, fraud or diversion;\n• the requested quantity is considered inappropriate; or\n• supply would otherwise be unlawful or unsafe.",
      "Where an order is declined and payment has already been taken, any applicable refund will be processed in accordance with our refund policy and applicable law.",
    ],
  },
  {
    title: "10. Pricing and Payment",
    body: [
      "Prices displayed on the website are stated in pounds sterling (£) and, where applicable, include VAT.",
      "The price payable will be the price displayed at the time the order is submitted, subject to any obvious pricing error.",
      "Delivery charges, where applicable, will be displayed before you complete your purchase.",
      "Payment must be made using the payment methods made available on the website.",
      "We use appropriate secure payment facilities and do not intend to retain complete payment card details unnecessarily.",
      "Where a payment is unsuccessful, we may be unable to process the order until payment has been successfully received.",
    ],
  },
  {
    title: "11. Delivery",
    body: [
      "We will make reasonable efforts to dispatch orders within the delivery timeframe stated on the website.",
      "Delivery times may vary depending on:",
      "• the type of medicine;\n• clinical assessment;\n• prescription processing;\n• stock availability;\n• the delivery service used;\n• weekends and public holidays; and\n• circumstances outside our reasonable control.",
      "Medicines will be packaged appropriately and dispatched using delivery arrangements designed to protect the security, integrity and confidentiality of the medicine and patient information.",
      "Where appropriate, deliveries may require a signature, identification or other verification.",
      "We cannot guarantee a specific delivery time unless expressly agreed.",
      "If an order is delayed, lost or damaged during delivery, please contact us as soon as possible so that we can investigate and take appropriate action.",
    ],
  },
  {
    title: "12. Delivery Address",
    body: [
      "You are responsible for providing an accurate delivery address.",
      "Where medicines are supplied following an online service, we may take reasonable steps to verify the patient's identity and delivery details.",
      "We may restrict delivery to certain addresses where this is necessary to protect patient safety or prevent medicines being supplied to an inappropriate recipient.",
    ],
  },
  {
    title: "13. Medicines, Returns and Refunds",
    body: [
      "For safety, medicines should not ordinarily be returned to the pharmacy for resale once they have left our control.",
      "This does not affect any statutory rights you may have in relation to faulty, damaged, incorrectly supplied or misdescribed goods.",
      "If you believe you have received:",
      "• the wrong medicine;\n• an incorrect quantity;\n• a damaged product;\n• a product that is defective; or\n• a product that does not correspond with your order,",
      "please contact us promptly.",
      "We will investigate the issue and, where appropriate, arrange a replacement, refund or other appropriate remedy.",
      "Any statutory cancellation rights that apply to a particular product or service will be respected. Certain exemptions may apply, including where legislation provides that a right to cancel does not apply.",
      "You should not return medicines by post without first contacting us for instructions.",
    ],
  },
  {
    title: "14. Cancellation",
    body: [
      "You may contact us to request cancellation of an order before it has been processed or dispatched.",
      "For consumer contracts to which statutory cancellation rights apply, cancellation rights will be provided in accordance with applicable legislation.",
      "However, statutory cancellation rights may not apply in certain circumstances, including where an applicable legal exemption applies.",
      "Where a medicine has already been dispensed or supplied following a clinical assessment, cancellation may not necessarily result in a refund.",
      "Nothing in these Terms and Conditions affects your statutory consumer rights.",
    ],
  },
  {
    title: "15. Substitution and Availability",
    body: [
      "If a product becomes unavailable, we may contact you to discuss an appropriate alternative where this is clinically and legally appropriate.",
      "We will not substitute a prescription medicine without appropriate authorisation.",
      "If an appropriate alternative cannot be provided, we may cancel the affected part of the order and issue any applicable refund.",
    ],
  },
  {
    title: "16. Patient Choice and Transparency",
    body: [
      "You are free to choose where you obtain your medicines and pharmacy services.",
      "Using our website does not prevent you from obtaining pharmacy or healthcare services elsewhere.",
      "Where another prescribing service or healthcare provider is involved in your care, we will clearly identify the relevant organisation and the role it performs.",
      "We will not knowingly mislead you about the identity, location or regulatory status of the pharmacy or any prescribing service associated with our website.",
    ],
  },
  {
    title: "17. Communication",
    body: [
      "We may contact you using the contact details you provide to us.",
      "Communications may relate to:",
      "• your order;\n• prescription information;\n• clinical queries;\n• delivery;\n• identity verification;\n• payment;\n• safety information;\n• complaints; or\n• other matters necessary to provide our services.",
      "You should ensure that your contact details remain accurate.",
    ],
  },
  {
    title: "18. Privacy and Personal Data",
    body: [
      "We process personal data in accordance with applicable data protection legislation and our Privacy Policy.",
      "Health information is particularly sensitive and will only be processed where there is an appropriate lawful basis.",
      "Our Privacy Policy explains:",
      "• what information we collect;\n• why we collect it;\n• how it is used;\n• who it may be shared with;\n• how long information is retained; and\n• your rights in relation to your personal data.",
      "Please read our Privacy Policy before using our services.",
    ],
  },
  {
    title: "19. Website Security",
    body: [
      "We take reasonable measures to protect the security of our website and the information processed through it.",
      "However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
      "You are responsible for keeping your account credentials confidential and should notify us promptly if you believe your account has been accessed without authorisation.",
    ],
  },
  {
    title: "20. Website Content",
    body: [
      "We aim to ensure that information published on our website is accurate and kept up to date.",
      "However, website information is provided for general information and does not replace personalised clinical advice.",
      "Medicine information should not be relied upon as a substitute for the advice of a healthcare professional.",
      "We may update, amend or remove website content where necessary.",
    ],
  },
  {
    title: "21. Intellectual Property",
    body: [
      `Unless otherwise stated, the content of this website, including text, logos, graphics, images and other materials, belongs to ${site.pharmacy.name} or is used with permission.`,
      "You may access and use the website for your personal, non-commercial purposes.",
      "You must not reproduce, copy, distribute, modify or commercially exploit website content without our prior written permission.",
    ],
  },
  {
    title: "22. Third-Party Services",
    body: [
      "We may use third-party providers to support aspects of our service, including:",
      "• website hosting;\n• payment processing;\n• identity verification;\n• online consultation technology;\n• IT services;\n• prescription processing;\n• communications; and\n• delivery and courier services.",
      "Where third parties process personal information on our behalf, appropriate contractual and data protection arrangements will be maintained.",
      "Third-party services may have their own terms and privacy policies.",
    ],
  },
  {
    title: "23. Links to Other Websites",
    body: [
      "Our website may contain links to third-party websites.",
      "These links are provided for convenience or information.",
      "We are not responsible for the content, security, availability or privacy practices of third-party websites.",
      "You should review the terms and privacy policies of third-party websites before using them.",
    ],
  },
  {
    title: "24. Complaints and Feedback",
    body: [
      "We welcome feedback about our services.",
      "If you have a concern or complaint, please contact us using:",
      `Email: ${site.contact.complaintsEmail}\nTelephone: ${site.contact.phone}\nPostal address: ${site.pharmacy.addressLines.join(", ")}`,
      "We will investigate complaints in accordance with our complaints procedure.",
      "You will not be disadvantaged for raising a genuine complaint or concern.",
      "Where appropriate, we will provide information about external organisations that may be able to assist with your complaint.",
    ],
  },
  {
    title: "25. Limitation of Liability",
    body: [
      "Nothing in these Terms and Conditions excludes or limits liability where doing so would be unlawful.",
      "In particular, nothing in these Terms and Conditions excludes or limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, defective products, or any other liability that cannot lawfully be excluded or limited.",
      "Subject to the above, we will only be responsible for losses that are reasonably foreseeable and arise directly from our breach of these Terms and Conditions or our legal duties.",
    ],
  },
  {
    title: "26. Events Outside Our Control",
    body: [
      "We will not be responsible for delays or failure to provide services where this results from circumstances beyond our reasonable control.",
      "Such circumstances may include:",
      "• severe weather;\n• natural disasters;\n• significant telecommunications or internet failures;\n• cyber incidents;\n• power failures;\n• industrial action;\n• disruption to postal or courier services;\n• government action;\n• public health emergencies; or\n• other circumstances outside our reasonable control.",
      "We will take reasonable steps to minimise the effect of such events and restore services as soon as reasonably practicable.",
    ],
  },
  {
    title: "27. Changes to These Terms",
    body: [
      "We may update these Terms and Conditions from time to time to reflect changes in:",
      "• legislation;\n• regulatory requirements;\n• pharmacy services;\n• website functionality;\n• delivery arrangements; or\n• business operations.",
      "The latest version will be published on this website.",
      "Where a material change affects an existing contractual arrangement, we will provide any notice required by law.",
    ],
  },
  {
    title: "28. Governing Law",
    body: [
      "These Terms and Conditions are governed by the law of England and Wales.",
      "Any dispute arising in connection with these Terms and Conditions will be subject to the jurisdiction of the courts of England and Wales, subject to any mandatory consumer rights that apply.",
    ],
  },
  {
    title: "29. Contact Us",
    body: [
      "If you have any questions regarding these Terms and Conditions or our pharmacy services, please contact:",
      `${site.pharmacy.name}\n${site.pharmacy.addressLines.join(", ")}\nTelephone: ${site.contact.phone}\nEmail: ${site.contact.email}`,
      `GPhC registration number: ${site.pharmacy.gphcNumber}`,
      "You can verify the registration status of a registered pharmacy and pharmacy professionals through the General Pharmaceutical Council.",
    ],
  },
  {
    title: "Important Information",
    body: [
      "These Terms and Conditions should be read together with our:",
      "• Privacy Policy\n• Cookie Policy\n• Complaints Procedure\n• Delivery and Returns Policy\n• Online Consultation Terms\n• Website Accessibility Statement",
      "By using our website and services, you acknowledge that you have had the opportunity to read and understand these Terms and Conditions.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" crumb="Terms & Conditions" />

      <section className="section-padding">
        <div className="container-cm max-w-4xl">
          <div className="card mb-8 flex flex-col gap-5 !bg-light p-7 sm:flex-row sm:items-center md:p-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
              <FileText width={26} height={26} />
            </span>
            <div>
              <h2 className="text-lg">Summary</h2>
              <p className="mt-1 text-sm leading-relaxed">
                These Terms and Conditions govern your use of the {site.pharmacy.name} website and the pharmacy
                services available through the website. By accessing or using this website, registering for an
                account, submitting an online consultation, purchasing a product or requesting a pharmacy service,
                you agree to these Terms and Conditions. Please read them carefully before using our services.
              </p>
              <p className="mt-2 text-xs text-body">Last updated: {LAST_UPDATED}</p>
            </div>
          </div>

          <article className="card space-y-9 p-7 md:p-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="mb-3 text-xl">{s.title}</h2>
                {s.body.map((p, i) => (
                  <p
                    key={i}
                    className="whitespace-pre-line text-[15px] leading-relaxed text-body first:text-secondary/90 [&:not(:first-child)]:mt-2"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <div className="rounded-base bg-primary/5 p-4 text-sm leading-relaxed">
              You can verify the registration status of a registered pharmacy and pharmacy professionals through
              the General Pharmaceutical Council on the{" "}
              <a
                href={site.registers.pharmacistRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-2"
              >
                GPhC pharmacist register
              </a>
              .
            </div>

            <div>
              <h2 className="mb-2 text-lg">Contact us about these terms</h2>
              <ul className="space-y-2.5 text-sm font-medium text-secondary">
                <li className="flex items-center gap-2.5">
                  <PhoneCall width={15} height={15} className="shrink-0 text-primary" />
                  <a href={site.contact.phoneHref} className="hover:text-primary">
                    {site.contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 break-all">
                  <Mail width={15} height={15} className="shrink-0 text-primary" />
                  <a href={`mailto:${site.contact.email}`} className="hover:text-primary">
                    {site.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-primary">Post:</span> {site.pharmacy.addressLines.join(", ")}
                </li>
              </ul>
            </div>

            <p className="rounded-base border border-line bg-light/60 p-4 text-sm leading-relaxed">
              <strong className="text-secondary">Outside opening hours?</strong> For urgent advice or an emergency
              supply of a prescription call <strong>NHS 111</strong> (free, 24/7) or visit{" "}
              <a
                href="https://111.nhs.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-2"
              >
                111.nhs.uk
              </a>
              . In a life-threatening emergency always call <strong>999</strong>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}