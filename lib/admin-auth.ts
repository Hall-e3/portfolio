const SESSION_KEY = "pf-admin-unlocked";

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

export function isSessionUnlocked(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

export function markSessionUnlocked(): void {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // sessionStorage unavailable — unlock will just not survive a refresh
  }
}

export function clearSessionUnlocked(): void {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}
