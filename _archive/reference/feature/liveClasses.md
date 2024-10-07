---
sidebar_position: 2
---

# liveModels.js

:::info Path
**/liveModels.js**
:::
This is the Servable way of implementing Parse Server LiveQuery https://parseplatform.org/Parse-SDK-JS/api/master/Parse.LiveQuery.html

Allows the provided models to be accessible via liveQuery.

## API

### Function
- Arguments:
    - none
- Returns:
    - an array of models

## Examples

### App protocol live models
In **App protocol**, allow these models to be accessible via Socket.

```js
export default async () => {
    return process.env.PARSE_SERVER_LIVESERVER_CLASSES ? JSON.parse(process.env.PARSE_SERVER_LIVESERVER_CLASSES) : []
}
```