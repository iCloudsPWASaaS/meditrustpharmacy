import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowRight, Mail, PhoneCall } from "../icons";

export default function CtaBanner() {
  return (
    <section className="pb-14 md:pb-20">
      <div className="container-cm">
        <div className="relative overflow-hidden rounded-lg bg-primary px-8 py-12 text-center text-white md:px-16 md:py-16">
          <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 2px, transparent 2px)", backgroundSize: "30px 30px" }} aria-hidden />
          <h2 className="relative mx-auto max-w-2xl text-3xl !text-white md:text-4xl md:leading-tight">
            Get in Touch With Our Pharmacy Team
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/85">
            Questions about your medicines, our registrations or an order? We&apos;re here to help.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* <a href={site.contact.phoneHref} className="btn btn-lg bg-white !text-secondary hover:!bg-secondary hover:!text-white">
              <PhoneCall width={17} height={17} /> {site.contact.phone}
            </a> */}
            <a href={`mailto:${site.contact.email}`} className="btn btn-lg btn-outline-light">
              <Mail width={17} height={17} /> Email Us
            </a>
            <Link href="/contact-us" className="btn btn-lg bg-secondary text-white hover:bg-white hover:text-secondary">
              Appointment <ArrowRight width={17} height={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
