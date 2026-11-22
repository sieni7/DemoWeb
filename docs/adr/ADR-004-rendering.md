# ADR-004 — Stratégie de rendu

| Champ | Valeur |
|---|---|
| Statut | **ACCEPTÉ — CP2, 2026-11-22** |
| Date | 2026-11-22 |
| Décideur | VALIDATOR |
| Références | D-002, D-015, NFR-01 |

## Contexte

La vitrine doit être rapide et indexable ; le backoffice doit toujours afficher des données fraîches et ne jamais être mis en cache publiquement.

## Décision

- **Vitrine** : génération statique avec **ISR** (`revalidate = 3600`) et revalidation à la demande.
- **Backoffice** : rendu dynamique côté serveur (`dynamic = 'force-dynamic'`), aucun cache.
- **Route Handlers** : dynamiques, authentifiés pour `/api/admin/*`.
- Après chaque mutation admin : `revalidateTag('projects')` (et `revalidateTag('project:<slug>')` si nécessaire).
- Les brouillons sont exclus des requêtes publiques au niveau de la couche de données, pas seulement de l'interface.

## Conséquences

**Positives**
- Pages publiques servies depuis le CDN : performance élevée (AC-01).
- Données du backoffice toujours à jour.
- Aucun risque de fuite de brouillon par cache.

**Négatives**
- Logique de revalidation à maintenir et à tester.
- Une erreur de tag laisse une page périmée jusqu'à expiration.
- Les previews Vercel peuvent différer de la production si les variables diffèrent.

**Neutres**
- Le choix reste réversible page par page.

## Alternatives écartées

| Alternative | Motif |
|---|---|
| Tout SSR | Plus simple, mais moins performant sur la vitrine |
| Tout SSG + admin client | Auth et CRUD fragiles, données potentiellement périmées |
| Cache CDN personnalisé | Complexité disproportionnée pour le périmètre |

## Suivi

Test e2e en S6 : créer un projet, vérifier sa présence publique après revalidation, puis le dépublier et vérifier sa disparition.
