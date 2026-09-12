---
sidebar_position: 0
lastTouchedBy: claude-code
lastTouchedAt: "2026-09-12T11:42:24Z"
---

# Overview

**Servable** is a protocol-oriented Node.js backend framework built on Parse Server. It provides a concise, easy to use and scalable template to get the best of protocols.

The Servable framework at its core is a server template that uses the @servable/server to launch the different protocols applied to models and executed on the framework engine.

:::info
Servable is still experimental and its API may change in the future.
:::

![logo](/img/icon.svg)

Highlights:
- Quick start and Plug & Play Node JS framework
- Tailored for protocols
- Schema based models and auto-migration

## Protocols
Servable streamlines the server development by separating every "groupable" logic to be a protocol, so that it is organically extracted from the base code and possibly migrated into its own package. By doing so, Servable enforces a clear separation of concerns pattern out of the box. 

Just like a docker image is made to be platform agnostic, a protocol is designed to be independant from the current environment it's being used in. A protocol might depend on other protocols, but it does not need to know which application it is used for, or call any of its API.

The Servable object acts as a central orchestrator. It holds references to objects every protocol can access (for example the current express app, the Parse Server instance, etc). It can also be used to register special methods provided by protocols and that might be used by other protocols via Services.

