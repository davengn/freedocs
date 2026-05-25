# Feature Specification: Freedocs Attachment Full-Text Search

**Feature Branch**: `001-freedocs-enterprise-features`

**Feature Directory**: `005-freedocs-attachment-search`

**Created**: 2026-05-25

**Status**: Draft

**Parent Spec**: [001-freedocs-enterprise-features](../001-freedocs-enterprise-features/spec.md)

**Input**: Original User Story 4 from spec 001.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover Knowledge Across Pages and Attachments (Priority: P2)

Workspace members can search not only page text but also text contained inside PDF and DOCX attachments, so attached documents are discoverable from workspace search.

**Why this priority**: Enterprise knowledge often lives in attached files; search quality is essential once teams migrate larger documentation sets.

**Independent Test**: A member can attach PDF and DOCX files containing unique phrases, search for those phrases, and find the related page or attachment result.

**Acceptance Scenarios**:

1. **Given** a PDF attachment contains searchable text, **When** a member searches for a phrase inside that PDF, **Then** the related attachment and parent page appear in search results.
2. **Given** a DOCX attachment contains searchable text, **When** a member searches for a phrase inside that DOCX, **Then** the related attachment and parent page appear in search results.
3. **Given** a member lacks permission to view a page or attachment, **When** they search for text contained in that restricted content, **Then** the restricted result is not disclosed.

### Edge Cases

- Attachment text extraction fails, produces partial text, or encounters password-protected files.
- PDF content is image-only or otherwise lacks extractable text.
- DOCX files contain embedded objects or unsupported structures.
- Attachment access differs from parent page access due to future policy changes.
- Search results reference stale extracted text after an attachment is replaced or deleted.
- AI-powered answers use attachment search context and must respect the same access rules.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Freedocs MUST index searchable text from PDF attachments when content can be extracted.
- **FR-002**: Freedocs MUST index searchable text from DOCX attachments when content can be extracted.
- **FR-003**: Attachment search results MUST identify the related attachment and parent page.
- **FR-004**: Attachment search results MUST honor the same access restrictions as their parent pages and files.
- **FR-005**: Failed or partial attachment text extraction MUST be visible to authorized users when relevant.
- **FR-006**: Attachment search MUST NOT corrupt or modify the original attachment file.
- **FR-007**: Attachment search capability MUST be included in the free Freedocs product scope without an enterprise-license gate.

### Key Entities *(include if feature involves data)*

- **Page**: Parent document that owns or references searchable attachments.
- **Attachment**: File associated with a page, including original metadata and text extraction status.
- **Extracted Attachment Text**: Searchable text derived from a PDF or DOCX attachment.
- **Search Result**: User-visible match that may reference a page, attachment, or source context.
- **Permission Rule**: Access rule that determines whether attachment-derived text can be disclosed.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can find text contained in searchable PDF attachments through workspace search when they have permission to view the content.
- **SC-002**: Users can find text contained in searchable DOCX attachments through workspace search when they have permission to view the content.
- **SC-003**: Restricted attachment content is not disclosed through search results, snippets, previews, or AI answer context.
- **SC-004**: Extraction failures or partial extraction states provide actionable messages to authorized users.
- **SC-005**: Attachment full-text search is available without an enterprise-license gate.

## Assumptions

- Attachment full-text search applies to extractable PDF and DOCX text.
- Scanned image-only PDFs may require a separate OCR decision outside this spec.
- Parent page permissions are the default access boundary unless a stricter attachment policy exists.
