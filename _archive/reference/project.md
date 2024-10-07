---
sidebar_position: 2
---

# Project structure

```bash
├── lib
│   ├── index.js
│   ├── app
│   │   │   ├── beforeInit
│   │   │   ├── afterInit
│   │   │   ├── functions
│   │   │   ├── schema
│   │   │   ├── config
│   │   │   ├── class
│   │   │   ├── models
│   │   │   ├── seed
│   │   │   ├── jobs
│   │   │   ├── lib
│   │   │   ├── assets
│   │   │   ├── triggers
│   │   │   ├── liveModels.js
│   ├── protocols
│   │   ├── customProtocolA
│   │   │   ├── beforeInit
│   │   │   ├── afterInit
│   │   │   ├── functions
│   │   │   ├── schema
│   │   │   ├── config
│   │   │   ├── class
│   │   │   ├── models
│   │   │   ├── seed
│   │   │   ├── jobs
│   │   │   ├── lib
│   │   │   ├── assets
│   │   │   ├── triggers
│   │   │   ├── liveModels.js
│   │   ├── customProtocolB
│   │   │   ├── ...
├── servable.config.js
├── .env
└── package.json
```