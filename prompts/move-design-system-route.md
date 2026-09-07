# Move the Vertex Design System Route

## Goal

Serve the existing Vertex design-system page at `/design-system` instead of the root route, and leave `/` available as a minimal application landing route.

## Context read

- `AGENTS.md`
- Next.js 16.3.4 App Router documentation for layouts and pages
- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`

## Decisions

- Use Next.js App Router file-system routing: relocate the current page component to `app/design-system/page.tsx`.
- Add a deliberately minimal root page that identifies Vertex and links to `/design-system`; do not invent unrelated product UI.
- Keep the existing design-system styles globally available because the route continues to depend on them.
- Preserve the root layout, metadata, visual implementation, and no-client-JavaScript approach.

## Files expected to change

- `app/page.tsx`
- `app/design-system/page.tsx`

## Security and accessibility

- No data access, secrets, network requests, or writes are introduced.
- Give the root-page link a visible keyboard focus state through the existing global focus styles.

## Acceptance criteria

- `http://localhost:3000/design-system` displays the complete existing design-system board.
- `http://localhost:3000/` no longer displays that board and offers a working link to `/design-system`.
- Lint and production build pass.

## Checks and manual test

1. Run `npm run lint`.
2. Run `npm run build`.
3. Open `/` and follow its link to `/design-system`.
4. Reload `/design-system` directly and verify the board renders.
