"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import { defaultContent } from "@/content/site-content";
import type { HeroFields, Project, Service, SiteContent, SkillGroup } from "@/content/types";

const STORAGE_KEY = "hall-pf-content-v1";
const CHANGE_EVENT = "pf-content-changed";

let cachedRaw: string | null = null;
let cachedContent: SiteContent = defaultContent;

function readRaw(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

/** Module-level cache so repeated reads return a stable reference for useSyncExternalStore. */
function getSnapshot(): SiteContent {
  const raw = readRaw();
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      if (raw) {
        const parsed = JSON.parse(raw);
        const mergedProjects = [...(parsed.projects || [])];
        for (const defaultProj of defaultContent.projects) {
          if (!mergedProjects.some((p: Project) => p.id === defaultProj.id || p.title === defaultProj.title)) {
            mergedProjects.unshift(defaultProj);
          }
        }
        cachedContent = {
          ...defaultContent,
          ...parsed,
          projects: mergedProjects,
        };
      } else {
        cachedContent = defaultContent;
      }
    } catch {
      cachedContent = defaultContent;
    }
  }
  return cachedContent;
}

function getServerSnapshot(): SiteContent {
  return defaultContent;
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function writeContent(content: SiteContent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  } catch {
    // localStorage unavailable — edits stay in memory for this render only
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function clearContent() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function upsertById<T extends { id: number }>(list: T[], item: T): T[] {
  const index = list.findIndex((existing) => existing.id === item.id);
  if (index === -1) return [...list, item];
  const next = [...list];
  next[index] = item;
  return next;
}

function nextIdFor(items: { id: number }[]): number {
  return items.reduce((max, item) => Math.max(max, item.id), 0) + 1;
}

interface ContentStoreValue {
  content: SiteContent;
  updateHero: (patch: Partial<HeroFields>) => void;
  upsertService: (service: Service) => void;
  deleteService: (id: number) => void;
  upsertProject: (project: Project) => void;
  deleteProject: (id: number) => void;
  upsertSkillGroup: (group: SkillGroup) => void;
  deleteSkillGroup: (id: number) => void;
  resetContent: () => void;
  exportJSON: () => string;
  importJSON: (json: string) => boolean;
}

const ContentStoreContext = createContext<ContentStoreValue | null>(null);

export function ContentStoreProvider({ children }: { children: React.ReactNode }) {
  const content = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const mutate = useCallback((updater: (prev: SiteContent) => SiteContent) => {
    writeContent(updater(getSnapshot()));
  }, []);

  const updateHero = useCallback(
    (patch: Partial<HeroFields>) => mutate((prev) => ({ ...prev, ...patch })),
    [mutate]
  );

  const upsertService = useCallback(
    (service: Service) =>
      mutate((prev) => ({
        ...prev,
        services: upsertById(prev.services, service.id ? service : { ...service, id: nextIdFor(prev.services) }),
      })),
    [mutate]
  );

  const deleteService = useCallback(
    (id: number) => mutate((prev) => ({ ...prev, services: prev.services.filter((s) => s.id !== id) })),
    [mutate]
  );

  const upsertProject = useCallback(
    (project: Project) =>
      mutate((prev) => ({
        ...prev,
        projects: upsertById(prev.projects, project.id ? project : { ...project, id: nextIdFor(prev.projects) }),
      })),
    [mutate]
  );

  const deleteProject = useCallback(
    (id: number) => mutate((prev) => ({ ...prev, projects: prev.projects.filter((p) => p.id !== id) })),
    [mutate]
  );

  const upsertSkillGroup = useCallback(
    (group: SkillGroup) =>
      mutate((prev) => ({
        ...prev,
        skills: upsertById(prev.skills, group.id ? group : { ...group, id: nextIdFor(prev.skills) }),
      })),
    [mutate]
  );

  const deleteSkillGroup = useCallback(
    (id: number) => mutate((prev) => ({ ...prev, skills: prev.skills.filter((s) => s.id !== id) })),
    [mutate]
  );

  const resetContent = useCallback(() => clearContent(), []);

  const exportJSON = useCallback(() => JSON.stringify(content, null, 2), [content]);

  const importJSON = useCallback(
    (json: string) => {
      try {
        const parsed = JSON.parse(json);
        mutate((prev) => ({ ...prev, ...parsed }));
        return true;
      } catch {
        return false;
      }
    },
    [mutate]
  );

  const value = useMemo<ContentStoreValue>(
    () => ({
      content,
      updateHero,
      upsertService,
      deleteService,
      upsertProject,
      deleteProject,
      upsertSkillGroup,
      deleteSkillGroup,
      resetContent,
      exportJSON,
      importJSON,
    }),
    [
      content,
      updateHero,
      upsertService,
      deleteService,
      upsertProject,
      deleteProject,
      upsertSkillGroup,
      deleteSkillGroup,
      resetContent,
      exportJSON,
      importJSON,
    ]
  );

  return <ContentStoreContext.Provider value={value}>{children}</ContentStoreContext.Provider>;
}

export function useContentStore(): ContentStoreValue {
  const ctx = useContext(ContentStoreContext);
  if (!ctx) throw new Error("useContentStore must be used within a ContentStoreProvider");
  return ctx;
}
