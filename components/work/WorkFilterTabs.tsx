import type { ProjectFilter } from "@/content/types";

const FILTERS: { value: ProjectFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "full stack", label: "Full Stack" },
];

interface WorkFilterTabsProps {
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}

export default function WorkFilterTabs({ active, onChange }: WorkFilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map((f) => {
        const isActive = active === f.value;
        return (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            aria-pressed={isActive}
            className={`rounded-full border border-line px-4.5 py-2 font-mono text-xs tracking-wide ${
              isActive ? "bg-fg text-bg" : "bg-transparent text-mut"
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
