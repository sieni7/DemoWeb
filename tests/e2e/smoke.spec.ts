import { expect, test } from "@playwright/test";

test("the foundation page renders", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: "Accueil" })).toBeVisible();
});
