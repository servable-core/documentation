---
sidebar_position: 3
---

# Functions

Protocol functions are cloud-code operations registered during schema wiring.

## What gets registered

Each function export is registered through `Servable.App.Cloud.define`.

Function names are resolved as:

- `key` when no prefix is provided.
- `prefix + CapitalizedKey` when a prefix is provided.

## Registration behavior

1. Functions are loaded from protocol files.
2. Each named export is read as a candidate function.
3. Registration uses `Servable.App.Cloud.define(name, handler)`.

## Function contract

A function handler is typically an async function receiving cloud request context and returning serializable payloads.

Minimal pattern:

```js
export default async ({ params, user }) => {
  return {
    ok: true,
    input: params,
    userId: user ? user.id : null
  }
}
```

## Naming guidance

1. Use stable function keys to avoid breaking clients.
2. Keep prefixing predictable when namespacing protocol APIs.
3. Document each function input/output shape in protocol docs.

## Source of truth

- server/src/launch/wireSchema/register/cloudCode/registerItem.js
- server/src/launch/wireSchema/index.js

## Related

- [Routes](./routes)
- [Service](./service)
- [Triggers](./triggers)
- [Cloud function contracts](../cloud-function-contracts)