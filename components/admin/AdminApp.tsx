"use client";

import { useState } from "react";
import { useSessionUnlocked } from "@/lib/admin-auth";
import AdminEditor from "./AdminEditor";
import AdminGate from "./AdminGate";

export default function AdminApp() {
  const sessionUnlocked = useSessionUnlocked();
  const [manualUnlock, setManualUnlock] = useState(false);
  const unlocked = sessionUnlocked || manualUnlock;

  return unlocked ? (
    <AdminEditor onLock={() => setManualUnlock(false)} />
  ) : (
    <AdminGate onUnlock={() => setManualUnlock(true)} />
  );
}
