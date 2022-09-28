"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3599],{3905:(a,e,t)=>{t.d(e,{Zo:()=>h,kt:()=>u});var n=t(7294);function o(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,n,o=function(a,e){if(null==a)return{};var t,n,o={},i=Object.keys(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(o[t]=a[t]);return o}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(o[t]=a[t])}return o}var l=n.createContext({}),c=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},h=function(a){var e=c(a.components);return n.createElement(l.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,o=a.mdxType,i=a.originalType,l=a.parentName,h=s(a,["components","mdxType","originalType","parentName"]),d=c(t),u=o,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return t?n.createElement(m,r(r({ref:e},h),{},{components:t})):n.createElement(m,r({ref:e},h))}));function u(a,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof a||o){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=a,s.mdxType="string"==typeof a?a:o,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2741:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),r=["components"],s={id:"learn-parachains",title:"Parachains",sidebar_label:"Parachains",description:"An introductory guide to Parachains.",keywords:["parachains","application-specific","sharding"],slug:"../learn-parachains"},l=void 0,c={unversionedId:"learn/learn-parachains",id:"learn/learn-parachains",title:"Parachains",description:"An introductory guide to Parachains.",source:"@site/../docs/learn/learn-parachains.md",sourceDirName:"learn",slug:"/learn-parachains",permalink:"/docs/learn-parachains",draft:!1,tags:[],version:"current",lastUpdatedBy:"Frank Bell",lastUpdatedAt:1664366855,formattedLastUpdatedAt:"Sep 28, 2022",frontMatter:{id:"learn-parachains",title:"Parachains",sidebar_label:"Parachains",description:"An introductory guide to Parachains.",keywords:["parachains","application-specific","sharding"],slug:"../learn-parachains"},sidebar:"docs",previous:{title:"Parachain Slot Auctions",permalink:"/docs/learn-auction"},next:{title:"Parathreads",permalink:"/docs/learn-parathreads"}},h={},p=[{value:"Parachain Economies",id:"parachain-economies",level:2},{value:"Parachain Hubs",id:"parachain-hubs",level:2},{value:"Parachain Slot Acquisition",id:"parachain-slot-acquisition",level:2},{value:"Slot Expiration",id:"slot-expiration",level:3},{value:"Common Good Parachains",id:"common-good-parachains",level:2},{value:"Examples",id:"examples",level:2},{value:"FAQ",id:"faq",level:2},{value:"What is &quot;parachain consensus&quot;?",id:"what-is-parachain-consensus",level:3},{value:"How about parachains that are not Substrate-based?",id:"how-about-parachains-that-are-not-substrate-based",level:4},{value:"How will parachain slots be distributed?",id:"how-will-parachain-slots-be-distributed",level:3},{value:"What happens to parachains when the number of validators drops below a certain threshold?",id:"what-happens-to-parachains-when-the-number-of-validators-drops-below-a-certain-threshold",level:3},{value:"Parachain Development Kits (PDKs)",id:"parachain-development-kits-pdks",level:3},{value:"Resources",id:"resources",level:2}],d={toc:p};function u(a){var e=a.components,s=(0,o.Z)(a,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Testing on Rococo",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For information on how to participate in the crowdloan and parachain auction testing on Rococo,\nplease see the\n","",(0,i.kt)("a",{parentName:"p",href:"/docs/build-pdk##testing-a-parachains:-rococo-testnet"},"Rococo Content"),"\non the parachain development guide.")),(0,i.kt)("p",null,"A parachain is an application-specific data structure that is globally coherent and validatable by\nthe validators of the Relay Chain. They take their name from the concept of parallelized chains that\nrun parallel to the Relay Chain. Most commonly, a parachain will take the form of a blockchain, but\nthere is no specific need for them to be actual blockchains."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"One parachain",src:t(1275).Z,width:"1701",height:"957"})),(0,i.kt)("p",null,"Due to their parallel nature, they are able to parallelize transaction processing and achieve\nscalability of the Kusama system. They\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-security"},"share in the security")," of the entire network and can communicate with other\nparachains through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," format."),(0,i.kt)("p",null,"Parachains are maintained by a network maintainer known as a ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"collator"),". The role\nof the collator node is to maintain a full node of the parachain, retain all necessary information\nof the parachain, and produce new block candidates to pass to the Relay Chain validators for\nverification and inclusion in the shared state of\nKusama. The incentivization of a collator node is an implementation detail of\nthe parachain. They are not required to be staked on the Relay Chain or own the native token unless\nstipulated by the parachain implementation."),(0,i.kt)("p",null,"The Polkadot Host (PH) requires that the state transitions performed on parachains be specified as a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-wasm"},"Wasm")," executable. Proofs of new state transitions that occur on a parachain must be\nvalidated against the registered state transition function (STF) that is stored on the Relay Chain\nby the validators before Kusama acknowledges\na state transition has occurred on a parachain. The key constraint regarding the logic of a\nparachain is that it must be verifiable by the Relay Chain validators. Verification most commonly\ntakes the form of a bundled proof of a state transition known as a Proof-of-Verification (PoV)\nblock, which is submitted to the validators from one or more of the parachain collators to be\nchecked."),(0,i.kt)("h2",{id:"parachain-economies"},"Parachain Economies"),(0,i.kt)("p",null,"Parachains may have their own economies with their own native tokens. Schemes such as Proof-of-Stake\nare usually used to select the validator set to handle validation and finalization; parachains will\nnot be required to do either of those things. However, since\nKusama is not overly particular about what\nthe parachain can implement, it may be the choice of the parachain to implement a staking token, but\nit's not generally necessary."),(0,i.kt)("p",null,"Collators may be incentivized through inflation of a native parachain token. There may be other ways\nto incentivize the collator nodes that do not involve inflating the native parachain token."),(0,i.kt)("p",null,"Transaction fees in a native parachain token can also be an implementation choice of parachains.\nKusama makes no hard and fast rules for how\nthe parachains decide on original validity of transactions. For example, a parachain may be\nimplemented so that transactions must pay a minimum fee to collators to be valid. The Relay Chain\nwill enforce this validity. Similarly, a parachain could not include that in their implementation,\nand Polkadot would still enforce its validity."),(0,i.kt)("p",null,"Parachains are not required to have their own token. If they do, it is up to the parachain to make the\neconomic case for their token, not Kusama."),(0,i.kt)("h2",{id:"parachain-hubs"},"Parachain Hubs"),(0,i.kt)("p",null,"While Kusama enables crosschain\nfunctionality amongst the parachains, it necessitates that there is some latency between the\ndispatch of a message from one parachain until the destination parachain receives the message. In\nthe optimistic scenario, the latency for this message should be at least two blocks - one block for\nthe message to be dispatched and one block for the receiving parachain to process and produce a\nblock that acts upon the message. However, in some cases, we may see that the latency for messages\nis higher if many messages are in queue to be processed or if no nodes are running both of the\nparachain networks that can quickly gossip the message across the networks."),(0,i.kt)("p",null,"Due to the necessary latency involved in sending crosschain messages, some parachains plan to become\n",(0,i.kt)("em",{parentName:"p"},"hubs")," for an entire industry. For example, a parachain project ",(0,i.kt)("a",{parentName:"p",href:"https://acala.network"},"Acala")," is\nplanning to become a hub for decentralized finance (DeFi) applications. Many DeFi applications take\nadvantage of a property known as ",(0,i.kt)("em",{parentName:"p"},"composability")," which means that functions of one application can\nbe synergistically composed with others to create new applications. One example of this includes\nflash loans, which borrow funds to execute some on-chain logic as long as the loan is repaid at the\nend of the transaction."),(0,i.kt)("p",null,"An issue with crosschain latency means that composability property weakens among parachains compared\nto a single blockchain. ",(0,i.kt)("strong",{parentName:"p"},"This implication is common to all sharded blockchain designs, including\nPolkadot, Eth2.0, and others.")," The solution to this is the introduction of parachain hubs, which\nmaintain the stronger property of single block composability."),(0,i.kt)("h2",{id:"parachain-slot-acquisition"},"Parachain Slot Acquisition"),(0,i.kt)("p",null,"Kusama supports a limited number of\nparachains, currently estimated to be about 100. As the number of slots is limited, there are\nseveral ways to allocate them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Governance granted parachains, or "common good" parachains'),(0,i.kt)("li",{parentName:"ul"},"Auction granted parachains"),(0,i.kt)("li",{parentName:"ul"},"Parathreads")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#common-good-parachains"},'"Common Good" parachains')," are allocated by Polkadot's on-chain\n","\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance"),' system, and are deemed as a "common good"\nfor the network, such as bridges to other networks or chains. They are usually considered\nsystem-level chains or public utility chains. These typically do not have an economic model and help\nremove transactions from the Relay Chain, allowing for more efficient parachain processing.'),(0,i.kt)("p",null,"","\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"Auction granted parachains")," are granted in a permissionless\nauction. Parachain teams can either bid with their own DOT tokens, or source them from the community\nusing the ","\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-crowdloans"},"crowdloan functionality"),"."),(0,i.kt)("p",null,"","\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"Parathreads")," have the same API as parachains, but are\nscheduled for execution on a pay-as-you-go basis with an auction for each block."),(0,i.kt)("h3",{id:"slot-expiration"},"Slot Expiration"),(0,i.kt)("p",null,"When a parachain wins an auction, the tokens that it bids get reserved until the lease's end.\nReserved balances are non-transferrable and cannot be used for staking. At the end of the lease, the\ntokens are unreserved. Parachains that have not secured a new lease to extend their slot will\nautomatically become parathreads."),(0,i.kt)("h2",{id:"common-good-parachains"},"Common Good Parachains"),(0,i.kt)("p",null,'"Common Good" parachains are parachain slots reserved for functionality that benefits the\necosystem as a whole. By allocating a subset of parachain slots to common good chains, the entire\nnetwork can realize the benefit of valuable parachains that would otherwise be underfunded due to\nthe free-rider problem. They are not allocated via the parachain auction process but by the on-chain\n',"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance")," system. Generally, a common good parachain's\nlease would not expire; it would only be removed via governance."),(0,i.kt)("p",null,"See the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots/"},"Polkadot blog article"),"\nand the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-common-goods"},"common good parachains")," page for more information."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Some examples of parachains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Encrypted Consortium Chains"),": These are possibly private chains that do not leak any\ninformation to the public, but still can be interacted with trustlessly due to the nature of the\nXCMP protocol."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"High-Frequency Chains"),": These are chains that can compute many transactions in a short amount\nof time by taking certain trade-offs or making optimizations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy Chains"),": These are chains that do not leak any information to the public through use of\nnovel cryptography."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Smart Contract Chains"),": These are chains that can have additional logic implemented on them\nthrough the deployment of code known as ",(0,i.kt)("em",{parentName:"li"},"smart contracts"),".")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"what-is-parachain-consensus"},'What is "parachain consensus"?'),(0,i.kt)("p",null,'"Parachain consensus" is special in that it will follow the\nKusama Relay Chain. Parachains cannot use other consensus algorithms that\nprovide their own finality. Only sovereign chains (that must bridge to the Relay Chain via a\nparachain) can control their own consensus. Parachains have control over how blocks are authored and\nby whom.  Kusama guarantees valid state\ntransitions. Executing a block finality outside the context of the relay chain is outside the scope\nof trust that  Kusama provides.'),(0,i.kt)("h4",{id:"how-about-parachains-that-are-not-substrate-based"},"How about parachains that are not Substrate-based?"),(0,i.kt)("p",null,"Substrate provides ",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/main-docs/fundamentals/runtime-intro/"},"FRAME Pallets"),"\nas part of its framework to seamlessly build a rustic-based blockchain. Part of FRAME are pallets\nthat can be used for consensus.  Kusama\nbeing a Substrate-based chain relies on BABE as the block production scheme and GRANDPA as the\nfinality gadget as part of its consensus mechanism. Collectively, this is a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-consensus#hybrid-consensus"},"Hybrid Consensus Model"),", where block production and block\nfinality are separate. Parachains only need to produce blocks as they can rely on the relay chain to\nvalidate the state transitions. Thus, parachains can have their own block production where the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"collators")," act as the block producers, even if the parachain is not\nSubstrate-based."),(0,i.kt)("h3",{id:"how-will-parachain-slots-be-distributed"},"How will parachain slots be distributed?"),(0,i.kt)("p",null,"Parachain slots will be acquirable through auction, please see the\n","\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"parachain slots")," article. Additionally, some parachain\nslots will be set aside to run ","\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"parathreads")," ","\u2014"," chains that bid on a per-block\nbasis to be included in the Relay Chain."),(0,i.kt)("h3",{id:"what-happens-to-parachains-when-the-number-of-validators-drops-below-a-certain-threshold"},"What happens to parachains when the number of validators drops below a certain threshold?"),(0,i.kt)("p",null,"The minimal safe ratio of validators per parachain is 5:1. With a sufficiently large set of\nvalidators, the randomness of their distribution along with\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-availability"},"availability and validity")," will make sure security is on-par. However,\nshould there be a big outage of a popular cloud provider or another network connectivity\ncatastrophe, it is reasonable to expect that the number of validators per chain will drop."),(0,i.kt)("p",null,"Depending on how many validators went offline, the outcome differs."),(0,i.kt)("p",null,"If a few validators went offline, the parachains whose validator groups are too small to validate a\nblock will skip those blocks. Their block production speed will slow down to an increment of six\nseconds until the situation is resolved and the optimal number of validators is in that parachain's\nvalidator group again."),(0,i.kt)("p",null,"If anywhere from 30% to 50% of the validators go offline, availability will suffer because we need\ntwo-thirds of the validator set to back the parachain candidates. In other words, all parachains\nwill stop until the situation is resolved. Finality will also stop, but low-value transactions on\nthe Relay Chain should be safe enough to execute, despite common forks. Once the required number of\nvalidators is in the validator set again, parachains will resume block production."),(0,i.kt)("p",null,"Given that collators are full nodes of the Relay Chain and the parachain they are running, they will\nbe able to recognize a disruption as soon as it occurs and should stop producing block candidates.\nLikewise, it should be easy for them to recognize when it's safe to restart block production -\nperhaps based on finality delay, validator set size or some other factor that is yet to be decided\nwithin ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus"),"."),(0,i.kt)("h3",{id:"parachain-development-kits-pdks"},"Parachain Development Kits (PDKs)"),(0,i.kt)("p",null,"Parachain Development Kits are a set of tools that enable developers to create their own\napplications as parachains. For more information, see the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/build-pdk#parachain-development-kit-pdk"},"PDK content"),"."),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/build-pdk"},"Parachain Development page")," for more information."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/polkadot-the-parachain-3808040a769a"},"Polkadot: The Parachain"),' -\nBlog post by Polkadot co-founder Rob Habermeier who introduced parachains in 2017 as "a simpler\nform of blockchain, which attaches to the security provided by a Relay Chain rather than providing\nits own. The Relay Chain provides security to attached parachains, but also provides a guarantee\nof secure message-passing between them."'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.network/the-path-of-a-parachain-block/"},"The Path of a Parachain Block")," - A\ntechnical walkthrough of how parachains interact with the Relay Chain.")))}u.isMDXComponent=!0},1275:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/one_parachain-5fe48b5bfbcf7680a91b0f5a940b39c7.png"}}]);