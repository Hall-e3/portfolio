"use client";

import { useState } from "react";
import {
  ArrowRightIcon,
  BeakerIcon,
  BoltIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketIcon,
  CpuChipIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { useModals } from "@/lib/modal-context";

const PILLARS = [
  {
    id: "tdd",
    num: "01",
    icon: ShieldCheckIcon,
    title: "Test-Driven Development & Cypress E2E Testing",
    tagline: "Quality Guaranteed Before Production Release",
    shortDesc:
      "Every project follows strict Test-Driven Development (TDD) principles, robust type contracts, and automated Cypress end-to-end testing to eliminate regressions.",
    deepDive: {
      heading: "Comprehensive Test-Driven Engineering Workflow",
      bullets: [
        "Writing unit & integration test contracts before writing business implementation logic.",
        "Cypress E2E test suites covering multi-step user checkout, identity verification, and document upload flows.",
        "Automated continuous integration (CI) test runs prior to production deployments.",
        "Cross-browser and multi-viewport regression testing (iOS, Android, Desktop).",
      ],
    },
  },
  {
    id: "failure-aware",
    num: "02",
    icon: BoltIcon,
    title: "Failure-Aware Design & Resilient Systems",
    tagline: "Engineered for Reality, Not Just Happy Paths",
    shortDesc:
      "Building software that gracefully handles network latency, API outages, device constraints, and dropped connections without corrupting user state.",
    deepDive: {
      heading: "Designing for Environmental Realities & Edge Cases",
      bullets: [
        "Offline tolerance & background state synchronization upon reconnection.",
        "Automatic request retries with exponential backoff and jitter algorithms.",
        "Payload optimization, responsive asset compression, and lazy loading for low-bandwidth networks.",
        "Actionable, human-readable error handling that guides the user rather than leaving them stranded.",
      ],
    },
  },
  {
    id: "idempotency",
    num: "03",
    icon: CheckCircleIcon,
    title: "Transactional Integrity & Idempotency",
    tagline: "Zero Duplicate Charges or Double Submissions",
    shortDesc:
      "Protecting financial and transactional workflows using client-side action locking, server-side idempotency keys, explicit state machines, and reconciliation.",
    deepDive: {
      heading: "Robust State Machines & Automated Reconciliation",
      bullets: [
        "Idempotency keys (e.g. ORDER-XYZ-PAYMENT) preventing duplicate transactions on network retries.",
        "Explicit status state machines (PENDING, PROCESSING, SUCCESS, RECONCILING) to prevent false failures.",
        "Automated background reconciliation jobs comparing local database records against payment provider ledgers.",
        "Client UI disabling and pending indicators during active request execution.",
      ],
    },
  },
  {
    id: "dependence",
    num: "04",
    icon: CpuChipIcon,
    title: "Strategic vs. Helpless Dependence",
    tagline: "Architecture That Controls Dependencies, Not Vice Versa",
    shortDesc:
      "Abstracting third-party APIs (payment gateways, mailers, analytics) with clean interfaces and fallback providers so external downtime never brings down the app.",
    deepDive: {
      heading: "Dependency Abstraction & Fallback Resilience",
      bullets: [
        "Decoupled provider interfaces allowing seamless switching between external services (e.g. email or SMS providers).",
        "Asynchronous task queues for background email delivery and notifications via Nodemailer / Redis.",
        "Graceful degradation strategies when third-party microservices experience unexpected downtime.",
        "Self-contained domain models that preserve business continuity independent of external vendor changes.",
      ],
    },
  },
  {
    id: "fundamentals",
    num: "05",
    icon: CodeBracketIcon,
    title: "Deep Fundamentals & Systems Thinking",
    tagline: "Mastering the Mechanics Beneath Framework Abstractions",
    shortDesc:
      "Going beyond superficial framework CRUD: mastering HTTP/TLS/DNS internals, state ownership boundaries, database transactions, caching, and security hygiene.",
    deepDive: {
      heading: "Comprehensive Full-Stack & Browser Mastery",
      bullets: [
        "HTTP semantics, precise status code handling (401, 403, 409, 429, 503), headers, and CORS security.",
        "Clear state separation: UI state vs Local state vs Server state vs Persistent offline state.",
        "Database optimization: relational normalization, query indexing, transactions, locks, and migration safety.",
        "Security hygiene: XSS protection, CSRF prevention, HttpOnly cookies, and secret management.",
      ],
    },
  },
  {
    id: "ai-productivity",
    num: "06",
    icon: SparklesIcon,
    title: "Pragmatic AI Acceleration with Human Intent",
    tagline: "First-Principles Engineering Amplified by AI Productivity",
    shortDesc:
      "Leveraging AI LLM agents and developer tools for rapid bug detection, edge-case analysis, and code reviews while keeping human architecture design firmly in command.",
    deepDive: {
      heading: "Human First-Principles + AI Productivity Collaboration",
      bullets: [
        "Human-first domain modeling: human engineering defines system architecture, boundaries, and security contracts.",
        "AI agents utilized as high-velocity research partners, edge-case bug identifiers, and syntax suggestions.",
        "Strict code review & automated test verification for all AI-assisted code output.",
        "Continuous skill growth focused on enduring software engineering fundamentals over transient hype tools.",
      ],
    },
  },
];

export default function EngineeringMethodology() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>("tdd");
  const { openPlaybook } = useModals();

  const activePillar = PILLARS.find((p) => p.id === selectedPillarId) || PILLARS[0];

  function handleSelectPillar(id: string) {
    setSelectedPillarId(id);
    document.getElementById("playbook-deep-dive")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="methodology" className="py-12 pb-14 border-t border-line">
      {/* Header */}
      <div className="mb-9 flex flex-col md:flex-row md:items-end justify-between border-b border-line pb-4 gap-4">
        <div>
          <span className="font-mono text-xs font-semibold tracking-widest text-acc uppercase block mb-1">
            SDLC Rigor &amp; Software Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-fg">
            Engineering Methodology &amp; System Philosophy
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={openPlaybook}
            className="inline-flex items-center gap-2 rounded-md bg-acc px-4 py-2.5 font-mono text-xs font-semibold text-bg transition-all hover:opacity-90 cursor-pointer shadow-sm shrink-0"
          >
            <BookOpenIcon className="h-4 w-4 text-bg" /> Read Full Playbook &amp; Manifesto
          </button>
        </div>
      </div>

      {/* Grid of 6 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PILLARS.map((pillar) => {
          const isSelected = pillar.id === selectedPillarId;
          const Icon = pillar.icon;

          return (
            <div
              key={pillar.id}
              onClick={() => handleSelectPillar(pillar.id)}
              className={`flex flex-col justify-between rounded-lg border p-6 transition-all cursor-pointer ${
                isSelected
                  ? "border-acc bg-acc-soft/30 shadow-md"
                  : "border-line bg-bg2 hover:border-acc/50 hover:bg-bg2/80"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-acc">{pillar.num}</span>
                  <Icon className={`h-5 w-5 ${isSelected ? "text-acc" : "text-mut"}`} />
                </div>
                <h3 className="font-serif text-xl font-normal text-fg mb-1">{pillar.title}</h3>
                <span className="font-mono text-[11px] text-acc font-medium block mb-2.5">
                  {pillar.tagline}
                </span>
                <p className="text-xs leading-relaxed text-mut">{pillar.shortDesc}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-line/60 flex items-center justify-between text-xs font-mono">
                <span className={isSelected ? "text-acc font-semibold" : "text-mut"}>
                  {isSelected ? "Active Deep Dive" : "Explore Playbook"}
                </span>
                <ArrowRightIcon className={`h-3.5 w-3.5 ${isSelected ? "text-acc" : "text-mut"}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Playbook Viewer Box */}
      <div id="playbook-deep-dive" className="mt-8 rounded-lg border border-line bg-bg2 p-6 sm:p-8 scroll-mt-24">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4 mb-5">
          <div className="flex items-center gap-3">
            <activePillar.icon className="h-6 w-6 text-acc" />
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-acc font-bold">
                Playbook Deep Dive · {activePillar.num}
              </span>
              <h3 className="font-serif text-2xl font-normal text-fg">{activePillar.deepDive.heading}</h3>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={openPlaybook}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs rounded-md bg-acc-soft text-acc font-semibold border border-acc/40 hover:bg-acc hover:text-bg transition-colors cursor-pointer mr-1"
            >
              <BookOpenIcon className="h-3.5 w-3.5" /> Full Reader Modal
            </button>

            {PILLARS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPillarId(p.id)}
                className={`px-3 py-1 font-mono text-xs rounded-md transition-colors cursor-pointer ${
                  p.id === selectedPillarId
                    ? "bg-acc text-bg font-semibold"
                    : "bg-bg border border-line text-mut hover:text-fg"
                }`}
              >
                {p.num}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activePillar.deepDive.bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-md border border-line bg-bg p-4">
              <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-mut leading-relaxed">{bullet}</p>
            </div>
          ))}
        </div>

        {/* Commitment Badge */}
        <div className="mt-6 pt-4 border-t border-line/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-mut">
            <BeakerIcon className="h-4 w-4 text-acc" />
            <span>Guaranteed Test Coverage &amp; Clean Architecture on Every Deliverable</span>
          </div>
          <button
            onClick={openPlaybook}
            className="inline-flex items-center gap-1.5 text-acc hover:underline font-semibold cursor-pointer"
          >
            Read Complete Engineering Manifesto <ArrowRightIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
