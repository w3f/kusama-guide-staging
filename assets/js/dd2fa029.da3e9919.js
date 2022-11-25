"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9962],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,k=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return a?n.createElement(k,s(s({ref:t},p),{},{components:a})):n.createElement(k,s({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78209:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),s=["components"],r={id:"learn-polkadotjs",title:"PolkadotJS",sidebar_label:"PolkadotJS",description:"Learn about PolkadotJS",keywords:["polkadotjs","polkadotjs apps","apps UI","extension"],slug:"../learn-polkadotjs"},l=void 0,d={unversionedId:"learn/learn-polkadotjs",id:"learn/learn-polkadotjs",title:"PolkadotJS",description:"Learn about PolkadotJS",source:"@site/../docs/learn/learn-polkadotjs.md",sourceDirName:"learn",slug:"/learn-polkadotjs",permalink:"/docs/learn-polkadotjs",draft:!1,tags:[],version:"current",lastUpdatedBy:"Anwesh",lastUpdatedAt:1666340430,formattedLastUpdatedAt:"Oct 21, 2022",frontMatter:{id:"learn-polkadotjs",title:"PolkadotJS",sidebar_label:"PolkadotJS",description:"Learn about PolkadotJS",keywords:["polkadotjs","polkadotjs apps","apps UI","extension"],slug:"../learn-polkadotjs"},sidebar:"docs",previous:{title:"Claims",permalink:"/docs/kusama-claims"},next:{title:"Balances Transfers",permalink:"/docs/learn-balance-transfers"}},p={},c=[{value:"Primary Implementation",id:"primary-implementation",level:2},{value:"Polkadot-JS UI",id:"polkadot-js-ui",level:3},{value:"Polkadot-JS Extension",id:"polkadot-js-extension",level:3},{value:"Polkadot-JS Phishing List",id:"polkadot-js-phishing-list",level:4},{value:"Polkadot-JS API",id:"polkadot-js-api",level:3},{value:"Polkadot-JS Apps",id:"polkadot-js-apps",level:2},{value:"Developers",id:"developers",level:3},{value:"Querying on-chain data",id:"querying-on-chain-data",level:4},{value:"Issuing an extrinsic",id:"issuing-an-extrinsic",level:4},{value:"Considerations",id:"considerations",level:3},{value:"Resources",id:"resources",level:2},{value:"Beginner&#39;s Guide to Polkadot-JS",id:"beginners-guide-to-polkadot-js",level:3},{value:"Documentation",id:"documentation",level:3}],u={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Polkadot-JS is a collection of tools that interfaces with the Polkadot blockchain in a granular way."),(0,i.kt)("h2",{id:"primary-implementation"},"Primary Implementation"),(0,i.kt)("p",null,"Polkadot-JS as a term has multiple moving parts that are worth mentioning."),(0,i.kt)("h3",{id:"polkadot-js-ui"},(0,i.kt)("a",{parentName:"h3",href:"https://polkadot.js.org/"},"Polkadot-JS UI")),(0,i.kt)("p",null,"The Polkadot-JS UI is a hosted application that loads in your browser. The UI has a standard DNS\nhosted version, which always has the latest features, and an IPFS version that is less frequently\nupdated but is more decentralized. This is also often referred to as Polkadot-JS Apps, or the Apps\nUI."),(0,i.kt)("p",null,"Polkadot-JS Apps has many capabilities that go beyond basic wallet functions such as account\ncreation and sending or receiving transactions."),(0,i.kt)("h3",{id:"polkadot-js-extension"},(0,i.kt)("a",{parentName:"h3",href:"https://polkadot.js.org/extension/"},"Polkadot-JS Extension")),(0,i.kt)("p",null,"The extension is a simple tool for managing accounts in a browser extension and allowing the signing\nof extrinsics using these accounts. The Polkadot-JS extension is not made for users to interact with\non-chain functions as one would find through a wallet app. The extension acts as a robust key-store\nand thus acts as an account manager for Substrate-based accounts."),(0,i.kt)("p",null,"However, it also provides a simple interface for interacting with extension-compliant dApps."),(0,i.kt)("p",null,"Ensure that the Polkadot-JS Extension installed is updated with the latest metadata of the chain.\nYou would notice these updates under Settings > Metadata. Click on Update metadata and approve the\nupdate."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"update metadata",src:a(32577).Z,width:"2312",height:"396"})),(0,i.kt)("h4",{id:"polkadot-js-phishing-list"},(0,i.kt)("a",{parentName:"h4",href:"https://polkadot.js.org/phishing/"},"Polkadot-JS Phishing List")),(0,i.kt)("p",null,"The phishing list website is a community-driven curation of less-than-honest operators. The\nPolkadot-JS extension uses this list to warn a user about suspicious URLs and addresses that are\npart of the list, and automatically blocks the account address."),(0,i.kt)("h3",{id:"polkadot-js-api"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/polkadot-js/api"},"Polkadot-JS API")),(0,i.kt)("p",null,"A JavaScript API allowing for programs to interface with the functionality of Polkadot."),(0,i.kt)("h2",{id:"polkadot-js-apps"},"Polkadot-JS Apps"),(0,i.kt)("p",null,"Polkadot-JS Apps is the native Polkadot/Kusama/Substrate UI for interacting with a node, allowing\naccess to all features available on Substrate chains. Polkadot-JS Apps also allows developers to to\ninterface with a local node."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that the UI may not precisely align with the functionality of individual parachains.")),(0,i.kt)("p",null,"Among other things, Polkadot-JS Apps allows a user to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/learn-staking"},"Staking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/learn-governance"},"Governance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/learn-crowdloans"},"Crowdloans")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/learn-auction"},"Auctions")),(0,i.kt)("li",{parentName:"ul"},"Query chain metadata"),(0,i.kt)("li",{parentName:"ul"},"Query on-chain data using RPC calls"),(0,i.kt)("li",{parentName:"ul"},"Call extrinsics using your account")),(0,i.kt)("h3",{id:"developers"},"Developers"),(0,i.kt)("p",null,"A developer can utilize Polkadot-JS Apps to test your code's functionality. Interacting with the\nPolkadot-JS comes down to either querying on-chain data or issuing an extrinsic."),(0,i.kt)("h4",{id:"querying-on-chain-data"},"Querying on-chain data"),(0,i.kt)("p",null,"To populate the Apps UI, the web app queries the Polkadot-JS API. The API then queries a Polkadot\nnode and uses JavaScript to return information that the UI will display on the screen. You can\nchoose which node to connect to by changing it in the upper-left-hand corner of the screen."),(0,i.kt)("p",null,"Let's see how we can query on-chain data with Polkadot JS Apps on Polkadot network with an example.\nTo find out the current value for existential deposit, navigate to Developer > Chain state >\nConstants and query the balances pallet for existential deposit as shown in the snapshot below. You\nneed to click on the plus button to execute the query. The value displayed is in\n",(0,i.kt)("a",{parentName:"p",href:"learn-DOT#polkadot"},"plancks")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"query chain state",src:a(75506).Z,width:"1728",height:"380"})),(0,i.kt)("h4",{id:"issuing-an-extrinsic"},"Issuing an extrinsic"),(0,i.kt)("p",null,"Extrinsics are pieces of information that come from outside the chain and are included in a block.\nExtrinsics can be one of three types: inherents, signed, and unsigned transactions."),(0,i.kt)("p",null,"Most extrinsics displayed on Polkadot-JS Apps are signed transactions. Inherits are non-signed and\nnon-gossiped pieces of information included in blocks by the block author, such as timestamps, which\nare \u201ctrue\u201d because a sufficient number of validators have agreed about validity."),(0,i.kt)("p",null,"Unsigned transactions are information that does not require a signature but will require some sort\nof spam prevention, whereas signed transactions are issued by the originator account of a\ntransaction which contains a signature of that account, which will be subject to a fee to include it\non the chain."),(0,i.kt)("h3",{id:"considerations"},"Considerations"),(0,i.kt)("p",null,"For more user-friendly wallets, check out the supported and treasury-funded wallets on the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/build-wallets"},"Wallets Page")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("h3",{id:"beginners-guide-to-polkadot-js"},"Beginner's Guide to Polkadot-JS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=4EQqwGFV1D8"},"Introduction to Polkadot-JS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=sy7lvAqyzkY"},"Create an account using Polkadot-JS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=g4b4IWR6OrE"},"Network Explorer on Polkadot-JS UI"))),(0,i.kt)("h3",{id:"documentation"},"Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/"},"Official polkadot{.js} docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.substrate.io/reference/command-line-tools/polkadot-apps/"},"Substrate docs on Polkadot-JS"))))}h.isMDXComponent=!0},75506:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/chain-state-constant-8663ba40c98411da3308fdaf40cb13ee.png"},32577:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/update-metadata-676b1c962dcf8bbd3a88f034b35df7f7.png"}}]);