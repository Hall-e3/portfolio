"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useContentStore } from "@/lib/content-store";
import { useModals } from "@/lib/modal-context";
import ServiceCard from "./ServiceCard";

const CTA_CLASSNAME =
  "rounded-md border border-fg px-4 py-2.5 text-center font-mono text-xs sm:text-sm font-semibold tracking-wide text-fg transition-all hover:bg-fg hover:text-bg cursor-pointer";

export default function Services() {
  const { content } = useContentStore();
  const { openBooking, openStartProject } = useModals();

  return (
    <section id="services" className="py-10 pb-8">
      <div className="mb-9 flex items-baseline justify-between border-b border-line pb-4">
        <h2 className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-acc uppercase">
          Services
        </h2>
        <span className="font-mono text-xs sm:text-sm text-mut">
          What I can do for you
        </span>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {content.services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            cta={
              index === 0 ? (
                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={openStartProject}
                    className="rounded-md bg-acc px-4 py-2.5 text-center font-mono text-xs sm:text-sm font-semibold tracking-wide text-bg transition-all hover:opacity-90 cursor-pointer shadow-sm"
                  >
                    Request Project Quote
                  </button>
                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center gap-1.5 text-center font-mono text-xs sm:text-sm text-mut hover:text-acc transition-colors cursor-pointer"
                  >
                    or view past projects <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ) : (
                <button
                  onClick={() => openBooking(service.title)}
                  className={CTA_CLASSNAME}
                >
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
