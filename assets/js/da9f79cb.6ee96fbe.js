(self.webpackChunk=self.webpackChunk||[]).push([[2248],{47940:(e,t,o)=>{"use strict";o.d(t,{Z:()=>k});var n=o(74165),a=o(15861),i=o(67294),s=o(98562),l=o(73100),r="polkadot",d="kusama",p="statemine",m="statemint";function c(e,t,o){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,n.Z)().mark((function e(t,o,a){var i,r,d,p,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,r=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return d=new s.U(i),e.next=21,l.G.create({provider:d});case 21:p=e.sent,(m=o.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=m[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return r=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return r=(r=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+m[0]+") in "+o);case 35:return e.abrupt("return",r);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,o,n){var a={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};switch(t){case"humanReadable":var i=void 0;if(o===r||o===m)i=3;else{if(o!==d&&o!==p)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=6}e=parseFloat(e),e=Number.isInteger(e/a[o].precision)?e/a[o].precision+" "+a[o].symbol:(e/a[o].precision).toFixed(i)+" "+a[o].symbol;break;case"blocksToDays":e=6*e/86400;break;default:return void console.log("Ignoring unknown filter type")}n(e.toString())}const k=function(e){var t=e.network,o=e.path,s=e.defaultValue,l=e.filter,h=void 0===l?void 0:l,k=(0,i.useState)(""),b=k[0],f=k[1];return(0,i.useEffect)((function(){void 0!==h?u(s.toString(),h,t,f):f(s.toString());var e=void 0;switch(t){case r:e="wss://rpc.polkadot.io";break;case d:e="wss://kusama-rpc.polkadot.io/";break;case p:e="wss://statemine-rpc.polkadot.io/";break;case m:e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+net)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,o,f);case 2:a=e.sent,void 0!==h?u(a,h,t,f):f(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(l){console.log(l)}}}),[]),b}},92916:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var n=o(87462),a=o(63366),i=(o(67294),o(3905)),s=o(47940),l=["components"],r={id:"learn-nomination-pools",title:"Nomination Pools",sidebar_label:"Nomination Pools",description:"Learn about Nomination Pools and their features",keyword:["nominate","nominator","stake","staking","pools"],slug:"../learn-nomination-pools"},d=void 0,p={unversionedId:"learn/learn-nomination-pools",id:"learn/learn-nomination-pools",title:"Nomination Pools",description:"Learn about Nomination Pools and their features",source:"@site/../docs/learn/learn-nomination-pools.md",sourceDirName:"learn",slug:"/learn-nomination-pools",permalink:"/docs/learn-nomination-pools",draft:!1,tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1658564248,formattedLastUpdatedAt:"Jul 23, 2022",frontMatter:{id:"learn-nomination-pools",title:"Nomination Pools",sidebar_label:"Nomination Pools",description:"Learn about Nomination Pools and their features",keyword:["nominate","nominator","stake","staking","pools"],slug:"../learn-nomination-pools"}},m={},c=[{value:"Key Components of Nomination Pools",id:"key-components-of-nomination-pools",level:2},{value:"Pool Member Lifecycle",id:"pool-member-lifecycle",level:2},{value:"Join a pool",id:"join-a-pool",level:3},{value:"Claim rewards",id:"claim-rewards",level:3},{value:"Unbond funds",id:"unbond-funds",level:3},{value:"Withdraw unbonded funds",id:"withdraw-unbonded-funds",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Pool Administration",id:"pool-administration",level:2},{value:"States",id:"states",level:3},{value:"Roles:",id:"roles",level:3},{value:"Pool Lifecycle",id:"pool-lifecycle",level:2},{value:"Creation",id:"creation",level:3},{value:"Upkeep",id:"upkeep",level:3},{value:"Destruction",id:"destruction",level:3},{value:"Slashing",id:"slashing",level:2}],h={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Nomination Pools are live on ",(0,i.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwestend-rpc.polkadot.io#/staking/pools"},"Westend")," and ",(0,i.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/staking/pools"},"Kusama"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get some ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-DOT#getting-westies"},"Westies (WND)")," and start experimenting with Nomination\npools! Soon they will be deployed on Polkadot.")),(0,i.kt)("admonition",{title:"Have questions on Nomination Pools?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you have questions about nomination pools, please join our\n",(0,i.kt)("a",{parentName:"p",href:"https://matrix.to/#/#nompools-support:matrix.parity.io"},"nomination pools support channel"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nomination Pools",src:o(85408).Z,width:"1720",height:"963"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/10694"},"Nomination pools")," are one of the key\n(experimental) features from the roadmap of\n",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/kianenigma/aa835946455b9a3f167821b9d05ba376"},"Staking improvements")," on\nPolkadot. They are designed to permissionlessly allow members to pool their funds together and act\nas a single nominator account. Due to the current runtime constraints,\n\nKusama\ncan only handle\n","\n",(0,i.kt)(s.Z,{network:"kusama",path:"consts.electionProviderMultiPhase.maxElectingVoters",defaultValue:12500,mdxType:"RPC"}),"\nnominators comfortably in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nominator#staking-election-stages"},"electing set"),". As one of the objectives of the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"NPoS algorithm")," is to maximize the overall stake on the network, it can be\ninferred that the staking system on Polkadot favors nominators with a larger stake. Only the\nnominator accounts which back the Validators in the active set are eligible for receiving staking\nrewards. This leaves out nomination intents from the accounts with lower DOT balance than the\nmin-active nomination and places them in a waiting queue to enter electing set. Nomination pools\nwill be handy to the members who would like to participate in the staking system with a stake much\nlower than the dynamic min-active nomination threshold on the network. All operations are constant\nspace and time complexity relative to the number of members, eliminating any theoretical upper bound\non the quantity of members the system can handle and thus scaling the number of accounts that can\nparticipate and earn rewards in the staking system on Polkadot. In summary, each nomination pool is\nviewed as a single nominator from the NPoS system point of view."),(0,i.kt)("admonition",{title:"Why aren't the members in the nomination pools called delegators?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The term ",(0,i.kt)("inlineCode",{parentName:"p"},"delegator")," is associated too much with Delegated Proof of Staking (DPoS) and since\nPolkadot implements Nominated Proof of Staking (NPoS), naming them as delegators would be\nmisleading. ",(0,i.kt)("inlineCode",{parentName:"p"},"member")," is our generic replacement for ",(0,i.kt)("inlineCode",{parentName:"p"},"delegator"),". In action, members are actually\nquite similar to delegators and do delegate their nomination power to the pool.")),(0,i.kt)("p",null,"The earnings of the pool are split pro rata to a member's stake in the bonded pool (and thus the\nstaking rewards for members will be the same as if they were a nominator). Importantly, slashes are\nalso applied proportionally to members who may have been actively bonded when a validator committed\na slashable offence."),(0,i.kt)("h2",{id:"key-components-of-nomination-pools"},"Key Components of Nomination Pools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bonded Pool: Tracks the distribution of actively staked funds."),(0,i.kt)("li",{parentName:"ul"},"Reward Pool: Tracks rewards earned by actively staked funds."),(0,i.kt)("li",{parentName:"ul"},"Unbonding Sub Pools: Collection of pools at different phases (i.e. eras) of the unbonding\nlifecycle."),(0,i.kt)("li",{parentName:"ul"},"Members: Accounts that nominate to the pools."),(0,i.kt)("li",{parentName:"ul"},"Point: A unit of measure for a member\u2019s portion of a pool's funds. All pools start with a point to\nPlanck ratio of 1. Over time, if the pool receives rewards, they increase in value, and if the\npool is slashed, it decreases in value.")),(0,i.kt)("h2",{id:"pool-member-lifecycle"},"Pool Member Lifecycle"),(0,i.kt)("h3",{id:"join-a-pool"},"Join a pool"),(0,i.kt)("p",null,"A member delegates funds to a pool by transferring some amount to the pool\u2019s bonded account with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"join")," extrinsic. The pool then increases its bond with the new funds. A member is afforded the\nability to bond additional funds, or re-stake rewards as long as they are already actively bonded.\nNote that a member may only belong to one pool at a time."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The funds nominated to a pool will not be visible in the member's account balance on Polkadot JS\nApps UI. This is because the member funds are transferred from their account to the pool's account.\nThis pool account is not accessible by anyone (including the pool root or depositor) and only the\npool's internal logic can access the account.")),(0,i.kt)("p",null,"Navigate to Network > Staking > Pools page on Polkadot JS Apps UI and choose the pool to join. Click\non the Join button and then sign and submit the transaction specifying the amount you would like to\nnominate."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Join Pool",src:o(23650).Z,width:"1996",height:"670"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Join Pool",src:o(8377).Z,width:"1662",height:"450"})),(0,i.kt)("h3",{id:"claim-rewards"},"Claim rewards"),(0,i.kt)("p",null,"The member can claim their portion of any rewards that have accumulated since the previous time they\nclaimed (or in the case that they have never claimed, any rewards that have accumulated since the\nera after they joined). Rewards are split pro rata among the actively bonded members."),(0,i.kt)("p",null,"On Polkadot JS Apps UI, navigate to Network > Staking > Accounts > Pooled, where you can view your\npooled member account details. To claim rewards, click on the three vertical dots and click on\nWithdraw claimable."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Claim rewards",src:o(68124).Z,width:"1712",height:"652"})),(0,i.kt)("h3",{id:"unbond-funds"},"Unbond funds"),(0,i.kt)("p",null,"At any point in time after joining the pool, a member can start the process of exiting by unbonding.\n",(0,i.kt)("inlineCode",{parentName:"p"},"unbond")," will unbond part or all of the member's funds."),(0,i.kt)("p",null,"On Polkadot JS Apps UI, navigate to Network > Staking > Accounts > Pooled and click on the three\nvertical dots and click on Unbond funds."),(0,i.kt)("h3",{id:"withdraw-unbonded-funds"},"Withdraw unbonded funds"),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"unbond")," has been called and the unbonding duration has passed (e.g. 28 days on Polkadot), a\nmember may withdraw their funds with ",(0,i.kt)("inlineCode",{parentName:"p"},"withdrawUnbonded"),". Withdrawing effectively ends a member's\nrelationship with their pool, allowing them to join a different pool if desired."),(0,i.kt)("p",null,"On Polkadot JS Apps UI, navigate to Network > Staking > Accounts > Pooled and click on the three\nvertical dots and click on Withdraw unbonded."),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A member cannot vote (e.g. in Referenda or for Council members) with their nominated funds. This\nmay be changed in the future once accounts are afforded the ability to split votes."),(0,i.kt)("li",{parentName:"ul"},"In order for a member to switch pools they must wait for the normal 28 day unbonding process."),(0,i.kt)("li",{parentName:"ul"},"A member can partially unbond the staked funds in the pool (at most 16 partial unbonds).")),(0,i.kt)("h2",{id:"pool-administration"},"Pool Administration"),(0,i.kt)("h3",{id:"states"},"States"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open: The pool is open to be joined by anyone."),(0,i.kt)("li",{parentName:"ul"},"Blocked: The pool is blocked; no joiners are permitted."),(0,i.kt)("li",{parentName:"ul"},"Destroying: The pool is in the process of being destroyed. Once in this state the pool may never\nrevert to any other state; it can only proceed to being destroyed. All members can be\npermissionlessly unbonded; this allows the pool to be dismantled regardless of any individual\nmember\u2019s proactivity.")),(0,i.kt)("h3",{id:"roles"},"Roles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Depositor: Creates the pool and is the initial member. The depositor can only leave the pool once\nall other members have left. Once they leave by withdrawing, the pool is fully removed from the\nsystem."),(0,i.kt)("li",{parentName:"ul"},"Nominator: Can select the validators the pool nominates."),(0,i.kt)("li",{parentName:"ul"},"State-Toggler: Can change the pool\u2019s state and kick (permissionlessly unbond/withdraw) members if\nthe pool is blocked."),(0,i.kt)("li",{parentName:"ul"},"Root: Can change the nominator, state-toggler, or itself. Further, it can perform any of the\nactions the nominator or state-toggler can.")),(0,i.kt)("h2",{id:"pool-lifecycle"},"Pool Lifecycle"),(0,i.kt)("h3",{id:"creation"},"Creation"),(0,i.kt)("p",null,"The depositor calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," extrinsic, setting the administrative roles and transferring some\nfunds to the pool in order to add themselves as the first member. As stated above, the depositor\nmust always be a member as long as the pool exists; they will be the last member to leave, ensuring\nthey always have some skin in the game. Significant stake from the depositor is always a good\nindicator for the pool's credibility. The pool\u2019s \u2018nominator role\u2019 selects validators with the\nnominate extrinsic. On Polkadot JS Apps UI, navigate to Network > Staking > Pools and click on Add\nPool button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Nomination Pools",src:o(85209).Z,width:"1412",height:"638"})),(0,i.kt)("p",null,"The UI automatically assigns ID to the pool and allows for entering the name of the pools as well as\nthe deposit to be bonded."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Nomination Pools - deposit",src:o(58732).Z,width:"1164",height:"458"})),(0,i.kt)("p",null,"When creating a pool using Polkadot JS Apps UI, all the roles are mapped to the Depositor account by\ndefault. If any of these roles need to be assigned to a different account, create the pool using\n",(0,i.kt)("inlineCode",{parentName:"p"},"create")," extrinsic available on Developer > Extrinsics > nominationPools on Polkadot JS Apps UI."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nomination Pool Roles",src:o(12920).Z,width:"1426",height:"558"})),(0,i.kt)("h3",{id:"upkeep"},"Upkeep"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nominator")," can update the pool\u2019s validator selection. On Polkadot JS Apps UI, navigate to\nNetwork > Staking > Accounts page and click on Pooled button.If you have any pooled accounts with\nthe role of ",(0,i.kt)("inlineCode",{parentName:"p"},"nominator"),", you would notice the option to set nominees. Select the validators to\nnominate like you would normally using a nominator account."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nominate validators",src:o(22455).Z,width:"1810",height:"786"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"state-toggler")," can update the pool\u2019s state to blocked through ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," extrinsic and then\nkick members by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"unbond")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"withdrawUnbonded"),". (The state can also be toggled back to\nopen)."),(0,i.kt)("h3",{id:"destruction"},"Destruction"),(0,i.kt)("p",null,"A pool can be pushed into the \u201cdestroying\u201d state via one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The state-toggler sets the pool to \u201cdestroying\u201d."),(0,i.kt)("li",{parentName:"ul"},"Any account can set the pool to destroying if over 90% of the pool's active bonded balance has\nbeen slashed. Dismantling a destroying pool"),(0,i.kt)("li",{parentName:"ul"},"When a pool is in \u2018destroying\u2019 state, ",(0,i.kt)("inlineCode",{parentName:"li"},"unbond")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"withdrawUnbonded")," become permissionless, so\nanyone can help all the members exit."),(0,i.kt)("li",{parentName:"ul"},"Once the depositor withdraws, no members belong to the pool, and all the pool\u2019s resources are\nwiped from state.")),(0,i.kt)("h2",{id:"slashing"},"Slashing"),(0,i.kt)("p",null,"If a pool\u2019s underlying nomination account is slashed by the staking system, then the slash is\ndistributed evenly across the bonded pool and the unbonding pools from slash era+1 through the slash\napply era. Thus, any member who either a) was unbonding or b) was actively bonded in the\naforementioned range of eras will be affected by the slash. In other words, a member who may have\nbeen actively bonded during the offence is slashed pro rata based on its stake relative to the total\nslash amount."),(0,i.kt)("p",null,"Unbonding pools need to be slashed to ensure all nominators who were in the bonded pool while it was\nbacking a validator that committed an offence are punished. Without these measures a nominator could\nunbond right after a validator equivocated with no consequences."),(0,i.kt)("p",null,"This strategy is unfair to members who joined after the slash, because they get slashed as well, but\nspares members who unbond. The latter is much more important for security: if a pool's validators\nare attacking the network, their members need to unbond fast! Avoiding additional slashes gives them\nan incentive to do that if validators get repeatedly slashed."))}u.isMDXComponent=!0},85408:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/NPoS-Pools-b758caea750e9e772fe7fcdbd6babeca.png"},85209:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/Nomination-Pools-1-98ee6b5592f6851aa57c9d427d70598f.png"},58732:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/Nomination-Pools-2-84da587a4d7591f2e2f79a4054214984.png"},23650:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/Nomination-Pools-3-948b53dab8a885124509bcacdd229624.png"},8377:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/Nomination-Pools-4-570e3a132bd8bd48aac05917734c835b.png"},22455:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/Nomination-Pools-5-9b16b01bde4e095d3c8fa71aa9a9a6ca.png"},12920:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/Nomination-Pools-7-74928d7825f19208592498e7b12dee5c.png"},68124:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/nomination-pools-claim-edd971114e55cdae91c4eac737da140a.png"},95856:()=>{},46601:()=>{}}]);