"use strict";(self.webpackChunkservable=self.webpackChunkservable||[]).push([[2191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43839:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(73992),o=r(18679),l=r(92053),i=r(60132);const s=e=>{const t=e.npm?e.npm:(0,i.Z)(e.yarn,"npm"),r=e.yarn?e.yarn:(0,i.Z)(e.npm,"yarn");return n.createElement(a.default,null,n.createElement(o.default,{value:"npm",label:"npm",default:!0},n.createElement(l.default,{language:"bash"},t)),n.createElement(o.default,{value:"bash",label:"yarn"},n.createElement(l.default,{language:"bash"},r)))}},31822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(43839);const l={sidebar_position:1},i="Requirements",s={unversionedId:"gettingstarted/requirements",id:"gettingstarted/requirements",title:"Requirements",description:"Node JS",source:"@site/docs/gettingstarted/requirements.mdx",sourceDirName:"gettingstarted",slug:"/gettingstarted/requirements",permalink:"/docs/next/gettingstarted/requirements",draft:!1,editUrl:"https://github.com/servable-community/generator-servable/tree/main/packages/create-docusaurus/templates/shared/docs/gettingstarted/requirements.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/next/category/getting-started"},next:{title:"Installation",permalink:"/docs/next/gettingstarted/installation"}},c={},u=[{value:"Node JS",id:"node-js",level:3},{value:"Docker (for local environment)",id:"docker-for-local-environment",level:3},{value:"Servable CLI",id:"servable-cli",level:3}],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"requirements"},"Requirements"),(0,a.kt)("h3",{id:"node-js"},(0,a.kt)("a",{parentName:"h3",href:"https://nodejs.org/en/download/"},"Node JS")),(0,a.kt)("p",null,"Before you install CliNext, make sure to download and install Node.js (version 18.x or higher), a JavaScript runtime.\nWhen installing Node.js, you are recommended to check all checkboxes related to dependencies."),(0,a.kt)("h3",{id:"docker-for-local-environment"},"Docker (for local environment)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker"),"\n\ud83d\udc49 ",(0,a.kt)("em",{parentName:"li"},"Version 20.10.0 or above")),(0,a.kt)("li",{parentName:"ul"},"Docker compose\n\ud83d\udc49 ",(0,a.kt)("em",{parentName:"li"},"Version #TODO or above"))),(0,a.kt)("p",null,"The easiest and recommended way to get Docker Compose is to install Docker Desktop. Docker Desktop includes Docker Compose along with Docker Engine and Docker CLI which are Compose prerequisites.\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"More")),(0,a.kt)("h3",{id:"servable-cli"},"Servable CLI"),(0,a.kt)("p",null,"The Servable Command Line Interface "),(0,a.kt)(o.Z,{npm:"npm install -g @servable/cli",mdxType:"BashTabs"}))}m.isMDXComponent=!0}}]);