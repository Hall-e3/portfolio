"use client";

import { useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  BeakerIcon,
  BoltIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import type { Project } from "@/content/types";
import { useModals } from "@/lib/modal-context";
import Modal from "./Modal";

type DetailTab = "architecture" | "sdlc" | "challenges" | "timeline" | "availability";

function getFallbackArchitecture(project: Project) {
  const isMobile = /mobile/i.test(project.platform);
  const isFullStack = /full/i.test(project.role);

  return {
    overview: `${project.title} was architected with a strict separation of concerns, emphasizing scalability, maintainability, and fast client load times. Built using ${project.tech.join(
      ", "
    )}.`,
    frontend: isMobile
      ? "React Native with Expo framework, structured into modular feature components with stateful UI isolated from data-fetching hooks."
      : "Next.js App Router (TypeScript) utilizing Server/Client component boundaries, optimized web fonts, and Tailwind CSS design tokens.",
    backend: isFullStack
      ? "NestJS / Node.js REST API with TypeORM & PostgreSQL handling data validation, transactional integrity, and role-based access control."
      : "Third-party APIs & headless backend services integrated via clean API abstraction layers.",
    database: "PostgreSQL relational database with normalized schema design and indexed query paths.",
    infrastructure: "CI/CD automated deployment pipelines with zero-downtime static builds and SSL security.",
    highlights: [
      "Modular, maintainable code directory structure",
      "Strict TypeScript type safety end-to-end",
      "Optimized asset pipelines & responsive layouts",
      "Robust state management and error boundary controls",
    ],
  };
}

function getFallbackSDLC(project: Project) {
  return {
    methodology: "Agile SDLC with iterative 2-week sprint releases",
    planningAndThoughts: `Before writing line 1 of code, the project was mapped from user personas and feature workflows into clean data schemas and UI wireframes. Key data entities were defined to ensure no performance bottlenecks or structural rework down the line.`,
    qualityAssurance: "Comprehensive type validation, lint enforcement, and manual cross-device testing across iOS, Android, and desktop viewports.",
    deploymentStrategy: "Automated static builds, environment configuration isolation, and continuous integration checks prior to production release.",
  };
}

function getFallbackChallenges(project: Project) {
  return [
    {
      title: "Cross-Platform UI Parity & Responsiveness",
      problem: `Ensuring consistent visual aesthetics and fluid performance across varied device viewports and screen densities.`,
      solution: `Established a centralized design system using standard design tokens, custom responsive layout primitives, and strict component prop typing.`,
    },
    {
      title: "Optimized Asset & Data Delivery",
      problem: `Preventing high image assets and deep state re-renders from degrading client interaction response times.`,
      solution: `Implemented dynamic asset compression, lazy loading memory recycling, and memoized selector hooks for expensive sub-components.`,
    },
  ];
}

function getFallbackTimeline(project: Project) {
  return [
    {
      phase: "Phase 1: Discovery & Architecture",
      duration: "Weeks 1–2",
      deliverables: "Requirements document, domain data models, wireframes & tech stack setup.",
    },
    {
      phase: "Phase 2: Core Engineering & Backend",
      duration: "Weeks 3–6",
      deliverables: "API design, database schemas, core business logic, and initial component build.",
    },
    {
      phase: "Phase 3: Integration & UI Polish",
      duration: "Weeks 7–9",
      deliverables: "End-to-end user flows, micro-animations, responsive layout tuning, and QA testing.",
    },
    {
      phase: "Phase 4: Release & Handover",
      duration: "Week 10",
      deliverables: "Production deployment, app store release approvals, and client documentation.",
    },
  ];
}

function getFallbackMaintenance(project: Project) {
  const isLive = /live/i.test(project.status);
  return {
    status: isLive ? "Actively Maintained & Operational in Production" : "Active Development & Feature Iteration",
    clientCommitment: "Ongoing maintenance operates via automated monitoring and structured update windows without requiring full-time daily effort.",
    availabilityNotice: "High Bandwidth Available: Supporting this project does NOT restrict my capacity. I am fully available for new client projects, full-stack contracts, and engineering roles.",
  };
}

export default function ProjectDetailModal() {
  const { selectedProject: project, closeProjectDetail, openStartProject } = useModals();
  const [activeTab, setActiveTab] = useState<DetailTab>("architecture");

  if (!project) return null;

  const isLive = /live/i.test(project.status);
  const arch = project.architecture || getFallbackArchitecture(project);
  const sdlc = project.sdlc || getFallbackSDLC(project);
  const challenges = project.challenges || getFallbackChallenges(project);
  const timeline = project.timeline || getFallbackTimeline(project);
  const maint = project.maintenanceAndAvailability || getFallbackMaintenance(project);

  return (
    <Modal
      open={!!project}
      onClose={closeProjectDetail}
      ariaLabel={`${project.title} Technical Case Study`}
      widthClassName="max-w-4xl max-h-[90vh] overflow-y-auto"
      bgClassName="bg-bg2 text-fg border-line shadow-2xl"
    >
      <div className="flex flex-col gap-6 text-fg">
        {/* Top Header Banner */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs tracking-wider uppercase mb-2">
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-semibold text-xs"
                style={{
                  color: isLive ? "#6FA86B" : "var(--acc)",
                  backgroundColor: isLive ? "rgba(111, 168, 107, 0.12)" : "var(--acc-soft)",
                }}
              >
                {isLive ? <CheckCircleIcon className="h-3.5 w-3.5" /> : <ClockIcon className="h-3.5 w-3.5" />}
                {project.status}
              </span>
              <span className="text-mut">· {project.platform}</span>
              <span className="text-mut">· {project.year}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="font-mono text-xs font-semibold text-acc">{project.role}</div>
              <button
                onClick={closeProjectDetail}
                aria-label="Close case study modal"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-bg hover:border-acc hover:text-acc transition-colors text-mut cursor-pointer"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl leading-tight font-normal text-fg">
            {project.title}
          </h2>
          {project.tagline && (
            <p className="mt-1.5 text-base text-acc font-mono font-medium">{project.tagline}</p>
          )}

          <p className="mt-3.5 text-sm leading-relaxed text-mut">{project.desc}</p>

          {/* Quick Tech Badge Row */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-[11px] text-fg font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links & CTA Action Bar */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-y border-line py-3.5">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-acc-soft border border-acc/30 px-3 py-1.5 text-acc font-medium hover:bg-acc hover:text-bg transition-colors cursor-pointer"
                >
                  <GlobeAltIcon className="h-4 w-4" /> Live Website
                </a>
              )}
              {project.playLink && (
                <a
                  href={project.playLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-line bg-bg px-3 py-1.5 text-fg font-medium hover:border-acc hover:text-acc transition-colors cursor-pointer"
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" /> Google Play
                </a>
              )}
              {project.appStoreLink && (
                <a
                  href={project.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-line bg-bg px-3 py-1.5 text-fg font-medium hover:border-acc hover:text-acc transition-colors cursor-pointer"
                >
                  <DevicePhoneMobileIcon className="h-4 w-4" /> Apple App Store
                </a>
              )}
            </div>

            <button
              onClick={() => {
                closeProjectDetail();
                openStartProject();
              }}
              className="inline-flex items-center gap-1.5 rounded-md bg-acc px-4 py-2 font-mono text-xs font-semibold text-bg transition-all hover:opacity-90 shadow-sm cursor-pointer"
            >
              <SparklesIcon className="h-4 w-4" /> Request Similar Build
            </button>
          </div>
        </div>

        {/* Availability & Commitment Callout Box */}
        <div className="rounded-lg border border-acc/40 bg-acc-soft p-4">
          <div className="flex items-start gap-3">
            <ShieldCheckIcon className="h-5 w-5 text-acc shrink-0 mt-0.5" />
            <div>
              <h4 className="font-mono text-xs font-bold tracking-wider text-acc uppercase flex items-center gap-1.5">
                <CheckCircleIcon className="h-4 w-4 text-acc" /> Maintenance &amp; Engineering Availability Notice
              </h4>
              <p className="mt-1 text-xs text-fg leading-relaxed font-medium">
                {maint.availabilityNotice}
              </p>
              <p className="mt-1 text-[11px] text-mut">
                <strong className="text-fg">Current SLA Commitment:</strong> {maint.clientCommitment}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs with real Heroicons */}
        <div className="border-b border-line flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 font-mono text-xs tracking-wide transition-colors border-b-2 cursor-pointer ${
              activeTab === "architecture"
                ? "border-acc text-acc font-semibold"
                : "border-transparent text-mut hover:text-fg"
            }`}
          >
            <CpuChipIcon className="h-4 w-4" /> System Architecture
          </button>
          <button
            onClick={() => setActiveTab("sdlc")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 font-mono text-xs tracking-wide transition-colors border-b-2 cursor-pointer ${
              activeTab === "sdlc"
                ? "border-acc text-acc font-semibold"
                : "border-transparent text-mut hover:text-fg"
            }`}
          >
            <ClipboardDocumentCheckIcon className="h-4 w-4" /> SDLC &amp; Mind Planning
          </button>
          <button
            onClick={() => setActiveTab("challenges")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 font-mono text-xs tracking-wide transition-colors border-b-2 cursor-pointer ${
              activeTab === "challenges"
                ? "border-acc text-acc font-semibold"
                : "border-transparent text-mut hover:text-fg"
            }`}
          >
            <BoltIcon className="h-4 w-4" /> Engineering Challenges
          </button>
          <button
            onClick={() => setActiveTab("timeline")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 font-mono text-xs tracking-wide transition-colors border-b-2 cursor-pointer ${
              activeTab === "timeline"
                ? "border-acc text-acc font-semibold"
                : "border-transparent text-mut hover:text-fg"
            }`}
          >
            <CalendarIcon className="h-4 w-4" /> Proposal &amp; Timeline
          </button>
          <button
            onClick={() => setActiveTab("availability")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 font-mono text-xs tracking-wide transition-colors border-b-2 cursor-pointer ${
              activeTab === "availability"
                ? "border-acc text-acc font-semibold"
                : "border-transparent text-mut hover:text-fg"
            }`}
          >
            <ShieldCheckIcon className="h-4 w-4" /> Availability &amp; SLA
          </button>
        </div>

        {/* Tab 1: System Architecture */}
        {activeTab === "architecture" && (
          <div className="flex flex-col gap-4 text-sm text-fg">
            <div className="rounded-md border border-line bg-bg p-4">
              <h4 className="font-mono text-xs text-acc uppercase tracking-wider mb-2 font-semibold flex items-center gap-2">
                <CpuChipIcon className="h-4 w-4" /> Architectural Overview
              </h4>
              <p className="leading-relaxed text-mut text-xs sm:text-sm">{arch.overview}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {arch.frontend && (
                <div className="rounded-md border border-line bg-bg p-4">
                  <h5 className="font-mono text-xs text-fg uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                    <DevicePhoneMobileIcon className="h-4 w-4 text-acc" /> Front-End Layer
                  </h5>
                  <p className="text-xs text-mut leading-relaxed">{arch.frontend}</p>
                </div>
              )}
              {arch.backend && (
                <div className="rounded-md border border-line bg-bg p-4">
                  <h5 className="font-mono text-xs text-fg uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                    <CpuChipIcon className="h-4 w-4 text-acc" /> Back-End Architecture
                  </h5>
                  <p className="text-xs text-mut leading-relaxed">{arch.backend}</p>
                </div>
              )}
              {arch.database && (
                <div className="rounded-md border border-line bg-bg p-4">
                  <h5 className="font-mono text-xs text-fg uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                    <WrenchScrewdriverIcon className="h-4 w-4 text-acc" /> Data Persistence Layer
                  </h5>
                  <p className="text-xs text-mut leading-relaxed">{arch.database}</p>
                </div>
              )}
              {arch.infrastructure && (
                <div className="rounded-md border border-line bg-bg p-4">
                  <h5 className="font-mono text-xs text-fg uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                    <RocketLaunchIcon className="h-4 w-4 text-acc" /> Deployment &amp; Infrastructure
                  </h5>
                  <p className="text-xs text-mut leading-relaxed">{arch.infrastructure}</p>
                </div>
              )}
            </div>

            {arch.highlights && arch.highlights.length > 0 && (
              <div className="rounded-md border border-line bg-bg p-4">
                <h5 className="font-mono text-xs text-acc uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                  <CheckCircleIcon className="h-4 w-4" /> Engineering Design Highlights
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-mut">
                  {arch.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-acc shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: SDLC & Mind Planning */}
        {activeTab === "sdlc" && (
          <div className="flex flex-col gap-4 text-sm text-fg">
            <div className="rounded-md border border-line bg-bg p-4">
              <h4 className="font-mono text-xs text-acc uppercase tracking-wider mb-2 font-semibold flex items-center gap-2">
                <DocumentCheckIcon className="h-4 w-4 text-acc" /> Methodology &amp; Execution Model
              </h4>
              <p className="text-xs text-fg font-mono mb-2 font-medium">{sdlc.methodology}</p>
            </div>

            <div className="rounded-md border border-line bg-bg p-4">
              <h5 className="font-mono text-xs text-fg uppercase tracking-wider mb-1.5 font-semibold flex items-center gap-1.5">
                <LightBulbIcon className="h-4 w-4 text-acc" /> Mind Planning &amp; Thought Process
              </h5>
              <p className="text-xs text-mut leading-relaxed whitespace-pre-line">
                {sdlc.planningAndThoughts}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-md border border-line bg-bg p-4">
                <h5 className="font-mono text-xs text-fg uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                  <BeakerIcon className="h-4 w-4 text-acc" /> Quality Assurance &amp; Testing
                </h5>
                <p className="text-xs text-mut leading-relaxed">{sdlc.qualityAssurance}</p>
              </div>
              <div className="rounded-md border border-line bg-bg p-4">
                <h5 className="font-mono text-xs text-fg uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                  <RocketLaunchIcon className="h-4 w-4 text-acc" /> Release &amp; Deployment Strategy
                </h5>
                <p className="text-xs text-mut leading-relaxed">{sdlc.deploymentStrategy}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Technical Challenges & Solutions */}
        {activeTab === "challenges" && (
          <div className="flex flex-col gap-4">
            {challenges.map((c, idx) => (
              <div key={idx} className="rounded-md border border-line bg-bg p-4 flex flex-col gap-2">
                <h4 className="font-serif text-lg text-fg font-medium flex items-center gap-2">
                  <ExclamationTriangleIcon className="h-4 w-4 text-acc" />
                  {c.title}
                </h4>
                <div className="mt-1 flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 rounded border border-line bg-bg2 p-3">
                    <span className="font-mono text-[11px] text-mut uppercase tracking-wider block mb-1 flex items-center gap-1">
                      <ExclamationTriangleIcon className="h-3.5 w-3.5 text-acc" /> Problem Statement
                    </span>
                    <p className="text-xs text-fg leading-relaxed">{c.problem}</p>
                  </div>
                  <div className="flex-1 rounded border border-acc/30 bg-acc-soft p-3">
                    <span className="font-mono text-[11px] text-acc uppercase tracking-wider block mb-1 font-semibold flex items-center gap-1">
                      <CheckCircleIcon className="h-3.5 w-3.5 text-acc" /> Architectural Solution
                    </span>
                    <p className="text-xs text-fg leading-relaxed">{c.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Proposal Scope & Timeline */}
        {activeTab === "timeline" && (
          <div className="flex flex-col gap-4">
            {project.proposalScope && (
              <div className="rounded-md border border-line bg-bg p-4">
                <h4 className="font-mono text-xs text-acc uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                  <ClipboardDocumentCheckIcon className="h-4 w-4" /> Proposal &amp; Client Deliverables Scope
                </h4>
                <p className="text-xs text-mut leading-relaxed">{project.proposalScope}</p>
              </div>
            )}

            <div className="rounded-md border border-line bg-bg p-4">
              <h4 className="font-mono text-xs text-fg uppercase tracking-wider mb-3 font-semibold flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4 text-acc" /> Project Milestone Execution Timeline
              </h4>
              <div className="flex flex-col gap-3">
                {timeline.map((m, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-line pb-2.5 last:border-0 last:pb-0 gap-1">
                    <div>
                      <span className="font-serif text-sm font-medium text-fg">{m.phase}</span>
                      <p className="text-xs text-mut">{m.deliverables}</p>
                    </div>
                    <span className="font-mono text-xs font-semibold text-acc shrink-0">{m.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Maintenance & SLA Availability */}
        {activeTab === "availability" && (
          <div className="flex flex-col gap-4 text-sm text-fg">
            <div className="rounded-md border border-line bg-bg p-4">
              <h4 className="font-mono text-xs text-acc uppercase tracking-wider mb-2 font-semibold flex items-center gap-2">
                <WrenchScrewdriverIcon className="h-4 w-4" /> Live System Operational Status
              </h4>
              <p className="text-xs text-fg font-mono mb-2 font-semibold">{maint.status}</p>
              <p className="text-xs text-mut leading-relaxed">{maint.clientCommitment}</p>
            </div>

            <div className="rounded-md border border-acc/40 bg-acc-soft p-5">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-acc mb-2 flex items-center gap-1.5">
                <ShieldCheckIcon className="h-4 w-4 text-acc" /> Direct Statement to Recruiters &amp; Project Sponsors
              </h4>
              <p className="text-xs text-fg leading-relaxed font-medium">
                {maint.availabilityNotice}
              </p>
              <div className="mt-4 pt-4 border-t border-line flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    closeProjectDetail();
                    openStartProject();
                  }}
                  className="rounded-md bg-acc px-4 py-2 font-mono text-xs font-semibold text-bg transition-all hover:opacity-90 shadow-sm inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <SparklesIcon className="h-4 w-4" /> Discuss a New Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
