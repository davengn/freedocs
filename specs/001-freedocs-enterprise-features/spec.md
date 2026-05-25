# Feature Specification Index: Freedocs Free Enterprise Features

**Feature Branch**: `001-freedocs-enterprise-features`

**Created**: 2026-05-25

**Status**: Split into child specifications

**Input**: User description: "This is a fork of Docmost and I want to make enterprise features free and name this product Freedocs. Document AI chat and writing assistance, AI-powered search and answers, MCP, attachment full-text search, resolved comments, disabled public sharing controls, Confluence importer, DOCX importer, PDF importer, templates, page-level permissions, and page verification and approval workflow."

## Purpose

This parent spec records the overall Freedocs product direction and links to separate child specifications, one for each original user story. The child specifications should be used for future planning, task generation, and implementation sequencing.

Freedocs is a fork of Docmost that makes selected enterprise-grade documentation capabilities available as part of the free product scope.

## Split Specifications

| Original Story | Child Spec | Focus |
|---|---|---|
| User Story 1 | [002-freedocs-free-product-scope/spec.md](../002-freedocs-free-product-scope/spec.md) | Product identity, free enterprise positioning, and no enterprise license paywall |
| User Story 2 | [003-freedocs-ai-knowledge-assistance/spec.md](../003-freedocs-ai-knowledge-assistance/spec.md) | AI chat, writing assistance, AI answers, MCP, cloud models, and local LLMs |
| User Story 3 | [004-freedocs-knowledge-importers/spec.md](../004-freedocs-knowledge-importers/spec.md) | Confluence, DOCX, and PDF importers |
| User Story 4 | [005-freedocs-attachment-search/spec.md](../005-freedocs-attachment-search/spec.md) | Full-text search inside PDF and DOCX attachments |
| User Story 5 | [006-freedocs-governance-workflows/spec.md](../006-freedocs-governance-workflows/spec.md) | Resolved comments, public sharing controls, page permissions, verification, and approval |
| User Story 6 | [007-freedocs-page-templates/spec.md](../007-freedocs-page-templates/spec.md) | Workspace page templates and reuse |

## Cross-Cutting Requirements

- Freedocs MUST make the listed enterprise-grade capabilities available without requiring an enterprise license tier.
- Administrative access to AI, sharing, permissions, importing, templates, and workflows MUST remain controllable by role, policy, or workspace configuration.
- Restricted content MUST NOT be exposed through AI, search, attachment indexing, public links, imports, comments, templates, or approval workflows.
- User-facing failure states for AI, imports, attachment indexing, sharing, permissions, and workflows MUST explain what happened and what action, if any, users can take.
- Audit-relevant governance actions MUST be attributable to the user who performed them and available to authorized reviewers.

## Shared Assumptions

- Freedocs remains a fork of Docmost and starts from the existing workspace, space, page, comment, attachment, and user concepts.
- "Free" means available in Freedocs without an enterprise license paywall, while administrators may still restrict access by role, policy, or workspace configuration.
- Implementation details remain out of scope for these specifications until a later task-generation phase.

## Success Criteria

- **SC-001**: 100% of original user stories are represented by separate child specifications.
- **SC-002**: Each child specification can be planned, clarified, and task-generated independently.
- **SC-003**: Cross-cutting access, policy, and free-product assumptions remain consistent across all child specifications.
