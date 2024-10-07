"use strict";(self.webpackChunkservable=self.webpackChunkservable||[]).push([[3546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:3},i="Seed",l={unversionedId:"reference/protocol/seed",id:"reference/protocol/seed",title:"Seed",description:"Servable Automatic Seed is an easy way to seed Servable models.",source:"@site/docs/reference/protocol/seed.md",sourceDirName:"reference/protocol",slug:"/reference/protocol/seed",permalink:"/documentation/docs/next/reference/protocol/seed",draft:!1,editUrl:"https://github.com/servable-community/generator-servable/tree/main/packages/create-docusaurus/templates/shared/docs/reference/protocol/seed.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Schema",permalink:"/documentation/docs/next/reference/protocol/schema"},next:{title:"Service",permalink:"/documentation/docs/next/reference/protocol/service"}},s={},c=[{value:"Entries",id:"entries",level:2},{value:"Data types",id:"data-types",level:3},{value:"Conditions",id:"conditions",level:2},{value:"Types",id:"types",level:3},{value:"Installation",id:"installation",level:4},{value:"Installation",id:"installation-1",level:4},{value:"Groups",id:"groups",level:2},{value:"Implementation path",id:"implementation-path",level:2},{value:"Policies and limits",id:"policies-and-limits",level:2},{value:"Roadmap",id:"roadmap",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seed"},"Seed"),(0,o.kt)("p",null,"Servable Automatic Seed is an easy way to seed Servable models."),(0,o.kt)("p",null,"Servable Automatic Seed was built from the ground up to respect the protocol lifecycle and separation of concerns. Every protocol can define config entries that drive its behaviour at runtime, including the app protocol. The config entries are defined along their conditions and groups in dedicated json files thus guaranteeing an environment agnostic deployment."),(0,o.kt)("p",null,"Servable's unique manualable mechanism used for seeds (manualable protocol) allows an hybrid config. You can define initial config entries in json files and manually add new configs or update existing live. Both the updated and new entries will keep their values while new entries in the json files will be taken into account."),(0,o.kt)("h2",{id:"entries"},"Entries"),(0,o.kt)("p",null,"Servable Config entries are "),(0,o.kt)("h3",{id:"data-types"},"Data types"),(0,o.kt)("h2",{id:"conditions"},"Conditions"),(0,o.kt)("p",null,"Servable Config conditions are a set of rules that determine the actual config entry value a particular user will receive."),(0,o.kt)("h3",{id:"types"},"Types"),(0,o.kt)("h4",{id:"installation"},"Installation"),(0,o.kt)("h4",{id:"installation-1"},"Installation"),(0,o.kt)("h2",{id:"groups"},"Groups"),(0,o.kt)("p",null,"Servable Config groups are a way to organise a set of entries."),(0,o.kt)("h2",{id:"implementation-path"},"Implementation path"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add config entries in you protocol/config dedicated files: entries"),(0,o.kt)("li",{parentName:"ol"},"Run / Deploy your Servable service"),(0,o.kt)("li",{parentName:"ol"})),(0,o.kt)("h2",{id:"policies-and-limits"},"Policies and limits"),(0,o.kt)("p",null,"Note the following policies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Don't use Servable Config to make app updates that should require a user's authorization. This could cause your app to be perceived as untrustworthy."),(0,o.kt)("li",{parentName:"ul"},"Don't store confidential data in Remote Config parameter keys or parameter values. It is possible to decode any parameter keys or values stored in the Remote Config settings for your project."),(0,o.kt)("li",{parentName:"ul"},"Don't attempt to circumvent the requirements of your app's target platform using Remote Config.")),(0,o.kt)("p",null,"Note the following limits:"),(0,o.kt)("h2",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"Servable Dashboard will include a dedicated UI for config entries, conditions and groups manipulation."),(0,o.kt)("p",null,"Generator tasks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generate client side defaults")))}d.isMDXComponent=!0}}]);