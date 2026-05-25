# Quickstart: Review the Freedocs Enterprise Feature Documentation

This quickstart is for reviewing the documentation artifacts only. It does not describe implementation steps.

## 1. Read the Feature Scope

Start with [spec.md](./spec.md). It is now a parent index that links to one child specification per original user story. Confirm that the following capabilities are included in the free Freedocs scope:

- AI chat
- AI-powered writing assistance
- AI-powered search and answers
- MCP-enabled AI workflows
- Cloud model and local LLM policy
- Full-text search in PDF and DOCX attachments
- Resolved comment threads
- Workspace and space public-sharing disablement
- Confluence space importer
- DOCX importer
- PDF importer
- Workspace templates
- Page-level and space-level permissions
- Page verification workflow
- Page approval workflow

## 2. Review Product Decisions

Review the split child specs:

- [Freedocs Free Product Scope](../002-freedocs-free-product-scope/spec.md)
- [Freedocs AI Knowledge Assistance](../003-freedocs-ai-knowledge-assistance/spec.md)
- [Freedocs Knowledge Importers](../004-freedocs-knowledge-importers/spec.md)
- [Freedocs Attachment Full-Text Search](../005-freedocs-attachment-search/spec.md)
- [Freedocs Governance Workflows](../006-freedocs-governance-workflows/spec.md)
- [Freedocs Page Templates](../007-freedocs-page-templates/spec.md)

Read [research.md](./research.md) to confirm the planning decisions and alternatives. Pay special attention to:

- The definition of "free enterprise features"
- Permission-aware AI behavior
- Permission-aware attachment search
- Import fidelity expectations
- The distinction between verification and approval

## 3. Review Product Entities

Read [data-model.md](./data-model.md) to confirm that the documented concepts match how Freedocs should behave from a product perspective.

Key entities to validate:

- Workspace
- Space
- Page
- Attachment
- Comment Thread
- Public Sharing Policy
- Permission Rule
- Import Job
- Template
- AI Provider Configuration
- MCP Connection
- Verification Record
- Approval Request

## 4. Review Behavioral Contracts

Read the files in [contracts/](./contracts/) to validate expected behavior for users and administrators:

- [ai-capabilities.md](./contracts/ai-capabilities.md)
- [governance.md](./contracts/governance.md)
- [importers.md](./contracts/importers.md)
- [search-and-templates.md](./contracts/search-and-templates.md)

## 5. Validate Documentation Readiness

Use [checklists/requirements.md](./checklists/requirements.md) to confirm the specification is ready for later planning or task generation.

This documentation phase is complete when:

- No listed feature is missing from the spec.
- No requirement depends on a paid enterprise tier.
- AI, search, sharing, permissions, and workflow behavior respect user access.
- Importers have clear fidelity expectations and failure behavior.
- Verification and approval states are understandable to non-technical reviewers.

## 6. Recommended Next Step

When ready to move beyond documentation, generate tasks from these artifacts and convert the product-level behavior into implementation-ready work items.
