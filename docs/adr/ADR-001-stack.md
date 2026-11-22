# ADR-001 — Stack front-end et effets

| Champ | Valeur |
|---|---|
| Statut | **ACCEPTÉ — CP2, 2026-11-22** |
| Date | 2026-11-22 |
| Décideur | VALIDATOR |
| Références | D-002, D-012, D-016 |

## Contexte

DemoWeb doit démontrer un savoir-faire technique : effets visuels avancés, performance élevée, accessibilité AA, dépôt public, déploiement simple.

## Décision

- **Next.js 15** (App Router) + **TypeScript** en mode strict.
- **Tailwind CSS v4** pour le style.
- **shadcn/ui** (Radix) pour les composants accessibles.
- **GSAP + ScrollTrigger** pour les animations au scroll.
- **Framer Motion** pour les transitions de page et micro-interactions.
- **Three.js + React Three Fiber** pour la scène 3D.
- **Lenis** pour le scroll fluide.

## Conséquences

**Positives**
- Écosystème mature, documentation abondante.
- Rendu serveur et statique dans un seul framework.
- shadcn/ui fournit une base accessible conforme à AC-08.

**Négatives**
- Bundle Three.js lourd → chargement différé obligatoire.
- Deux librairies d'animation (GSAP et Framer Motion) → risque de chevauchement ; répartition stricte à définir.
- Tailwind v4 encore récent → vérifier la compatibilité des plugins.

**Neutres**
- Aucun verrouillage fort : les composants restent remplaçables.

## Alternatives écartées

| Alternative | Motif |
|---|---|
| Astro | Excellent pour la vitrine, mais backoffice et auth plus fragmentés |
| Nuxt / Vue | Aucun avantage décisif ; compétences supposées orientées React |
| SvelteKit | Écosystème d'effets 3D moins fourni |

## Suivi

Réévaluer si le bundle dépasse le budget de performance (AC-01) ou si GSAP/Framer Motion se chevauchent en pratique.
