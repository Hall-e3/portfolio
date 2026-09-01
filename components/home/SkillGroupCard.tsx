import type { SkillGroup } from "@/content/types";

export default function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="border-b border-line py-8 pr-6">
      <div className="mb-3.5 font-mono text-xs sm:text-sm font-semibold tracking-widest text-acc uppercase">{group.label}</div>
      <p className="text-sm sm:text-base leading-relaxed text-mut">{group.items}</p>
    </div>
  );
}
