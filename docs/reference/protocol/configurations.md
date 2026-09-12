---
sidebar_position: 4
---

# Config

## Concept
Servable configuration lets protocols and apps change runtime behavior without requiring direct code changes for each environment.

Use configuration for values such as feature toggles, integration endpoints, limits, and policy switches.

## Configuration model

Configuration is usually organized as:

- Entries: key/value settings.
- Conditions: rules that control when entries apply.
- Groups: logical grouping for related entries.

## Implementation workflow

1. Define configuration entries in protocol or app config files.
2. Reference environment variables for deploy-specific values.
3. Validate the resolved config during startup.
4. Verify behavior in staging before production rollout.

## Safety guidance

1. Never store secrets directly in documentation examples.
2. Keep security-sensitive values in environment variables.
3. Avoid silent defaults for critical behavior.
4. Version and review configuration changes with code changes.

## Common use cases

- Restricting route behavior in production.
- Controlling scheduler settings for jobs.
- Tuning protocol-specific behavior by environment.

## Related

- [Seed](./seed)
- [System](./system)
- [Guides deployment](../../guides/deployment/kubernetes)