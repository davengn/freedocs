# Tasks: Freedocs AI Knowledge Assistance

**Input**: Design documents from `/specs/003-freedocs-ai-knowledge-assistance/`

**Prerequisites**: [plan.md](./plan.md), [spec.md](./spec.md)

**Tests**: Test tasks were not generated because the feature specification does not request TDD or explicit test-first work. Verification tasks are included in the final phase.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing. This feature has one user story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel after its phase prerequisites are met
- **[Story]**: Maps to the user story from `spec.md`
- Every task includes concrete file paths

## Phase 1: Setup

**Purpose**: Establish implementation tracking and provider configuration documentation before backend work begins.

- [ ] T001 Create AI implementation notes and acceptance evidence tracker in `specs/003-freedocs-ai-knowledge-assistance/implementation-notes.md`
- [ ] T002 [P] Document cloud and local AI environment variables for administrators in `apps/server/README.md`
- [ ] T003 [P] Record the current AI client/server endpoint gap analysis in `specs/003-freedocs-ai-knowledge-assistance/implementation-notes.md`

---

## Phase 2: Foundational

**Purpose**: Add the shared backend foundations that all AI chat, writing, search, and MCP flows require.

**Critical**: Complete this phase before implementing story flows, otherwise client surfaces will continue calling missing or policy-blind endpoints.

- [ ] T004 Create `AiModule` and register it from `CoreModule` in `apps/server/src/core/ai/ai.module.ts` and `apps/server/src/core/core.module.ts`
- [ ] T005 [P] Create AI request/response DTOs in `apps/server/src/core/ai/dto/ai-generate.dto.ts`, `apps/server/src/core/ai/dto/ai-answer.dto.ts`, and `apps/server/src/core/ai/dto/ai-chat.dto.ts`
- [ ] T006 [P] Create AI provider contracts and streaming event types in `apps/server/src/core/ai/interfaces/ai-provider.interface.ts`
- [ ] T007 Implement provider selection from environment configuration in `apps/server/src/core/ai/services/ai-provider.service.ts`
- [ ] T008 [P] Implement OpenAI and OpenAI-compatible provider adapters in `apps/server/src/core/ai/providers/openai.provider.ts`
- [ ] T009 [P] Implement Gemini provider adapter in `apps/server/src/core/ai/providers/gemini.provider.ts`
- [ ] T010 [P] Implement Ollama local LLM provider adapter in `apps/server/src/core/ai/providers/ollama.provider.ts`
- [ ] T011 Create AI chat and embedding repositories in `apps/server/src/database/repos/ai/ai-chat.repo.ts`, `apps/server/src/database/repos/ai/ai-chat-message.repo.ts`, and `apps/server/src/database/repos/ai/page-embedding.repo.ts`
- [ ] T012 Create workspace AI policy checks for chat, generative AI, search, and MCP in `apps/server/src/core/ai/services/ai-policy.service.ts`
- [ ] T013 Create permission-safe source context filtering using page and space permissions in `apps/server/src/core/ai/services/ai-source-access.service.ts`
- [ ] T014 [P] Create server-sent event formatting helpers for streaming AI responses in `apps/server/src/core/ai/utils/sse.util.ts`
- [ ] T015 Update AI environment validation and accessors for completion, chat, embedding, OpenAI-compatible, Gemini, and Ollama configuration in `apps/server/src/integrations/environment/environment.validation.ts` and `apps/server/src/integrations/environment/environment.service.ts`

**Checkpoint**: The server can resolve AI providers, enforce workspace policy, filter source context, and expose reusable AI infrastructure.

---

## Phase 3: User Story 1 - Find and Improve Knowledge with AI (Priority: P1)

**Goal**: Workspace members can use AI chat, editor writing assistance, AI-powered answer search, cloud/local model policy, and approved MCP workflows without relying on an enterprise tier.

**Independent Test**: A member can complete AI chat, Ask AI writing assistance, AI answer search with sources, and an MCP workflow in one workspace while restricted pages remain hidden from prompts, answers, citations, previews, and tool output.

### Implementation for User Story 1

- [ ] T016 [US1] Create the AI API controller for `/ai/generate`, `/ai/generate/stream`, `/ai/answers`, `/ai/config`, and `/ai/chats/*` routes in `apps/server/src/core/ai/ai.controller.ts`
- [ ] T017 [US1] Implement non-streaming and streaming writing assistance generation in `apps/server/src/core/ai/services/ai-generation.service.ts`
- [ ] T018 [P] [US1] Define writing action prompt templates for improve, fix grammar, shorten, lengthen, simplify, tone, summarize, explain, continue, translate, and custom requests in `apps/server/src/core/ai/prompts/writing-actions.ts`
- [ ] T019 [US1] Implement AI chat creation, listing, search, title update, deletion, and message loading in `apps/server/src/core/ai/services/ai-chat.service.ts`
- [ ] T020 [US1] Implement AI chat send streaming with persisted user and assistant messages in `apps/server/src/core/ai/services/ai-chat-stream.service.ts`
- [ ] T021 [US1] Implement chat page mention and current-page context resolution with permission filtering in `apps/server/src/core/ai/services/ai-chat-context.service.ts`
- [ ] T022 [US1] Connect AI chat file upload and attachment cleanup to existing attachment storage rules in `apps/server/src/core/ai/services/ai-chat-attachment.service.ts` and `apps/server/src/core/attachment/services/attachment.service.ts`
- [ ] T023 [US1] Implement AI answer retrieval over searchable workspace content with bounded context and source citations in `apps/server/src/core/ai/services/ai-answer.service.ts`
- [ ] T024 [US1] Implement embedding generation for pages and supported attachment text chunks in `apps/server/src/core/ai/services/ai-embedding.service.ts`
- [ ] T025 [US1] Implement AI queue processing for workspace/page embedding create and delete jobs in `apps/server/src/core/ai/processors/ai-queue.processor.ts`
- [ ] T026 [US1] Ensure page, workspace, and space listeners enqueue embedding jobs only when AI search is enabled in `apps/server/src/database/listeners/page.listener.ts`, `apps/server/src/database/listeners/workspace.listener.ts`, and `apps/server/src/database/listeners/space.listener.ts`
- [ ] T027 [US1] Ensure AI answer source metadata includes page title, slug, space slug, chunk location, similarity, and excerpt in `apps/server/src/core/ai/dto/ai-answer.dto.ts`
- [ ] T028 [US1] Implement AI configuration response for admin and member UI state in `apps/server/src/core/ai/services/ai-config.service.ts`
- [ ] T029 [P] [US1] Update client AI service functions to consume `/ai/config` and improved streaming errors in `apps/client/src/ee/ai/services/ai-service.ts`, `apps/client/src/ee/ai/queries/ai-query.ts`, and `apps/client/src/ee/ai/types/ai.types.ts`
- [ ] T030 [P] [US1] Update editor Ask AI menu loading and failure states for unavailable model or policy-disabled generation in `apps/client/src/ee/ai/components/editor/ai-menu/ai-menu.tsx` and `apps/client/src/ee/ai/components/editor/ai-menu/result-preview.tsx`
- [ ] T031 [P] [US1] Update AI search result rendering to show verifiable source context and clear unavailable-content messages in `apps/client/src/ee/ai/components/ai-search-result.tsx` and `apps/client/src/features/search/components/search-spotlight.tsx`
- [ ] T032 [P] [US1] Update AI chat client error handling for policy, provider, attachment, and permission failures in `apps/client/src/ee/ai-chat/services/ai-chat-service.ts`, `apps/client/src/ee/ai-chat/components/chat-input.tsx`, and `apps/client/src/ee/ai-chat/components/chat-message.tsx`
- [ ] T033 [P] [US1] Update AI settings to show configured cloud/local provider status and policy toggles in `apps/client/src/ee/ai/pages/ai-settings.tsx`, `apps/client/src/ee/ai/components/enable-ai-search.tsx`, `apps/client/src/ee/ai/components/enable-generative-ai.tsx`, and `apps/client/src/ee/ai-chat/components/enable-ai-chat.tsx`
- [ ] T034 [US1] Implement the root `/mcp` endpoint for approved MCP workflows in `apps/server/src/core/ai/mcp/mcp.controller.ts`
- [ ] T035 [US1] Implement MCP workspace tools for permission-filtered page search, page read, and answer generation in `apps/server/src/core/ai/mcp/mcp.service.ts`
- [ ] T036 [P] [US1] Update MCP settings copy and state for unavailable model, disabled policy, and copied endpoint feedback in `apps/client/src/ee/ai/components/mcp-settings.tsx`
- [ ] T037 [US1] Ensure AI and MCP remain included in the free Freedocs feature set without weakening role or workspace-policy checks in `apps/server/src/common/features.ts`, `apps/server/src/integrations/environment/license-check.service.ts`, `apps/client/src/ee/features.ts`, and `apps/client/src/ee/hooks/use-feature.ts`

**Checkpoint**: User Story 1 can be verified independently through AI chat, Ask AI, AI answer search, provider policy, and MCP workflows.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Validate security boundaries, build health, and acceptance evidence.

- [ ] T038 [P] Audit AI prompts, chat context, answer sources, citations, previews, and MCP tool output for restricted-content leakage and record results in `specs/003-freedocs-ai-knowledge-assistance/implementation-notes.md`
- [ ] T039 [P] Audit AI and MCP user-facing failures for actionable messages when providers, local LLMs, source content, or workspace policy are unavailable in `specs/003-freedocs-ai-knowledge-assistance/implementation-notes.md`
- [ ] T040 Run `pnpm --filter server build` and record the result in `specs/003-freedocs-ai-knowledge-assistance/implementation-notes.md`
- [ ] T041 Run `pnpm --filter client build` and record the result in `specs/003-freedocs-ai-knowledge-assistance/implementation-notes.md`
- [ ] T042 Validate all acceptance scenarios from `specs/003-freedocs-ai-knowledge-assistance/spec.md` and record evidence in `specs/003-freedocs-ai-knowledge-assistance/implementation-notes.md`

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

- Provider, policy, source-access, repository, and SSE foundations before route implementation.
- Server endpoints before client error/state refinements.
- AI answer source filtering before exposing citations in the client.
- MCP tools must reuse the same policy and source-access services as AI chat/search.

### Parallel Opportunities

- T002 and T003 can run in parallel after T001 starts.
- T005, T006, T014, and provider adapter tasks can proceed in parallel once module scaffolding exists.
- T029 through T033 and T036 can proceed in parallel after corresponding server endpoints return stable response shapes.
- T038 and T039 can run in parallel after story implementation.

---

## Parallel Example: User Story 1

```text
Task: "Define writing action prompt templates in apps/server/src/core/ai/prompts/writing-actions.ts"
Task: "Update client AI service functions in apps/client/src/ee/ai/services/ai-service.ts and related AI query/type files"
Task: "Update AI search result rendering in apps/client/src/ee/ai/components/ai-search-result.tsx and apps/client/src/features/search/components/search-spotlight.tsx"
Task: "Update MCP settings state in apps/client/src/ee/ai/components/mcp-settings.tsx"
```

---

## Implementation Strategy

### MVP First

1. Complete Phase 1 and Phase 2.
2. Complete T016 through T018 for editor writing assistance.
3. Complete T019 through T022 for AI chat.
4. Stop and validate chat and writing assistance independently.

### Incremental Delivery

1. Backend foundations first: module registration, provider selection, policy, source access, repositories, and SSE helpers.
2. Writing assistance next because it has the smallest source-context surface.
3. AI chat next with persisted conversations, mentions, and attachments.
4. AI answer search next with embeddings and citations.
5. MCP last, reusing the same policy and permission-safe source services.
6. Polish audits and builds last.

### Notes

- Keep role, administrator, workspace-policy, and page/space permission checks intact.
- Do not send restricted page content, restricted attachment text, hidden citations, or unauthorized previews to any cloud provider, local LLM, chat history, answer source list, or MCP tool response.
- Keep AI and MCP free of enterprise-license gates while preserving governance controls.
