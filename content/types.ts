export interface Service {
  id: number;
  title: string;
  fee: string;
  desc: string;
  cta: string;
}

export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectMilestone {
  phase: string;
  duration: string;
  deliverables: string;
}

export interface ProjectArchitecture {
  overview: string;
  frontend?: string;
  backend?: string;
  database?: string;
  infrastructure?: string;
  highlights?: string[];
}

export interface ProjectSDLC {
  methodology: string;
  planningAndThoughts: string;
  qualityAssurance: string;
  deploymentStrategy: string;
}

export interface ProjectMaintenanceAvailability {
  status: string;
  clientCommitment: string;
  availabilityNotice: string;
}

export interface Project {
  id: number;
  slug?: string;
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
  tagline?: string;
  architecture?: ProjectArchitecture;
  sdlc?: ProjectSDLC;
  challenges?: ProjectChallenge[];
  timeline?: ProjectMilestone[];
  proposalScope?: string;
  maintenanceAndAvailability?: ProjectMaintenanceAvailability;
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

