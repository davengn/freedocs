# Feature Specification: Freedocs Free Product Scope

**Feature Branch**: `001-freedocs-enterprise-features`

**Feature Directory**: `002-freedocs-free-product-scope`

**Created**: 2026-05-25

**Status**: Draft

**Parent Spec**: [001-freedocs-enterprise-features](../001-freedocs-enterprise-features/spec.md)

**Input**: Original User Story 1 from spec 001.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Use Freedocs as a Free Enterprise Knowledge Workspace (Priority: P1)

Workspace owners can present Freedocs as a free, self-contained knowledge workspace that includes enterprise-grade collaboration, governance, importing, search, and AI capabilities without feature paywalls.

**Why this priority**: This is the core product positioning: Freedocs must make formerly enterprise-only capabilities available to all workspaces while clearly communicating the product name and scope.

**Independent Test**: A workspace owner can review the product capability set and confirm that every listed enterprise feature is available as part of the free Freedocs offering.

**Acceptance Scenarios**:

1. **Given** a workspace using Freedocs, **When** an owner reviews available workspace features, **Then** AI, import, search, sharing control, templates, permissions, comments, and verification capabilities are included without enterprise-only gating.
2. **Given** a new workspace is created, **When** users interact with the product, **Then** the product is identified as Freedocs in user-facing product naming.
3. **Given** a team evaluates Freedocs against an enterprise documentation product, **When** they compare required collaboration and governance features, **Then** the listed enterprise capabilities are available in Freedocs' free scope.

### Edge Cases

- A capability remains visible as enterprise-only in product copy, billing copy, settings, upgrade prompts, or documentation.
- The product name appears inconsistently as Docmost and Freedocs across user-facing surfaces.
- A feature is free but still hidden behind a role, workspace setting, or disabled policy; users must be able to distinguish policy restrictions from license restrictions.
- Existing workspaces created before the product rename retain stale product naming or entitlement messaging.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Freedocs MUST expose the product name "Freedocs" in primary user-facing product identity surfaces.
- **FR-002**: Freedocs MUST make the requested enterprise-grade capabilities available without requiring an enterprise license tier.
- **FR-003**: Users MUST NOT be prompted to upgrade to an enterprise tier to use AI, imports, attachment search, resolved comments, sharing controls, templates, page permissions, verification, or approval workflows.
- **FR-004**: Administrative role, policy, and workspace configuration restrictions MUST be presented as governance controls, not as paid-tier restrictions.
- **FR-005**: Product-facing documentation MUST describe Freedocs as the free product containing the documented enterprise-grade capabilities.
- **FR-006**: Existing references to the upstream product identity in user-facing surfaces MUST be reviewed for Freedocs naming consistency.

### Key Entities *(include if feature involves data)*

- **Workspace**: A Freedocs tenant boundary where free product scope is experienced by users and governed by administrators.
- **Product Identity**: User-facing naming, branding, and product copy that identifies the product as Freedocs.
- **Capability Entitlement**: Product-level availability rule indicating that listed enterprise-grade features are included without an enterprise license paywall.
- **Governance Restriction**: Role, policy, or workspace configuration restriction that may limit feature access without making the feature paid.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of listed enterprise capabilities are documented as part of the free Freedocs product scope.
- **SC-002**: A workspace owner can identify the Freedocs product name and free enterprise feature scope from product-facing documentation without ambiguity.
- **SC-003**: No listed capability requires an enterprise-license upgrade prompt to access its core workflow.
- **SC-004**: Users can distinguish administrator-disabled features from paid-tier restrictions in relevant product messaging.

## Assumptions

- "Free" means available without an enterprise license paywall, not automatically enabled for every role or workspace.
- Administrators may still disable or restrict features for governance, compliance, or operational reasons.
- Product renaming applies to user-facing product identity and documentation; legal or upstream attribution requirements are outside this spec.
