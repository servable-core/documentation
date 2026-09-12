---
sidebar_position: 3
---

# Routes

Protocol routes define HTTP endpoints contributed by a protocol.

## Route descriptor basics

A route usually declares:

- `method`: HTTP verb.
- `path`: endpoint path.
- `schema`: request/response validation contract.
- `handler`: async implementation.

Optional capabilities:

- `rateLimiting`.
- `cache`.
- request parsing and middleware hooks.

## Example (minimal)

```js
export default {
	__servableType: 'route',
	method: Servable.App.Route.Constants.Methods.GET,
	path: '/status',
	handler: async () => ({ ok: true })
}
```

## Best practices

1. Keep handlers thin and delegate reusable logic to services.
2. Add schema contracts for query/body/response.
3. Apply rate limits on public endpoints.
4. Prefer protocol-level reuse over app-specific duplication.

## Related

- [Guides add route](../../guides/routes/add)
- [Jobs](./jobs)
- [Service](./service)
- [Route and job contracts](../route-job-contracts)
