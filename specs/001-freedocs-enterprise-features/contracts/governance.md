# Contract: Governance, Permissions, Comments, Sharing, and Trust

**Scope**: Resolved comments, public-sharing disablement, page and space permissions, verification, and approval workflows.

## Public Sharing

### User-Facing Guarantees

- Workspace administrators can disable public sharing across the entire workspace.
- Space maintainers or administrators can disable public sharing for a specific space.
- The most restrictive effective setting wins.
- Disabled public sharing prevents creation and access of public links under the restricted scope.

### Acceptance Contract

| Situation | Expected Behavior |
|---|---|
| Workspace public sharing is disabled | No space or page can be publicly shared |
| Space public sharing is disabled | Pages in that space cannot be publicly shared |
| Workspace allows sharing and space disables it | The space remains private |
| Existing public link falls under a disabled policy | The public link no longer grants access |

## Permissions

### User-Facing Guarantees

- Authorized maintainers can define view and edit permissions at space and page levels.
- Effective access is predictable and explainable.
- Restricted content is hidden from pages, search, AI, attachment results, comments, imports, and governance views.

### Acceptance Contract

| Situation | Expected Behavior |
|---|---|
| User has view permission only | User can read but cannot edit |
| User has edit permission | User can edit according to workspace rules |
| User lacks page access | Page content and related search or AI context are hidden |
| Page and space rules overlap | Effective access is deterministic and visible to authorized administrators |

## Resolved Comments

### User-Facing Guarantees

- Authorized users can mark comment threads as resolved.
- Resolved threads are removed from the active discussion view.
- Resolved threads remain available to authorized users for history.
- Reopened threads become active again.

### State Contract

```text
Active -> Resolved
Resolved -> Reopened
Reopened -> Resolved
```

## Verification and Approval

### User-Facing Guarantees

- Users can see whether a page is unverified, verified, expired, pending review, approved, rejected, or needs updates when that status affects trust.
- Verification records communicate content freshness or accuracy.
- Approval requests communicate reviewer decisions.
- Verification and approval can be related but are not the same workflow.

### Verification State Contract

```text
Unverified -> Verified
Verified -> Expired
Verified -> Needs Review
Needs Review -> Verified
Expired -> Verified
```

### Approval State Contract

```text
Draft -> Pending Review
Pending Review -> Approved
Pending Review -> Rejected
Pending Review -> Changes Requested
Changes Requested -> Pending Review
Rejected -> Pending Review
Approved -> Superseded
```

## Failure Contract

- Permission conflict: authorized administrators can inspect the effective access outcome.
- Reviewer loses access: the approval request shows that reviewer action is blocked or reassignment is required.
- Public sharing blocked: users see that sharing is disabled by workspace or space policy.
- Verification expires: the page no longer appears as currently verified.
