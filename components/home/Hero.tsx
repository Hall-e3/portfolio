"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { availableForWork } from "@/content/config";
import { withBasePath } from "@/lib/base-path";
import { useContentStore } from "@/lib/content-store";
import { mailtoHref } from "@/lib/email";

export default function Hero() {
  const { content: c } = useContentStore();

  return (
    <section className="animate-pf-up py-24 sm:py-28">
      {availableForWork && (
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-acc px-3.5 py-1.5 font-mono text-[11px] tracking-wider text-acc uppercase">
          <span className="animate-pf-pulse h-1.5 w-1.5 rounded-full bg-acc" />
          Open to roles &amp; freelance work
        </div>
      )}
      <div className="mb-5 font-mono text-xs tracking-widest text-mut uppercase">
        {c.role} · {c.location}
      </div>
      <h1 className="mb-7 max-w-3xl font-serif text-[clamp(44px,6.5vw,76px)] leading-[1.06] font-normal text-wrap-pretty">
        {c.headline}
      </h1>
      <p className="mb-9 max-w-150 text-[17px] leading-relaxed text-mut">{c.summary}</p>
      <div className="flex flex-wrap items-center gap-6 font-mono text-[13px]">
        <a href={mailtoHref(c.email)} className="border-b border-acc pb-0.5 text-acc">
          {c.email}
        </a>
        <a
          href={c.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-mut hover:text-acc"
        >
          github <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
        </a>
        <a
          href={c.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-mut hover:text-acc"
        >
          linkedin <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
        </a>
        <a
          href={withBasePath("/Hall-Enoch-Asanda-Resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-mut hover:text-acc"
        >
          resume <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
