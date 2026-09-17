export const dataCollected = [
  {
    title: "Identity & contact data",
    items: ["Full name", "Date of birth", "Gender", "Billing & delivery address", "Email address", "Telephone number"],
  },
  {
    title: "Health & clinical data",
    items: [
      "Consultation questionnaire answers",
      "Medical history, symptoms & allergies",
      "Current medication",
      "Prescriptions issued to you",
      "Clinical notes made by our pharmacists",
    ],
  },
  {
    title: "Transaction & payment data",
    items: ["Orders placed", "Medicines supplied", "Payment amount & status", "Delivery tracking details"],
  },
  {
    title: "Technical data",
    items: ["IP address", "Device & browser type", "Login / session activity", "Cookie preferences"],
  },
];

export const purposes = [
  {
    why: "Providing consultations and supplying medicines",
    basis: "Contract (Art. 6(1)(b)) and provision of health care (Art. 9(2)(h))",
  },
  {
    why: "Keeping pharmacy records required by medicines legislation",
    basis: "Legal obligation (Art. 6(1)(c)) — Human Medicines Regulations 2012",
  },
  {
    why: "Verifying your identity and age before supplying medicines",
    basis: "Legal obligation (Art. 6(1)(c))",
  },
  {
    why: "Screening for duplicate or repeat requests and preventing fraud or diversion of medicines",
    basis: "Legitimate interests (Art. 6(1)(f)) — see ‘Order screening’ below",
  },
  {
    why: "Taking payments and preventing payment fraud",
    basis: "Contract (Art. 6(1)(b)) and legitimate interests (Art. 6(1)(f))",
  },
  {
    why: "Handling feedback, complaints and medicine safety reports",
    basis: "Legal obligation and legitimate interests",
  },
  {
    why: "Sending marketing emails and newsletters",
    basis: "Consent (Art. 6(1)(a)) — withdraw any time",
  },
];

export const sharing = [
  { who: "Registered prescribers & pharmacists", why: "To assess your consultation and dispense safely" },
  { who: "Your NHS GP practice", why: "Where clinically necessary or with your agreement" },
  { who: "Couriers & postal operators", why: "Name, address and contact number only — to deliver your order" },
  { who: "Payment providers", why: "To take and refund payments securely (card details are never stored by us)" },
  { who: "IT & hosting suppliers", why: "Process data on our behalf under strict written contracts" },
  { who: "Regulators (GPhC, ICO) & auditors", why: "Where we are legally required or it is in the public interest" },
  { who: "Law enforcement & courts", why: "Only where there is a legal basis, e.g. suspected fraud or a court order" },
];

export const rights = [
  "Be informed about how we use your data (this notice)",
  "Access a copy of your personal data",
  "Correct inaccurate or incomplete data",
  "Erase data in certain circumstances",
  "Restrict or object to processing",
  "Data portability",
  "Withdraw consent at any time (e.g. marketing)",
  "Complain to the ICO (see below)",
];
