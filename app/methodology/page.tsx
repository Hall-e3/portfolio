import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import EngineeringMethodology from "@/components/home/EngineeringMethodology";
import Process from "@/components/home/Process";

export const metadata: Metadata = {
  title: "Engineering Methodology & SDLC Workflow",
  description:
    "End-to-end SDLC workflow, Test-Driven Development (TDD), Cypress E2E automation, failure-aware UI design, strategic dependency management, and pragmatic AI acceleration.",
  openGraph: {
    title: "Engineering Methodology & Systems Rigor | Hall Enoch Asanda",
    description:
      "Detailed overview of SDLC rigor, TDD testing, Cypress E2E automation, idempotency, and full-stack software architecture.",
  },
};

export default function MethodologyPage() {
  return (
    <div className="animate-pf-up py-10 pb-16">
      <Link href="/" className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-mut hover:text-fg transition-colors cursor-pointer mb-6">
        <ArrowLeftIcon className="h-3.5 w-3.5" /> back home
      </Link>
      <Process />
      <EngineeringMethodology />
    </div>
  );
}
