# Freedocs Free Product Scope Implementation Notes

## Product Scope Audit

- Product identity target: Freedocs.
- Free feature entitlement target: AI, MCP, attachment indexing, comment resolution, sharing controls, Confluence import, DOCX import, PDF import, templates, viewer comments, page permissions, and page verification.
- Governance controls remain valid: user role, workspace policy, space policy, restricted page, and infrastructure readiness checks.

## Task Evidence

- T001: Root package name and homepage changed to Freedocs metadata.
- T002: Editor extension homepage changed to Freedocs metadata. The internal package name remains `@docmost/editor-ext` to avoid a monorepo package-namespace migration in this feature.
- T003: This implementation audit checklist was created.
- T004: Server `FREEDOCS_FREE_FEATURES` includes AI, MCP, Confluence/DOCX/PDF imports, attachment indexing, comment resolution, sharing controls, templates, viewer comments, page permissions, and page verification.
- T005: Client `FREEDOCS_FREE_FEATURES` mirrors the same feature list for local feature checks.
- T006: License feature checks now return true for the Freedocs free feature set and merge it into resolved feature payloads.
- T007: Workspace entitlement responses continue to include `cloud`, `tier`, and a resolved `features` list that includes Freedocs free features.
- T008: Client `useHasFeature()` treats only the Freedocs free feature set as locally available before falling back to entitlement payloads for every other feature.
- T009: Upgrade labels now use workspace-policy wording rather than paid-license wording.
- T010: Final free feature behavior is documented in this file.
- T011-T018: Product identity, settings navigation, product-scope copy, and compatibility routing were updated so Freedocs identity and free-scope pages do not route users through billing/license paywalls.
- T019-T027: UI feature gates now resolve as available through the free feature set; stale paid-plan copy was replaced with policy wording where fallback gated states still exist.
- T028: Workspace updates for MCP, public sharing controls, and member templates now use the Freedocs free feature set. SCIM, API restriction, and retention checks remain outside this free-scope story.
- T029: Space public-sharing controls and viewer comments now use free-scope feature keys while workspace/space policy restrictions remain enforced.
- T030: Share context payloads use `resolveFeatures()`, which now includes the Freedocs free feature set.
- T031: Product-name audit found no remaining user-facing Docmost strings in `apps/client/src` or product email surfaces. Remaining matches are internal import metadata helpers (`readDocmostMetadata`), the telemetry endpoint constant, and the existing EE license notice.
- T032: Paid-tier phrase audit found no remaining matches for upgrade/paywall wording in `apps/client/src`, `apps/server/src`, or this implementation note after hosted-trial copy was reframed as administrator-managed service continuity.
- T033: Internal namespace leftovers remain intentionally: `@docmost/*` package imports, `@docmost/editor-ext`, import metadata names, and upstream legal/license files. Renaming these requires a separate monorepo package and attribution migration.

## Verification

- `git diff --check`: passed; only line-ending warnings were reported by Git.
- `pnpm --filter client build`: failed because dependencies are not installed in the workspace (`tsc: command not found`, `node_modules missing`).
- `pnpm --filter server build`: failed because dependencies are not installed in the workspace (`nest: command not found`, `node_modules missing`).
- Formatting attempt: `pnpm exec prettier --write ...` could not run because no root Prettier executable is installed; the package manager also attempted to use the user-level pnpm tool cache outside the sandbox before the escalated retry reported `Command "prettier" not found`.

## Acceptance Evidence

- Scenario 1: Workspace and share entitlement payloads call `resolveFeatures()`, which now always merges the Freedocs free feature set. Client `useHasFeature()` mirrors that free set, so AI, MCP, imports, attachment search, comments, sharing controls, templates, page permissions, viewer comments, and verification are no longer dependent on a license payload.
- Scenario 2: Primary product identity now returns and displays Freedocs in app config, header, auth layout, 404 title, email copy/footer, default mail sender name, AI empty states, public-share branding, and product-scope settings.
- Scenario 3: Former upgrade/paywall messaging for listed capabilities was replaced with free-scope or workspace-policy wording. Role, administrator, disabled-sharing, restricted-page, and infrastructure-readiness checks remain in place as governance controls.
