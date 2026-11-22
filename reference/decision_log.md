# DemoWeb — Registre des décisions

| Champ | Valeur |
|---|---|
| Version | 0.12 |
| Date | 2026-11-22 |
| Statut | **CP1, CP2, CP3 validés · S0 acceptée avec réserves requalifiées · TR-2026-0003 en reprise · main/PR exécutées, fusion reportée — 2026-11-22** |
| Auteur | ORCHESTRATOR |
| Portée | Décisions du VALIDATOR, identifiées et tracées |
| Ne contient pas | Décisions de sprint (GO, GO_WITH_RESERVES, NO_GO, HOLD, CANCELLED) — voir `state.json` |

**Règle :** une décision du VALIDATOR n'est jamais déduite d'une autre (`GC-04`, `GC-05`, `GC-07`). Ce registre conserve la trace de chaque décision ; il ne remplace ni `state.json` ni les décisions de sprint.

---

## 1. Décisions de cadrage — CP1

| Réf. | Date | Objet | Décision | Auteur | Statut |
|---|---|---|---|---|---|
| D-001 | 2026-11-22 | Profil de gouvernance | **Standard**, verrouillé avant CP1 | VALIDATOR | **Validée CP1** |
| D-002 | 2026-11-22 | Stack technique | Next.js 15 + TypeScript + Tailwind v4 + GSAP + Three.js + PostgreSQL/Neon + Prisma + Auth.js + Vercel Blob + Resend + Turnstile + Vercel | VALIDATOR (sur recommandation ORCHESTRATOR) | Validée CP1 |
| D-003 | 2026-11-22 | Périmètre MVP | 5 fonctionnalités retenues ; exclusions validées telles quelles | VALIDATOR | Validée CP1 |
| D-004 | 2026-11-22 | Roadmap | 8 sprints, S0 à S7 | VALIDATOR | Validée CP1 |
| D-005 | 2026-11-22 | Fusion vers `main` | Deux décisions distinctes : acceptation (GO) puis décision de fusion | VALIDATOR | Validée CP1 |
| D-006 | 2026-11-22 | Git et CI | GitHub Actions (lint, tests, `gitleaks`), protection `main`, PR obligatoire, branches `dev_sprint_XX`, commits atomiques | VALIDATOR | Validée CP1 |
| D-007 | 2026-11-22 | RGPD | Minimum légal : politique, consentement, conservation 12 mois, suppression | VALIDATOR | Validée CP1 |
| D-008 | 2026-11-22 | Preuves | Tests unitaires, tests e2e, scan de secrets, Lighthouse manuel documenté | VALIDATOR | Validée CP1 |
| D-009 | 2026-11-22 | Conventions | Code EN · docs et UI FR · licence MIT | VALIDATOR | Validée CP1 |
| D-010 | 2026-11-22 | Rôles | VALIDATOR humain ; agents pour ORCHESTRATOR, BUILDER, AUDITOR | VALIDATOR | Validée CP1 |
| D-011 | 2026-11-22 | Validation CP1 | Cadrage validé sans réserve ; projet passé en `designing` | VALIDATOR | **Validée** |

---

## 2. Décisions de conception — CP2

| Réf. | Date | Objet | Décision | Auteur | Statut |
|---|---|---|---|---|---|
| D-012 | 2026-11-22 | Direction artistique | **Tech futuriste / dark** : fond sombre, néons, shaders, 3D marquée | VALIDATOR | **Validée CP2** |
| D-013 | 2026-11-22 | Modèle de contenu | **Riche** : titre, description, image, lien, tags, catégorie, année, galerie | VALIDATOR | **Validée CP2** |
| D-014 | 2026-11-22 | Authentification | Auth.js, credentials argon2 + GitHub OAuth, verrouillage 5 échecs / 15 min | VALIDATOR | **Validée CP2** |
| D-015 | 2026-11-22 | Rendu | SSG + ISR pour la vitrine, SSR pour l'admin, revalidation à la demande | VALIDATOR | **Validée CP2** |
| D-016 | 2026-11-22 | Composants UI | **shadcn/ui** (Radix) | VALIDATOR | **Validée CP2** |
| D-017 | 2026-11-22 | Validation CP2 et seuils | Architecture, ADR, règles métier et risques validés ; tous les seuils `RECOMMANDATION` acceptés | VALIDATOR | **Validée** |

---

## 3. Décisions de préparation et d'exécution — CP3 / S0

| Réf. | Date | Objet | Décision | Auteur | Statut |
|---|---|---|---|---|---|
| D-018 | 2026-11-22 | Validation CP3 | Préparation validée **avec écarts acceptés** (E-01 à E-05) ; permissions et protection de `main` restent `unknown` | VALIDATOR | **Validée** |
| D-019 | 2026-11-22 | Matrice de permissions | Matrice déclarée dans `agents.md` §3 validée | VALIDATOR | **Validée** |
| D-020 | 2026-11-22 | Autorisation de transition | `TR-2026-0001` autorisée — **GO** pour l'exécution de S0 par le BUILDER | VALIDATOR | **Validée** |
| D-021 | 2026-11-22 | Autorisation d'audit | `TR-2026-0002` autorisée — **GO** pour l'audit indépendant de S0. Modalité : prompt fourni au VALIDATOR pour exécution en session séparée, sans lancement de sous-agent depuis la session courante | VALIDATOR | **Validée** |
| D-022 | 2026-11-22 | Arbitrage 1 — divergence état/reçu | Réconciliation de `TR-2026-0002` **par correction de l'état**, sans invalider le reçu ; application de `state_model.md` §7.2 ; gel opérationnel jusqu'à la décision de reprise | VALIDATOR | **Validée** |
| D-023 | 2026-11-22 | Arbitrage 2 — violations de permission | Qualification S2 de `PV-2026-0001` / `AN-08` ; **régularisation rétroactive** des 4 commits de gouvernance ; approbation de `CHG-2026-0001` et de `AGENTS.md` v0.3 | VALIDATOR | **Validée** |
| D-024 | 2026-11-22 | Acceptation du sprint S0 | **`GO_WITH_RESERVES`** — sprint `accepted_with_reserves` ; réserves R-S0-01 à R-S0-04 ; levée du gel `INC-2026-0002` ; la fusion et la création de `main` restent une décision distincte | VALIDATOR | **Validée** |
| D-025 | 2026-11-22 | Autorisation d'audit complémentaire | `TR-2026-0003` autorisée — **GO** pour l'audit complémentaire S0 dans une session AUDITOR séparée ; condition d'environnement : `gh` authentifié et `gitleaks` installé | VALIDATOR | **Validée** |
| D-026 | 2026-11-22 | Blocage B-01 — préparation de la fusion | Création de `main` depuis `4763b44` et ouverture de la PR `dev_sprint_00` → `main` décidées ; **exécution réservée au VALIDATOR** (les agents ne peuvent ni checkout `main`, ni merger, ni pusher hors `dev_sprint_XX`) ; **fusion reportée** tant que R-S0-01 et R-S0-02 sont `NOT_CHECKED` | VALIDATOR | **Validée** |
| D-027 | 2026-11-22 | Dépôt des livrables AUDITOR | Droit de committer/pousser `audit_report/**` confié à l'ORCHESTRATOR à titre de **dépositaire**, sans modification de contenu ; approbation de `CHG-2026-0002` et `agents.md` v0.4 ; application différée à la fin de `TR-2026-0003` | VALIDATOR | **Validée — exécution D-026 confirmée : main créée depuis 4763b44 et poussée, PR #1 ouverte (2026-11-22)** |
| D-028 | 2026-11-22 | Réserves S0 après addendum | Paquet AUDITOR retenu : **R-S0-01 levée** (CI reproduite) ; **R-S0-02 maintenue** (gitleaks absent au moment de l'audit) ; **R-S0-03 partiellement levée** — AN-08 levée (S2 régularisée, 4 commits vérifiés) mais E-01/E-05 maintenues ; **R-S0-04 maintenue** (fusion non décidée) | VALIDATOR | **Validée** |
| D-029 | 2026-11-22 | Reprise de l'audit complémentaire | `TR-2026-0003` reprise **sous le même identifiant** (non terminale, aucun reçu, INV-05/INV-12 respectés) ; `gitleaks` v8.30.1 installé ; consommation par reçu + scan + addendum v0.2 ; aucune annulation ni nouvelle transition | VALIDATOR | **Validée** |
| D-030 | 2026-11-22 | Clarifications S0-FUP | `INC-2026-0004` : DIV-01 = défaut de prompt / convention `last_decision` (pas une divergence système) ; DIV-02 = transition non consommée sans reçu (pas une divergence état/reçu) ; décalage de snapshot documenté ; prompt AUDITOR corrigé ; livrable AUDITOR non modifié | VALIDATOR | **Validée** |

---

## 4. Décisions écartées ou non retenues

| Réf. | Objet | Décision | Motif |
|---|---|---|---|
| N-001 | Sécurité comme NFR dédiée | Non retenue | Maintenue via AC-04 et AC-06 |
| N-002 | Formulaire de contact factice | Non retenue | Le VALIDATOR veut un envoi réel |
| N-003 | Lighthouse CI | Non retenu | Mesure manuelle documentée préférée |
| N-004 | Revue cross-browser manuelle | Non retenue | Playwright multi-navigateurs retenu comme preuve |
| N-005 | Fusion sur GO unique | Non retenue | Contraire à GC-07 et au profil Standard |

---

## 5. Décisions attendues

| Échéance | Décision |
|---|---|
| ~~Immédiate~~ | ~~Décision de reprise après `INC-2026-0002`~~ — levée par D-024 |
| ~~Fin S0~~ | ~~Acceptation du résultat~~ — `GO_WITH_RESERVES` par D-024 |
| ~~Création `main` + PR~~ | ~~Décision D-026~~ — **exécutée par le VALIDATOR le 2026-11-22 : `main` créée depuis `4763b44`, poussée, PR #1 ouverte** |
| Après audit complémentaire | **Décision de fusion vers `main` — distincte, non prise (R-S0-04)** — PR #1 en attente |
| ~~Mission complémentaire~~ | Vérification AUDITOR : `TR-2026-0003` reprise par D-029, reçu + scan gitleaks + addendum v0.2 attendus |
| Chaque sprint | Acceptation puis fusion, en deux décisions séparées |

---

## 6. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-11-22 | Version initiale — 10 décisions de cadrage, 5 décisions écartées |
| 0.2 | 2026-11-22 | CP1 validé — D-001 à D-010 confirmées, D-011 ajoutée |
| 0.3 | 2026-11-22 | CP2 — D-012 à D-016 ajoutées (conception) |
| 0.4 | 2026-11-22 | CP2 validé — D-012 à D-016 confirmées, D-017 ajoutée |
| 0.5 | 2026-11-22 | CP3 validé avec écarts — D-018 et D-019 ajoutées |
| 0.6 | 2026-11-22 | Transition TR-2026-0001 autorisée — D-020 ajoutée |
| 0.7 | 2026-11-22 | S0 livré ; audit TR-2026-0002 autorisé — D-021 ajoutée |
| 0.8 | 2026-11-22 | Arbitrage état/reçu et arbitrage permissions — D-022 et D-023 ajoutées |
| 0.9 | 2026-11-22 | Acceptation S0 avec réserves — D-024 ajoutée |
| 0.10 | 2026-11-22 | Audit complémentaire S0 autorisé — D-025 ajoutée |
| 0.11 | 2026-11-22 | Préparation main/PR et dépôt audit_report — D-026 et D-027 ajoutées |
| 0.12 | 2026-11-22 | Réserves S0, reprise TR-2026-0003 et clarifications S0-FUP — D-028, D-029 et D-030 ajoutées ; exécution D-026 consignée |
