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
      widthClassName="max-w-[520px] max-h-[86vh] overflow-y-auto"
    >
      <div className="mb-2 flex items-start justify-between">
        <span className="font-mono text-[11px] tracking-wider text-acc uppercase">Start a project</span>
        <button onClick={closeStartProject} aria-label="Close" className="text-mut hover:text-fg">
          <XMarkIcon className="h-[18px] w-[18px]" />
        </button>
      </div>
      <h3 className="mb-1.5 font-serif text-[28px] leading-tight font-normal">
        Tell me what we&rsquo;re building.
      </h3>
      <p className="mb-5 text-[13px] leading-relaxed text-mut">
        To scope your project accurately and respond with a realistic quote and timeline, please include the
        following in your email:
      </p>
      <div className="mb-5.5 flex flex-col gap-3">
        {CHECKLIST.map((item) => (
          <div key={item.num} className="flex gap-3.5 border border-line bg-bg px-4 py-3.5">
            <span className="pt-0.5 font-mono text-xs text-acc">{item.num}</span>
            <div>
              <div className="mb-0.5 text-sm font-semibold">
                {item.title}{" "}
                <span className="font-mono text-[10px] font-normal tracking-wider text-mut uppercase">
                  · {item.tag}
                </span>
              </div>
              <div className="text-[12.5px] leading-snug text-mut">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="mb-4.5 font-mono text-[11px] leading-relaxed text-mut">
        Attach documents as PDF or a shared link (Google Docs, Notion, Figma). I reply within 2 business days with
        an assessment, quote, and proposed timeline.
      </p>
      <button
        onClick={handleCompose}
        className="w-full bg-acc py-3.5 font-mono text-[13px] font-semibold text-bg"
      >
        Compose the email →
      </button>
    </Modal>
  );
}
