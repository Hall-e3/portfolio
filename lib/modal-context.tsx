"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { Project } from "@/content/types";

interface ModalContextValue {
  bookingContext: string | null;
  openBooking: (context: string) => void;
  closeBooking: () => void;
  startProjectOpen: boolean;
  openStartProject: () => void;
  closeStartProject: () => void;
  selectedProject: Project | null;
  openProjectDetail: (project: Project) => void;
  closeProjectDetail: () => void;
  playbookOpen: boolean;
  openPlaybook: () => void;
  closePlaybook: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [bookingContext, setBookingContext] = useState<string | null>(null);
  const [startProjectOpen, setStartProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [playbookOpen, setPlaybookOpen] = useState(false);

  const openBooking = useCallback((context: string) => setBookingContext(context), []);
  const closeBooking = useCallback(() => setBookingContext(null), []);
  const openStartProject = useCallback(() => setStartProjectOpen(true), []);
  const closeStartProject = useCallback(() => setStartProjectOpen(false), []);
  const openProjectDetail = useCallback((project: Project) => setSelectedProject(project), []);
  const closeProjectDetail = useCallback(() => setSelectedProject(null), []);
  const openPlaybook = useCallback(() => setPlaybookOpen(true), []);
  const closePlaybook = useCallback(() => setPlaybookOpen(false), []);

  const value = useMemo(
    () => ({
      bookingContext,
      openBooking,
      closeBooking,
      startProjectOpen,
      openStartProject,
      closeStartProject,
      selectedProject,
      openProjectDetail,
      closeProjectDetail,
      playbookOpen,
      openPlaybook,
      closePlaybook,
    }),
    [
      bookingContext,
      openBooking,
      closeBooking,
      startProjectOpen,
      openStartProject,
      closeStartProject,
      selectedProject,
      openProjectDetail,
      closeProjectDetail,
      playbookOpen,
      openPlaybook,
      closePlaybook,
    ]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModals(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModals must be used within a ModalProvider");
  return ctx;
}
