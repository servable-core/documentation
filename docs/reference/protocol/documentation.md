---
sidebar_position: 3
---

# Documentation

Each protocol should be documented so app teams can adopt it safely.

## Minimum documentation checklist

1. Protocol purpose and target use cases.
2. Required engine capabilities.
3. Required parameters and defaults.
4. Schema impact (classes, fields, indexes).
5. Exposed routes/functions/jobs/services.
6. Operational caveats and rollout notes.

## Suggested format

- Short summary.
- Installation and declaration example.
- Config parameters table.
- Runtime behavior details.
- Troubleshooting section.

## Tooling

Use [JSDoc](https://jsdoc.app) where applicable for code-level APIs, and keep user-facing behavior documented in this Docusaurus site.

## Related

- [Protocol index](./index)
- [Service](./service)
- [Jobs](./jobs)