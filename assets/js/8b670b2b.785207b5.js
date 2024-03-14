"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7799],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"build-index",title:"Builder's Guides",sidebar_label:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",keywords:["build","index","tools","resources"],slug:"../build-index"},s=void 0,d={unversionedId:"build/build-index",id:"build/build-index",title:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",source:"@site/../docs/build/build-index.md",sourceDirName:"build",slug:"/build-index",permalink:"/docs/build-index",draft:!1,tags:[],version:"current",lastUpdatedBy:"David Hawig",lastUpdatedAt:1694072870,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"build-index",title:"Builder's Guides",sidebar_label:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",keywords:["build","index","tools","resources"],slug:"../build-index"},sidebar:"docs",previous:{title:"Voting for Councillors",permalink:"/docs/maintain/maintain-guides-how-to-vote-councillor"},next:{title:"Node Endpoints",permalink:"/docs/maintain-endpoints"}},u={},c=[{value:"Development Guide",id:"development-guide",level:2},{value:"Tools &amp; Resources",id:"tools--resources",level:2},{value:"Grants",id:"grants",level:3},{value:"PCPs",id:"pcps",level:3},{value:"Hackathon",id:"hackathon",level:3}],p={toc:c},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the builder's section of the\nKusama Guide."),(0,o.kt)("p",null,"Here, you will discover many development tools and resources in the\nKusama ecosystem. We are always adding new\ntools and frameworks as we learn about them, so if you are working on something that should be\nincluded, please reach out to us on\n","\n",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#kusama-watercooler:matrix.org"},"Element"),". This section of\nthe wiki is divided into the following parts:"),(0,o.kt)("h2",{id:"development-guide"},"Development Guide"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/build-guide"},"Starter's Guide")," - High-level overview on choosing a parachain, parathread, or\nsmart contract for your project and how to get started."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/build-pdk"},"Parachain Development")," - Tools for building parachains and parathreads."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/build-smart-contracts"},"Smart Contracts")," - Tools to deploy contracts to a\nKusama parachain.")),(0,o.kt)("h2",{id:"tools--resources"},"Tools & Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/build-tools-index"},"Tools")," - Maintained list of tools."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.substrate.io/reference/command-line-tools/subkey/"},"Subkey")," - Command line utility\nfor generating and inspecting key pairs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/tools"},"JS tools")," - TypeScript tools for offline signing of\ntransactions, RPC calls, and more."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/build-open-source"},"Examples")," - Example projects sourced from the community -- see what others\nare building.")),(0,o.kt)("h3",{id:"grants"},"Grants"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/grants"},"Grants")," - Information regarding grants and funding sources available in the\nKusama ecosystem.")),(0,o.kt)("h3",{id:"pcps"},"PCPs"),(0,o.kt)("p",null,"Polkadot Contracts Proposals (PCPs) are standards for smart contracts in the Polkadot ecosystem."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/PCPs"},"PCP GitHub Repository")," - Read, create, or discuss standards and\nproposals.")),(0,o.kt)("h3",{id:"hackathon"},"Hackathon"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/build-hackathon"},"Resources For Running a Hackathon"))))}f.isMDXComponent=!0}}]);