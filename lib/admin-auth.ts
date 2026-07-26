import { useSyncExternalStore } from "react";

const SESSION_KEY = "pf-admin-unlocked";
const CHANGE_EVENT = "pf-admin-auth-changed";

/**
 * Client-side-only gate: the expected password ships inside the static
 * bundle, so this is a deterrent against casual visitors, not real access
 * control. There is no server on GitHub Pages to authenticate against.
 */
export function isAdminConfigured(): boolean {
  return !!process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
}

export function checkAdminPassword(input: string): boolean {
  const expected = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
  return !!expected && input === expected;
}

function readUnlocked(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  return () => window.removeEventListener(CHANGE_EVENT, callback);
}

export function markSessionUnlocked(): void {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // sessionStorage unavailable — unlock will just not survive a refresh
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function clearSessionUnlocked(): void {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** True once unlocked in this browser tab's session. Always false during static prerendering. */
export function useSessionUnlocked(): boolean {
  return useSyncExternalStore(subscribe, readUnlocked, () => false);
}
