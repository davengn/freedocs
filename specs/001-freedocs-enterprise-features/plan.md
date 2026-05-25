# Implementation Plan: Freedocs Free Enterprise Features

**Branch**: `001-freedocs-enterprise-features` | **Date**: 2026-05-25 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-freedocs-enterprise-features/spec.md`

**Note**: This plan is documentation-only. It records product scope, current repository context, planning constraints, and design artifacts for later implementation work. It intentionally avoids implementation tasks, code-level design, or migration instructions. The original combined spec has been split into separate child specifications, one per user story.

## Summary

Freedocs is a fork of Docmost that will make selected enterprise-grade documentation capabilities available as part of the free product. The documented feature set covers product renaming, AI-assisted knowledge work, attachment full-text search, resolved comments, workspace and space public-sharing controls, Confluence/DOCX/PDF importers, reusable templates, page and space permissions, and page verification plus approval workflows.

The planning approach is to define the free product capability scope and business behavior first, then use later task generation to break the work into implementation-ready slices.

## Technical Context

**Language/Version**: TypeScript 5.9.x across a pnpm monorepo.

**Primary Dependencies**: Existing repository context includes React 18, Vite, Mantine, TipTap, NestJS 11, Fastify, Kysely, PostgreSQL-oriented database tooling, BullMQ, Typesense, AI SDK packages, MCP SDK, Mammoth, and PDF inspection utilities. These are recorded as current context, not implementation direction for this documentation phase.

**Storage**: Existing product context uses PostgreSQL-oriented database tooling and external file/object storage integrations for workspace data, pages, attachments, and related records.

**Testing**: Existing scripts include Vitest for the client, Jest for the server, e2e test configuration for the server, and Nx/pnpm build commands.

**Target Platform**: Web application with client, server, collaborative editing service, and supporting editor package.

**Project Type**: Full-stack web knowledge workspace.

**Performance Goals**: Documentation-only phase. Future implementation planning should define measurable goals for AI answer latency, attachment indexing freshness, importer throughput, search response time, and permission evaluation.

**Constraints**: Free product scope must not expose restricted content through AI, search, attachment indexing, public links, imports, comments, templates, or approval workflows. Product behavior must remain explainable to workspace administrators.

**Scale/Scope**: Multi-workspace documentation product with pages, spaces, attachments, comments, users, groups, templates, search, imports, and governance workflows.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The current `.specify/memory/constitution.md` still contains placeholder principle text and no enforceable project-specific gates. No constitution violations can be evaluated from the current file.

Gate result: **PASS for documentation-only planning**.

Planning note: before implementation tasks are generated, the project should ratify concrete principles for security, permission behavior, AI data boundaries, import fidelity, and testing standards.

## Project Structure

### Documentation (this feature)

```text
specs/001-freedocs-enterprise-features/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── checklists/
│   └── requirements.md
└── contracts/
    ├── ai-capabilities.md
    ├── governance.md
    ├── importers.md
    └── search-and-templates.md
specs/002-freedocs-free-product-scope/
├── spec.md
└── checklists/
    └── requirements.md
specs/003-freedocs-ai-knowledge-assistance/
├── spec.md
└── checklists/
    └── requirements.md
specs/004-freedocs-knowledge-importers/
├── spec.md
└── checklists/
    └── requirements.md
specs/005-freedocs-attachment-search/
├── spec.md
└── checklists/
    └── requirements.md
specs/006-freedocs-governance-workflows/
├── spec.md
└── checklists/
    └── requirements.md
specs/007-freedocs-page-templates/
├── spec.md
└── checklists/
    └── requirements.md
```

### Source Code (repository root)

```text
apps/
├── client/
│   └── src/
│       ├── components/
│       ├── ee/
│       ├── features/
│       ├── hooks/
│       ├── lib/
│       └── pages/
├── server/
│   ├── src/
│   │   ├── collaboration/
│   │   ├── common/
│   │   ├── core/
│   │   │   ├── attachment/
│   │   │   ├── auth/
│   │   │   ├── casl/
│   │   │   ├── comment/
│   │   │   ├── page/
│   │   │   ├── search/
│   │   │   ├── share/
│   │   │   ├── space/
│   │   │   └── workspace/
│   │   ├── database/
│   │   ├── integrations/
│   │   └── ws/
│   └── test/
packages/
└── editor-ext/
    └── src/
```

**Structure Decision**: Use the existing full-stack web application structure for future implementation planning. This plan does not allocate work to files or modules yet; it only records the current repository shape so later implementation tasks can be scoped safely.

## Complexity Tracking

No constitution violations or complexity exceptions are recorded for this documentation-only phase.

## Phase 0: Research Output

See [research.md](./research.md).

## Phase 1: Design Output

See [data-model.md](./data-model.md), [quickstart.md](./quickstart.md), and the behavior contracts in [contracts/](./contracts/).

## Child Specifications

- [002-freedocs-free-product-scope/spec.md](../002-freedocs-free-product-scope/spec.md)
- [003-freedocs-ai-knowledge-assistance/spec.md](../003-freedocs-ai-knowledge-assistance/spec.md)
- [004-freedocs-knowledge-importers/spec.md](../004-freedocs-knowledge-importers/spec.md)
- [005-freedocs-attachment-search/spec.md](../005-freedocs-attachment-search/spec.md)
- [006-freedocs-governance-workflows/spec.md](../006-freedocs-governance-workflows/spec.md)
- [007-freedocs-page-templates/spec.md](../007-freedocs-page-templates/spec.md)

## Post-Design Constitution Check

The generated artifacts remain documentation-only and do not introduce implementation commitments. The placeholder constitution still provides no enforceable gates.

Gate result: **PASS for documentation-only planning**.
