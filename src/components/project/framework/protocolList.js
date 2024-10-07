import React from 'react';

export default [
  {
    title: 'A framework orchestrator',
    Svg: require('@site/static/img/noun-build-3738502.svg').default,
    description: (
      <>
        Using engines you can keep the logic of your codebase the same. A hive adapts any Node JS framework to be used in Servable without changing the app.
      </>
    ),
  },
  {
    title: 'Protocols are engine-agnostic',
    Svg: require('@site/static/img/shapes.svg').default,
    description: (
      <>
        Servable streamlines the server development by separating every "groupable" logic to be a protocol, so that it is naturally extracted from the base code and possibly migrated into its own package
      </>
    ),
  },
  {
    title: 'Use community engines',
    Svg: require('@site/static/img/noun-farm-1566418.svg').default,
    description: (
      <>
        Extend your server by using protoocols made by the community. Add emailing, versionning, or video capacity with one simple declaration. Handle schema migrations and rollbacks automatically.
      </>
    ),
  },
]
