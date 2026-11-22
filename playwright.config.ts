import { defineConfig } from "@playwright/test";

const baseURL = "http://127.0.0.1:3000";

const viewports = [
  { name: "mobile-375", viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true },
  { name: "tablet-768", viewport: { width: 768, height: 1024 } },
  { name: "desktop-1440", viewport: { width: 1440, height: 900 } },
] as const;

const colorSchemes = ["light", "dark"] as const;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: "html",
  timeout: 120_000,
  workers: 3,
  use: {
    baseURL,
    trace: "on-first-retry",
    navigationTimeout: 60_000,
  },
  projects: viewports.flatMap(({ name, ...viewport }) =>
    colorSchemes.map((colorScheme) => ({
      name: `${name}-${colorScheme}`,
      use: { ...viewport, colorScheme },
    })),
  ),
  webServer: {
    command: "npm run dev",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
