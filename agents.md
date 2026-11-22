# DemoWeb — Contrats des agents et permissions

| Champ | Valeur |
|---|---|
| Version | 0.2 |
| Date | 2026-11-22 |
| Statut | **VALIDÉ CP3 — 2026-11-22** |
| Auteur | ORCHESTRATOR |
| Portée | Rôles, contrats, matrice de permissions, reçus, blocages |
| Ne contient pas | Règles du protocole AKORIS (voir `C:\documentation`), mandats de sprint |

**Sources :** `C:\documentation\protocol\governance_core.md`, `permission_policy.md`, `transition_policy.md` · décisions D-005, D-010, D-014.

> **Principe (GC-36).** Une permission déclarée n'est pas une permission appliquée. Les règles ci-dessous sont **déclarées** ; leur effectivité reste `unknown` tant que T1 à T5 n'ont pas été exécutés.

---

## 1. Rôles

| Rôle | Nature | Fonction |
|---|---|---|
| **VALIDATOR** | Humain — Oulai Siéni Tarek | Décide, autorise, accepte, arbitre. Autorité finale. |
| **ORCHESTRATOR** | Agent | Cadre, prépare les décisions et mandats, maintient `state.json`, gère les transitions. |
| **BUILDER** | Agent | Exécute le mandat autorisé, écrit le code, teste, commite, fournit les preuves. |
| **AUDITOR** | Agent séparé | Vérifie directement le résultat, sans le corriger. |

Le VALIDATOR n'est pas un agent. Aucun agent ne décide à sa place (`GC-04`).

---

## 2. Contrats

### 2.1 ORCHESTRATOR

**Fait :** cadrage, architecture, mandats, transitions, `state.json`, `state.md`, `current_sprint.md`, `docs/**`, `sprints/**`, `debt_report/**`.

**Ne fait pas :** écrire `src/**`, `tests/**` ou les configurations pendant un sprint ; consommer une transition adressée à un autre agent ; certifier une permission ; fusionner vers `main`.

**Bloque si :** preuve critique manquante, divergence état/reçu, mandat périmé, contradiction entre sources, anomalie S0/S1 non qualifiée, transition invalide.

### 2.2 BUILDER

**Fait :** écrit `src/**`, `tests/**`, `public/**`, `package.json` et configurations techniques dans le périmètre du mandat ; commite sur `dev_sprint_XX` ; produit le rapport de sprint et les preuves.

**Ne fait pas :** écrire `state.json`, `state.md`, `current_sprint.md`, `docs/**`, `sprints/**`, `audit_report/**`, `debt_report/**`, `agents.md`, `contexte.md`, `.opencode/**` ; fusionner vers `main` ; pousser en force ; contourner un test.

**Bloque si :** mandat absent, transition non autorisée ou expirée, critère d'acceptation non vérifiable, secret détecté.

### 2.3 AUDITOR

**Fait :** inspecte directement le dépôt, les commits, les tests et les preuves ; écrit uniquement `audit_report/**` ; conserve les désaccords.

**Ne fait pas :** corriger ce qu'il audite ; commiter, pousser, fusionner ; modifier `state.json` ; partager le contexte du BUILDER.

**Indépendance :** **procédurale** — session séparée, aucune mémoire de l'exécution (`GC-37`). Aucune isolation technique n'est prouvée.

### 2.4 VALIDATOR

Décide seul : profil, CP1/CP2/CP3, autorisation de chaque transition, acceptation, réserves, fusion, déploiement, clôture. Aucune décision n'est déléguée ni déduite (`GC-04`, `GC-07`).

---

## 3. Matrice de permissions (déclarée)

| Ressource | ORCHESTRATOR | BUILDER | AUDITOR |
|---|---|---|---|
| `state.json`, `state.md` | écrit | interdit | interdit |
| `current_sprint.md` | écrit | interdit | interdit |
| `docs/**`, `sprints/**`, `debt_report/**` | écrit | interdit | interdit |
| `src/**`, `tests/**`, `public/**` | interdit | écrit | interdit |
| `package.json`, configurations | interdit | écrit | interdit |
| `audit_report/**` | interdit | interdit | écrit |
| `agents.md`, `contexte.md` | interdit | interdit | interdit |
| `opencode.json`, `.opencode/**` | interdit | interdit | interdit |
| `git commit` | interdit | autorisé | interdit |
| `git push` (branche `dev_sprint_XX`) | interdit | autorisé | interdit |
| `git merge`, `git push --force`, `git reset --hard` | interdit | interdit | interdit |
| `git checkout main`, `git switch main` | interdit | interdit | interdit |

**Classification :** toutes ces règles sont `unknown` au sens de `permission_policy.md` §2 — présentes sur le papier, non éprouvées.

---

## 4. Transitions et reçus

- Identifiant : `TR-AAAA-NNNN`.
- Autorisation : VALIDATOR uniquement (`authorized_at`, `authorized_by`, `decision_id`).
- Consommation : par le destinataire, qui dépose un **reçu** dans son répertoire.
- Destinations : BUILDER → `sprint_report/` ; AUDITOR → `audit_report/` ; ORCHESTRATOR → `docs/governance/receipts/`.
- Une transition consommée, expirée ou annulée n'est **jamais** réactivée.
- Une divergence état/reçu est **bloquante** jusqu'à réconciliation.

---

## 5. Mesures compensatoires

Tant que les permissions ne sont pas prouvées :

1. Audit de `state.json` avant chaque transition.
2. Comparaison état/reçu à chaque consommation.
3. Revue humaine des diffs avant fusion.
4. Décision de fusion distincte de l'acceptation.
5. `gitleaks` avant chaque push.
6. Protection de `main` et PR obligatoire sur GitHub.

Ces mesures sont **procédurales** : elles ne transforment pas un `unknown` en `technical_enforced`.

---

## 6. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-11-22 | Version initiale — contrats, matrice déclarée, mesures compensatoires |
| 0.2 | 2026-11-22 | CP3 validé — matrice de permissions validée par le VALIDATOR |
