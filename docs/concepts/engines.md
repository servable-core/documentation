---
sidebar_position: 4
---

# What does an engine do?

An engine is the runtime bridge between Servable and your underlying framework stack.

Servable orchestrates protocols, schema composition, lifecycle phases, and wiring. The engine executes concrete framework behavior such as HTTP routing, object persistence, auth sessions, and background jobs.

## Why engines exist

Servable is protocol-oriented and engine-agnostic by design. This lets you build capabilities as protocols while keeping runtime implementation behind a clear API contract.

In practice:

- Servable decides what should happen.
- The engine decides how it happens in the selected framework.

## Common engine API domains

Engines usually provide implementations for:

- Object operations (create, update, delete, hooks).
- Query operations.
- Auth/session behavior.
- Route and function registration.
- Jobs and scheduling.
- Files and storage-related adapters.

Protocols can use these API families to expose reusable behavior.

## Example: Parse Server engine

With the Parse Server engine, Servable delegates framework-specific operations to Parse + Express adapters while keeping protocol declaration and orchestration in Servable.

This is why most app-level customization remains in model/protocol declarations, not in low-level framework boot code.

## Choosing an engine

When choosing an engine for your app:

1. Confirm it supports the API domains required by your protocols.
2. Confirm runtime requirements (Node version, infrastructure, database compatibility).
3. Test protocol behavior end-to-end in a staging environment.

If a protocol needs an API your engine does not implement, that protocol will not behave correctly even if startup succeeds.

## Related pages

- [Concepts philosophy](./philosophy)
- [Guides overview](../guides/overview)
- [Reference engine docs](../reference/engine/object)