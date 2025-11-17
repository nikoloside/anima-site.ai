# Repository Guidelines

## Project Structure & Module Organization
Source lives under `src/`, with feature components grouped by directory (e.g., `src/components/`). The hero loading scene currently resides at `src/components/AnimaDynamicsHero.jsx`. Entry points are `src/App.jsx` and `src/main.jsx`, while static assets belong in `public/images/`. Add shared hooks or utilities beside the feature that consumes them to keep ownership clear.

## Build, Test, and Development Commands
Run `npm install` once after cloning. Use `npm run dev` to launch the Vite dev server with hot reload at `http://localhost:5173`. Execute `npm run build` before releases to generate the production bundle in `dist/`. Preview a production build locally via `npm run preview`. Tests are not configured yet; add them under `npm test` when the suite is introduced.

## Coding Style & Naming Conventions
Prefer functional components with hooks; avoid class components. Stick to two-space indentation, PascalCase filenames for components (`LoadingOverlay.jsx`), and camelCase for helpers. Order imports as React, third-party, then local modules. Tailwind-style class lists should follow layout → spacing → color → typography for readability.

## Testing Guidelines
Adopt Jest with React Testing Library when tests are added. Co-locate specs in `__tests__/ComponentName.test.jsx` or alongside the component as `ComponentName.test.jsx`. Name tests after observable behavior (“shows reconnect prompt”). Every bug fix should include a regression test, and new UI variants need snapshot or DOM assertions.

## Commit & Pull Request Guidelines
Write concise, imperative commit subjects (“Add parallax overlay to hero”). Include context or reasoning in the body only when it adds value. Pull requests must describe the change, list verification steps (`npm run dev`, `npm run build`), and attach screenshots or recordings for UI updates. Reference related tickets and request at least one peer review before merging.

## Security & Configuration Tips
Never commit secrets; store API keys in `.env.local` (ignored by default). Reference static media through `public/images/` to avoid mixed content warnings. Keep dependencies updated monthly and audit with `npm audit` before deployments.
