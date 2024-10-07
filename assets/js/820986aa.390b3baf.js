"use strict";(self.webpackChunkservable=self.webpackChunkservable||[]).push([[1854],{3905:(M,I,D)=>{D.d(I,{Zo:()=>r,kt:()=>a});var N=D(67294);function g(M,I,D){return I in M?Object.defineProperty(M,I,{value:D,enumerable:!0,configurable:!0,writable:!0}):M[I]=D,M}function e(M,I){var D=Object.keys(M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);I&&(N=N.filter((function(I){return Object.getOwnPropertyDescriptor(M,I).enumerable}))),D.push.apply(D,N)}return D}function z(M){for(var I=1;I<arguments.length;I++){var D=null!=arguments[I]?arguments[I]:{};I%2?e(Object(D),!0).forEach((function(I){g(M,I,D[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(D)):e(Object(D)).forEach((function(I){Object.defineProperty(M,I,Object.getOwnPropertyDescriptor(D,I))}))}return M}function j(M,I){if(null==M)return{};var D,N,g=function(M,I){if(null==M)return{};var D,N,g={},e=Object.keys(M);for(N=0;N<e.length;N++)D=e[N],I.indexOf(D)>=0||(g[D]=M[D]);return g}(M,I);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(M);for(N=0;N<e.length;N++)D=e[N],I.indexOf(D)>=0||Object.prototype.propertyIsEnumerable.call(M,D)&&(g[D]=M[D])}return g}var t=N.createContext({}),i=function(M){var I=N.useContext(t),D=I;return M&&(D="function"==typeof M?M(I):z(z({},I),M)),D},r=function(M){var I=i(M.components);return N.createElement(t.Provider,{value:I},M.children)},u="mdxType",A={inlineCode:"code",wrapper:function(M){var I=M.children;return N.createElement(N.Fragment,{},I)}},c=N.forwardRef((function(M,I){var D=M.components,g=M.mdxType,e=M.originalType,t=M.parentName,r=j(M,["components","mdxType","originalType","parentName"]),u=i(D),c=g,a=u["".concat(t,".").concat(c)]||u[c]||A[c]||e;return D?N.createElement(a,z(z({ref:I},r),{},{components:D})):N.createElement(a,z({ref:I},r))}));function a(M,I){var D=arguments,g=I&&I.mdxType;if("string"==typeof M||g){var e=D.length,z=new Array(e);z[0]=c;var j={};for(var t in I)hasOwnProperty.call(I,t)&&(j[t]=I[t]);j.originalType=M,j[u]="string"==typeof M?M:g,z[1]=j;for(var i=2;i<e;i++)z[i]=D[i];return N.createElement.apply(null,z)}return N.createElement.apply(null,D)}c.displayName="MDXCreateElement"},24875:(M,I,D)=>{D.r(I),D.d(I,{assets:()=>t,contentTitle:()=>z,default:()=>A,frontMatter:()=>e,metadata:()=>j,toc:()=>i});var N=D(87462),g=(D(67294),D(3905));const e={sidebar_position:0},z="Overview",j={unversionedId:"tutorials/parseserverapp/overview",id:"version-1.2/tutorials/parseserverapp/overview",title:"Overview",description:"Servable is still experimental and its api may change in the future.",source:"@site/versioned_docs/version-1.2/tutorials/parseserverapp/overview.md",sourceDirName:"tutorials/parseserverapp",slug:"/tutorials/parseserverapp/overview",permalink:"/documentation/docs/tutorials/parseserverapp/overview",draft:!1,editUrl:"https://github.com/servable-community/generator-servable/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.2/tutorials/parseserverapp/overview.md",tags:[],version:"1.2",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Parse Server App",permalink:"/documentation/docs/category/parse-server-app"},next:{title:"1.",permalink:"/documentation/docs/tutorials/parseserverapp/1"}},t={},i=[{value:"Protocols",id:"protocols",level:2}],r={toc:i},u="wrapper";function A(M){let{components:I,...e}=M;return(0,g.kt)(u,(0,N.Z)({},r,e,{components:I,mdxType:"MDXLayout"}),(0,g.kt)("h1",{id:"overview"},"Overview"),(0,g.kt)("admonition",{type:"info"},(0,g.kt)("p",{parentName:"admonition"},"Servable is still experimental and its api may change in the future.")),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"logo",src:D(75758).Z,width:"48",height:"48"})),(0,g.kt)("p",null,(0,g.kt)("strong",{parentName:"p"},"Servable")," is a Node JS framework built for protocols running on your framework engine of choice. It provides a concise, easy to use and scalable template to get the best of protocols."),(0,g.kt)("p",null,"The Servable framework at its core is a server template that uses the @servable/server to launch the different protocols applied to models and executed on the framework engine. "),(0,g.kt)("p",null,"Main protocols:"),(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},"Quick start and Plug & Play Node JS framework"),(0,g.kt)("li",{parentName:"ul"},"Tailored for protocols"),(0,g.kt)("li",{parentName:"ul"},"Schema based models and auto-migration ")),(0,g.kt)("h2",{id:"protocols"},"Protocols"),(0,g.kt)("p",null,'Servable streamlines the server development by separating every "groupable" logic to be a protocol, so that it is organically extracted from the base code and possibly migrated into its own package. By doing so, Servable enforces a clear separation of concerns pattern out of the box. '),(0,g.kt)("p",null,"Just like a docker image is made to be platform agnostic, a protocol is designed to be independant from the current environment it's being used in. A protocol might depend on other protocols, but it does not need to know which application it is used for, or call any of its API."),(0,g.kt)("p",null,"The Servable object acts as a central orchestrator. It holds references to objects every protocol can access (for example the current express app, the Parse Server instance, etc). It can also be used to register special methods provided by protocols and that might be used by other protocols via Services."))}A.isMDXComponent=!0},75758:(M,I,D)=>{D.d(I,{Z:()=>N});const N="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgUGl4ZWxtYXRvciBQcm8gMy40LjMgLS0+Cjxzdmcgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoIiBmaWxsPSIjZmFmM2RkIiBzdHJva2U9IiM0ZDRkNGQiIHN0cm9rZS13aWR0aD0iMS4wOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDYuMTgxNjkgMzkuMjI3MDAxIEMgNi4xODE2OSA0MC42NTAyOCA0Ljk4NDY5MiA0Mi41NTc0IDYuMTgxNjkgNDIuNTU3NCBDIDcuMzc4Njg5IDQyLjU1NzQgMTAuNzYzNTUgNDEuNDM4MTcxIDEwLjc2MzU1IDQwLjAxNDg4MSBDIDEwLjc2MzU1IDM4LjU5MTU5MSA5LjQwMzY0MSAzNi4yOTAzNzkgOC4yMDY2MTIgMzYuMjkwMzc5IEMgNy4wMDk1NzkgMzYuMjkwMzc5IDYuMTgxNjkgMzcuODAzNzQ5IDYuMTgxNjkgMzkuMjI3MDAxIFoiLz4KICAgICAgICA8cGF0aCBpZD0icGF0aDEiIGZpbGw9IiNmYWYzZGQiIHN0cm9rZT0iIzRkNGQ0ZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDMwLjM2NjczIDM0Ljc0MjU5OSBDIDMyLjc3NzQ1OCAzNC43NDI1MTIgMzUuNjkwMDkgMzguNzMxMTU5IDM5LjI1OTEwOSAzOC41NDE0MzkgQyAzOS43MjM4NDMgMzguNTQ0NDg3IDQwLjE0MDA5OSAzOC44Mjk2MzIgNDAuMzEwODEgMzkuMjYxODkgQyA0MC43NzQyNSA0MC4yNjU0NjUgNDAuNzY0MzQzIDQxLjQyMzc1NiA0MC4yODM4MSA0Mi40MTkyNTggQyA0MC4wODkwODggNDIuODQ5NzMxIDM5LjY2MDU4MyA0My4xMjY1MyAzOS4xODgxMTggNDMuMTI3MDQxIEwgMjkuOTUyMTIgNDMuMTI3MDQxIEMgMjkuNTAyNjA5IDQzLjEyNjc4MSAyOS4wOTE2NzMgNDIuODczMDQ3IDI4Ljg5MDA3OSA0Mi40NzEyNzUgQyAyOC42ODg0ODYgNDIuMDY5NTA0IDI4LjczMDcwNSA0MS41ODgzOSAyOC45OTkxODkgNDEuMjI3ODcxIEMgMzAuMjExODYxIDM5LjU4MDc2MSAzMC4zNjY3MzkgMzQuNzQyNjMgMzAuMzY2NzMgMzQuNzQyNTk5IFoiLz4KICAgICAgICA8cGF0aCBpZD0icGF0aDIiIGZpbGw9IiNmYWYzZGQiIHN0cm9rZT0iIzRkNGQ0ZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDMwLjc4NTEzIDIyLjE3ODI0OSBDIDMwLjkzOTY4IDIxLjMyMjY1MSAzNy45Mzk0MTkgMzMuNjM5NzU5IDM3LjI0Mzg4MSAzNi4wNDg0NyBDIDM2LjkzOTUxIDM3LjIzMDQ4IDM1Ljc4NzY4OSAzNy45ODg0NDkgMzQuNTgxNjk5IDM3LjgwMDMzOSBDIDMzLjU1NTQzOSAzNS41MTIzNDEgMzAuMDYxMzggMzQuMDA4ODM5IDI4LjM0Nzk4IDMxLjAwMTcyIFoiLz4KICAgICAgICA8cGF0aCBpZD0icGF0aDMiIGZpbGw9IiNmYWYzZGQiIHN0cm9rZT0iIzRkNGQ0ZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDkuNzgyNDcxIDIzLjAzNzYzIEMgMTMuMTU0MTQ0IDE3LjA3MjI4NyAxOC4yNzIzNDggMTIuMjgzMDEyIDI0LjQ0ODE5MSA5LjMxNDQzIEMgMjQuNDQwMzEgOS4zMTgxIDI0LjQzMzM1OSA5LjMxNzcxOSAyNC40MjU0OCA5LjMyMTU0MSBDIDI3LjkyMDI0IDUuNzI2NTQgMzMuMzA2NDggNC42NzQ0MDggMzguMjI5MTkxIDQuOTc1MDIxIEMgMzguODA1NDIgNS4wMDAwMTkgMzkuMzgxNjQ5IDUuMDUwMTcxIDM5Ljk0NTI1OSA1LjEyNTMyOCBDIDQwLjExNTAwNSA1LjE0OTU1NSA0MC4yODI1NTggNS4xODcyMzcgNDAuNDQ2MzMxIDUuMjM4MDIyIEMgNDAuOTIyMDI0IDUuMzg1MjczIDQxLjM0NDM0NSA1LjY2ODI3NCA0MS42NjE0MTEgNi4wNTIyNSBDIDQyLjEwODAwOSA2LjU1MTUwNiA0Mi4zNTM0ODkgNy4xOTg3MDQgNDIuMzUwMzMgNy44Njg1NDkgTCA0Mi4zNTAzMyA5LjI3MTQ2MSBDIDQyLjMzOTAyIDkuNTAxNTExIDQyLjI5Njg3MSA5LjcyOTAwNCA0Mi4yMjUwMjEgOS45NDc4MzggQyA0MS44OTE3NTggMTAuODkwMDA3IDQxLjE3ODIzOCAxMS42NDg5NjQgNDAuMjU4NDExIDEyLjAzOTY4IEMgMzcuNTI1MzYgMTMuMTAwMzE5IDM1LjExNjQwOSAxNC45ODIxNCAzMy4zMTQ5MyAxNS4zNTQ2MjIgQyAzMi43NjM4MjggMTcuMDMwNjUxIDMyLjQzMjU3MSAxOC43NzExMTYgMzIuMzI5NDQ5IDIwLjUzMjQxIEMgMzIuMDk1OTU5IDI0LjY3MDIxIDMzLjI4NTA0MiAyNi43MzM0NTkgMzMuNTgyMDYyIDMwLjU1MzI4OSBDIDMzLjc0MzI3NSAzMi43MDQzNDIgMzMuNTkyNjgyIDM0Ljg2NzQwMSAzMy4xMzQ5NiAzNi45NzUzNjEgQyAzMi4zNDU1NzMgNDAuNTU0ODYzIDI5LjE2NDU3NiA0My4wOTc3MTMgMjUuNDk5MTA5IDQzLjA3OTM2MSBMIDEzLjk2MjQ3MSA0My4wNzkzNjEgQyAxMS4yNDI1MzEgNDMuMTIyNTA5IDguNzA2MTgxIDQxLjcxMTMxNSA3LjMwODgzIDM5LjM3NzM2MSBMIDcuMjc3MjQ4IDM5LjMyMTU0OCBDIDQuMDY2MjEyIDMzLjYwMzE2MSA4LjA0NTMgMjYuMjQ4NDQgOS43ODI0NzEgMjMuMDM3NjMgWiIvPgogICAgICAgIDxwYXRoIGlkPSJwYXRoNCIgZmlsbD0iIzY2NmE4NiIgc3Ryb2tlPSIjNGQ0ZDRkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0gNDIuMzUwMzMgOC4xNDQwODEgTCA0Mi4zNTAzMyA3Ljg2ODU0OSBDIDQyLjM1MzQ4OSA3LjE5ODcwNCA0Mi4xMDgwMDkgNi41NTE1MDYgNDEuNjYxNDExIDYuMDUyMjUgQyA0MS4zNDQzNDkgNS42NjgyNjYgNDAuOTIyMDI4IDUuMzg1MjU4IDQwLjQ0NjMzMSA1LjIzNzk5OSBDIDQwLjI4MjU1OCA1LjE4NzIxOCA0MC4xMTUwMDUgNS4xNDk1MzYgMzkuOTQ1MjU5IDUuMTI1MzA5IEMgMzkuMzgxNjQ5IDUuMDUwMTcxIDM4LjgwNTQyIDUgMzguMjI5MTkxIDQuOTc0OTk4IEMgMzcuNDUyNTc5IDcuMTc5NjMgNDAuNDQ2MzMxIDcuNDE3NjIyIDQyLjM1MDMzIDguMTQ0MDgxIFoiLz4KICAgICAgICA8cGF0aCBpZD0icGF0aDUiIGZpbGw9IiNmYWYzZGQiIHN0cm9rZT0iIzRkNGQ0ZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDMwLjQzNDQ2IDYuNTkyNzM5IEMgMzAuNDM0NDYgNi41OTI3MzkgMjcuODk3NDYxIDMuNjgyNjUyIDI1LjI3MzU4MSA1LjQzMzQ3MiBDIDIyLjY0OTcgNy4xODQyODggMjYuODA5Mjk5IDkuNDkzIDI2LjgwOTI5OSA5LjQ5MyIvPgogICAgICAgIDxwYXRoIGlkPSJwYXRoNiIgZmlsbD0iI2ZhZjNkZCIgc3Ryb2tlPSJub25lIiBkPSJNIDI2LjA1MzIgMTguMTgxOTk5IEMgMjYuMzEwNTUxIDE3LjMzOTc5IDMyLjAxODEzOSAzMS4wMTI1ODEgMzEuMDMzMTk5IDMzLjM4MzU3OSBDIDMwLjU5MjU2OSAzNC41NTU5NDMgMjkuNDAyNDc3IDM1LjI3MDM1OSAyOC4xNjA2MSAzNS4xMDgwMDIgQyAyNy40MDkyMDEgMzIuODU1ODAxIDIzLjAxMzQ3OSAzMC4wMzg4MTEgMjEuNjYxMzI5IDI3LjA3ODc3IFoiLz4KICAgICAgICA8cGF0aCBpZD0icGF0aDciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRkNGQ0ZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDI2LjA1MzIgMTguMTgxOTk5IEMgMjYuMzEwNTUxIDE3LjMzOTc5IDMyLjAxODEzOSAzMS4wMTI1ODEgMzEuMDMzMTk5IDMzLjM4MzU3OSBDIDMwLjU5MjU2OSAzNC41NTU5NDMgMjkuNDAyNDc3IDM1LjI3MDM1OSAyOC4xNjA2MSAzNS4xMDgwMDIgQyAyNy40MDkyMDEgMzIuODU1ODAxIDIzLjAxMzQ3OSAzMC4wMzg4MTEgMjEuNjYxMzI5IDI3LjA3ODc3Ii8+CiAgICAgICAgPHBhdGggaWQ9InBhdGg4IiBmaWxsPSIjZmFmM2RkIiBzdHJva2U9IiM0ZDRkNGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTSAxNS4wNzkxNCAzMS41ODgyNyBDIDE1LjA3OTE0IDMxLjU4ODI3IDIxLjM0MTMxMSAzMC44NjczNSAyMy4xNDkyMSAzMi41MTMwMzkgQyAyNC4wNzY1OTMgMzMuNDY1ODEzIDI0LjgxNTc2NSAzNC41ODUwOTggMjUuMzI3OSAzNS44MTIwOTkgQyAyNS45Mzc5OTQgMzcuMTYxMjk3IDI3LjM2MDg3NCAzNy45NTA1MzkgMjguODI4NDcgMzcuNzUzNzkyIEMgMzAuMTkzNTkgMzcuNTY3NDU5IDMxLjI1MTMyOSAzNy4yNzI0MTkgMzIuMTU5NjMgMzguMTI3OTkxIEMgMzIuMjQxNjUzIDM4LjYxNDA0IDMyLjI5NDI3IDM5LjEwNDU5OSAzMi4zMTcxODggMzkuNTk2OTg5IEMgMzIuMzYxNTk1IDQwLjUwMzE1MSAzMi4wMzMyMyA0MS4zODgwMDggMzEuNDA4NDM2IDQyLjA0NTgzNCBDIDMwLjc4MzY0MiA0Mi43MDM2NTUgMjkuOTE2ODU1IDQzLjA3NzEyOSAyOS4wMDk2MDkgNDMuMDc5NDE4IEwgMTkuNjQ0OTM5IDQzLjA3OTQxOCBDIDE3LjA0NzczNSA0My4wNzk0MjYgMTQuNjkwNjMyIDQxLjU2MDE4MSAxMy42MTggMzkuMTk0ODIgTCAxMi45NjM1MzEgMzcuNzUxNjI5Ii8+CiAgICAgICAgPHBhdGggaWQ9InBhdGg5IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZDRkNGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTSAzOC40Njg5OTggNDAuNTM2OTk5IEwgMzguMzAwOTk5IDQxLjEyMjAwMiIvPgogICAgICAgIDxwYXRoIGlkPSJwYXRoMTAiIGZpbGw9IiNlNzZmNTEiIHN0cm9rZT0iIzRkNGQ0ZCIgc3Ryb2tlLXdpZHRoPSIxLjA5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0gMjQuMTQyNzUgMTYuMTkzMDAxIEMgMjMuOTQ1NzA1IDE3LjM5MjgzOCAyMy45NDU3MDUgMTguNjE2NzgzIDI0LjE0Mjc1IDE5LjgxNjYyIEMgMjQuNDA1NjIxIDIxLjM5NjI1OSAyNC44ODQwOSAyMi4xMDg5MTkgMjQuNTQ1MzcgMjIuNTY3ODgxIEMgMjQuMjIzMjggMjMuMDA0MzIgMjMuMTYzNTA5IDIzLjIwOTY2OSAxOS42NDY3NyAyMS44Mjk3NSBDIDE5LjY0OTkyOSAyMS4xMjU5IDE5LjcxNzY5OSAxNC44NDgzMzkgMjEuNjU5ODg5IDE0LjQ0ODI4IEMgMjIuMDEyODEgMTQuMzc1NjEgMjIuODEyNTEgMTQuNDE3NzAyIDI0LjE0Mjc1IDE2LjE5MzAwMSBaIi8+CiAgICAgICAgPHBhdGggaWQ9InBhdGgxMSIgZmlsbD0iI2U3NmY1MSIgc3Ryb2tlPSIjNGQ0ZDRkIiBzdHJva2Utd2lkdGg9IjEuMDkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTSAyNS4yOTYxNSAxNi4xNDgzMSBDIDI0LjQ5NjQwNSAxNi42NzE2MTIgMjMuNzczNjQ5IDE3LjMwNDAyNiAyMy4xNDg4MjEgMTguMDI3MjI5IEMgMjEuODk0OTI4IDE5LjM2Mjg2NSAyMS4wNzU5NTEgMjEuMDQ3NjIxIDIwLjgwMDE4IDIyLjg1ODczIEMgMjAuNjg5MDMgMjMuODU5OTQgMjAuODc1MzQgMjQuMTkxNDAxIDIwLjUzMTc1OSAyNC42MDM0MyBDIDE5Ljc1MjIzIDI1LjUzODI0IDE3LjQzMDA5OSAyNS40NjY4MSAxNi4zNzEzMDkgMjQuMjY3OTEgQyAxNi4xNjk4MjEgMjQuMDM5NzggMTUuNTg1MTI5IDIzLjI4NTA3IDE1LjgzNDQ2OSAyMS4yNDgyMiBDIDE2LjIyNDIyIDE4LjA2NDQyMSAxOC40NzMxMDEgMTMuMjA3NTM5IDIxLjYwNTQ3MSAxMy4zOTcwNDkgQyAyMy4zNjA2MDkgMTMuNTAzMjM5IDI0LjY1Nzg2IDE1LjE0OTQyOSAyNS4yOTYxNSAxNi4xNDgzMSBaIi8+CiAgICAgICAgPHBhdGggaWQ9InBhdGgxMiIgZmlsbD0iI2U3NmY1MSIgc3Ryb2tlPSIjNGQ0ZDRkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0gMzMuNzU2NTUgMTYuMDI0NTggQyAzMy45MTY2MzcgMTYuMjkxOTY5IDM0LjAwNzIwMiAxNi41OTUxOTQgMzQuMDE5OTgxIDE2LjkwNjU4IEMgMzQuMDE1OSAxNy40MDA3ODkgMzMuNzU3ODcgMTcuNTg0MzM5IDMzLjU0OTY2IDE4LjA2MDk0OSBDIDMzLjA2NjEzOSAxOS4xNjc3NjEgMzMuNzI4NzQxIDE5Ljg0NjU5IDMzLjE5NDA5OSAyMC43Mzk3MzEgQyAzMy4wMjczNTUgMjAuOTkwODA1IDMyLjgxMzQ2OSAyMS4yMDcxMzYgMzIuNTY0MzEyIDIxLjM3NjczIEMgMzEuNzE1MzA5IDIxLjk1NzAxIDI5Ljk4NDg4IDIxLjU4NzM2IDIzLjY1NjI0IDE3LjU1MTc5IEMgMjMuMTQ0MTQgMTcuMjI1MjQxIDE5LjQ0MDE2MSAxNC44MjY0NSAxOC45MjIwMiAxMi42ODgxMjkgQyAxOC44MTMzMTMgMTIuMzMyNzcxIDE4LjgzMDkxNSAxMS45NTA3NDUgMTguOTcxODQgMTEuNjA2ODg4IEMgMTkuMjkxMTYxIDEwLjkzMjg5MiAyMC4wODYyODEgMTAuODgxNzUyIDIxLjI0MDQ5OSAxMC40MDUyMDkgQyAyMi45NjM0OTkgOS42OTM4NDggMjIuODgzODYgOS4xMDkyMTEgMjMuNjU2MjQgOS4wNDYzNDkgQyAyNS4yMDcxNjEgOC45MjAwNTIgMjUuMzYyMzEgMTEuMjkwNzEgMjcuOTM0MTMgMTIuOTcxOTM5IEMgMzAuMDAzNzEgMTQuMzI0OTA5IDMzLjA1MzIxOSAxNC44NDg5MzggMzMuNzU2NTUgMTYuMDI0NTggWiIvPgogICAgICAgIDxwYXRoIGlkPSJwYXRoMTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRkNGQ0ZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDMzLjI3NDAwMiA2Ljc1IEwgMzIuOTY0MDAxIDcuMDE2OTk4Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="}}]);