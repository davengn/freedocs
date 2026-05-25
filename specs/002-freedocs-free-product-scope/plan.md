# Implementation Plan: Freedocs Free Product Scope

**Branch**: `001-freedocs-enterprise-features` | **Date**: 2026-05-25 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-freedocs-free-product-scope/spec.md`

## Summary

Freedocs must present itself as the free product identity for this Docmost fork and remove enterprise-license paywalls from the listed enterprise-grade capabilities. The implementation plan focuses on user-facing product naming, entitlement behavior, paid-tier messaging, and upgrade/billing/license surfaces that currently communicate Docmost or enterprise-only access.

## Technical Context

**Language/Version**: TypeScript 5.9.x across a pnpm monorepo.

**Primary Dependencies**: React 18, Vite, Mantine, React Router, i18next, Jotai, TanStack Query, NestJS 11, Fastify, Kysely, PostgreSQL-oriented database tooling.

**Storage**: Existing workspace, license, billing, and entitlement fields are available in the current database model. This feature should not introduce new storage unless later implementation proves it necessary.

**Testing**: Existing scripts include `pnpm --filter client test`, `pnpm --filter client build`, `pnpm --filter server test`, and `pnpm --filter server build`.

**Target Platform**: Full-stack web knowledge workspace with client, server, and supporting editor package.

**Project Type**: Web application.

**Performance Goals**: Entitlement checks should remain lightweight and should not add user-visible latency to navigation, settings, or feature availability checks.

**Constraints**: Free product scope must not expose restricted content or bypass administrator governance controls. License/paywall restrictions should be removed only for the requested enterprise-grade capabilities, while role-based and workspace-policy restrictions remain valid.

**Scale/Scope**: Product identity and entitlement scope across workspace UI, settings, emails, feature gates, and server entitlement resolution.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The current `.specify/memory/constitution.md` still contains placeholder principle text and no enforceable project-specific gates. No constitution violations can be evaluated from the current file.

Gate result: **PASS**.

## Project Structure

### Documentation (this feature)

```text
specs/002-freedocs-free-product-scope/
├── spec.md
├── plan.md
├── tasks.md
└── checklists/
    └── requirements.md
```

### Source Code (repository root)

```text
package.json
packages/editor-ext/package.json
apps/client/src/
├── App.tsx
├── lib/config.ts
├── components/layouts/global/
├── components/settings/
├── components/ui/
├── features/
└── ee/
apps/server/src/
├── common/features.ts
├── core/workspace/
├── core/space/
├── core/share/
├── integrations/environment/
└── integrations/transactional/
```

**Structure Decision**: Use the existing client/server monorepo structure. Product identity changes belong in client/server product-facing surfaces; entitlement behavior belongs in shared feature constants, server entitlement resolution, and client feature hooks/components.

## Complexity Tracking

No constitution violations or complexity exceptions are recorded.

## Phase 0: Research Output

Research is inherited from the parent feature plan at [../001-freedocs-enterprise-features/research.md](../001-freedocs-enterprise-features/research.md). The relevant decision is to define "free enterprise features" as no enterprise license paywall while preserving administrator governance controls.

## Phase 1: Design Output

Design is driven by [spec.md](./spec.md). No new data model is required for the first implementation pass; the work uses existing product identity, entitlement, workspace, and feature-gate concepts.

## Post-Design Constitution Check

The generated plan stays within the existing project structure and preserves governance controls. The placeholder constitution still provides no enforceable gates.

Gate result: **PASS**.
