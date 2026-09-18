---
sidebar_position: 3
lastTouchedBy: claude-code
lastTouchedAt: "2026-09-18T07:11:29Z"
---

# Routes

Protocol routes define HTTP endpoints contributed by a protocol.

## Directory shape

Route files live under a **version-numbered** directory: `routes/v1/**/*.js`, `routes/v2/**/*.js`,
and so on (the loader matches any directory whose name starts with `v` and parses as a valid
semver, e.g. `v1`, `v2`). Anything under a `lib/` subdirectory at any depth is ignored - use that
for shared helpers a route file imports, not a route itself. This mirrors the top-level app's own
`app/routes/v1/**/*.js` convention.

## Route descriptor

```js
export default {
  __servableType: 'route',
  method: 'get',       // lowercase string: 'get' | 'post' | 'put' | 'patch' | 'delete' |
                        // 'head' | 'options' | 'trace' | 'function'
  path: 'status',       // or `paths: [...]` for multiple, or `url` - sanitized and lowercased
  handler: async ({ request, response, ...args }) => ({ ok: true }),
}
```

Optional fields: `prefix` (prepended to `path`/`paths`), `schema` (request/response contract),
`cache`, `rateLimiting`, `request.type` (body parser content type, defaults
`application/json`), `servableArguments`. See the
[Route and job contracts](../route-job-contracts) reference for the full field matrix and the
`Route.define()` must-be-awaited gotcha.

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
