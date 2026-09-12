---
sidebar_position: 3
---

# System

Protocol system modules define environment-level dependencies and runtime requirements.

## Typical responsibilities

- External services required by the protocol.
- Container/runtime flags needed for local and deployed environments.
- Integration-level settings used by routes, jobs, and services.

## What belongs in system vs config

- `system`: infrastructure/runtime dependencies.
- `config`: app-facing behavior toggles and values.

## Operational guidance

1. Keep system declarations explicit and environment agnostic.
2. Document required environment variables.
3. Validate system dependencies before enabling protocol features.

## Related

- [Configurations](./configurations)
- [Seed](./seed)
- [Deployment guide](../../guides/deployment/kubernetes)
