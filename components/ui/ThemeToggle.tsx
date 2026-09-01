"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/lib/theme-context";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      title="Toggle theme"
      aria-label="Toggle theme"
      className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-bg2 text-fg transition-colors hover:border-acc hover:text-acc cursor-pointer"
    >
      {!mounted ? (
        <SunIcon className="h-4 w-4" />
      ) : theme === "dark" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  );
}
