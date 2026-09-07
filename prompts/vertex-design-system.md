# Vertex Design System Implementation

## Goal

Implement the root route as a responsive, high-fidelity Vertex design-system board using `design/vertex-designsystem.png` as the sole visual reference.

## Instructions and sources read

- `AGENTS.md`
- Next.js 16.3.4 App Router documentation: layouts/pages, Server and Client Components, CSS, and font optimization
- `design/vertex-designsystem.png`
- `package.json`
- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`

## Existing state

- This repository is a small Next.js 16 App Router application with Tailwind 4 available through `@import "tailwindcss"`.
- The root route currently contains a static design-system implementation in `app/page.tsx` and global styling in `app/globals.css`.
- The current implementation needs a fidelity cleanup: several intended icon and punctuation characters are mojibake, and the responsive rules carry leading `+` characters. Treat the reference image, not the existing rendering, as visual truth.
- No local font asset or icon library is installed. Do not add a package solely for icons or fonts.

## Decisions and assumptions

- Keep this as a static Server Component: the shown controls are illustrative and need native focus, hover, and disabled styling only. No client JavaScript is needed.
- Use semantic HTML, inline SVG symbols/components for the small icon set, CSS for the Vertex mark, and data-driven helpers for repeated swatches, type rows, spacing values, and cards.
- Preserve the page at `/`; do not introduce platform routes, data integration, authentication, or external assets.
- Use CSS custom properties for all visible color, radius, shadow, typography, and spacing tokens, then consume those tokens consistently across the specimen page.
- Use resilient local/system fallbacks for the display and sans faces because the supplied design does not include font assets.
- Keep the warm off-white canvas, narrow borders, 8px-rounded board panels, 4px spacing scale, orange accent, dense desktop grid, and sensible narrow-screen stacking visible in the reference.

## Files to change

- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx` only if metadata or font-variable wiring needs correction
- `tsconfig.json` to scope type checking to the actual application and exclude bundled agent-skill reference fixtures that are not part of this workspace
- `eslint.config.mjs` to exclude the same non-application fixtures from linting

## Requirements

- Render every reference section: brand and color palette; typography and type scale; spacing; radius and shadows; icon styles; button variants and states; input/select samples; badges; statuses; progress; four card types; navigation; and principles.
- Match the reference’s content hierarchy, proportions, colors, compact labels, panel borders, shadow treatments, and card layout as closely as native HTML/CSS allows.
- Make the actual input, select, and enabled buttons keyboard accessible, including a visible `:focus-visible` indicator. Mark purely decorative SVGs as hidden from assistive technology.
- Use `button type="button"` for button specimens to avoid accidental form submission if the page is embedded later.
- Remove malformed text glyphs and use valid Unicode or SVGs for all icons, arrows, separators, and status indicators.
- Fix responsive CSS so desktop remains a dense multi-column board; at medium and small widths reflow panels/cards without clipping or page-level horizontal scrolling.
- Avoid dependencies, backend calls, hardcoded external URLs, tokens, and unrelated changes.

## Security and accessibility

- This static page uses no secrets, user data, browser storage, network requests, or write operations.
- Maintain logical heading order, real labels for controls, usable color contrast, keyboard focus visibility, and disabled-button semantics.

## Acceptance criteria

- `http://localhost:3000` clearly matches the provided Vertex design-system reference at desktop size.
- No mojibake, invalid CSS syntax, clipped panels, or page-level horizontal scrolling appears at desktop or mobile widths.
- Buttons, search input, and select have usable keyboard focus states; disabled buttons are non-interactive.
- `npm run lint` and `npm run build` complete successfully.

## Checks

1. Run `npm run lint`.
2. Run `npm run build`.
3. Run `npm run dev` and visually inspect the root route.

## Manual test

1. Open `http://localhost:3000` at a 1440px-wide viewport and compare the grid, palette, type hierarchy, cards, and navigation specimens against `design/vertex-designsystem.png`.
2. Tab through the enabled buttons, search field, and select; verify an orange focus ring is clearly visible.
3. Confirm disabled button samples cannot receive an action.
4. Resize to tablet and mobile widths; verify panels stack, type/card content stays legible, and the page does not horizontally scroll.
