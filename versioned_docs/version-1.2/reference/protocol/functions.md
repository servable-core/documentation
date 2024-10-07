---
sidebar_position: 3
---


import ReferenceTable from '@site/src/components/generic/reference/table'
import JSONSchemaViewer from "@theme/JSONSchemaViewer"


# Functions

## Data structure & behavior
- A transformer's mode can either be display, in or out
- The <i>transformers</i> entry holds the information for these three types of transformation
- A display, in or out is an array of transformers
- The transformers will be called sequentially as per their order in the array

Example
```js
transformers: [
    {
        modes: ['in', 'display'],
        id: "capitalizeFirstLetter",
    },
    {
        modes: ['in', 'display'],
        handler: ({ input }) => {
            if(!input) {
                return ""
            }
            return `{${input}}`
        }
    },
    {
        modes: ['out'],
        template: `<%= destination %>/<%= protocolId %>`
    }
]

```
### Modes
#### In
An In transformer is applied to a value before it is presented to the inquirer.
#### Out
An Out transformer is applied to a value after it is presented to the inquirer and filled by the user.
#### Display
A Display transformer is applied to a value only for display formatting.


## Create
Create a project wide transformer in the form of a _cliNext file in <b>src/transformers/{in|out|display}</b>.

<JSONSchemaViewer schema={{
    	"title": "Transformer schema",
    	"type": "object",
        "description": "Allows for schema to be seen",
    	"properties": {
    		"_clinextType": {
    			"type": "string"
    		},
            "id": {
    			"type": "string",
                "description": "Unique ID"
    		},
    		"modes": {
    			"type": "array",
                "enum":[
                    "in",
                    "out",
                    "display"
                ],
                "description":"Transformer modes"
    		},
            "description": {
    			"type": "string"
    		},
            "template": {
    			"type": "string"
    		},
            "handler": {
    			"type": "object",
                "description":"Transformer modes"
    		}
    	},
    	"required": ["modes",]
    }} />

## Use
You can declare a transformer in three different ways

### File based

Pass the id of the transformer in the corresponding section of the <i>transformers</i> section.

```js
 transformers: [
   {
      id: 'myDisplayTransformerId',
      params: {
        myParam1: true
      }
    }
  ]
```

<ReferenceTable    
    types = {{}}
    data={{
        header: {
            columns: [
                {
                    id: "parameter",
                    label:"Parameter", 
                },
                {
                    id: "type",
                    label:"Type", 
                },
                {
                    id: "description",
                    label:"Description", 
                },
                {
                    id: "defaultValue",
                    label:"Default value", 
                },
                {
                    id: "mandatory",
                    label:"Mandatory", 
                },] 
        },
        rows: 
        [
            {
                parameter: "id", 
                type: "string", 
                description: "Transformer id", 
                defaultValue: "",
                mandatory:{
                    type: 'boolean',
                    value: true
                }
            },
            {            
                parameter: "params", 
                type: "object", 
                description: "Transformer payload", 
                defaultValue: "{}",
                mandatory:{
                    type: 'boolean',
                    value: false
                }
            },
            {            
                parameter: "modes", 
                type: "array", 
                description: "Transformers modes", 
                defaultValue: "",
                mandatory:{
                    type: 'boolean',
                    value: true
                }
            },]
    }} />

Example
```js
 transformers: {
    display: [{
      id: 'isFolderEmpty',
      params: {
        excludeHiddenFiles: true
      }
    }]
  }
```

### Inline

<ReferenceTable    
    types = {{}}
    data={{
        header: {
            columns: [
                {
                    id: "parameter",
                    label:"Parameter", 
                },
                {
                    id: "type",
                    label:"Type", 
                },
                {
                    id: "description",
                    label:"Description", 
                },
                {
                    id: "defaultValue",
                    label:"Default value", 
                },
                {
                    id: "mandatory",
                    label:"Mandatory", 
                },] 
        },
        rows: 
        [
            {
                parameter: "id", 
                type: "string", 
                description: "Transformer id", 
                defaultValue: "",
                mandatory:{
                    type: 'boolean',
                    value: true
                }
            },
            {            
                parameter: "params", 
                type: "object", 
                description: "Transformer payload", 
                defaultValue: "{}",
                mandatory:{
                    type: 'boolean',
                    value: false
                }
            },]
    }} />

<i>Example</i>

```js
 transformers: {
    out: ['myOutTransformerId']
  }
```

### Template

<ReferenceTable    
    types = {{}}
    data={{
        header: {
            columns: [
                {
                    id: "parameter",
                    label:"Parameter", 
                },
                {
                    id: "type",
                    label:"Type", 
                },
                {
                    id: "description",
                    label:"Description", 
                },
                {
                    id: "defaultValue",
                    label:"Default value", 
                },
                {
                    id: "mandatory",
                    label:"Mandatory", 
                },] 
        },
        rows: 
        [
            {
                parameter: "id", 
                type: "string", 
                description: "Transformer id", 
                defaultValue: "",
                mandatory:{
                    type: 'boolean',
                    value: true
                }
            },
            {            
                parameter: "params", 
                type: "object", 
                description: "Transformer payload", 
                defaultValue: "{}",
                mandatory:{
                    type: 'boolean',
                    value: false
                }
            },]
    }} />

<i>Example</i>

```js
transformers: {
    out: [{
        template: `<%= destination %>/<%= protocolId %>`
    }]
}
```