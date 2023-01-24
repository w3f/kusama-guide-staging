(self.webpackChunk=self.webpackChunk||[]).push([[6689],{47940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>h});var o=a(74165),n=a(15861),i=a(67294),r=a(98562),s=a(92696),l=a(67425);function d(t,e,a){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)((0,o.Z)().mark((function t(e,a,n){var i,l,d,c,p;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=void 0,l=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){t.next=18;break}return t.abrupt("return");case 18:return d=new r.U(i),t.next=21,s.G.create({provider:d});case 21:c=t.sent,(p=a.split(".")).forEach((function(t){t in c&&(c=c[t])})),t.t1=p[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return l=c.toString(),t.abrupt("break",35);case 29:return t.next=31,c();case 31:return l=(l=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+a);case 35:return t.abrupt("return",l);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t,e,a,o){switch(e){case"humanReadable":(0,l.HumanReadable)(t,a,o);break;case"precise":(0,l.Precise)(t,a,o);break;case"blocksToDays":(0,l.BlocksToDays)(t,o);break;case"arrayLength":(0,l.ArrayLength)(t,o);break;default:return void console.log("Ignoring unknown filter type")}}const h=function(t){var e=t.network,a=t.path,r=t.defaultValue,s=t.filter,l=void 0===s?void 0:s,c=(0,i.useState)(""),h=c[0],u=c[1];return e=e.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?p(r.toString(),l,e,u):u(r.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://statemine-rpc.polkadot.io/";break;case"statemint":t="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var t=(0,n.Z)((0,o.Z)().mark((function t(){var n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e,a,u);case 2:if(void 0!==(n=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==l?p(n,l,e,u):u(n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),h}},67425:t=>{var e={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};t.exports={HumanReadable:function(t,a,o){var n=void 0;if("polkadot"===a||"statemint"===a)n=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");n=6}t=parseFloat(t),o((t=Number.isInteger(t/e[a].precision)?t/e[a].precision+" "+e[a].symbol:(t/e[a].precision).toFixed(n)+" "+e[a].symbol).toString())},Precise:function(t,a,o){o(t=(t=parseFloat(t))/e[a].precision+" "+e[a].symbol)},BlocksToDays:function(t,e){e((t=6*t/86400).toString())},ArrayLength:function(t,e){e((t=t.split(",").length).toString())}}},24595:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var o=a(87462),n=a(63366),i=(a(67294),a(3905)),r=(a(47940),["components"]),s={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",description:"Get started with Polkadot.",keywords:["introduction","getting started","what is polkadot","why polkadot"],slug:"../getting-started"},l=void 0,d={unversionedId:"general/getting-started",id:"general/getting-started",title:"Getting Started",description:"Get started with Polkadot.",source:"@site/../docs/general/getting-started.md",sourceDirName:"general",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1674584710,formattedLastUpdatedAt:"Jan 24, 2023",frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",description:"Get started with Polkadot.",keywords:["introduction","getting started","what is polkadot","why polkadot"],slug:"../getting-started"}},c={},p=[{value:"What is Polkadot?",id:"what-is-polkadot",level:2},{value:"Interact with Polkadot",id:"interact-with-polkadot",level:3},{value:"What can I do with my DOT?",id:"what-can-i-do-with-my-dot",level:3},{value:"Polkadot Gifts",id:"polkadot-gifts",level:3},{value:"Why Polkadot?",id:"why-polkadot",level:2},{value:"How does Polkadot Work?",id:"how-does-polkadot-work",level:2},{value:"Why should you use Polkadot?",id:"why-should-you-use-polkadot",level:2},{value:"Where to start learning?",id:"where-to-start-learning",level:2},{value:"Brand-New Polkadot learners",id:"brand-new-polkadot-learners",level:3},{value:"Resources",id:"resources",level:2}],h={toc:p};function u(t){var e=t.components,s=(0,n.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},h,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Welcome to the Polkadot Wiki",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The Polkadot Wiki serves as the central source of truth for Polkadot. It is a community-focused\ninitiative led by Web3 Foundation to keep an up-to-date resource on the best information for\nlearning, building, and maintaining on Polkadot."),(0,i.kt)("p",{parentName:"admonition"},"The Wiki has three main sections: ",(0,i.kt)("strong",{parentName:"p"},"Learn")," (for learners), ",(0,i.kt)("strong",{parentName:"p"},"Build")," (for people that want to build\non Polkadot), and ",(0,i.kt)("strong",{parentName:"p"},"Maintain")," (for people that want to maintain the network).")),(0,i.kt)("h2",{id:"what-is-polkadot"},"What is Polkadot?"),(0,i.kt)("p",null,"Polkadot is the first fully-sharded blockchain, i.e. it is a multi-chain environment. Polkadot\nenables scalability by allowing specialized blockchains to communicate with each other in a secure,\ntrust-free environment."),(0,i.kt)("p",null,"Polkadot is built to connect and secure unique blockchains, whether they be public, permissionless\nnetworks, private consortium chains, or other Web3 technologies. It enables an internet where\nindependent blockchains can exchange information under common security guarantees."),(0,i.kt)("p",null,"Polkadot is a living network with the core pillars of governance and upgradability. The network has\nan advanced suite of governance tools and, using the ",(0,i.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly"),'\nstandard as a "meta-protocol", can autonomously deploy network upgrades. Polkadot adapts to your\ngrowing needs without the risks of network forks.'),(0,i.kt)("admonition",{title:"Learn more about Governance",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you haven't heard of Governance before, a great place to start is the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"Governance page"))),(0,i.kt)("p",null,"Polkadot serves as a foundational layer of a decentralized web, where users control their data and\nare not limited by trust bounds within the network."),(0,i.kt)("p",null,"See the video below made by ",(0,i.kt)("a",{parentName:"p",href:"https://defiteller.guru/"},"DeFi Teller")," to know more about Polkadot."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/BQ60bTU1bPg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h3",{id:"interact-with-polkadot"},"Interact with Polkadot"),(0,i.kt)("tr",{class:"cards-container"},(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"../docs/learn-account-generation"},(0,i.kt)("img",{src:"/img/polkadot-guide/Account.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Creating an Account")))),(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"../docs/learn-balance-transfers"},(0,i.kt)("img",{src:"/img/polkadot-guide/Transfer.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Balance Transfers")))),(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"../docs/learn-staking"},(0,i.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Stake.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Staking"))))),(0,i.kt)("br",null),(0,i.kt)("tr",{class:"cards-container"},(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"../docs/learn-parachains"},(0,i.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Parachain.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Parachains")))),(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"../docs/learn-bridges"},(0,i.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Bridges.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Bridges")))),(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"../docs/maintain-guides-how-to-vote-councillor"},(0,i.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Voting.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Vote for Councilors"))))),(0,i.kt)("br",null),(0,i.kt)("tr",{class:"cards-container"},(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"../docs/learn-treasury#creating-the-proposal"},(0,i.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Proposal.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Make Proposals")))),(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"../docs/maintain-guides-how-to-join-council#submit-candidacy"},(0,i.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Council.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Council Candidacy")))),(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"../docs/learn-treasury"},(0,i.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Treasury.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Treasury"))))),(0,i.kt)("br",null),(0,i.kt)("tr",{class:"cards-container"},(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"../docs/learn-identity"},(0,i.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Identity.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Set an Identity")))),(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"../docs/learn-proxies"},(0,i.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Proxy.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Proxy Accounts")))),(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"../docs/ambassadors"},(0,i.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Ambassadors.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Become an Ambassador"))))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"what-can-i-do-with-my-dot"},"What can I do with my DOT?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/learn-DOT"},"DOT")," is the native token of the Polkadot Network. DOT can be used for\ntransaction fees, staking, governance, acquisition of a parachain slot and for enabling several key\nfunctionalities on Polkadot."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"","\nthe minimum balance required to have an active account on Polkadot Network. If your account\nbalance drops below the minimum, your account will be reaped. Learn more about\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-accounts"},"Accounts")," and the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/build-protocol-info#existential-deposit"},"Existential Deposit")," requirement.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"","\nthe minimum contribution required to join a ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool"),"\nand earn staking rewards for contributing to the security of the network. Learn more about\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pools"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"","\nthe minimum contribution required to participate in ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-crowdloans"},"crowdloans")," for\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"parachain slot auctions"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Around 20 DOT"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"","\nregister an ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-identity"},"on-chain identity")),(0,i.kt)("li",{parentName:"ul"},"","\nvote for ",(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-vote-councillor"},"council")),(0,i.kt)("li",{parentName:"ul"},"","\ncreate a ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-proxies"},"proxy account"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},""," the minimum stake required to submit your intent to directly nominate validators. But,\nto increase the chance of earning staking rewards, your stake should not be less than the minimum\nstake among the active nominators which is a dynamic threshold (around ",(0,i.kt)("strong",{parentName:"p"},"264 DOT")," in era 966). If you\nhave lesser DOT than the minimum active nomination, please consider contributing to\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pools"),". Learn more about\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nominator"},"becoming a nominator"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"","\nyou can create your own ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool"),"."))),(0,i.kt)("p",null,"DOT has utility in ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy"},"Polkadot's democracy"),". Bonding DOT is\na requirement to create proposals, to endorse them and to vote on them when they become referendums.\nBonding\n","\nor 5% of requested funding is a requirement to make a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-treasury#creating-a-treasury-proposal"},"treasury proposal"),". DOT can also enable\nyou to participate in programs like the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/thousand-validators#polkadot"},"Thousand Validators Program"),"."),(0,i.kt)("h3",{id:"polkadot-gifts"},"Polkadot Gifts"),(0,i.kt)("img",{align:"right",src:"/img/polkadot-gift.png",width:"210",height:"200"}),(0,i.kt)("p",null,"Polkadot Gifts provide an easy way to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Onboard friends or family who are curious about blockchain but haven\u2019t made the leap yet."),(0,i.kt)("li",{parentName:"ul"},"Share your love of Polkadot and send any amount of DOT."),(0,i.kt)("li",{parentName:"ul"},"Say \u2018thank you\u2019 or send someone tokens when you don\u2019t know their address."),(0,i.kt)("li",{parentName:"ul"},"Get friends and family set up to participate in crowdloans.")),(0,i.kt)("p",null,"Learn more about how you can create and send Polkadot Gifts\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/introducing-polkadot-kusama-gifts/"},"here"),"."),(0,i.kt)("h2",{id:"why-polkadot"},"Why Polkadot?"),(0,i.kt)("p",null,"Back in the early 2000's, when the internet was gaining popularity for the first time, the internet\nfeatured read-only, static, basic web pages. The online connected world at the time was only the\nbeginning of virtual data, identities, and more. The internet during this time was also called the\nWeb 1.0."),(0,i.kt)("p",null,"As social media platforms and online businesses began to emerge, the internet transformed into the\nWeb 2.0. This upgraded internet, which we still use today, features dynamic, interactive web pages,\nwhere users can read and write information plus publish their own for others to see. However, this\nversion of the web comes with downsides, dealing with data control, privacy issues, and the\nconsequences of trust. This is where the WEB3 comes into the picture."),(0,i.kt)("p",null,"The Web 3.0 is taking centralized infrastructure and applications and turning them into\ndecentralized, trust-free protocols. The goal is to transform the internet into a decentralized web,\nwhere users control their own data and identity in a trust-free environment. The Web3 movement aims\nto remove intermediaries and build trustless infrastructure."),(0,i.kt)("admonition",{title:"The Web3 Movement",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To learn more of the Web3 movement, check out this video from the\n",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/l44z35vabvA"},"Web3 Summit"))),(0,i.kt)("h2",{id:"how-does-polkadot-work"},"How does Polkadot Work?"),(0,i.kt)("p",null,"The Polkadot network uses a\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Shard_(database_architecture)"},"sharded model"),' where shards - called\n"',(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachains"),"\", allow transactions to be processed in parallel instead\nof sequentially. Each parachain in the network has a unique state transition function (STF).\nPolkadot has a Relay Chain acting as the main chain of the system. Based on Polkadot's design, as\nlong as a chain's logic can compile to Wasm and adheres to the Relay Chain API, then it can connect\nto the Polkadot network as a parachain."),(0,i.kt)("p",null,"Parachains construct and propose blocks to validators on the Relay Chain, where the blocks undergo\nrigorous ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-availability"},"availability and validity")," checks before being added to\nthe finalized chain. As the Relay Chain provides the security guarantees,\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"collators")," - full nodes of these parachains - don't have any security\nresponsibilities, and thus do not require a robust incentive system. This is how the entire network\nstays up to date with the many transactions that take place."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"polkadot-relay-chain",src:a(35509).Z,width:"1701",height:"1441"})),(0,i.kt)("p",null,"In order to interact with chains that want to use their own finalization process (e.g. Bitcoin),\nPolkadot has ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-bridges"},"bridge parachains")," that offer two-way compatibility,\nmeaning that transactions can be made between different parachains."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"Cross-Consensus Messaging Format (XCM)")," allows parachains to send\nmessages of any type to each other. The shared security and validation logic of the Relay Chain\nprovide the environment for trust-free message passing that opens up true interoperability."),(0,i.kt)("admonition",{title:"Polkadot Primer",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To watch a short, beginner-friendly animation on Polkadot, check out our\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=_-k0xkooSlA"},"Polkadot Explainer video"))),(0,i.kt)("h2",{id:"why-should-you-use-polkadot"},"Why should you use Polkadot?"),(0,i.kt)("p",null,"Whether you're a blockchain developer or if you're interested in taking part of\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/polkadot-ambassador-program/"},"Polkadot's community"),", Polkadot offers a\nplatform for everyone. This wiki offers a place for builders and maintainers to utilize\n",(0,i.kt)("a",{parentName:"p",href:"/docs/build-tools-index"},"tools")," and for brand-new learners to dive into educational material."),(0,i.kt)("h2",{id:"where-to-start-learning"},"Where to start learning?"),(0,i.kt)("p",null,"For brand-new learners of Blockchain technology:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The\n",(0,i.kt)("a",{parentName:"li",href:"https://mooc.web3.foundation/course/blockchain-fundamentals/"},"Blockchain Fundamentals MOOC course"),"\nis a great introduction to start familiarizing yourself with blockchain concepts such as\ncryptography and networks, and how these play into things like decentralization and\ncryptocurrency.")),(0,i.kt)("p",null,"This is recommended for users with backgrounds of all levels, and the course is free!"),(0,i.kt)("h3",{id:"brand-new-polkadot-learners"},"Brand-New Polkadot learners"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.network/PolkaDotPaper.pdf"},"Polkadot's original white paper")," is a technical\nsummary around one possible direction of implementing the Polkadot network. This paper uses\nrationale and technical details to support why this direction is beneficial. This original white\npaper also explains how Polkadot's core components work together to build this decentralized\nnetwork."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/research/blob/master/docs/papers/OverviewPaper-V1.pdf"},"Polkadot's overview paper"),"\nis an updated version of the white paper that describes the protocol in more technical terms. We\nwould recommend reading this overview paper if you are interested in digging more into the\nprotocol itself."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.network/Polkadot-lightpaper.pdf"},"Polkadot's light paper")," is a visual, easy to\nread, and less technical introduction into its blockchain technology. This paper dives into the\ncomponents of Polkadot but is understandable for both a non-technical and technical reader."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://linktr.ee/polkadotbook"},"Polkadot for Beginners: A non-technical guide to decentralization, blockchains & Polkadot")," -\na book funded by the Polkadot Treasury"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/polkadot-spec"},"Polkadot's specification")," is a GitHub repository that holds\nthe latest Polkadot Host protocol specification, Polkadot's specification tests of the many\ncomponents of the network, and the Polkadot Runtime specification. This repo holds algorithms and\nexplores how various processes function in the Polkadot network. The Polkadot specification takes\nPolkadot's ideas and concepts from the light and the white paper but focuses on the technical\nspecs of the technology."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=mNStMPZjiHM&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8"},"Watching the Technical Explainer Videos"),":\nThese are great introductory videos that explain and demonstrate how to use Polkadot and its\n",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/"},"User Interface"),"."),(0,i.kt)("li",{parentName:"ul"},"Reading\n",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/what-is-polkadot-a-brief-introduction-ca3eac9ddca5"},"What is Polkadot? A Brief Introduction"),"\non Medium. There are also other great articles to read on\n",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network"},"Polkadot's Medium")," or\n",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation"},"Web3 Foundation's Medium"),".")),(0,i.kt)("p",null,"For brand-new learners of Kusama, Polkadot's canary cousin network: To learn more about how to build\nand maintain on the Kusama network, please head over to our\n",(0,i.kt)("a",{parentName:"p",href:"https://guide.kusama.network/"},"Kusama Guide"),"."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/polkadot"},"Polkadot Crowdcast")," - List of all Crowdcast webinars that the\nWeb3 Foundation has done."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot Explorer")," - Browser for the Polkadot network;\ncan be used for Polkadot, Kusama, or any Substrate-based chain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://polkascan.io/"},"Polkascan")," ","-"," Real-time multi-chain data for Polkadot Relay Chain and\nParity Substrate chains."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://subscan.io"},"Subscan.io")," - Explorer for Substrate based chains."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/lIghiCmHz0U"},"Polkadot Overview")," - Dr. Gavin Wood presents an overview of\nPolkadot. (Video)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://techcrunch.com/video/fireside-chat-with-jutta-steiner-parity-technologies/"},"Polkadot Overview")," -\nDr. Jutta Steiner presents Polkadot. (Video)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0IoUZdDi5Is&feature=youtu.be"},"Polkadot & Substrate Overview")," -\nDr. Gavin Wood presents Substrate (blockchain in-a-box + VM) and Polkadot, and builds a blockchain\non-stage in 30 minutes using Substrate. (Video)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/community"},"Community / Ecosystem")," - List of community rooms and channels to talk to others\nabout Polkadot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#"},"Sample Applications")," - Sample applications that are built on or currently being built for\nPolkadot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/contributing"},"Contributing Guide")," - Rules for contributing to the wiki."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.polkadot.network/"},"Polkadot Knowledge Base")," - Troubleshooting resources for\nspecific errors and problems.")))}u.isMDXComponent=!0},35509:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/polkadot_relay_chain-c411a282aa36af0f20d04389919a6275.png"},95856:()=>{},46601:()=>{}}]);