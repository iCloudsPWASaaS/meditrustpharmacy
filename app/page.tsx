import Link from "next/link";
import Hero from "@/components/home/Hero";
import AboutFacilities from "@/components/home/AboutFacilities";
import StatsBand from "@/components/home/StatsBand";
import Services from "@/components/home/Services";
import PharmacyInfoSection from "@/components/home/PharmacyInfoSection";
import PrescribingSection from "@/components/home/PrescribingSection";
import AppointmentForm from "@/components/home/AppointmentForm";
import WhyChoose from "@/components/home/WhyChoose";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import HowItWorks from "@/components/home/HowItWorks";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutFacilities />
      {/* <StatsBand /> */}
      <Services />
      <PharmacyInfoSection />
      <PrescribingSection />
      <AppointmentForm />
      {/* <WhyChoose /> */}
      {/* <Team /> */}
      {/* <Testimonials /> */}
      {/* <HowItWorks /> */}
      <FaqSection />
      <CtaBanner />
    </>
  );
}
