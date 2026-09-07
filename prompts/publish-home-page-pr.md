# Publish Vertex Home Page Pull Request

## Goal

Commit the completed Vertex home-page implementation, push it to GitHub on a dedicated branch, and open a pull request against `main`.

## Sources inspected

- `AGENTS.md`
- Current Git working tree and branch
- Git remote configuration
- Latest repository commit

## Existing state

- Current branch: `main`.
- Remote: `origin` at `https://github.com/Bhavya-jaiswal-hub/vertex-learning-platform.git`.
- The working tree contains the approved home-page implementation, profile-avatar correction, 1440px frame update, and the three implementation prompts.
- The GitHub CLI (`gh`) is not installed in the environment, so no authenticated CLI PR creation capability is currently available.

## Plan

1. Create a dedicated branch named `feat/vertex-home-page` from the current local `main` state.
2. Commit only the current Vertex home-page changes with a concise conventional commit message.
3. Push that branch to `origin`.
4. If a GitHub PR command/API is available after the push, create a PR targeting `main` with a summary and test results. Otherwise, report the exact compare URL for the user to open the PR in GitHub.

## Files to include

- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`
- `prompts/vertex-home-page.md`
- `prompts/fix-home-profile-avatar.md`
- `prompts/widen-home-content-frame.md`

## Safety

- Do not force-push, rewrite history, reset, or include unrelated files.
- Review staged paths before committing.
- No secrets or environment files are in scope.

## Acceptance criteria

- All listed files are in one commit on `feat/vertex-home-page`.
- The branch is pushed to `origin` without force.
- A PR is opened against `main`, or the exact GitHub compare URL is provided if PR creation is blocked by the unavailable CLI.

## Checks

- `npm run lint` passed.
- `npm run build` passed.
- Verify `git status` is clean after commit and push.
