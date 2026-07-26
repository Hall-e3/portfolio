"use client";

import { ContentStoreProvider } from "@/lib/content-store";
import { ModalProvider } from "@/lib/modal-context";
import { ThemeProvider } from "@/lib/theme-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ContentStoreProvider>
        <ModalProvider>{children}</ModalProvider>
      </ContentStoreProvider>
    </ThemeProvider>
  );
}
