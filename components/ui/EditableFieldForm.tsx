import type { FieldConfig } from "@/lib/admin-fields";

interface EditableFieldFormProps {
  fields: FieldConfig[];
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

const FIELD_CLASSNAME =
  "w-full rounded-lg border border-line bg-bg px-3 py-2.5 font-sans text-sm text-fg";

export default function EditableFieldForm({ fields, values, onChange }: EditableFieldFormProps) {
  return (
    <div className="flex flex-col gap-4">
      {fields.map((field) => (
        <label key={field.key} className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] tracking-wider text-mut uppercase">{field.label}</span>
          {field.multiline ? (
            <textarea
              value={values[field.key] ?? ""}
              onChange={(e) => onChange(field.key, e.target.value)}
              rows={4}
              className={`${FIELD_CLASSNAME} resize-y leading-relaxed`}
            />
          ) : (
            <input
              value={values[field.key] ?? ""}
              onChange={(e) => onChange(field.key, e.target.value)}
              className={FIELD_CLASSNAME}
            />
          )}
        </label>
      ))}
    </div>
  );
}
