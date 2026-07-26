"use client";

import { useContentStore } from "@/lib/content-store";
import SkillGroupCard from "./SkillGroupCard";

export default function Skills() {
  const { content } = useContentStore();

  return (
    <section id="skills" className="py-17.5 pb-7.5">
      <div className="border-b border-fg pb-3.5">
        <h2 className="font-mono text-xs font-medium tracking-widest uppercase">Stack</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {content.skills.map((group) => (
          <SkillGroupCard key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
}
