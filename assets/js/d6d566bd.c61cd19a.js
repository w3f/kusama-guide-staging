"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[676],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1711:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=["components"],i={id:"learn-kusama-vs-polkadot",title:"What is the difference between Polkadot and Kusama?",sidebar_label:"Comparing Polkadot and Kusama",description:"Comparing the cousins.",keywords:["polkadot","kusama","polkadot vs kusama","canary"],slug:"../learn-kusama-vs-polkadot"},l=void 0,d={unversionedId:"learn/learn-kusama-vs-polkadot",id:"learn/learn-kusama-vs-polkadot",title:"What is the difference between Polkadot and Kusama?",description:"Comparing the cousins.",source:"@site/../docs/learn/learn-kusama-vs-polkadot.md",sourceDirName:"learn",slug:"/learn-kusama-vs-polkadot",permalink:"/docs/learn-kusama-vs-polkadot",draft:!1,tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649959959,formattedLastUpdatedAt:"Apr 14, 2022",frontMatter:{id:"learn-kusama-vs-polkadot",title:"What is the difference between Polkadot and Kusama?",sidebar_label:"Comparing Polkadot and Kusama",description:"Comparing the cousins.",keywords:["polkadot","kusama","polkadot vs kusama","canary"],slug:"../learn-kusama-vs-polkadot"}},u={},p=[{value:"What the two networks have in common",id:"what-the-two-networks-have-in-common",level:2},{value:"Key differences",id:"key-differences",level:2},{value:"Speed",id:"speed",level:3},{value:"Lean setups",id:"lean-setups",level:3},{value:"Use cases",id:"use-cases",level:3},{value:"Going forward",id:"going-forward",level:2},{value:"Explore more",id:"explore-more",level:2}],c={toc:p};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Although they share many parts of their code, Polkadot and Kusama are independent, standalone\nnetworks with different priorities."),(0,r.kt)("p",null,"Kusama is wild and fast; great for bold experimentation and early-stage deployment. Polkadot is more\nconservative, prioritizing stability and dependability."),(0,r.kt)("p",null,"Cousins have their differences after all."),(0,r.kt)("h2",{id:"what-the-two-networks-have-in-common"},"What the two networks have in common"),(0,r.kt)("p",null,"Kusama was released as an early version of the same code to be used in Polkadot, which means they\nshare the same underlying architecture: a multichain, heterogeneously-sharded design based on\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-consensus"},"Nominated Proof of Stake (NPoS)"),". Both networks also share key innovations like\non-chain ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance"),", hot-swappable runtimes for forkless, on-chain upgrades,\nand ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-crosschain"},"Cross-Consensus Message Passing (XCM)")," for interoperability. Governance on\nboth Polkadot and Kusama is designed to be decentralized and permissionless, giving a say in how the\nnetwork is run to everyone who owns the native token (DOT for Polkadot, KSM for Kusama). Therefore,\n",(0,r.kt)("strong",{parentName:"p"},"over time the networks will evolve independently, converging or diverging according to the\ndecisions of their respective communities.")),(0,r.kt)("h2",{id:"key-differences"},"Key differences"),(0,r.kt)("p",null,"There are a few important distinctions to be made."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"polkadot_vs_kusama",src:a(72664).Z,width:"2000",height:"2000"})),(0,r.kt)("p",null,"Both networks also have different circulating supplies."),(0,r.kt)("h3",{id:"speed"},"Speed"),(0,r.kt)("p",null,"The first key technical difference between Polkadot and Kusama is that Kusama has modified\ngovernance parameters that allow for faster upgrades. Kusama is up to four times faster than\nPolkadot, with seven days for token holders to vote on referendums followed by an enactment period\nof eight days, after which the referendum will be enacted on the chain. This means stakeholders need\nto stay active and vigilant if they want to keep up with all the proposals, referenda, and upgrades,\nand validators on Kusama often need to update on short notice."),(0,r.kt)("p",null,"On Polkadot, votes last 28 days followed by an enactment period of 28 days. This does not mean that\nthe Kusama blockchain itself is faster, in the sense of faster block times or transaction throughput\n(these are the same on both networks), but that there's a shorter amount of time between governance\nevents such as proposing new referenda, voting, and enacting approved upgrades. This allows Kusama\nto adapt and evolve faster than Polkadot."),(0,r.kt)("h3",{id:"lean-setups"},"Lean setups"),(0,r.kt)("p",null,"Teams wishing to run a parachain need to bond tokens as security. The bonding requirement on Kusama\nis likely to be lower than on Polkadot."),(0,r.kt)("h3",{id:"use-cases"},"Use cases"),(0,r.kt)("p",null,"Polkadot is and always will be the primary network for the deployment of enterprise-level\napplications and those that entail high-value transactions requiring bank-level security and\nstability."),(0,r.kt)("p",null,"The initial use case for Kusama is as a pre-production environment, a \u201ccanary network\u201d.\nFor the average developer, this seems like it could be a testnet, what is the difference?\nWhat does ",(0,r.kt)("em",{parentName:"p"},"canary")," even mean?"),(0,r.kt)("p",null,"Canary is a type of bird: back in the day, coal miners would put canaries into coal mines as a way to measure the amount of toxic gases that were present. Similarly, canary testing is a way to validate software by releasing software to a limited number of users, or perhaps, an isolated environment - without hurting any birds."),(0,r.kt)("p",null,"Releases made onto Kusama can be thought of as ",(0,r.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/CanaryRelease.html"},"Canary Releases"),".\nThese releases are usually staged. In Kusama's early days, the network won't just be used for parachain candidates to innovate and test changes, but a proof of concept for Polkadot's sharded model."),(0,r.kt)("p",null,'In a typical blockchain development pipeline, Kusama would sit in between a "testnet" and a "mainnet"'),(0,r.kt)("admonition",{title:"Testnet -> Kusama -> Polkadot",type:"info"}),(0,r.kt)("p",null,"As you can imagine, building on Kusama first allows teams to test things out in a live, fully decentralized, and\ncommunity-controlled network with real-world conditions and lower stakes in the event of problems or\nbugs than on Polkadot."),(0,r.kt)("p",null,"Many projects will maintain parachains on both networks, experimenting and testing new technologies\nand features on Kusama before deploying them to Polkadot. Some teams will decide just to stay on\nKusama, which is likely to be a place where we see some exciting experimentation with new\ntechnologies going forward. Projects that require high-throughput but don\u2019t necessarily require\nbank-like security, such as some gaming, social networking, and content distribution applications,\nare particularly good candidates for this use case."),(0,r.kt)("p",null,"Kusama may also prove to be the perfect environment for ambitious experiments with new ideas and\ninnovations in areas like governance, incentives, monetary policy, and DAOs (decentralized\nautonomous organizations). Future upgrades to the Polkadot runtime will also likely be deployed to\nKusama before Polkadot mainnet. This way, not only will we be able to see how these new technologies\nand features will perform under real-world conditions before bringing them to Polkadot, but teams\nwho have deployed to both networks will also get an advanced look at how their own technology will\nperform under those upgrades."),(0,r.kt)("h2",{id:"going-forward"},"Going forward"),(0,r.kt)("p",null,"Ultimately, Kusama and Polkadot will live on as independent, standalone networks with their own\ncommunities, their own governance, and their own complementary use cases, though they will continue\nto maintain a close relationship, with many teams likely deploying applications to both networks. In\nthe future, we\u2019re also likely to see Kusama bridged to Polkadot for cross-network interoperability.\nWeb3 Foundation remains committed to both networks going forward, providing crucial support and\nguidance to teams building for the ecosystem."),(0,r.kt)("h2",{id:"explore-more"},"Explore more"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kusama.network"},"About Kusama")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://guide.kusama.network"},"The Kusama Wiki")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kusama.dotapps.io"},"Kusama on Polkadot-JS Apps"))))}m.isMDXComponent=!0},72664:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Cousins_2-ec7f9314c5c245aad1242f2bd6a746bc.png"}}]);