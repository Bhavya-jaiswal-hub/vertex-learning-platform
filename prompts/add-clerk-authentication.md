# Add Clerk authentication

## Goal

Set up Clerk authentication for the existing Vertex Next.js 16 App Router application using the Clerk CLI and the supplied Clerk application ID `app_3J2LPKmFVXgIUyFSqRz2K65DMCZ`. Keep public learning content browseable and add clear, accessible account controls to the existing header.

## Guidance read

- Repository `AGENTS.md`
- `clerk`, `clerk-setup`, and `clerk-cli` skills
- Next.js 16 local documentation for `proxy.ts` and authentication

## Code inspected

- `package.json`: Next.js 16.3.4, React 19.2.8, npm lockfile; no authentication dependency.
- `app/layout.tsx`: server root layout with no provider.
- `app/page.tsx`: existing public home header has placeholder notification and profile buttons.
- No `proxy.ts`, `middleware.ts`, `components.json`, or existing auth implementation was found.

## Decisions and assumptions

- Use current `@clerk/nextjs`, installed and configured by `clerk init` against the supplied Clerk app.
- This is a new authentication integration, not an auth migration.
- The home page and catalog-oriented browsing remain public. No learner feature is being newly made private in this scope.
- Replace the non-functional profile placeholder with Clerk sign-in/sign-up controls when signed out and a Clerk user menu when signed in. Preserve the existing site styling as closely as Clerk's hosted components allow.
- Do not inspect, print, commit, or expose existing secret environment values. Let the CLI create/update local environment configuration and add a committed `.env.example` containing variable names only if one is absent.

## Implementation

1. Present the requested preliminary Clerk checklist, then use the host-capable Clerk CLI flow:
   - identify the available CLI and version;
   - update it when applicable, or use the npm-compatible latest runner if unavailable/stale;
   - authenticate with `clerk auth login` and pause for browser completion if needed;
   - run `clerk init --app app_3J2LPKmFVXgIUyFSqRz2K65DMCZ` from this existing project.
2. Accept the CLI's Next.js setup where valid; otherwise apply the documented current SDK setup:
   - add `ClerkProvider` inside the root layout's `<body>`;
   - add root `proxy.ts` using Clerk's proxy helper;
   - keep public paths public and add `/__clerk/:path*` exactly once, after the API matcher where such a matcher is present;
   - do not add client-side route guards as a security boundary.
3. Add visible header controls using Clerk components: sign in and sign up while signed out, and `UserButton` while signed in. Do not duplicate controls.
4. Confirm `.gitignore` excludes local environment files and add/update `.env.example` only with `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` names and explanatory placeholders.
5. Run `clerk doctor --json`, lint, TypeScript checking (via `tsc --noEmit` if no dedicated script exists), and a production build. Start the dev server to manually verify public home rendering and Clerk controls.

## Security

- `CLERK_SECRET_KEY` remains server-only and never appears in source, browser props, logs, or version control.
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is the only Clerk key permitted in browser code.
- Future protected routes and every sensitive server route/action must verify authentication and authorization server-side; Proxy is an early route guard, not the sole defense.
- Do not make Sanity, MCP, LLM, or learner-progress credentials client-accessible.

## Expected files

- `package.json` and `package-lock.json`
- `app/layout.tsx`
- `app/page.tsx`
- `proxy.ts`
- `.gitignore` and `.env.example` as needed

## Acceptance criteria

- Clerk CLI reports the project is linked to `app_3J2LPKmFVXgIUyFSqRz2K65DMCZ` and `clerk doctor --json` is healthy.
- Root layout has a correctly placed `ClerkProvider`.
- Current Next.js `proxy.ts` convention is used and does not block public content or Clerk callback paths.
- Signed-out visitors see sign-in and sign-up actions; signed-in visitors see a Clerk user menu.
- No secret is committed or exposed to client code.
- Lint, type check, and production build outcomes are reported exactly.

## Manual test

1. Run the app and open the public home page while signed out.
2. Confirm visible Sign in and Sign up controls; complete sign-up as the first test user.
3. Confirm the signed-in header shows a user profile menu and the home page remains available.
4. Sign out from the menu and confirm the signed-out controls return.
