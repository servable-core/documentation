# Servable Documentation

> [!WARNING]
> Servable is still experimental and its api may change in the future.

Servable documentation source code for [https://docs.servable.app](https://docs.servable.app)

![logo](/static/img/polar-bear-4.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


**Servable** is a Node JS framework built on top of Express JS and Parse Server and tailored for protocols. It provides a concise, easy to use and scalable template to get the best of Parse Server and protocols.

Servable at its core is a server template that uses the generator-servable to orchestrate the different protocols used in an application. Servable streamlines the server development by separating every "groupable" logic to be a protocol, so that it is organically extracted from the base code and possibly migrated into its own package. By doing so, Servable enforces a clear separation of concerns pattern out of the box.

Main protocols:
- Quick start and Plug & Play Node JS framework
- Tailored for protocols
- Schema based models and auto-migration
- Templates for models
- Templates for custom protocols


Just like a docker image is made to be platform agnostic, a protocol is designed to be independant from the current environment it's being used in. A protocol might depend on other protocols, but it does not need to know which application it is used for, or call any of its API.

The Servable object acts as a central orchestrator. It holds references to objects every protocol can access (for example the current express app, the Parse Server instance, etc). It can also be used to register special methods provided by protocols and that might be used by other protocols, without knowing the source protocol of the method. For example, an emailable protocol if declared in a ServableApp object will register its implementation of a **sendWithTemplate** method in Servable.Emailing. This API will be used by other protocols to send emails by following its specific specification.

## Why Servable?
We created the protocols in our Node JS + Parse server project. What was an experience to ease the backend development quickly became a good practice that helped us keep a clean codebase. They worked so well we decided to streamline their integration with the code base for future projects. We were inspired by the powerful ways NextJs improved the React experience by providing an efficient template on top of it. Yet we did not want to hide the Parse Server framework behind ours as we truly love Parse. Servable allows to tap into all the existing and upcoming Parse protocols and yet it dramatically simplifies the development process. A well designed Servable project will comprise almost nothing more than the actual models and business logic of the platform, other repetitive functions and logics will use existing protocols implemented by the community or entreprise-private protocols.

## Should you use Servable?
Servable is likely a good fit for you if
- You want to group the development of your server by capacity
- You want to reuse a capacity (protocol) over different models without copying it over and over
- You want to make that capacity available throughout your organization or publish it on the web
- You are building a new platform from scratch but you don't want reinvent the wheel for the usual suspects: social interactions, versionning, data consistency over deletion

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


## License

MIT © [servable-community](https://github.com/servable-community)



## License

[MIT](LICENSE)


This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

Resources
https://thenounproject.com/icon/seed-1025551/
https://thenounproject.com/icon/ant-3930319/
https://thenounproject.com/icon/seed-3722556/
https://thenounproject.com/icon/steps-5903715/
https://thenounproject.com/icon/configuration-5508509/
https://thenounproject.com/icon/api-6001992/
https://thenounproject.com/icon/stack-4935131/
https://thenounproject.com/icon/container-1800943/
https://worldvectorlogo.com/logo/parse-1

https://thenounproject.com/icon/bee-4706790/
https://thenounproject.com/icon/bee-4883469/
https://thenounproject.com/icon/swarm-6210932/
https://thenounproject.com/icon/bees-715535/
https://thenounproject.com/icon/wasps-715532/
https://thenounproject.com/icon/bumble-bees-715533/
https://thenounproject.com/icon/abstract-pattern-165721/


https://thenounproject.com/icon/release-5004142/

https://thenounproject.com/icon/hive-1703818/

https://thenounproject.com/icon/merge-454349/