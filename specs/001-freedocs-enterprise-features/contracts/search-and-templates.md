# Contract: Search and Templates

**Scope**: Full-text search in PDF and DOCX attachments, AI answer source behavior, and workspace page templates.

## Attachment Full-Text Search

### User-Facing Guarantees

- Search includes extractable text from PDF attachments.
- Search includes extractable text from DOCX attachments.
- Search results identify the related attachment and parent page.
- Search results obey the same permissions as the parent page and attachment.
- Extraction failures are visible to authorized users when relevant.

### Acceptance Contract

| Situation | Expected Behavior |
|---|---|
| PDF attachment contains searchable phrase | Search returns the attachment or parent page for authorized users |
| DOCX attachment contains searchable phrase | Search returns the attachment or parent page for authorized users |
| User lacks access to parent page | Search does not expose the attachment result |
| Attachment extraction fails | Authorized users can see that the attachment is not searchable or only partially searchable |

### Extraction State Contract

```text
Pending Extraction -> Searchable
Pending Extraction -> Partially Searchable
Pending Extraction -> Extraction Failed
Partially Searchable -> Searchable
Partially Searchable -> Extraction Failed
Extraction Failed -> Pending Extraction
```

## AI Answer Source Behavior

### User-Facing Guarantees

- AI answer sources may include pages and attachments only when the user can access them.
- Source context is sufficient for answer verification.
- Missing or unavailable attachment text does not create false source claims.

### Acceptance Contract

| Situation | Expected Behavior |
|---|---|
| Searchable attachment supports answer | AI may cite or reference it for authorized users |
| Attachment is restricted | AI does not reveal or cite it |
| Attachment text is unavailable | AI does not claim to have used extracted content |

## Templates

### User-Facing Guarantees

- Authorized users can create reusable workspace templates.
- Users can create new pages from available templates.
- Template updates affect future page creation unless users explicitly update existing pages.
- Template management is restricted to authorized users.

### Acceptance Contract

| Situation | Expected Behavior |
|---|---|
| User creates page from template | New page starts with template structure and content |
| Template is updated | Future pages use the updated template |
| Existing page was created from template | Existing page remains under user control |
| User lacks template management access | Template creation or editing is denied |

### Template State Contract

```text
Draft -> Active
Active -> Archived
Archived -> Active
```

## Failure Contract

- Attachment cannot be indexed: report searchable status without blocking normal attachment use.
- Search source is restricted: omit the result without exposing hidden metadata.
- Template unavailable or archived: prevent new page creation from that template and show a clear message.
- Template permission denied: explain that the user lacks template management access.
