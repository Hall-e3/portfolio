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
  DocumentTextIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon,
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
      <div className="flex flex-col gap-6 text-fg">
        {/* Header */}
        <div className="border-b border-line pb-4">
          <div className="flex items-center justify-between gap-3 mb-2 font-mono text-xs tracking-wider uppercase">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-acc-soft px-2.5 py-0.5 text-acc font-semibold">
              <BookOpenIcon className="h-3.5 w-3.5 text-acc" /> Official Playbook &amp; Engineering Manifesto
            </span>
            <button
              onClick={closePlaybook}
              aria-label="Close Playbook"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-bg hover:border-acc hover:text-acc transition-colors text-mut cursor-pointer"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-fg">
            From Technology Consumption to Systems Engineering
          </h2>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-mut font-mono">
            A comprehensive blueprint on building resilient, failure-aware software, mastering full-stack fundamentals, and balancing human intent with AI productivity.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="border-b border-line flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("systems")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 font-mono text-xs tracking-wide transition-colors border-b-2 cursor-pointer ${
              activeTab === "systems"
                ? "border-acc text-acc font-semibold"
                : "border-transparent text-mut hover:text-fg"
            }`}
          >
            <CpuChipIcon className="h-4 w-4" /> Systems Engineering &amp; Failure Design
          </button>
          <button
            onClick={() => setActiveTab("frontend")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 font-mono text-xs tracking-wide transition-colors border-b-2 cursor-pointer ${
              activeTab === "frontend"
                ? "border-acc text-acc font-semibold"
                : "border-transparent text-mut hover:text-fg"
            }`}
          >
            <CodeBracketIcon className="h-4 w-4" /> The Systems-Oriented Frontend
          </button>
          <button
            onClick={() => setActiveTab("ai-human")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 font-mono text-xs tracking-wide transition-colors border-b-2 cursor-pointer ${
              activeTab === "ai-human"
                ? "border-acc text-acc font-semibold"
                : "border-transparent text-mut hover:text-fg"
            }`}
          >
            <SparklesIcon className="h-4 w-4" /> AI Productivity + Human Intent
          </button>
        </div>

        {/* Tab 1: Systems Engineering */}
        {activeTab === "systems" && (
          <div className="flex flex-col gap-5 text-sm">
            <div className="rounded-md border border-line bg-bg p-5">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-acc mb-2 flex items-center gap-2">
                <BoltIcon className="h-4 w-4" /> Core Distinction: Assembling Apps vs. Systems Engineering
              </h3>
              <p className="text-xs sm:text-sm text-mut leading-relaxed">
                Modern developers can build quick prototypes by chaining APIs and cloud packages. True software engineering begins when conditions become difficult — network dropouts, late payment callbacks, duplicate client clicks, or third-party service outages.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-md border border-line bg-bg p-4.5">
                <h4 className="font-mono text-xs text-fg uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                  <ExclamationTriangleIcon className="h-4 w-4 text-acc" /> Failure-Aware Design
                </h4>
                <ul className="text-xs text-mut space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span><strong>Offline Tolerance:</strong> Local queues and synchronization when network drops occur.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span><strong>Intelligent Retries:</strong> Exponential backoff with jitter to prevent server thundering herds.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span><strong>State Machine Precision:</strong> Using PENDING, RECONCILING, and SUCCESS states.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-md border border-line bg-bg p-4.5">
                <h4 className="font-mono text-xs text-fg uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                  <CheckCircleIcon className="h-4 w-4 text-acc" /> Idempotency &amp; Reconciliation
                </h4>
                <ul className="text-xs text-mut space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span><strong>Idempotency Keys:</strong> Protecting payments/orders against duplicate client submissions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span><strong>Automated Reconciliation:</strong> Background jobs matching internal ledgers against provider records.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span><strong>Strategic Control:</strong> Building API fallbacks so single vendor outages never collapse operations.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-md border border-line bg-bg p-5">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-acc mb-2 flex items-center gap-2">
                <WrenchScrewdriverIcon className="h-4 w-4" /> Technical Depth: Databases &amp; Networking
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-mut">
                <div className="p-3 rounded border border-line/60 bg-bg2">
                  <strong className="text-fg block mb-1">Database Mechanics:</strong>
                  Transactions, indexes, locks, constraints, replication, backups, and query performance optimization.
                </div>
                <div className="p-3 rounded border border-line/60 bg-bg2">
                  <strong className="text-fg block mb-1">Networking Fundamentals:</strong>
                  HTTP status codes (401, 403, 409, 429, 503), TLS/DNS, CORS, latency management, and payload compression.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Frontend Engineering */}
        {activeTab === "frontend" && (
          <div className="flex flex-col gap-5 text-sm">
            <div className="rounded-md border border-line bg-bg p-5">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-acc mb-2 flex items-center gap-2">
                <CodeBracketIcon className="h-4 w-4" /> The 4 Levels of a Frontend Systems Engineer
              </h3>
              <p className="text-xs sm:text-sm text-mut leading-relaxed">
                Beyond building UI templates, a senior frontend engineer understands state ownership boundaries, async concurrency, security hygiene, and failure UI design across the entire user journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-md border border-line bg-bg p-4.5">
                <h4 className="font-mono text-xs text-fg uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                  <ShieldCheckIcon className="h-4 w-4 text-acc" /> UI State Machine &amp; Security
                </h4>
                <ul className="text-xs text-mut space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span><strong>UI States:</strong> Designing explicit Loading, Empty, Stale, Offline, Retry, and Error view states.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span><strong>Security Hygiene:</strong> XSS prevention, CSRF mitigation, HttpOnly tokens, and safe log handling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span><strong>State Ownership:</strong> Separating Local UI state, Server cache state, and Offline persistent state.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-md border border-line bg-bg p-4.5">
                <h4 className="font-mono text-xs text-fg uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                  <BeakerIcon className="h-4 w-4 text-acc" /> Async Concurrency &amp; Testing
                </h4>
                <ul className="text-xs text-mut space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span><strong>Race Condition Guards:</strong> Handling out-of-order API responses, request cancellation, and debouncing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span><strong>Cypress E2E Testing:</strong> End-to-end user path verification from login to multi-step checkout.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span><strong>Performance Metrics:</strong> Optimizing bundle splits, dynamic imports, LCP, and rendering frames.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: AI Productivity + Human Intent */}
        {activeTab === "ai-human" && (
          <div className="flex flex-col gap-5 text-sm">
            <div className="rounded-md border border-acc/40 bg-acc-soft p-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-acc mb-2 flex items-center gap-2">
                <SparklesIcon className="h-4 w-4 text-acc" /> Pragmatic AI Productivity Guided by Human Engineering
              </h3>
              <p className="text-xs sm:text-sm text-fg leading-relaxed font-medium">
                I actively utilize AI coding tools and LLM agents to supercharge productivity — using them for rapid bug hunting, edge-case analysis, syntax checks, and research. However, AI never replaces human domain modeling, architectural boundaries, or first-principles reasoning.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-md border border-line bg-bg p-4.5">
                <h4 className="font-mono text-xs text-fg uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                  <LightBulbIcon className="h-4 w-4 text-acc" /> Human Intent &amp; System Ownership
                </h4>
                <ul className="text-xs text-mut space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span>First-principles data modeling and entity domain boundaries.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span>Security contracts, idempotency rules, and payment authorization logic.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span>Critical evaluation of edge cases in production environments.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-md border border-line bg-bg p-4.5">
                <h4 className="font-mono text-xs text-fg uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                  <RocketLaunchIcon className="h-4 w-4 text-acc" /> AI Velocity Amplification
                </h4>
                <ul className="text-xs text-mut space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span>Rapid bug detection and edge-case scenario stress testing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span>Instant documentation synthesis and API integration research.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-acc mt-1 shrink-0" />
                    <span>Strict automated test verification for all generated code.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="border-t border-line pt-4 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              closePlaybook();
              openStartProject();
            }}
            className="inline-flex items-center gap-1.5 rounded-md bg-acc px-4 py-2.5 font-mono text-xs font-semibold text-bg transition-all hover:opacity-90 cursor-pointer shadow-sm"
          >
            <SparklesIcon className="h-4 w-4" /> Request a Engineering Build Quote
          </button>

          <button
            onClick={closePlaybook}
            className="rounded-md border border-line bg-bg px-4 py-2.5 font-mono text-xs text-mut hover:text-fg transition-colors cursor-pointer"
          >
            Close Reader
          </button>
        </div>
      </div>
    </Modal>
  );
}
