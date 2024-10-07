---
sidebar_position: 2
---

# schema

This folder holds the different versions of the protocol's schema and their respective migrations.

## Version folder
A version folder contains

### Models
:::info Path 
/models.json
:::

Holds the models this protocol will create.
This is where you define the database model for the models your protocol will create.

Example:

```json
[
    {
        "className": "RefLocale",
        "fields": {
            "objectId": {
                "type": "String"
            },
            "createdAt": {
                "type": "Date"
            },
            "updatedAt": {
                "type": "Date"
            },
            "ACL": {
                "type": "ACL"
            },
            "name": {
                "type": "String"
            },
            "nameLoc": {
                "type": "Object"
            },
            "code": {
                "type": "String"
            }
        },
        "classLevelPermissions": {
            "find": {
                "*": true
            },
            "count": {
                "*": true
            },
            "get": {
                "*": true
            },
            "create": {
                "*": true
            },
            "update": {
                "*": true
            },
            "delete": {
                "*": true
            },
            "addField": {},
            "protectedFields": {
                "*": []
            }
        },
        "indexes": {
            "_id_": {
                "_id": 1
            }
        }
    }
]
```

### Class level permissions
:::info Path 
/classLevelPermissions.json
:::

Holds the models class level permissions.
This is where you define the security at a class level as opposed to or complimentary to object ACL.

Example:

```json
{
    "protectedFields": {
        "*": [
            "wallet"
        ]
    }
}
```

### Fields
:::info Path 
/fields.json
:::

Holds the models this protocol will create.
This is where you define the database model for the models your protocol will create.

Example:

```json
{
    "locale": {
        "type": "String"
    },
    "localeRef": {
        "type": "Pointer",
        "targetClass": "RefLocale"
    }
}
```

### Indexes
:::info Path 
/indexes.json
:::

Holds the indexes this protocol will create for the models defined.

Example:

```json
{}
```

### Migrations
:::info Path 
/migrations
:::

Allows for automatic migrations.

#### Up
:::info Path 
/migration/up/index.js
:::

Example:

```js
export default async (props) => {
    console.log('Localable 0.1.2 > up')
    const {
        protocolsExcerpt,
        configuration, } = props

    const { models } = protocolsExcerpt['localable']
    if (!models) {
        console.log('Localable 0.1.2 > up: no models, leaving')
        return
    }

    const query = new Servable.App.Query('LocalableEntry')
    await Servable.App.Utils.performBatchOnQuery({
        query,
        action: async (i) => {
            const type = i.get('type')
            if (!type) {
                return
            }
            const items = type.split(':')
            if (!items || !items.length) {
                return
            }
            if (items.length === 0) {
                i.set('typeA', items[0])
            }
            else if (items.length === 2) {
                i.set('typeA', items[0])
                try {
                    i.set('typeB', parseFloat(items[1]))
                } catch (e) {
                    console.error(e)
                }
            }

            await i.save(null, { useMasterKey: true })
        }
    })
}
```

#### Down
:::info Path 
/migration/down/index.js
:::

Example
```js
export default async (props) => {
    console.log('Localable 1.0.1 > down')
    const {
        protocolsExcerpt,
        configuration, } = props

    const { models } = protocolsExcerpt['pageable']
    if (!models) {
        console.log('Localable 1.0.1 > down: no models, leaving')
        return
    }

    const query = new Servable.App.Query('LocalableEntry')
    await Servable.App.Utils.performBatchOnQuery({
        query,
        action: async (i) => {
            const typeA = i.get('typeA')
            const typeB = i.get('typeB')
            let type = typeA ? typeA : ''
            if (typeB !== null && typeB !== undefined) {
                type = `${type}:${typeB}`
            }

            i.set('type', type)
            await i.save(null, { useMasterKey: true })
        }
    })
}
```