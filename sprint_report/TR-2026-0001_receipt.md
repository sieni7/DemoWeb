# Reçu de transition — TR-2026-0001

| Champ | Valeur |
|---|---|
| Version | 0.1 |
| Date | 2026-11-22 |
| Statut | **DÉPOSÉ — consommation de transition** |
| Nature | Preuve d'événement — ne remplace pas `state.json` |
| Référence | [transition_policy.md](../../documentation/protocol/transition_policy.md) §5.3 (modèle `transition_receipt_template.md`) |

> Le reçu ne remplace jamais `state.json`. `state.json` reste la source de vérité de l'état courant. Toute divergence est bloquante jusqu'à réconciliation.

---

## 1. Contenu minimal normatif

| Champ | Obligatoire | Valeur |
|---|---|---|
| `transition_id` | oui | `TR-2026-0001` |
| `received_by` | oui | `BUILDER` |
| `sprint_id` | oui | `S0` |
| `action` | oui | Exécuter le mandat S0 — Fondations |
| `mandate_version` | oui | `S0-v0.1` |
| `received_at` | oui | `2026-11-22T09:32:00Z` |
| `checks_performed` | oui | Voir §3 — 9 contrôles, tous `PASS` sur la base de `state.json` lu le 2026-11-22 |
| `scope_acknowledged` | oui | Périmètre accepté : tâches T0-1 à T0-9 du mandat S0 (dépôt, Next.js, shadcn/ui, qualité, CI, fichiers de base, Prisma sans modèle métier, modèles de rapports, CI verte). |
| `exclusions_acknowledged` | recommandé | Hors périmètre : aucune page publique ni composant de vitrine, aucun modèle métier Prisma, aucune migration, aucune authentification, aucun effet visuel ou asset 3D, aucun déploiement en production, aucune modification de `state.json`, `agents.md`, `contexte.md`, `docs/**`, `sprints/**`. |

---

## 2. Champs de correspondance avec la transition et l'état

| Champ | Origine | Valeur |
|---|---|---|
| `from_agent` | anatomie de la transition | `ORCHESTRATOR` |
| `to_agent` | anatomie de la transition | `BUILDER` |
| `project_id` | `state.json` → `project.id` | `demoweb` |
| Statut de la transition au dépôt | `state.json` → `transition.status` | `authorized` |
| `created_at` | anatomie de la transition | `2026-11-22T16:00:00Z` |
| `authorized_at` | acte du VALIDATOR | `2026-11-22T16:30:00Z` |
| `authorized_by` | acte du VALIDATOR | `VALIDATOR` |
| `decision_id` | acte du VALIDATOR | `D-020` |
| `consumed_at` | consommation | `2026-11-22T09:32:00Z` (déclaré par le BUILDER ; `state.json` non modifié — mise à jour par l'ORCHESTRATOR) |
| `expires_at` | mandat / profil | non requis — `expires_at: null` dans `state.json` |
| `result_report` | achèvement | `sprint_report/S0_report.md` |
| `completed_at` | achèvement | non atteint au moment du dépôt |

---

## 3. Contrôles avant consommation

| # | Contrôle | Résultat | Preuve ou remarque |
|---|---|---|---|
| 1 | Identifiant présent dans l'historique | `PASS` | `state.json` → `transition.transition_id = "TR-2026-0001"` |
| 2 | Aucun reçu antérieur pour cet identifiant | `PASS` | Aucun fichier `sprint_report/TR-2026-0001*` présent avant ce dépôt |
| 3 | Statut `authorized` | `PASS` | `state.json` → `transition.status = "authorized"` |
| 4 | Transition non expirée | `PASS` | `state.json` → `transition.expires_at = null` |
| 5 | Destinataire = `current_agent` | `PASS` | `transition.to_agent = "BUILDER"` ; session BUILDER |
| 6 | Émetteur = agent précédent | `PASS` | `transition.from_agent = "ORCHESTRATOR"` |
| 7 | `mandate_version` = mandat courant | `PASS` | `transition.mandate_version = "S0-v0.1"` = `current_sprint.md` §en-tête |
| 8 | Action inscrite au mandat | `PASS` | `transition.action` = titre du mandat S0 (`current_sprint.md` §1) |
| 9 | Périmètre explicite | `PASS` | `current_sprint.md` §2 (T0-1 à T0-9) et §3 (exclusions) |

`NOT_CHECKED` ne vaut jamais succès. Aucun contrôle en échec.

---

## 4. Preuves jointes

| # | Preuve | Statut | Référence |
|---|---|---|---|
| 1 | Lecture de `state.json` (transition `authorized`, destinataire `BUILDER`) | `directly_verified` | Lecture du fichier le 2026-11-22 |
| 2 | Lecture du mandat `current_sprint.md` (`S0-v0.1`, T0-1 à T0-9) | `directly_verified` | Lecture du fichier le 2026-11-22 |
| 3 | Absence de reçu antérieur | `directly_verified` | `sprint_report/` inexistant avant ce dépôt |

---

## 5. Destination du reçu

| Champ | Valeur |
|---|---|
| `destination` | `sprint_report/` |
| Déposé par | `BUILDER` |
| Date de dépôt | `2026-11-22T09:32:00Z` |

---

## 6. Limites du reçu

| Limite à rappeler | État |
|---|---|
| Permissions | `unknown` — aucune garantie sans test contradictoire |
| Protection de `main` | `unknown` — T5 préparé, non exécuté |
| T1 à T5 | `NON EXÉCUTÉS` tant qu'aucune preuve d'exécution n'est fournie |

Un reçu ne se modifie pas après dépôt : une correction produit un nouvel événement, pas une réécriture. Un `transition_id` possède au plus un reçu.
