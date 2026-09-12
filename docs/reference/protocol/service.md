---
sidebar_position: 3
---

# Service

Protocol services expose reusable business operations that can be called from routes, jobs, triggers, or other protocols.

## Why services matter

Services prevent duplicate business logic across handlers and keep protocols composable.

## Service contract

A service should define:

- A unique service identifier.
- A clear input payload contract.
- A predictable output shape.
- Error behavior that callers can handle.

## Good practices

1. Keep service IDs stable once published.
2. Validate inputs at service boundaries.
3. Make service responses explicit and documented.
4. Keep route handlers thin by delegating core logic to services.

## Calling services

Services are commonly invoked through Servable service APIs so different protocol modules can reuse behavior without tight coupling.

## Related

- [Routes](./routes)
- [Jobs](./jobs)
- [Lib](./lib)