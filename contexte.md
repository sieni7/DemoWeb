# DemoWeb — Contexte de projet

| Champ | Valeur |
|---|---|
| Version | 0.2 |
| Date | 2026-11-22 |
| Statut | **VALIDÉ CP1 — 2026-11-22** |
| Auteur | ORCHESTRATOR |
| Portée | Vision, problème, périmètre, exclusions, contraintes, profil |
| Ne contient pas | Règles du protocole, architecture, décisions techniques détaillées |

**Sources :** documentation AKORIS (`C:\documentation`) · réponses du VALIDATOR au cadrage du 2026-11-22.

> Statuts utilisés : `FAIT`, `HYPOTHÈSE`, `RECOMMANDATION`, `À ARBITRER`, `INCONNU` (AKORIS `T` §7, `GC-18`).

---

## 1. Objet

Ce document fixe la **vision, le problème, le périmètre et les contraintes** de DemoWeb. Il est la source unique du cadrage (CP1). Aucune conception, aucun code et aucune transition ne démarre avant sa validation par le VALIDATOR.

---

## 2. Identité

| Champ | Valeur | Statut |
|---|---|---|
| Nom | DemoWeb | FAIT |
| Identifiant | `demoweb` | FAIT |
| Nature | Site vitrine de démonstration + backoffice d'administration | FAIT |
| Dépôt distant | `https://github.com/sieni7/DemoWeb` (public) | FAIT |
| Emplacement local | `C:\test\DemoWeb` | FAIT |
| Licence | MIT | FAIT |
| Langue | Code EN · documentation et interface FR | FAIT |

---

## 3. Problème et finalité

**Finalité (FAIT).** DemoWeb démontre un **savoir-faire technique** : il présente un site web exploitant les derniers effets visuels et techniques, doublé d'un backoffice d'administration.

**Problème (FAIT — reformulé).** Il n'existe pas d'utilisateur en souffrance : le projet n'a pas de finalité commerciale. Sa valeur est la **preuve de compétence** — qualité d'exécution, originalité des effets, maîtrise de la stack moderne.

**Conséquence sur les critères.** L'acceptation se juge sur des critères **techniques et visuels mesurables** (performance, accessibilité, compatibilité, fluidité), jamais sur des critères de conversion ou de satisfaction métier.

---

## 4. Public

| Élément | Valeur | Statut |
|---|---|---|
| Public cible | Aucun public cible particulier — démonstration pure | FAIT |
| Contenu | Fictif assumé | FAIT |
| Visiteurs | Grand public technique et non technique | HYPOTHÈSE |

---

## 5. Périmètre du MVP

| Réf. | Fonctionnalité | Priorité |
|---|---|---|
| FR-01 | Pages publiques : accueil, projets, à propos, contact | Must |
| FR-02 | Navigation responsive et mode sombre | Must |
| FR-03 | Effets d'animation au scroll (GSAP / ScrollTrigger) | Must |
| FR-04 | Scène 3D / WebGL (Three.js) | Must |
| FR-05 | Transitions de page et micro-interactions | Should |
| FR-06 | Backoffice protégé par authentification | Must |
| FR-07 | CRUD du contenu (projets, textes, médias) | Must |
| FR-08 | Upload d'images | Must |
| FR-09 | Formulaire de contact réel avec anti-spam | Must |
| FR-10 | Politique de confidentialité et consentement | Must |

Détail et traçabilité : [docs/requirements/requirements.md](docs/requirements/requirements.md).

---

## 6. Exclusions explicites

Ne font **pas** partie du projet :

- e-commerce et paiement ;
- comptes visiteurs ;
- blog ;
- commentaires ;
- newsletter ;
- multilingue ;
- analytics ;
- PWA ;
- SEO avancé (seul le minimum — `title`, `meta`, OpenGraph, sitemap, robots — est requis).

Toute demande sortant de cette liste est un **changement** (`CHG-AAAA-NNNN`), pas une extension silencieuse.

---

## 7. Contraintes

| Domaine | Contrainte | Statut |
|---|---|---|
| Équipe | Solo : un VALIDATOR humain, agents pour les autres rôles | FAIT |
| Délai | Aucune échéance fixée | FAIT |
| Stack | Next.js 15, TypeScript, Tailwind v4, GSAP, Three.js, PostgreSQL/Neon, Prisma, Auth.js, Vercel Blob, Resend, Turnstile, Vercel | FAIT (D-002) |
| Dépôt | Public, licence MIT, aucun secret commité | FAIT |
| Git / CI | GitHub Actions (lint, tests, `gitleaks`), protection de `main`, PR obligatoire, branches `dev_sprint_XX` | FAIT (D-006) |
| Données | Formulaire de contact réel → données personnelles | FAIT |
| RGPD | Minimum légal : politique, consentement, conservation 12 mois, suppression | FAIT (D-007) |
| Sécurité | Exigée via AC-04 et AC-06, sans section NFR dédiée | FAIT |
| Hébergement | Vercel (previews par branche) | FAIT |
| Nom de domaine | Non défini | INCONNU |

---

## 8. Profil de gouvernance

| Champ | Valeur |
|---|---|
| Profil | **Standard** |
| Décidé par | VALIDATOR |
| Date | 2026-11-22 |
| Verrouillé | Oui (avant CP1) |
| Référence | [D-001](reference/decision_log.md) |

**Justification.** Projet logiciel réel, données personnelles réelles, backoffice exposé publiquement, audit indépendant attendu à chaque sprint.

**Réserve (A3).** La disponibilité effective des profils dans l'implémentation OpenCode de référence **n'est pas établie**. Les contrôles sont **déclarés**, pas certifiés techniquement. Les tests T1 à T5 n'ont pas été exécutés ; la protection de `main` reste `unknown` tant qu'aucune preuve n'est produite.

---

## 9. Parties prenantes

| Rôle | Identité | Statut |
|---|---|---|
| VALIDATOR | Oulai Siéni Tarek — `sieni7` — sieni7@gmail.com | FAIT |
| ORCHESTRATOR | Agent | FAIT |
| BUILDER | Agent | FAIT |
| AUDITOR | Agent séparé, session indépendante | FAIT |

---

## 10. Points ouverts

| Point | Statut | Échéance |
|---|---|---|
| Règles métier (`docs/business_rules/`) | À formaliser | CP2 |
| Architecture et ADR | À produire | CP2 |
| Contenu fictif (textes, images, projets) | À définir | S1 / S3 |
| Nom de domaine | INCONNU | Avant S7 |
| Tests T1 à T5, permissions, protection de `main` | NON EXÉCUTÉS / `unknown` | CP3 |
| Registre des risques (`docs/risks/`) | Recommandé, non créé | CP2 |

---

## 11. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-11-22 | Version initiale — cadrage complet, proposition CP1 |
| 0.2 | 2026-11-22 | CP1 validé par le VALIDATOR — statut porté à VALIDÉ CP1 |
