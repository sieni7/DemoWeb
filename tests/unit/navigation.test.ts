import { describe, expect, it } from "vitest";

import { MOBILE_MENU_ID, NAVIGATION_ITEMS } from "@/lib/navigation";

describe("navigation", () => {
  it("exposes the five public routes in French", () => {
    expect(NAVIGATION_ITEMS).toEqual([
      { href: "/", label: "Accueil" },
      { href: "/projects", label: "Projets" },
      { href: "/about", label: "À propos" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Confidentialité" },
    ]);
  });

  it("uses unique hrefs and a stable mobile menu identifier", () => {
    const hrefs = NAVIGATION_ITEMS.map((item) => item.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
    expect(MOBILE_MENU_ID).toBe("navigation-mobile");
  });
});
