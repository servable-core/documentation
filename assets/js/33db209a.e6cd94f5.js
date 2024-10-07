"use strict";(self.webpackChunkservable=self.webpackChunkservable||[]).push([[6774],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>N});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function M(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},g="mdxType",I={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=M(e,["components","mdxType","originalType","parentName"]),g=s(i),c=n,N=g["".concat(l,".").concat(c)]||g[c]||I[c]||a;return i?o.createElement(N,r(r({ref:t},u),{},{components:i})):o.createElement(N,r({ref:t},u))}));function N(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=c;var M={};for(var l in t)hasOwnProperty.call(t,l)&&(M[l]=t[l]);M.originalType=e,M[g]="string"==typeof e?e:n,r[1]=M;for(var s=2;s<a;s++)r[s]=i[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}c.displayName="MDXCreateElement"},55627:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>I,frontMatter:()=>a,metadata:()=>M,toc:()=>s});var o=i(87462),n=(i(67294),i(3905));const a={sidebar_position:7},r="Contribution guide",M={unversionedId:"contributing",id:"version-1.2/contributing",title:"Contribution guide",description:"logo",source:"@site/versioned_docs/version-1.2/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/documentation/docs/contributing",draft:!1,editUrl:"https://github.com/servable-community/generator-servable/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.2/contributing.md",tags:[],version:"1.2",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Code of conduct",permalink:"/documentation/docs/codeofconduct"},next:{title:"License",permalink:"/documentation/docs/license"}},l={},s=[{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"What should I know before I get started?",id:"what-should-i-know-before-i-get-started",level:2},{value:"Documentation",id:"documentation",level:3},{value:"Resources",id:"resources",level:3},{value:"How Can I Contribute?",id:"how-can-i-contribute",level:2},{value:"Reporting Bugs",id:"reporting-bugs",level:3},{value:"Minimal, Complete and Verifiable Example (MCVE)",id:"minimal-complete-and-verifiable-example-mcve",level:4},{value:"Submitting a Pull Request (PR)",id:"submitting-a-pull-request-pr",level:3},{value:"Before",id:"before",level:4},{value:"During",id:"during",level:4},{value:"After",id:"after",level:4},{value:"Release",id:"release",level:4},{value:"Translate Servable",id:"translate-servable",level:3},{value:"How do I become a project maintainer?",id:"how-do-i-become-a-project-maintainer",level:2},{value:"What do project maintainers need to know?",id:"what-do-project-maintainers-need-to-know",level:2},{value:"Release",id:"release-1",level:3}],u={toc:s},g="wrapper";function I(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"contribution-guide"},"Contribution guide"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"logo",src:i(75758).Z,width:"48",height:"48"})),(0,n.kt)("p",null," Contributing to Servable"),(0,n.kt)("p",null,"\ud83d\udc4d\ud83c\udf89 ",(0,n.kt)("strong",{parentName:"p"},"THANK YOU")," for taking the time to contribute! \ud83c\udf89\ud83d\udc4d"),(0,n.kt)("p",null,"The following is a set of guidelines for contributing to Servable and all projects in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/servable"},"servable organization")," on GitHub. Although these are strongly encouraged guidelines, nothing about this project is set in stone, if you believe something here should be edited, open a pull request to start a discussion about it."),(0,n.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,n.kt)("p",null,"This project and everyone participating in it is governed by the ",(0,n.kt)("a",{parentName:"p",href:"/documentation/docs/codeofconduct"},"Servable Code of Conduct"),". By participating, you are expected to uphold this code. Please report unacceptable behavior to the contact method in the ",(0,n.kt)("a",{parentName:"p",href:"/documentation/docs/codeofconduct"},"Code of Conduct"),"."),(0,n.kt)("h2",{id:"what-should-i-know-before-i-get-started"},"What should I know before I get started?"),(0,n.kt)("h3",{id:"documentation"},"Documentation"),(0,n.kt)("p",null,"All of the documentation for the project is housed within the ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/docs")," folder. The general website is housed within the ",(0,n.kt)("inlineCode",{parentName:"p"},"docs")," folder. It is important while contributing to Servable to ensure that the documentation is complete, up to date, and helpful."),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("p",null,"It is highly encouraged to read through the following resources before contributing."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://servable.app"},"Website"))),(0,n.kt)("h2",{id:"how-can-i-contribute"},"How Can I Contribute?"),(0,n.kt)("h3",{id:"reporting-bugs"},"Reporting Bugs"),(0,n.kt)("p",null,"When reporting bugs please fill out the issue template with as much detail as possible. If you do not fill out the issue template with enough detail for us to debug your issue, your issue is at risk for being closed."),(0,n.kt)("h4",{id:"minimal-complete-and-verifiable-example-mcve"},"Minimal, Complete and Verifiable Example (MCVE)"),(0,n.kt)("p",null,"One of the most important things when submitting an issue is to provide a ",(0,n.kt)("em",{parentName:"p"},"Minimal, Complete and Verifiable Example")," (or MCVE for short). If you are reporting a bug it is important for us to be able to test and debug your code as quickly as possible."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Minimal")," \u2013 Use as little code as possible that still produces the same problem"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Complete")," \u2013 Provide all parts needed to reproduce your problem"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Reproducible")," \u2013 Test the code to make sure it reproduces the problem")),(0,n.kt)("p",null,"Without following these steps when creating code examples it is nearly impossible for us to debug your issue. Help us by putting time and care into code examples so that we also can help you. Not following this guideline puts your issue at risk of being closed."),(0,n.kt)("h3",{id:"submitting-a-pull-request-pr"},"Submitting a Pull Request (PR)"),(0,n.kt)("p",null,"It is highly recommended (although not required) to follow the pattern below before submitting a pull request. Not every step below will be relevant to all pull requests."),(0,n.kt)("h4",{id:"before"},"Before"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Identify a need in the project")," - This can be a bug, protocol request, or other change."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Create a detailed issue to gauge interest")," - Although most pull requests are merged, we don't want you to waste time creating a pull request that doesn't have the support of the community. This doesn't mean that even if the community supports an issue that the corresponding pull request will be merged, but it increases the chances with community support. ",(0,n.kt)("em",{parentName:"li"},"This step is highly encouraged for larger contributions, but not required. For smaller contributions (typos, adding tests, updating documentaion, minor code changes, etc.) it is not necessary to create a separate issue.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Read through the ",(0,n.kt)("inlineCode",{parentName:"strong"},"package.json"))," - The ",(0,n.kt)("inlineCode",{parentName:"li"},"package.json")," file in the root of the repository has a ",(0,n.kt)("strong",{parentName:"li"},"lot")," of useful information about the project. Especially read through the ",(0,n.kt)("inlineCode",{parentName:"li"},"scripts")," section, as a lot of those scripts can help speed up your development process when working in Servable. There are scripts for running tests, building the website, debugging code, fixing lint issues, etc.")),(0,n.kt)("h4",{id:"during"},"During"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Create a fork & branch")," - Before contributing to Servable you must create a fork of the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/servable/servable"},"main repository")," and create a branch on your fork. It is highly discouraged from using a primary branch (ex. ",(0,n.kt)("inlineCode",{parentName:"li"},"main")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"alpha"),") to make your changes. This is due to the fact that if you enable ",(0,n.kt)("inlineCode",{parentName:"li"},"Allow edits from maintainers")," option, maintainers might commit directly to your primary branch which could cause problems if others are using your fork in their applications."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Install dependencies")," - Run ",(0,n.kt)("inlineCode",{parentName:"li"},"npm install")," to install all the dependencies of the project."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Maintain consistency throughout")," - While working in the project, we highly encourage you to maintain the same coding style that the rest of the project uses. This means looking around at similar code and trying to adopt the same style and conventions in your code."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Run tests & linter often")," - It is highly encouraged to run ",(0,n.kt)("inlineCode",{parentName:"li"},"npm test")," & ",(0,n.kt)("inlineCode",{parentName:"li"},"npm run lint")," often to ensure you are conforming to the project guidelines. In order for a pull request to be merged all tests must pass, the linter must throw no errors, and test code coverage must not decrease."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Write tests")," - While (or better yet, before) making changes you should write tests in the test suite to ensure things work as expected.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Test Edge Cases")," - While writing tests try to consider edge cases that might occur and write test for those edge cases. For example, what happens if you a user passes in no arguments, or what happens if the type passed in is not the type you expect."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Code Coverage Must Not Decrease")," - Your pull request will not be merged if it decreases the code coverage for tests, so it is important to write tests to ensure any code added or modified is covered by tests."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"No Log Output")," - It is also important that your tests do not print any output to the console or logs, this includes ",(0,n.kt)("inlineCode",{parentName:"li"},"console.log"),", UncaughtPromiseExceptions, etc. All logs printed should come directly from Jest."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"One Test Must Fail Prior to Code Changes")," - At ",(0,n.kt)("em",{parentName:"li"},"least")," one test you write should fail without the code changes you have made."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Self Contained and Static")," - All tests should be self contained and should not rely on each other in order to pass. All tests must also be static and have no potential of failing based on random or outside factors."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Logic inside Jest Blocks")," - All test logic should take place within Jest blocks (ex. ",(0,n.kt)("inlineCode",{parentName:"li"},"it"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"before"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"beforeEach"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"after")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"afterEach"),"). No interaction with Servable or outside references should take place outside of those blocks (ex. you should not create models or schemas in the global or ",(0,n.kt)("inlineCode",{parentName:"li"},"describe")," scope)."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Update documentation")," - For anything that effects users using Servable, documentation should be added/deleted/modified to reflect the changes you have made. It is important to ensure the documentation you write is as clear as possible, giving examples, and attempting to answer as many relevant questions as possible. For most cases JSDoc documentation should be added to the source files, and a pointer to the JSDoc documentation should be added to the relevant file in ",(0,n.kt)("inlineCode",{parentName:"li"},"docs/docs_src"),". The pointer should look like ",(0,n.kt)("inlineCode",{parentName:"li"},"dyno_jsdoc_dist/SOURCEFILEPATH|SECTIONNAME")," (for example: ",(0,n.kt)("inlineCode",{parentName:"li"},"dyno_jsdoc_dist/Model/index.js|model.name")," will point to the ",(0,n.kt)("inlineCode",{parentName:"li"},"dist/Model/index.js")," source file, and use the documentation for ",(0,n.kt)("inlineCode",{parentName:"li"},"model.name"),"). All pointers should point to the ",(0,n.kt)("inlineCode",{parentName:"li"},"dist")," folder. In certain cases where the documentation does not reference a specific property or method in the code, it is fine to just write the documentation in the ",(0,n.kt)("inlineCode",{parentName:"li"},"docs/docs_src")," folder (an example of this would be the ",(0,n.kt)("inlineCode",{parentName:"li"},"Attribute Types")," section in the Schema documentation)."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Commit small & often")," - Please commit changes often and keep commit size to a minimum. It is highly discouraged from creating one massive commit with all of your changes in it. Every commit should also aim to pass the linter and tests. Commit messages should also be detailed enough to give a good explanation of the change made. Commit messages such as ",(0,n.kt)("inlineCode",{parentName:"li"},"changes")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"did stuff")," are considered ",(0,n.kt)("strong",{parentName:"li"},"poor")," commit messages.")),(0,n.kt)("h4",{id:"after"},"After"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Submit the pull request")," - When submitting the pull request it is important to fill out the complete pull request template. This ensures reviewers of your pull request can easily understand what is going on and make sure all guidelines and requirements have been met. It is also highly recommended to enable the ",(0,n.kt)("inlineCode",{parentName:"li"},"Allow edits from maintainers")," option (be aware that enabling this option means that maintainers have the right to commit to your branch at any time, ",(0,n.kt)("em",{parentName:"li"},"we do use this ability"),")."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Be prepared for questions and suggestions")," - As others review your pull request it is important to be available to answer questions and promptly respond to code suggestions. Stale pull requests run the risk of being closed, even if it's a large change or a lot of effort was put into it."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Ask others for reviews")," - If you know someone who is anticipating your work, ask them to test your branch and leave a detailed review on the pull request.")),(0,n.kt)("h4",{id:"release"},"Release"),(0,n.kt)("p",null,"Servable does not currently have a release schedule that we conform to. We attempt to batch work into a release every so often. If you have a need that requires us releasing a version sooner, please notify us, and we will attempt to cut a new release earlier (however this is not guaranteed, and you are still welcome to point to a branch in NPM if we are unable to release on your timeline)."),(0,n.kt)("h3",{id:"translate-servable"},"Translate Servable"),(0,n.kt)("p",null,"You can help Servable support more languages by translating our content into other languages. You can contribute by viewing our ",(0,n.kt)("a",{parentName:"p",href:"https://crowdin.com/project/servablejscom"},"Crowdin project page")," and start translating today!"),(0,n.kt)("h2",{id:"how-do-i-become-a-project-maintainer"},"How do I become a project maintainer?"),(0,n.kt)("p",null,"At this time we are pretty strict in terms of who gets write/merge access to Servable. The following are general guidelines we look for before granting those permissions, but other factors may apply depending on the situation."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Activity")," - Likely the most important factor is we need to see you remain active on the project for an extended period of time. We want maintainers to be active and although we don't require maintainers to dedicated all their time to Servable, we are looking for maintainers to be active in the community."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Contributions")," - We are looking for project maintainers to be active in contributing feedback, protocols, bug fixes, documentation improvements, and more to the project. Short version: we want project maintainers to show that they are dedicated to improving the project.")),(0,n.kt)("p",null,"In short, some starting tips towards becoming a project maintainer include:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Submit pull requests to improve the project"),(0,n.kt)("li",{parentName:"ol"},"Answer questions in Slack or Stack Overflow"),(0,n.kt)("li",{parentName:"ol"},"Reply to issues on GitHub")),(0,n.kt)("p",null,"If you believe you have a case for becoming a project maintainer and feel as tho you meet those requirements ",(0,n.kt)("a",{parentName:"p",href:"https://charlie.fish/contact"},"contact me")," or reach out on Slack (Charlie Fish) and I'd be happy to discuss next steps with you."),(0,n.kt)("p",null,"It is also important to note that if you become a project maintainer, and become inactive on the project, your project maintainer status may be revoked."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"what-do-project-maintainers-need-to-know"},"What do project maintainers need to know?"),(0,n.kt)("p",null,"The following section is unlikely to be useful to general contributors to Servable, and is reserved for project maintainers."),(0,n.kt)("h3",{id:"release-1"},"Release"),(0,n.kt)("p",null,"In order to release a version of Servable you can kick off this process by running ",(0,n.kt)("inlineCode",{parentName:"p"},"node publish"),". This will kick off the release process. Following the steps it guides you through should lead to a successful release. Please ",(0,n.kt)("a",{parentName:"p",href:"https://charlie.fish/contact"},"contact me")," or message me on the Servable Slack (Charlie Fish) if you have questions or run into any issues."),(0,n.kt)("p",null,"It is important to note that you must have write permissions to the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch in order for this process to be successful."))}I.isMDXComponent=!0},75758:(e,t,i)=>{i.d(t,{Z:()=>o});const o="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgUGl4ZWxtYXRvciBQcm8gMy40LjMgLS0+Cjxzdmcgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoIiBmaWxsPSIjZmFmM2RkIiBzdHJva2U9IiM0ZDRkNGQiIHN0cm9rZS13aWR0aD0iMS4wOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDYuMTgxNjkgMzkuMjI3MDAxIEMgNi4xODE2OSA0MC42NTAyOCA0Ljk4NDY5MiA0Mi41NTc0IDYuMTgxNjkgNDIuNTU3NCBDIDcuMzc4Njg5IDQyLjU1NzQgMTAuNzYzNTUgNDEuNDM4MTcxIDEwLjc2MzU1IDQwLjAxNDg4MSBDIDEwLjc2MzU1IDM4LjU5MTU5MSA5LjQwMzY0MSAzNi4yOTAzNzkgOC4yMDY2MTIgMzYuMjkwMzc5IEMgNy4wMDk1NzkgMzYuMjkwMzc5IDYuMTgxNjkgMzcuODAzNzQ5IDYuMTgxNjkgMzkuMjI3MDAxIFoiLz4KICAgICAgICA8cGF0aCBpZD0icGF0aDEiIGZpbGw9IiNmYWYzZGQiIHN0cm9rZT0iIzRkNGQ0ZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDMwLjM2NjczIDM0Ljc0MjU5OSBDIDMyLjc3NzQ1OCAzNC43NDI1MTIgMzUuNjkwMDkgMzguNzMxMTU5IDM5LjI1OTEwOSAzOC41NDE0MzkgQyAzOS43MjM4NDMgMzguNTQ0NDg3IDQwLjE0MDA5OSAzOC44Mjk2MzIgNDAuMzEwODEgMzkuMjYxODkgQyA0MC43NzQyNSA0MC4yNjU0NjUgNDAuNzY0MzQzIDQxLjQyMzc1NiA0MC4yODM4MSA0Mi40MTkyNTggQyA0MC4wODkwODggNDIuODQ5NzMxIDM5LjY2MDU4MyA0My4xMjY1MyAzOS4xODgxMTggNDMuMTI3MDQxIEwgMjkuOTUyMTIgNDMuMTI3MDQxIEMgMjkuNTAyNjA5IDQzLjEyNjc4MSAyOS4wOTE2NzMgNDIuODczMDQ3IDI4Ljg5MDA3OSA0Mi40NzEyNzUgQyAyOC42ODg0ODYgNDIuMDY5NTA0IDI4LjczMDcwNSA0MS41ODgzOSAyOC45OTkxODkgNDEuMjI3ODcxIEMgMzAuMjExODYxIDM5LjU4MDc2MSAzMC4zNjY3MzkgMzQuNzQyNjMgMzAuMzY2NzMgMzQuNzQyNTk5IFoiLz4KICAgICAgICA8cGF0aCBpZD0icGF0aDIiIGZpbGw9IiNmYWYzZGQiIHN0cm9rZT0iIzRkNGQ0ZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDMwLjc4NTEzIDIyLjE3ODI0OSBDIDMwLjkzOTY4IDIxLjMyMjY1MSAzNy45Mzk0MTkgMzMuNjM5NzU5IDM3LjI0Mzg4MSAzNi4wNDg0NyBDIDM2LjkzOTUxIDM3LjIzMDQ4IDM1Ljc4NzY4OSAzNy45ODg0NDkgMzQuNTgxNjk5IDM3LjgwMDMzOSBDIDMzLjU1NTQzOSAzNS41MTIzNDEgMzAuMDYxMzggMzQuMDA4ODM5IDI4LjM0Nzk4IDMxLjAwMTcyIFoiLz4KICAgICAgICA8cGF0aCBpZD0icGF0aDMiIGZpbGw9IiNmYWYzZGQiIHN0cm9rZT0iIzRkNGQ0ZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDkuNzgyNDcxIDIzLjAzNzYzIEMgMTMuMTU0MTQ0IDE3LjA3MjI4NyAxOC4yNzIzNDggMTIuMjgzMDEyIDI0LjQ0ODE5MSA5LjMxNDQzIEMgMjQuNDQwMzEgOS4zMTgxIDI0LjQzMzM1OSA5LjMxNzcxOSAyNC40MjU0OCA5LjMyMTU0MSBDIDI3LjkyMDI0IDUuNzI2NTQgMzMuMzA2NDggNC42NzQ0MDggMzguMjI5MTkxIDQuOTc1MDIxIEMgMzguODA1NDIgNS4wMDAwMTkgMzkuMzgxNjQ5IDUuMDUwMTcxIDM5Ljk0NTI1OSA1LjEyNTMyOCBDIDQwLjExNTAwNSA1LjE0OTU1NSA0MC4yODI1NTggNS4xODcyMzcgNDAuNDQ2MzMxIDUuMjM4MDIyIEMgNDAuOTIyMDI0IDUuMzg1MjczIDQxLjM0NDM0NSA1LjY2ODI3NCA0MS42NjE0MTEgNi4wNTIyNSBDIDQyLjEwODAwOSA2LjU1MTUwNiA0Mi4zNTM0ODkgNy4xOTg3MDQgNDIuMzUwMzMgNy44Njg1NDkgTCA0Mi4zNTAzMyA5LjI3MTQ2MSBDIDQyLjMzOTAyIDkuNTAxNTExIDQyLjI5Njg3MSA5LjcyOTAwNCA0Mi4yMjUwMjEgOS45NDc4MzggQyA0MS44OTE3NTggMTAuODkwMDA3IDQxLjE3ODIzOCAxMS42NDg5NjQgNDAuMjU4NDExIDEyLjAzOTY4IEMgMzcuNTI1MzYgMTMuMTAwMzE5IDM1LjExNjQwOSAxNC45ODIxNCAzMy4zMTQ5MyAxNS4zNTQ2MjIgQyAzMi43NjM4MjggMTcuMDMwNjUxIDMyLjQzMjU3MSAxOC43NzExMTYgMzIuMzI5NDQ5IDIwLjUzMjQxIEMgMzIuMDk1OTU5IDI0LjY3MDIxIDMzLjI4NTA0MiAyNi43MzM0NTkgMzMuNTgyMDYyIDMwLjU1MzI4OSBDIDMzLjc0MzI3NSAzMi43MDQzNDIgMzMuNTkyNjgyIDM0Ljg2NzQwMSAzMy4xMzQ5NiAzNi45NzUzNjEgQyAzMi4zNDU1NzMgNDAuNTU0ODYzIDI5LjE2NDU3NiA0My4wOTc3MTMgMjUuNDk5MTA5IDQzLjA3OTM2MSBMIDEzLjk2MjQ3MSA0My4wNzkzNjEgQyAxMS4yNDI1MzEgNDMuMTIyNTA5IDguNzA2MTgxIDQxLjcxMTMxNSA3LjMwODgzIDM5LjM3NzM2MSBMIDcuMjc3MjQ4IDM5LjMyMTU0OCBDIDQuMDY2MjEyIDMzLjYwMzE2MSA4LjA0NTMgMjYuMjQ4NDQgOS43ODI0NzEgMjMuMDM3NjMgWiIvPgogICAgICAgIDxwYXRoIGlkPSJwYXRoNCIgZmlsbD0iIzY2NmE4NiIgc3Ryb2tlPSIjNGQ0ZDRkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0gNDIuMzUwMzMgOC4xNDQwODEgTCA0Mi4zNTAzMyA3Ljg2ODU0OSBDIDQyLjM1MzQ4OSA3LjE5ODcwNCA0Mi4xMDgwMDkgNi41NTE1MDYgNDEuNjYxNDExIDYuMDUyMjUgQyA0MS4zNDQzNDkgNS42NjgyNjYgNDAuOTIyMDI4IDUuMzg1MjU4IDQwLjQ0NjMzMSA1LjIzNzk5OSBDIDQwLjI4MjU1OCA1LjE4NzIxOCA0MC4xMTUwMDUgNS4xNDk1MzYgMzkuOTQ1MjU5IDUuMTI1MzA5IEMgMzkuMzgxNjQ5IDUuMDUwMTcxIDM4LjgwNTQyIDUgMzguMjI5MTkxIDQuOTc0OTk4IEMgMzcuNDUyNTc5IDcuMTc5NjMgNDAuNDQ2MzMxIDcuNDE3NjIyIDQyLjM1MDMzIDguMTQ0MDgxIFoiLz4KICAgICAgICA8cGF0aCBpZD0icGF0aDUiIGZpbGw9IiNmYWYzZGQiIHN0cm9rZT0iIzRkNGQ0ZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDMwLjQzNDQ2IDYuNTkyNzM5IEMgMzAuNDM0NDYgNi41OTI3MzkgMjcuODk3NDYxIDMuNjgyNjUyIDI1LjI3MzU4MSA1LjQzMzQ3MiBDIDIyLjY0OTcgNy4xODQyODggMjYuODA5Mjk5IDkuNDkzIDI2LjgwOTI5OSA5LjQ5MyIvPgogICAgICAgIDxwYXRoIGlkPSJwYXRoNiIgZmlsbD0iI2ZhZjNkZCIgc3Ryb2tlPSJub25lIiBkPSJNIDI2LjA1MzIgMTguMTgxOTk5IEMgMjYuMzEwNTUxIDE3LjMzOTc5IDMyLjAxODEzOSAzMS4wMTI1ODEgMzEuMDMzMTk5IDMzLjM4MzU3OSBDIDMwLjU5MjU2OSAzNC41NTU5NDMgMjkuNDAyNDc3IDM1LjI3MDM1OSAyOC4xNjA2MSAzNS4xMDgwMDIgQyAyNy40MDkyMDEgMzIuODU1ODAxIDIzLjAxMzQ3OSAzMC4wMzg4MTEgMjEuNjYxMzI5IDI3LjA3ODc3IFoiLz4KICAgICAgICA8cGF0aCBpZD0icGF0aDciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRkNGQ0ZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDI2LjA1MzIgMTguMTgxOTk5IEMgMjYuMzEwNTUxIDE3LjMzOTc5IDMyLjAxODEzOSAzMS4wMTI1ODEgMzEuMDMzMTk5IDMzLjM4MzU3OSBDIDMwLjU5MjU2OSAzNC41NTU5NDMgMjkuNDAyNDc3IDM1LjI3MDM1OSAyOC4xNjA2MSAzNS4xMDgwMDIgQyAyNy40MDkyMDEgMzIuODU1ODAxIDIzLjAxMzQ3OSAzMC4wMzg4MTEgMjEuNjYxMzI5IDI3LjA3ODc3Ii8+CiAgICAgICAgPHBhdGggaWQ9InBhdGg4IiBmaWxsPSIjZmFmM2RkIiBzdHJva2U9IiM0ZDRkNGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTSAxNS4wNzkxNCAzMS41ODgyNyBDIDE1LjA3OTE0IDMxLjU4ODI3IDIxLjM0MTMxMSAzMC44NjczNSAyMy4xNDkyMSAzMi41MTMwMzkgQyAyNC4wNzY1OTMgMzMuNDY1ODEzIDI0LjgxNTc2NSAzNC41ODUwOTggMjUuMzI3OSAzNS44MTIwOTkgQyAyNS45Mzc5OTQgMzcuMTYxMjk3IDI3LjM2MDg3NCAzNy45NTA1MzkgMjguODI4NDcgMzcuNzUzNzkyIEMgMzAuMTkzNTkgMzcuNTY3NDU5IDMxLjI1MTMyOSAzNy4yNzI0MTkgMzIuMTU5NjMgMzguMTI3OTkxIEMgMzIuMjQxNjUzIDM4LjYxNDA0IDMyLjI5NDI3IDM5LjEwNDU5OSAzMi4zMTcxODggMzkuNTk2OTg5IEMgMzIuMzYxNTk1IDQwLjUwMzE1MSAzMi4wMzMyMyA0MS4zODgwMDggMzEuNDA4NDM2IDQyLjA0NTgzNCBDIDMwLjc4MzY0MiA0Mi43MDM2NTUgMjkuOTE2ODU1IDQzLjA3NzEyOSAyOS4wMDk2MDkgNDMuMDc5NDE4IEwgMTkuNjQ0OTM5IDQzLjA3OTQxOCBDIDE3LjA0NzczNSA0My4wNzk0MjYgMTQuNjkwNjMyIDQxLjU2MDE4MSAxMy42MTggMzkuMTk0ODIgTCAxMi45NjM1MzEgMzcuNzUxNjI5Ii8+CiAgICAgICAgPHBhdGggaWQ9InBhdGg5IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZDRkNGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTSAzOC40Njg5OTggNDAuNTM2OTk5IEwgMzguMzAwOTk5IDQxLjEyMjAwMiIvPgogICAgICAgIDxwYXRoIGlkPSJwYXRoMTAiIGZpbGw9IiNlNzZmNTEiIHN0cm9rZT0iIzRkNGQ0ZCIgc3Ryb2tlLXdpZHRoPSIxLjA5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0gMjQuMTQyNzUgMTYuMTkzMDAxIEMgMjMuOTQ1NzA1IDE3LjM5MjgzOCAyMy45NDU3MDUgMTguNjE2NzgzIDI0LjE0Mjc1IDE5LjgxNjYyIEMgMjQuNDA1NjIxIDIxLjM5NjI1OSAyNC44ODQwOSAyMi4xMDg5MTkgMjQuNTQ1MzcgMjIuNTY3ODgxIEMgMjQuMjIzMjggMjMuMDA0MzIgMjMuMTYzNTA5IDIzLjIwOTY2OSAxOS42NDY3NyAyMS44Mjk3NSBDIDE5LjY0OTkyOSAyMS4xMjU5IDE5LjcxNzY5OSAxNC44NDgzMzkgMjEuNjU5ODg5IDE0LjQ0ODI4IEMgMjIuMDEyODEgMTQuMzc1NjEgMjIuODEyNTEgMTQuNDE3NzAyIDI0LjE0Mjc1IDE2LjE5MzAwMSBaIi8+CiAgICAgICAgPHBhdGggaWQ9InBhdGgxMSIgZmlsbD0iI2U3NmY1MSIgc3Ryb2tlPSIjNGQ0ZDRkIiBzdHJva2Utd2lkdGg9IjEuMDkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTSAyNS4yOTYxNSAxNi4xNDgzMSBDIDI0LjQ5NjQwNSAxNi42NzE2MTIgMjMuNzczNjQ5IDE3LjMwNDAyNiAyMy4xNDg4MjEgMTguMDI3MjI5IEMgMjEuODk0OTI4IDE5LjM2Mjg2NSAyMS4wNzU5NTEgMjEuMDQ3NjIxIDIwLjgwMDE4IDIyLjg1ODczIEMgMjAuNjg5MDMgMjMuODU5OTQgMjAuODc1MzQgMjQuMTkxNDAxIDIwLjUzMTc1OSAyNC42MDM0MyBDIDE5Ljc1MjIzIDI1LjUzODI0IDE3LjQzMDA5OSAyNS40NjY4MSAxNi4zNzEzMDkgMjQuMjY3OTEgQyAxNi4xNjk4MjEgMjQuMDM5NzggMTUuNTg1MTI5IDIzLjI4NTA3IDE1LjgzNDQ2OSAyMS4yNDgyMiBDIDE2LjIyNDIyIDE4LjA2NDQyMSAxOC40NzMxMDEgMTMuMjA3NTM5IDIxLjYwNTQ3MSAxMy4zOTcwNDkgQyAyMy4zNjA2MDkgMTMuNTAzMjM5IDI0LjY1Nzg2IDE1LjE0OTQyOSAyNS4yOTYxNSAxNi4xNDgzMSBaIi8+CiAgICAgICAgPHBhdGggaWQ9InBhdGgxMiIgZmlsbD0iI2U3NmY1MSIgc3Ryb2tlPSIjNGQ0ZDRkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0gMzMuNzU2NTUgMTYuMDI0NTggQyAzMy45MTY2MzcgMTYuMjkxOTY5IDM0LjAwNzIwMiAxNi41OTUxOTQgMzQuMDE5OTgxIDE2LjkwNjU4IEMgMzQuMDE1OSAxNy40MDA3ODkgMzMuNzU3ODcgMTcuNTg0MzM5IDMzLjU0OTY2IDE4LjA2MDk0OSBDIDMzLjA2NjEzOSAxOS4xNjc3NjEgMzMuNzI4NzQxIDE5Ljg0NjU5IDMzLjE5NDA5OSAyMC43Mzk3MzEgQyAzMy4wMjczNTUgMjAuOTkwODA1IDMyLjgxMzQ2OSAyMS4yMDcxMzYgMzIuNTY0MzEyIDIxLjM3NjczIEMgMzEuNzE1MzA5IDIxLjk1NzAxIDI5Ljk4NDg4IDIxLjU4NzM2IDIzLjY1NjI0IDE3LjU1MTc5IEMgMjMuMTQ0MTQgMTcuMjI1MjQxIDE5LjQ0MDE2MSAxNC44MjY0NSAxOC45MjIwMiAxMi42ODgxMjkgQyAxOC44MTMzMTMgMTIuMzMyNzcxIDE4LjgzMDkxNSAxMS45NTA3NDUgMTguOTcxODQgMTEuNjA2ODg4IEMgMTkuMjkxMTYxIDEwLjkzMjg5MiAyMC4wODYyODEgMTAuODgxNzUyIDIxLjI0MDQ5OSAxMC40MDUyMDkgQyAyMi45NjM0OTkgOS42OTM4NDggMjIuODgzODYgOS4xMDkyMTEgMjMuNjU2MjQgOS4wNDYzNDkgQyAyNS4yMDcxNjEgOC45MjAwNTIgMjUuMzYyMzEgMTEuMjkwNzEgMjcuOTM0MTMgMTIuOTcxOTM5IEMgMzAuMDAzNzEgMTQuMzI0OTA5IDMzLjA1MzIxOSAxNC44NDg5MzggMzMuNzU2NTUgMTYuMDI0NTggWiIvPgogICAgICAgIDxwYXRoIGlkPSJwYXRoMTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRkNGQ0ZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDMzLjI3NDAwMiA2Ljc1IEwgMzIuOTY0MDAxIDcuMDE2OTk4Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="}}]);