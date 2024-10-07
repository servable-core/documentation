import React from 'react';

export default [
  {
    title: 'Inter-protocol Services',
    Svg: require('@site/static/img/noun-communication-6557324.svg').default,
    description: (
      <>
        When protocols need to communicate the Servable.Services namespace is ready for inter-protocol communication. Any protocol can register an api associated with a unique ID that can be called with no knowledge of the protocol that handles the operation.
      </>
    ),
  },
  {
    title: 'Automatic model and protocol seed',
    Svg: require('@site/static/img/noun-seed-4962548.svg').default,
    description: (
      <>
        Servable Automatic Seed is an easy way to seed Servable models. It was built from the ground up to respect the protocol lifecycle and separation of concerns. Every protocol can define config entries that drive its behaviour at runtime, including the app protocol.
      </>
    ),
  },

  {
    title: 'Advanced config per protocol',
    Svg: require('@site/static/img/noun-settings-1269041.svg').default,
    description: (
      <>
        Servable config adds the ability to change the behaviour and appearance of your Servable service without  redeploying your server or requiring users to update their app.
        Every protocol can manage its own configuration.
      </>
    ),
  },
]
