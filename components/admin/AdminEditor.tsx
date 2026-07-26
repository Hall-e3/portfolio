"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon, LockOpenIcon } from "@heroicons/react/24/outline";
import type { Project, Service, SkillGroup } from "@/content/types";
import { projectFields, serviceFields, skillFields } from "@/lib/admin-fields";
import { clearSessionUnlocked } from "@/lib/admin-auth";
import { useContentStore } from "@/lib/content-store";
import CollectionEditor from "./CollectionEditor";
import HeroEditor from "./HeroEditor";

type Tab = "hero" | "services" | "projects" | "skills";

const TABS: { value: Tab; label: string }[] = [
  { value: "hero", label: "Intro & Contact" },
  { value: "services", label: "Services" },
  { value: "projects", label: "Projects" },
  { value: "skills", label: "Stack" },
];

function downloadJSON(filename: string, contents: string) {
  const blob = new Blob([contents], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function AdminEditor({ onLock }: { onLock: () => void }) {
  const [tab, setTab] = useState<Tab>("hero");
  const { content, upsertService, deleteService, upsertProject, deleteProject, upsertSkillGroup, deleteSkillGroup, resetContent, exportJSON } =
    useContentStore();

  function handleReset() {
    if (window.confirm("Reset all content to the original defaults? This clears your saved edits in this browser.")) {
      resetContent();
    }
  }

  function handleLock() {
    clearSessionUnlocked();
    onLock();
  }

  return (
    <section className="py-14">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-fg pb-4">
        <div>
          <h1 className="font-serif text-3xl font-normal">Content editor</h1>
          <p className="mt-1 font-mono text-[11px] text-mut">
            Edits save to this browser only. Export JSON and update{" "}
            <code className="text-acc">content/site-content.ts</code> to publish changes to every visitor.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-mut"
          >
            View live site <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => downloadJSON("site-content.json", exportJSON())}
            className="rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-mut"
          >
            Export JSON
          </button>
          <button
            onClick={handleReset}
            className="rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-mut"
          >
            Reset content
          </button>
          <button
            onClick={handleLock}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-mut"
          >
            <LockOpenIcon className="h-3.5 w-3.5" /> Lock
          </button>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.value}
            onClick={() => setTab(t.value)}
            className={`rounded-full border border-line px-4 py-2 font-mono text-xs tracking-wide ${
              tab === t.value ? "bg-fg text-bg" : "text-mut"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "hero" && <HeroEditor />}

      {tab === "services" && (
        <CollectionEditor<Service>
          title="Services"
          items={content.services}
          fields={serviceFields}
          addLabel="Service"
          summaryTitle={(s) => s.title}
          summarySubtitle={(s) => s.fee}
          toDraft={(s) => ({ title: s.title, fee: s.fee, desc: s.desc, cta: s.cta })}
          emptyDraft={{ title: "", fee: "", desc: "", cta: "" }}
          buildItem={(draft, id) => ({ id, title: draft.title, fee: draft.fee, desc: draft.desc, cta: draft.cta })}
          onSave={upsertService}
          onDelete={deleteService}
        />
      )}

      {tab === "projects" && (
        <CollectionEditor<Project>
          title="Projects"
          items={content.projects}
          fields={projectFields}
          addLabel="Project"
          summaryTitle={(p) => p.title}
          summarySubtitle={(p) => `${p.platform} · ${p.status}`}
          toDraft={(p) => ({
            title: p.title,
            year: p.year,
            platform: p.platform,
            status: p.status,
            role: p.role,
            desc: p.desc,
            techStr: p.tech.join(", "),
            link: p.link ?? "",
            playLink: p.playLink ?? "",
            appStoreLink: p.appStoreLink ?? "",
            thumb: p.thumb ?? "",
          })}
          emptyDraft={{
            title: "",
            year: "",
            platform: "",
            status: "",
            role: "",
            desc: "",
            techStr: "",
            link: "",
            playLink: "",
            appStoreLink: "",
            thumb: "",
          }}
          buildItem={(draft, id) => ({
            id,
            title: draft.title,
            year: draft.year,
            platform: draft.platform,
            status: draft.status,
            role: draft.role,
            desc: draft.desc,
            tech: draft.techStr
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean),
            link: draft.link || undefined,
            playLink: draft.playLink || undefined,
            appStoreLink: draft.appStoreLink || undefined,
            thumb: draft.thumb || undefined,
          })}
          onSave={upsertProject}
          onDelete={deleteProject}
        />
      )}

      {tab === "skills" && (
        <CollectionEditor<SkillGroup>
          title="Stack groups"
          items={content.skills}
          fields={skillFields}
          addLabel="Group"
          summaryTitle={(s) => s.label}
          toDraft={(s) => ({ label: s.label, items: s.items })}
          emptyDraft={{ label: "", items: "" }}
          buildItem={(draft, id) => ({ id, label: draft.label, items: draft.items })}
          onSave={upsertSkillGroup}
          onDelete={deleteSkillGroup}
        />
      )}
    </section>
  );
}
