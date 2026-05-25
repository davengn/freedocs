# Tasks: Freedocs Free Product Scope

**Input**: Design documents from `/specs/002-freedocs-free-product-scope/`

**Prerequisites**: [plan.md](./plan.md), [spec.md](./spec.md)

**Tests**: Test tasks were not generated because the feature specification does not request TDD or explicit test-first work. Verification tasks are included in the final phase.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing. This feature has one user story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel after its phase prerequisites are met
- **[Story]**: Maps to the user story from `spec.md`
- Every task includes concrete file paths

## Phase 1: Setup

**Purpose**: Establish product-scope tracking and package identity before entitlement and UI work.

- [X] T001 Update root package metadata from Docmost to Freedocs in `package.json`
- [X] T002 [P] Update editor extension package metadata and homepage from Docmost to Freedocs in `packages/editor-ext/package.json`
- [X] T003 [P] Create a product-scope implementation audit checklist in `specs/002-freedocs-free-product-scope/implementation-notes.md`

---

## Phase 2: Foundational

**Purpose**: Define the free enterprise capability set once and make entitlement checks use it consistently.

**Critical**: Complete this phase before changing user-facing gates, otherwise UI work may still depend on stale entitlement behavior.

- [X] T004 Define an exported Freedocs free enterprise feature set for AI, MCP, imports, attachment indexing, comment resolution, sharing controls, templates, page permissions, and page verification in `apps/server/src/common/features.ts`
- [X] T005 Mirror the same Freedocs free enterprise feature set for client feature checks in `apps/client/src/ee/features.ts`
- [X] T006 Update entitlement resolution so the listed Freedocs free features are returned without an enterprise license in `apps/server/src/integrations/environment/license-check.service.ts`
- [X] T007 Update workspace entitlement responses to return the Freedocs free feature set consistently while preserving the `cloud` field in `apps/server/src/core/workspace/controllers/workspace.controller.ts`
- [X] T008 Update client feature checks to treat the listed Freedocs free features as available without overriding future non-scope features in `apps/client/src/ee/hooks/use-feature.ts`
- [X] T009 Replace paid-tier upgrade labels with governance/policy wording in `apps/client/src/ee/hooks/use-upgrade-label.ts`
- [X] T010 Document the final free feature list and entitlement behavior in `specs/002-freedocs-free-product-scope/implementation-notes.md`

**Checkpoint**: Server and client have one consistent definition of the free enterprise feature set.

---

## Phase 3: User Story 1 - Use Freedocs as a Free Enterprise Knowledge Workspace (Priority: P1)

**Goal**: Workspace owners can identify Freedocs as the product and confirm that the listed enterprise-grade capabilities are included without an enterprise-license paywall.

**Independent Test**: Review the product UI and entitlement-sensitive flows to confirm product surfaces say Freedocs, no listed capability shows enterprise-license upgrade messaging, and role/policy restrictions still appear as governance controls.

### Implementation for User Story 1

- [X] T011 [P] [US1] Change the application name returned by `getAppName()` to Freedocs in `apps/client/src/lib/config.ts`
- [X] T012 [P] [US1] Update header brand text, logo alt text, and aria label from Docmost to Freedocs in `apps/client/src/components/layouts/global/app-header.tsx`
- [X] T013 [P] [US1] Update fallback page title branding from Docmost to Freedocs in `apps/client/src/components/ui/error-404.tsx`
- [X] T014 [P] [US1] Update transactional email footer and invitation copy from Docmost to Freedocs in `apps/server/src/integrations/transactional/partials/partials.tsx` and `apps/server/src/integrations/transactional/emails/invitation-email.tsx`
- [X] T015 [P] [US1] Update release, support, and product-facing links to Freedocs destinations or neutral self-hosted destinations in `apps/client/src/components/settings/app-version.tsx` and `apps/client/src/components/settings/settings-sidebar.tsx`
- [X] T016 [US1] Reframe License and OSS edition copy so it describes Freedocs free scope instead of enterprise upgrade requirements in `apps/client/src/ee/licence/pages/license.tsx`, `apps/client/src/ee/licence/components/oss-details.tsx`, and `apps/client/src/ee/licence/components/license-message.tsx`
- [X] T017 [US1] Update settings navigation so Billing and License entries do not imply enterprise-license access is required for listed free capabilities in `apps/client/src/components/settings/settings-sidebar.tsx`
- [X] T018 [US1] Update application routes so Billing and License pages are not required paths for listed free capability access in `apps/client/src/App.tsx`
- [X] T019 [P] [US1] Remove paid upgrade prompts from AI chat, AI search, generative AI, AI settings, and MCP controls while preserving disabled-by-policy messaging in `apps/client/src/ee/ai-chat/components/enable-ai-chat.tsx`, `apps/client/src/ee/ai/components/enable-ai-search.tsx`, `apps/client/src/ee/ai/components/enable-generative-ai.tsx`, `apps/client/src/ee/ai/pages/ai-settings.tsx`, and `apps/client/src/ee/ai/components/mcp-settings.tsx`
- [X] T020 [P] [US1] Remove paid upgrade gating for Confluence, DOCX, and PDF import options while preserving unavailable-by-policy messaging in `apps/client/src/features/page/components/page-import-modal.tsx`
- [X] T021 [P] [US1] Ensure attachment indexing and AI search indicators treat attachment search as a free feature in `apps/client/src/features/search/hooks/use-unified-search.ts`, `apps/client/src/features/search/components/search-spotlight.tsx`, and `apps/client/src/features/search/components/search-spotlight-filters.tsx`
- [X] T022 [P] [US1] Ensure comment resolution controls are free but still permission-aware in `apps/client/src/features/comment/components/comment-list-item.tsx` and `apps/client/src/features/comment/components/comment-menu.tsx`
- [X] T023 [P] [US1] Remove paid public-sharing prompts while preserving administrator or policy restrictions in `apps/client/src/features/share/components/share-modal.tsx` and `apps/client/src/ee/page-permission/components/publish-tab.tsx`
- [X] T024 [P] [US1] Replace enterprise-license copy for page permissions with free-scope or governance wording in `apps/client/src/ee/page-permission/components/page-share-modal.tsx`
- [X] T025 [P] [US1] Make Templates navigation available as a free feature while preserving role or policy restrictions in `apps/client/src/components/layouts/global/global-sidebar.tsx` and `apps/client/src/features/space/components/sidebar/space-sidebar.tsx`
- [X] T026 [P] [US1] Replace paid-gate wording for sharing controls, member templates, and viewer comments with governance wording in `apps/client/src/ee/security/components/disable-public-sharing.tsx`, `apps/client/src/ee/security/components/space-public-sharing-toggle.tsx`, `apps/client/src/ee/security/components/allow-member-templates.tsx`, and `apps/client/src/ee/security/components/space-viewer-comments-toggle.tsx`
- [X] T027 [P] [US1] Remove paid-gate wording from page verification controls while preserving verifier permissions in `apps/client/src/ee/page-verification/components/page-verification-modal.tsx`
- [X] T028 [US1] Remove license/paywall blocking for listed free workspace settings while preserving role and workspace-policy validation in `apps/server/src/core/workspace/services/workspace.service.ts`
- [X] T029 [US1] Remove license/paywall blocking for listed free space settings while preserving role and workspace-policy validation in `apps/server/src/core/space/services/space.service.ts`
- [X] T030 [US1] Ensure share-context entitlement payloads include the Freedocs free feature set in `apps/server/src/core/share/share.controller.ts`

**Checkpoint**: User Story 1 can be verified independently through product identity review and listed-feature entitlement review.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Remove missed paid-tier copy, document intentional leftovers, and record verification results.

- [X] T031 [P] Audit remaining user-facing Docmost references and record replacements or intentional non-user-facing namespace leftovers in `specs/002-freedocs-free-product-scope/implementation-notes.md`
- [X] T032 [P] Audit remaining user-facing paid-tier phrases such as "enterprise license", "paid license", "Upgrade Plan", and "Upgrade to" and record replacements or justified leftovers in `specs/002-freedocs-free-product-scope/implementation-notes.md`
- [X] T033 [P] Verify package namespace leftovers that must remain for internal imports and record the rationale in `specs/002-freedocs-free-product-scope/implementation-notes.md`
- [X] T034 Run `pnpm --filter client build` and record the result in `specs/002-freedocs-free-product-scope/implementation-notes.md`
- [X] T035 Run `pnpm --filter server build` and record the result in `specs/002-freedocs-free-product-scope/implementation-notes.md`
- [X] T036 Validate the independent acceptance scenarios from `specs/002-freedocs-free-product-scope/spec.md` and record evidence in `specs/002-freedocs-free-product-scope/implementation-notes.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Phase 1. Blocks story implementation.
- **User Story 1 (Phase 3)**: Depends on Phase 2.
- **Polish (Phase 4)**: Depends on desired Phase 3 tasks being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational phase. No dependencies on other child specs.

### Within User Story 1

- Entitlement foundation tasks before UI gate removal.
- Product identity copy can proceed in parallel with UI gate removal after the foundation is complete.
- Server license/paywall blockers before final acceptance validation.

### Parallel Opportunities

- T002 and T003 can run in parallel after T001 starts.
- T011 through T015 can run in parallel after Phase 2.
- T019 through T027 can run in parallel because they touch separate UI surfaces.
- T031 through T033 can run in parallel after story implementation.

---

## Parallel Example: User Story 1

```text
Task: "Change the application name returned by getAppName() to Freedocs in apps/client/src/lib/config.ts"
Task: "Update header brand text, logo alt text, and aria label from Docmost to Freedocs in apps/client/src/components/layouts/global/app-header.tsx"
Task: "Remove paid upgrade prompts from AI surfaces in apps/client/src/ee/ai-chat/components/enable-ai-chat.tsx and related AI files"
Task: "Remove paid public-sharing prompts in apps/client/src/features/share/components/share-modal.tsx and apps/client/src/ee/page-permission/components/publish-tab.tsx"
```

---

## Implementation Strategy

### MVP First

1. Complete Phase 1 and Phase 2.
2. Complete T011 through T018 for product identity and paid-tier navigation.
3. Complete T019 through T030 for listed feature access gates.
4. Stop and validate User Story 1 independently.

### Incremental Delivery

1. Product identity first: T001, T002, T011-T015.
2. Entitlement behavior next: T004-T010, T028-T030.
3. UI paid-gate removal by feature family: AI/import/search/comment/sharing/templates/verification.
4. Polish audits and builds last.

### Notes

- Keep governance controls intact: role, admin, owner, workspace-policy, and disabled-by-policy restrictions are still valid.
- Do not rename internal `@docmost/*` import aliases unless the package migration is intentionally handled across the monorepo in a separate task set.
- Avoid changing unrelated enterprise features outside the listed Freedocs free scope unless the spec is expanded.
