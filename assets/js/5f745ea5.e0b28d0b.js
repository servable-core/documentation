"use strict";(self.webpackChunkservable=self.webpackChunkservable||[]).push([[9992],{62765:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(87462),n=a(67294);const l=e=>{const{data:t}=e,{header:a,rows:r}=t;return n.createElement("table",null,n.createElement("thead",null,a.columns.map((e=>n.createElement("td",{key:e.id,className:"font-bold text-center"}," ",e.label," ")))),n.createElement("tbody",null,r.map((e=>n.createElement("tr",{key:e.id},e.columns.map((e=>n.createElement("td",{key:e.id,className:""},e.value))))))))},o=function(e){void 0===e&&(e={});const{name:t,url:a}=e;return n.createElement("div",{className:"           bg-slate-100 border border-customc-main                      rounded-lg           px-0 py-0        text-center      anakcss-affordance-base                               "},n.createElement("span",{className:"                                             "},`${t}`))},s=function(e){void 0===e&&(e={});const{name:t,url:a,tooltip:r}=e;return n.createElement("div",{className:" has-tooltip                                 "},r&&n.createElement("span",{className:"\n                tooltip\n                bg-slate-600\n                text-slate-100\n                rounded-full\n                shadow-lg \n                px-4 \n                p-2  \n                -mt-12\n                anakcss-affordance-base       \n            "},r),n.createElement("a",{href:`${a}`,className:" anakcss-affordance-base           hover:text-customc-main           no-underline  decoration-customc-main                                                  "},n.createElement("span",{className:"                                                         hover:text-customc-main                                 "},`${t}`)))},i=e=>{let{data:t,types:a}=e;const{header:r,rows:l}=t;let i=l.map((e=>{const{columns:t}=e,r=t.map(((e,t)=>{if(!e)return{id:t,value:n.createElement("span",null)};if("string"===typeof e)return{id:t,value:e};{const{type:r}=e;switch(r){case"boolean":return{id:t,value:n.createElement(o,{name:e.value?"True":"False"})};case"values":return{id:t,value:e.value.map((e=>n.createElement(o,{name:e})))};case"element":{const a=e.value;return{id:t,value:n.createElement(a,null)}}case"type":{const{value:r}=e;let l=a.items.filter((e=>e.id===r));if(!l||!l.length)break;l=l[0];const o=`${l.path}`,{mode:i}=e;let d=l.name;if("array"===i)d=`[${l.name}]`;return{id:t,value:n.createElement(s,{name:d,url:o,tooltip:l.description})}}}}return e}));return{...e,columns:r}}));return i=i.filter((e=>e)),{header:r,rows:i}},d=e=>e.filter(((t,a)=>e.indexOf(t)===a)),u=e=>{let{data:t,types:a,isPlain:r}=e;if(r)return i({data:t,types:a});const n=(e=>{let{data:t}=e;const{header:a,rows:r}=t;let n=[];return r.forEach((e=>{const t=Object.keys(e);n=n.concat(t)})),n=d(n),{header:a,rows:r.map(((e,a)=>({columns:t.header.columns.map((t=>{const{id:a}=t;return e[a]}))})))}})({data:t});return i({data:n,types:a})},p=e=>{const t=u({data:e.data,types:e.types,isPlain:e.isPlain});return n.createElement(l,(0,r.Z)({},e,{data:t}))}},78185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),l=a(62765),o=a(60639),s=a.n(o);const i={sidebar_position:3},d="Functions",u={unversionedId:"reference/protocol/functions",id:"reference/protocol/functions",title:"Functions",description:"Data structure & behavior",source:"@site/docs/reference/protocol/functions.md",sourceDirName:"reference/protocol",slug:"/reference/protocol/functions",permalink:"/docs/next/reference/protocol/functions",draft:!1,editUrl:"https://github.com/servable-community/generator-servable/tree/main/packages/create-docusaurus/templates/shared/docs/reference/protocol/functions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/docs/next/reference/protocol/documentation"},next:{title:"Jobs",permalink:"/docs/next/reference/protocol/jobs"}},p={},c=[{value:"Data structure &amp; behavior",id:"data-structure--behavior",level:2},{value:"Modes",id:"modes",level:3},{value:"In",id:"in",level:4},{value:"Out",id:"out",level:4},{value:"Display",id:"display",level:4},{value:"Create",id:"create",level:2},{value:"Use",id:"use",level:2},{value:"File based",id:"file-based",level:3},{value:"Inline",id:"inline",level:3},{value:"Template",id:"template",level:3}],m={toc:c},f="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"functions"},"Functions"),(0,n.kt)("h2",{id:"data-structure--behavior"},"Data structure & behavior"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A transformer's mode can either be display, in or out"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("i",null,"transformers")," entry holds the information for these three types of transformation"),(0,n.kt)("li",{parentName:"ul"},"A display, in or out is an array of transformers"),(0,n.kt)("li",{parentName:"ul"},"The transformers will be called sequentially as per their order in the array")),(0,n.kt)("p",null,"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"transformers: [\n    {\n        modes: ['in', 'display'],\n        id: \"capitalizeFirstLetter\",\n    },\n    {\n        modes: ['in', 'display'],\n        handler: ({ input }) => {\n            if(!input) {\n                return \"\"\n            }\n            return `{${input}}`\n        }\n    },\n    {\n        modes: ['out'],\n        template: `<%= destination %>/<%= protocolId %>`\n    }\n]\n\n")),(0,n.kt)("h3",{id:"modes"},"Modes"),(0,n.kt)("h4",{id:"in"},"In"),(0,n.kt)("p",null,"An In transformer is applied to a value before it is presented to the inquirer."),(0,n.kt)("h4",{id:"out"},"Out"),(0,n.kt)("p",null,"An Out transformer is applied to a value after it is presented to the inquirer and filled by the user."),(0,n.kt)("h4",{id:"display"},"Display"),(0,n.kt)("p",null,"A Display transformer is applied to a value only for display formatting."),(0,n.kt)("h2",{id:"create"},"Create"),(0,n.kt)("p",null,"Create a project wide transformer in the form of a _cliNext file in ",(0,n.kt)("b",null,"src/transformers/{in|out|display}"),"."),(0,n.kt)(s(),{schema:{title:"Transformer schema",type:"object",description:"Allows for schema to be seen",properties:{_clinextType:{type:"string"},id:{type:"string",description:"Unique ID"},modes:{type:"array",enum:["in","out","display"],description:"Transformer modes"},description:{type:"string"},template:{type:"string"},handler:{type:"object",description:"Transformer modes"}},required:["modes"]},mdxType:"JSONSchemaViewer"}),(0,n.kt)("h2",{id:"use"},"Use"),(0,n.kt)("p",null,"You can declare a transformer in three different ways"),(0,n.kt)("h3",{id:"file-based"},"File based"),(0,n.kt)("p",null,"Pass the id of the transformer in the corresponding section of the ",(0,n.kt)("i",null,"transformers")," section."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"}," transformers: [\n   {\n      id: 'myDisplayTransformerId',\n      params: {\n        myParam1: true\n      }\n    }\n  ]\n")),(0,n.kt)(l.Z,{types:{},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"}]},rows:[{parameter:"id",type:"string",description:"Transformer id",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"params",type:"object",description:"Transformer payload",defaultValue:"{}",mandatory:{type:"boolean",value:!1}},{parameter:"modes",type:"array",description:"Transformers modes",defaultValue:"",mandatory:{type:"boolean",value:!0}}]},mdxType:"ReferenceTable"}),(0,n.kt)("p",null,"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"}," transformers: {\n    display: [{\n      id: 'isFolderEmpty',\n      params: {\n        excludeHiddenFiles: true\n      }\n    }]\n  }\n")),(0,n.kt)("h3",{id:"inline"},"Inline"),(0,n.kt)(l.Z,{types:{},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"}]},rows:[{parameter:"id",type:"string",description:"Transformer id",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"params",type:"object",description:"Transformer payload",defaultValue:"{}",mandatory:{type:"boolean",value:!1}}]},mdxType:"ReferenceTable"}),(0,n.kt)("i",null,"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"}," transformers: {\n    out: ['myOutTransformerId']\n  }\n")),(0,n.kt)("h3",{id:"template"},"Template"),(0,n.kt)(l.Z,{types:{},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"}]},rows:[{parameter:"id",type:"string",description:"Transformer id",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"params",type:"object",description:"Transformer payload",defaultValue:"{}",mandatory:{type:"boolean",value:!1}}]},mdxType:"ReferenceTable"}),(0,n.kt)("i",null,"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"transformers: {\n    out: [{\n        template: `<%= destination %>/<%= protocolId %>`\n    }]\n}\n")))}y.isMDXComponent=!0}}]);