# Widen the Home Content Frame

## Goal

Adjust the Vertex home page so its main desktop content uses an approximately 1440px-wide frame, instead of the current 964px maximum width.

## Instructions and sources read

- `AGENTS.md`
- Next.js 16.3.4 CSS documentation
- `app/page.tsx`
- `app/globals.css`
- `design/vertex-home.png`
- User direction to make main content about 1440px wide

## Existing state

- The shared home header, hero, courses area, and weekly update row use `width: min(100% - 60px, 964px)`.
- The home page is responsive at narrow screen widths using smaller page gutters.

## Decision

- Change the desktop shared home content frame maximum from 964px to 1440px.
- Keep fluid page gutters, the current small-screen maximum-width behavior, and no horizontal overflow.
- Rebalance only directly affected wide-frame spacing if needed; preserve the supplied visual hierarchy and do not introduce new UI or dependencies.

## Files to change

- `app/globals.css`

## Requirements and acceptance criteria

- At wide desktop viewports, the header and main content frame can occupy up to approximately 1440px.
- At viewport widths below that maximum, the content remains fluid with safe side gutters.
- The course grid, search bar, and header stay aligned to the same shared frame.
- Mobile layout remains one-column without horizontal scrolling.
- `npm run lint` and `npm run build` pass.

## Checks

1. Run `npm run lint`.
2. Run `npm run build`.
3. Inspect the home route at widths above and below 1440px and at mobile width.

## Manual test

1. Open the home page at a 1440px viewport and confirm the shared header, hero, course section, and weekly row use the wider frame.
2. Reduce the viewport below 1440px and confirm the page retains its side gutters and does not clip.
3. Check the mobile course card stack and navbar for horizontal overflow.
