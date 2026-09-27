# Contenus SEO : comment ajouter une page

Les pages services, les pages locales/métier et les guides sont des fichiers Markdown dans `content/`.
**Ajouter un contenu = créer UN fichier `.md`.** Aucune modification de code n'est nécessaire : la page, le sitemap, `/llms.txt` et le hub `/guides` se mettent à jour tout seuls au prochain build.

| Dossier | URL générée | `kind` |
|---|---|---|
| `content/services/<slug>.md` | `/services/<slug>` | `service` |
| `content/pages/<slug>.md` | `/<slug>` (ex. `/agence-web-strasbourg`, `/site-internet-traiteur`) | `ville` ou `metier` |
| `content/guides/<slug>.md` | `/guides/<slug>` | `guide` |

Le slug est le nom du fichier : minuscules, tirets, sans accents. Un slug de `content/pages/` ne doit pas entrer en conflit avec une route existante (`services`, `realisations`, `studio`, `contact`, `guides`, pages légales).

## Frontmatter

```yaml
---
kind: guide                 # service | ville | metier | guide
title: "H1 de la page (requête visée + ville si pertinent)"
metaTitle: "Titre Google, 60 caractères max (le suffixe « · webelevate » est ajouté)"
description: "Meta description, 140 à 155 caractères, bénéfice + ville + incitation"
answer: "Paragraphe-réponse de 40 à 60 mots affiché sous le H1 : qui, quoi, où, prix ou délai. C'est ce que Google et les IA extraient."
datePublished: 2026-09-27
dateModified: 2026-09-27     # à mettre à jour à chaque modification
service: creation-site-internet   # optionnel : slug de la page service liée
city: Strasbourg                   # optionnel : pages locales
realisations: [bs-traiteur, naawah]   # slugs de src/lib/realisations.ts (3 max affichés)
related: [/services/creation-site-internet, /agence-web-strasbourg]   # chemins internes existants
prices:                              # optionnel : uniquement des prix validés par Oscar
  - label: "Site vitrine sur-mesure"
    from: "2 000 €"
    note: "optionnel"
faq:                                 # 5 à 8 questions spécifiques à la page
  - q: "Question ?"
    a: "Réponse."
draft: false                         # true = non publié
---
```

## Corps (Markdown)

- Commencer au niveau `##` : le H1 est généré depuis `title`.
- Tableaux, listes et chiffres réels : c'est ce qui se fait citer.
- Nommer l'entité en entier dans les passages clés : « Webelevate, agence web à Strasbourg ».
- Ne jamais inventer de chiffres, de clients, d'avis ou de prix. Prix validés à ce jour : **site vitrine à partir de 2 000 €**, **site e-commerce à partir de 3 000 €**. Toutes les autres prestations sont **sur devis**.
- Les liens internes vers les réalisations se font en Markdown : `[Cuisine Schmidt](/realisations/cuisine-schmidt)`.

## Vérifier

```bash
npm run build
```

Le build échoue si le frontmatter est invalide. Le rendu est à vérifier sur l'aperçu Vercel de la PR.
