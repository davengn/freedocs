# Research: Freedocs Free Enterprise Features

**Feature**: Freedocs Free Enterprise Features
**Date**: 2026-05-25
**Scope**: Product and requirements analysis only. No implementation design is included.

## Decision: Treat Freedocs as the free product identity

**Rationale**: The user's primary goal is to fork Docmost, rename the product to Freedocs, and make enterprise capabilities free. Product identity and entitlement scope therefore need to be explicit requirements, not incidental copy changes.

**Alternatives considered**:

- Keep Docmost naming and document only feature availability. Rejected because it does not satisfy the requested product identity.
- Document the feature set without entitlement language. Rejected because "enterprise feature become free" is the core business requirement.

## Decision: Define "free enterprise features" as no enterprise license paywall

**Rationale**: Free availability should mean the features are included in Freedocs without an enterprise license tier, while still allowing administrators to restrict access through roles, permissions, or workspace policy.

**Alternatives considered**:

- Make all features available to every user unconditionally. Rejected because governance features require administrator control.
- Defer entitlement definition. Rejected because it would make the specification ambiguous.

## Decision: Group AI scope into chat, writing assistance, AI answers, MCP, and model-source policy

**Rationale**: The requested AI capability set spans several user jobs: conversational help, authoring assistance, search answers, extensible workflows, and model choice. Treating these as one broad "AI" feature would hide important acceptance criteria.

**Alternatives considered**:

- Document only AI chat. Rejected because it omits ask AI, AI-powered search, and MCP.
- Require only cloud models. Rejected because the request explicitly includes local LLMs.
- Require only local models. Rejected because the request explicitly allows cloud models.

## Decision: AI behavior must be permission-aware and source-verifiable

**Rationale**: AI answers can leak information if they use content the user cannot access. AI-powered search and answers also need source context so users can verify generated responses.

**Alternatives considered**:

- Allow AI to search all workspace content regardless of user access. Rejected because it violates workspace confidentiality.
- Provide answers without source context. Rejected because documentation users need trust and verification.

## Decision: Attachment full-text search covers extractable PDF and DOCX content

**Rationale**: The request specifically names PDF and DOCX attachments. The documentation should promise discoverability when text can be extracted, while acknowledging password-protected, image-only, or malformed files as edge cases.

**Alternatives considered**:

- Search attachment filenames only. Rejected because it does not satisfy "search content inside".
- Promise perfect extraction for all PDFs. Rejected because scanned or protected files may not contain extractable text.

## Decision: Resolved comments remain part of history

**Rationale**: Resolving comments should reduce active discussion noise without deleting decision history. This supports collaboration and audit needs.

**Alternatives considered**:

- Delete comments when resolved. Rejected because it loses context and accountability.
- Leave resolved comments mixed with active comments. Rejected because it weakens the value of resolving threads.

## Decision: Public sharing controls apply at workspace and space levels with the most restrictive rule winning

**Rationale**: The request includes workspace-level and space-level control. A predictable effective policy is required when both exist.

**Alternatives considered**:

- Workspace-only sharing control. Rejected because space-level control was requested.
- Space-level control overriding workspace-level disablement. Rejected because administrators need workspace-wide enforcement.

## Decision: Importers prioritize knowledge fidelity over pixel-perfect conversion

**Rationale**: Confluence, DOCX, and PDF formats can include complex source-specific behavior. The product requirement should emphasize preserved hierarchy, readable formatting, attachments, and clear warnings for degraded content.

**Alternatives considered**:

- Promise exact visual parity with source systems. Rejected because this is not a realistic product requirement for all source content.
- Import all files as attachments only. Rejected because users need editable and reusable pages where possible.

## Decision: Templates are reusable workspace assets with controlled management

**Rationale**: Templates should improve consistency across teams while preventing uncontrolled modification of shared structures.

**Alternatives considered**:

- Treat templates as ordinary copied pages only. Rejected because management and reuse requirements are stronger than one-off copying.
- Allow every user to modify workspace templates. Rejected because shared templates need governance.

## Decision: Page-level and space-level permissions must produce explainable effective access

**Rationale**: Granular permissions become risky if users and administrators cannot understand who can view or edit a page. The specification must require predictable and auditable access outcomes.

**Alternatives considered**:

- Space permissions only. Rejected because page-level permissions were requested.
- Page permissions that silently override all space rules. Rejected because effective access must be transparent.

## Decision: Verification and approval are related but distinct workflows

**Rationale**: Verification signals that content is accurate or current. Approval records reviewer decisions for changes or controlled content. Treating them as one state would reduce clarity.

**Alternatives considered**:

- Approval only. Rejected because verified/current documentation can be useful without a formal approval request.
- Verification only. Rejected because review decisions and rejection/request-changes outcomes are needed for controlled documentation.

## Decision: Defer implementation sequencing to later task generation

**Rationale**: The user explicitly asked for documentation and no implementation details. This phase should define scope and behavior so later `/speckit-tasks` work can produce implementation tasks when requested.

**Alternatives considered**:

- Produce engineering tasks now. Rejected because it conflicts with the user's instruction.
- Leave the feature list as a short note. Rejected because the user asked to analyze and document the feature set.
