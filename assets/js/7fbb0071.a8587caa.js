"use strict";(self.webpackChunkservable=self.webpackChunkservable||[]).push([[7169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:3},l="Models",s={unversionedId:"reference/protocol/classes",id:"version-1.2/reference/protocol/classes",title:"Models",description:"Concept",source:"@site/versioned_docs/version-1.2/reference/protocol/classes.mdx",sourceDirName:"reference/protocol",slug:"/reference/protocol/classes",permalink:"/documentation/docs/reference/protocol/classes",draft:!1,editUrl:"https://github.com/servable-community/generator-servable/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.2/reference/protocol/classes.mdx",tags:[],version:"1.2",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Class",permalink:"/documentation/docs/reference/protocol/class"},next:{title:"Documentation",permalink:"/documentation/docs/reference/protocol/documentation"}},c={},i=[{value:"Concept",id:"concept",level:2},{value:"Folder structure",id:"folder-structure",level:2},{value:"Variant entry points",id:"variant-entry-points",level:2},{value:"Usage",id:"usage",level:2},{value:"Declare a class",id:"declare-a-class",level:3},{value:"Use protocols",id:"use-protocols",level:3},{value:"Use functions",id:"use-functions",level:3},{value:"Use triggers",id:"use-triggers",level:3},{value:"Example",id:"example",level:2}],p={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"models"},"Models"),(0,o.kt)("h2",{id:"concept"},"Concept"),(0,o.kt)("p",null,"Contains the models logic handled by the protocol."),(0,o.kt)("h2",{id:"folder-structure"},"Folder structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 models\n\u2502   \u251c\u2500\u2500 classA\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 class\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 protocols.js\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 functions\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 triggers\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"class")," folder contains ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the es6 models handled by the protocol."),(0,o.kt)("li",{parentName:"ul"},"the protocols declaration."))),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"functions")," folder contains cloud functions specific to the class"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"triggers")," folder contains triggers functions")),(0,o.kt)("h2",{id:"variant-entry-points"},"Variant entry points"),(0,o.kt)("p",null,"None"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"declare-a-class"},"Declare a class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default class ClassA extends Servable.App.Object {\n    constructor() {\n        super('ClassA')\n    }\n}\n")),(0,o.kt)("h3",{id:"use-protocols"},"Use protocols"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default [\n    //protocolslist \n]\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/documentation/docs/guides/use"},"See declaring protocols")),(0,o.kt)("h3",{id:"use-functions"},"Use functions"),(0,o.kt)("h3",{id:"use-triggers"},"Use triggers"),(0,o.kt)("h2",{id:"example"},"Example"))}d.isMDXComponent=!0}}]);