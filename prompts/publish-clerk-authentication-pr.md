# Publish Clerk authentication pull request

## Goal

Commit the approved Clerk authentication integration, push it to a dedicated branch, and open a GitHub pull request against `main`.

## Sources inspected

- Repository `AGENTS.md`
- Current Git working tree, branch, remote, and latest commit
- Existing publish-pull-request prompt for repository conventions

## Current state

- Branch: `main`
- Remote: `origin` → `https://github.com/Bhavya-jaiswal-hub/vertex-learning-platform.git`
- Changes in scope: Clerk SDK and lockfile, provider, proxy, hosted sign-in/sign-up routes, signed-in/signed-out header controls, CSS, and the implementation prompt.
- `.env.local` is ignored and must never be staged. `.env.example` is safe to commit and documents only configuration variable names.

## Plan

1. Create a `feat/clerk-authentication` branch from the current local `main` state.
2. Stage only the scoped Clerk files after reviewing the exact staged diff.
3. Create one conventional commit: `feat(auth): add Clerk authentication`.
4. Push the new branch to `origin` without force.
5. Use authenticated GitHub tooling to open a pull request into `main` with a concise summary and the executed checks. If PR creation is unavailable, report the exact compare URL.

## Expected staged files

- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`
- `app/sign-in/[[...sign-in]]/page.tsx`
- `app/sign-up/[[...sign-up]]/page.tsx`
- `.env.example`
- `.gitignore`
- `package.json`
- `package-lock.json`
- `proxy.ts`
- `prompts/add-clerk-authentication.md`

## Safety

- Do not stage `.env.local`, credentials, unrelated files, or ignored environment files.
- Do not force-push, reset, amend unrelated history, or change `main` directly.
- Verify the staged paths and final working tree before reporting completion.

## Acceptance criteria

- A single scoped commit exists on `feat/clerk-authentication`.
- The branch is pushed to `origin`.
- A pull request targeting `main` is opened, or a precise compare URL is supplied if tooling authentication blocks opening one.

## Checks to report

- `clerk doctor --json`: all required checks passed; production instance remains optional.
- `npm.cmd run lint`: passed.
- `npx.cmd tsc --noEmit`: passed.
- `npm.cmd run build`: passed.
