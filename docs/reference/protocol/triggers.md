---
sidebar_position: 5
---

# Triggers

## Concept
Triggers run model lifecycle logic during persistence events.

Servable registers class triggers through the cloud adapter during class registration.

Current wired operations:

- `beforeSave`
- `afterSave`
- `beforeDelete`
- `afterDelete`

`beforeFind` and `afterFind` are present in code comments but currently not enabled in default wiring.

## Folder structure

```bash
├── triggers
│   ├── beforeSave.js
│   ├── afterSave.js
│   ├── beforeDelete.js
│   ├── afterDelete.js
│   ├── beforeFind.js
│   ├── afterFind.js
```

- The **index.js** (or **triggers.js**) exports the triggers functions 

## Variant entry points
None

## Usage

Default argument for all triggers

|  Argument | Description | Type | Default value |
|:--|:--|:--|:--|:--|
| request | The Parse Server request | Object | {} |

Request content:
|  Argument | Description | Type | Default value |
|:--|:--|:--|:--|:--|
| object | The Parse Server object | Object | {} |
| original | The Parse Server object before it's modified | Object | {} |
| context | The Parse Server context | Object | {} |

### Execution order

For each wired lifecycle event:

1. Protocol-level trigger handlers run first.
2. Class-level trigger handlers run next when present.

For `afterSave`, handlers are invoked without awaiting completion in current wiring logic.

### Before save

```js
export default async (props) => {
    const { request } = props
    const { object } = request   
}
```

### After save

```js
export default async (props) => {
    const { request } = props
    const { object } = request   
}
```

### Before delete

```js
export default async (props) => {
    const { request } = props
    const { object } = request   
}
```

### After delete

```js
export default async (props) => {
    const { request } = props
    const { object } = request   
}
```


## Error handling

- Trigger errors are caught and logged with class and lifecycle labels.
- Errors are logged but do not always stop subsequent lifecycle handlers.


## Example

The *disposablechildrenable* protocol 

```js
import _ from 'underscore'
//afterSave.js
export default async ({ request }) => {
    const { object, original, context } = request

    if (!object || !object.disposableChildren) {
        return
    }
    const { dirtyKeys } = context
    if (!dirtyKeys || !dirtyKeys.length) {
        return
    }

    const items = object.disposableChildren()
    if (!items || !items.length) {
        return
    }

    const candidates = _.intersection(items, dirtyKeys)
    if (!candidates || !candidates.length) {
        return
    }

    await Promise.all(candidates.map(key => handleItem({ object, original, key })))
}

const handleItem = async ({ object, original, key }) => {
    if (!original) {
        return
    }

    const previous = original.get(key)
    const current = object.get(key)

    if (Array.isArray(previous) || Array.isArray(current)) {
        return handleArray({ previous, current })
    }

    const isFile = isFieldFile(previous)
      | isFieldFile(current)

    if (!isFile) {
        return handleItemAsObject({
            previous,
            current
        })
    }

    return handleItemAsFile({
        previous,
        current
    })


}

const handleArray = async ({ previous, current }) => {
    const objects = missingObjectsBetweenArrays(previous, current)
    //TODO: objects === 0 when [files]
    if (!objects || !objects.length) {
        return
    }

    if (isFieldFile(objects[0])) {
        await Promise.all(objects.map(destroyItemAsFile))
    } else {
        await Promise.all(objects.map(destroyItemAsObject))
    }
}

const handleItemAsObject = async ({ previous, current }) => {
    const objects = missingObjectsBetweenArrays([previous], [current])
    //TODO: objects === 0 when [files]
    if (!objects || !objects.length) {
        return
    }

    await Promise.all(objects.map(destroyItemAsObject))
}

const handleItemAsFile = async ({ previous, current }) => {
    if (!previous) {
        return
    }

    if (!current) {
        return destroyItemAsFile(previous)
    }

    if (previous.name() !== current.name()) {
        return destroyItemAsFile(previous)
    }
}

const missingObjectsBetweenArrays = (a, b) => {
    if (!b || !b.length) {
        return a
    }

    if (!a || !a.length) {
        return []
    }

    let _a = a.filter(i => i)
    let _b = b.filter(i => i)

    const isFile = isFieldFile(_b[0])
    if (isFile) {
        return missingObjectsBetweenArraysFiles(_a, _b)
    }
    else {
        return missingObjectsBetweenArraysObject(_a, _b)
    }
}

const missingObjectsBetweenArraysFiles = (a, b) => {
    const bUrls = b.map(i => i.url())

    return a.map(i => {
        //TODO: handle files
        if (!bUrls.includes(i.url())) {
            return i
        }
        return null
    }).filter(a => a)
}

const missingObjectsBetweenArraysObject = (a, b) => {
    const bIds = b.map(i => i.id)

    return a.map(i => {
        //TODO: handle files
        if (!bIds.includes(i.id)) {
            return i
        }
        return null
    }).filter(a => a)
}

const isFieldFile = (item) => {

    if (!item) {
        return false
    }
    return (item._name && item._url)
}

const destroyItemAsObject = async i => {
    try {
        i.isDataAvailable && !i.isDataAvailable() && i.fetch && (await i.fetch({ useMasterKey: true })) // The check will skip files
        await i.destroy({ useMasterKey: true })
    } catch (e) {
        console.error('Protocol > dependentChildren > destroyItem', e.message)
    }
}

const destroyItemAsFile = async i => {
    try {
        await i.destroy({ useMasterKey: true })
    } catch (e) {
        console.error('Protocol > dependentChildren > destroyItem', e.message)
    }
}

```

## Source of truth

- server/src/launch/wireSchema/register/classes/registerTriggers/index.js
- server/src/launch/wireSchema/register/classes/registerTriggers/protocolTriggers/index.js

## Related

- [Functions](./functions)
- [Routes](./routes)
- [Jobs](./jobs)
- [Trigger behavior caveats](../trigger-behavior-caveats)