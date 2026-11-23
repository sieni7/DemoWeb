# DemoWeb — Mandat du sprint S2

| Champ | Valeur |
|---|---|
| Version | 0.1 |
| Date | 2026-11-23 |
| Statut | **AUTORISÉE — `TR-2026-0006` autorisée par D-040, non consommée ; en attente de la session BUILDER** |
| Sprint | **S2 — Données + auth** |
| `mandate_version` | `S2-v0.1` |
| Branche | `dev_sprint_02` (à créer depuis `main` = `16f6d02`) |
| Auteur | ORCHESTRATOR |
| Validateur | VALIDATOR |

**Références :** [roadmap.md](sprints/roadmap.md) §2 et §4 · [architecture.md](docs/architecture/architecture.md) §2, §3 et §5 · [requirements.md](docs/requirements/requirements.md) FR-06 / NFR-05 / NFR-06 · [ADR-002](docs/adr/ADR-002-database.md) · [ADR-003](docs/adr/ADR-003-authentication.md) · [AGENTS.md](AGENTS.md).

> Ce mandat ne vaut **aucune autorisation d'exécution** par lui-même. L'autorisation est portée par la transition `TR-2026-0006` (D-040) et par le reçu que le BUILDER doit déposer. Le mandat S1 est archivé dans [`sprints/S1_mandate.md`](sprints/S1_mandate.md) ; toutes ses décisions sont consignées dans `reference/decision_log.md`.

---

## 1. Objectif

Mettre en place la persistance et l'authentification du futur backoffice : base PostgreSQL Neon via Prisma avec migrations reproductibles, Auth.js avec argon2id et GitHub OAuth, session admin unique, protection des routes `/admin/**` et verrouillage après cinq échecs. Aucun CRUD métier, aucun upload, aucun formulaire de contact fonctionnel.

---

## 2. Précondition

- D-040 (`GO` pour S2) rendue par le VALIDATOR le 2026-11-23T06:55:41Z.
- PR #4 `MERGED` (merge `16f6d029b287fd5368818dcdac992a8b6339b639`) ; `origin/main` = `16f6d02`.
- **`state.json` sur `origin/main` doit porter D-040 / `TR-2026-0006` `authorized`** : la consignation est intervenue sur `dev_sprint_00` (commit `df56a39`) et `main` porte encore D-039. La synchronisation de la gouvernance vers `main` exige une décision VALIDATOR distincte, exécutée par le VALIDATOR, avant le lancement du BUILDER.
- Protection de `main` active et prouvée (D-034) ; strict, check obligatoire, `enforce_admins`, pas de force push ni de suppression.
- `dev_sprint_02` reste à créer par le BUILDER depuis `origin/main` mise à jour.
- Aucun agent ne peut `git checkout main`, `git switch main`, fusionner ni ouvrir de PR.

L'étape 0 du prompt BUILDER revérifie ces faits avant toute consommation de la transition.

---

## 3. Périmètre autorisé

| # | Tâche | Livrable |
|---|---|---|
| T2-1 | Schéma Prisma initial conforme architecture §3 : `User`, `Account`, `Session`, `Project`, `Media`, `ContactMessage`, `LoginAttempt` (et table de vérification si requise par l'adaptateur Auth.js) ; `slug` unique, `status` ∈ {`draft`,`published`}, `tags` en `String[]` | `prisma/schema.prisma` + `prisma/migrations/**` |
| T2-2 | Connexion Neon via `PrismaClient` singleton et pooling PgBouncer ; `.env.example` contenant **les noms de variables uniquement, sans aucune valeur réelle** (`DATABASE_URL`, `AUTH_SECRET`, `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`, `ADMIN_GITHUB_LOGINS`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`) ; `.env` ignoré | Configuration + `.env.example` |
| T2-3 | Auth.js v5 avec adaptateur Prisma ; fournisseurs `credentials` (argon2id) et GitHub OAuth ; sessions JWT signées 8 h avec renouvellement glissant ; rôle unique `ADMIN`, aucune inscription publique ; script de *seed* administrateur à partir des variables d'environnement | `lib/auth/**`, `app/api/auth/[...nextauth]/route.ts`, script de seed |
| T2-4 | Protection des routes : `middleware.ts` exigeant une session sur `/admin/**` sauf `/admin/login` ; page de connexion en français ; tableau de bord `/admin` minimal sans CRUD | `middleware.ts`, `app/(admin)/**` |
| T2-5 | Verrouillage : état en base dans `LoginAttempt` (`identifier`, `ipHash`, `success`, `createdAt`) ; 5 échecs consécutifs en 15 min → blocage 15 min, compteur partagé en base ; test e2e simulant plusieurs instances serverless | `lib/auth/**` + tests |
| T2-6 | Sécurité complémentaire : rate limiting du login avec compteur partagé en base, validation Zod des entrées, en-têtes CSP / HSTS / `X-Content-Type-Options` / `Referrer-Policy` | Configuration + tests |
| T2-7 | RGPD — modèle de données : `ContactMessage.consentAt` et `retentionUntil = createdAt + 12 mois` ; **documenter dans le rapport** une proposition de purge automatique et de sauvegarde Neon, sans implémenter de tâche planifiée (décision VALIDATOR ultérieure) | Schéma + section du rapport |
| T2-8 | Tests Vitest (hachage argon2, verrouillage, garde de route, schéma) et Playwright (connexion, refus sans session, verrouillage, déconnexion) | `tests/**` |
| T2-9 | CI verte sur `dev_sprint_02` et production des preuves | `sprint_report/**` |

Les dépendances autorisées sont celles arrêtées en ADR-002 et ADR-003 : `prisma`, `@prisma/client`, `next-auth` (v5), `@auth/prisma-adapter`, `argon2`, `zod`. Toute autre dépendance doit être signalée au VALIDATOR avant ajout.

---

## 4. Exclusions

- Aucun CRUD de projets, textes ou médias, aucun upload Vercel Blob : S6.
- Aucun formulaire de contact fonctionnel, aucun envoi d'email Resend, aucun Turnstile : S7.
- Aucun contenu vitrine détaillé : S3. Aucune animation GSAP/ScrollTrigger/Lenis : S4. Aucune 3D/WebGL : S5.
- Aucun SEO avancé (sitemap, robots, OpenGraph) : S3.
- Aucune réinitialisation de mot de passe : hors périmètre ADR-003 (intervention manuelle).
- Aucune inscription publique, aucun second rôle que `ADMIN`.
- Aucune tâche T1 à T5 relative aux permissions : réserve `E-01`, décision distincte requise.
- Aucune rotation de réserve, aucune modification de `AGENTS.md`, `state.json`, `docs/**`, `sprints/**`, `reference/**`, `audit_report/**` ou `debt_report/**`.
- Aucun déploiement, aucune création de `main`, aucune PR, aucune fusion.

---

## 5. Critères d'acceptation du sprint

| Réf. | Critère |
|---|---|
| S2-AC-01 | Les migrations Prisma sont reproductibles depuis un schéma vide ; la commande exacte, la date et le résultat sont consignés. |
| S2-AC-02 | Une requête vers `/admin/**` sans session est refusée ou redirigée ; `/admin/login` reste accessible. |
| S2-AC-03 | Connexion `credentials` (argon2id) et GitHub OAuth opérationnelles ; rôle `ADMIN` unique ; aucune inscription publique. |
| S2-AC-04 | Session JWT signée, durée 8 h, renouvellement glissant vérifiables. |
| S2-AC-05 | Verrouillage effectif : 5 échecs en 15 min → blocage 15 min, état partagé en base (`LoginAttempt`) ; test e2e consigné. |
| S2-AC-06 | `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build` et Playwright passent ; workflow CI vert sur `dev_sprint_02`. |
| S2-AC-07 | Aucun secret dans le dépôt public : `.env.example` sans valeurs, `.env` ignoré ; sortie `gitleaks` produite. **Preuve `declared_only` du BUILDER : elle ne lève pas `R-S0-02`.** |
| S2-AC-08 | Structure conforme à `architecture.md` §2/§3/§5 ; aucun fichier interdit modifié ; `retentionUntil` calculé sur `ContactMessage`. |

`NOT_CHECKED` ne vaut jamais `PASS`. Si l'accès à une base Neon de test n'est pas disponible, les critères dépendants d'une exécution réelle sont `NOT_CHECKED` avec motif explicite — aucune sortie n'est inventée.

---

## 6. Preuves attendues

- Schéma Prisma et liste des migrations avec leurs hashes.
- Sorties brutes de `lint`, `typecheck`, `test`, `build`, Playwright et `gitleaks` (version, date, nombre de findings).
- URL de l'exécution CI verte sur `dev_sprint_02`.
- Sortie du test de verrouillage et de la vérification de refus d'accès `/admin/**`.
- Liste des commits atomiques avec leurs hashes.
- Mentions explicites dans le rapport : « aucune réserve levée », « `R-S0-02` reste maintenue », « `E-01` reste maintenue », « aucune décision prise », « aucune fusion effectuée », « `audit_report/**` non modifié ».

---

## 7. Git

- `dev_sprint_02` créée depuis `origin/main` = `16f6d02` après `git fetch origin` ; aucun `checkout main` ni `switch main`.
- Un commit atomique par tâche `T2-x`. Push uniquement sur `dev_sprint_02`.
- Aucun merge, aucun `push --force`, aucun `reset --hard`, aucune PR : sa création relève d'une décision VALIDATOR ultérieure.

---

## 8. Transition

| Champ | Valeur |
|---|---|
| `transition_id` | `TR-2026-0006` |
| `mandate_version` | `S2-v0.1` |
| Destinataire | BUILDER |
| Autorisation | VALIDATOR — D-040, 2026-11-23T06:55:41Z |
| Reçu | `sprint_report/TR-2026-0006_receipt.md` |
| Précondition | PR #4 `MERGED`, `main` = `16f6d02`, protection active |
| État d'exécution | **Autorisée — non consommée** |

Les réserves `R-S0-02` et `E-01` restent maintenues ; `S0-AC-04` et `S1-AC-08` restent `NOT_CHECKED`. Aucune transition S3 ni audit S2 n'est autorisé à ce stade.

---

## 9. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-11-23 | Mandat initial S2 — Données + auth ; `TR-2026-0006` autorisée par D-040 ; mandat S1 archivé dans `sprints/S1_mandate.md` |
