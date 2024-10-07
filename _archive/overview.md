---
sidebar_position: 1
---

# Overview

:::info
Servable is still experimental and its api may change in the future.
:::

![logo](/img/icon.svg)

**Servable** is a Node JS framework built for protocols running on your framework engine of choice. It provides a concise, easy to use and scalable template to get the best of protocols.

The Servable framework at its core is a server template that uses the @servable/server to launch the different protocols applied to models and executed on the framework engine. 

Main protocols:
- Quick start and Plug & Play Node JS framework
- Tailored for protocols
- Schema based models and auto-migration 

## Protocols
Servable streamlines the server development by separating every "groupable" logic to be a protocol, so that it is organically extracted from the base code and possibly migrated into its own package. By doing so, Servable enforces a clear separation of concerns pattern out of the box. 

Just like a docker image is made to be platform agnostic, a protocol is designed to be independant from the current environment it's being used in. A protocol might depend on other protocols, but it does not need to know which application it is used for, or call any of its API.

The Servable object acts as a central orchestrator. It holds references to objects every protocol can access (for example the current express app, the Parse Server instance, etc). It can also be used to register special methods provided by protocols and that might be used by other protocols, without knowing the source protocol of the method. For example, an emailable protocol if declared in a ServableApp object will register its implementation of a **sendWithTemplate** method in Servable.Emailing. This API will be used by other protocols to send emails by following its specific specification.

[Read the protocols guide here](../protocols/anatomy.md)

## Examples of protocols
### Followable
- Gives an object (followed) the capacity to be followed by another object (follower) 
- keeps the number of followers up to date on the followed object
- creates and maintains join tables with the status of the follow relationship

<!-- [Read more](../protocolsLibrary/followable/) -->

### Emailable
- Gives a ServableApp the capacity to use transactional emails via a simple API that is registered via the Servable.Mailing object
- Keeps a list of email templates
- Can be used with Sendgrid as of now

<!-- [Read more](../protocolsLibrary/emailable/) -->

**...you love Parse Server**
There is no reason not to use Servable if you have previously used a Parse Server. 

**...you care about productivity and developer experience**
Servable provides a predetermined template that sets a clear developer's guideline 

## Servable in your stack
Servable comes bundled with Parse Server that sets up a working set of tables that handle users, sessions and installation. You can use it to bootstrap your platform or as a microservice that you can access through REST or GraphQL without using the _User, Session and installation tables.
