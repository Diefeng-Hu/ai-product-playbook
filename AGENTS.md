# Repository Guidelines

## Project Structure & Module Organization

This repository publishes a VitePress online book. Numbered chapters live in `model/`, `platform/`, and `applications/`. Reusable, unnumbered assets live in `toolkit/`; concise supporting examples live in `cases/`. Do not create duplicate article bodies under `book/` or elsewhere. `scripts/generate-content-index.mjs` scans those directories and generates the VitePress index plus the marked catalogue in `README.md`. Theme code is in `.vitepress/theme/`, site configuration in `.vitepress/config.ts`, and the visit counter Worker in `workers/visit-counter.js` with `wrangler.jsonc`.

## Build, Test, and Development Commands

- `npm run docs:dev` — regenerate the content index and start local development.
- `npm run docs:build` — regenerate the index and build `.vitepress/dist`; run before every commit.
- `npm run docs:preview` — serve the existing production build locally.
- `npx wrangler deploy` — deploy the visit-counter Worker only when its code or configuration changes.
- `git diff --check` — catch whitespace errors before committing.

There is no separate test suite. A successful `npm run docs:build`, correct generated chapter count, and a manual check of changed links are the required validation baseline.

## Content, Style, and Naming

Keep filenames numbered and kebab-cased, for example `platform/03-agent-reliability.md`; the generator defines reading order from filenames. Preserve each article's first-level title, section marker, and `撰写日期` line. Write public-facing Chinese that is restrained, specific, and professional; remove internal credentials, private operational details, chat transcripts, and implementation details that do not change a reader's future decision. Edit navigation rules in `scripts/generate-content-index.mjs`, not generated files under `.vitepress/generated/`.

## Commits, Pull Requests, and Deployment

Use concise Conventional-Commit-style prefixes when applicable: `feat:`, `fix:`, `docs:`, or `style:`. Keep each commit focused. Pull requests should state the reader-facing change, list validation commands, and include screenshots for visual/theme changes. Pushing eligible paths to `main` triggers GitHub Pages; the workflow also runs a daily build-and-deploy check at 11:00 Beijing time.

## Security & Configuration

Do not commit Cloudflare tokens, Worker credentials, or local `.env` files. The counter accepts only the production GitHub Pages origin; retain that restriction unless the public domain changes.
