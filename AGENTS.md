# Repository Guidelines

Whatever action you can do yourself, Please do yourself, this includes starting apps and verification.

## Project Structure & Module Organization

This repository will contain the **Diamond** UX/UI portfolio, built with Next.js. Keep application code in `src/` when the project is initialized:

- `src/app/` — route pages, layouts, and page-specific styles.
- `src/components/` — reusable interface components (for example, `ProjectCard.tsx`).
- `src/data/` — typed portfolio and project content.
- `public/` — static files served directly, including profile photos, project imagery, certificates, and downloadable PDFs.
- `tests/` or colocated `*.test.tsx` files — automated tests.

Use route folders for the primary pages: `app/page.tsx`, `app/projects/page.tsx`, `app/about/page.tsx`, and `app/contact/page.tsx`. Project case studies should use a stable slug, such as `app/projects/online-karaoke-system/page.tsx`.

## Build, Test, and Development Commands

After a Next.js app is initialized, use these npm scripts:

- `npm run dev` — start the local development server.
- `npm run build` — create a production build; run this before opening a pull request.
- `npm run start` — serve the production build locally.
- `npm run lint` — check code quality with ESLint.
- `npm test` — run the test suite once it is configured.

Use the package manager indicated by the committed lockfile; do not add a second lockfile.

## Coding Style & Naming Conventions

Write TypeScript and React function components. Use 2-space indentation, single quotes where the configured formatter permits, and semicolons consistently. Name components in PascalCase (`ResumeButton.tsx`), utilities in camelCase (`formatProjectTitle.ts`), and routes/directories in lowercase kebab-case (`aucc-2026-conference`).

Prefer reusable components and data-driven project pages over duplicated markup. Keep content, image alt text, and download filenames descriptive and accessible.

## Testing Guidelines

Use the repository’s configured test framework (prefer React Testing Library for UI behavior). Name tests `ComponentName.test.tsx` or `feature.test.ts`. Test visible behavior, keyboard-accessible controls, links, and PDF download actions. Run `npm test` and `npm run build` before submitting changes.

## Commit & Pull Request Guidelines

No commit history exists yet; use concise, imperative Conventional Commit-style messages, such as `feat: add project gallery` or `fix: correct resume download link`. Keep commits focused.

Pull requests should explain the user-facing change, link related issues when available, list validation performed, and include screenshots for visual changes. Do not commit secrets, personal contact credentials, or unlicensed assets.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
