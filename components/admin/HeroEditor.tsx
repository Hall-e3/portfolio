"use client";

import EditableFieldForm from "@/components/ui/EditableFieldForm";
import { heroFields } from "@/lib/admin-fields";
import { useContentStore } from "@/lib/content-store";

export default function HeroEditor() {
  const { content, updateHero } = useContentStore();

  const values: Record<string, string> = {
    name: content.name,
    role: content.role,
    location: content.location,
    headline: content.headline,
    summary: content.summary,
    email: content.email,
    whatsapp: content.whatsapp,
    booking: content.booking,
    github: content.github,
    linkedin: content.linkedin,
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-xs font-medium tracking-widest uppercase">Intro & contact</h2>
        <span className="font-mono text-[11px] text-mut">Saves as you type</span>
      </div>
      <EditableFieldForm
        fields={heroFields}
        values={values}
        onChange={(key, value) => updateHero({ [key]: value })}
      />
    </div>
  );
}
