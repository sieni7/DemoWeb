# DemoWeb — Architecture

| Champ | Valeur |
|---|---|
| Version | 0.2 |
| Date | 2026-11-22 |
| Statut | **VALIDÉ CP2 — 2026-11-22** |
| Auteur | ORCHESTRATOR |
| Portée | Architecture applicative, modèle de données, routes, sécurité, performance |
| Ne contient pas | Code source, mandats de sprint, décisions de sprint |

**Sources :** [contexte.md](../contexte.md) · [requirements.md](../requirements/requirements.md) · ADR-001 à ADR-004 · décisions D-002, D-012 à D-016.

---

## 1. Vue d'ensemble

```text
Navigateur
   │
   ├── Vitrine publique (SSG + ISR)
   │      Accueil · Projets · À propos · Contact · Confidentialité
   │
   └── Backoffice (SSR, protégé)
          Login · Tableau de bord · Projets · Médias · Messages

Vercel (Next.js 15, App Router)
   ├── Route Handlers /api/*
   ├── Auth.js (credentials + GitHub OAuth)
   ├── Prisma ──► PostgreSQL (Neon)
   ├── Vercel Blob (images)
   ├── Resend (email)
   └── Cloudflare Turnstile (anti-spam)
```

---

## 2. Structure du dépôt

```text
DemoWeb/
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── projects/page.tsx
│   │   ├── projects/[slug]/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── privacy/page.tsx
│   ├── (admin)/
│   │   ├── admin/layout.tsx
│   │   ├── admin/page.tsx
│   │   ├── admin/login/page.tsx
│   │   ├── admin/projects/page.tsx
│   │   ├── admin/projects/new/page.tsx
│   │   ├── admin/projects/[id]/page.tsx
│   │   └── admin/messages/page.tsx
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── contact/route.ts
│   │   └── admin/
│   │       ├── projects/route.ts
│   │       ├── projects/[id]/route.ts
│   │       ├── upload/route.ts
│   │       └── messages/[id]/route.ts
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/          # shadcn/ui
│   ├── public/      # hero, nav, footer, effets
│   └── admin/       # formulaires, tableaux
├── lib/
│   ├── db.ts
│   ├── auth.ts
│   ├── rate-limit.ts
│   ├── validation.ts
│   └── mail.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── tests/
│   ├── unit/
│   └── e2e/
├── .github/workflows/ci.yml
├── .env.example
├── middleware.ts
├── next.config.ts
├── package.json
└── state.json
```

---

## 3. Modèle de données

| Entité | Champs principaux | Règles |
|---|---|---|
| `User` | `id`, `email`, `passwordHash?`, `name`, `role`, `createdAt` | `role = ADMIN` ; `passwordHash` nullable si OAuth seul |
| `Account` / `Session` | Tables Auth.js | Gérées par Auth.js |
| `Project` | `id`, `slug`, `title`, `summary`, `description`, `imageUrl`, `link`, `tags[]`, `category`, `year`, `status`, `createdAt`, `updatedAt` | `slug` unique ; `status` ∈ {`draft`, `published`} |
| `Media` | `id`, `url`, `alt`, `width`, `height`, `mimeType`, `size`, `createdAt` | `alt` obligatoire ; 5 Mo max |
| `ContactMessage` | `id`, `name`, `email`, `subject`, `message`, `consentAt`, `status`, `createdAt`, `retentionUntil` | `retentionUntil = createdAt + 12 mois` |
| `LoginAttempt` | `id`, `identifier`, `ipHash`, `success`, `createdAt` | Support du verrouillage AC-04 |

**Choix :** `tags` en `String[]` PostgreSQL plutôt qu'une table de jointure — suffisant pour une démonstration, évite une complexité inutile.

---

## 4. Rendu

| Zone | Stratégie | Revalidation |
|---|---|---|
| Vitrine | SSG + ISR | `revalidate = 3600` + revalidation à la demande après mutation admin |
| Backoffice | SSR dynamique | Aucun cache |
| Route Handlers | Dynamiques | — |

Le backoffice déclenche `revalidateTag('projects')` après chaque création, modification ou suppression. Les brouillons ne sont jamais rendus publiquement.

---

## 5. Sécurité

| Contrôle | Mise en œuvre |
|---|---|
| Protection des routes | `middleware.ts` : `/admin/**` exige une session, sauf `/admin/login` |
| Mots de passe | argon2id, paramètres par défaut de la librairie |
| Verrouillage | 5 échecs → blocage 15 min, état en base (`LoginAttempt`) |
| Rate limiting | `/api/contact` et login ; compteur partagé en base |
| Validation | Zod sur toutes les entrées |
| CSRF | Protections Auth.js |
| En-têtes | CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy` |
| Secrets | Variables d'environnement uniquement ; `.env` ignoré ; `.env.example` fourni |
| Uploads | Type MIME et taille vérifiés côté serveur |

> La protection de `main` et l'effectivité des permissions restent **déclarées** : les tests T1 à T5 ne sont pas exécutés.

---

## 6. Performance et accessibilité

- Scène Three.js chargée en `dynamic(..., { ssr: false })`, uniquement si WebGL est disponible.
- Images via `next/image` (AVIF/WebP), dimensions explicites.
- Polices auto-hébergées via `next/font`.
- Animations désactivées si `prefers-reduced-motion: reduce`.
- Composants shadcn/ui (Radix) pour le clavier et les rôles ARIA.
- Lien d'évitement, focus visible, contrastes AA.

---

## 7. RGPD

| Obligation | Mise en œuvre |
|---|---|
| Consentement | Case obligatoire, horodatée dans `consentAt` |
| Information | Page `/privacy` accessible depuis le formulaire |
| Minimisation | Nom, email, sujet, message — rien d'autre |
| Conservation | Suppression automatique après 12 mois (`retentionUntil`) |
| Suppression | Suppression manuelle depuis le backoffice |
| Sous-traitants | Vercel, Neon, Resend, Cloudflare — listés dans la politique |

---

## 8. Déploiement

| Élément | Choix |
|---|---|
| Hébergement | Vercel |
| Base | Neon (PostgreSQL) |
| Médias | Vercel Blob |
| Email | Resend |
| CI | GitHub Actions (lint, tests, `gitleaks`) |
| Previews | Une par branche `dev_sprint_XX` |

---

## 9. Points ouverts

| Point | Statut |
|---|---|
| Nom de domaine | INCONNU |
| Domaine d'envoi Resend à vérifier | À faire en S7 |
| Mécanisme de purge automatique (Vercel Cron ou tâche planifiée) | À décider en S2 |
| Sauvegarde de la base Neon | À définir en S2 |
| Monitoring et alertes | Non prévu au MVP |

---

## 10. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-11-22 | Version initiale — architecture CP2 |
| 0.2 | 2026-11-22 | CP2 validé par le VALIDATOR — statut porté à VALIDÉ CP2 |
