import Counter from "../Counter";
import { AvatarGroup } from "../AvatarInitials";

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#00BDE0 2px, transparent 2px)", backgroundSize: "34px 34px" }} aria-hidden />
      <div className="container-cm relative grid items-center gap-10 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="m-b30">
          <AvatarGroup names={["Anna Lee", "Mark Cole", "Sara Iqbal", "Tom Reid"]} size={50} />
          <h2 className="mt-4 max-w-sm text-xl font-semibold leading-snug text-white md:text-2xl">
            300+ Appointment Bookings Confirmed This Week
          </h2>
        </div>
        <div className="border-white/15 sm:border-l sm:pl-8 lg:border-l lg:pl-8">
          <Counter value={25} suffix="+" label="Specialists" />
        </div>
        <div className="border-white/15 sm:border-l sm:pl-8 lg:border-l lg:pl-8">
          <Counter value={150} suffix="K+" label="Happy Patients" />
        </div>
        <div className="border-white/15 sm:border-l sm:pl-8 lg:border-l lg:pl-8">
          <Counter value={30} suffix="+" label="Winning Awards" />
        </div>
      </div>
    </section>
  );
}
