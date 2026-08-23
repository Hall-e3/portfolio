"use client";

import Link from "next/link";
import { useContentStore } from "@/lib/content-store";
import { useModals } from "@/lib/modal-context";
import ServiceCard from "./ServiceCard";

const CTA_CLASSNAME =
  "rounded-md border border-fg px-4 py-2.5 text-center font-mono text-xs tracking-wide text-fg transition-all hover:bg-fg hover:text-bg";

export default function Services() {
  const { content } = useContentStore();
  const { openBooking, openStartProject } = useModals();

  return (
    <section id="services" className="py-10 pb-7.5">
      <div className="mb-9 flex items-baseline justify-between border-b border-fg pb-3.5">
        <h2 className="font-mono text-xs font-medium tracking-widest uppercase font-semibold">Services</h2>
        <span className="font-mono text-xs text-mut">What I can do for you</span>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            cta={
              index === 0 ? (
                <div className="flex flex-col gap-2">
                  <button onClick={openStartProject} className="rounded-md bg-acc px-4 py-2.5 text-center font-mono text-xs font-semibold tracking-wide text-bg transition-all hover:opacity-90">
                    Request Project Quote
                  </button>
                  <Link href="/work" className="text-center font-mono text-[11px] text-mut hover:text-acc">
                    or view past projects →
                  </Link>
                </div>
              ) : (
                <button onClick={() => openBooking(service.title)} className={CTA_CLASSNAME}>
                  {service.cta}
                </button>
              )
            }
          />
        ))}
      </div>
    </section>
  );
}
