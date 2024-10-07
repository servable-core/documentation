"use strict";(self.webpackChunkservable=self.webpackChunkservable||[]).push([[8097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43839:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(73992),l=n(18679),o=n(92053),i=n(60132);const s=e=>{const t=e.npm?e.npm:(0,i.Z)(e.yarn,"npm"),n=e.yarn?e.yarn:(0,i.Z)(e.npm,"yarn");return r.createElement(a.default,null,r.createElement(l.default,{value:"npm",label:"npm",default:!0},r.createElement(o.default,{language:"bash"},t)),r.createElement(l.default,{value:"bash",label:"yarn"},r.createElement(o.default,{language:"bash"},n)))}},45518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),l=n(43839);const o={sidebar_position:2},i="Installation",s={unversionedId:"gettingstarted/installation",id:"gettingstarted/installation",title:"Installation",description:"Step 1: Install the clinext generator",source:"@site/docs/gettingstarted/installation.mdx",sourceDirName:"gettingstarted",slug:"/gettingstarted/installation",permalink:"/docs/next/gettingstarted/installation",draft:!1,editUrl:"https://github.com/servable-community/generator-servable/tree/main/packages/create-docusaurus/templates/shared/docs/gettingstarted/installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/docs/next/gettingstarted/requirements"},next:{title:"Troubleshooting \ud83d\udc1e",permalink:"/docs/next/gettingstarted/troubleshooting"}},c={},u=[{value:"Step 1: Install the clinext generator",id:"step-1-install-the-clinext-generator",level:3}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"step-1-install-the-clinext-generator"},"Step 1: Install the clinext generator"),(0,a.kt)(l.Z,{yarn:"yarn add global clinext",mdxType:"BashTabs"}))}m.isMDXComponent=!0}}]);