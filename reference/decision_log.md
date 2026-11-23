# DemoWeb — Registre des décisions

| Champ | Valeur |
|---|---|
| Version | 0.23 |
| Date | 2026-11-23 |
| Statut | **CP1, CP2, CP3 validés · main protégée · S0 fusionnée · S1 fusionnée (PR #2, merge `b2cbc2e`) · synchronisation gouvernance autorisée (B-02), exécution en attente — 2026-11-23** |
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
| D-029 | 2026-11-22 | Reprise de l'audit complémentaire | `TR-2026-0003` reprise **sous le même identifiant** (non terminale, aucun reçu, INV-05/INV-12 respectés) ; `gitleaks` v8.30.1 installé ; consommation par reçu + scan + addendum v0.2 ; aucune annulation ni nouvelle transition | VALIDATOR | **Révoquée par D-031** |
| D-030 | 2026-11-22 | Clarifications S0-FUP | `INC-2026-0004` : DIV-01 = défaut de prompt / convention `last_decision` (pas une divergence système) ; DIV-02 = transition non consommée sans reçu (pas une divergence état/reçu) ; décalage de snapshot documenté ; prompt AUDITOR corrigé ; livrable AUDITOR non modifié | VALIDATOR | **Validée** |
| D-031 | 2026-11-22 | Révocation de la reprise d'audit | **D-029 révoquée** : `TR-2026-0003` close sans consommation (`cancelled`) conformément à `state_model.md` §4.2 ; aucun reçu déposé, INV-04 respecté ; S0-AC-04 définitivement `NOT_CHECKED` ; R-S0-02 maintenue ; dépôt de l'addendum v0.1 autorisé à titre de trace historique (D-027 / CHG-2026-0002) | VALIDATOR | **Validée** |
| D-032 | 2026-11-22 | Fusion S0 vers `main` | **`GO` pour la fusion** de `dev_sprint_00` dans `main` (PR #1) — décision distincte de D-024, prise en application de D-005 / GC-07 / `state_model.md` §3.2. **Dérogation explicite** : fusion autorisée alors que R-S0-02 reste maintenue et S0-AC-04 définitivement `NOT_CHECKED` ; le secret scan de la CI est une preuve `declared_only` de l'intégration continue, pas une reproduction indépendante. Exécution réservée au VALIDATOR | VALIDATOR | **Validée — exécutée le 2026-11-22T12:16:09Z : PR #1 `MERGED`, merge commit `2a2272f405a98c47d77842d7b99992ba28578e26` ; `main` = `2a2272f4`** |
| D-033 | 2026-11-22 | Autorisation du sprint S1 | **`GO` pour S1 — Design system** ; mandat `S1-v0.1` approuvé ; transition **`TR-2026-0004`** autorisée vers le BUILDER sur `dev_sprint_01` ; reçu `sprint_report/TR-2026-0004_receipt.md`. Effet subordonné à l'exécution de D-032 : le prompt BUILDER bloque si la PR #1 n'est pas `MERGED` ou si `dev_sprint_01` ne dérive pas de `main`. R-S0-02 reste maintenue ; la dérogation de D-032 ne lève pas la réserve | VALIDATOR | **Validée** |
| D-034 | 2026-11-22 | Protection de `main` avant fusion | **`GO` pour activer la protection de `main` puis fusionner S0** — constat confirmé : `gh api repos/sieni7/DemoWeb/branches/main/protection` renvoie 404 « Branch not protected », donc E-05 n'est plus `unknown` mais **absence confirmée**. Protection : PR obligatoire, status checks stricts sur `Lint, typecheck, tests, build and secret scan`, `enforce_admins`, interdiction des force push et suppressions | VALIDATOR | **Validée — exécutée : protection active et prouvée par `gh api` (`strict: true`, `enforce_admins.enabled: true`, `allow_force_pushes.enabled: false`, `allow_deletions.enabled: false`) avant fusion** |
| D-035 | 2026-11-22 | Livrables hors transition | **Dépôt comme traces historiques** de `audit_report/S0_audit_rapport_signe.md` et `sprint_report/BUILDER_snapshot_refresh_report.md`, sans modification de contenu ; qualification `INC-2026-0005` : livrables produits hors transition, snapshots périmés, aucune divergence état/reçu, INV-04/INV-05 respectés ; aucune réserve levée, aucune transition consommée | VALIDATOR | **Validée** |
| D-036 | 2026-11-23 | Audit du sprint S1 | **`GO` pour l'audit S1** — décision distincte de l'acceptation et de la fusion. `TR-2026-0005` autorisée vers AUDITOR, mandat `S1-v0.1`, branche auditée `dev_sprint_01`, prompt `docs/governance/prompts/AUDITOR_S1_prompt.md` activé. État `S1/builder_completed` → `S1/auditing`, `agent.current_agent=AUDITOR`. Aucune réactivation de `TR-2026-0003` (`cancelled`) ni de `TR-2026-0004` (`completed`) ; INV-02/INV-03/INV-05/INV-12 respectés. `R-S0-02`/`E-01` maintenues, `S0-AC-04` définitivement `NOT_CHECKED`. Le `gitleaks` `declared_only` de S1 ne lève pas `R-S0-02` | VALIDATOR | **Validée — exécutée le 2026-11-23T05:33:42Z** |
| D-037 | 2026-11-23 | Acceptation du sprint S1 | **`GO` pour l'acceptation de S1** — décision distincte de D-036 (audit) et de la fusion (non décidée). Fondement : `TR-2026-0005/completed`, `audit_report/S1_audit.md` : `S1-AC-01` à `S1-AC-07` `PASS`, `S1-AC-08` `NOT_CHECKED` (`gitleaks` absent, preuve `declared_only`). **Aucune réserve nouvelle** ; `R-S0-02` et `E-01` restent maintenues en tant que réserves S0 antérieures, `S0-AC-04` définitivement `NOT_CHECKED`. État `S1/audit_completed` → `S1/accepted` (INV-07 respecté) | VALIDATOR | **Validée — exécutée le 2026-11-23T06:00:41Z** |
| D-038 | 2026-11-23 | Fusion S1 vers `main` | **`GO` pour la fusion** de S1 vers `main`, décision distincte de D-037 (acceptation) et de D-036 (audit) — GC-07 / `state_model.md` §3.2. **Dérogation explicite** : fusion autorisée alors que `S1-AC-08` reste `NOT_CHECKED` (preuve `declared_only` du BUILDER, `gitleaks` absent chez l'AUDITOR) et que `R-S0-02` / `E-01` sont maintenues ; `S0-AC-04` définitivement `NOT_CHECKED`. Exécution **réservée au VALIDATOR** : aucun agent ne peut `git merge`, ni `checkout main` / `switch main`. Prérequis d'exécution : PR `dev_sprint_01` → `main`, checks obligatoires verts, protection de `main` maintenue. Aucune décision S2 | VALIDATOR | **Validée — exécutée le 2026-11-23T06:08:46Z : PR #2 `MERGED`, merge commit `b2cbc2e318593d4eb846363c248ecba8a2df8611`, `main` = `b2cbc2e` ; checks verts, `CLEAN`. Périmètre confirmé le 2026-11-23T06:18:36Z : couvre aussi la PR de synchronisation `dev_sprint_00` → `main` (B-02), sans décision distincte** |

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
| ~~Fusion S0 vers `main`~~ | **Exécutée le 2026-11-22T12:16:09Z** — protection activée et prouvée (D-034), PR #1 `MERGED`, merge commit `2a2272f4` ; dérogation explicite à R-S0-02 maintenue |
| ~~Mission complémentaire~~ | ~~Reprise par D-029~~ — **révoquée par D-031** : `TR-2026-0003` close sans consommation ; addendum v0.1 déposé comme trace historique |
| Si nouvelle preuve S0-AC-04 requise | Nouvelle transition AUDITOR à autoriser par le VALIDATOR — aucun identifiant consommé réutilisé (INV-12) |
| ~~Sprint suivant~~ | ~~S1 non autorisé~~ — **GO par D-033**, mandat `S1-v0.1`, transition `TR-2026-0004` vers le BUILDER ; effet subordonné à la fusion S0 |
| ~~Exécution S1~~ | **Livrée le 2026-11-22T14:19:08Z** — `TR-2026-0004` consommée puis complétée ; `sprint=S1/builder_completed` ; aucune acceptation décidée |
| ~~Audit S1~~ | **D-036 (`GO`) rendue le 2026-11-23T05:33:42Z** ; `TR-2026-0005` consommée le 2026-11-23T05:45:00Z et complétée le 2026-11-23T05:50:20Z ; reçu `audit_report/TR-2026-0005_receipt.md` et rapport `audit_report/S1_audit.md` livrés. Recommandation AUDITOR : `GO_WITH_RESERVES` — **avis, non décision** |
| ~~Acceptation S1~~ | **D-037 (`GO`) rendue le 2026-11-23T06:00:41Z** — `S1/accepted`, aucune réserve nouvelle, `R-S0-02` et `E-01` maintenues |
| ~~Fusion S1 vers `main`~~ | **Exécutée le 2026-11-23T06:08:46Z** — D-038 (`GO`), PR #2 `MERGED`, merge commit `b2cbc2e318593d4eb846363c248ecba8a2df8611`, `main` = `b2cbc2e` ; dérogation explicite maintenue (`S1-AC-08` `NOT_CHECKED`, `R-S0-02` et `E-01` maintenues) |
| ~~B-02 — décision de synchronisation~~ | **Confirmée par le VALIDATOR le 2026-11-23T06:18:36Z au titre de D-038** : PR `dev_sprint_00` → `main` à créer puis fusionner par le VALIDATOR ; aucun conflit détecté (`git merge-tree`), 12 fichiers de gouvernance/audit. Exécution en attente |
| À court terme | Exécution de la synchronisation puis clôture de B-02 et consignation du merge commit. Aucune transition S2 sans décision explicite. Si une preuve indépendante de `S1-AC-08` est exigée : nouvelle transition AUDITOR (`TR-2026-0005` est terminale) |
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
| 0.13 | 2026-11-22 | Révocation de D-031 — `TR-2026-0003` close sans consommation, S0-AC-04 définitivement NOT_CHECKED, dépôt addendum autorisé |
| 0.14 | 2026-11-22 | D-032 (fusion S0 décidée, dérogation R-S0-02) et D-033 (GO S1, mandat `S1-v0.1`, transition `TR-2026-0004`) |
| 0.15 | 2026-11-22 | D-034 — activation de la protection de `main` requise avant la fusion ; absence de protection confirmée par 404 |
| 0.16 | 2026-11-22 | Exécution D-034 (protection active et prouvée) puis D-032 (PR #1 `MERGED`, merge `2a2272f4`) |
| 0.17 | 2026-11-22 | D-035 — dépôt des rapports signés comme traces historiques ; `INC-2026-0005` qualifié |
| 0.18 | 2026-11-23 | D-036 — `GO` pour l'audit S1 ; `TR-2026-0005` autorisée vers AUDITOR ; `S1/auditing` |
| 0.19 | 2026-11-23 | Consignation de la consommation et de la livraison de l'audit S1 ; `S1/audit_completed` ; recommandation `GO_WITH_RESERVES` enregistrée comme avis, aucune décision d'acceptation prise |
| 0.20 | 2026-11-23 | D-037 — `GO` pour l'acceptation de S1 ; `S1/accepted`, aucune réserve nouvelle |
| 0.21 | 2026-11-23 | D-038 — `GO` pour la fusion S1 vers `main` ; exécution réservée au VALIDATOR |
| 0.22 | 2026-11-23 | Exécution D-038 : PR #2 `MERGED`, merge `b2cbc2e`, `S1/merged` ; ouverture de B-02 (synchronisation gouvernance sur `main`) |
| 0.23 | 2026-11-23 | Confirmation VALIDATOR : D-038 couvre la PR de synchronisation `dev_sprint_00` → `main` ; B-02 qualifié, exécution en attente |
