"use client";

import Image from "next/image";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/20/solid";
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import type { Project } from "@/content/types";
import { useModals } from "@/lib/modal-context";

function thumbnailUrl(project: Project): string | null {
  if (project.thumb) return project.thumb;
  if (project.link)
    return `https://image.thum.io/get/width/900/crop/620/${project.link}`;
  return null;
}

export default function ProjectCard({ project }: { project: Project }) {
  const { openProjectDetail } = useModals();
  const isLive = /live/i.test(project.status);
  const thumb = thumbnailUrl(project);

  return (
    <article
      onClick={() => openProjectDetail(project)}
      className="group flex flex-col rounded-lg border border-line bg-bg2 shadow-sm transition-all hover:border-acc/70 overflow-hidden cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden border-b border-line bg-bg">
        {thumb ? (
          <Image
            src={thumb}
            alt={project.title}
            fill
            loading="lazy"
            sizes="(min-width: 640px) 340px, 100vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center font-mono text-xs sm:text-sm text-mut">
            Drop a screenshot of {project.title}
          </div>
        )}
        <div className="absolute inset-0 bg-bg/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="rounded-full bg-bg/95 border border-acc px-4 py-2 font-mono text-xs sm:text-sm text-acc font-semibold shadow-md flex items-center gap-2">
            <DocumentTextIcon className="h-4 w-4" /> View Technical Case Study
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm tracking-wider uppercase font-medium">
          <span
            className="inline-flex items-center gap-1.5"
            style={{ color: isLive ? "#6FA86B" : "var(--mut)" }}
          >
            {isLive ? (
              <CheckCircleIcon className="h-4 w-4" />
            ) : (
              <ClockIcon className="h-4 w-4" />
            )}
            {project.status}
          </span>
          <span className="text-mut">· {project.platform}</span>
          <span className="ml-auto text-mut">{project.year}</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl leading-tight font-normal text-fg group-hover:text-acc transition-colors">
          {project.title}
        </h3>

        <div className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-acc uppercase">
          {project.role}
        </div>

        <p className="flex-1 text-sm sm:text-base leading-relaxed text-mut text-wrap-pretty">
          {project.desc}
        </p>

        <div className="mt-1 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-line bg-bg/50 px-3 py-1 font-mono text-xs text-mut font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-line/60 pt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openProjectDetail(project);
            }}
            className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm text-acc hover:underline font-semibold cursor-pointer"
          >
            Case Study &amp; SDLC <ArrowRightIcon className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-3.5 font-mono text-xs sm:text-sm">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-mut hover:text-acc transition-colors cursor-pointer"
              >
                visit <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            )}
            {project.playLink && (
              <a
                href={project.playLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-mut hover:text-acc transition-colors cursor-pointer"
              >
                play <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            )}
            {project.appStoreLink && (
              <a
                href={project.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-mut hover:text-acc transition-colors cursor-pointer"
              >
                app store <DevicePhoneMobileIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
