"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,b=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"build-substrate",title:"Substrate Connect",sidebar_label:"Substrate Connect",description:"Information about Substrate Connect.",keywords:["build","substrate","substrate connect","light client"],slug:"../build-substrate"},s=void 0,c={unversionedId:"build/build-substrate",id:"build/build-substrate",title:"Substrate Connect",description:"Information about Substrate Connect.",source:"@site/../docs/build/build-substrate.md",sourceDirName:"build",slug:"/build-substrate",permalink:"/docs/build-substrate",draft:!1,tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1663541349,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{id:"build-substrate",title:"Substrate Connect",sidebar_label:"Substrate Connect",description:"Information about Substrate Connect.",keywords:["build","substrate","substrate connect","light client"],slug:"../build-substrate"},sidebar:"docs",previous:{title:"Wallets",permalink:"/docs/build-wallets"},next:{title:"SS58 Registry",permalink:"/docs/build-ss58-registry"}},u={},d=[{value:"Blockchain User Interfaces are still Centralized",id:"blockchain-user-interfaces-are-still-centralized",level:2},{value:"What is Substrate Connect?",id:"what-is-substrate-connect",level:2},{value:"Replacing RPC node reliance with light clients",id:"replacing-rpc-node-reliance-with-light-clients",level:3},{value:"Substrate (full node) vs. Substrate connect (light client)",id:"substrate-full-node-vs-substrate-connect-light-client",level:3},{value:"How to use Substrate Connect",id:"how-to-use-substrate-connect",level:2},{value:"As a JavaScript library",id:"as-a-javascript-library",level:3},{value:"A node bundled with its user interface: ready-to-use light clients",id:"a-node-bundled-with-its-user-interface-ready-to-use-light-clients",level:4},{value:"As a browser extension",id:"as-a-browser-extension",level:3},{value:"Bundling light-clients of multiple chains",id:"bundling-light-clients-of-multiple-chains",level:4},{value:"Resources",id:"resources",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"blockchain-user-interfaces-are-still-centralized"},"Blockchain User Interfaces are still Centralized"),(0,r.kt)("p",null,"The communication between a standard user interface (UI) and a network node is through a JSON RPC\nprotocol. Generally, the UI will showcase the information that is available on the node, and this is\ndone through two main approaches:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"User-Controlled Nodes"),": The UI connects to a node client that the user has installed on their\nmachine.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"These nodes are secure, but installation and maintenance of these nodes tend to be an\ninconvenience."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Publicly-Accessible Nodes"),": The UI connects to a third-party-owned publicly-accessible node\nclient.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"While these nodes are more prevalent in their usage as they are convenient to use, they are\ncentralized and insecure.")))),(0,r.kt)("p",null,"There is now a new paradigm: instead of specifying a centralized RPC node, developers just need to\ndefine the blockchain's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/main-docs/build/chain-spec/"},"chain specification"),"\nfor their application to synchronize with the chain. This is possible with Substrate connect."),(0,r.kt)("h2",{id:"what-is-substrate-connect"},"What is Substrate Connect?"),(0,r.kt)("h3",{id:"replacing-rpc-node-reliance-with-light-clients"},"Replacing ",(0,r.kt)("a",{parentName:"h3",href:"/docs/build-node-interaction"},"RPC node")," reliance with light clients"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://substrate.io/substrate-connect/"},"Substrate connect")," is a JavaScript library and browser\nextension that builds on the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/api/"},"PolkadotJS API"),") to enable developers to\nbuild application-specific light clients for Substrate chains. There is no installation required or\noptional extension with minimal or no maintenance. The node is run by the JavaScript engine."),(0,r.kt)("p",null,"Simply put, Substrate connect is a Substrate client that runs in JavaScript."),(0,r.kt)("p",null,"Application developers no longer need to rely on single RPC nodes to allow end-users to interact\nwith their applications."),(0,r.kt)("h3",{id:"substrate-full-node-vs-substrate-connect-light-client"},"Substrate (full node) vs. Substrate connect (light client)"),(0,r.kt)("p",null,"A light client is a client that lets you utilize all the possibilities of the chain, but it does not\nrequire you to run a full copy of the entire blockchain."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Substrate: Full node"),(0,r.kt)("th",{parentName:"tr",align:null},"Substrate connect: Light client"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"full verification of all blocks of the chain"),(0,r.kt)("td",{parentName:"tr",align:null},"only verifies the authenticity of blocks of the chain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"holds all of the previous block data and the chain's storage in database"),(0,r.kt)("td",{parentName:"tr",align:null},"no database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"installation, maintenance, and execution tend to be exhaustive and require system administration expertise."),(0,r.kt)("td",{parentName:"tr",align:null},"no installation; has an optional extension with minimal or no maintenance. Initializes in five to ten seconds")))),(0,r.kt)("h2",{id:"how-to-use-substrate-connect"},"How to use Substrate Connect"),(0,r.kt)("h3",{id:"as-a-javascript-library"},"As a JavaScript library"),(0,r.kt)("p",null,"Substrate connect provides a PolkadotJS API connected to a bundled node. Through the use of the\nlibrary, a user can run an actual Substrate-compatible node."),(0,r.kt)("h4",{id:"a-node-bundled-with-its-user-interface-ready-to-use-light-clients"},"A node bundled with its user interface: ready-to-use light clients"),(0,r.kt)("p",null,"The UI connects to a node client that is directly integrated: ",(0,r.kt)("strong",{parentName:"p"},"convenient"),", ",(0,r.kt)("strong",{parentName:"p"},"secure"),", and\n",(0,r.kt)("strong",{parentName:"p"},"decentralized"),". This is accomplished through Substrate connect using a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/smoldot/"},"smoldot")," Wasm light client to securely connect to the\nblockchain network without relying on specific third parties."),(0,r.kt)("p",null,"Application developers can now run a Substrate light client in any NodeJS environment\n(",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@substrate/connect"},"@substrate/connect"),"). Currently, Substrate\nconnect supports Polkadot, Kusama, Westend, and Rococo; because light clients are part of the\noverall Substrate framework, they are available for Substrate-based blockchains."),(0,r.kt)("h3",{id:"as-a-browser-extension"},"As a browser extension"),(0,r.kt)("p",null,"Establishing a sufficient number of peers is difficult due to browser limitations on WebSockets from\nHTTPS pages, as many nodes need to be available with TLS. The browser extension provided by\nSubstrate connect helps to overcome this limitation and keeps the chains synced in the background,\nallowing applications to run faster."),(0,r.kt)("h4",{id:"bundling-light-clients-of-multiple-chains"},"Bundling light-clients of multiple chains"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@substrate/connect-extension-protocol"},"browser extension")," allows\nend-users to interact with applications connected to multiple blockchains or connect their own\nblockchains to applications that support it."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Substrate Connect will auto-detect whether a user is using the extension. If not, the Wasm light\nclient will be created in-page for them.")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.parity.io/blog/what-is-a-light-client/"},"What is a light client and why you should care?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.parity.io/blog/introducing-substrate-connect"},"Introducing Substrate Connect: Browser-Based Light Clients for Connecting to Substrate Chains")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-connect/tree/master/projects/extension"},"Substrate connect GitHub Repo"))))}h.isMDXComponent=!0}}]);