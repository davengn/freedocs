# Contract: AI Capabilities

**Scope**: AI chat, AI-powered writing assistance, AI-powered search answers, MCP-enabled workflows, and model-source policy.

## User-Facing Guarantees

- Users can access AI chat when AI is enabled for their workspace and role.
- Users can request writing assistance while authoring or editing pages.
- Users can ask questions and receive AI-powered answers based on content they are allowed to access.
- AI answers include enough source context for the user to verify the answer.
- Workspace administrators can allow cloud models, local LLMs, or both.
- MCP-enabled workflows are available only when approved by workspace policy.

## Access and Policy Rules

- AI must not use restricted pages, attachments, comments, or metadata in prompts, answers, citations, previews, or search context for users who lack access.
- If cloud model usage is disabled, AI features must not route user content to cloud models.
- If local LLM usage is unavailable or unhealthy, users receive a clear failure state while non-AI documentation workflows remain usable.
- Disabled MCP connections cannot be invoked.
- Users can only invoke MCP workflows inside their authorized workspace context.

## Acceptance Contract

| Situation | Expected Behavior |
|---|---|
| User asks AI about accessible content | AI responds with useful answer and source context |
| User asks AI about restricted content | AI does not reveal restricted content or confirm sensitive details |
| User requests writing help while editing | AI provides drafting, rewriting, summarizing, or improvement suggestions |
| Workspace allows cloud models only | AI uses only approved cloud model sources |
| Workspace allows local LLMs only | AI uses only approved local model sources |
| MCP connection is disabled | Workflow cannot be invoked and the user sees a clear reason |

## Failure Contract

- Missing or unavailable model source: explain that AI is temporarily unavailable or not configured.
- Insufficient permission: explain that the user cannot access the requested context.
- No relevant source content: answer should say that no matching workspace content was found.
- MCP workflow failure: explain that the workflow failed without exposing hidden system details.
