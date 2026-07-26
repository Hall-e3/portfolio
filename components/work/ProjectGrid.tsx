"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectFilter } from "@/content/types";
import { useContentStore } from "@/lib/content-store";
import { useModals } from "@/lib/modal-context";
import ProjectCard from "./ProjectCard";
import WorkFilterTabs from "./WorkFilterTabs";

function matchesFilter(project: Project, filter: ProjectFilter): boolean {
  switch (filter) {
    case "web":
      return /web/i.test(project.platform);
    case "mobile":
      return /mobile/i.test(project.platform);
    case "full stack":
      return /full[- ]?stack/i.test(project.role);
    default:
      return true;
  }
}

export default function ProjectGrid() {
  const { content } = useContentStore();
  const { openStartProject } = useModals();
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const shown = useMemo(
    () => content.projects.filter((p) => matchesFilter(p, filter)),
    [content.projects, filter]
  );

  return (
    <>
      <div className="sticky top-[69px] z-40 mb-9 flex flex-wrap items-center justify-between gap-4 border-b border-fg bg-bg py-3.5">
        <WorkFilterTabs active={filter} onChange={setFilter} />
        <span className="font-mono text-xs text-mut">{String(shown.length).padStart(2, "0")} shown</span>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {shown.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-14 border-t border-line pt-12 text-center">
        <h3 className="mb-2.5 font-serif text-[30px] font-normal">Have something to build?</h3>
        <p className="mx-auto mb-6.5 max-w-110 text-sm leading-relaxed text-mut">
          Send me your requirements and budget — I&rsquo;ll come back with a technical assessment and a realistic
          quote.
        </p>
        <button
          onClick={openStartProject}
          className="bg-acc px-7.5 py-3.5 font-mono text-[13px] font-semibold text-bg"
        >
          Start a project
        </button>
      </div>
    </>
  );
}
