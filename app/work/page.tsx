import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import ProjectGrid from "@/components/work/ProjectGrid";

export const metadata: Metadata = {
  title: "Selected work — Hall Enoch Asanda",
  description:
    "Production apps shipped for clients across e-commerce, travel, real estate, and legal-tech.",
};

export default function WorkPage() {
  return (
    <section className="animate-pf-up py-15 pb-15">
      <Link href="/" className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-mut">
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
