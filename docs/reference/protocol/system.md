---
sidebar_position: 3
lastTouchedBy: claude-code
lastTouchedAt: "2026-09-12T11:00:08Z"
---

# System

A protocol's `system/docker/docker-compose.yaml` declares the external services it needs: a
database, cache, search index, whatever the protocol depends on. At launch, Servable merges every
enabled protocol's compose file (plus the engine's and the server's own bundled ones, for the
`app` protocol) into a single stack and brings it up with `docker-compose`.

## Dynamic port assignment

A service's declared host port (`published: 8097` in the compose file) is a *request*, not a
guarantee. `getPortNear` reassigns it to the nearest free port if the declared one is already
taken. This is normal, expected behavior (two worktrees' stacks running simultaneously being the
most common cause), not a bug. A bare `- :8097` entry (no host port at all, meaning "let Docker
pick something free") is left untouched; there's nothing to reassign.

### Getting the actual assigned port into your code

If your protocol's own code needs to know the real, possibly-reassigned port (rather than
connecting through a stable in-app config value), declare an `x-servable-envs` entry on the
service mapping an env var name to the service's *container* port:

```yaml
services:
  my-service:
    ports:
      - 8097:8087
    x-servable-envs:
      - "MY_SERVICE_URI": 8087
```

At launch, Servable sets `process.env.MY_SERVICE_URI = "localhost:<actual published port>"` for
you. Without this, a hardcoded `.env` value pointing at the *declared* port will silently break the
moment that port isn't free and a reassignment happens: connections will fail with `ECONNREFUSED`
against the old port even though the container is up and healthy on a different one.

## Per-worktree isolation: `system.docker.namespace`

Set `servableConfig.system.docker.namespace` (a plain string) when multiple checkouts of the same
app, most commonly git worktrees sharing the same compose template and `servableConfig.id`, need
to run their docker stacks side by side without colliding. It affects:

- The compose project name and network name.
- Every service's explicit `container_name` (Docker treats a literal `container_name` as a single
  global resource regardless of which project asked for it; ports and bind-mount volumes are
  already unique per checkout without this, but a fixed `container_name` isn't).
- The host-side execution/data directory (`.system/<namespace>/<protocol.id>/docker`).

Leaving it unset is a complete no-op; existing single-checkout setups are unaffected. See
[Config Adaptation](../config-adaptation) for how it interacts with the rest of `servableConfig`.

## Recreating a container Docker itself already manages

If you create or remove a service's container directly with `docker` (rather than letting Servable
bring it up), Servable's own fingerprint check has no way to notice: it only detects changes to
the *declared* compose config, not to what Docker is actually running. A container you touched
manually won't get re-adopted on the next launch until its target compose file
(`.system/<namespace?>/<protocol.id>/docker/docker-compose.yaml`) is deleted, forcing a fresh
comparison and recreation.

## What belongs in system vs config

- `system`: infrastructure/runtime dependencies (the docker-compose stack above).
- `config`: app-facing behavior toggles and values.

## Operational guidance

1. Keep system declarations explicit and environment agnostic.
2. Use `x-servable-envs` for any port your code reads directly. Never hardcode a declared port.
3. Validate system dependencies before enabling protocol features.

## Related

- [Config Adaptation](../config-adaptation)
- [Configurations](./configurations)
- [Seed](./seed)
- [Deployment guide](../../guides/deployment/kubernetes)
