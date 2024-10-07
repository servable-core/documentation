import React from 'react';

export default [
  {
    title: 'Standardized api',
    Svg: require('@site/static/img/noun-shapes-6104255.svg').default,
    description: (
      <>
        Every protocol is totally independent from other protocols, yet it can call Servable's standardized api for sending emails or push notifications. A dedicated protocol can register to Servable for delivering those messages.
      </>
    ),
  },
  {
    title: 'Ready to run with docker dependencies per protocol',
    Svg: require('@site/static/img/noun-boxes-4275784.svg').default,
    description: (
      <>
        A dedicated system entry in every protocol allows for a custom docker-compose based infrastructure needed by the protocol. The Servable server will automatically assign free ports and run docker containers if a protocol needs them.
      </>
    ),
  },
  {
    title: 'Full stack protocols with frontend extensions',
    Svg: require('@site/static/img/noun-shapes-6104255.svg').default,
    description: (
      <>
        Beyond the core server component, a protocol can have an accompanying frontend library that provides UI components and logic. For example the followable protocol offers a React extension that displays a state managed <i>Follow</i> button.
      </>
    ),
  },

]
