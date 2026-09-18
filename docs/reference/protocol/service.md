---
sidebar_position: 3
lastTouchedBy: claude-code
lastTouchedAt: "2026-09-18T07:11:29Z"
---

# Service

A protocol's `services/` directory holds reusable operations other protocols, routes, and jobs
call by id, without importing the protocol's own files directly.

## The real shape

One file per service under `services/` (nesting is allowed, e.g.
`services/payout/finak/request.js`). The default export is a plain object, not a function:

```js
// services/checkAuth.js
export default {
  id: '@my-scope/myprotocol.checkAuth',
  handler: async ({ params, protocol }) => {
    // ...
    return { ok: true }
  },
}
```

`id` should be namespaced with the protocol's own id (as above) to avoid colliding with another
protocol's service - the registry keys purely on this string, with no other scoping. `version`
is optional (defaults to `1.0.0`); `register(props)`, if present, is called once at boot with the
resolved `protocol` instance, before the service becomes callable.

## Calling a service

```js
const result = await Servable.Services.call({
  id: '@my-scope/myprotocol.checkAuth',
  params: { token: 'xyz' },
})
```

`call({ id, version, params })` looks the service up by `id`/`version` and invokes
`handler({ params, protocol })` - `protocol` is threaded through automatically from whatever was
registered, not something a caller supplies. If no service matches, `call()` returns an `Error`
rather than throwing (check the return value, not a try/catch, if you need to distinguish "not
found" from a real handler failure).

Both `register()`/`call()` take a single object argument - not `(id, ...args)`.

## Real autocomplete on `id` and `params`

`Servable.Services.call({ id, params })` accepts any string for `id` and any shape for `params` by
default - a typo'd id or a wrong `params` field isn't caught until the call actually runs. Run:

```bash
servable schema protocol-types
```

to generate `servable.protocols.types.d.ts`, which sharpens `Servable.Services.call()` so a real
service's `id` autocompletes and its `params` are checked against that service's real `handler`
signature (inferred from whatever JSDoc the handler itself has - a service with no JSDoc still
gets `id` validation, just not `params` narrowing). See the
[`servable schema` command reference](../commands/schema#generate-typescript-types) and the
[editor autocomplete guide](../../guides/editor-autocomplete).

## Good practices

1. Keep service ids stable once published elsewhere - anything already calling it by id breaks
   silently (a `call()` that returns an `Error`, not a thrown exception) if the id changes.
2. Validate `params` at the top of the handler regardless of generated type coverage - the
   generated types help at edit time, they don't replace runtime validation for input a caller
   controls.
3. Keep route handlers thin by delegating core logic to services, the same way protocol
   boundaries already require for cross-protocol calls.

## Related

- [Routes](./routes)
- [Jobs](./jobs)
- [Lib](./lib)
- [`@servable/tools` reference](../tools)
- [Editor autocomplete guide](../../guides/editor-autocomplete)
