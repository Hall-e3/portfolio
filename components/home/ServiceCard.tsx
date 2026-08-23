import type { Service } from "@/content/types";

interface ServiceCardProps {
  service: Service;
  index: number;
  cta: React.ReactNode;
}

export default function ServiceCard({ service, index, cta }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-3.5 rounded-md border border-line bg-bg2 px-7 py-7.5 shadow-sm transition-all hover:border-acc/60">
      <span className="font-mono text-[13px] text-acc">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="font-serif text-[30px] leading-tight font-normal">{service.title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-mut text-wrap-pretty">{service.desc}</p>
      <div className="flex items-baseline justify-between border-t border-line pt-3.5">
        <span className="font-mono text-[11px] tracking-wider text-mut uppercase">Fee</span>
        <span className="font-mono text-[13px] text-acc">{service.fee}</span>
      </div>
      {cta}
    </div>
  );
}
