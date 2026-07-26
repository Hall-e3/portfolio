"use client";

import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { checkAdminPassword, isAdminConfigured, markSessionUnlocked } from "@/lib/admin-auth";

export default function AdminGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const configured = isAdminConfigured();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (checkAdminPassword(password)) {
      markSessionUnlocked();
      onUnlock();
    } else {
      setError(true);
    }
  }

  return (
    <section className="mx-auto flex max-w-100 flex-col items-center gap-5 py-28 text-center">
      <LockClosedIcon className="h-7 w-7 text-acc" />
      <h1 className="font-serif text-3xl font-normal">Admin access</h1>
      {!configured ? (
        <p className="text-sm leading-relaxed text-mut">
          No admin password is configured for this build. Set the{" "}
          <code className="font-mono text-acc">NEXT_PUBLIC_ADMIN_PASSWORD</code> environment variable and redeploy
          to enable content editing.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
          <input
            type="password"
            autoFocus
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            className="w-full rounded-lg border border-line bg-bg2 px-4 py-3 text-center text-sm text-fg"
          />
          {error && <p className="text-xs text-red-400">Incorrect password.</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-acc py-3 font-mono text-xs font-semibold tracking-wide text-bg uppercase"
          >
            Unlock
          </button>
        </form>
      )}
    </section>
  );
}
