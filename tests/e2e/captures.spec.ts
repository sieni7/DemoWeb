import { test } from "@playwright/test";

const CAPTURES = [
  { name: "375-light", viewport: { width: 375, height: 812 }, colorScheme: "light" },
  { name: "375-dark", viewport: { width: 375, height: 812 }, colorScheme: "dark" },
  { name: "768-light", viewport: { width: 768, height: 1024 }, colorScheme: "light" },
  { name: "768-dark", viewport: { width: 768, height: 1024 }, colorScheme: "dark" },
  { name: "1440-light", viewport: { width: 1440, height: 900 }, colorScheme: "light" },
  { name: "1440-dark", viewport: { width: 1440, height: 900 }, colorScheme: "dark" },
] as const;

test("capture the public home across viewports and themes", async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-375-light", "captures générées une seule fois");
  test.setTimeout(180_000);

  for (const capture of CAPTURES) {
    const context = await browser.newContext({
      viewport: capture.viewport,
      colorScheme: capture.colorScheme,
    });
    const page = await context.newPage();
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle");
    await page.screenshot({
      path: `sprint_report/evidence/home-${capture.name}.png`,
      fullPage: true,
    });
    await context.close();
  }
});
