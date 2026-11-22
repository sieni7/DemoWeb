# ADR-002 — Base de données

| Champ | Valeur |
|---|---|
| Statut | **ACCEPTÉ — CP2, 2026-11-22** |
| Date | 2026-11-22 |
| Décideur | VALIDATOR |
| Références | D-002, D-013 |

## Contexte

Le backoffice doit persister projets, médias et messages de contact. Le déploiement cible est Vercel, dont le système de fichiers n'est pas persistant. Le dépôt est public.

## Décision

- **PostgreSQL hébergé sur Neon**, en offre gratuite.
- **Prisma** comme ORM, avec migrations versionnées dans `prisma/migrations/`.
- Connexion par *connection pooling* (PgBouncer de Neon) pour les fonctions serverless.

## Conséquences

**Positives**
- Persistance réelle, compatible serverless.
- Migrations traçables et reproductibles.
- `String[]` natif pour les tags.

**Négatives**
- Dépendance à un service externe (Neon).
- Quota gratuit à surveiller.
- Latence réseau sur chaque requête — acceptable pour un backoffice à faible trafic.

**Neutres**
- Le schéma reste portable vers un autre PostgreSQL.

## Alternatives écartées

| Alternative | Motif |
|---|---|
| SQLite | Incompatible avec le système de fichiers non persistant de Vercel |
| SQLite sur VPS | Introduit un serveur à administrer, hors périmètre |
| Supabase | Redondant avec Auth.js et Vercel Blob |
| MongoDB | Modèle relationnel plus adapté aux projets et messages |

## Suivi

Prévoir une sauvegarde (export ou snapshot Neon) avant la mise en production.
