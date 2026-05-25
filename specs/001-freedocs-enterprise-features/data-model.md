# Data Model: Freedocs Free Enterprise Features

**Feature**: Freedocs Free Enterprise Features
**Purpose**: Capture product-level entities, relationships, validation rules, and state transitions without implementation detail.

## Workspace

**Description**: Tenant boundary for a Freedocs organization or team.

**Key Fields**:

- Name and product identity shown to users
- Members and administrators
- Workspace AI policy
- Workspace public-sharing policy
- Workspace template catalog
- Import and governance settings

**Relationships**:

- Contains spaces, users, groups, templates, AI provider configurations, MCP connections, and import jobs
- Owns workspace-level sharing and governance policy

**Validation Rules**:

- Workspace-level public-sharing disablement applies to all spaces and pages.
- Only authorized administrators can change workspace-wide AI, sharing, permission, import, and governance settings.

## Space

**Description**: Organized area of documentation within a workspace.

**Key Fields**:

- Name and description
- Maintainers and members
- Space-level public-sharing policy
- Space-level permission rules

**Relationships**:

- Belongs to one workspace
- Contains pages and attachments through pages
- Can define sharing and access behavior that combines with workspace policy

**Validation Rules**:

- Space-level public-sharing settings cannot weaken a workspace-level sharing disablement.
- Space-level permissions must be explainable together with page-level permissions.

## Page

**Description**: Editable knowledge document in Freedocs.

**Key Fields**:

- Title and content
- Parent page or hierarchy position
- Space membership
- Page-level permission rules
- Verification status
- Approval status
- Comment threads
- Attachments

**Relationships**:

- Belongs to a space
- May have parent and child pages
- May be created from a template
- May have attachments, comments, verification records, and approval requests

**Validation Rules**:

- Users can view or edit a page only according to effective permissions.
- Page trust status must be visible when it affects whether users should rely on the content.

## Attachment

**Description**: File associated with a page.

**Key Fields**:

- Filename and file type
- Parent page
- Extraction status for searchable text
- Extracted text availability
- Indexing warnings or errors

**Relationships**:

- Belongs to one page
- Appears in search only for users who can access the parent page and attachment

**Validation Rules**:

- Searchable text from attachments must not be visible to unauthorized users.
- Failed or partial extraction must be reported without corrupting the original attachment.

**State Transitions**:

```text
Pending Extraction -> Searchable
Pending Extraction -> Partially Searchable
Pending Extraction -> Extraction Failed
Partially Searchable -> Searchable
Partially Searchable -> Extraction Failed
Extraction Failed -> Pending Extraction
```

## Comment Thread

**Description**: Conversation attached to page content.

**Key Fields**:

- Thread participants
- Replies
- Active or resolved status
- Resolver and resolved date
- Reopen history, if applicable

**Relationships**:

- Belongs to a page
- References one or more users

**Validation Rules**:

- Only users with appropriate access can resolve comment threads.
- Resolved threads remain available to authorized users for history.

**State Transitions**:

```text
Active -> Resolved
Resolved -> Reopened
Reopened -> Resolved
```

## Public Sharing Policy

**Description**: Rule controlling whether content can be shared publicly.

**Key Fields**:

- Scope: workspace or space
- Public sharing allowed or disabled
- Policy owner
- Effective status

**Relationships**:

- Workspace policies apply to all spaces
- Space policies apply to pages within the space

**Validation Rules**:

- The most restrictive effective policy wins.
- Existing public links must follow the effective policy.

## Permission Rule

**Description**: View or edit access rule for workspace members, groups, spaces, or pages.

**Key Fields**:

- Subject: user, group, role, or broader membership
- Scope: space or page
- Access level: view or edit
- Grant or restriction behavior

**Relationships**:

- Applies to spaces or pages
- Combines with user and group membership

**Validation Rules**:

- Effective access must be deterministic.
- Users must not receive search, AI, attachment, import, comment, or approval visibility beyond their effective access.

## Import Job

**Description**: User-initiated migration or conversion process for external content.

**Key Fields**:

- Source type: Confluence, DOCX, or PDF
- Requested importer
- Initiating user
- Target workspace or space
- Status
- Imported page count
- Attachment count
- Warnings and failures

**Relationships**:

- Belongs to a workspace
- May create spaces, pages, attachments, and warnings

**Validation Rules**:

- Import results must identify unsupported or degraded content.
- Users can import only into destinations they are authorized to modify.

**State Transitions**:

```text
Queued -> Running
Running -> Completed
Running -> Completed With Warnings
Running -> Failed
Failed -> Queued
```

## Template

**Description**: Reusable page structure for creating new pages.

**Key Fields**:

- Template title
- Template content
- Availability scope
- Owner or maintainer
- Active or archived status

**Relationships**:

- Belongs to a workspace
- Can be used to create pages

**Validation Rules**:

- Only authorized users can create, update, archive, or restore workspace templates.
- Updating a template affects future page creation, not existing pages unless explicitly chosen by a user.

**State Transitions**:

```text
Draft -> Active
Active -> Archived
Archived -> Active
```

## AI Provider Configuration

**Description**: Workspace policy describing approved AI model sources.

**Key Fields**:

- Allowed model source: cloud, local, or both
- Availability status
- Workspace usage policy
- Administrative owner

**Relationships**:

- Belongs to a workspace
- Governs AI chat, writing assistance, AI answers, and MCP-enabled workflows

**Validation Rules**:

- AI features must respect workspace policy.
- AI prompts, answers, and source context must respect user permissions.

## MCP Connection

**Description**: Governed connection enabling AI workflows or tools in the workspace context.

**Key Fields**:

- Connection name
- Approved use cases
- Enabled or disabled status
- Authorized users or roles

**Relationships**:

- Belongs to a workspace
- Can be used by AI workflows according to policy

**Validation Rules**:

- MCP workflows must run only within the user's authorized context.
- Disabled MCP connections cannot be invoked by users.

## Verification Record

**Description**: Trust signal that page content has been checked for freshness or accuracy.

**Key Fields**:

- Page
- Verification status
- Verifier
- Verification date
- Expiration or review date, if applicable

**Relationships**:

- Belongs to one page
- May be related to an approval request

**Validation Rules**:

- Verification status must be visible to users who rely on the page.
- Expired or invalid verification must not appear as current.

**State Transitions**:

```text
Unverified -> Verified
Verified -> Expired
Verified -> Needs Review
Needs Review -> Verified
Expired -> Verified
```

## Approval Request

**Description**: Review workflow for controlled page content.

**Key Fields**:

- Page
- Requester
- Reviewers
- Status
- Review comments
- Decision date

**Relationships**:

- Belongs to one page
- References reviewer users or groups
- May update page trust status

**Validation Rules**:

- Reviewers must have the required access to review the page.
- Approval status must be clear to users who rely on the page.

**State Transitions**:

```text
Draft -> Pending Review
Pending Review -> Approved
Pending Review -> Rejected
Pending Review -> Changes Requested
Changes Requested -> Pending Review
Rejected -> Pending Review
Approved -> Superseded
```
