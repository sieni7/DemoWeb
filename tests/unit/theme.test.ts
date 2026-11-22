import { describe, expect, it } from "vitest";

import {
  nextTheme,
  resolveTheme,
  THEME_INIT_SCRIPT,
  THEME_STORAGE_KEY,
} from "@/lib/theme";

describe("theme", () => {
  it("uses a stored theme when valid", () => {
    expect(resolveTheme("dark", false)).toBe("dark");
    expect(resolveTheme("light", true)).toBe("light");
  });

  it("falls back to the system preference when storage is empty or invalid", () => {
    expect(resolveTheme(null, true)).toBe("dark");
    expect(resolveTheme(null, false)).toBe("light");
    expect(resolveTheme("system", true)).toBe("dark");
  });

  it("toggles between the two themes", () => {
    expect(nextTheme("light")).toBe("dark");
    expect(nextTheme("dark")).toBe("light");
  });

  it("initialises the theme before paint using storage and system preference", () => {
    expect(THEME_INIT_SCRIPT).toContain(THEME_STORAGE_KEY);
    expect(THEME_INIT_SCRIPT).toContain("prefers-color-scheme: dark");
    expect(THEME_INIT_SCRIPT).toContain("dataset.theme");
  });
});
