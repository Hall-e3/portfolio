"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

interface ModalContextValue {
  bookingContext: string | null;
  openBooking: (context: string) => void;
  closeBooking: () => void;
  startProjectOpen: boolean;
  openStartProject: () => void;
  closeStartProject: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [bookingContext, setBookingContext] = useState<string | null>(null);
  const [startProjectOpen, setStartProjectOpen] = useState(false);

  const openBooking = useCallback((context: string) => setBookingContext(context), []);
  const closeBooking = useCallback(() => setBookingContext(null), []);
  const openStartProject = useCallback(() => setStartProjectOpen(true), []);
  const closeStartProject = useCallback(() => setStartProjectOpen(false), []);

  const value = useMemo(
    () => ({ bookingContext, openBooking, closeBooking, startProjectOpen, openStartProject, closeStartProject }),
    [bookingContext, openBooking, closeBooking, startProjectOpen, openStartProject, closeStartProject]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModals(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModals must be used within a ModalProvider");
  return ctx;
}
