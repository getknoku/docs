# Knoku Docs

The official documentation site for [Knoku](https://knoku.com) — cited AI answers from your documentation, GitHub repos, and connected sources.

Live site: [docs.knoku.com](https://docs.knoku.com)

Built with [Next.js](https://nextjs.org) and [Nextra](https://nextra.site).

## Contents

- **Overview** — product introduction, get started, FAQ
- **Sources** — GitHub repo sync, crawl, integrations (Notion, Confluence, GitHub App, …)
- **Deploy Knoku** — widget, Slack, Discord, MCP, Public API, support form deflector
- **Analytics** — deflection, questions, sources cited, traffic
- **Dashboard** — domains, security, privacy, workspace, sessions
- **Widget** — installation, setups, reference
- **Doc platforms** — Docusaurus, Mintlify, MkDocs, Nextra, and more

Content lives under [`src/content`](src/content) as MDX files.

## Local development

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The dev server runs on [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

`postbuild` generates the [Pagefind](https://pagefind.app) search index into `public/_pagefind`.

## Project structure

```
src/
  app/         # Next.js App Router entry, layout, global styles
  content/     # MDX documentation pages
public/        # Static assets (logos, icons, search index)
mdx-components.js
next.config.mjs
```

## Contributing

Issues and pull requests are welcome. For typos, broken links, or content corrections, please open a PR directly.

## License

[MIT](LICENSE)
