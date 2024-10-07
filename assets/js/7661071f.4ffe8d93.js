"use strict";(self.webpackChunkservable=self.webpackChunkservable||[]).push([[9642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=c(r),b=a,g=p["".concat(s,".").concat(b)]||p[b]||m[b]||n;return r?o.createElement(g,l(l({ref:t},i),{},{components:r})):o.createElement(g,l({ref:t},i))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var c=2;c<n;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},71362:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>u,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const n={slug:"welcome",title:"Welcome",authors:["aboubacar"],tags:["facebook","hello","docusaurus"]},l=void 0,u={permalink:"/blog/welcome",editUrl:"https://github.com/servable-community/generator-servable/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md",source:"@site/blog/2021-08-26-welcome/index.md",title:"Welcome",description:"Docusaurus blogging protocols are powered by the blog plugin.",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"Aboubacar Doucoure",title:"Creator of Servable",url:"https://github.com/servable-community",imageURL:"https://github.com/servable-community.png",key:"aboubacar"}],frontMatter:{slug:"welcome",title:"Welcome",authors:["aboubacar"],tags:["facebook","hello","docusaurus"]},nextItem:{title:"MDX Blog Post",permalink:"/blog/mdx-blog-post"}},s={authorsImageUrls:[void 0]},c=[],i={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/guides/blog"},"Docusaurus blogging protocols")," are powered by the ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/guides/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,a.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,a.kt)("p",null,"Regular blog authors can be added to ",(0,a.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,a.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,a.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docusaurus Plushie",src:r(34212).Z,width:"1500",height:"500"})),(0,a.kt)("p",null,"The blog supports tags as well!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,a.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}m.isMDXComponent=!0},34212:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);