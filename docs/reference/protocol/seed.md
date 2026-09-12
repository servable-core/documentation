---
sidebar_position: 3
lastTouchedBy: claude-code
lastTouchedAt: "2026-09-12T11:52:43Z"
---

# Seed

Seed runs once per boot, after class registration and before routes/jobs/functions are wired. A
protocol declares a seed for itself (`type: 'protocol'`) and, independently, for each managed
class it contributes (`type: 'class'`) - each one picks its own mode.

## Manual vs auto seed

Set per protocol or per class (`protocol.loader.seedMode()` / `classSeedMode({ className })`):

- **Manual** (the default): a plain function, called with `operationProps` on every boot. There is
  no built-in state tracking for manual seeds - if you need "only create if missing" behavior,
  write it into the function yourself (the idempotent `CREATE TABLE IF NOT EXISTS`-style pattern
  used by several protocols' own bootstrap functions is exactly this).
- **Auto**: declarative - you provide `{ data, transformer, validator, uniqueRef }` and the seed
  system tracks completion for you in the utils database, so it does not re-run once successful.

## How auto-seed decides whether to re-run

Every auto-seed candidate gets a persisted `SeedState` record (`Initial` → `Loading` →
`LoadedSuccessfully` | `ErrorLoading`), keyed by the protocol or class id. On each boot, the seed
system computes a hash of:

```
sha256({ data, transformer: transformer.toString(), validator: validator?.toString(), uniqueRef: uniqueRef?.toString() })
```

and skips re-seeding only if the state is already `LoadedSuccessfully` **and** the hash matches
what was recorded last time. Because the hash includes `transformer.toString()` and
`validator.toString()`, changing the *logic* of your transformer or validator function - not just
the raw `data` - is enough to trigger a re-seed on the next boot, even if the data itself didn't
change.

## Dependency ordering

A seed candidate can declare `metadata.dependencies: [{ id }]`, naming other seed candidates (by
protocol or class id) that must run first. The seed orchestrator seeds dependencies recursively,
depth-first, before the dependent, and tracks a per-boot cache so nothing is seeded twice even if
several candidates depend on the same one. If a declared dependency isn't found among this boot's
candidates, that branch is silently skipped rather than erroring.

## Design rules

1. Keep manual seeds idempotent yourself; nothing else will make them safe to re-run.
2. Auto-seed's re-run detection is content-and-logic based (see above) - don't rely on it skipping
   just because you didn't touch the data file.
3. Keep environment-specific values in configuration, not hardcoded in seed files.
4. Use `metadata.dependencies` rather than relying on declaration order when one seed's data
   depends on another's having already run.

## Troubleshooting

If startup succeeds but expected records are missing:

1. Check startup logs for the seed phase (`Launch > Seed > Start` / `> End`).
2. Confirm the protocol/class actually declares a seed mode - a candidate with no seed
   declaration produces nothing, silently.
3. For auto-seed, check the persisted `SeedState` for that id; an `ErrorLoading` state means a
   previous attempt threw and needs investigating directly rather than assuming a fresh retry will
   just work.

## Related

- [Configurations](./configurations)
- [Service](./service)
- [Schema](./schema)
- [Transactions](../transactions)
