import { expect, test } from "@playwright/test";

test("the foundation page renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "DemoWeb" })).toBeVisible();
});
