# DemoWeb — Revue de préparation (readiness review)

| Champ | Valeur |
|---|---|
| Version | 0.2 |
| Date | 2026-11-22 |
| Statut | **VALIDÉ CP3 — écarts acceptés, 2026-11-22** |
| Auteur | ORCHESTRATOR |
| Portée | Conditions réunies avant la première transition |
| Ne contient pas | Résultats de sprint, preuves d'exécution |

**Références :** `C:\documentation\protocol\audit_policy.md` §2 et §5.1 · décision C19.

> Règle : un contrôle non réalisé est déclaré `NOT_CHECKED` et ne vaut jamais `PASS` (`GC-25`).

---

## 1. Objet

Vérifier que les conditions de la préparation opérationnelle sont réunies avant CP3 et la première transition. Cette revue est **documentaire** : elle ne prouve aucune permission.

---

## 2. Contrôles

| # | Contrôle | Statut | Constat |
|---|---|---|---|
| 1 | Cadrage validé (CP1) | **PASS** | Validé le 2026-11-22 |
| 2 | Conception validée (CP2) | **PASS** | Validé le 2026-11-22 |
| 3 | Profil choisi et verrouillé | **PASS** | `standard`, verrouillé dans `state.json` |
| 4 | `state.json` présent et conforme au schéma v2.0 | **PASS** | JSON valide, champs requis présents |
| 5 | Contrats d'agents écrits | **PASS** | `agents.md` v0.1 |
| 6 | Matrice de permissions déclarée | **PASS** | Déclarée dans `agents.md` §3 |
| 7 | Permissions effectivement appliquées | **NOT_CHECKED** | Aucune configuration `.opencode/agents/` ; T1 à T5 non exécutés |
| 8 | Protection de `main` | **NOT_CHECKED** | Dépôt non initialisé localement ; T5 non exécuté |
| 9 | Dépôt Git local et distant | **NOT_CHECKED** | `C:\test\DemoWeb` n'est pas encore un dépôt Git |
| 10 | CI (lint, tests, `gitleaks`) | **NOT_CHECKED** | Aucun workflow ; prévu en S0 |
| 11 | Mandat S0 | **PROPOSITION** | `current_sprint.md` v0.1 |
| 12 | Modèles de rapports | **NOT_CHECKED** | `templates/` non copié dans le projet |
| 13 | Secrets absents | **PASS** | Aucun fichier `.env` ; aucun secret dans les documents |
| 14 | Registre des risques | **PASS** | `docs/risks/risks.md` validé CP2 |
| 15 | Tests T1 à T5 | **NOT_CHECKED** | Non exécutés |

---

## 3. Écarts

| Réf. | Écart | Impact | Traitement proposé |
|---|---|---|---|
| E-01 | Permissions non configurées et non testées | Élevé | Mesures compensatoires `agents.md` §5 ; T1–T5 en S0 |
| E-02 | Dépôt Git non initialisé | Moyen | Initialisation en S0, avant tout code |
| E-03 | CI absente | Moyen | Workflow créé en S0, première exécution exigée |
| E-04 | Modèles de rapports absents | Faible | Copie depuis `C:\documentation\templates\` en S0 |
| E-05 | Protection de `main` inconnue | Élevé | PR obligatoire + revue humaine ; T5 en S0 |

---

## 4. Mesures compensatoires

1. Aucune transition consommée sans autorisation explicite du VALIDATOR.
2. Audit de `state.json` avant chaque transition.
3. Comparaison état/reçu à chaque consommation.
4. Revue humaine des diffs avant fusion.
5. Décision de fusion distincte de l'acceptation.
6. `gitleaks` avant chaque push.

---

## 5. Recommandation au VALIDATOR

**RECOMMANDATION.** Valider CP3 **avec écarts acceptés**, en reconnaissant explicitement que :
- les permissions sont `unknown` ;
- la protection de `main` est `unknown` ;
- T1 à T5 ne sont pas exécutés ;
- le dépôt et la CI seront créés en S0, sous mandat.

Une validation sans réserve reviendrait à certifier ce qui n'est pas prouvé.

---

## 6. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-11-22 | Version initiale — 15 contrôles, 5 écarts |
| 0.2 | 2026-11-22 | CP3 validé avec écarts acceptés — réserves E-01 à E-05 enregistrées |
