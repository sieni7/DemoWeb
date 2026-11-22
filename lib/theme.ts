export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "demoweb-theme";

export function resolveTheme(stored: string | null, systemPrefersDark: boolean): Theme {
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return systemPrefersDark ? "dark" : "light";
}

export function nextTheme(current: Theme): Theme {
  return current === "dark" ? "light" : "dark";
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
}

export const THEME_INIT_SCRIPT = `(function(){try{var stored=localStorage.getItem("${THEME_STORAGE_KEY}");var theme=(stored==="light"||stored==="dark")?stored:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=theme;}catch(error){document.documentElement.dataset.theme="light";}})();`;
