"use client";

import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { availableForWork } from "@/content/config";
import { withBasePath } from "@/lib/base-path";
import { useContentStore } from "@/lib/content-store";
import { mailtoHref } from "@/lib/email";
import avatar from "@/public/enoch.jpeg";

export default function Hero() {
  const { content: c } = useContentStore();

  return (
    <section className="animate-pf-up py-20 sm:py-24">
      <Image
        src={avatar}
        alt={c.name}
        priority
        className="mb-6 h-20 w-20 rounded-full border border-line object-cover sm:h-24 sm:w-24"
      />
      {availableForWork && (
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-acc px-4 py-1.5 font-mono text-xs sm:text-sm tracking-wider text-acc uppercase font-semibold">
          <span className="animate-pf-pulse h-2 w-2 rounded-full bg-acc" />
          Open to roles &amp; freelance work
        </div>
      )}
      <div className="mb-4 font-mono text-xs sm:text-sm font-semibold tracking-widest text-mut uppercase">
        {c.role} · {c.location}
      </div>
      <h1 className="mb-6 max-w-4xl font-serif text-[clamp(40px,6vw,72px)] leading-[1.08] font-normal text-fg text-wrap-pretty">
        {c.headline}
      </h1>
      <p className="mb-8 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-mut">{c.summary}</p>
      <div className="flex flex-wrap items-center gap-6 font-mono text-xs sm:text-sm">
        <a href={mailtoHref(c.email)} className="border-b border-acc pb-0.5 text-acc font-semibold cursor-pointer">
          {c.email}
        </a>
        <a
          href={c.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-mut hover:text-acc transition-colors cursor-pointer"
        >
          github <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </a>
        <a
          href={c.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-mut hover:text-acc transition-colors cursor-pointer"
        >
          linkedin <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </a>
        <a
          href={withBasePath("/Hall-Enoch-Asanda-Resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-mut hover:text-acc transition-colors cursor-pointer"
        >
          resume <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
