# DemoWeb — Réserves acceptées au CP3

| Champ | Valeur |
|---|---|
| Version | 0.1 |
| Date | 2026-11-22 |
| Statut | **VALIDÉ CP3 — écarts acceptés** |
| Auteur | ORCHESTRATOR |
| Portée | Écarts acceptés lors de la validation CP3 |
| Ne contient pas | Dette technique découverte en sprint |

**Décision :** CP3 validé avec écarts acceptés par le VALIDATOR le 2026-11-22 (D-018).

> Une réserve ne masque jamais une anomalie S0/S1 (`DP` §7). Ces écarts sont organisationnels et techniques, connus et tracés.

---

## 1. Réserves

| Réf. | Objet | Impact | Mesure compensatoire | Échéance | Statut |
|---|---|---|---|---|---|
| E-01 | Permissions non configurées et non testées | Élevé | Mesures `agents.md` §5 ; T1–T5 en S0 | S0 | Acceptée |
| E-02 | Dépôt Git non initialisé | Moyen | Initialisation avant tout code | S0 | Acceptée |
| E-03 | CI absente | Moyen | Workflow créé et exécuté en S0 | S0 | Acceptée |
| E-04 | Modèles de rapports absents | Faible | Copie depuis `C:\documentation\templates\` | S0 | Acceptée |
| E-05 | Protection de `main` inconnue | Élevé | PR obligatoire, revue humaine, T5 en S0 | S0 | Acceptée |

---

## 2. Condition de levée

Chaque réserve est levée lorsque sa mesure est produite et vérifiée :

- E-01 : configurations `.opencode/agents/` créées et T1–T5 exécutés avec traces.
- E-02 : dépôt initialisé, distant configuré, branche `dev_sprint_00` créée.
- E-03 : workflow CI vert sur `dev_sprint_00`.
- E-04 : `templates/` présent avec les sept modèles.
- E-05 : test T5 exécuté et protection de `main` constatée.

---

## 3. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-11-22 | Version initiale — 5 réserves acceptées au CP3 |
