# DemoWeb — Mandat du sprint S1

| Champ | Valeur |
|---|---|
| Version | 0.3 |
| Date | 2026-11-23 |
| Statut | **S1 LIVRÉE — en audit (`TR-2026-0005` autorisée par D-036) ; aucune acceptation ni fusion décidée** |
| Sprint | **S1 — Design system** |
| `mandate_version` | `S1-v0.1` |
| Branche | `dev_sprint_01` (à créer depuis `main` après fusion de S0) |
| Auteur | ORCHESTRATOR |
| Validateur | VALIDATOR |

**Références :** [roadmap.md](sprints/roadmap.md) §2 · [architecture.md](docs/architecture/architecture.md) §2 et §6 · [requirements.md](docs/requirements/requirements.md) FR-01/FR-02/NFR-02/NFR-08 · [AGENTS.md](AGENTS.md).

> Ce mandat ne vaut **aucune autorisation d'exécution** par lui-même. L'autorisation est portée par la transition `TR-2026-0004` (D-033) et par le reçu que le BUILDER doit déposer. La précondition est remplie : PR #1 `MERGED` (merge `2a2272f4`), protection de `main` activée et prouvée. Le BUILDER doit créer `dev_sprint_01` depuis `main` mise à jour.

---

## 1. Objectif

Mettre en place le design system et la structure des pages publiques vides : layout commun, navigation responsive, pied de page, thème sombre persistant et routes de la vitrine. Aucun contenu métier, aucune animation, aucune donnée, aucune authentification.

---

## 2. Périmètre autorisé

| # | Tâche | Livrable |
|---|---|---|
| T1-1 | Créer `app/(public)/layout.tsx` : structure commune (lien d'évitement, `header`, `main`, `footer`) | Layout public |
| T1-2 | Composant `Navigation` responsive avec menu mobile accessible (shadcn/ui, sans nouvelle dépendance) | `components/public/navigation.tsx` |
| T1-3 | Composant `Footer` en français, avec lien vers `/privacy` (route vide) | `components/public/footer.tsx` |
| T1-4 | Thème clair/sombre : variables CSS Tailwind v4, bascule persistée, initialisation sans flash | `components/public/theme-toggle.tsx` + `app/globals.css` |
| T1-5 | Routes vides conformes à l'architecture §2 : `/`, `/projects`, `/projects/[slug]`, `/about`, `/contact`, `/privacy` | Pages `app/(public)/**` |
| T1-6 | Design tokens Tailwind v4 : couleurs, typographie, espacements, contrastes AA | `app/globals.css` |
| T1-7 | Accessibilité de base : focus visible, navigation clavier du menu, `aria-*`, `prefers-reduced-motion` pris en compte | Composants + tests |
| T1-8 | Tests Vitest (navigation, bascule de thème) et Playwright (375 / 768 / 1440, clair et sombre) | `tests/**` |
| T1-9 | CI verte sur `dev_sprint_01` et production des preuves | Preuves dans `sprint_report/**` |

---

## 3. Exclusions

- Aucun contenu réel ni contenu fictif détaillé : les pages restent des squelettes titrés (contenu en S3).
- Aucune animation GSAP/ScrollTrigger, Lenis, transition de page ou micro-interaction (S4).
- Aucune scène 3D, WebGL ou Three.js (S5).
- Aucun modèle Prisma, migration, base de données ou appel réseau applicatif (S2).
- Aucune authentification, aucun backoffice, aucune route `/api/**` (S2/S6).
- Aucun formulaire de contact fonctionnel, aucun envoi d'email, aucun Turnstile (S7).
- Aucun SEO avancé : pas de sitemap, pas de robots, pas d'OpenGraph (S3). `title` et `meta description` minimaux autorisés.
- Aucun déploiement, aucune création de `main`, aucune PR, aucune fusion.
- Aucune nouvelle dépendance hors stack validée : **notamment pas de `next-themes` ni de Framer Motion en S1**.

---

## 4. Critères d'acceptation du sprint

| Réf. | Critère |
|---|---|
| S1-AC-01 | `npm run dev` démarre sans erreur ; les six routes répondent `200`. |
| S1-AC-02 | Navigation responsive de 375 à 1440 px, sans débordement horizontal ni chevauchement. |
| S1-AC-03 | Bascule clair/sombre fonctionnelle, persistée après rechargement, sans flash initial. |
| S1-AC-04 | Lien d'évitement, focus visible et navigation clavier du menu mobile opérationnels. |
| S1-AC-05 | `npm run lint`, `npm run typecheck` et `npm run test` passent ; les tests Playwright couvrent 375 / 768 / 1440 en clair et en sombre. |
| S1-AC-06 | Structure conforme à `docs/architecture/architecture.md` §2 ; aucun fichier interdit au BUILDER n'est modifié. |
| S1-AC-07 | Le workflow CI passe au vert sur `dev_sprint_01`. |
| S1-AC-08 | `gitleaks detect --source . --redact` ne signale aucun secret. **Preuve `declared_only` du BUILDER : elle ne lève pas R-S0-02**, qui reste `NOT_CHECKED` (D-031). |

---

## 5. Preuves attendues

- Captures des six routes à 375 / 768 / 1440 px, en clair et en sombre.
- Sortie brute des commandes `npm run lint`, `npm run typecheck`, `npm run test` et des tests Playwright.
- URL de l'exécution CI verte sur `dev_sprint_01`.
- Sortie de `gitleaks` (version, date, nombre de findings).
- Liste des commits atomiques avec leurs hashes.

---

## 6. Git

- Commits atomiques, un par tâche `T1-x`.
- `dev_sprint_01` créée depuis `main` après fusion de S0 ; aucun `git checkout main` ni `git switch main`.
- Push uniquement sur `dev_sprint_01`. Aucun merge, aucun `push --force`, aucun `reset --hard`.
- Aucune PR : sa création relève d'une décision VALIDATOR ultérieure.

---

## 7. Transition

| Champ | Valeur |
|---|---|
| `transition_id` | `TR-2026-0004` |
| `mandate_version` | `S1-v0.1` |
| Destinataire | BUILDER |
| Autorisation | VALIDATOR — D-033, 2026-11-22T12:07:44Z |
| Reçu | `sprint_report/TR-2026-0004_receipt.md` |
| Précondition | Fusion S0 exécutée (D-032) |
| État d'exécution | **Livrée** — `TR-2026-0004/completed`, rapport `sprint_report/S1_report.md` |
| Audit | **`TR-2026-0005/authorized`** — D-036 `GO` du 2026-11-23T05:33:42Z, AUDITOR en session séparée ; sprint `S1/auditing` |

---

## 8. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-11-22 | Mandat initial S1 — Design system ; `TR-2026-0004` autorisée par D-033 ; subordonné à la fusion S0 (D-032) |
| 0.2 | 2026-11-22 | Précondition remplie : protection de main active (D-034) et PR #1 fusionnée (merge `2a2272f4`) ; `mandate_version` inchangée (`S1-v0.1`) |
| 0.3 | 2026-11-23 | Consignation de la livraison S1 et de l'autorisation d'audit (D-036 / `TR-2026-0005`) ; `mandate_version` inchangée (`S1-v0.1`) |
