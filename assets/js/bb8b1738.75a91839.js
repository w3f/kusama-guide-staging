(self.webpackChunk=self.webpackChunk||[]).push([[7368],{47940:(a,e,t)=>{"use strict";t.d(e,{Z:()=>h});var o=t(74165),n=t(15861),i=t(67294),r=t(92519),s=t(98177),l=t(67425);function d(a,e,t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)((0,o.Z)().mark((function a(e,t,n){var i,l,d,p,c;return(0,o.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=void 0,l=void 0,a.t0=e,a.next="polkadot"===a.t0?5:"kusama"===a.t0?7:"statemine"===a.t0?9:"statemint"===a.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",a.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",a.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",a.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",a.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){a.next=18;break}return a.abrupt("return");case 18:return d=new r.U(i),a.next=21,s.G.create({provider:d});case 21:p=a.sent,(c=t.split(".")).forEach((function(a){a in p&&(p=p[a])})),a.t1=c[0],a.next="consts"===a.t1?27:"query"===a.t1?29:34;break;case 27:return l=p.toString(),a.abrupt("break",35);case 29:return a.next=31,p();case 31:return l=(l=a.sent).toString(),a.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+t);case 35:return a.abrupt("return",l);case 36:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function c(a,e,t,o){switch(e){case"humanReadable":(0,l.HumanReadable)(a,t,o);break;case"precise":(0,l.Precise)(a,t,o);break;case"blocksToDays":(0,l.BlocksToDays)(a,o);break;case"percentage":(0,l.Percentage)(a,o);break;case"arrayLength":(0,l.ArrayLength)(a,o);break;default:return void console.log("Ignoring unknown filter type")}}const h=function(a){var e=a.network,t=a.path,r=a.defaultValue,s=a.filter,l=void 0===s?void 0:s,p=(0,i.useState)(""),h=p[0],u=p[1];return e=e.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?c(r.toString(),l,e,u):u(r.toString());var a=void 0;switch(e){case"polkadot":a="wss://rpc.polkadot.io";break;case"kusama":a="wss://kusama-rpc.polkadot.io/";break;case"statemine":a="wss://statemine-rpc.polkadot.io/";break;case"statemint":a="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===a)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var a=(0,n.Z)((0,o.Z)().mark((function a(){var n;return(0,o.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d(e,t,u);case 2:if(void 0!==(n=a.sent)){a.next=7;break}return a.abrupt("return");case 7:void 0!==l?c(n,l,e,u):u(n);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),h}},67425:a=>{var e={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};a.exports={HumanReadable:function(a,t,o){var n=void 0;if("polkadot"===t||"statemint"===t)n=3;else{if("kusama"!==t&&"statemine"!==t)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");n=6}a=parseFloat(a),o((a=Number.isInteger(a/e[t].precision)?a/e[t].precision+" "+e[t].symbol:(a/e[t].precision).toFixed(n)+" "+e[t].symbol).toString())},Precise:function(a,t,o){o(a=(a=parseFloat(a))/e[t].precision+" "+e[t].symbol)},BlocksToDays:function(a,e){e((a=6*a/86400).toString())},Percentage:function(a,e){e((a/=1e7).toString())},ArrayLength:function(a,e){e((a=a.split(",").length).toString())}}},49175:(a,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var o=t(87462),n=t(63366),i=(t(67294),t(3905)),r=t(47940),s=["components"],l={id:"learn-validator",title:"Validator",sidebar_label:"Validator",description:"An introduction about validators.",keywords:["validate","validator","maintain","NPoS","stake"],slug:"../learn-validator"},d=void 0,p={unversionedId:"learn/learn-validator",id:"learn/learn-validator",title:"Validator",description:"An introduction about validators.",source:"@site/../docs/learn/learn-validator.md",sourceDirName:"learn",slug:"/learn-validator",permalink:"/docs/learn-validator",draft:!1,tags:[],version:"current",lastUpdatedBy:"Deepak Chaudhary",lastUpdatedAt:1681199698,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{id:"learn-validator",title:"Validator",sidebar_label:"Validator",description:"An introduction about validators.",keywords:["validate","validator","maintain","NPoS","stake"],slug:"../learn-validator"}},c={},h=[{value:"Validators&#39; Role",id:"validators-role",level:2},{value:"Approval Process",id:"approval-process",level:2},{value:"Disputes",id:"disputes",level:2},{value:"Chain Selection",id:"chain-selection",level:2},{value:"Further Readings",id:"further-readings",level:2},{value:"Guides",id:"guides",level:3},{value:"Other References",id:"other-references",level:3},{value:"Security / Key Management",id:"security--key-management",level:3},{value:"Monitoring Tools",id:"monitoring-tools",level:3},{value:"Validator Stats",id:"validator-stats",level:3}],u={toc:h},k="wrapper";function m(a){var e=a.components,t=(0,n.Z)(a,s);return(0,i.kt)(k,(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"validators-role"},"Validators' Role"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This page provides a general overview of the role of validators in\nKusama. For more detailed information you\ncan read the Protocol Overview Section in\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/"},"The Polkadot Parachain Host Implementers' Guide"),".")),(0,i.kt)("p",null,"Validators secure the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-architecture#relay-chain"},"relay chain")," by staking\nKSM, validating proofs from collators and\nparticipating in consensus with other validators."),(0,i.kt)("p",null,"Validators play a crucial role in adding new blocks to the relay chain and, by extension, to all\nparachains. This allows parties to complete cross-chain transactions via the relay chain. Parachain\nvalidators (i.e. para-validators) participate in some form of off-chain consensus, and submit\ncandidate receipts to the tx pool for a block producer to include on-chain. The relay chain\nvalidators guarantee that each parachain follows its unique rules and can pass messages between\nshards in a trust-free environment."),(0,i.kt)("p",null,"Para-validators work in groups and are selected in every epoch to validate parachain blocks for all\nparachains connected to the relay chain."),(0,i.kt)("p",null,"The selected para-validators are one of\n","\n",(0,i.kt)(r.Z,{network:"kusama",path:"query.staking.validatorCount",defaultValue:1e3,mdxType:"RPC"}),"\nvalidators randomly selected (per epoch) to participate in the validation, creating a validator pool\nof 200 para-validators."),(0,i.kt)("p",null,"Validators perform two main functions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Verifying")," that the information contained in an assigned set of parachain blocks is valid.\nThey receive parachain block candidates from the ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-collator"},"collators")," together with a\nProof-of-Validity (PoV). The para-validators then check if the block candidates are valid.\nCandidates that gather enough signed validity statements are considered ",(0,i.kt)("em",{parentName:"li"},"backable"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Participating")," in the consensus mechanism to produce the relay chain blocks based on validity\nstatements from other validators. These validators are called block authors, they are selected by\n",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-consensus/#block-production-babe"},"BABE")," and can note up to one backable candidate for\neach parachain to include in the relay chain. A backable candidate included in the relay chain is\nconsidered ",(0,i.kt)("em",{parentName:"li"},"backed")," in that fork of the chain.")),(0,i.kt)("p",null,"Validators also contribute to the so-called ",(0,i.kt)("strong",{parentName:"p"},"availability distribution"),". In fact, once the\ncandidate is backed in a fork of the relay chain, it is still ",(0,i.kt)("em",{parentName:"p"},"pending availability"),", i.e. it is not\nincluded as part of the parachain until it is proven available (together with the PoV). Information\nregarding the availability of the candidate will be noted in the following relay chain blocks. Only\nwhen there is enough information, the candidate is considered a full parachain block or ",(0,i.kt)("em",{parentName:"p"},"parablock"),"."),(0,i.kt)("p",null,"Validators also participate in the the so-called ",(0,i.kt)("a",{parentName:"p",href:"#approval-process"},(0,i.kt)("strong",{parentName:"a"},"approval process")),". Once the\nparablock is considered available and part of the parachain, it is still ",(0,i.kt)("em",{parentName:"p"},"pending approval"),". Because\npara-validators are a small subset of all validators, there is a risk that by chance the majority of\npara-validators assigned to a parachain might be dishonest. It is thus necessary to run a secondary\nverification of the parablock before it can be considered approved. Having a secondary verification\nstep avoids the allocation of more para-validators that will ultimately reduce the throughput of the\nsystem."),(0,i.kt)("p",null,"Any instances of non-compliance with the consensus algorithms result in ",(0,i.kt)("a",{parentName:"p",href:"#disputes"},(0,i.kt)("strong",{parentName:"a"},"disputes")),"\nwith the punishment of the validators on the wrong side by removing some or all their staked\nKSM, thereby discouraging bad actors. Good\nperformance, however, will be rewarded, with validators receiving block rewards (including\ntransaction fees) in the form of KSM in exchange\nfor their activities."),(0,i.kt)("h2",{id:"approval-process"},"Approval Process"),(0,i.kt)("p",null,"Having a bad parablock on the relay chain is not catastrophic as long as the block is not approved\nand finalized by the finality gadget ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-consensus/#finality-gadget-grandpa"},"GRANDPA"),". If\nthe block is not finalized, the fork on the chain containing that block can be ignored in favor of\nanother fork containing good blocks. Dealing with a bad parablock includes the following stages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Detection: the bad block must be detected by honest validators."),(0,i.kt)("li",{parentName:"ul"},"Escalation: the honest validators must send that block for checks to all validators. A dispute\nstarts."),(0,i.kt)("li",{parentName:"ul"},"Consequences: the chain is reverted and all malicious validators are slashed.")),(0,i.kt)("p",null,"The result of the dispute must be transplantable to all other forks so that malicious validators are\nslashed in all possible histories and so that honest validators will ignore any forks containing\nthat parablock."),(0,i.kt)("admonition",{title:"Parablocks vs Relay-Chain blocks",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is important to understand that a relay chain block contains many parablocks. Thus, it makes more\nsense to think of relay-chain blocks as having been approved instead of parablocks that have been\napproved. A relay-chain block containing a bad parablock must be reverted, while a relay-chain block\ncontaining only approved parablocks can be considered approved as long as its parent relay-chain\nblock is also approved. Thus, the validity of a relay-chain block depends on the validity of its\nancestry.")),(0,i.kt)("p",null,"The Approval Process is divided into two parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://paritytech.github.io/polkadot/book/protocol-approval.html#assignments"},"Assignments")),"\ndetermine which validators perform approval checks on which candidates, ensuring each candidate\nreceives enough random checkers. This stage tracks approval votes to identify when\n",(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/protocol-approval.html#no-shows"},"no-show")," approval\nchecks take suspiciously long. It also tracks relay chain\n",(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-avoid-slashing/#equivocation"},"equivocations")," to\ndetermine when adversaries possibly gained foreknowledge about assignments and adding more checks\nin those cases. Assignees determine their own assignments to check specific candidates using two\nor three\n",(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/protocol-approval.html#assignment-criteria"},"assignment criteria"),",\nwhich are based upon two possible\n",(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/protocol-approval.html#stories"},"stories")," about the\nrelay chain block that included the candidate (i.e. declared the candidate available).\n",(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/protocol-approval.html#announcements--notices"},"Assignment notices"),"\nare gossiped among nodes so that all validators know which validators should check which\ncandidates, and if any candidate requires more checkers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Approval checks")," performs the checks by obtaining the candidate, verify its validity, and\nsending out the approval vote or initiating a dispute. Approval checks have a no-show timeout\nwindow (i.e. longer than one relay chain slot) to succeed in reconstructing the candidate block,\nredo its erasure coding to check the candidate receipt, and recheck the candidate block itself. A\nvalidator becomes tagged as no-show if does not approve or dispute within the no-show timeout\nwindow. Because validators can be overloaded with assignments, they can intentionally delay\nsending their assignment notice to avoid creating no-shows (see more in\n",(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/protocol-approval.html#assignment-postponement"},"Assignment postponement"),").")),(0,i.kt)("p",null,"These two steps first run as off-chain consensus protocols using messages gossiped among all\nvalidators, and then as on-chain record of those protocols' progress. The on-chain protocol is\nneeded to provide rewards for the off-chain protocol. The\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/protocol-approval.html#on-chain-verification"},"on-chain verification"),"\nhas two phases: a) assignments notices and approval votes are recorded in a relay chain block, and\nb) in another relay chain block notes are fed into the approval code."),(0,i.kt)("p",null,"The gossiped messages are of two types, assignment notices and approval votes, and are singed with\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/protocol-approval.html#approval-keys"},"approval keys"),".\nSuch keys are part of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-cryptography/#session-keys"},"session keys")," used by validators.\nBriefly, approval keys are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Approval assignment keys")," that are sr25519 keys used only for assignment criteria\n",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-randomness/#vrf"},"VRF"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Approval vote keys")," that are ed25519 and would only sign off on a candidate parablock validity.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For detailed information about the approval process see dedicated section in\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/protocol-approval.html"},"The Polkadot Parachain Host Implementers' Guide"),".")),(0,i.kt)("p",null,"Accepting a parablock is the end result of having passed through the detection stage without\ndispute, or having passed through and escalation/dispute stage with a positive outcome."),(0,i.kt)("h2",{id:"disputes"},"Disputes"),(0,i.kt)("p",null,"All parachain blocks that are in the finalized relay chain should be valid. This, does not apply to\nbacked blocks that are not included. To ensure nothing invalid ends up in the finalized relay chain\nthere are approval checks (described above) and disputes. The latter ensures that each attempt to\ninclude something invalid is caught and the offending validators are punished."),(0,i.kt)("p",null,"Disputes are ",(0,i.kt)("em",{parentName:"p"},"independent from a particular fork"),", while backing and approval operate on particular\nforks. The approval voting stops if an alternative fork (which might not contain the\ncurrently-approved candidate) is finalized. In fact, the sole purpose of the approval process is to\nmake sure invalid blocks are not finalized. However, even though the danger is past and the\noffending validators did not manage to get the invalid block approved, those validators need to get\nslashed for the attempt."),(0,i.kt)("p",null,"A dispute stems from a disagreement between two or more validators. For this to happen, a bad actor\nneeds to distribute an invalid block to honest validators. Scenarios leading to a dispute can be one\nof the followings (ordered from most to least important):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A parablock included on a branch of the relay chain is bad"),(0,i.kt)("li",{parentName:"ul"},"A parablock backed on a branch of the relay chain is bad"),(0,i.kt)("li",{parentName:"ul"},"A parablock seconded, but not backed on any branch of the relay chain, is bad")),(0,i.kt)("p",null,"Checking a parachain block requires 3 pieces of data: the parachain validator code, the availability\nof data, and the candidate receipt. The validator code is available on-chain and published ahead of\ntime. Thus, a dispute process begins with the availability to ensure the availability of the data.\nSuch process will conclude quickly if the data is already available, otherwise the initiator of the\ndispute must make it available."),(0,i.kt)("p",null,"Disputes have both off- and on-chain components. Slashing is handled on-chain, so votes by\nvalidators on either sides of the dispute must be placed on-chain. Moreover, a dispute on one branch\nof the chain must be transposed to all active branches so that misbehavior can be punished in all\npossible histories. There is thus a distinction between ",(0,i.kt)("em",{parentName:"p"},"local")," (the one we are looking at) and\n",(0,i.kt)("em",{parentName:"p"},"remote")," disputes relative to a particular branch of the relay chain."),(0,i.kt)("p",null,"Disputes can be divided into three different phases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/protocol-disputes.html#initiation"},"Dispute initiation"),":\nDisputes are initiated by any validator who finds their opinion on the validity of a parablock in\nopposition to another issued statement. The initiation begins off-chain by only nodes perceiving\nthat a parablock is bad. The validator can be one of the para-validators (i.e. one of the backers)\nor one of the approval checkers. Note that, if the dispute occurs during the backing phase, the\ninitiator must make the data available while if the dispute occurs during the approval process the\ndata is already available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/protocol-disputes.html#dispute-participation"},"Dispute participation"),":\nOnce becoming aware of the dispute, all validators must participate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/protocol-disputes.html#dispute-conclusion"},"Dispute conclusion"),":\nDisputes conclude after 2/3 supermajority is reached on either side. Disputes may also conclude\nafter a timeout. This will only happen if the majority of validators are unable to vote for some\nreason.")),(0,i.kt)("p",null,"The on-chain component of the dispute can be initiated by providing any two conflicting votes and it\nalso waits for 2/3 supermajority on either side. The component also tracks which parablocks have\nalready been disputed so that the same parablock can be disputed only once on any particular branch\nof the relay chain. Inclusion is halted for the parachain until the dispute resolves."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For detailed information about disputes see dedicated section in\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/protocol-disputes.html"},"The Polkadot Parachain Host Implementers' Guide"),".\nIn the Guide there are also more details about\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/disputes-flow.html"},"disputes' flows"),".")),(0,i.kt)("h2",{id:"chain-selection"},"Chain Selection"),(0,i.kt)("p",null,"Chain selection is used to select blocks to build on and finalize. These processes need to\nconsistent among nodes and resilient to a maximum proportion of malicious nodes. The parachain host\nuses a block authoring system and a finality gadget. The chain selection strategy involves a\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://paritytech.github.io/polkadot/book/protocol-chain-selection.html"},"leaf-selection rule")),"\nand a set of\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://paritytech.github.io/polkadot/book/protocol-chain-selection.html#the-best-chain-containing-rule"},"finality constraints")),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For detailed information about chain selection see dedicated section in\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/protocol-chain-selection.html"},"The Polkadot Parachain Host Implementers' Guide"),".")),(0,i.kt)("h2",{id:"further-readings"},"Further Readings"),(0,i.kt)("h3",{id:"guides"},"Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-polkadot"},"How to Validate on Polkadot")," - Guide on\nhow to set up a validator on the Polkadot live network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-validator-payout"},"Validator Payout Overview")," - A short overview on\nhow the validator payout mechanism works."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-systemd"},"How to run your validator as a systemd process")," -\nGuide on running your validator as a ",(0,i.kt)("inlineCode",{parentName:"li"},"systemd")," process so that it will run in the background and\nstart automatically on reboots."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-upgrade"},"How to Upgrade your Validator")," - Guide for\nsecurely upgrading your validator when you want to switch to a different machine or begin running\nthe latest version of client code.")),(0,i.kt)("h3",{id:"other-references"},"Other References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@acvlls/setting-up-a-maintain-the-easy-way-3a885283091f"},"How to run a Polkadot node (Docker)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/hackernoon/a-serverless-failover-solution-for-web-3-0-validator-nodes-e26b9d24c71d"},"A Serverless Failover Solution for Web3.0 Validator Nodes")," -\nBlog that details how to create a robust failover solution for running validators."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-kusama##vps-list"},"VPS list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/!NZrbtteFeqYKCUGQtr:matrix.parity.io?via=matrix.parity.io&via=matrix.org&via=web3.foundation"},"Polkadot Validator Lounge")," -\nA place to chat about being a validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"learn-staking#slashing"},"Slashing Consequences")," - Learn more about slashing consequences for\nrunning a validator node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0EmP0s6JOW4&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=2"},"Why You Should be A Validator on Polkadot and Kusama")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=riVg_Up_fCg&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=15"},"Roles and Responsibilities of a Validator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/e/validating-on-polkadot"},"Validating on Polkadot")," - An explanation of\nhow to validate on Polkadot, with Joe Petrowski and David Dorgan of Parity Technologies, along\nwith Tim Ogilvie from Staked.")),(0,i.kt)("h3",{id:"security--key-management"},"Security / Key Management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/validator-security"},"Validator Security Overview"))),(0,i.kt)("h3",{id:"monitoring-tools"},"Monitoring Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/panic_polkadot"},"PANIC for Polkadot")," - A monitoring and alerting\nsolution for Polkadot / Kusama node"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://telemetry.polkadot.io/#list/Kusama%20CC3"},"Polkadot Telemetry Service")," - Network\ninformation, including what nodes are running on a given chain, what software versions they are\nrunning, and sync status.")),(0,i.kt)("h3",{id:"validator-stats"},"Validator Stats"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkacube.hashquark.io/#/polkadot/strategy"},"HashQuark Staking Strategy")," - The HashQuark\nstaking strategy dashboard helps you choose the optimal set-up to maximize rewards, and provides\nother useful network monitoring tools."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkastats.io/"},"Polkastats")," - Polkastats is a cleanly designed dashboard for validator\nstatistics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://yieldscan.app/"},"YieldScan")," - Staking yield maximization platform, designed to minimize\neffort."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kusama.subscan.io/validator"},"Subscan Validators Page")," - Displays information on the\ncurrent validators - not as tailored for validators as the other sites.")))}m.isMDXComponent=!0},95856:()=>{},46601:()=>{}}]);