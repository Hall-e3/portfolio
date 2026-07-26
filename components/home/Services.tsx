"use client";

import Link from "next/link";
import { useContentStore } from "@/lib/content-store";
import { useModals } from "@/lib/modal-context";
import ServiceCard from "./ServiceCard";

const CTA_CLASSNAME =
  "border border-fg px-4 py-2.5 text-center font-mono text-xs tracking-wide text-fg transition-colors hover:bg-fg hover:text-bg";

export default function Services() {
  const { content } = useContentStore();
  const { openBooking } = useModals();

  return (
    <section id="services" className="py-10 pb-7.5">
      <div className="mb-9 flex items-baseline justify-between border-b border-fg pb-3.5">
        <h2 className="font-mono text-xs font-medium tracking-widest uppercase">Services</h2>
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
                <Link href="/work" className={CTA_CLASSNAME}>
                  {service.cta}
                </Link>
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
