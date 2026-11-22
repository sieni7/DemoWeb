# DemoWeb — Règles métier

| Champ | Valeur |
|---|---|
| Version | 0.2 |
| Date | 2026-11-22 |
| Statut | **VALIDÉ CP2 — 2026-11-22** |
| Auteur | ORCHESTRATOR |
| Portée | Règles vérifiables appliquées par l'application |
| Ne contient pas | Règles du protocole AKORIS, décisions d'architecture |

**Sources :** [requirements.md](../requirements/requirements.md) · [architecture.md](../architecture/architecture.md) · décisions D-003, D-007, D-017.

> Les seuils marqués `VALIDÉ CP2` ont été acceptés par le VALIDATOR au CP2, le 2026-11-22.

---

## 1. Projets

| Réf. | Règle | Statut |
|---|---|---|
| BR-01 | Le `slug` est unique, en minuscules, composé de `a-z`, `0-9` et `-`. Il est généré depuis le titre et reste modifiable. | FAIT |
| BR-02 | Un projet a deux statuts : `draft` ou `published`. Seuls les `published` sont visibles publiquement. | FAIT |
| BR-03 | Champs obligatoires : titre, slug, résumé, description, image principale, catégorie, année. Le lien est optionnel. | FAIT |
| BR-04 | Un projet publié doit avoir une image principale valide. | FAIT |
| BR-05 | Les tags sont normalisés en minuscules, dédupliqués, limités à **8** par projet. | VALIDÉ CP2 |
| BR-06 | La suppression d'un projet supprime son enregistrement ; le média associé est supprimé de Vercel Blob si aucune autre référence ne l'utilise. | FAIT |

---

## 2. Médias

| Réf. | Règle | Statut |
|---|---|---|
| BR-07 | Formats acceptés : JPEG, PNG, WebP, AVIF. | FAIT |
| BR-08 | Taille maximale : **5 Mo** par fichier. | VALIDÉ CP2 |
| BR-09 | Le texte alternatif (`alt`) est obligatoire pour toute image publiée. | FAIT |
| BR-10 | Le type MIME est vérifié côté serveur, jamais uniquement côté client. | FAIT |

---

## 3. Formulaire de contact

| Réf. | Règle | Statut |
|---|---|---|
| BR-11 | Champs obligatoires : nom, email, sujet, message, consentement. | FAIT |
| BR-12 | Longueurs : nom 2–80, sujet 3–120, message 10–2000 caractères. | VALIDÉ CP2 |
| BR-13 | L'email doit être syntaxiquement valide. | FAIT |
| BR-14 | Le consentement est horodaté (`consentAt`) et ne peut pas être pré-coché. | FAIT |
| BR-15 | Limite : **5 messages par heure et par empreinte IP**. | VALIDÉ CP2 |
| BR-16 | Un message est conservé **12 mois**, puis supprimé automatiquement. | FAIT (D-007) |
| BR-17 | L'administrateur peut supprimer un message à tout moment. | FAIT |

---

## 4. Authentification et administration

| Réf. | Règle | Statut |
|---|---|---|
| BR-18 | Seul le rôle `ADMIN` accède au backoffice. Aucune inscription publique. | FAIT |
| BR-19 | **5 échecs consécutifs en 15 minutes** bloquent la connexion pendant **15 minutes**. | FAIT (AC-04) / durée VALIDÉE CP2 |
| BR-20 | Les mots de passe sont hashés avec argon2id ; aucun mot de passe en clair n'est stocké ni journalisé. | FAIT |
| BR-21 | Une session expire après 8 heures. | VALIDÉ CP2 |
| BR-22 | Toute entrée est validée côté serveur avec Zod, quel que soit le contrôle côté client. | FAIT |

---

## 5. Sécurité et secrets

| Réf. | Règle | Statut |
|---|---|---|
| BR-23 | Aucun secret n'est commité : `.env` est ignoré, `.env.example` documente les variables. | FAIT (D-006) |
| BR-24 | Un scan `gitleaks` s'exécute avant chaque push et bloque en cas de détection. | FAIT |
| BR-25 | Les en-têtes de sécurité (CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`) sont appliqués globalement. | FAIT |

---

## 6. Règles hors périmètre

Ne sont **pas** des règles du projet : e-commerce, comptes visiteurs, newsletter, analytics, multilingue. Toute introduction constitue un changement (`CHG-AAAA-NNNN`).

---

## 7. Historique

| Version | Date | Modification |
|---|---|---|
| 0.1 | 2026-11-22 | Version initiale — 25 règles métier |
| 0.2 | 2026-11-22 | CP2 validé — seuils `RECOMMANDATION` acceptés |
