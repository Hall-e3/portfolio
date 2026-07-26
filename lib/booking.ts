export interface BookingDetail {
  k: string;
  v: string;
}

function kind(context: string): "tutor" | "consult" | "general" {
  if (/tutor/i.test(context)) return "tutor";
  if (/consult/i.test(context)) return "consult";
  return "general";
}

export function bookingBlurb(context: string): string {
  switch (kind(context)) {
    case "tutor":
      return "One-on-one full-stack programming sessions — JavaScript, TypeScript, React, React Native, and Node.js, from fundamentals to shipping production apps.";
    case "consult":
      return "A focused working session on your product: design review, system architecture, tech-stack decisions, and realistic build & running costs.";
    default:
      return "Pick a platform — Calendly shows my live availability; Zoom and Google Meet go through a quick email request.";
  }
}

export function bookingDetails(context: string): BookingDetail[] {
  switch (kind(context)) {
    case "tutor":
      return [
        { k: "Format", v: "1-hour live session, screen-share, hands-on coding" },
        { k: "Fee", v: "From $25 / hour — first 15 minutes free to align on goals" },
        { k: "Includes", v: "Session recording, code samples, and a practice plan for the week" },
      ];
    case "consult":
      return [
        { k: "Format", v: "60–90 minute call; send your brief or docs in advance" },
        { k: "Fee", v: "From $50 / session" },
        { k: "Includes", v: "Written summary with recommendations, architecture notes, and cost estimates" },
      ];
    default:
      return [
        { k: "Format", v: "30–60 minute call, agenda set by you" },
        { k: "Timezone", v: "East Africa Time (UTC+3) — flexible for other regions" },
        { k: "Response", v: "Email requests confirmed within 24 hours" },
      ];
  }
}
