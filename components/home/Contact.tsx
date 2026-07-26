"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { withBasePath } from "@/lib/base-path";
import { useContentStore } from "@/lib/content-store";
import { composeEmail, mailtoHref, whatsappHref } from "@/lib/email";
import { useModals } from "@/lib/modal-context";

export default function Contact() {
  const { content: c } = useContentStore();
  const { openBooking } = useModals();

  return (
    <section id="contact" className="py-28 pb-15 text-center">
      <div className="mb-5.5 font-mono text-xs tracking-widest text-mut uppercase">Contact</div>
      <h2 className="mb-4 font-serif text-[clamp(38px,5.5vw,64px)] leading-tight font-normal text-wrap-pretty italic">
        Let&rsquo;s build something good.
      </h2>
      <p className="mx-auto mb-10 max-w-120 text-[15px] leading-relaxed text-mut">
        Reach out by email or WhatsApp, or book a session directly — calls happen over Zoom or Google Meet.
      </p>
      <div className="flex flex-wrap justify-center gap-3.5">
        <a
          href={mailtoHref(c.email)}
          onClick={(e) => {
            e.preventDefault();
            composeEmail(c.email);
          }}
          className="bg-acc px-6.5 py-3.5 font-mono text-[13px] font-semibold text-bg"
        >
          Email me
        </a>
        <a
          href={whatsappHref(c.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-fg px-6.5 py-3.5 font-mono text-[13px] text-fg transition-colors hover:bg-fg hover:text-bg"
        >
          WhatsApp →
        </a>
        <button
          onClick={() => openBooking("Meeting")}
          className="border border-fg bg-transparent px-6.5 py-3.5 font-mono text-[13px] text-fg transition-colors hover:bg-fg hover:text-bg"
        >
          Book a meeting
        </button>
      </div>
      <div className="mt-4.5 font-mono text-[11px] tracking-wider text-mut uppercase">
        Calendly · Zoom · Google Meet
      </div>
      <div className="mt-10 flex justify-center gap-7 font-mono text-[13px] text-mut">
        <a
          href={c.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-acc"
        >
          github <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
        </a>
        <a
          href={c.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-acc"
        >
          linkedin <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
        </a>
        <a
          href={withBasePath("/Hall-Enoch-Asanda-Resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-acc"
        >
          resume <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
