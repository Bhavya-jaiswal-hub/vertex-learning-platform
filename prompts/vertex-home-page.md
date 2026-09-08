# Vertex Home Page Implementation

## Goal

Replace the current root-route placeholder with a responsive, high-fidelity implementation of the Vertex home page shown in `design/vertex-home.png`.

## Instructions and sources read

- `AGENTS.md`
- Next.js 16.3.4 documentation: Server and Client Components and app icon conventions
- `design/vertex-home.png`
- `package.json`
- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- Existing design-system prompt and route conventions

## Existing state

- The repository is a Next.js 16.3.4 App Router application with React 19, TypeScript, and Tailwind 4.
- `app/page.tsx` currently contains the design-system implementation as well as a minimal Vertex landing route; `/design-system` uses the named `DesignSystem` export.
- Global CSS already defines the product palette, CSS-drawn Vertex mark, inline SVG icon conventions, and responsive patterns. The root route needs to become the supplied home page without breaking `/design-system`.
- No external image asset, icon package, custom font asset, content API, authentication integration, or course data source exists yet.

## Decisions and assumptions

- Implement the supplied UI as a static Server Component. The search field and calls-to-action will be accessible presentational controls/links until the future course and search routes exist; no placeholder client-side behavior or data fetching will be added.
- Preserve `/design-system` by retaining the existing exported component while replacing only the default root page and adding route-scoped home styles.
- Reproduce image-like course identities with local HTML/CSS (Next.js mark, Docker-inspired blue whale, and TypeScript square) and use an initials/avatar treatment for the header profile rather than adding or hotlinking image assets. The reference itself remains the visual source of truth.
- Use semantic header, nav, main, section, cards, buttons/links, labels, and list structures; use the established CSS Vertex mark and small inline SVGs for search, notification, arrow, chart, clock, and module metadata icons.
- Use a CSS background pattern and blurred coral blocks for the reference's page edges and lower visual rhythm. Keep all styling local and responsive, with a dense centered desktop board and sensible narrow-screen reflow.
- Update site metadata from “Vertex Design System” to the Vertex learning platform/home page description.

## Files to change

- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`

## Requirements

- Match the reference at desktop width: warm off-white background, faint diagonal ruled page edges, header, Vertex brand, Courses/My Learning nav, notification and profile affordances, centered hero, label, headline, explanatory copy, coral CTA, and large search input.
- Render the All Courses section with the three named cards and their visible description/metadata: Next.js for Production, Docker Essentials, and TypeScript Deep Dive.
- Render the lower “New courses and lessons added every week.” divider and softly blurred stepped coral decoration.
- Preserve the reference typography hierarchy: elegant high-contrast serif display/headings with clean sans body copy, while using robust local font fallbacks.
- Match borders, radii, shadows, spacing, muted text, coral accent, and icon sizing consistently with the reference and existing design system.
- Make the page responsive without a mobile reference: simplify/stack the header and hero controls as needed, turn course cards into one column on small screens, and prevent horizontal page scrolling.
- Provide visible keyboard focus states and descriptive labels for the search field, notification button, and profile control; decorative SVGs must be hidden from assistive technology.
- Do not add packages, external image URLs, API calls, secrets, client-side tokens, authentication, search backend, routes beyond the home page, or unrelated edits.

## Security and accessibility

- This static implementation uses no user data, secrets, browser storage, network requests, or writes.
- Keep interactive elements keyboard reachable, retain a clear focus indicator, provide form labels/accessible names, and use semantic landmarks and heading order.
- Buttons that do not yet perform product actions must not imply a working write operation.

## Acceptance criteria

- The root route closely recreates `design/vertex-home.png` at its desktop reference proportions.
- `/design-system` continues to render successfully.
- The page is usable at mobile widths with no clipping or horizontal document scroll.
- Course and hero details remain readable, and controls expose accessible names and focus states.
- `npm run lint` and `npm run build` pass.

## Checks

1. Run `npm run lint`.
2. Run `npm run build`.
3. Run `npm run dev` and inspect both `/` and `/design-system` at desktop and narrow viewport sizes.

## Manual test

1. Open `http://localhost:3000` at roughly 1024px width and compare the header, hero, search bar, course cards, and lower coral decoration with `design/vertex-home.png`.
2. Tab through the header controls, CTA, search field, and course links; verify each has a visible focus state and a sensible accessible name.
3. Resize to tablet and mobile widths; verify the navigation/hero/cards reflow cleanly without horizontal scrolling.
4. Open `http://localhost:3000/design-system` and verify the existing design-system board remains available.
