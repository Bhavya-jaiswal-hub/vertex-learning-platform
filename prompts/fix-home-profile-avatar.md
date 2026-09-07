# Fix Home Profile Avatar

## Goal

Correct the broken profile control in the home-page navbar so it visually matches the supplied Vertex reference instead of showing a dark initials badge.

## Instructions and sources read

- `AGENTS.md`
- Next.js 16.3.4 App Router and CSS documentation
- `design/vertex-home.png`
- User-supplied screenshot of the current broken navbar
- `app/page.tsx`
- `app/globals.css`

## Existing state

- The profile control is static presentation only, as specified for this surface.
- It currently contains `AM` initials over a basic CSS gradient. The visible initials and uniform dark shape do not resemble the reference portrait.
- The project has no approved local portrait image asset and no image-generation request.

## Decision

- Keep this as a decorative, CSS-drawn avatar: remove visible initials and use layered gradients/pseudo-elements to create a small warm portrait silhouette inside the circular crop.
- Retain the accessible `Open profile` button label, focus behavior, and no-op static behavior.
- Do not add dependencies, remote images, user data, authentication, or new routes.

## Files to change

- `app/page.tsx`
- `app/globals.css`

## Requirements and acceptance criteria

- The navbar profile button is a polished circular portrait-style avatar matching the warm tones and composition of the reference.
- No initials or broken-looking placeholder treatment is visible.
- The avatar stays correctly clipped, sized, and aligned at desktop and mobile widths.
- Keyboard focus remains visible and its accessible name is retained.
- `npm run lint` and `npm run build` pass.

## Checks

1. Run `npm run lint`.
2. Run `npm run build`.
3. Start the development server and inspect the navbar at desktop and mobile widths.

## Manual test

1. Open the home page and compare the header avatar against the reference image.
2. Confirm that the profile button has no visible initials and remains circular without overflow.
3. Tab to the avatar and verify its focus indicator and accessible label.
