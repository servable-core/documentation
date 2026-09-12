---
sidebar_position: 3
---

# Lib

`lib` contains protocol-internal helpers shared by class, triggers, functions, routes, and jobs.

## Purpose

Use `lib` for reusable logic that does not need to be exposed as public protocol API.

Examples:

- Payload normalization.
- Shared validation helpers.
- Query/filter builders.
- Formatting and mapping helpers.

## Structure recommendation

```bash
lib/
	index.js
	validation.js
	mapping.js
	query.js
```

## Rules of thumb

1. Keep helpers pure when possible.
2. Avoid direct side effects unless required by protocol behavior.
3. Export only what protocol modules consume.

## Related

- [Service](./service)
- [Functions](./functions)
- [Triggers](./triggers)
