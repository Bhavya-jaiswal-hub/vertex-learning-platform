# Scope Home Course Styles

## Goal

Prevent the home-page course-card CSS from affecting the design-system example card while preserving the current home-page appearance.

## Instructions and sources read

- `AGENTS.md`
- Next.js 16.3.4 CSS documentation
- `app/globals.css`
- `app/page.tsx`
- `app/design-system/page.tsx`

## Finding verification

- Valid: `app/page.tsx` renders the design-system course example as `className="example-card course-card"`.
- Valid: the home styling at `app/globals.css` line 53 declares global `.course-card` rules, which override the design-system `.course-card` layout because of CSS source order.
- Defensive scope: `.course-grid`, `.course-image`, and `.course-meta` are currently home-only, but will be scoped alongside `.course-card` to avoid future cross-page collisions.

## Decision

- Prefix only the home-course selectors and their responsive overrides with `.vertex-home`.
- Do not alter markup, styles outside this selector group, dependencies, or behavior.
- Skip the optional `coderabbit review --agent` command unless the executable is present locally; no installation or external documentation instructions are required for this focused CSS fix.

## Files to change

- `app/globals.css`

## Requirements and acceptance criteria

- The home page retains the current three-column desktop and one-column mobile course layout.
- The design-system `Card kind="course"` retains its established compact grid layout.
- Home selectors cannot apply to course-like elements outside `.vertex-home`.
- `npm run lint` and `npm run build` pass.

## Checks

1. Run `npm run lint`.
2. Run `npm run build`.
3. If available, run `coderabbit review --agent` as an optional local review; otherwise record that it was skipped because the executable is unavailable.

## Manual test

1. Open `/` and confirm home-course cards retain their appearance at desktop and mobile widths.
2. Open `/design-system` and confirm the Course Card example has its compact two-column cover/content layout.
