---
sidebar_position: 3
---

# Schema

Protocol schema defines structural contributions to models and managed classes.

## What schema can contribute

- New classes managed by the protocol.
- Fields added to target classes.
- Indexes and constraints.
- Validation-related metadata.

## Design principles

1. Keep schema changes explicit and reviewable.
2. Treat schema updates as migration-sensitive changes.
3. Prefer additive changes in iterative releases.
4. Validate changes in staging before production rollout.

## Recommended workflow

1. Update protocol schema files.
2. Run the app locally and inspect startup logs.
3. Confirm migration behavior and health endpoint status.
4. Deploy progressively.

## Related

- [Seed](./seed)
- [Configurations](./configurations)
- [Guides: schema migrations](../../guides/schema-migrations)

