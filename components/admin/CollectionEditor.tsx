"use client";

import { useState } from "react";
import { PencilSquareIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import type { FieldConfig } from "@/lib/admin-fields";
import EditableFieldForm from "@/components/ui/EditableFieldForm";

interface CollectionEditorProps<T extends { id: number }> {
  title: string;
  items: T[];
  fields: FieldConfig[];
  addLabel: string;
  summaryTitle: (item: T) => string;
  summarySubtitle?: (item: T) => string;
  toDraft: (item: T) => Record<string, string>;
  emptyDraft: Record<string, string>;
  buildItem: (draft: Record<string, string>, id: number) => T;
  onSave: (item: T) => void;
  onDelete: (id: number) => void;
}

export default function CollectionEditor<T extends { id: number }>({
  title,
  items,
  fields,
  addLabel,
  summaryTitle,
  summarySubtitle,
  toDraft,
  emptyDraft,
  buildItem,
  onSave,
  onDelete,
}: CollectionEditorProps<T>) {
  const [editingId, setEditingId] = useState<number | "new" | null>(null);
  const [draft, setDraft] = useState<Record<string, string>>({});

  function startEdit(item: T) {
    setEditingId(item.id);
    setDraft(toDraft(item));
  }

  function startAdd() {
    setEditingId("new");
    setDraft(emptyDraft);
  }

  function cancel() {
    setEditingId(null);
    setDraft({});
  }

  function save() {
    const id = editingId === "new" ? 0 : (editingId as number);
    onSave(buildItem(draft, id));
    cancel();
  }

  function remove() {
    if (editingId === "new" || editingId === null) return;
    if (!window.confirm("Delete this item?")) return;
    onDelete(editingId);
    cancel();
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-xs font-medium tracking-widest uppercase">{title}</h2>
        <button
          onClick={startAdd}
          className="inline-flex items-center gap-1.5 rounded-full border border-acc bg-acc-soft px-3.5 py-1.5 font-mono text-xs text-acc"
        >
          <PlusIcon className="h-3.5 w-3.5" /> {addLabel}
        </button>
      </div>

      <div className="flex flex-col gap-2.5">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 border border-line bg-bg2 px-4.5 py-3.5"
          >
            <div>
              <div className="text-sm font-semibold">{summaryTitle(item)}</div>
              {summarySubtitle && <div className="font-mono text-xs text-mut">{summarySubtitle(item)}</div>}
            </div>
            <button
              onClick={() => startEdit(item)}
              className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-acc px-3 py-1.5 font-mono text-xs text-acc"
            >
              <PencilSquareIcon className="h-3.5 w-3.5" /> edit
            </button>
          </div>
        ))}
        {items.length === 0 && <p className="font-mono text-xs text-mut">Nothing here yet.</p>}
      </div>

      {editingId !== null && (
        <div className="flex flex-col gap-5 border border-acc/40 bg-bg2 p-6">
          <EditableFieldForm
            fields={fields}
            values={draft}
            onChange={(key, value) => setDraft((prev) => ({ ...prev, [key]: value }))}
          />
          <div className="flex gap-2.5">
            <button
              onClick={save}
              className="flex-1 rounded-lg bg-acc py-2.5 font-mono text-xs font-semibold tracking-wide text-bg uppercase"
            >
              Save
            </button>
            <button
              onClick={cancel}
              className="rounded-lg border border-line px-4 py-2.5 font-mono text-xs text-mut uppercase"
            >
              Cancel
            </button>
            {editingId !== "new" && (
              <button
                onClick={remove}
                className="inline-flex items-center gap-1.5 rounded-lg border border-red-800 px-4 py-2.5 font-mono text-xs text-red-400 uppercase"
              >
                <TrashIcon className="h-3.5 w-3.5" /> delete
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
