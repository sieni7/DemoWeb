import { expect, test, type Page } from "@playwright/test";

const ROUTES = [
  "/",
  "/projects",
  "/projects/demo",
  "/about",
  "/contact",
  "/privacy",
];

const MENU_BUTTON = '[aria-controls="navigation-mobile"]';

async function gotoReady(page: Page, path: string) {
  await page.goto(path, { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("main h1")).toBeVisible();
}

test("all public routes render a title without horizontal overflow", async ({ page }) => {
  test.setTimeout(120_000);
  for (const route of ROUTES) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await expect(page.locator("main h1")).toBeVisible();
    const fits = await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    );
    expect(fits, `${route} déborde horizontalement`).toBe(true);
  }
});

test("the theme toggle persists after reload", async ({ page }) => {
  await gotoReady(page, "/");
  const html = page.locator("html");
  const toggle = page.getByRole("button", { name: /thème/ });
  const initial = await html.getAttribute("data-theme");
  expect(initial === "light" || initial === "dark").toBe(true);

  const changed = initial === "dark" ? "light" : "dark";
  await toggle.click();
  await expect(html).toHaveAttribute("data-theme", changed);
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");
  await expect(html).toHaveAttribute("data-theme", changed);

  await page.getByRole("button", { name: /thème/ }).click();
  await expect(html).toHaveAttribute("data-theme", initial ?? "light");
});

test("the mobile menu is keyboard accessible", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith("mobile-375"), "menu masqué au-delà de 375 px");
  await gotoReady(page, "/");

  const button = page.locator(MENU_BUTTON);
  await button.click();
  await expect(button).toHaveAttribute("aria-expanded", "true");

  const firstLink = page.locator("#navigation-mobile a").first();
  await expect(firstLink).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(button).toHaveAttribute("aria-expanded", "false");
  await expect(button).toBeFocused();
});

test("the skip link is the first focusable element", async ({ page }) => {
  await gotoReady(page, "/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Aller au contenu principal" }),
  ).toBeFocused();
});
