"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  applyTheme,
  nextTheme,
  resolveTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    const initial = resolveTheme(
      stored,
      window.matchMedia("(prefers-color-scheme: dark)").matches,
    );
    applyTheme(initial);
    setTheme(initial);
  }, []);

  const toggle = () => {
    const updated = nextTheme(theme);
    applyTheme(updated);
    setTheme(updated);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, updated);
    } catch {
      // Stockage indisponible : le thème reste appliqué pour la session.
    }
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"}
      aria-pressed={theme === "dark"}
      onClick={toggle}
    >
      {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  );
}
