"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7799],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},12897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"build-index",title:"Builder's Guides",sidebar_label:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",keywords:["build","index","tools","resources"],slug:"../build-index"},s=void 0,d={unversionedId:"build/build-index",id:"build/build-index",title:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",source:"@site/../docs/build/build-index.md",sourceDirName:"build",slug:"/build-index",permalink:"/docs/build-index",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dan Shields",lastUpdatedAt:1656334890,formattedLastUpdatedAt:"6/27/2022",frontMatter:{id:"build-index",title:"Builder's Guides",sidebar_label:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",keywords:["build","index","tools","resources"],slug:"../build-index"},sidebar:"docs",previous:{title:"Ledger Devices with Statemine",permalink:"/docs/kusama-statemine-ledger"},next:{title:"Node Endpoints",permalink:"/docs/maintain-endpoints"}},u={},c=[{value:"Development Guide",id:"development-guide",level:2},{value:"Tools &amp; Resources",id:"tools--resources",level:2},{value:"Grants",id:"grants",level:3},{value:"PSPs",id:"psps",level:3},{value:"Hackathon",id:"hackathon",level:3}],p={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the builder's section of the\nKusama Guide:kusama }}."),(0,o.kt)("p",null,"Here, you will discover many development tools and resources in the Polkadot ecosystem.\nWe are always adding new tools and frameworks as we learn about them so if you are working\non something that should be included please reach out to us on\n","\n",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#kusama-watercooler:matrix.org"},"Element"),".\nThis section of the wiki is divided into the following parts:"),(0,o.kt)("h2",{id:"development-guide"},"Development Guide"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/build-build-with-polkadot"},"Starter's Guide")," - High level overview on choosing a parachain,\nparathread, or smart contract for your project and how to get started."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/build-pdk"},"Parachain Development")," - Tools for building parachains and\nparathreads."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/build-smart-contracts"},"Polkadot Smart Contracts")," - Tools to deploy contracts to a Polkadot parachain.")),(0,o.kt)("h2",{id:"tools--resources"},"Tools & Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/build-tools-index"},"Tools")," - Maintained list of tools."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.substrate.io/reference/command-line-tools/subkey/"},"Subkey")," - Command line utility for\ngenerating and inspecting key pairs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/tools"},"JS tools")," - TypeScript tools for offline signing of\ntransactions, RPC calls, and more."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs"},"PSP GitHub Repository")," - Polkadot Standards Proposals\n(PSPs) are standards for the Polkadot ecosystem."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#"},"Examples")," - Example projects sourced from the community -- see what others are building.")),(0,o.kt)("h3",{id:"grants"},"Grants"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/grants"},"Grants")," - A list of all Polkadot-related projects given grants by the Web3 Foundation.")),(0,o.kt)("h3",{id:"psps"},"PSPs"),(0,o.kt)("p",null,"Polkadot Standards Proposals (PSPs) are standards for the Polkadot ecosystem."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs"},"PSP GitHub Repository")," - Read, create, or discuss standards and\nproposals.")),(0,o.kt)("h3",{id:"hackathon"},"Hackathon"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/build-hackathon"},"Resources For Running a Hackathon"))))}m.isMDXComponent=!0}}]);