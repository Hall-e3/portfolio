export interface Service {
  id: number;
  title: string;
  fee: string;
  desc: string;
  cta: string;
}

export interface Project {
  id: number;
  title: string;
  year: string;
  platform: string;
  status: string;
  role: string;
  link?: string;
  playLink?: string;
  appStoreLink?: string;
  thumb?: string;
  tech: string[];
  desc: string;
}

export interface SkillGroup {
  id: number;
  label: string;
  items: string;
}

export interface SiteContent {
  name: string;
  role: string;
  location: string;
  headline: string;
  summary: string;
  email: string;
  whatsapp: string;
  booking: string;
  github: string;
  linkedin: string;
  services: Service[];
  projects: Project[];
  skills: SkillGroup[];
}

export type HeroFields = Omit<SiteContent, "services" | "projects" | "skills">;

export type Theme = "dark" | "light";

export type ProjectFilter = "all" | "web" | "mobile" | "full stack";
