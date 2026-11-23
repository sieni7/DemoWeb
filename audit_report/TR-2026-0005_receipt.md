# Reçu de transition — TR-2026-0005

| Champ | Valeur |
|---|---|
| Version | 0.1 |
| Date | 2026-11-23 |
| Statut | **DÉPOSÉ — consommation de transition** |
| Nature | Preuve d'événement — ne remplace pas `state.json` |
| Référence | `templates/transition_receipt_template.md` §5.3 |

> Le reçu ne remplace jamais `state.json`. `state.json` reste la source de vérité de l'état courant. Toute divergence est bloquante jusqu'à réconciliation.

---

## 1. Contenu minimal normatif

| Champ | Obligatoire | Valeur |
|---|---|---|
| `transition_id` | oui | `TR-2026-0005` |
| `received_by` | oui | `AUDITOR` |
| `sprint_id` | oui | `S1` |
| `action` | oui | Audit indépendant du sprint S1 — Design system : vérification des critères S1-AC-01 à S1-AC-08 |
| `mandate_version` | oui | `S1-v0.1` |
| `received_at` | oui | `2026-11-23T05:45:00Z` |
| `checks_performed` | oui | Voir §3 — 9 contrôles, tous `PASS` sur la base de `state.json` lu sur `dev_sprint_00` le 2026-11-23 |
| `scope_acknowledged` | oui | Périmètre accepté : audit indépendant du sprint S1 — Design system sur la branche `dev_sprint_01`, critères S1-AC-01 à S1-AC-08 du mandat `S1-v0.1`, conformément à la transition `TR-2026-0005` autorisée par D-036. |
| `exclusions_acknowledged` | recommandé | Hors périmètre : aucune modification de code ni de configuration ; aucune correction de ce qui est audité ; aucune décision d'acceptation, de réserve, de rejet ou de fusion (réservée au VALIDATOR) ; aucune réactivation de `TR-2026-0003` (cancelled, D-031, INV-05) ; aucun réutilisation d'identifiant consommé (INV-12). |

---

## 2. Champs de correspondance avec la transition et l'état

| Champ | Origine | Valeur |
|---|---|---|
| `from_agent` | anatomie de la transition | `ORCHESTRATOR` |
| `to_agent` | anatomie de la transition | `AUDITOR` |
| `project_id` | `state.json` → `project.id` | `demoweb` |
| Statut de la transition au dépôt | `state.json` → `transition.status` | `authorized` |
| `created_at` | anatomie de la transition | `2026-11-23T05:30:00Z` |
| `authorized_at` | acte du VALIDATOR | `2026-11-23T05:33:42Z` |
| `authorized_by` | acte du VALIDATOR | `VALIDATOR` |
| `decision_id` | acte du VALIDATOR | `D-036` |
| `consumed_at` | consommation | `2026-11-23T05:45:00Z` (déclaré par l'AUDITOR ; `state.json` non modifié — mise à jour par l'ORCHESTRATOR) |
| `expires_at` | mandat / profil | non requis — `expires_at: null` dans `state.json` |
| `result_report` | achèvement | `audit_report/S1_audit.md` |
| `completed_at` | achèvement | non atteint au moment du dépôt |

---

## 3. Contrôles avant consommation

| # | Contrôle | Résultat | Preuve ou remarque |
|---|---|---|---|
| 1 | Identifiant présent dans l'historique | `PASS` | `state.json` (sur `dev_sprint_00`) → `transition.transition_id = "TR-2026-0005"` |
| 2 | Aucun reçu antérieur pour cet identifiant | `PASS` | Aucun fichier `audit_report/TR-2026-0005*` présent avant ce dépôt (`Test-Path` = False) |
| 3 | Statut `authorized` | `PASS` | `state.json` → `transition.status = "authorized"` |
| 4 | Transition non expirée | `PASS` | `state.json` → `transition.expires_at = null` |
| 5 | Destinataire = `current_agent` | `PASS` | `transition.to_agent = "AUDITOR"` ; `state.json` → `agent.current_agent = "AUDITOR"` ; session AUDITOR séparée (procédurale, GC-37) |
| 6 | Émetteur = agent précédent | `PASS` | `transition.from_agent = "ORCHESTRATOR"` |
| 7 | `mandate_version` = mandat courant | `PASS` | `transition.mandate_version = "S1-v0.1"` = `current_sprint.md` §en-tête |
| 8 | Action inscrite au mandat | `PASS` | `transition.action` = titre de l'action de TR-2026-0005 (`docs/governance/transitions/TR-2026-0005.md` sur `dev_sprint_00`) |
| 9 | Périmètre explicite | `PASS` | `current_sprint.md` §2 (T1-1 à T1-9) et §4 (critères S1-AC-01 à S1-AC-08) ; `TR-2026-0005.md` périmètre de l'audit |

`NOT_CHECKED` ne vaut jamais succès. Aucun contrôle en échec.

---

## 4. Preuves jointes

| # | Preuve | Statut | Référence |
|---|---|---|---|
| 1 | Lecture de `state.json` sur `dev_sprint_00` (transition `authorized`, destinataire `AUDITOR`, décision `D-036`) | `directly_verified` | `git show dev_sprint_00:state.json` le 2026-11-23 |
| 2 | Lecture du mandat `current_sprint.md` (`S1-v0.1`, T1-1 à T1-9, critères S1-AC-01 à S1-AC-08) | `directly_verified` | Lecture du fichier sur `dev_sprint_01` le 2026-11-23 |
| 3 | Absence de reçu antérieur pour TR-2026-0005 | `directly_verified` | `audit_report/TR-2026-0005_receipt.md` inexistant avant ce dépôt |

---

## 5. Destination du reçu

| Champ | Valeur |
|---|---|
| `destination` | `audit_report/` |
| Déposé par | `AUDITOR` |
| Date de dépôt | `2026-11-23T05:45:00Z` |

---

## 6. Limites du reçu

| Limite à rappeler | État |
|---|---|
| Permissions | `unknown` — aucune garantie sans test contradictoire (GC-36, E-01 maintenue) |
| Protection de `main` | levée par D-034 (protection activée et prouvée) |
| T1 à T5 | `NON EXÉCUTÉS` (E-01 maintenue) |
| `gitleaks` | non installé dans cet environnement — S0-AC-04 définitivement `NOT_CHECKED` (D-031) ; le scan S1 ne concerne que `S1-AC-08` et ne lève pas `R-S0-02` |

Un reçu ne se modifie pas après dépôt : une correction produit un nouvel événement, pas une réécriture. Un `transition_id` possède au plus un reçu (INV-04).
