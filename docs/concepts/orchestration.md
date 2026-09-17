---
sidebar_position: 5
lastTouchedBy: claude-code
lastTouchedAt: "2026-09-16T22:57:39Z"
---

# How Servable server orchestrates a service?

## Schema

Servable takes the separation of concerns to the extreme by allowing every protocol to define a schema it needs to run. This schema has two main entries:
- target: how does the protocol change the targetted model's schema, ie, which field to add
- managed: the models the protocol needs to run

### Final schema
At runtime the Servable server computes the total schema for the whole app based on the multiple protocols that are called.


## Lifecycle

When the server is launched, the servable-engine performs the following tasks:

- Launches an Express app
- Computes the target database schema by aggregating the custom app tables and the protocols applied to those tables
- Checks the schema is safe to apply — a committed artifact's hash must match what the current sources produce (drift), and this build's compatibility floor must not be lower than what's already recorded — then applies it additively. There is no versioned migration step; see [Schema Migrations](../guides/schema-migrations)
- Binds every protocol to the events triggered by the tables that use them
- Exposes every protocol custom function
- Registers jobs


```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#fff',
      'primaryTextColor': '#323232',
      'primaryBorderColor': '#323232',
      'lineColor': '#323232',
      'fontFamily': 'Space Grotesk',
      'fontSize': '14px'
    }
  }
}%%
graph TD
    A(Start) --> buildSchema(Compute schema)
    buildSchema --> launchExpressApp(Launch Express App)
    launchExpressApp --> beforeInit(Before init)
    beforeInit --> registerModels(Register models)
    registerModels --> wireSchema(Wire schema)    
    wireSchema --> seed(Seed)        
    seed --> config(Setup config)
    config --> afterInit(After init)
    afterInit --> B(App launched)
```
