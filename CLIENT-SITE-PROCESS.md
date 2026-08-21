# Process de création d'un site client (Webelevate)

Process suivi pour livrer un site client avec Next.js + shadcn/ui + 21st.dev, hébergé sur Vercel, piloté entièrement via prompts à Claude Code. Référence : premier site suivant ce process = `arnaud-batt` (Cuisina Création), 2026-08-21.

## 0. Règles générales

- **Git** : Claude commit et push toujours lui-même dès que c'est demandé ("commit", "pousse", "sauvegarde"). L'utilisateur ne touche jamais à git à la main.
- **Design** : Claude va chercher lui-même des éléments de design sur la bibliothèque 21st.dev (composants React/Tailwind/shadcn) et propose un choix (2-3 options avec preview) plutôt que d'attendre que l'utilisateur envoie des liens.
- **Travail au quotidien** : tout se fait par prompt dans la session Claude Code ouverte sur le dossier du projet client (pas besoin d'ouvrir un nouveau terminal/session par la suite).

## 1. Scaffold Next.js

```bash
npx create-next-app@latest nom-du-client --typescript --tailwind --app --eslint --src-dir --import-alias "@/*" --no-turbopack --use-npm
cd nom-du-client
npx shadcn@latest init -y -d
```

## 2. Premier commit

```bash
git add -A && git commit -m "Scaffold Next.js + Tailwind + shadcn/ui"
```

## 3. Repo GitHub

```bash
gh repo create nom-du-client --private --source=. --push
```

(si `gh` n'est pas connecté : `gh auth login` une seule fois — déjà fait sur cette machine, compte `oscargoerger5-creator`)

## 4. Déploiement Vercel

Via le MCP Vercel connecté à cette session (pas besoin de repasser par le site à chaque fois) :
- `list_teams` pour récupérer le `teamId`
- `create_git_project` avec `repo: "owner/nom-du-client"` et le `teamId`

⚠️ Si ça renvoie une erreur 403 forbidden ("You don't have permission to create the project"), c'est que l'app GitHub de Vercel n'a pas accès au repo. Dans ce cas, demander à l'utilisateur de faire l'import manuellement une fois sur [vercel.com/new](https://vercel.com/new) → Import Git Repository → "Adjust GitHub App Permissions" si le repo n'apparaît pas → Deploy. Une fois fait, chaque `git push` sur `main` redéploie automatiquement — plus besoin de repasser par l'UI Vercel ensuite.

Vérifier l'état avec `get_project` (regarder `latestDeployment.readyState` et `domains`).

## 5. Connecter 21st.dev en MCP au projet

```bash
cd nom-du-client
claude mcp add --transport http 21st https://21st.dev/api/mcp --header "x-api-key: CLE_21ST"
```

La clé API 21st.dev est fournie par l'utilisateur (Settings → API Keys sur 21st.dev, réutilisable d'un projet à l'autre). La connexion reste attachée à ce dossier de projet pour toutes les sessions futures.

## 6. Design

- Récupérer auprès de l'utilisateur : activité du client, zone géographique, ton/vibe voulu, pages principales attendues.
- Chercher proactivement dans 21st.dev (`mcp__21st__search`, `get_inspiration`) des composants pertinents par section (hero, galerie/portfolio, avant/après, témoignages, contact, FAQ...).
- Proposer un shortlist avec preview à l'utilisateur avant d'intégrer.
- Une fois validé, installer le vrai code du composant (`npx shadcn@latest add "<installCommand>"`) et l'adapter à la charte du client.

## 7. Boucle de travail

Une fois les étapes 1-5 faites, tout le reste se fait par prompt dans la session Claude Code ouverte sur le dossier du projet client : demandes de modifs, ajout de pages, ajustements de design, commit/push automatiques à chaque étape validée.
