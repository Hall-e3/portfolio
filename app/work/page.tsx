import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import ProjectGrid from "@/components/work/ProjectGrid";

export const metadata: Metadata = {
  title: "Selected Work & Technical Case Studies",
  description:
    "Explore production web and mobile software projects engineered by Hall Enoch Asanda — including microfinance loan monorepos, React Native mobile apps, and Next.js platforms.",
  openGraph: {
    title: "Selected Work & Case Studies | Hall Enoch Asanda",
    description:
      "Production software builds across microfinance, e-commerce, real estate, and mobile apps.",
  },
};

export default function WorkPage() {
  return (
    <section className="animate-pf-up py-15 pb-15">
      <Link href="/" className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-mut cursor-pointer">
        <ArrowLeftIcon className="h-3.5 w-3.5" /> back home
      </Link>
      <h1 className="mt-6.5 mb-2.5 font-serif text-[clamp(38px,5vw,58px)] leading-tight font-normal">
        Selected work
      </h1>
      <p className="mb-8.5 max-w-140 text-[15px] leading-relaxed text-mut">
        Production apps shipped for clients across e-commerce, travel, real estate, and legal-tech.
      </p>
      <ProjectGrid />
    </section>
  );
}
