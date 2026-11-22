# DemoWeb — Registre des risques

| Champ | Valeur |
|---|---|
| Version | 0.2 |
| Date | 2026-11-22 |
| Statut | **VALIDÉ CP2 — 2026-11-22** |
| Auteur | ORCHESTRATOR |
| Portée | Risques techniques, sécurité, conformité, organisation |
| Ne contient pas | Incidents survenus (voir `docs/governance/incidents/`) |

**Échelles :** probabilité *faible / moyenne / élevée* · impact *faible / moyen / élevé / critique*. Aucune échelle chiffrée n'existe (C25) : l'appréciation est qualitative et tracée.

---

## 1. Risques

| Réf. | Risque | Probabilité | Impact | Niveau | Mesure |
|---|---|---|---|---|---|
| R-01 | Indisponibilité d'un service externe (Neon, Blob, Resend, Turnstile) | Moyenne | Élevé | Élevé | États d'erreur explicites, messages clairs, documentation des dépendances |
| R-02 | Fluidité insuffisante de la scène 3D sur appareils modestes | Moyenne | Moyen | Moyen | Chargement différé, qualité adaptative, fallback statique (AC-03) |
| R-03 | Fuite de secret dans le dépôt public | Faible | Critique | Élevé | `.gitignore`, `.env.example`, `gitleaks`, rotation des clés en cas d'incident |
| R-04 | Emails de contact non délivrés (spam, DNS) | Moyenne | Moyen | Moyen | SPF/DKIM via Resend, test réel en S7 (AC-05) |
| R-05 | Indépendance d'audit insuffisante en solo | Élevée | Moyen | Élevé | Agent AUDITOR en session séparée, vérification directe, réserves déclarées |
| R-06 | Non-conformité RGPD | Faible | Élevé | Moyen | Consentement, politique, purge à 12 mois, suppression manuelle |
| R-07 | Rupture de compatibilité d'une dépendance (Next.js, Auth.js) | Moyenne | Moyen | Moyen | Versions verrouillées, lockfile commité, mise à jour planifiée |
| R-08 | Cache ISR périmé après mutation | Moyenne | Moyen | Moyen | `revalidateTag` testé en e2e (S6), surveillance des pages publiques |
| R-09 | Preuve Lighthouse non produite ou non datée | Moyenne | Moyen | Moyen | Rapport manuel joint à chaque fin de sprint, sinon `NOT_CHECKED` |
| R-10 | Contenu fictif sans validation métier | Faible | Faible | Faible | Accepté : la démonstration ne prétend pas à une vérité métier |

---

## 2. Risques acceptés

| Réf. | Justification | Décideur |
|---|---|---|
| R-10 | Le projet est une démonstration technique, pas un produit métier | VALIDATOR (à confirmer CP2) |

---

## 3. Suivi

- Revue du registre à chaque fin de sprint.
- Tout risque réalisé devient un incident (`docs/governance/incidents/`).
- Un risque critique non maîtrisé est un motif de `HOLD` ou de `NO_GO`.

---

## 4. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-11-22 | Version initiale — 10 risques |
| 0.2 | 2026-11-22 | CP2 validé par le VALIDATOR — statut porté à VALIDÉ CP2 |
