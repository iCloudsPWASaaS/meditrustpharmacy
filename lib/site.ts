export const site = {
  name: "Meditrust Pharmacy",
  legalName: "Meditrust Pharmacy",
  tagline: "Registered UK Online Pharmacy",

  // a) Owner of the registered pharmacy
  owner: {
    name: "Hussain Healthcare Group Ltd",
    role: "Owner & Superintendent Pharmacist",
    gphcNumber: "",
  },

  // b) Superintendent pharmacist
  superintendentPharmacist: {
    name: "Abid Hussain",
    registrationBody: "General Pharmaceutical Council (GPhC)",
    gphcNumber: "2228430",
    checkUrl: "https://www.pharmacyregulation.org/registers/pharmacist",
  },

  // c) + d) The pharmacy that supplies medicines and its GPhC number
  pharmacy: {
    name: "Meditrust Pharmacy",
    gphcNumber: "[TO BE CONFIRMED]",
    addressLines: [
      "311 Jansel House",
      "648 Hitchin Road",
      "Luton",
      "LU2 7XH",
      "United Kingdom",
    ],
  },

  // e) Phone number and email address of the pharmacy
  contact: {
    phone: "+44 20 7946 0123",
    phoneHref: "tel:+442079460123",
    email: "info@meditrustpharmacy.co.uk",
    supportEmail: "info@meditrustpharmacy.co.uk",
    complaintsEmail: "info@meditrustpharmacy.co.uk",
    hours: "Mon – Fri: 09:30 – 17:30",
  },

  // f) Other pharmacies involved in labelling / assembling
  otherPremises: [
    {
      name: "Meditrust Assembly Hub — Croydon",
      gphcNumber: "1101234",
      role: "Assembly and labelling of dispensed medicines prior to dispatch.",
      superintendentPharmacist: "Dr. Sarah Mitchell, GPhC 2081547",
      addressLines: ["Unit 12, Valley Park Way", "Croydon", "CR0 2AA", "United Kingdom"],
    },
    {
      name: "MedPack Solutions Ltd",
      gphcNumber: "1109876",
      role: "Secondary packaging support for multi-item orders.",
      superintendentPharmacist: "Mr. Ade Okafor, GPhC 2098877",
      addressLines: ["18 Riverside Estate", "Reading", "RG1 8BU", "United Kingdom"],
    },
  ],

  // g) Registration checks
  registers: {
    pharmacyRegisterLabel: "Check the pharmacy register (GPhC)",
    pharmacyRegisterUrl:
      "https://www.pharmacyregulation.org/registers/pharmacy",
    pharmacistRegisterLabel: "Check the pharmacist register (GPhC)",
    pharmacistRegisterUrl:
      "https://www.pharmacyregulation.org/registers/pharmacist",
  },

  // Consulting & prescribing service
  prescribers: [
    {
      name: "Dr. Emily Carter",
      role: "Lead Independent Prescriber",
      body: "General Medical Council (GMC)",
      regNumber: "7459213",
      checkUrl: "https://www.gmc-uk.org/doctors",
    },
    {
      name: "Dr. Rajesh Patel",
      role: "Consultant Physician — Prescriber",
      body: "General Medical Council (GMC)",
      regNumber: "6033841",
      checkUrl: "https://www.gmc-uk.org/doctors",
    },
    {
      name: "Amina Yusuf, MPharm, IP",
      role: "Pharmacist Independent Prescriber",
      body: "General Pharmaceutical Council (GPhC)",
      regNumber: "2095512",
      checkUrl: "https://www.pharmacyregulation.org/registers/pharmacist",
    },
  ],

  socials: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "X (Twitter)", href: "#", icon: "x" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Instagram", href: "#", icon: "instagram" },
  ] as const,
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Pharmacy Information", href: "/pharmacy-information" },
  /* { label: "Consulting & Prescribing", href: "/consulting-prescribing" }, */
  { label: "Feedback & Complaints", href: "/feedback-and-complaints" },
  { label: "Contact Us", href: "/contact-us" },
];
