# DemoWeb — Mandat du sprint S0

| Champ | Valeur |
|---|---|
| Version | 0.2 |
| Date | 2026-11-22 |
| Statut | **VALIDÉ CP3 — en attente d'autorisation de transition** |
| Sprint | **S0 — Fondations** |
| `mandate_version` | `S0-v0.1` |
| Branche | `dev_sprint_00` |
| Auteur | ORCHESTRATOR |
| Validateur | VALIDATOR |

**Références :** [roadmap.md](sprints/roadmap.md) · [architecture.md](docs/architecture/architecture.md) · [agents.md](agents.md).

> Ce mandat ne vaut **aucune autorisation d'exécution**. Il doit être validé au CP3, puis une transition doit être autorisée par le VALIDATOR et consommée par le BUILDER.

---

## 1. Objectif

Établir les fondations techniques du projet : dépôt, framework, qualité, CI et configuration de base. Aucun écran public, aucun backoffice, aucun effet.

---

## 2. Périmètre autorisé

| # | Tâche | Livrable |
|---|---|---|
| T0-1 | Initialiser le dépôt Git, ajouter le distant `github.com/sieni7/DemoWeb`, créer `dev_sprint_00` | Dépôt fonctionnel |
| T0-2 | Initialiser Next.js 15 + TypeScript strict + Tailwind CSS v4 | Application démarrable |
| T0-3 | Initialiser shadcn/ui | `components/ui/` |
| T0-4 | Configurer ESLint, Prettier, Vitest, Playwright | Configurations + un test de fumée |
| T0-5 | Créer le workflow GitHub Actions : lint, tests, `gitleaks` | `.github/workflows/ci.yml` |
| T0-6 | Créer `.gitignore`, `.env.example`, `README.md` minimal | Fichiers de base |
| T0-7 | Initialiser Prisma sans modèle métier | `prisma/schema.prisma` |
| T0-8 | Copier les modèles de rapports depuis `C:\documentation\templates\` | `templates/` |
| T0-9 | Vérifier que la CI passe au vert | Exécution CI |

---

## 3. Exclusions

- Aucune page publique, aucun composant de vitrine.
- Aucun modèle métier Prisma, aucune migration.
- Aucune authentification.
- Aucun effet visuel, aucun asset 3D.
- Aucun déploiement en production.
- Aucune modification de `state.json`, `agents.md`, `contexte.md` par le BUILDER.

---

## 4. Critères d'acceptation du sprint

| Réf. | Critère |
|---|---|
| S0-AC-01 | `npm run dev` démarre sans erreur. |
| S0-AC-02 | `npm run lint` et `npm run test` passent. |
| S0-AC-03 | Le workflow CI s'exécute et passe au vert sur `dev_sprint_00`. |
| S0-AC-04 | `gitleaks` ne détecte aucun secret. |
| S0-AC-05 | La structure du dépôt correspond à `docs/architecture/architecture.md` §2. |
| S0-AC-06 | `.env.example` documente toutes les variables attendues, sans valeur secrète. |
| S0-AC-07 | Aucun fichier interdit au BUILDER n'est modifié. |

---

## 5. Preuves attendues

- URL ou capture de l'exécution CI verte.
- Hashes des commits atomiques sur `dev_sprint_00`.
- Sortie de `npm run lint` et `npm run test`.
- Sortie de `gitleaks`.
- Capture de l'application locale démarrée.

---

## 6. Git

- Commits atomiques, un par tâche `T0-x`.
- Aucune fusion vers `main`.
- Push uniquement sur `dev_sprint_00`.
- PR ouverte en fin de sprint, sans fusion.

---

## 7. Transition

| Champ | Valeur |
|---|---|
| `transition_id` | À créer après CP3 |
| Destinataire | BUILDER |
| Autorisation | VALIDATOR |
| Reçu | `sprint_report/` |

---

## 8. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-11-22 | Version initiale — mandat S0 |
| 0.2 | 2026-11-22 | CP3 validé — mandat en attente d'autorisation de transition |
