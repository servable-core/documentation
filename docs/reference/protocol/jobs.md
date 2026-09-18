---
sidebar_position: 3
lastTouchedBy: claude-code
lastTouchedAt: "2026-09-18T07:11:29Z"
---

# Jobs

Protocol jobs are background tasks registered during startup and run on an [Agenda](https://github.com/agenda/agenda)-backed
scheduler (`@hokify/agenda`, MongoDB-persisted).

## When to use protocol jobs

Use jobs for work that should not block request/response flows:

- Scheduled maintenance tasks.
- Notifications and asynchronous fan-out.
- Periodic analytics aggregation.
- Data consistency tasks across models.

## Directory shape

One file per job under `jobs/` at the protocol root (nesting is allowed, e.g.
`jobs/payout/finak/sendreminder.js`). A per-class variant also exists:
`models/<className>/jobs/*.js` (v1.1.0 loader) / `classes/<className>/jobs_/*.js` (v1.0.0, note
the trailing underscore).

## Job descriptor

```js
export default {
  __servableType: 'job',
  id: 'sendReminder',      // required - the job's scheduler name
  cron: '0 9 * * *',       // required (current adapter behavior)
  handler: async () => { /* ... */ },
}
```

Optional fields, all forwarded to Agenda: `priority` (default `'high'`), `concurrency` (default
`10`), `defaultConcurrency`, `processEvery`, `maxConcurrency`, `defaultLockLimit`, `lockLimit`,
`defaultLockLifetime`, `ensureIndex`, `sort`, `timeZone`, `attributes` (extra payload passed on
scheduled invocation), `onComplete`, `runOnInit` (default `false`).

:::caution
Each `Servable.App.Jobs.define()` call currently creates its **own** `Agenda` instance - its own
MongoDB connection and its own polling loop - rather than sharing one per app. For an app with
several protocol jobs, this means several independent connections/polling loops doing overlapping
work. Confirmed in `register/jobs/index.js`; tracked as a known issue, not yet fixed.
:::

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
