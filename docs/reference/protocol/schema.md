---
sidebar_position: 3
lastTouchedBy: claude-code
lastTouchedAt: "2026-09-12T11:00:08Z"
---

# Schema

Each protocol declares its structural contributions, classes it manages and fields it adds, in
a single flat `schema.json` file at the protocol's root:

```
my-protocol/
  schema.json
  main.js
  ...
```

## File shape

```json
{
  "managed": {
    "classes": [
      {
        "className": "RefCountry",
        "fields": {
          "name": { "type": "String" },
          "code": { "type": "String" },
          "region": { "type": "String", "deprecated": true }
        }
      }
    ]
  }
}
```

- `managed.classes`: every class this protocol owns or contributes fields to.
- Each field is `{ type, targetClass?, required?, deprecated? }`. `type` follows Parse's field
  types (`String`, `Number`, `Boolean`, `Date`, `Array`, `Object`, `Pointer`, `Relation`, `ACL`,
  `File`, `GeoPoint`, `Polygon`).
- `deprecated: true` marks a field as safe to remove in a later release. See
  [`servable schema contract`](../commands/schema). It's a no-op by itself; only combined with an
  actual removal does it become consequential.

## What schema can contribute

- New classes managed by the protocol.
- Fields added to target classes (its own or another protocol's).
- Indexes and constraints.
- Class-level permissions (CLPs).

## From protocol schema to a committed artifact

An app's own `servable.schema.json` (at the app root, not a protocol's) is compiled from every
installed protocol's `schema.json` via `servable schema build`. That compiled, committed artifact,
not any individual protocol's file, is what the running server validates at boot and what
`servable schema plan`/`apply`/`contract` operate on. See
[`servable schema` command reference](../commands/schema) for the full workflow.

## Design principles

1. Keep schema changes explicit and reviewable: one field/class change per commit where possible.
2. Prefer additive changes; they apply with `servable schema apply` and need no coordination.
3. Deprecate before removing: mark a field `deprecated: true` in one release, remove it with
   `servable schema contract` in a later one.
4. Run `servable schema plan` locally before committing, and `servable schema plan --ci` in CI.

## Related

- [`servable schema` command reference](../commands/schema)
- [Guides: schema migrations](../../guides/schema-migrations)
- [Seed](./seed)
- [Configurations](./configurations)
