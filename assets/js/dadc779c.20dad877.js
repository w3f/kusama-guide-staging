(self.webpackChunk=self.webpackChunk||[]).push([[3046],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61251:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>d,default:()=>p});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],l={id:"learn-runtime-upgrades",title:"Runtime Upgrades",sidebar_label:"Runtime Upgrades"},s="Runtime Upgrades",c={unversionedId:"learn-runtime-upgrades",id:"learn-runtime-upgrades",isDocsHomePage:!1,title:"Runtime Upgrades",description:"Runtime upgrades allow Polkadot to change the logic of the chain, without the need for a hard fork.",source:"@site/../docs/learn-runtime-upgrades.md",sourceDirName:".",slug:"/learn-runtime-upgrades",permalink:"/docs/learn-runtime-upgrades",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-runtime-upgrades.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1627373476,formattedLastUpdatedAt:"7/27/2021",frontMatter:{id:"learn-runtime-upgrades",title:"Runtime Upgrades",sidebar_label:"Runtime Upgrades"}},d=[{value:"Forking vs Forkless",id:"forking-vs-forkless",children:[]},{value:"New Client Release",id:"new-client-release",children:[{value:"For Infrastructure Providers",id:"for-infrastructure-providers",children:[]},{value:"For Nominators",id:"for-nominators",children:[]},{value:"For Wallets",id:"for-wallets",children:[]}]},{value:"Monitoring Changes",id:"monitoring-changes",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"runtime-upgrades"},"Runtime Upgrades"),(0,o.kt)("p",null,"Runtime upgrades allow Polkadot to change the logic of the chain, without the need for a hard fork."),(0,o.kt)("h2",{id:"forking-vs-forkless"},"Forking vs Forkless"),(0,o.kt)("p",null,'When we talk about "forking", we are referring to the act of invoking the ',(0,o.kt)("inlineCode",{parentName:"p"},"fork")," system call ","[within\na system]",", where a process creates a copy of itself. In software development, this is the act of\nforking source code from one software package that creates a separate piece of that software."),(0,o.kt)("p",null,'You may have come across the terms "hard fork" and "soft fork" before in the blockchain space.'),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"hard fork")," sees the blockchain's underlying technology (i.e. the protocol) radically changed\nand exists as a ",(0,o.kt)("em",{parentName:"p"},"different")," or ",(0,o.kt)("em",{parentName:"p"},"new")," version. This version is meant to be incompatible with the\noriginal version. This means that both blockchains exist simultaneously. Henceforth, a hard fork\nrequires node operators to manually upgrade their nodes to the latest runtime version. In a\ndistributed system, this is a complex process to coordinate and communicate."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"soft fork")," sees an upgrade or update in the blockchain's underlying technology. Unlike a hard\nfork, a soft fork is a backward-compatible upgrade; the upgraded nodes can communicate with the\nnon-upgraded ones."),(0,o.kt)("p",null,"Upgrading conventional blockchains often requires forking the network, which is time-consuming and\ncan break up communities. Something that conventional networks also lack is the ability to perform\nthought-through governance that would allow for effective decision-making and signalling for runtime\nupgrades."),(0,o.kt)("p",null,"Polkadot sees itself as a next-generation blockchain because it addresses these obstacles in a\nmeaningful way - revolutionizing the runtime upgrading process by enabling blockchains to upgrade\nthemselves without the need to fork the chain. These forkless upgrades are enacted through\nPolkadot\u2019s transparent ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"on-chain governance")," system."),(0,o.kt)("h2",{id:"new-client-release"},"New ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/paritytech/polkadot/releases"},"Client Release")),(0,o.kt)("p",null,"The existing runtime logic is followed to update the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-wasm"},"Wasm")," runtime stored on the\nblockchain to a new version. The upgrade is then included in the blockchain itself, meaning that all\nthe nodes on the network execute it. Generally, there is no need to upgrade your nodes manually\nbefore the runtime upgrade as they will automatically start to follow the new logic of the chain.\nNodes only need to be updated when the runtime requires new host functions or there is a change in\nnetworking or consensus."),(0,o.kt)("p",null,"Transactions constructed for a given runtime version will not work on later versions. Therefore, a\ntransaction constructed based on a runtime version will not be valid in later runtime versions. If\nyou don't think you can submit a transaction before the upgrade, it is better to wait and construct\nit after the upgrade takes place."),(0,o.kt)("p",null,"Although upgrading your nodes is generally not necessary to follow an upgrade, we recommend\nfollowing the Polkadot releases and upgrading promptly, especially for high priority or critical\nreleases."),(0,o.kt)("h3",{id:"for-infrastructure-providers"},"For Infrastructure Providers"),(0,o.kt)("p",null,"Infrastructure services including but not limited to the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-upgrade"},"Validators")),(0,o.kt)("li",{parentName:"ul"},"API services"),(0,o.kt)("li",{parentName:"ul"},"Node-as-a-Service (NaaS)"),(0,o.kt)("li",{parentName:"ul"},"General infrastructure management (e.g. block explorers, exchanges)")),(0,o.kt)("p",null,"For validators, keeping in sync with the network is key. At times, upgrades will require validators\nto upgrade within a specific time frame to ensure continued sync with their node. It is essential to\ncheck the release notes, starting with the upgrade priority and acting accordingly."),(0,o.kt)("p",null,"For general infrastructure providers, aside from following the Polkadot releases and upgrading in a\ntimely manner, somethings to keep an eye out on is updating your parsing logic and acknowledging\nchanges to the available RPC clients, such as the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar"),"."),(0,o.kt)("h3",{id:"for-nominators"},"For ",(0,o.kt)("a",{parentName:"h3",href:"/docs/maintain-guides-how-to-nominate-polkadot"},"Nominators")),(0,o.kt)("p",null,"Runtime upgrades don't require any actions by a nominator, though, it is always encouraged to keep\nup-to-date and participate with the latest runtime upgrade motions and releases, while keeping an\neye on how the nodes on the network are reacting to a new upgrade."),(0,o.kt)("h3",{id:"for-wallets"},"For ",(0,o.kt)("a",{parentName:"h3",href:"/docs/build-wallets"},"Wallets")),(0,o.kt)("p",null,'Wallets should look out for updates to the transaction lifecycle, such as tx broadcasting. An\nexample would be constructing a transaction with a new spec, "n", but broadcasting it with a spec\n" > n " - transactions could be propagated, or even rejected by peers on the network.'),(0,o.kt)("h2",{id:"monitoring-changes"},"Monitoring Changes"),(0,o.kt)("p",null,"Using a Polkadot blockchain explorer, you can monitor the chain for on-chain changes. The following\nsteps relate to ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.subscan.io/"},"subscan"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In general, an action has two components: the module (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"democracy"),") and the event (such as\n",(0,o.kt)("inlineCode",{parentName:"p"},"Started"),").")),(0,o.kt)("p",null,"Monitor the chain for:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"democracy(Started)")," events and log ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"blockNumber"),". Get\n",(0,o.kt)("inlineCode",{parentName:"p"},"pallets/democracy/storage/ReferendumInfoOf?key1=index&at=blockNumber")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"Sidecar")," to get the\nreferendum info. It should have a status of ",(0,o.kt)("inlineCode",{parentName:"p"},"Ongoing"),". Find the ending block number (",(0,o.kt)("inlineCode",{parentName:"p"},"end"),") and\nthe enactment ",(0,o.kt)("inlineCode",{parentName:"p"},"delay")," (delay), where the execution block number will be ",(0,o.kt)("inlineCode",{parentName:"p"},"end + delay"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"democracy(Passed)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"democracy(NotPassed)"),", or, ",(0,o.kt)("inlineCode",{parentName:"p"},"democracy(Cancelled)")," events citing the index.\nIf ",(0,o.kt)("inlineCode",{parentName:"p"},"Passed"),", you need to look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"scheduler(Scheduled)")," event in the same block for the\nenactment block.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"democracy(PreimageNoted)")," events with the same hash as the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReferendumInfoOf(index)")," item. This\nmay be up to the last block before execution, but it will not work if this is missing.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"democracy(Executed)")," events for actual execution. In the case of a runtime upgrade, there will\nalso be a ",(0,o.kt)("inlineCode",{parentName:"p"},"system(CodeUpdated)")," event."))))}p.isMDXComponent=!0}}]);