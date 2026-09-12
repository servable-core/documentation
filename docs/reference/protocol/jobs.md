---
sidebar_position: 3
---

# Jobs

Protocol jobs are background tasks registered during startup and executed by the runtime scheduler.

## When to use protocol jobs

Use jobs for work that should not block request/response flows:

- Scheduled maintenance tasks.
- Notifications and asynchronous fan-out.
- Periodic analytics aggregation.
- Data consistency tasks across models.

## Job descriptor shape

Typical job declarations include:

- `id`: unique protocol job identifier.
- `schedule`: cron expression or interval.
- `concurrency`: optional execution limit.
- `handler`: async function executed by the scheduler.

## Good practices

1. Keep handlers idempotent.
2. Log failures with enough context to replay safely.
3. Use short, composable jobs over one large job.
4. Validate external dependencies before scheduling heavy tasks.

## Related

- [Routes](./routes)
- [Service](./service)
- [Guides deployment](../../guides/deployment/kubernetes)
- [Route and job contracts](../route-job-contracts)
- [Troubleshooting by lifecycle](../troubleshooting-lifecycle)
