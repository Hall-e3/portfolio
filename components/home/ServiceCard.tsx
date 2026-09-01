import type { Service } from "@/content/types";

interface ServiceCardProps {
  service: Service;
  index: number;
  cta: React.ReactNode;
}

export default function ServiceCard({ service, index, cta }: ServiceCardProps) {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-lg border border-line bg-bg2 p-7 shadow-sm transition-all hover:border-acc/60">
      <div>
        <span className="font-mono text-xs sm:text-sm font-bold text-acc block mb-2">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl leading-tight font-normal text-fg mb-3">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base leading-relaxed text-mut text-wrap-pretty mb-4">
          {service.desc}
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-baseline justify-between border-t border-line pt-3.5">
          <span className="font-mono text-xs tracking-wider text-mut uppercase">
            Fee
          </span>
          <span className="font-mono text-xs sm:text-sm font-semibold text-acc">
            {service.fee}
          </span>
        </div>
        {cta}
      </div>
    </div>
  );
}
