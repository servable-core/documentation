---
sidebar_position: 3
---

# Seed

Protocol seed defines initial data and setup records created during startup.

## Purpose

Use seed modules to bootstrap required data that your protocol needs to operate.

Typical examples:

- Default app-level records.
- Baseline permission or role records.
- Lookup data required by protocol routes or services.

## Seed design rules

1. Keep seed operations idempotent.
2. Do not duplicate existing records.
3. Avoid heavy one-time migrations in seed logic.
4. Keep environment-specific values in configuration, not hardcoded in seed files.

## Recommended implementation flow

1. Add seed files to your protocol package.
2. Start the app locally and confirm seed phase runs once as expected.
3. Validate the created records through API or dashboard.
4. Deploy to staging before production.

## Troubleshooting

If startup succeeds but expected records are missing:

1. Check startup logs for seed phase execution.
2. Verify protocol declaration on target model.
3. Confirm seed conditions are satisfied.

## Related

- [Configurations](./configurations)
- [Service](./service)
- [Schema](./schema)