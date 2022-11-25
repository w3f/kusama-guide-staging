(self.webpackChunk=self.webpackChunk||[]).push([[2343],{47940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var i=n(74165),a=n(15861),o=n(67294),s=n(33444),r=n(36078),l=n(67425);function d(e,t,n){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,i.Z)().mark((function e(t,n,a){var o,l,d,p,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return d=new s.U(o),e.next=21,r.G.create({provider:d});case 21:p=e.sent,(u=n.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+n);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,n,i){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,i);break;case"precise":(0,l.Precise)(e,n,i);break;case"blocksToDays":(0,l.BlocksToDays)(e,i);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,n=e.path,s=e.defaultValue,r=e.filter,l=void 0===r?void 0:r,p=(0,o.useState)(""),c=p[0],h=p[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?u(s.toString(),l,t,h):h(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n,h);case 2:if(void 0!==(a=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(a,l,t,h):h(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(r){console.log(r)}}}),[]),c}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,n,i){var a=void 0;if("polkadot"===n||"statemint"===n)a=3;else{if("kusama"!==n&&"statemine"!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");a=6}e=parseFloat(e),i((e=Number.isInteger(e/t[n].precision)?e/t[n].precision+" "+t[n].symbol:(e/t[n].precision).toFixed(a)+" "+t[n].symbol).toString())},Precise:function(e,n,i){i(e=(e=parseFloat(e))/t[n].precision+" "+t[n].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())}}},44396:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),s=n(47940),r=["components"],l={id:"learn-staking-miner",title:"Staking Miner",sidebar_label:"Staking Miner",description:"Learn about Phragm\xe9n optimization on-chain via staking miners",keywords:["staking","npos","miner","phragm\xe9n"],slug:"../learn-staking-miner"},d=void 0,p={unversionedId:"learn/learn-staking-miner",id:"learn/learn-staking-miner",title:"Staking Miner",description:"Learn about Phragm\xe9n optimization on-chain via staking miners",source:"@site/../docs/learn/learn-staking-miner.md",sourceDirName:"learn",slug:"/learn-staking-miner",permalink:"/docs/learn-staking-miner",draft:!1,tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1668605630,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{id:"learn-staking-miner",title:"Staking Miner",sidebar_label:"Staking Miner",description:"Learn about Phragm\xe9n optimization on-chain via staking miners",keywords:["staking","npos","miner","phragm\xe9n"],slug:"../learn-staking-miner"}},u={},c=[{value:"NPoS election optimization",id:"npos-election-optimization",level:2},{value:"Signed Phase of the election pallet",id:"signed-phase-of-the-election-pallet",level:2},{value:"Deposit and reward mechanics",id:"deposit-and-reward-mechanics",level:2},{value:"Deposit",id:"deposit",level:3},{value:"Reward",id:"reward",level:3},{value:"Further Resources",id:"further-resources",level:2}],h={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The staking-miner code is experimental and it is still in the development phase. Use is at your own\ndiscretion, as there is a risk of losing some funds.")),(0,o.kt)("p",null,"At the end of each era on Polkadot and Kusama, using ",(0,o.kt)("a",{parentName:"p",href:"learn-phragmen"},"NPoS"),', a new set of validators\nmust be elected based on the nominator preferences. This is a computationally intensive process,\nhence the usage of the term "mining" for computing the solution. The validators use\n',(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/how-to-guides/offchain-workers/"},"off-chain workers")," to compute\nthe result and submit a transaction to propose the set of winners. This can also be delegated to\nstand-alone programs, whose task is to mine the optimal solution. Staking miners compete with each\nother to produce election solutions which consist of a validator set, stake distribution across that\nset, and a score indicating how optimal the solution is. Staking miners run any given staking\nalgorithms (as of now, sequential Phragm\xe9n or PhragMMS, subject to change if improved algorithms are\nintroduced) to produce results, which are then sent as a transaction to the relay chain via a normal\nsigned extrinsic. The transaction requires a bond and a transaction fee. The best solution is\nrewarded, which the least covers the transaction fee, and the bond is returned to the account.\n",(0,o.kt)("a",{parentName:"p",href:"learn-staking-miner#deposit-and-reward-mechanics"},"The bond and the fee")," are lost if the solution is\ninvalid."),(0,o.kt)("p",null,"Staking miner uses a pallet called ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet_election_provider_multi_phase")," and can only produce\nsolutions during the\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_election_provider_multi_phase/index.html#signed-phase"},(0,o.kt)("inlineCode",{parentName:"a"},"SignedPhase")),"\nof the pallet's life cycle. Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"SignedPhase")," is over and the\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_election_provider_multi_phase/index.html#unsigned-phase"},(0,o.kt)("inlineCode",{parentName:"a"},"UnsignedPhase")),"\nstarts, only the off-chain workers can provide election results."),(0,o.kt)("p",null,"Running the staking miner requires passing the seed of a funded account in order to pay the fees for\nthe transactions that will be sent. The same account's balance is used to reserve deposits as well.\nThe best solution in each round is rewarded. All correct solutions will get their deposit back and\nthe ones that submit invalid solutions will lose their deposit."),(0,o.kt)("h2",{id:"npos-election-optimization"},"NPoS election optimization"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NPoS election optimization",src:n(83471).Z,width:"1868",height:"804"})),(0,o.kt)("p",null,"A basic election solution is a simple distribution of stake across validators, but this can be\noptimized for better distribution equaling a higher security score. The staking miner does not act\nas a validator and focuses solely on the election result and optimization of the solution. It\nconnects to a specified chain and keeps listening to new signed phase of the election pallet in\norder to submit solutions to the NPoS election. When the correct time comes, it computes its\nsolution and submits it to the chain. The default miner algorithm is sequential Phragm\xe9n with a\nconfigurable number of balancing iterations that improve the score."),(0,o.kt)("h2",{id:"signed-phase-of-the-election-pallet"},"Signed Phase of the election pallet"),(0,o.kt)("p",null,"The election provider pallet ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet_election_provider_multi_phase")," is divided into two phases,\n",(0,o.kt)("strong",{parentName:"p"},"signed")," and ",(0,o.kt)("strong",{parentName:"p"},"unsigned"),". At the end of the pallet's timeline, the function ",(0,o.kt)("inlineCode",{parentName:"p"},"elect()")," is called."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"                                                                   elect()\n                +   <--T::SignedPhase--\x3e  +  <--T::UnsignedPhase--\x3e   +\n  +-------------------------------------------------------------------+\n   Phase::Off   +       Phase::Signed     +      Phase::Unsigned      +\n")),(0,o.kt)("p",null,"Solutions provided by the staking miner can only be submitted during the signed phase. Solutions are\nsubmitted and queued on the chain as a ",(0,o.kt)("inlineCode",{parentName:"p"},"RawSolution"),". Once submitted, a solution cannot be retracted\nby the originating account."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RawSolution")," struct definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pub struct RawSolution<S> {\n    pub solution: S, // The solution itself\n    pub score: ElectionScore, // The claimed score of the solution.\n    pub round: u32, // The round at which this solution should be submitted.\n}\n")),(0,o.kt)("p",null,"A maximum of ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet::Config::MaxSignedSubmissions")," will be stored on-chain and they will be sorted\nbased on score. Higher the score the more optimal the election solution is. On both Polkadot and\nKusama the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/runtime/polkadot/src/lib.rs#L446"},"'MaxSignedSubmissions'"),"\nis set to\n","\n",(0,o.kt)(s.Z,{network:"kusama",path:"consts.electionProviderMultiPhase.signedMaxSubmissions",defaultValue:16,mdxType:"RPC"}),"\nsubmissions. This variable can be modified if needed through governance."),(0,o.kt)("p",null,"Upon arrival of a new solution:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the queue is not full, it is stored in the appropriate sorted index."),(0,o.kt)("li",{parentName:"ol"},"If the queue is full but the submitted solution is better than one of the queued ones, the worse\nsolution is discarded, the deposit of the outgoing solution is returned, and the new solution is\nstored in the correct index."),(0,o.kt)("li",{parentName:"ol"},"If the queue is full and the solution is not an improvement compared to any of the queued ones,\nit is instantly rejected and no deposit is reserved.")),(0,o.kt)("p",null,"Upon the end of the ",(0,o.kt)("inlineCode",{parentName:"p"},"SignedPhase"),", no more solutions can be submitted and the solutions in the queue\nwill be checked using\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_election_provider_multi_phase/pallet/struct.Pallet.html#method.feasibility_check"},(0,o.kt)("inlineCode",{parentName:"a"},"Pallet::feasibility_check")),"\nwhich ensures the score is indeed correct, and marks them as valid or invalid. By checking each\nsolution in the queue, the queue will be reorganized by score. The highest valid score will be\nrewarded. Invalid solutions with higher score than the winning solution will be slashed. The rest of\nthe solutions will be discarded and their deposit will be returned. Once the staking miner with a\nwinning solution is ready to be rewarded the runtime will automatically execute\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/f2bc08a3071a91b71fec63cf2b22c707411cec0e/frame/election-provider-multi-phase/src/signed.rs#L453-L474"},(0,o.kt)("inlineCode",{parentName:"a"},"finalize_signed_phase_accept_solution")),"\nwhich reward account associated with the winning solution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Queue\n+-------------------------------+\n|Solution(score=20, valid=false)| +--\x3e  Slashed\n+-------------------------------+\n|Solution(score=15, valid=true )| +--\x3e  Rewarded, Saved\n+-------------------------------+\n|Solution(score=10, valid=true )| +--\x3e  Discarded\n+-------------------------------+\n|Solution(score=05, valid=false)| +--\x3e  Discarded\n+-------------------------------+\n|             None              |\n+-------------------------------+\n")),(0,o.kt)("h2",{id:"deposit-and-reward-mechanics"},"Deposit and reward mechanics"),(0,o.kt)("p",null,"The staking miners are required to pay a deposit to post their solutions. Deposit amount is the sum\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"SignedDepositBase")," +",(0,o.kt)("inlineCode",{parentName:"p"},"SignedDepositByte")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"SignedDepositWeight"),". All good solutions are subject\nto receiving a ",(0,o.kt)("inlineCode",{parentName:"p"},"SignedRewardBase"),"."),(0,o.kt)("h3",{id:"deposit"},"Deposit"),(0,o.kt)("p",null,"Current deposit(",(0,o.kt)("inlineCode",{parentName:"p"},"SignedDepositBase"),") is\n","\n",(0,o.kt)(s.Z,{network:"kusama",path:"consts.electionProviderMultiPhase.signedDepositBase",defaultValue:133333332e3,filter:"humanReadable",mdxType:"RPC"}),"\nwhich is a fixed amount."),(0,o.kt)("p",null,"Current deposit per byte(",(0,o.kt)("inlineCode",{parentName:"p"},"SignedDepositByte"),") is\n","\n",(0,o.kt)(s.Z,{network:"kusama",path:"consts.electionProviderMultiPhase.signedDepositByte",defaultValue:32551,filter:"precise",mdxType:"RPC"}),"\nand the total is variable depending on the size of the solution data. For example, a solution\nweighing 200KB would yield ","\n200 x 0.00000032551 = ",(0,o.kt)("strong",{parentName:"p"},"0.000065102 KSM"),"."),(0,o.kt)("p",null,"And the weight deposit(",(0,o.kt)("inlineCode",{parentName:"p"},"SignedDepositWeight"),") is currently set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and has no effect."),(0,o.kt)("h3",{id:"reward"},"Reward"),(0,o.kt)("p",null,"Current reward(",(0,o.kt)("inlineCode",{parentName:"p"},"SignedRewardBase"),") is\n","\n",(0,o.kt)(s.Z,{network:"kusama",path:"consts.electionProviderMultiPhase.signedRewardBase",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"\nwhich is a fixed amount."),(0,o.kt)("h2",{id:"further-resources"},"Further Resources"),(0,o.kt)("p",null,"If you want to run a staking miner on your validator, refer to the repository provided in the\nresources section below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/staking-miner-v2"},"Staking Miner repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.parity.io/pallet_election_provider_multi_phase/index.html"},"Election Pallet definition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/blob/f610ffc05876d4b98a14cee245b4cc27bd3c0c15/runtime/polkadot/src/lib.rs#L389:L397"},"Signed phase parameter configuration on Polkadot"))))}m.isMDXComponent=!0},83471:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const i=n.p+"assets/images/NPoS-election-optimization-3ef1b7bd0a99f64c4198511b4216989d.png"},93971:()=>{},46601:()=>{}}]);