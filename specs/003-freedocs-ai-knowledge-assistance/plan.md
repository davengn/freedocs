# Implementation Plan: Freedocs AI Knowledge Assistance

**Branch**: `003-freedocs-ai-knowledge-assistance` | **Date**: 2026-05-25 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/003-freedocs-ai-knowledge-assistance/spec.md`

## Summary

Freedocs must provide AI chat, AI-powered writing assistance, AI-powered answers from workspace content, and MCP-enabled workflows as free product capabilities. The implementation plan focuses on completing the missing server-side AI/MCP backend for the existing client AI surfaces, supporting cloud and local model providers, preserving workspace policy controls, and enforcing page/space permissions when building AI prompts, citations, answer sources, and MCP tool context.

## Technical Context

**Language/Version**: TypeScript 5.9.x across a pnpm monorepo.

**Primary Dependencies**: React 18, Vite, Mantine, React Router, TanStack Query, Jotai, NestJS 11, Fastify, BullMQ, Kysely, PostgreSQL with pgvector-backed embeddings, and existing editor extensions.

**Storage**: Existing workspace settings, AI chat tables, AI chat message tables, attachment records, and page embedding tables. New repository/service code may be required, but no new product concept is required beyond those existing entities.

**Testing**: Existing scripts include `pnpm --filter client build`, `pnpm --filter server build`, `pnpm --filter client test`, and `pnpm --filter server test`.

**Target Platform**: Full-stack web knowledge workspace with browser client, NestJS API server, queue workers, PostgreSQL, and Redis.

**Project Type**: Web application.

**Performance Goals**: Streaming AI responses should begin promptly after provider acceptance; AI answer source retrieval should bound context size and avoid noticeably slowing normal search; embedding jobs should run asynchronously through the existing queue.

**Constraints**: AI prompts, answers, citations, previews, chat context, and MCP tool results must not expose content outside the requesting user's workspace and page/space permissions. Cloud model usage, local LLM usage, AI chat, AI search, generative AI, and MCP must remain governed by workspace settings and administrator policy, not by an enterprise-license gate.

**Scale/Scope**: One workspace-scoped AI capability set covering chat, editor writing assistance, search answers, provider configuration, embedding generation, and MCP context access.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The current `.specify/memory/constitution.md` still contains placeholder principle text and no enforceable project-specific gates. No constitution violations can be evaluated from the current file.

Gate result: **PASS**.

## Project Structure

### Documentation (this feature)

```text
specs/003-freedocs-ai-knowledge-assistance/
├── spec.md
├── plan.md
├── tasks.md
└── checklists/
    └── requirements.md
```

### Source Code (repository root)

```text
apps/client/src/
├── ee/ai/
├── ee/ai-chat/
├── features/search/
├── features/editor/components/fixed-toolbar/groups/ask-ai-group.tsx
└── components/settings/
apps/server/src/
├── core/ai/
├── core/search/
├── core/page/page-access/
├── core/workspace/
├── database/repos/
├── database/listeners/
├── integrations/environment/
└── integrations/queue/
```

**Structure Decision**: Use the existing client/server monorepo. Existing client AI chat, AI search, editor Ask AI, AI settings, and MCP settings surfaces stay in `apps/client/src/ee`. The missing backend belongs in a new `apps/server/src/core/ai` module registered from `CoreModule`, with supporting repositories under `apps/server/src/database/repos` and provider configuration in the existing environment integration.

## Complexity Tracking

No constitution violations or complexity exceptions are recorded.

## Phase 0: Research Output

Existing code review found:

- Client AI surfaces already call `/api/ai/generate`, `/api/ai/generate/stream`, `/api/ai/answers`, `/api/ai/chats/*`, and `/mcp`.
- The server currently has AI environment validation, workspace AI settings, queue names, chat migrations, embedding types, and permission-aware search/page access services.
- The bundled server does not yet include a first-class `core/ai` module, AI controllers, provider abstraction, AI chat repositories, answer source service, or MCP controller.

## Phase 1: Design Output

Design is driven by [spec.md](./spec.md). The implementation should add backend capabilities behind the existing client flows and keep the feature independently testable through four paths: AI chat, editor writing assistance, AI search answers with sources, and MCP access controlled by workspace policy.

## Post-Design Constitution Check

The generated plan stays within the existing project structure and preserves governance controls. The placeholder constitution still provides no enforceable gates.

Gate result: **PASS**.
