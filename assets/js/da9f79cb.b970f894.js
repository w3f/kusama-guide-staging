(self.webpackChunk=self.webpackChunk||[]).push([[2248],{47940:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var n=o(74165),a=o(15861),i=o(67294),s=o(33444),r=o(36078),l=o(67425);function d(e,t,o){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,n.Z)().mark((function e(t,o,a){var i,l,d,p,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return d=new s.U(i),e.next=21,r.G.create({provider:d});case 21:p=e.sent,(m=o.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=m[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+m[0]+") in "+o);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t,o,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,o,n);break;case"precise":(0,l.Precise)(e,o,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,o=e.path,s=e.defaultValue,r=e.filter,l=void 0===r?void 0:r,p=(0,i.useState)(""),c=p[0],u=p[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?m(s.toString(),l,t,u):u(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,o,u);case 2:if(void 0!==(a=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?m(a,l,t,u):u(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(r){console.log(r)}}}),[]),c}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,o,n){var a=void 0;if("polkadot"===o||"statemint"===o)a=3;else{if("kusama"!==o&&"statemine"!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");a=6}e=parseFloat(e),n((e=Number.isInteger(e/t[o].precision)?e/t[o].precision+" "+t[o].symbol:(e/t[o].precision).toFixed(a)+" "+t[o].symbol).toString())},Precise:function(e,o,n){n(e=(e=parseFloat(e))/t[o].precision+" "+t[o].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())}}},92916:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=o(87462),a=o(63366),i=(o(67294),o(3905)),s=o(47940),r=["components"],l={id:"learn-nomination-pools",title:"Nomination Pools",sidebar_label:"Nomination Pools",description:"Learn about Nomination Pools and their features",keyword:["nominate","nominator","stake","staking","pools"],slug:"../learn-nomination-pools"},d=void 0,p={unversionedId:"learn/learn-nomination-pools",id:"learn/learn-nomination-pools",title:"Nomination Pools",description:"Learn about Nomination Pools and their features",source:"@site/../docs/learn/learn-nomination-pools.md",sourceDirName:"learn",slug:"/learn-nomination-pools",permalink:"/docs/learn-nomination-pools",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1669110350,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{id:"learn-nomination-pools",title:"Nomination Pools",sidebar_label:"Nomination Pools",description:"Learn about Nomination Pools and their features",keyword:["nominate","nominator","stake","staking","pools"],slug:"../learn-nomination-pools"}},m={},c=[{value:"Key Components",id:"key-components",level:2},{value:"Pool Member Lifecycle",id:"pool-member-lifecycle",level:2},{value:"Join a pool",id:"join-a-pool",level:3},{value:"Claim rewards",id:"claim-rewards",level:3},{value:"Unbond and withdraw funds",id:"unbond-and-withdraw-funds",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Pool Administration",id:"pool-administration",level:2},{value:"States",id:"states",level:3},{value:"Roles",id:"roles",level:3},{value:"Pool Lifecycle",id:"pool-lifecycle",level:2},{value:"Creation",id:"creation",level:3},{value:"Upkeep",id:"upkeep",level:3},{value:"Destruction",id:"destruction",level:3},{value:"Slashing",id:"slashing",level:2}],u={toc:c};function h(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Nomination Pools are live on Polkadot!",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Nomination pools are a new feature for Polkadot\u2019s staking system that allows users to pool their\nDOT tokens together on-chain to nominate validators and receive rewards, significantly improving\nthe system\u2019s scalability. Now, anyone with as little as ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/nomination-pools-are-live-stake-natively-with-just-1-dot/"},"1 DOT can receive rewards for staking\nnatively on Polkadot"),". ")),(0,i.kt)("admonition",{title:"Have questions on Nomination Pools?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Please join the ",(0,i.kt)("a",{parentName:"p",href:"https://dot.li/discord"},"Polkadot Discord")," for asking general questions about Nomination Pools.\nIf you are a developer, please join our\n",(0,i.kt)("a",{parentName:"p",href:"https://matrix.to/#/#nompools-support:matrix.parity.io"},"nomination pools support channel"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nomination Pools",src:o(85408).Z,width:"1720",height:"963"})),(0,i.kt)("p",null,"Nomination pools are one of the key features from the roadmap of staking improvements on\nKusama. They are designed to\npermissionlessly allow members to pool their funds together and act as a single nominator account."),(0,i.kt)("p",null,"Due to the current runtime constraints,\nKusama can only handle\n","\n",(0,i.kt)(s.Z,{network:"kusama",path:"consts.electionProviderMultiPhase.maxElectingVoters",defaultValue:12500,mdxType:"RPC"}),"\nnominators comfortably in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nominator#staking-election-stages"},"electing set"),". As one of\nthe objectives of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"NPoS algorithm")," is to maximize the overall stake on the\nnetwork, it can be inferred that the staking system on\nKusama favors nominators with a larger\nstake. Only the nominator accounts which back the validators in the active set are eligible for\nreceiving staking rewards. This leaves out nomination intents from the accounts with lower token\nbalance than the min-active nomination and places them in a waiting queue to enter electing set.\nNomination pools will be handy to the members who would like to participate in the staking system\nwith a stake much lower than the dynamic min-active nomination threshold on the network. All\noperations are constant space and time complexity relative to the number of members, eliminating any\ntheoretical upper bound on the quantity of members the system can handle and thus scaling the number\nof accounts that can participate and earn rewards in the staking system on\nKusama. In summary, each nomination pool is\nviewed as a single nominator from the NPoS system point of view."),(0,i.kt)("admonition",{title:"Why aren't the members in the nomination pools called delegators?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The term ",(0,i.kt)("inlineCode",{parentName:"p"},"delegator")," is associated too much with Delegated Proof of Staking (DPoS) and since\nKusama implements Nominated Proof of Staking\n(NPoS), naming them as delegators would be misleading. The term ",(0,i.kt)("inlineCode",{parentName:"p"},"member")," is our generic replacement\nfor ",(0,i.kt)("inlineCode",{parentName:"p"},"delegator"),". In action, members are actually quite similar to delegators and do delegate their\nnomination power to the pool.")),(0,i.kt)("p",null,"The earnings of the pool are split pro rata to a member's stake in the bonded pool (and thus the\nstaking rewards for members will be the same as if they were a nominator). Importantly, slashes are\nalso applied proportionally to members who may have been actively bonded."),(0,i.kt)("h2",{id:"key-components"},"Key Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bonded Pool: Tracks the distribution of actively staked funds."),(0,i.kt)("li",{parentName:"ul"},"Reward Pool: Tracks rewards earned by actively staked funds."),(0,i.kt)("li",{parentName:"ul"},"Unbonding Sub Pools: Collection of pools at different phases (i.e. eras) of the unbonding\nlifecycle."),(0,i.kt)("li",{parentName:"ul"},"Members: Accounts that nominate to the pools."),(0,i.kt)("li",{parentName:"ul"},"Point: Unit of measure for a member\u2019s portion of a pool's funds. All pools start with a point to\nPlanck ratio of 1. Over time, if the pool receives rewards, they increase in value, and if the\npool is slashed, it decreases in value.")),(0,i.kt)("h2",{id:"pool-member-lifecycle"},"Pool Member Lifecycle"),(0,i.kt)("h3",{id:"join-a-pool"},"Join a pool"),(0,i.kt)("p",null,"A member delegates funds to a pool by transferring some amount to the pool\u2019s bonded account with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"join")," extrinsic. The pool then increases its bond with the new funds. A member is afforded the\nability to bond additional funds, or re-stake rewards as long as they are already actively bonded.\nNote that a member may only belong to one pool at a time."),(0,i.kt)("p",null,"",(0,i.kt)("strong",{parentName:"p"},"The current minimum bond to join a pool is ",(0,i.kt)(s.Z,{network:"kusama",path:"query.nominationPools.minJoinBond",defaultValue:1666666650,filter:"humanReadable",mdxType:"RPC"}),"."),""),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The funds nominated to a pool will not be visible in the member's account balance on Polkadot JS\nApps UI. This is because the member funds are transferred from their account to the pool's account.\nThis pool account is not accessible by anyone (including the pool root or depositor) and only the\npool's internal logic can access the account.")),(0,i.kt)("admonition",{title:"Use Non-Transfer Proxy Accounts to join Nomination Pools",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Currently, only ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-proxies#non-transfer-proxy"},"non-transfer proxies")," can be used to\nparticipate in nomination pools. ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-proxies#staking-proxy"},"staking proxies")," cannot be used\nas they are not enabled to make calls to the nomination pools pallet.")),(0,i.kt)("p",null,'Check the "How to join a pool" section in\n',(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181401-how-to-join-nomination-pools"},"this support article"),"\nfor guidelines."),(0,i.kt)("h3",{id:"claim-rewards"},"Claim rewards"),(0,i.kt)("p",null,'The member can claim their portion of any rewards that have accumulated since the previous time they\nclaimed (or in the case that they have never claimed, any rewards that have accumulated since the\nera after they joined). Rewards are split pro rata among the actively bonded members. Check the "How\nto claim rewards" section in\n',(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181401-how-to-join-nomination-pools"},"this support article"),"\nfor guidelines."),(0,i.kt)("h3",{id:"unbond-and-withdraw-funds"},"Unbond and withdraw funds"),(0,i.kt)("p",null,"At any point in time after joining the pool, a member can start the process of exiting by unbonding.\n",(0,i.kt)("inlineCode",{parentName:"p"},"unbond")," will unbond part or all of the member's funds. After unbond has been called and the\nunbonding duration has passed\n","\n(",(0,i.kt)(s.Z,{network:"kusama",path:"consts.staking.bondingDuration",defaultValue:28,mdxType:"RPC"}),"\neras which correspond to\n","\n",(0,i.kt)(s.Z,{network:"kusama",path:"consts.staking.bondingDuration",defaultValue:28,mdxType:"RPC"}),"\ndays on  Kusama). A member may withdraw\ntheir funds with ",(0,i.kt)("inlineCode",{parentName:"p"},"withdrawUnbonded"),'. Withdrawing effectively ends a member\'s relationship with their\npool, allowing them to join a different pool if desired. Check the "Withdraw unbonded funds" section\nin\n',(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181401-how-to-join-nomination-pools"},"this support article"),"\nfor guidelines."),(0,i.kt)("admonition",{title:"Unbonding transaction automatically triggers withdrawal of rewards",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When there is a change in the bonded balance, the accumulated rewards in the pool thus far are automatically\nwithdrawn to the account. The rewards are then accrued based on the updated bonded balance. ")),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A member cannot vote (e.g. in Referenda or for Council members) with their nominated funds. This\nmay be changed in the future once accounts are afforded the ability to split votes."),(0,i.kt)("li",{parentName:"ul"},"In order for a member to switch pools all funds from the account must be unbonded. This process\ntakes 28 eras."),(0,i.kt)("li",{parentName:"ul"},"A member can partially unbond the staked funds in the pool (at most 16 partial unbonds).")),(0,i.kt)("admonition",{title:"Kusama Pool Stats",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"There can be a maximum of\n",(0,i.kt)(s.Z,{network:"kusama",path:"query.nominationPools.maxPoolMembers",defaultValue:65536,mdxType:"RPC"}),"\nmembers (there are currently\n",(0,i.kt)(s.Z,{network:"kusama",path:"query.nominationPools.counterForPoolMembers",defaultValue:149,mdxType:"RPC"}),"\nmembers)."),(0,i.kt)("li",{parentName:"ul"},"There can be a maximum of\n",(0,i.kt)(s.Z,{network:"kusama",path:"query.nominationPools.maxPools",defaultValue:64,mdxType:"RPC"}),"\npools (there are currently\n",(0,i.kt)(s.Z,{network:"kusama",path:"query.nominationPools.lastPoolId",defaultValue:59,mdxType:"RPC"}),"\npools)."),(0,i.kt)("li",{parentName:"ul"},"There can be a maximum of\n",(0,i.kt)(s.Z,{network:"kusama",path:"query.nominationPools.maxPoolMembersPerPool",defaultValue:16,mdxType:"RPC"}),"\nmembers per pool."))),(0,i.kt)("h2",{id:"pool-administration"},"Pool Administration"),(0,i.kt)("h3",{id:"states"},"States"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open: The pool is open to be joined by anyone."),(0,i.kt)("li",{parentName:"ul"},"Blocked: The pool is blocked; no joiners are permitted."),(0,i.kt)("li",{parentName:"ul"},"Destroying: The pool is in the process of being destroyed. Once in this state the pool may never\nrevert to any other state; it can only proceed to being destroyed. All members can be\npermissionlessly unbonded; this allows the pool to be dismantled regardless of any individual\nmember\u2019s proactivity.")),(0,i.kt)("h3",{id:"roles"},"Roles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Depositor: Creates the pool and is the initial member. The depositor can only leave the pool once\nall other members have left. Once they leave by withdrawing, the pool is fully removed from the\nsystem."),(0,i.kt)("li",{parentName:"ul"},"Nominator: Can select the validators the pool nominates."),(0,i.kt)("li",{parentName:"ul"},"State-Toggler: Can change the pool\u2019s state and kick (permissionlessly unbond/withdraw) members if\nthe pool is blocked."),(0,i.kt)("li",{parentName:"ul"},"Root: Can change the nominator, state-toggler, or itself. Further, it can perform any of the\nactions the nominator or state-toggler can.")),(0,i.kt)("h2",{id:"pool-lifecycle"},"Pool Lifecycle"),(0,i.kt)("h3",{id:"creation"},"Creation"),(0,i.kt)("p",null,"The depositor calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," extrinsic, setting the administrative roles and transferring some\nfunds to the pool in order to add themselves as the first member. As stated above, the depositor\nmust always be a member as long as the pool exists; they will be the last member to leave, ensuring\nthey always have some skin in the game. Significant stake from the depositor is always a good\nindicator for the pool's credibility."),(0,i.kt)("p",null,"",(0,i.kt)("strong",{parentName:"p"},"The current minimum bond to create a pool is ",(0,i.kt)(s.Z,{network:"kusama",path:"query.nominationPools.minCreateBond",defaultValue:1e12,filter:"humanReadable",mdxType:"RPC"}),"."),""),(0,i.kt)("p",null,"The pool\u2019s \u2018nominator role\u2019 selects validators with the nominate extrinsic. On Polkadot JS Apps UI,\nnavigate to Network > Staking > Pools and click on Add Pool button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Nomination Pools",src:o(85209).Z,width:"1412",height:"638"})),(0,i.kt)("p",null,"The UI automatically assigns ID to the pool and allows for entering the name of the pools as well as\nthe deposit to be bonded."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Nomination Pools - deposit",src:o(58732).Z,width:"1164",height:"458"})),(0,i.kt)("p",null,"When creating a pool using Polkadot JS Apps UI, all the roles are mapped to the Depositor account by\ndefault. If any of these roles need to be assigned to a different account, create the pool using\n",(0,i.kt)("inlineCode",{parentName:"p"},"create")," extrinsic available on Developer > Extrinsics > nominationPools on Polkadot JS Apps UI."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nomination Pool Roles",src:o(12920).Z,width:"1426",height:"558"})),(0,i.kt)("h3",{id:"upkeep"},"Upkeep"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nominator")," can update the pool\u2019s validator selection. On Polkadot JS Apps UI, navigate to\nNetwork > Staking > Accounts page and click on Pooled button.If you have any pooled accounts with\nthe role of ",(0,i.kt)("inlineCode",{parentName:"p"},"nominator"),", you would notice the option to set nominees. Select the validators to\nnominate like you would normally using a nominator account."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nominate validators",src:o(22455).Z,width:"1810",height:"786"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"state-toggler")," can update the pool\u2019s state to blocked through ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," extrinsic and then\nkick members by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"unbond")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"withdrawUnbonded"),". (The state can also be toggled back to\nopen)."),(0,i.kt)("h3",{id:"destruction"},"Destruction"),(0,i.kt)("p",null,"A pool can be pushed into the \u201cdestroying\u201d state via one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The state-toggler sets the pool to \u201cdestroying\u201d."),(0,i.kt)("li",{parentName:"ul"},"Any account can set the pool to destroying if over 90% of the pool's active bonded balance has\nbeen slashed. Dismantling a destroying pool"),(0,i.kt)("li",{parentName:"ul"},"When a pool is in \u2018destroying\u2019 state, ",(0,i.kt)("inlineCode",{parentName:"li"},"unbond")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"withdrawUnbonded")," become permissionless, so\nanyone can help all the members exit."),(0,i.kt)("li",{parentName:"ul"},"Once the depositor withdraws, no members belong to the pool, and all the pool\u2019s resources are\nwiped from state.")),(0,i.kt)("h2",{id:"slashing"},"Slashing"),(0,i.kt)("p",null,"If a pool\u2019s underlying nomination account is slashed by the staking system, then the slash is\ndistributed evenly across the bonded pool and the unbonding pools from slash era+1 through the slash\napply era. Thus, any member who either a) was unbonding or b) was actively bonded in the\naforementioned range of eras will be affected by the slash. In other words, a member who may have\nbeen actively bonded during the offence is slashed pro rata based on its stake relative to the total\nslash amount."),(0,i.kt)("p",null,"Unbonding pools need to be slashed to ensure all nominators who were in the bonded pool while it was\nbacking a validator that committed an offence are punished. Without these measures a nominator could\nunbond right after a validator equivocated with no consequences."),(0,i.kt)("p",null,"This strategy is unfair to members who joined after the slash, because they get slashed as well, but\nspares members who unbond. The latter is much more important for security: if a pool's validators\nare attacking the network, their members need to unbond fast! Avoiding additional slashes gives them\nan incentive to do that if validators get repeatedly slashed."))}h.isMDXComponent=!0},85408:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/NPoS-Pools-b758caea750e9e772fe7fcdbd6babeca.png"},85209:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/Nomination-Pools-1-98ee6b5592f6851aa57c9d427d70598f.png"},58732:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/Nomination-Pools-2-84da587a4d7591f2e2f79a4054214984.png"},22455:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/Nomination-Pools-5-9b16b01bde4e095d3c8fa71aa9a9a6ca.png"},12920:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/Nomination-Pools-7-74928d7825f19208592498e7b12dee5c.png"},93971:()=>{},46601:()=>{}}]);