import Link from "next/link";
import Image from "next/image";

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Meditrust Pharmacy home"
      className={`inline-flex items-center overflow-hidden rounded-lg ${
        variant === "light" ? "px-2 py-1" : ""
      } ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Meditrust Pharmacy"
        width={280}
        height={110}
        //className="h-12 w-auto md:h-14"
        priority
      />
    </Link>
  );
}
