"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,p=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(p,r(r({ref:t},h),{},{components:n})):a.createElement(p,r({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78953:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>h,default:()=>m});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={id:"learn-common-goods",title:"Common Good Parachains",sidebar_label:"Common Good Parachains",description:"Learn about Common Good Parachains and ones currently on the network.",slug:"../learn-common-goods"},s=void 0,c={unversionedId:"learn/learn-common-goods",id:"learn/learn-common-goods",title:"Common Good Parachains",description:"Learn about Common Good Parachains and ones currently on the network.",source:"@site/../docs/learn/learn-common-good-chains.md",sourceDirName:"learn",slug:"/learn-common-goods",permalink:"/zh-CN/docs/learn-common-goods",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-common-good-chains.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1644499769,formattedLastUpdatedAt:"2022/2/10",frontMatter:{id:"learn-common-goods",title:"Common Good Parachains",sidebar_label:"Common Good Parachains",description:"Learn about Common Good Parachains and ones currently on the network.",slug:"../learn-common-goods"}},h=[{value:"Overview",id:"overview",children:[],level:2},{value:"System Level Chains",id:"system-level-chains",children:[],level:2},{value:"Public Utility Chains",id:"public-utility-chains",children:[],level:2},{value:"Common Good Chains",id:"common-good-chains",children:[{value:"Statemint",id:"statemint",children:[],level:3},{value:"Encointer",id:"encointer",children:[],level:3},{value:"Bridges",id:"bridges",children:[],level:3}],level:2}],d={toc:h};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,'"Common Good" parachains are parachain slots reserved for functionality that benefits the ecosystem\nas a whole. By allocating a subset of parachain slots to common good chains, the entire network can\nrealize the benefit of valuable parachains that would otherwise be underfunded due to the free-rider\nproblem. They are not allocated via the parachain auction process but by the on-chain\n',"\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-governance"},"governance")," system. Generally, a common good\nparachain's lease would not expire; it would only be removed via governance."),(0,i.kt)("p",null,"The purpose of these parachains will probably fall into one of two categories: system level chains\nor public utility chains."),(0,i.kt)("h2",{id:"system-level-chains"},"System Level Chains"),(0,i.kt)("p",null,"System level chains move functionality from the Relay Chain into parachains, minimizing the\nadministrative use of the Relay Chain. For example, a governance parachain could move all the\ngovernance processes from the Relay Chain into a parachain. Adding a system level chain is generally\nuncontroversial because they merely move functionality that the stakeholders already agreed was\nuseful from one place (the Relay Chain) to another (a parachain)."),(0,i.kt)("p",null,"Moving the logic from the Relay Chain to a parachain is an optimization that makes the entire\nnetwork more efficient. Moving system level logic to a parachain frees capacity in the Relay Chain\nfor its primary function: validating parachains. Adding a system level chain could make the network\ncapable of processing several more parachains. Rather than taking a slice of a 100 parachain pie, a\nsystem level chain takes one slice and bakes a bigger pie."),(0,i.kt)("p",null,"The vast majority of common good chains will likely be unopinionated system level chains."),(0,i.kt)("h2",{id:"public-utility-chains"},"Public Utility Chains"),(0,i.kt)("p",null,"Public utility chains add functionality that doesn\u2019t exist yet, but that the stakeholders believe\nwill add value to the entire network. Because public utility chains add new functionality, there is\na subjective component to their addition: the network's stakeholders must believe that it is\nworth allocating a slot that would otherwise go to the winners of an auction and thus would have an\nobjective expression conviction from its backers. Governance provides the means to internalize\nthe value of the parachain slot and distribute it across all members of the network."),(0,i.kt)("p",null,"Public utility chains will always be fully aligned with their Relay Chain stakeholder base. This\nmeans that they will adopt the Relay Chain's native token (i.e. DOT or KSM) as their native token\nand respect any messages incoming from the Relay Chain and system level parachains at face value."),(0,i.kt)("p",null,"Some examples of potential public utility chains are bridges, DOT/KSM-denominated smart contract\nplatforms, and ",(0,i.kt)("a",{parentName:"p",href:"#statemint"},"generic asset chains"),"."),(0,i.kt)("p",null,"Public utility parachains would typically grant privileged business logic to Polkadot\u2019s governance.\nJust as the Polkadot Relay Chain has several privileged functions like setting the validator count\nor allocating DOT from the Treasury, these parachains can have privileged functions like changing\nsystem parameters or triggering an upgrade."),(0,i.kt)("p",null,"Because public utility chains add functionality beyond the scope of the Relay Chain, they will\nlikely be approved by the network stakeholders only in rare scenarios."),(0,i.kt)("h2",{id:"common-good-chains"},"Common Good Chains"),(0,i.kt)("h3",{id:"statemint"},"Statemint"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/tree/master/polkadot-parachains/statemint"},"Statemint"),"\n(and its cousin ",(0,i.kt)("em",{parentName:"p"},"Statemine")," on Kusama) are the first common good parachains."),(0,i.kt)("p",null,"Statemint is a public utility chain in that it adds functionality not available in the Relay Chain,\nnamely, the creation and management of assets. Statemint will support both fungible and non-fungible\nassets. The chain offers an interface similar to ERC-20 for fungible tokens and ERC-721 for non-fungible\ntoken. These interfaces are in the logic of the chain itself; by encoding this logic directly into the\nStatemint runtime, token storage, and actions do not need to be metered and can happen faster and cheaper."),(0,i.kt)("p",null,"Like most common good chains, Statemint will use the DOT token as its native token, i.e. represented\nin its instance of the Balances pallet. Statemint trusts messages about balances from the Relay\nChain, and vice versa, so users can transfer DOT from the Relay Chain to their address on Statemint\nand back."),(0,i.kt)("p",null,"Because of the efficiency of executing logic in a parachain, the transaction fees and deposits\n(including the existential deposit) are about 1/10th of their value on the Relay Chain. These low fee\nlevels mean that Statemint is well suited to handling DOT balances and transfers as well as managing\non-chain assets."),(0,i.kt)("p",null,"As a common good parachain, Statemint must stay fully aligned with the Relay Chain. Upgrades to\nStatemint will require the Relay Chain's \"root origin\", i.e. a referendum. Some of the other logic\n(like privileged asset functionality) will defer to the Relay Chain's Council."),(0,i.kt)("h3",{id:"encointer"},"Encointer"),(0,i.kt)("p",null,"Encointer will become Kusama's second common good parachain, which adds logic to the Relay Chain\nthat aims to bring financial inclusivity to WEB3 and mitigate Sybil attacks with a novel\nProof of Personhood (PoP) system for unique identity. "),(0,i.kt)("p",null,"Encointer offers a framework that, in principle, allows for any group of real people to create,\ndistribute and use their own digital community tokens."),(0,i.kt)("p",null,"Encointer aims to invert the ",(0,i.kt)("a",{parentName:"p",href:"https://www.newworldencyclopedia.org/entry/Richard_Cantillon"},"Cantillon Effect"),",\nwhere money is issued at the bottom, and not as credit to businesses or creditworthy individuals. This way,\nevery individual gets a ",(0,i.kt)("a",{parentName:"p",href:"https://book.encointer.org/economics-ubi.html"},"universal basic income (UBI)"),"."),(0,i.kt)("p",null,"To resist Sybil attacks, the Encointer protocol uses a PoP mechanism to foster a\nunique identity system. The notion is that a person can only be present at one place at a given time.\nParticipants are requested to attend physical key-signing ceremonies with small groups of random people\nat randomized locations, where these local meetings are part of one global ceremony that co-occur.\nParticipants use the Encointer wallet app to participate in these ceremonies, and the wallet enables the\nmanagement of local community currencies. Watch an Encointer ceremony in action in\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=tcgpCCYBqko"},"this video"),"."),(0,i.kt)("p",null,"The protocol involves ",(0,i.kt)("a",{parentName:"p",href:"https://book.encointer.org/ssi.html#privacy-considerations"},"other mechanisms")," to\nprotect the privacy of users in addition to the physical key-signing ceremonies."),(0,i.kt)("p",null,"Encointer falls under common good logic as it offers a Sybil defense mechanism and a basis for digital\ndemocracy. This can also be adapted by system level chains which can use the unique identity system to\nprevent Sybil attacks, and use PoP for token airdrops or faucets."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Encointer is currently in testnet phase, and its mainnet is planned for launch as a common good parachain\non Kusama. To learn more about Encointer, check out the official\n",(0,i.kt)("a",{parentName:"p",href:"https://book.encointer.org/introduction.html"},"Encointer book"),".")),(0,i.kt)("h3",{id:"bridges"},"Bridges"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-bridges"},"Bridges page")," for information on the latest bridge projects."))}m.isMDXComponent=!0}}]);