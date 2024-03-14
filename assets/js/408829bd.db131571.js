"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"learn-transaction-fees",title:"Transaction Fees",sidebar_label:"Transaction Fees",description:"How Transaction Fees are Calculated and Handled.",keywords:["transaction","fees"],slug:"../learn-transaction-fees"},l=void 0,c={unversionedId:"learn/learn-transaction-fees",id:"learn/learn-transaction-fees",title:"Transaction Fees",description:"How Transaction Fees are Calculated and Handled.",source:"@site/../docs/learn/learn-transaction-fees.md",sourceDirName:"learn",slug:"/learn-transaction-fees",permalink:"/docs/learn-transaction-fees",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1710167319,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{id:"learn-transaction-fees",title:"Transaction Fees",sidebar_label:"Transaction Fees",description:"How Transaction Fees are Calculated and Handled.",keywords:["transaction","fees"],slug:"../learn-transaction-fees"},sidebar:"docs",previous:{title:"Transactions",permalink:"/docs/learn-transactions"},next:{title:"Staking",permalink:"/docs/learn-staking-index"}},u={},h=[{value:"Fee Calculation",id:"fee-calculation",level:2},{value:"Fees",id:"fees",level:2},{value:"Fee Multiplier",id:"fee-multiplier",level:3},{value:"Other Resource Limitation Strategies",id:"other-resource-limitation-strategies",level:2},{value:"Learn More",id:"learn-more",level:2}],d={toc:h},p="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Several resources in a blockchain network are limited, for example, storage and computation.\nTransaction fees prevent individual users from consuming too many resources.\nKusama uses a weight-based fee model as\nopposed to a gas-metering model. As such, fees are charged prior to transaction execution; once the\nfee is paid, nodes will execute the transaction."),(0,r.kt)("h2",{id:"fee-calculation"},"Fee Calculation"),(0,r.kt)("p",null,"Fees on the Polkadot Relay Chain are calculated based on three parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Weight fee",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Base weight"),(0,r.kt)("li",{parentName:"ul"},"Call(s) weight"))),(0,r.kt)("li",{parentName:"ul"},"A Length fee"),(0,r.kt)("li",{parentName:"ul"},"A Tip (optional).")),(0,r.kt)("p",null,"As a permissionless system, the Kusama\nnetwork needs to implement a mechanism to measure and to limit the usage in order to establish an\neconomic incentive structure, to prevent the network overload, and to mitigate DoS vulnerabilities.\nKusama enforces a limited time-window for\nblock producers to create a block, including limitations on block size, which can make the selection\nand execution of certain extrinsics too expensive and decelerate the network. Extrinsics which\nrequire too many resources are discarded by the network."),(0,r.kt)("p",null,"Kusama defines a specified\n",(0,r.kt)("a",{parentName:"p",href:"https://spec.polkadot.network/#sect-limitations"},"block ratio")," ensuring that only a certain portion\nof the total block size gets used for regular extrinsics. The remaining space is reserved for\ncritical, operational extrinsics required for the functionality by network itself."),(0,r.kt)("p",null,"This is handled by a ",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary#weights"},"weight")," system, where the cost of the\ntransactions (referred to as ",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary#extrinsics"},"extrinsics"),") are determined before\nexecution. Weights are a fixed set of numbers used in Substrate-based chains to manage the time it\ntakes to validate a block. Each transaction has a base weight that accounts for the overhead of\ninclusion (e.g. signature verification) and a dispatch weight that accounts for the time to execute\nthe transaction. All weights, even the base weight, are a measure of time to execute on some\nstandard hardware."),(0,r.kt)("p",null,"The runtime\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/how-to-guides/weights/calculate-fees/"},"converts weight units to balance units"),"\nas part of the fee calculation."),(0,r.kt)("p",null,"The weight fee is the sum of the base weight and the sum of the total weight consumed by call(s)."),(0,r.kt)("admonition",{title:"A transaction can include several calls",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For instance, a ",(0,r.kt)("inlineCode",{parentName:"p"},"batch")," can contain ",(0,r.kt)("inlineCode",{parentName:"p"},"bond")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nominate"),", and the weight would be one base weight\nand then the sum of the weights for ",(0,r.kt)("inlineCode",{parentName:"p"},"bond")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nominate"),".")),(0,r.kt)("p",null,"To learn more about the motivation of a weight fee, check out this\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/main-docs/build/tx-weights-fees/"},"Substrate doc")," on weights."),(0,r.kt)("p",null,"The length fee is a per-byte fee multiplier for the size of the transaction in bytes."),(0,r.kt)("p",null,"There is also a targeted fee adjustment that serves as a multiplier which tunes the final fee based\non network congestion. This can constitute an adjusted weight fee calculated as the targeted fee\nadjustment times the weight fee."),(0,r.kt)("p",null,"Together, these fees constitute the inclusion fee. The inclusion fee is the base fee plus the length\nfee plus the adjusted weight fee."),(0,r.kt)("p",null,"The inclusion fee is deducted from the sender's account before transaction execution. A portion of\nthe fee will go to the block author, and the remainder will go to the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/learn-treasury"},"Treasury"),". This is 20% and 80%, respectively."),(0,r.kt)("p",null,"Tips are an optional transaction fee that users can add. Tips are not part of the inclusion fee and\nare an incentive to block authors for prioritizing a transaction, and the entire tip goes directly\nto the block author."),(0,r.kt)("p",null,'Final weights are assigned based on the worst case scenario of each runtime function. The runtime\nhas the ability to "refund" the amount of weight which was overestimated once the runtime function\nis actually executed.'),(0,r.kt)("p",null,"The runtime only returns weights if the difference between the assigned weight and the actual weight\ncalculated during execution is greater than 20%."),(0,r.kt)("p",null,"Checkout some examples of how various weights are gauged in the\nKusama runtime for several different types\nof operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://spec.polkadot.network/#id-practical-example-1-request_judgement"},"request_judgement")," -\nfrom the identity pallet, allows users to request judgement from a specific registrar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://spec.polkadot.network/#sect-practical-example-payout-stakers"},"payout_stakers")," - from the\nstaking Pallet, is invoked by a single account in order to payout the reward for all nominators\nwho back a particular validator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://spec.polkadot.network/#id-practical-example-3-transfer"},"transfer")," - from the balances\nmodule, is designed to move the specified balance by the sender to the receiver"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://spec.polkadot.network/#id-practical-example-4-withdraw_unbounded"},"withdraw_unbounded")," -\nfrom the staking module, is designed to move any unlocked funds from the staking management system\nto be ready for transfer")),(0,r.kt)("h2",{id:"fees"},"Fees"),(0,r.kt)("p",null,"Block producers charge a fee in order to be economically sustainable. That fee must always be\ncovered by the sender of the transaction.\nKusama has a flexible mechanism to determine\nthe minimum cost to include transactions in a block."),(0,r.kt)("p",null,"Transaction volume on blockchains is highly irregular, and therefore transaction fees need a\nmechanism to adjust. However, users should be able to predict transaction fees."),(0,r.kt)("p",null,"Kusama uses a slow-adjusting fee mechanism\nwith tips to balance these two considerations. In addition to block ",(0,r.kt)("em",{parentName:"p"},"limits"),",\nKusama also has a block fullness ",(0,r.kt)("em",{parentName:"p"},"target."),"\nFees increase or decrease for the next block based on the fullness of the current block relative to\nthe target. The per-weight fee can change up to 30% in a 24 hour period. This rate captures\nlong-term trends in demand, but not short-term spikes. To consider short-term spikes,\nKusama uses tips on top of the length and\nweight fees. Users can optionally add a tip to the fee to give the transaction a higher priority."),(0,r.kt)("p",null,"Kusama fees consists of three parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Base fee"),": a fixed fee that is applied to every transaction and set by the runtime."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Length fee"),": a fee that gets multiplied by the length of the transaction, in bytes."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Weight fee"),": a fee for each, varying runtime function. Runtime implementers need to implement a\nconversion mechanism which determines the corresponding currency amount for the calculated\nweight.")),(0,r.kt)("p",null,"The final fee can be summarized as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fee = base_fee + length_of_transaction_in_bytes * length_fee + weight_fee\n")),(0,r.kt)("p",null,"For example, the Polkadot Runtime defines the following values:"),(0,r.kt)("p",null,"Base fee: 100 uDOTs"),(0,r.kt)("p",null,"Length fee: Length fee: 0.1 uDOTs"),(0,r.kt)("p",null,"So, the weight to fee conversion is calculated as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"weight_fee = weight * (100 uDots / (10 * 10\u2019000))\n")),(0,r.kt)("p",null,"A weight of 10\u2019000 (the smallest non-zero weight) is mapped to 1/10 of 100 uDOT. This fee will never\nexceed the max size of an unsigned 128 bit integer."),(0,r.kt)("h3",{id:"fee-multiplier"},"Fee Multiplier"),(0,r.kt)("p",null,"Kusama can add an additional fee to\ntransactions if the network becomes too busy and starts to decelerate the system. This fee can\ncreate an incentive to avoid the production of low priority or insignificant transactions. In\ncontrast, those additional fees will decrease if the network calms down and can execute transactions\nwithout much difficulties."),(0,r.kt)("p",null,"This additional fee is known as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fee Multiplier")," and its value is defined by the\nKusama runtime. The multiplier works by\ncomparing the saturation of blocks; if the previous block is less saturated than the current block\n(implying an uptrend), the fee is slightly increased. Similarly, if the previous block is more\nsaturated than the current block (implying a downtrend), the fee is slightly decreased."),(0,r.kt)("p",null,"The final fee is calculated as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"final_fee = fee * fee_multiplier\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Update Multiplier")," defines how the multiplier can change. Each runtime has the ability to\ndefine this behavior accordingly. For example, the\nKusama runtime internally updates the\nmultiplier after each block according to a custom formula defined\n",(0,r.kt)("a",{parentName:"p",href:"https://spec.polkadot.network/#id-update-multiplier"},"here"),"."),(0,r.kt)("h2",{id:"other-resource-limitation-strategies"},"Other Resource Limitation Strategies"),(0,r.kt)("p",null,"Transaction weight must be computable prior to execution, and therefore can only represent fixed\nlogic. Some transactions warrant limiting resources with other strategies. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bonds: Some transactions, like voting, may require a bond that will be returned or slashed after\nan on-chain event. In the voting example, returned at the end of the election or slashed if the\nvoter tried anything malicious."),(0,r.kt)("li",{parentName:"ul"},"Deposits: Some transactions, like setting an ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-identity"},"identity")," or claiming an index,\nuse storage space indefinitely. These require a deposit that will be returned if the user decides\nto free storage (e.g. clear their IDE)."),(0,r.kt)("li",{parentName:"ul"},"Burns: A transaction may burn funds internally based on its logic. For example, a transaction may\nburn funds from the sender if it creates new storage entries, thus increasing the state size."),(0,r.kt)("li",{parentName:"ul"},"Limits: Some limits are part of the protocol. For example, nominators can only nominate 16\nvalidators. This limits the complexity of ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-phragmen"},"Phragm\xe9n"),".")),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://research.web3.foundation/Polkadot/overview/token-economics"},"Web3 Foundation Research")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.substrate.io/main-docs/build/tx-weights-fees/"},"Substrate Extrinsics, Weights & Fees"))))}m.isMDXComponent=!0}}]);