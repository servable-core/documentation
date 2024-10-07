"use strict";(self.webpackChunkservable=self.webpackChunkservable||[]).push([[8186],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53104:(e,n,t)=>{t(67294)},76669:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(67294),o=t(9200);const a=e=>{let{light:n,dark:t,className:a="",role:s="img"}=e;const{colorMode:i}=(0,o.I)(),c="dark"===i?t:n;return r.createElement(c,{className:` \n            ${a}         \n          w-full`,role:s})}},78396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));t(53104),t(76669);const a={sidebar_position:1},s="Add a POST route",i={unversionedId:"guides/routes/post",id:"version-1.2/guides/routes/post",title:"Add a POST route",description:"API stands for Application Programming Interface, meaning it's how to communicate with the system you are creating. A route within an API is a specific path to take to get specific information or data out of.",source:"@site/versioned_docs/version-1.2/guides/routes/post.mdx",sourceDirName:"guides/routes",slug:"/guides/routes/post",permalink:"/documentation/docs/guides/routes/post",draft:!1,editUrl:"https://github.com/servable-community/generator-servable/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.2/guides/routes/post.mdx",tags:[],version:"1.2",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Add a GET route",permalink:"/documentation/docs/guides/routes/add"},next:{title:"Deployment",permalink:"/documentation/docs/category/deployment"}},c={},u=[{value:"References",id:"references",level:2}],p={toc:u},l="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-a-post-route"},"Add a POST route"),(0,o.kt)("p",null,"API stands for Application Programming Interface, meaning it's how to communicate with the system you are creating. A route within an API is a specific path to take to get specific information or data out of."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'export default ({\n    __servableType: \'route\',\n    method: Servable.App.Route.Constants.Methods.GET,\n    path: \'/engine/byname\',\n    cache: {\n        type: Servable.App.Route.Constants.Cache.Type.InMemory,\n        params: {\n            window: 10\n        }\n    },    \n    rateLimiting: {\n        type: Servable.App.Route.Constants.RateLimiting.Type.FixedByIp,\n        params: {\n            limit: 10,\n            window: 100,\n            message: \'Too many requests\'\n        }\n    },\n    schema: {\n        queryString: {\n            protocolId: { type: \'string\' }\n        },\n        response: {\n            200: {\n                type: \'object\',\n                properties: {\n                    index: { type: \'Object\' }\n                }\n            }\n        }\n    },\n    specification: {\n        tags: [\n            "bridge"\n        ],\n        summary: "Get user by user name",\n        description: "",\n        operationId: "getUserByName",\n        parameters: [\n            {\n                "name": "username",\n                "in": "path",\n                "description": "The name that needs to be fetched. Use user1 for testing. ",\n                "required": true,\n                "schema": {\n                    "type": "string"\n                }\n            }\n        ],\n        responses: {\n            200: {\n                "description": "successful operation",\n                "content": {\n                    "application/json": {\n                        "schema": {\n                            "$ref": "#/components/schemas/User"\n                        }\n                    },\n                    "application/xml": {\n                        "schema": {\n                            "$ref": "#/components/schemas/User"\n                        }\n                    }\n                }\n            },\n            400: {\n                "description": "Invalid username supplied"\n            },\n            404: {\n                "description": "Engine not found"\n            }\n        }\n    },\n    request: {\n        type: \'application/json\'\n    },\n    handler: async (request, response, next) => {\n        const { query } = request\n        // const { searchTerm, page = 0, pageSize = 10, sort = \'asc\', } = query\n        const { bridgeId, } = query\n        let _query = new Servable.App.Query(\'Engine\')\n        _query.equalTo(\'uniqueRef\', bridgeId)\n        _query.select([\'name\', \'description\', \'manifest\', \'indexContent\', \'documentation\', \'owner\'])\n        _query.include([\'owner\'])\n        let result = await _query.first({ useMasterKey: true })\n\n        if (!result) {\n            throw ({ message: "No adapter found", code: 204 })\n        }\n        const payload = {\n            protocolId: bridgeId,\n            id: result.id,\n            index: result.get(\'indexContent\'),\n            documentation: result.get(\'documentation\'),\n            manifest: result.get(\'manifest\'),\n            user: {\n                lastname: result.get(\'owner\').get(\'lastname\'),\n                id: result.get(\'owner\').id,\n                slug: result.get(\'owner\').get(\'slugableValue\'),\n                avatarUrl: result.get(\'owner\').get(\'avatarUrl\'),\n            },\n            interaction: {\n                comments: {\n                    count: 20,\n                },\n                likes: {\n                    count: 20,\n                }\n            }\n        }\n        return payload\n    }\n})\n')),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/documentation/docs/reference/protocol/routes"},"Protocol routes"))))}d.isMDXComponent=!0}}]);