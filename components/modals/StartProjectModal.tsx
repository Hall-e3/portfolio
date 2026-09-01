"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContentStore } from "@/lib/content-store";
import { buildStartProjectBody, composeEmail } from "@/lib/email";
import { useModals } from "@/lib/modal-context";
import Modal from "./Modal";

const CHECKLIST = [
  {
    num: "01",
    title: "System requirements document",
    tag: "required",
    desc: "What the system should do: key features, user types, and any technical constraints. A simple bullet list works if you don't have a formal SRS.",
  },
  {
    num: "02",
    title: "Budget & expected quote",
    tag: "required",
    desc: "Your budget range for the project. This lets me propose a scope that fits — or tell you honestly what's achievable within it.",
  },
  {
    num: "03",
    title: "Project proposal",
    tag: "if available",
    desc: "Any existing proposal, pitch deck, or product brief describing goals, audience, and timeline.",
  },
  {
    num: "04",
    title: "Designs & references",
    tag: "optional",
    desc: "Figma files, wireframes, or links to products you want yours to feel like.",
  },
];

export default function StartProjectModal() {
  const { startProjectOpen, closeStartProject } = useModals();
  const { content } = useContentStore();

  function handleCompose() {
    composeEmail(
      content.email,
      "Project request — system requirements & budget",
      buildStartProjectBody(content.name)
    );
    closeStartProject();
  }

  return (
    <Modal
      open={startProjectOpen}
      onClose={closeStartProject}
      ariaLabel="Start a project"
      widthClassName="max-w-[560px] max-h-[88vh] overflow-y-auto"
    >
      <div className="mb-3 flex items-start justify-between">
        <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-acc uppercase">
          Start a project
        </span>
        <button
          onClick={closeStartProject}
          aria-label="Close"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-bg hover:border-acc hover:text-acc transition-colors text-mut cursor-pointer"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>
      <h3 className="mb-2 font-serif text-2xl sm:text-3xl leading-tight font-normal text-fg">
        Tell me what we&rsquo;re building.
      </h3>
      <p className="mb-5 text-sm sm:text-base leading-relaxed text-mut">
        To scope your project accurately and respond with a realistic quote and timeline, please include the
        following in your email:
      </p>
      <div className="mb-6 flex flex-col gap-3.5">
        {CHECKLIST.map((item) => (
          <div key={item.num} className="flex gap-4 rounded-lg border border-line bg-bg p-4 sm:p-4.5">
            <span className="pt-0.5 font-mono text-xs sm:text-sm font-bold text-acc">{item.num}</span>
            <div>
              <div className="mb-1 flex items-center gap-2 text-base font-semibold text-fg">
                <span>{item.title}</span>
                <span className="rounded-md bg-acc-soft px-2.5 py-0.5 font-mono text-xs font-bold tracking-wider text-acc uppercase">
                  {item.tag}
                </span>
              </div>
              <div className="text-xs sm:text-sm leading-relaxed text-mut">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="mb-5 font-mono text-xs sm:text-sm leading-relaxed text-mut">
        Attach documents as PDF or a shared link (Google Docs, Notion, Figma). I reply within 2 business days with
        an assessment, quote, and proposed timeline.
      </p>
      <button
        onClick={handleCompose}
        className="w-full rounded-md bg-acc py-3.5 font-mono text-xs sm:text-sm font-semibold text-bg transition-all hover:opacity-90 cursor-pointer shadow-sm"
      >
        Compose the email
      </button>
    </Modal>
  );
}
