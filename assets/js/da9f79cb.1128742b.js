"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),d=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=d(n),c=a,u=h["".concat(r,".").concat(c)]||h[c]||p[c]||i;return n?o.createElement(u,l(l({ref:t},m),{},{components:n})):o.createElement(u,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={id:"learn-nomination-pools",title:"Nomination Pools",sidebar_label:"Nomination Pools",description:"Learn about Nomination Pools and their features",keyword:["nominate","nominator","stake","staking","pools"],slug:"../learn-nomination-pools"},r=void 0,d={unversionedId:"learn/learn-nomination-pools",id:"learn/learn-nomination-pools",title:"Nomination Pools",description:"Learn about Nomination Pools and their features",source:"@site/../docs/learn/learn-nomination-pools.md",sourceDirName:"learn",slug:"/learn-nomination-pools",permalink:"/docs/learn-nomination-pools",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-nomination-pools.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1652962544,formattedLastUpdatedAt:"5/19/2022",frontMatter:{id:"learn-nomination-pools",title:"Nomination Pools",sidebar_label:"Nomination Pools",description:"Learn about Nomination Pools and their features",keyword:["nominate","nominator","stake","staking","pools"],slug:"../learn-nomination-pools"}},m={},p=[{value:"Key Components of Nomination Pools",id:"key-components-of-nomination-pools",level:2},{value:"Pool Member Lifecycle",id:"pool-member-lifecycle",level:2},{value:"Join a pool",id:"join-a-pool",level:3},{value:"Claim rewards",id:"claim-rewards",level:3},{value:"Unbond funds",id:"unbond-funds",level:3},{value:"Withdraw unbonded funds",id:"withdraw-unbonded-funds",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Pool Administration",id:"pool-administration",level:2},{value:"States",id:"states",level:3},{value:"Roles:",id:"roles",level:3},{value:"Pool Lifecycle",id:"pool-lifecycle",level:2},{value:"Creation",id:"creation",level:3},{value:"Upkeep",id:"upkeep",level:3},{value:"Destruction",id:"destruction",level:3},{value:"Slashing",id:"slashing",level:2}],h={toc:p};function c(e){var t=e.components,s=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Nomination Pools are live on ",(0,i.kt)("a",{parentName:"h5",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwestend-rpc.polkadot.io#/staking/pools"},"Westend"),".")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Get some ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-DOT#getting-westies"},"Westies (WND)")," and start experimenting with Nomination pools!\nSoon they will be deployed on Kusama and then on Polkadot."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Have questions on Nomination Pools?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have questions about nomination pools, please join our ",(0,i.kt)("a",{parentName:"p",href:"https://matrix.to/#/#nompools-support:matrix.parity.io"},"nomination pools support channel"),"\non matrix element chat."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nomination Pools",src:n(85408).Z,width:"1720",height:"963"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/10694"},"Nomination pools")," are one of the key\n(experimental) features from the roadmap of\n",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/kianenigma/aa835946455b9a3f167821b9d05ba376"},"Staking improvements")," on\nPolkadot. They are designed to permissionlessly allow members to pool their funds\ntogether and act as a single nominator account. Due to the current runtime constraints, Polkadot can\nonly handle 12500 nominators comfortably in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nominator#staking-election-stages"},"electing set"),". As one of the objectives of the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"NPoS algorithm")," is to maximize the overall stake on the network, it can be\ninferred that the staking system on Polkadot favors nominators with a larger stake. Only the\nnominator accounts which back the Validators in the active set are eligible for receiving staking\nrewards. This leaves out nomination intents from the accounts with lower DOT balance than the\nmin-active nomination and places them in a waiting queue to enter electing set. Nomination pools\nwill be handy to the members who would like to participate in the staking system with a\nstake much lower than the dynamic min-active nomination threshold on the network. All operations are\nconstant space and time complexity relative to the number of members, eliminating any theoretical\nupper bound on the quantity of members the system can handle and thus scaling the number of\naccounts that can participate and earn rewards in the staking system on Polkadot. In summary, each\nnomination pool is viewed as a single nominator from the NPoS system point of view."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Why aren't the members in the nomination pools called delegators?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The term ",(0,i.kt)("inlineCode",{parentName:"p"},"delegator")," is associated too much with Delegated Proof of Staking (DPoS) and since Polkadot\nimplements Nominated Proof of Staking (NPoS), naming them as delegators would be misleading.\n",(0,i.kt)("inlineCode",{parentName:"p"},"member")," is our generic replacement for ",(0,i.kt)("inlineCode",{parentName:"p"},"delegator"),". In action, members are actually quite similar to\ndelegators and do delegate their nomination power to the pool."))),(0,i.kt)("p",null,"The earnings of the pool are split pro rata to a member's stake in the bonded pool (and thus the\nstaking rewards for members will be the same as if they were a nominator). Importantly, slashes\nare also applied proportionally to members who may have been actively bonded when a validator\ncommitted a slashable offence."),(0,i.kt)("h2",{id:"key-components-of-nomination-pools"},"Key Components of Nomination Pools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bonded Pool: Tracks the distribution of actively staked funds."),(0,i.kt)("li",{parentName:"ul"},"Reward Pool: Tracks rewards earned by actively staked funds."),(0,i.kt)("li",{parentName:"ul"},"Unbonding Sub Pools: Collection of pools at different phases (i.e. eras) of the unbonding\nlifecycle."),(0,i.kt)("li",{parentName:"ul"},"Members: Accounts that nominate to the pools."),(0,i.kt)("li",{parentName:"ul"},"Point: A unit of measure for a member\u2019s portion of a pool's funds. All pools start with a point to Planck\nratio of 1. Over time, if the pool receives rewards, they increase in value, and if the pool is slashed, it\ndecreases in value.")),(0,i.kt)("h2",{id:"pool-member-lifecycle"},"Pool Member Lifecycle"),(0,i.kt)("h3",{id:"join-a-pool"},"Join a pool"),(0,i.kt)("p",null,"A member delegates funds to a pool by transferring some amount to the pool\u2019s bonded account with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"join")," extrinsic. The pool then increases its bond with the new funds. A member is afforded the\nability to bond additional funds, or re-stake rewards as long as they are already actively bonded. Note that\na member may only belong to one pool at a time."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The funds nominated to a pool will not be visible in the member's account balance on Polkadot JS Apps UI. This is because the member funds are transferred from their account to the pool's account. This pool account is not accessible by anyone (including the pool root or depositor) and only the pool's internal logic can access the account. "))),(0,i.kt)("p",null,"Navigate to Network > Staking > Pools page on Polkadot JS Apps UI and choose the pool to join. Click on the\nJoin button and then sign and submit the transaction specifying the amount you would like to nominate."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Join Pool",src:n(23650).Z,width:"1996",height:"670"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Join Pool",src:n(8377).Z,width:"1662",height:"450"})),(0,i.kt)("h3",{id:"claim-rewards"},"Claim rewards"),(0,i.kt)("p",null,"The member can claim their portion of any rewards that have accumulated since the previous time\nthey claimed (or in the case that they have never claimed, any rewards that have accumulated since\nthe era after they joined). Rewards are split pro rata among the actively bonded members."),(0,i.kt)("p",null,"On Polkadot JS Apps UI, navigate to Network > Staking > Accounts > Pooled, where you can view your\npooled member account details. To claim rewards, click on the three vertical dots and click on\nWithdraw claimable. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Claim rewards",src:n(68124).Z,width:"1712",height:"652"})),(0,i.kt)("h3",{id:"unbond-funds"},"Unbond funds"),(0,i.kt)("p",null,"At any point in time after joining the pool, a member can start the process of exiting by\nunbonding. ",(0,i.kt)("inlineCode",{parentName:"p"},"unbond")," will unbond part or all of the member's funds. "),(0,i.kt)("p",null,"On Polkadot JS Apps UI, navigate to Network > Staking > Accounts > Pooled and click on the three vertical\ndots and click on Unbond funds. "),(0,i.kt)("h3",{id:"withdraw-unbonded-funds"},"Withdraw unbonded funds"),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"unbond")," has been called and the unbonding duration has passed (e.g. 28 days on Polkadot),\na member may withdraw their funds with ",(0,i.kt)("inlineCode",{parentName:"p"},"withdrawUnbonded"),". Withdrawing effectively ends a\nmember's relationship with their pool, allowing them to join a different pool if desired."),(0,i.kt)("p",null,"On Polkadot JS Apps UI, navigate to Network > Staking > Accounts > Pooled and click on the three vertical\ndots and click on Withdraw unbonded."),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A member cannot vote (e.g. in Referenda or for Council members) with their nominated funds. This may be changed in the future once\naccounts are afforded the ability to split votes."),(0,i.kt)("li",{parentName:"ul"},"In order for a member to switch pools they must wait for the normal 28 day unbonding process."),(0,i.kt)("li",{parentName:"ul"},"A member can partially unbond the staked funds in the pool (at most 16 partial unbonds).")),(0,i.kt)("h2",{id:"pool-administration"},"Pool Administration"),(0,i.kt)("h3",{id:"states"},"States"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open: The pool is open to be joined by anyone."),(0,i.kt)("li",{parentName:"ul"},"Blocked: The pool is blocked; no joiners are permitted."),(0,i.kt)("li",{parentName:"ul"},"Destroying: The pool is in the process of being destroyed. Once in this state the pool may never\nrevert to any other state; it can only proceed to being destroyed. All members can be\npermissionlessly unbonded; this allows the pool to be dismantled regardless of any individual\nmember\u2019s proactivity.")),(0,i.kt)("h3",{id:"roles"},"Roles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Depositor: Creates the pool and is the initial member. The depositor can only leave the pool\nonce all other members have left. Once they leave by withdrawing, the pool is fully removed\nfrom the system."),(0,i.kt)("li",{parentName:"ul"},"Nominator: Can select the validators the pool nominates."),(0,i.kt)("li",{parentName:"ul"},"State-Toggler: Can change the pool\u2019s state and kick (permissionlessly unbond/withdraw) members\nif the pool is blocked."),(0,i.kt)("li",{parentName:"ul"},"Root: Can change the nominator, state-toggler, or itself. Further, it can perform any of the\nactions the nominator or state-toggler can.")),(0,i.kt)("h2",{id:"pool-lifecycle"},"Pool Lifecycle"),(0,i.kt)("h3",{id:"creation"},"Creation"),(0,i.kt)("p",null,"The depositor calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," extrinsic, setting the administrative roles and transferring some\nfunds to the pool in order to add themselves as the first member. As stated above, the depositor\nmust always be a member as long as the pool exists; they will be the last member to leave,\nensuring they always have some skin in the game. Significant stake from the depositor is always a\ngood indicator for the pool's credibility. The pool\u2019s \u2018nominator role\u2019 selects validators with the\nnominate extrinsic. On Polkadot JS Apps UI, navigate to Network > Staking > Pools and click on Add\nPool button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Nomination Pools",src:n(85209).Z,width:"1412",height:"638"})),(0,i.kt)("p",null,"The UI automatically assigns ID to the pool and allows for entering the name of the pools as well as\nthe deposit to be bonded."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Nomination Pools - deposit",src:n(58732).Z,width:"1164",height:"458"})),(0,i.kt)("p",null,"When creating a pool using Polkadot JS Apps UI, all the roles are mapped to the Depositor account\nby default. If any of these roles need to be assigned to a different account, create the pool using\n",(0,i.kt)("inlineCode",{parentName:"p"},"create")," extrinsic available on Developer > Extrinsics > nominationPools on Polkadot JS Apps UI."),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"Nomination Pool Roles",src:n(12920).Z,width:"1426",height:"558"})),(0,i.kt)("h3",{id:"upkeep"},"Upkeep"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nominator")," can update the pool\u2019s validator selection. On Polkadot JS Apps UI, navigate to Network >\nStaking > Accounts page and click on Pooled button.If you have any pooled accounts with the role of\n",(0,i.kt)("inlineCode",{parentName:"p"},"nominator"),", you would notice the option to set nominees. Select the validators to nominate like you would\nnormally using a nominator account."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nominate validators",src:n(22455).Z,width:"1810",height:"786"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"state-toggler")," can update the pool\u2019s state to blocked through ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," extrinsic and then kick members\nby calling ",(0,i.kt)("inlineCode",{parentName:"p"},"unbond")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"withdrawUnbonded"),".  (The state can also be toggled back to open)."),(0,i.kt)("h3",{id:"destruction"},"Destruction"),(0,i.kt)("p",null,"A pool can be pushed into the \u201cdestroying\u201d state via one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The state-toggler sets the pool to \u201cdestroying\u201d."),(0,i.kt)("li",{parentName:"ul"},"Any account can set the pool to destroying if over 90% of the pool's active bonded balance has\nbeen slashed. Dismantling a destroying pool"),(0,i.kt)("li",{parentName:"ul"},"When a pool is in \u2018destroying\u2019 state, ",(0,i.kt)("inlineCode",{parentName:"li"},"unbond")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"withdrawUnbonded")," become\npermissionless, so anyone can help all the members exit."),(0,i.kt)("li",{parentName:"ul"},"Once the depositor withdraws, no members belong to the pool, and all the pool\u2019s resources are\nwiped from state.")),(0,i.kt)("h2",{id:"slashing"},"Slashing"),(0,i.kt)("p",null,"If a pool\u2019s underlying nomination account is slashed by the staking system, then the slash is\ndistributed evenly across the bonded pool and the unbonding pools from slash era+1 through the slash\napply era. Thus, any member who either a) was unbonding or b) was actively bonded in the\naforementioned range of eras will be affected by the slash. In other words, a member who may have\nbeen actively bonded during the offence is slashed pro rata based on its stake relative to the total\nslash amount."),(0,i.kt)("p",null,"Unbonding pools need to be slashed to ensure all nominators who were in the bonded pool while it was\nbacking a validator that committed an offence are punished. Without these measures a nominator could\nunbond right after a validator equivocated with no consequences."),(0,i.kt)("p",null,"This strategy is unfair to members who joined after the slash, because they get slashed as well,\nbut spares members who unbond. The latter is much more important for security: if a pool's\nvalidators are attacking the network, their members need to unbond fast! Avoiding additional\nslashes gives them an incentive to do that if validators get repeatedly slashed."))}c.isMDXComponent=!0},85408:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/NPoS-Pools-b758caea750e9e772fe7fcdbd6babeca.png"},85209:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Nomination-Pools-1-98ee6b5592f6851aa57c9d427d70598f.png"},58732:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Nomination-Pools-2-84da587a4d7591f2e2f79a4054214984.png"},23650:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Nomination-Pools-3-948b53dab8a885124509bcacdd229624.png"},8377:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Nomination-Pools-4-570e3a132bd8bd48aac05917734c835b.png"},22455:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Nomination-Pools-5-9b16b01bde4e095d3c8fa71aa9a9a6ca.png"},12920:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Nomination-Pools-7-74928d7825f19208592498e7b12dee5c.png"},68124:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/nomination-pools-claim-edd971114e55cdae91c4eac737da140a.png"}}]);