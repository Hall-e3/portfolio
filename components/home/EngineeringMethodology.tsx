"use client";

import {
  ArrowRightIcon,
  BeakerIcon,
  BookOpenIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useModals } from "@/lib/modal-context";

export default function EngineeringMethodology() {
  const { openStartProject, openPlaybook } = useModals();

  return (
    <section id="methodology" className="py-10 pb-16">
      {/* Page Header */}
      <div className="mb-10 border-b border-line pb-6">
        <div className="flex items-center gap-2 mb-3 font-mono text-xs font-semibold tracking-widest text-acc uppercase">
          <UserIcon className="h-4 w-4 text-acc" />
          Engineering Philosophy &amp; Proposal Statement
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-fg leading-tight mb-4">
          Software Engineering Methodology &amp; System Rigor
        </h1>

        <p className="text-sm sm:text-base leading-relaxed text-mut font-sans max-w-3xl">
          An overview of how I plan, architect, build, test, and maintain
          software in production — focusing on Test-Driven Development (TDD),
          failure-aware design, transactional integrity, and systems ownership.
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed text-mut font-sans mb-12">
        {/* Intro */}
        <p className="text-base sm:text-lg text-fg font-normal leading-relaxed border-b border-line pb-6">
          I approach software engineering with a perspective that goes far
          beyond writing code or assembling framework templates — it involves
          troubleshooting real-world problems, supporting clients, managing
          infrastructure, and helping maintain software reliably in production.
        </p>

        {/* Stack Overview */}
        <p>
          I have built and contributed to several production web and mobile
          applications using{" "}
          <strong className="text-fg font-medium">
            JavaScript, TypeScript, React, Next.js, Node.js, and NestJS
          </strong>
          . My experience spans full-stack development — including building REST
          APIs, working with{" "}
          <strong className="text-fg font-medium">PostgreSQL</strong> and{" "}
          <strong className="text-fg font-medium">MongoDB</strong>, implementing
          authentication, integrating third-party services, and developing
          cross-platform mobile apps with{" "}
          <strong className="text-fg font-medium">React Native</strong> and{" "}
          <strong className="text-fg font-medium">Flutter</strong>.
        </p>

        {/* TDD & E2E Testing */}
        <div className="pt-2 space-y-2">
          <h2 className="font-serif text-xl sm:text-2xl font-normal text-fg flex items-center gap-2.5">
            <CheckCircleIcon className="h-5 w-5 text-acc shrink-0" />
            Test-Driven Development (TDD) &amp; Cypress E2E Automation
          </h2>
          <p className="text-sm sm:text-base text-mut leading-relaxed">
            My development process is grounded in Test-Driven Development (TDD)
            and automated Cypress end-to-end testing. Before writing business
            implementation logic, I define unit and integration test contracts.
            I build automated Cypress test suites covering multi-step user
            workflows — such as checkout, identity verification, and document
            uploads — and enforce Continuous Integration (CI) regression checks
            prior to every production release.
          </p>
        </div>

        {/* Failure-Aware Design */}
        <div className="pt-2 space-y-2">
          <h2 className="font-serif text-xl sm:text-2xl font-normal text-fg flex items-center gap-2.5">
            <CheckCircleIcon className="h-5 w-5 text-acc shrink-0" />
            Failure-Aware Design &amp; Environmental Realities
          </h2>
          <p className="text-sm sm:text-base text-mut leading-relaxed">
            I engineer applications for real-world environmental constraints
            rather than ideal happy paths. This includes handling unstable
            network connectivity with offline state caching and background
            re-synchronization upon reconnection, implementing intelligent
            request retries with exponential backoff and jitter to prevent
            server thundering herds, optimizing payloads and WebP asset
            compression, and surfacing clear, actionable error messages that
            guide users.
          </p>
        </div>

        {/* Idempotency & Reconciliation */}
        <div className="pt-2 space-y-2">
          <h2 className="font-serif text-xl sm:text-2xl font-normal text-fg flex items-center gap-2.5">
            <CheckCircleIcon className="h-5 w-5 text-acc shrink-0" />
            Transactional Integrity, Idempotency &amp; Reconciliation
          </h2>
          <p className="text-sm sm:text-base text-mut leading-relaxed">
            For financial and transactional features, I guarantee strict
            transactional integrity and idempotency. I implement client-side UI
            action locking to block duplicate click submissions, utilize
            server-side idempotency keys (e.g.{" "}
            <code className="font-mono text-acc text-xs bg-acc-soft/40 px-1.5 py-0.5 rounded">
              ORDER-XYZ-PAYMENT
            </code>
            ), enforce explicit status state machines (PENDING, PROCESSING,
            SUCCESS, RECONCILING), and run automated background reconciliation
            jobs that match internal database records against payment provider
            ledgers.
          </p>
        </div>

        {/* Strategic Dependency Management */}
        <div className="pt-2 space-y-2">
          <h2 className="font-serif text-xl sm:text-2xl font-normal text-fg flex items-center gap-2.5">
            <CheckCircleIcon className="h-5 w-5 text-acc shrink-0" />
            Strategic Dependency Management &amp; Asynchronous Queues
          </h2>
          <p className="text-sm sm:text-base text-mut leading-relaxed">
            Architecturally, I maintain strategic control over external
            dependencies. By decoupling third-party APIs (payment gateways,
            transactional mailers, SMS providers) behind clean provider
            abstractions and offloading email/notification workloads to
            asynchronous queues via Node.js, Nodemailer, and Redis, I ensure
            third-party vendor downtime never collapses core business
            operations.
          </p>
        </div>

        {/* Full-Stack Systems Thinking */}
        <div className="pt-2 space-y-2">
          <h2 className="font-serif text-xl sm:text-2xl font-normal text-fg flex items-center gap-2.5">
            <CheckCircleIcon className="h-5 w-5 text-acc shrink-0" />
            Deep Full-Stack &amp; Systems Fundamentals
          </h2>
          <p className="text-sm sm:text-base text-mut leading-relaxed">
            Underneath framework abstractions, I focus on deep full-stack and
            systems fundamentals. This includes precise HTTP status code
            handling (401, 403, 409, 429, 503), CORS configuration and header
            security, explicit state separation (UI state vs. server state vs.
            persistent offline state), and database optimization with query
            indexing, transactions, locks, and strict XSS/CSRF security hygiene.
          </p>
        </div>

        {/* AI Acceleration */}
        <div className="pt-2 space-y-2">
          <h2 className="font-serif text-xl sm:text-2xl font-normal text-fg flex items-center gap-2.5">
            <CheckCircleIcon className="h-5 w-5 text-acc shrink-0" />
            Pragmatic AI Productivity Guided by Human Intent
          </h2>
          <p className="text-sm sm:text-base text-mut leading-relaxed">
            Finally, I take a pragmatic approach to AI developer tools. Human
            architectural reasoning always drives domain modeling, entity
            boundaries, and security contracts. I intentionally leverage AI LLM
            agents as high-velocity productivity tools for rapid edge-case bug
            hunting, syntax checks, and API research, while applying strict
            manual code reviews and automated test verification to all
            AI-assisted code.
          </p>
        </div>

        {/* Conclusion */}
        <p className="pt-4 border-t border-line">
          I am comfortable working with{" "}
          <strong className="text-fg font-medium">
            Git, Linux, Docker, Prisma, Redis, SQL databases, and cloud
            deployments
          </strong>
          . Through my projects, I systematically investigate bugs, work through
          deployment challenges, analyze logs, and troubleshoot problems across
          the entire application stack. Building reliable software involves much
          more than writing new features — it requires testing, documentation,
          monitoring, and production ownership.
        </p>
      </div>

      {/* Summary Engagement CTA Box */}
      <div className="pt-8 border-t border-line">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6">
          <div>
            <span className="font-mono text-xs font-bold tracking-wider text-acc uppercase block mb-1">
              Engineering Engagement
            </span>
            <h3 className="font-serif text-2xl font-normal text-fg">
              Ready to discuss your project requirements?
            </h3>
            <p className="text-xs sm:text-sm text-mut mt-1">
              Available for technical consultations, full-stack software
              development, and system architecture planning.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={openStartProject}
              className="inline-flex items-center gap-2 rounded-md bg-acc px-5 py-3 font-mono text-xs font-semibold text-bg transition-all hover:opacity-90 cursor-pointer shadow-sm"
            >
              Start a Project <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-mut border-t border-line/60 pt-4">
          <div className="flex items-center gap-2">
            <BeakerIcon className="h-4 w-4 text-acc" />
            <span>
              Guaranteed TDD unit &amp; Cypress E2E test suites with every build
            </span>
          </div>
          <button
            onClick={openPlaybook}
            className="inline-flex items-center gap-1.5 text-acc hover:underline font-semibold cursor-pointer"
          >
            Read Complete Engineering Manifesto{" "}
            <BookOpenIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
