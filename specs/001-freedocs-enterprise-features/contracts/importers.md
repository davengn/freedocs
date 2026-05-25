# Contract: Importers

**Scope**: Confluence spaces, Microsoft Word documents, and PDF files.

## Shared Import Guarantees

- Importers create Freedocs pages or page representations that users can organize and review.
- Importers report completed, partially completed, and failed work clearly.
- Importers preserve readable knowledge structure over exact visual duplication.
- Users can import only into spaces or destinations they are authorized to modify.
- Unsupported or degraded source content is summarized after import.

## Confluence Importer

### User-Facing Guarantees

- Imports Confluence spaces.
- Preserves page hierarchy and page relationships.
- Preserves readable formatting where possible.
- Preserves attachments where possible.
- Reports unsupported macros, missing attachments, duplicate names, and hierarchy issues.

### Acceptance Contract

| Situation | Expected Behavior |
|---|---|
| Space has nested pages | Freedocs creates corresponding hierarchy |
| Page has attachments | Attachments are associated with imported pages where possible |
| Page has unsupported macro | Import completes with warning when possible |
| Source content is partially unavailable | Import summary identifies missing or skipped content |

## DOCX Importer

### User-Facing Guarantees

- Imports Microsoft Word documents into editable Freedocs pages.
- Preserves headings, paragraphs, lists, tables, images, and links where possible.
- Reports unsupported objects, tracked changes, embedded files, or formatting degradation.

### Acceptance Contract

| Situation | Expected Behavior |
|---|---|
| DOCX has normal document structure | Freedocs creates an editable page with preserved readable structure |
| DOCX has tables and images | Tables and images are preserved where possible |
| DOCX has unsupported objects | Import summary identifies unsupported content |
| User lacks destination edit access | Import is blocked |

## PDF Importer

### User-Facing Guarantees

- Imports PDF files into Freedocs pages or readable page representations.
- Extracts readable text when available.
- Reports scanned, password-protected, malformed, or partially extractable PDFs.

### Acceptance Contract

| Situation | Expected Behavior |
|---|---|
| PDF has extractable text | Freedocs creates a readable imported page representation |
| PDF is image-only | User receives a clear warning about limited extractable content |
| PDF is password-protected | Import is blocked or partial with a clear warning |
| PDF content cannot be converted | Original file remains intact and the failure is reported |

## Import Job State Contract

```text
Queued -> Running
Running -> Completed
Running -> Completed With Warnings
Running -> Failed
Failed -> Queued
```

## Failure Contract

- Failed import: preserve original source file or reference where applicable and explain the failure.
- Partial import: show imported items, skipped items, and warnings.
- Permission failure: explain that the destination cannot be modified by the user.
- Duplicate content: identify conflicts and expected user action.
