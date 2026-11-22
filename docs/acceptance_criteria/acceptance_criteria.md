# DemoWeb — Critères d'acceptation

| Champ | Valeur |
|---|---|
| Version | 0.2 |
| Date | 2026-11-22 |
| Statut | **VALIDÉ CP1 — 2026-11-22** |
| Auteur | ORCHESTRATOR |
| Portée | Critères vérifiables du MVP et méthode de preuve |
| Ne contient pas | Résultats de test — tous les statuts sont `NOT_CHECKED` |

**Source :** [requirements.md](../requirements/requirements.md) · décisions D-008 ([decision_log.md](../../reference/decision_log.md)).

> Règle AKORIS : `NOT_CHECKED` ne vaut jamais `PASS` (`GC-25`). Aucun critère n'est réputé satisfait avant production d'une preuve.

---

## 1. Critères

| Réf. | Critère | Méthode de preuve | Statut |
|---|---|---|---|
| AC-01 | Lighthouse Performance ≥ 90 sur l'accueil (desktop) | Exécution manuelle documentée, rapport joint | NOT_CHECKED |
| AC-02 | Toutes les animations respectent `prefers-reduced-motion` | Test e2e + inspection manuelle | NOT_CHECKED |
| AC-03 | Le site reste utilisable sans WebGL (fallback statique) | Test manuel avec WebGL désactivé | NOT_CHECKED |
| AC-04 | L'admin refuse l'accès sans session ; 5 échecs → verrouillage temporaire | Test e2e + test unitaire | NOT_CHECKED |
| AC-05 | Un message de contact valide est reçu par email en moins de 60 s | Test e2e + vérification de réception | NOT_CHECKED |
| AC-06 | Aucun secret dans l'historique Git | Scan `gitleaks` documenté | NOT_CHECKED |
| AC-07 | Parcours CRUD complet sans erreur console | Test e2e Chromium, Firefox, WebKit | NOT_CHECKED |
| AC-08 | Score accessibilité Lighthouse ≥ 90 | Exécution manuelle documentée | NOT_CHECKED |

---

## 2. Règles de preuve

| Type de critère | Preuve minimale admise |
|---|---|
| Critique (AC-04, AC-05, AC-06) | `directly_verified` ou `reproduced` |
| Fonctionnel (AC-02, AC-03, AC-07) | `directly_verified`, `reproduced` ou `cross_checked` |
| Non fonctionnel (AC-01, AC-08) | Mesure reproductible documentée |
| Déclaratif | `declared_only` admis, jamais pour un critère critique |

Une preuve `declared_only` ne suffit pas pour un critère critique (`GC-24`).

---

## 3. Preuves retenues

- Tests unitaires (Vitest) sur la logique métier.
- Tests e2e (Playwright) sur Chromium, Firefox et WebKit.
- Scan de secrets (`gitleaks`) avant chaque push.
- Mesure Lighthouse manuelle documentée en fin de sprint.
- Test manuel du fallback WebGL.

---

## 4. Points de vigilance

| Point | Détail |
|---|---|
| AC-01 et AC-08 | Dépendent d'une exécution Lighthouse **manuelle** ; sans rapport joint, le critère reste `NOT_CHECKED`. |
| AC-07 | La compatibilité est prouvée par Playwright multi-navigateurs, pas par une revue cross-browser exhaustive. |
| AC-05 | La réception réelle d'un email dépend d'un service externe (Resend) ; une panne du service est un blocage, pas un échec du code. |

---

## 5. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-11-22 | Version initiale — 8 critères, tous `NOT_CHECKED` |
| 0.2 | 2026-11-22 | CP1 validé par le VALIDATOR — statut porté à VALIDÉ CP1 |
