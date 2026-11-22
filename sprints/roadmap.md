# DemoWeb — Roadmap

| Champ | Valeur |
|---|---|
| Version | 0.2 |
| Date | 2026-11-22 |
| Statut | **VALIDÉ CP1 — 2026-11-22** |
| Auteur | ORCHESTRATOR |
| Portée | Découpage en sprints, objectifs et critères de sortie |
| Ne contient pas | Mandats de sprint détaillés (`current_sprint.md`) |

**Source :** [contexte.md](../contexte.md) · [requirements.md](../docs/requirements/requirements.md) · décision D-004.

---

## 1. Principes

- Chaque sprint produit un incrément **vérifiable**, pas un ensemble de tâches ouvertes.
- Chaque sprint suit : mandat → transition → exécution → audit → **GO** → **décision de fusion distincte** → merge.
- Les commits sont atomiques, sur une branche `dev_sprint_XX` dédiée.
- Aucune fusion vers `main` sans décision distincte du VALIDATOR (D-005, `GC-07`).

---

## 2. Sprints

| Sprint | Branche | Objectif | Livrables vérifiables | Critères de sortie |
|---|---|---|---|---|
| **S0** | `dev_sprint_00` | Fondations | Dépôt initialisé, Next.js + TypeScript, Tailwind, CI (lint, tests, `gitleaks`), structure documentaire, `state.json` | CI verte · `state.json` valide · structure conforme |
| **S1** | `dev_sprint_01` | Design system | Layout, navigation, footer, thème sombre, pages vides | Responsive 375→1440 · mode sombre fonctionnel |
| **S2** | `dev_sprint_02` | Données + auth | Prisma + Neon, Auth.js + argon2, session admin, verrouillage après 5 échecs | AC-04 · migrations reproductibles |
| **S3** | `dev_sprint_03` | Vitrine | Pages publiques complètes, contenu fictif, SEO minimal | FR-01, FR-02, NFR-04 · AC-07 |
| **S4** | `dev_sprint_04` | Animations | GSAP / ScrollTrigger, transitions de page, micro-interactions | 60 fps desktop · AC-02 |
| **S5** | `dev_sprint_05` | 3D / WebGL | Scène Three.js, fallback sans WebGL, `prefers-reduced-motion` | AC-03 · NFR-07 |
| **S6** | `dev_sprint_06` | Backoffice | CRUD projets/textes/médias, uploads Vercel Blob | AC-07 · FR-06 à FR-08 |
| **S7** | `dev_sprint_07` | Contact + finitions | Formulaire réel, Resend, Turnstile, politique de confidentialité, consentement, Lighthouse, a11y | AC-01, AC-05, AC-08 · NFR-01, NFR-02, NFR-06 |

---

## 3. Dépendances

```text
S0 ── S1 ── S3
 │      │
 ├── S2 ─┘
 │
 ├── S4 ── S5
 │
 └── S6 ── S7
```

- S2 (auth) peut avancer en parallèle de S1.
- S4 (animations) dépend de S1 (design system).
- S5 (3D) dépend de S4.
- S6 (backoffice) dépend de S2.
- S7 (contact) dépend de S6 et de S3.

---

## 4. Règles de sortie de sprint

| Étape | Acteur | Preuve |
|---|---|---|
| Exécution | BUILDER | Commits atomiques, rapport de sprint |
| Audit | AUDITOR | Rapport d'audit indépendant |
| Acceptation | VALIDATOR | Décision `GO`, `GO_WITH_RESERVES`, `NO_GO` ou `HOLD` |
| Fusion | VALIDATOR | **Décision distincte** de l'acceptation |
| Clôture | VALIDATOR | Sprint `closed` ou `merged` |

---

## 5. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-11-22 | Version initiale — 8 sprints, S0 à S7 |
| 0.2 | 2026-11-22 | CP1 validé par le VALIDATOR — statut porté à VALIDÉ CP1 |
