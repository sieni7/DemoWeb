# DemoWeb — Exigences

| Champ | Valeur |
|---|---|
| Version | 0.2 |
| Date | 2026-11-22 |
| Statut | **VALIDÉ CP1 — 2026-11-22** |
| Auteur | ORCHESTRATOR |
| Portée | Exigences fonctionnelles et non fonctionnelles du MVP |
| Ne contient pas | Architecture, choix d'implémentation détaillés |

**Source :** [contexte.md](../../contexte.md) · décisions D-002 à D-008 ([decision_log.md](../../reference/decision_log.md)).

---

## 1. Exigences fonctionnelles

| Réf. | Exigence | Priorité | Critère lié |
|---|---|---|---|
| FR-01 | Le site expose quatre pages publiques : accueil, projets, à propos, contact. | Must | AC-07 |
| FR-02 | La navigation est responsive et un mode sombre est disponible. | Must | AC-08 |
| FR-03 | Les sections déclenchent des animations au scroll (GSAP / ScrollTrigger). | Must | AC-02 |
| FR-04 | Une scène 3D / WebGL est présente (Three.js) avec un rendu fluide. | Must | AC-03 |
| FR-05 | Les changements de page utilisent des transitions et des micro-interactions. | Should | AC-02 |
| FR-06 | Le backoffice exige une authentification ; l'accès sans session est refusé. | Must | AC-04 |
| FR-07 | L'administrateur peut créer, lire, modifier et supprimer projets, textes et médias. | Must | AC-07 |
| FR-08 | L'administrateur peut téléverser des images depuis le backoffice. | Must | AC-07 |
| FR-09 | Le formulaire de contact envoie réellement un message à l'administrateur, avec anti-spam. | Must | AC-05 |
| FR-10 | Une politique de confidentialité et une case de consentement précèdent l'envoi du formulaire. | Must | AC-05 |

---

## 2. Exigences non fonctionnelles

| Réf. | Exigence | Cible | Critère lié |
|---|---|---|---|
| NFR-01 | Performance | LCP ≤ 2,5 s · INP ≤ 200 ms · CLS ≤ 0,1 · Lighthouse ≥ 90 (desktop) | AC-01 |
| NFR-02 | Accessibilité | WCAG 2.1 AA : clavier, contrastes, `prefers-reduced-motion` | AC-02, AC-08 |
| NFR-03 | Compatibilité | 2 dernières versions Chrome, Firefox, Safari, Edge + iOS Safari + Chrome Android | AC-07 |
| NFR-04 | SEO minimal | `title`, `meta`, OpenGraph, sitemap, robots | — |
| NFR-05 | Sécurité | HTTPS, argon2, rate limiting, CSP, zéro secret dans le dépôt | AC-04, AC-06 |
| NFR-06 | RGPD | Consentement, politique, conservation 12 mois, suppression sur demande | AC-05 |
| NFR-07 | Fallback WebGL | Le site reste utilisable sans WebGL | AC-03 |
| NFR-08 | Langue | Code EN · documentation et interface FR | — |

> NFR-05 et NFR-06 ne sont pas des options de périmètre : elles découlent d'obligations légales et des critères AC-04, AC-05 et AC-06 validés par le VALIDATOR.

---

## 3. Contraintes techniques

| Domaine | Choix |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Style | Tailwind CSS v4 |
| Animations | GSAP + ScrollTrigger, Framer Motion |
| 3D / WebGL | Three.js + React Three Fiber |
| Scroll | Lenis |
| Base de données | PostgreSQL (Neon) + Prisma |
| Authentification | Auth.js + argon2 |
| Médias | Vercel Blob |
| Email | Resend |
| Anti-spam | Cloudflare Turnstile |
| Tests | Vitest + Playwright |
| Hébergement | Vercel |

**Justification du stockage distant :** Vercel n'offre pas de système de fichiers persistant ; SQLite local est donc exclu en production.

---

## 4. Traçabilité

| Exigence | Sprint prévu | Critère |
|---|---|---|
| FR-01, FR-02 | S1, S3 | AC-07, AC-08 |
| FR-03, FR-04, FR-05 | S4, S5 | AC-02, AC-03 |
| FR-06, FR-07, FR-08 | S2, S6 | AC-04, AC-07 |
| FR-09, FR-10 | S7 | AC-05 |
| NFR-01, NFR-02 | S7 | AC-01, AC-02, AC-08 |
| NFR-03 | S7 | AC-07 |
| NFR-05, NFR-06 | S2, S7 | AC-04, AC-05, AC-06 |

---

## 5. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-11-22 | Version initiale — 10 exigences fonctionnelles, 8 non fonctionnelles |
| 0.2 | 2026-11-22 | CP1 validé par le VALIDATOR — statut porté à VALIDÉ CP1 |
