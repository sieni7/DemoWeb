# DemoWeb

Site vitrine de démonstration technique et backoffice d'administration.

> Sprint S0 — fondations. Aucune page publique ni fonctionnalité métier n'est encore livrée.

## Pile technique

- Next.js 15 (App Router) + TypeScript strict
- Tailwind CSS v4 + shadcn/ui
- Vitest (tests unitaires) + Playwright (tests e2e)
- ESLint + Prettier

## Démarrage

```bash
npm install
npm run dev
```

L'application est disponible sur <http://localhost:3000>.

## Commandes

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run lint` | Analyse statique |
| `npm run typecheck` | Vérification des types |
| `npm run test` | Tests unitaires |
| `npm run test:e2e` | Tests end-to-end (Chromium, Firefox, WebKit) |
| `npm run format` | Formatage du code |

## Configuration

Copier `.env.example` vers `.env.local` et renseigner les variables. **Ne jamais committer de fichier `.env`.**

## Gouvernance

Le projet suit la méthode AKORIS v2.0 (profil Standard). Voir `contexte.md`, `agents.md`, `current_sprint.md` et `state.json`.

## Licence

MIT
