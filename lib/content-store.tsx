"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { defaultContent } from "@/content/site-content";
import type { HeroFields, Project, Service, SiteContent, SkillGroup } from "@/content/types";

const STORAGE_KEY = "hall-pf-content-v1";

function persist(content: SiteContent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  } catch {
    // localStorage unavailable — edits stay in memory for this session only
  }
}

function upsertById<T extends { id: number }>(list: T[], item: T): T[] {
  const index = list.findIndex((existing) => existing.id === item.id);
  if (index === -1) return [...list, item];
  const next = [...list];
  next[index] = item;
  return next;
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
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const nextId = useRef(Date.now());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setContent({ ...defaultContent, ...JSON.parse(raw) });
    } catch {
      // corrupt or inaccessible storage — fall back to defaults already in state
    }
  }, []);

  const update = useCallback((updater: (prev: SiteContent) => SiteContent) => {
    setContent((prev) => {
      const next = updater(prev);
      persist(next);
      return next;
    });
  }, []);

  const updateHero = useCallback(
    (patch: Partial<HeroFields>) => update((prev) => ({ ...prev, ...patch })),
    [update]
  );

  const upsertService = useCallback(
    (service: Service) =>
      update((prev) => ({
        ...prev,
        services: upsertById(prev.services, service.id ? service : { ...service, id: nextId.current++ }),
      })),
    [update]
  );

  const deleteService = useCallback(
    (id: number) => update((prev) => ({ ...prev, services: prev.services.filter((s) => s.id !== id) })),
    [update]
  );

  const upsertProject = useCallback(
    (project: Project) =>
      update((prev) => ({
        ...prev,
        projects: upsertById(prev.projects, project.id ? project : { ...project, id: nextId.current++ }),
      })),
    [update]
  );

  const deleteProject = useCallback(
    (id: number) => update((prev) => ({ ...prev, projects: prev.projects.filter((p) => p.id !== id) })),
    [update]
  );

  const upsertSkillGroup = useCallback(
    (group: SkillGroup) =>
      update((prev) => ({
        ...prev,
        skills: upsertById(prev.skills, group.id ? group : { ...group, id: nextId.current++ }),
      })),
    [update]
  );

  const deleteSkillGroup = useCallback(
    (id: number) => update((prev) => ({ ...prev, skills: prev.skills.filter((s) => s.id !== id) })),
    [update]
  );

  const resetContent = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setContent(defaultContent);
  }, []);

  const exportJSON = useCallback(() => JSON.stringify(content, null, 2), [content]);

  const importJSON = useCallback(
    (json: string) => {
      try {
        const parsed = JSON.parse(json);
        update((prev) => ({ ...prev, ...parsed }));
        return true;
      } catch {
        return false;
      }
    },
    [update]
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
