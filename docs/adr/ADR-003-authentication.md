# ADR-003 — Authentification du backoffice

| Champ | Valeur |
|---|---|
| Statut | **ACCEPTÉ — CP2, 2026-11-22** |
| Date | 2026-11-22 |
| Décideur | VALIDATOR |
| Références | D-002, D-014, AC-04 |

## Contexte

Le backoffice est exposé publiquement. Un seul administrateur doit pouvoir s'y connecter. Le projet doit démontrer deux modes d'authentification et résister aux attaques par force brute.

## Décision

- **Auth.js (NextAuth v5)** avec l'adaptateur Prisma.
- Deux fournisseurs : **credentials** (email + mot de passe argon2id) et **GitHub OAuth**.
- Sessions **JWT** signées, durée 8 heures, renouvellement glissant.
- Un seul rôle : `ADMIN`. Aucune inscription publique.
- Compte administrateur créé par script de *seed* à partir de variables d'environnement.
- **Verrouillage** : 5 échecs consécutifs en 15 minutes → blocage 15 minutes, état en base (`LoginAttempt`).
- OAuth GitHub restreint à une liste d'identifiants autorisés (`ADMIN_GITHUB_LOGINS`).

## Conséquences

**Positives**
- Deux modes d'authentification démontrés.
- Verrouillage partagé entre instances serverless grâce à la base.
- Sessions sans état, compatibles avec le middleware.

**Négatives**
- Dépendance à Auth.js et à ses évolutions.
- Réinitialisation de mot de passe **hors périmètre** : une perte de mot de passe exige une intervention manuelle.
- GitHub OAuth impose de créer une application GitHub et de gérer un secret supplémentaire.

**Neutres**
- Le rôle unique simplifie la matrice de permissions.

## Alternatives écartées

| Alternative | Motif |
|---|---|
| Clerk / Auth0 | Service externe supplémentaire, moins de démonstration technique |
| Supabase Auth | Redondant avec la base choisie |
| Auth maison | Risque d'erreur de sécurité, aucun bénéfice démonstratif |

## Suivi

Vérifier en S2 que le verrouillage fonctionne réellement sur plusieurs instances (test e2e AC-04).
