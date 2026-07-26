/** Pure helpers for building mailto/webmail, WhatsApp, and booking-request links. */

export function mailtoHref(email: string): string {
  return `mailto:${email}`;
}

export function whatsappHref(rawNumber: string): string {
  const digits = rawNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}

/**
 * Opens a compose window for `email`. Apple devices get the native mailto
 * handler; everything else gets Gmail's web compose, since a bare `mailto:`
 * on desktop non-Apple platforms frequently has no handler configured.
 *
 * `subject`/`body` must be raw, unencoded text — this is the only place
 * percent-encoding happens (via URLSearchParams), so callers should never
 * pre-encode their strings.
 */
export function composeEmail(email: string, subject = "", body = ""): void {
  const isApple =
    /Mac|iPhone|iPad|iPod/.test(navigator.platform || "") ||
    /Macintosh|iPhone|iPad/.test(navigator.userAgent || "");

  if (isApple) {
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);
    const query = params.toString();
    window.location.href = `mailto:${email}${query ? `?${query}` : ""}`;
  } else {
    const params = new URLSearchParams({ view: "cm", fs: "1", to: email });
    if (subject) params.set("su", subject);
    if (body) params.set("body", body);
    window.open(`https://mail.google.com/mail/?${params.toString()}`, "_blank");
  }
}

export function firstName(fullName: string): string {
  return fullName.split(" ")[0] ?? fullName;
}

export function buildMeetingRequestBody(recipientName: string, platform: string): string {
  return `Hi ${firstName(recipientName)},\n\nI'd like to book a ${platform.toLowerCase()} call.\n\nPreferred dates/times (with timezone):\n1.\n2.\n\nWhat I'd like to cover:\n`;
}

export function buildStartProjectBody(recipientName: string): string {
  return `Hi ${firstName(recipientName)},\n\nI’d like to start a project with you.\n\n1. SYSTEM REQUIREMENTS\n(Describe what the system should do — key features, user types, platforms: web / mobile / both. Attach your SRS if you have one.)\n\n2. BUDGET & QUOTE\nBudget range: \nExpected timeline: \n\n3. PROPOSAL (if available)\n(Attach or link your proposal / brief.)\n\n4. DESIGNS & REFERENCES (optional)\n(Figma, wireframes, or reference products.)\n\nCompany / name: \nBest way to reach me: \n`;
}
