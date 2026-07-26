export interface FieldConfig {
  key: string;
  label: string;
  multiline?: boolean;
}

export const heroFields: FieldConfig[] = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "location", label: "Location" },
  { key: "headline", label: "Headline", multiline: true },
  { key: "summary", label: "Summary", multiline: true },
  { key: "email", label: "Email" },
  { key: "whatsapp", label: "WhatsApp number" },
  { key: "booking", label: "Booking link (Calendly etc.)" },
  { key: "github", label: "GitHub URL" },
  { key: "linkedin", label: "LinkedIn URL" },
];

export const serviceFields: FieldConfig[] = [
  { key: "title", label: "Title" },
  { key: "fee", label: "Fee" },
  { key: "desc", label: "Description", multiline: true },
  { key: "cta", label: "Button label" },
];

export const projectFields: FieldConfig[] = [
  { key: "title", label: "Title" },
  { key: "year", label: "Year" },
  { key: "platform", label: "Platform (Web / Mobile)" },
  { key: "status", label: "Status (Live / In development)" },
  { key: "role", label: "Your role" },
  { key: "desc", label: "Description", multiline: true },
  { key: "techStr", label: "Tech (comma-separated)" },
  { key: "link", label: "Website link (optional)" },
  { key: "playLink", label: "Play Store link (optional)" },
  { key: "appStoreLink", label: "App Store link (optional)" },
  { key: "thumb", label: "Thumbnail image URL (optional — auto from website if empty)" },
];

export const skillFields: FieldConfig[] = [
  { key: "label", label: "Group label" },
  { key: "items", label: "Items (· separated)", multiline: true },
];
