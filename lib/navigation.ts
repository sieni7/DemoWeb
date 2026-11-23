export type NavigationItem = {
  href: string;
  label: string;
};

export const MOBILE_MENU_ID = "navigation-mobile";

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Confidentialité" },
];
