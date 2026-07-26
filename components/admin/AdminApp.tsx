"use client";

import { useEffect, useState } from "react";
import { isSessionUnlocked } from "@/lib/admin-auth";
import AdminEditor from "./AdminEditor";
import AdminGate from "./AdminGate";

export default function AdminApp() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(isSessionUnlocked());
  }, []);

  return unlocked ? <AdminEditor onLock={() => setUnlocked(false)} /> : <AdminGate onUnlock={() => setUnlocked(true)} />;
}
