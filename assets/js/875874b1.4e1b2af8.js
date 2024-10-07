"use strict";(self.webpackChunkservable=self.webpackChunkservable||[]).push([[145],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(f,l(l({ref:t},i),{},{components:r})):n.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<s;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={sidebar_position:2},l="Class",o={unversionedId:"reference/protocol/class",id:"reference/protocol/class",title:"Class",description:"Concept",source:"@site/docs/reference/protocol/class.mdx",sourceDirName:"reference/protocol",slug:"/reference/protocol/class",permalink:"/docs/next/reference/protocol/class",draft:!1,editUrl:"https://github.com/servable-community/generator-servable/tree/main/packages/create-docusaurus/templates/shared/docs/reference/protocol/class.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Index",permalink:"/docs/next/reference/protocol/"},next:{title:"Models",permalink:"/docs/next/reference/protocol/classes"}},c={},p=[{value:"Concept",id:"concept",level:2},{value:"Folder structure",id:"folder-structure",level:2},{value:"Variant entry points",id:"variant-entry-points",level:2},{value:"Usage",id:"usage",level:2},{value:"Declare a class",id:"declare-a-class",level:3},{value:"Use protocols",id:"use-protocols",level:3},{value:"Example",id:"example",level:2}],i={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class"},"Class"),(0,a.kt)("h2",{id:"concept"},"Concept"),(0,a.kt)("p",null,"Allows to define a subclass for this protocol to use other protocols, as to conform to other object models."),(0,a.kt)("h2",{id:"folder-structure"},"Folder structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 class\n\u2502   \u251c\u2500\u2500 index.js\n\u2502   \u251c\u2500\u2500 protocols.js\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"class")," folder contains ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the es6 models handled by the protocol."),(0,a.kt)("li",{parentName:"ul"},"the protocols declaration.")))),(0,a.kt)("h2",{id:"variant-entry-points"},"Variant entry points"),(0,a.kt)("p",null,"None"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"declare-a-class"},"Declare a class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default ({ ParentClass }) => class TargetClass extends ParentClass {\n    disposableOrphans() {\n        const items = super.disposableOrphans ? super.disposableOrphans() : []\n        return [\n            ...items,\n            'wallet'\n        ]\n    }\n\n    disposableChildren() {\n        const items = super.disposableChildren ? super.disposableChildren() : []\n        return [\n            ...items,\n            'wallet'\n        ]\n    }\n}\n")),(0,a.kt)("h3",{id:"use-protocols"},"Use protocols"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default [\n    //protocolslist \n]\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/guides/use"},"See declaring protocols")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"We want our protocol ",(0,a.kt)("strong",{parentName:"p"},"walletable")," to use disposableOrphans and disposableChildren to manage data consistency over deletion:"),(0,a.kt)("p",null,"class/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default ({ ParentClass }) => class TargetClass extends ParentClass {   \n\n    disposableOrphans() {\n        const items = super.disposableOrphans ? super.disposableOrphans() : []\n        return [\n            ...items,\n            'wallet'\n        ]\n    }\n\n    disposableChildren() {\n        const items = super.disposableChildren ? super.disposableChildren() : []\n        return [\n            ...items,\n            'wallet'\n        ]\n    }\n}\n")),(0,a.kt)("p",null,"class/protocols.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'export default [\n    "disposableorphansable",\n    "disposablechildrenable"\n]\n')))}d.isMDXComponent=!0}}]);