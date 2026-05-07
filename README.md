# Knoku Docs

The official documentation site for [Knoku](https://knoku.com) — an AI chat assistant that answers visitor questions from your own documentation.

Live site: [docs.knoku.com](https://docs.knoku.com)

Built with [Next.js](https://nextjs.org) and [Nextra](https://nextra.site).

## Contents

- **Overview** — what Knoku is and how to get started
- **CLI** — commands for syncing your docs (`init`, `push`, `status`, `doctor`, configuration)
- **Widget** — embedding and configuring the chat widget
- **Integrations** — guides for Docusaurus, Mintlify, MkDocs, Nextra, Read the Docs, Sphinx, VitePress, and custom sites

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
