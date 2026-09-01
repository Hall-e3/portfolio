"use client";

import { useState } from "react";
import {
  BeakerIcon,
  BoltIcon,
  BookOpenIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  CpuChipIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useModals } from "@/lib/modal-context";
import Modal from "./Modal";

type PlaybookTab = "systems" | "frontend" | "ai-human";

export default function PlaybookModal() {
  const { playbookOpen, closePlaybook, openStartProject } = useModals();
  const [activeTab, setActiveTab] = useState<PlaybookTab>("systems");

  if (!playbookOpen) return null;

  return (
    <Modal
      open={playbookOpen}
      onClose={closePlaybook}
      ariaLabel="Full Software Engineering & Systems Playbook"
      widthClassName="max-w-4xl max-h-[92vh] overflow-y-auto"
      bgClassName="bg-bg2 text-fg border-line shadow-2xl"
    >
      <div className="flex flex-col gap-6 p-2 sm:p-4 text-fg">
        {/* Header */}
        <div className="border-b border-line pb-6">
          <div className="flex items-center justify-between gap-3 mb-3 font-mono text-xs sm:text-sm tracking-wider uppercase">
            <span className="inline-flex items-center gap-2 rounded-full bg-acc-soft px-3 py-1 text-acc font-semibold">
              <BookOpenIcon className="h-4 w-4 text-acc" /> Official Engineering Manifesto &amp; Playbook
            </span>
            <button
              onClick={closePlaybook}
              aria-label="Close Playbook"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-bg hover:border-acc hover:text-acc transition-colors text-mut cursor-pointer"
            >
              <XMarkIcon className="h-4.5 w-4.5" />
            </button>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-fg leading-tight">
            From Framework Assembling to Resilient Systems Engineering
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-mut font-sans">
            A comprehensive blueprint detailing failure-aware design, Test-Driven Development (TDD), full-stack systems fundamentals, and balancing human intent with AI productivity.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="border-b border-line flex flex-wrap gap-3 pb-1">
          <button
            onClick={() => setActiveTab("systems")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs sm:text-sm tracking-wide transition-colors border-b-2 cursor-pointer ${
              activeTab === "systems"
                ? "border-acc text-acc font-bold"
                : "border-transparent text-mut hover:text-fg"
            }`}
          >
            <CpuChipIcon className="h-4.5 w-4.5" /> Systems Engineering &amp; Failure Design
          </button>
          <button
            onClick={() => setActiveTab("frontend")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs sm:text-sm tracking-wide transition-colors border-b-2 cursor-pointer ${
              activeTab === "frontend"
                ? "border-acc text-acc font-bold"
                : "border-transparent text-mut hover:text-fg"
            }`}
          >
            <CodeBracketIcon className="h-4.5 w-4.5" /> The Systems-Oriented Frontend
          </button>
          <button
            onClick={() => setActiveTab("ai-human")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs sm:text-sm tracking-wide transition-colors border-b-2 cursor-pointer ${
              activeTab === "ai-human"
                ? "border-acc text-acc font-bold"
                : "border-transparent text-mut hover:text-fg"
            }`}
          >
            <SparklesIcon className="h-4.5 w-4.5" /> AI Productivity + Human Intent
          </button>
        </div>

        {/* Tab 1: Systems Engineering */}
        {activeTab === "systems" && (
          <div className="flex flex-col gap-6 py-2">
            <div className="rounded-xl border border-line bg-bg p-6 space-y-2">
              <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-acc flex items-center gap-2">
                <BoltIcon className="h-5 w-5 text-acc" /> Core Distinction: Assembling Apps vs. Engineering Systems
              </h3>
              <p className="text-sm sm:text-base text-mut leading-relaxed">
                Modern framework packages allow developers to stitch together APIs quickly. True software engineering begins when environmental realities strike — network dropouts, late payment callbacks, duplicate client clicks, or third-party service outages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-line bg-bg p-6 space-y-3">
                <h4 className="font-serif text-xl text-fg font-normal flex items-center gap-2">
                  <ExclamationTriangleIcon className="h-5 w-5 text-acc shrink-0" /> Failure-Aware Design
                </h4>
                <ul className="text-xs sm:text-sm text-mut space-y-3 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span><strong className="text-fg">Offline Tolerance:</strong> Local queues and synchronization when network drops occur.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span><strong className="text-fg">Intelligent Retries:</strong> Exponential backoff with jitter to prevent server thundering herds.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span><strong className="text-fg">State Machine Precision:</strong> Explicit status states (PENDING, RECONCILING, SUCCESS).</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-line bg-bg p-6 space-y-3">
                <h4 className="font-serif text-xl text-fg font-normal flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-acc shrink-0" /> Idempotency &amp; Reconciliation
                </h4>
                <ul className="text-xs sm:text-sm text-mut space-y-3 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span><strong className="text-fg">Idempotency Keys:</strong> Protecting payments/orders against duplicate client submissions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span><strong className="text-fg">Automated Reconciliation:</strong> Background jobs matching internal ledgers against provider records.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span><strong className="text-fg">Strategic Control:</strong> Building API fallbacks so single vendor outages never collapse operations.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-bg p-6 space-y-3">
              <h4 className="font-serif text-xl text-fg font-normal flex items-center gap-2">
                <WrenchScrewdriverIcon className="h-5 w-5 text-acc shrink-0" /> Technical Depth: Databases &amp; Networking
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-mut">
                <div className="p-4 rounded-lg border border-line/60 bg-bg2 space-y-1">
                  <strong className="text-fg block text-sm sm:text-base font-semibold">Database Mechanics:</strong>
                  Transactions, indexes, locks, constraints, replication, backups, and query performance optimization.
                </div>
                <div className="p-4 rounded-lg border border-line/60 bg-bg2 space-y-1">
                  <strong className="text-fg block text-sm sm:text-base font-semibold">Networking Fundamentals:</strong>
                  HTTP status codes (401, 403, 409, 429, 503), TLS/DNS, CORS, latency management, and payload compression.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Frontend Engineering */}
        {activeTab === "frontend" && (
          <div className="flex flex-col gap-6 py-2">
            <div className="rounded-xl border border-line bg-bg p-6 space-y-2">
              <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-acc flex items-center gap-2">
                <CodeBracketIcon className="h-5 w-5 text-acc" /> The 4 Levels of a Frontend Systems Engineer
              </h3>
              <p className="text-sm sm:text-base text-mut leading-relaxed">
                Beyond building UI templates, a senior frontend engineer understands state ownership boundaries, async concurrency, security hygiene, and failure UI design across the entire user journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-line bg-bg p-6 space-y-3">
                <h4 className="font-serif text-xl text-fg font-normal flex items-center gap-2">
                  <ShieldCheckIcon className="h-5 w-5 text-acc shrink-0" /> UI State Machine &amp; Security
                </h4>
                <ul className="text-xs sm:text-sm text-mut space-y-3 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span><strong className="text-fg">UI States:</strong> Designing explicit Loading, Empty, Stale, Offline, Retry, and Error view states.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span><strong className="text-fg">Security Hygiene:</strong> XSS prevention, CSRF mitigation, HttpOnly tokens, and safe log handling.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span><strong className="text-fg">State Ownership:</strong> Separating Local UI state, Server cache state, and Offline persistent state.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-line bg-bg p-6 space-y-3">
                <h4 className="font-serif text-xl text-fg font-normal flex items-center gap-2">
                  <BeakerIcon className="h-5 w-5 text-acc shrink-0" /> Async Concurrency &amp; Testing
                </h4>
                <ul className="text-xs sm:text-sm text-mut space-y-3 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span><strong className="text-fg">Race Condition Guards:</strong> Handling out-of-order API responses, request cancellation, and debouncing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span><strong className="text-fg">Cypress E2E Testing:</strong> End-to-end user path verification from login to multi-step checkout.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span><strong className="text-fg">Performance Metrics:</strong> Optimizing bundle splits, dynamic imports, LCP, and rendering frames.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: AI Productivity + Human Intent */}
        {activeTab === "ai-human" && (
          <div className="flex flex-col gap-6 py-2">
            <div className="rounded-xl border border-acc/40 bg-acc-soft p-6 space-y-2">
              <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-acc flex items-center gap-2">
                <SparklesIcon className="h-5 w-5 text-acc" /> Pragmatic AI Productivity Guided by Human Intent
              </h3>
              <p className="text-sm sm:text-base text-fg leading-relaxed font-medium">
                I actively utilize AI coding tools and LLM agents to supercharge productivity — using them for rapid bug hunting, edge-case analysis, syntax checks, and research. However, AI never replaces human domain modeling, architectural boundaries, or first-principles reasoning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-line bg-bg p-6 space-y-3">
                <h4 className="font-serif text-xl text-fg font-normal flex items-center gap-2">
                  <LightBulbIcon className="h-5 w-5 text-acc shrink-0" /> Human Intent &amp; System Ownership
                </h4>
                <ul className="text-xs sm:text-sm text-mut space-y-3 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span>First-principles data modeling and entity domain boundaries.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span>Security contracts, idempotency rules, and payment authorization logic.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span>Critical evaluation of edge cases in production environments.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-line bg-bg p-6 space-y-3">
                <h4 className="font-serif text-xl text-fg font-normal flex items-center gap-2">
                  <RocketLaunchIcon className="h-5 w-5 text-acc shrink-0" /> AI Velocity Amplification
                </h4>
                <ul className="text-xs sm:text-sm text-mut space-y-3 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span>Rapid bug detection and edge-case scenario stress testing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span>Instant documentation synthesis and API integration research.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-acc shrink-0 mt-0.5" />
                    <span>Strict automated test verification for all generated code.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="border-t border-line pt-6 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              closePlaybook();
              openStartProject();
            }}
            className="inline-flex items-center gap-2 rounded-md bg-acc px-5 py-3 font-mono text-xs sm:text-sm font-semibold text-bg transition-all hover:opacity-90 cursor-pointer shadow-sm"
          >
            <SparklesIcon className="h-4 w-4" /> Request an Engineering Build Quote
          </button>

          <button
            onClick={closePlaybook}
            className="rounded-md border border-line bg-bg px-5 py-3 font-mono text-xs sm:text-sm font-semibold text-mut hover:text-fg transition-colors cursor-pointer"
          >
            Close Reader
          </button>
        </div>
      </div>
    </Modal>
  );
}
