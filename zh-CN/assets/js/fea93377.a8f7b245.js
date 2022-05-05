"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6730],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>v});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(t),v=i,u=m["".concat(s,".").concat(v)]||m[v]||h[v]||o;return t?n.createElement(u,r(r({ref:a},p),{},{components:t})):n.createElement(u,r({ref:a},p))}));function v(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26029:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],l={id:"maintain-guides-validator-payout",title:"Validator Payout Overview",sidebar_label:"Validator Payout Overview",description:"How validator payout works on the network and what you should expect.",keywords:["validator payout","payments","rewards","era points"],slug:"../maintain-guides-validator-payout"},s=void 0,d={unversionedId:"maintain/maintain-guides-validator-payout",id:"maintain/maintain-guides-validator-payout",title:"Validator Payout Overview",description:"How validator payout works on the network and what you should expect.",source:"@site/../docs/maintain/maintain-guides-validator-payout.md",sourceDirName:"maintain",slug:"/maintain-guides-validator-payout",permalink:"/zh-CN/docs/maintain-guides-validator-payout",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-validator-payout.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649858068,formattedLastUpdatedAt:"2022/4/13",frontMatter:{id:"maintain-guides-validator-payout",title:"Validator Payout Overview",sidebar_label:"Validator Payout Overview",description:"How validator payout works on the network and what you should expect.",keywords:["validator payout","payments","rewards","era points"],slug:"../maintain-guides-validator-payout"}},p={},h=[{value:"Era Points",id:"era-points",level:2},{value:"Payout Scheme",id:"payout-scheme",level:2},{value:"Running Multiple Validators",id:"running-multiple-validators",level:2},{value:"Slashing",id:"slashing",level:2},{value:"Nominators and Validator Payments",id:"nominators-and-validator-payments",level:2}],m={toc:h};function v(e){var a=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"era-points"},"Era Points"),(0,o.kt)("p",null,"For every era (a period of time approximately 6 hours in length in Kusama, and 24 hours in\nPolkadot), validators are paid proportionally to the amount of ",(0,o.kt)("em",{parentName:"p"},"era points")," they have collected.\nEra points are reward points earned for payable actions like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"issuing validity statements for ",(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/learn-parachains"},"parachain")," blocks."),(0,o.kt)("li",{parentName:"ul"},"producing a non-uncle block in the Relay Chain."),(0,o.kt)("li",{parentName:"ul"},"producing a reference to a previously unreferenced uncle block."),(0,o.kt)("li",{parentName:"ul"},"producing a referenced uncle block.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"An uncle block is a Relay Chain block that is valid in every regard, but which failed to\nbecome canonical. This can happen when two or more validators are block producers in a single slot,\nand the block produced by one validator reaches the next block producer before the others. We call\nthe lagging blocks uncle blocks."))),(0,o.kt)("p",null,"Payments occur at the end of every era."),(0,o.kt)("p",null,"Era points create a probabilistic component for staking rewards. "),(0,o.kt)("p",null,"If the ",(0,o.kt)("em",{parentName:"p"},"mean")," of staking rewards is the average rewards per era, then the ",(0,o.kt)("em",{parentName:"p"},"variance")," is the variability\nfrom the average staking rewards. "),(0,o.kt)("p",null,"With parachains now on Polkadot, a large percentage of era points will come from parachain validation,\nas a subset of validators are selected to para-validate for all parachains each epoch, and those\npara-validators can generate more era points as a result. Para-validators are rewarded 20 era points\neach for each parachain block that they validate."),(0,o.kt)("p",null,"In this case, analyzing the ",(0,o.kt)("em",{parentName:"p"},"expected value")," of staking rewards will paint a better picture\nas the weight of era points of validators and para-validators in the reward average are taken into consideration."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"High-level breakdown of reward variance ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This should only serve as a high-level overview of the probabilistic nature for staking\nrewards."),(0,o.kt)("p",{parentName:"div"},"Let: "),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pe")," = para-validator era points,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ne")," = non-para-validator era points,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EV")," = expected value of staking rewards,")),(0,o.kt)("p",{parentName:"div"},"Then, ",(0,o.kt)("inlineCode",{parentName:"p"},"EV(pe)")," has more influence on the ",(0,o.kt)("inlineCode",{parentName:"p"},"EV")," than ",(0,o.kt)("inlineCode",{parentName:"p"},"EV(ne)"),". "),(0,o.kt)("p",{parentName:"div"},"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"EV(pe)")," has a more weighted probability on the ",(0,o.kt)("inlineCode",{parentName:"p"},"EV"),", the increase in variance against the\n",(0,o.kt)("inlineCode",{parentName:"p"},"EV")," becomes apparent between the different validator pools (aka. validators in the active set and the ones chosen\nto para-validate)."),(0,o.kt)("p",{parentName:"div"},"Also, let: "),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"v")," = the variance of staking rewards,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"p")," = number of para-validators,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"w")," = number validators in the active set,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"e")," = era,")),(0,o.kt)("p",{parentName:"div"},"Then, ",(0,o.kt)("inlineCode",{parentName:"p"},"v")," ","\u2191"," if ",(0,o.kt)("inlineCode",{parentName:"p"},"w")," ","\u2191",", as this reduces ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"w"),", with respect to ",(0,o.kt)("inlineCode",{parentName:"p"},"e"),". "),(0,o.kt)("p",{parentName:"div"},"Increased ",(0,o.kt)("inlineCode",{parentName:"p"},"v")," is expected, and initially keeping ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," ","\u2193"," using the same para-validator set for all parachains\nensures ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-availability"},"availability")," and ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-governance"},"approval voting"),".\nIn addition, despite ",(0,o.kt)("inlineCode",{parentName:"p"},"v")," ","\u2191"," on an ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," basis, over time, the amount of rewards each validator\nreceives will equal out based on the continuous selection of para-validators."),(0,o.kt)("p",{parentName:"div"},"There are plans to scale the active para-validation set in the future"))),(0,o.kt)("h2",{id:"payout-scheme"},"Payout Scheme"),(0,o.kt)("p",null,"No matter how much total stake is behind a validator, all validators split the block authoring\npayout essentially equally. The payout of a specific validator, however, may differ based on\n",(0,o.kt)("a",{parentName:"p",href:"#era-points"},"era points"),", as described above. Although there is a probabilistic component to\nreceiving era points, and they may be impacted slightly depending on factors such as network\nconnectivity, well-behaving validators should generally average out to having similar era point\ntotals over a large number of eras."),(0,o.kt)("p",null,'Validators may also receive "tips" from senders as an incentive to include transactions in their\nproduced blocks. Validators will receive 100% of these tips directly.'),(0,o.kt)("p",null,"Validators will receive staking rewards in the form of the native token of that chain (KSM for\nKusama and DOT for Polkadot)."),(0,o.kt)("p",null,"For simplicity, the examples below will assume all validators have the same amount of era points,\nand received no tips."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Validator Set Size (v): 4\nValidator 1 Stake (v1): 18 tokens\nValidator 2 Stake (v2):  9 tokens\nValidator 3 Stake (v3):  8 tokens\nValidator 4 Stake (v4):  7 tokens\nPayout (p): 8 DOT\n\nPayout for each validator (v1 - v4):\np / v = 8 / 4 = 2 tokens\n")),(0,o.kt)("p",null,"Note that this is different than most other Proof-of-Stake systems such as Cosmos. As long as a\nvalidator is in the validator set, it will receive the same block reward as every other validator.\nValidator ",(0,o.kt)("inlineCode",{parentName:"p"},"v1"),", who had 18 tokens staked, received the same reward (2 tokens) in this era as ",(0,o.kt)("inlineCode",{parentName:"p"},"v4"),"\nwho had only 7 tokens staked."),(0,o.kt)("h2",{id:"running-multiple-validators"},"Running Multiple Validators"),(0,o.kt)("p",null,"It is possible for a single entity to run multiple validators. Running multiple validators may\nprovide a better risk/reward ratio. Assuming you have enough DOT, or enough stake nominates your\nvalidator, to ensure that your validators remain in the validator set, running multiple validators\nwill result in a higher return than running a single validator."),(0,o.kt)("p",null,"For the following example, assume you have 18 DOT to stake. For simplicity's sake, we will ignore\nnominators. Running a single validator, as in the example above, would net you 2 DOT in this era."),(0,o.kt)("p",null,"Note that while DOT is used as an example, this same formula would apply to KSM when running a\nvalidator on Kusama."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Validator Set Size (v): 4\nValidator 1 Stake (v1): 18 DOT <- Your validator\nValidator 2 Stake (v2):  9 DOT\nValidator 3 Stake (v3):  8 DOT\nValidator 4 Stake (v4):  7 DOT\nPayout (p): 8 DOT\n\nYour payout = (p / v) * 1 = (8 / 4) * 1 = 2\n")),(0,o.kt)("p",null,"Running two validators, and splitting the stake equally, would result in the original validator ",(0,o.kt)("inlineCode",{parentName:"p"},"v4"),"\nto be kicked out of the validator set, as only the top ",(0,o.kt)("inlineCode",{parentName:"p"},"v")," validators (as measured by stake) are\nselected to be in the validator set. More important, it would also double the reward that you get\nfrom each era."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Validator Set Size (v): 4\nValidator 1 Stake (v1): 9 DOT <- Your first validator\nValidator 2 Stake (v2): 9 DOT <- Your second validator\nValidator 3 Stake (v3): 9 DOT\nValidator 4 Stake (v4): 8 DOT\nPayout (p): 8 DOT\n\nYour payout = (p / v) * 2 = (8 / 4) * 2 = 4\n")),(0,o.kt)("p",null,"With enough stake, you could run more than two validators. However, each validator must have enough\nstake behind it to be in the validator set."),(0,o.kt)("p",null,"The incentives of the system favor equally-staked validators. This works out to be a dynamic, rather\nthan static, equilibrium. Potential validators will run different numbers of validators and apply\ndifferent amounts of stake to them as time goes on, and in response to the actions of other\nvalidators on the network."),(0,o.kt)("h2",{id:"slashing"},"Slashing"),(0,o.kt)("p",null,"Although rewards are paid equally, slashes are relative to a validator's stake. Therefore, if you do\nhave enough DOT to run multiple validators, it is in your best interest to do so. A slash of 30%\nwill, of course, be more DOT for a validator with 18 DOT staked than one with 9 DOT staked."),(0,o.kt)("p",null,"Running multiple validators does not absolve you of the consequences of misbehavior. Polkadot\npunishes attacks that appear coordinated more severely than individual attacks. You should not, for\nexample, run multiple validators hosted on the same infrastructure. A proper multi-validator\nconfiguration would ensure that they do not fail simultaneously."),(0,o.kt)("p",null,"Nominators have the incentive to nominate the lowest-staked validator, as this will result in the\nlowest risk and highest reward. This is due to the fact that while their vulnerability to slashing\nremains the same (since it is percentage-based), their rewards are higher since they will be a\nhigher proportion of the total stake allocated to that validator."),(0,o.kt)("p",null,"To clarify this, let us imagine two validators, ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"v2"),". Assume both are in the active set,\nhave commission set to 0%, and are well-behaved. The only difference is that ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," has 90 DOT\nnominating it and ",(0,o.kt)("inlineCode",{parentName:"p"},"v2")," only has 10. If you nominate ",(0,o.kt)("inlineCode",{parentName:"p"},"v1"),", it now has ",(0,o.kt)("inlineCode",{parentName:"p"},"90 + 10 = 100")," DOT, and you\nwill get 10% of the staking rewards for the next era. If you nominate ",(0,o.kt)("inlineCode",{parentName:"p"},"v2"),", it now has\n",(0,o.kt)("inlineCode",{parentName:"p"},"10 + 10 = 20")," DOT nominating it, and you will get 50% of the staking rewards for the next era. In\nactuality, it would be quite rare to see such a large difference between the stake of validators,\nbut the same principle holds even for smaller differences. If there is a 10% slash of either\nvalidator, then you will lose 1 DOT in each case."),(0,o.kt)("h2",{id:"nominators-and-validator-payments"},"Nominators and Validator Payments"),(0,o.kt)("p",null,'Nominated stake allows you to "vote" for validators and share in the rewards (and slashing) without\nrunning a validator node yourself. Validators can choose to keep a percentage of the rewards due to\ntheir validator to "reimburse" themselves for the cost of running a validator node. Other than that,\nall rewards are shared based on the stake behind each validator. This includes the stake of the\nvalidator itself, plus any stake bonded by nominators.'),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Validators set their preference as a percentage of the block reward, ",(0,o.kt)("em",{parentName:"p"},"not")," an absolute\nnumber of DOT. Polkadot's block reward is based on the ",(0,o.kt)("em",{parentName:"p"},"total")," amount at stake, with the reward\npeaking when the amount staked is at 50% of the total supply. The commission is set as the amount\ntaken by the validator; that is, 0% commission means that the validator does not receive any\nproportion of the rewards besides that owed to it from self-stake, and 100% commission means that\nthe validator operator gets all rewards and gives none to its nominators."))),(0,o.kt)("p",null,"In the following examples, we can see the results of several different validator payment schemes and\nsplit between nominator and validator stake. We will assume a single nominator for each validator.\nHowever, there can be numerous nominators for each validator. Rewards are still distributed\nproportionally - for example, if the total rewards to be given to nominators is 2 DOT, and there are\nfour nominators with equal stake bonded, each will receive 0.5 DOT. Note also that a single\nnominator may stake different validators."),(0,o.kt)("p",null,"Each validator in the example has selected a different validator payment (that is, a percentage of\nthe reward set aside directly for the validator before sharing with all bonded stake). The\nvalidator's payment percentage (in DOT, although the same calculations work for KSM) is listed in\nbrackets (",(0,o.kt)("inlineCode",{parentName:"p"},"[]"),") next to each validator. Note that since the validator payment is public knowledge,\nhaving a low or non-existent validator payment may attract more stake from nominators, since they\nknow they will receive a larger reward."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Validator Set Size (v): 4\nValidator 1 Stake (v1) [20% commission]: 18 DOT (9 validator, 9 nominator)\nValidator 2 Stake (v2) [40% commission]:  9 DOT (3 validator, 6 nominator)\nValidator 3 Stake (v3) [10% commission]:  8 DOT (4 validator, 4 nominator)\nValidator 4 Stake (v4) [ 0% commission]:  6 DOT (1 validator, 5 nominator)\nPayout (p): 8 DOT\n\nPayout for each validator (v1 - v4):\np / v = 8 / 4 = 2 DOT\n\nv1:\n(0.2 * 2) = 0.4 DOT -> validator payment\n(2 - 0.4) = 1.6 -> shared between all stake\n(9 / 18) * 1.6 = 0.8 -> validator stake share\n(9 / 18) * 1.6 = 0.8 -> nominator stake share\nv1 validator total reward: 0.4 + 0.8 = 1.2 DOT\nv1 nominator reward: 0.8 DOT\n\nv2:\n(0.4 * 2) = 0.8 DOT -> validator payment\n(2 - 0.8) = 1.2 -> shared between all stake\n(3 / 9) * 1.2 = 0.4 -> validator stake share\n(6 / 9) * 1.2 = 0.8 -> nominator stake share\nv2 validator total reward: 0.8 + 0.4 = 1.2 DOT\nv2 nominator reward: 0.8 DOT\n\nv3:\n(0.1 * 2) = 0.2 DOT -> validator payment\n(2 - 0.2) = 1.8 -> shared between all stake\n(4 / 8) * 1.8 = 0.9 -> validator stake share\n(4 / 8) * 1.8 = 0.9 -> nominator stake share\nv3 validator total reward: 0.2 + 0.9 DOT = 1.1 DOT\nv3 nominator reward: 0.9 DOT\n\nv4:\n(0 * 2) = 0 DOT -> validator payment\n(2 - 0) = 2.0 -> shared between all stake\n(1 / 6) * 2 = 0.33 -> validator stake share\n(5 / 6) * 2 = 1.67 -> nominator stake share\nv4 validator total reward: 0 + 0.33 DOT = 0.33 DOT\nv4 nominator reward: 1.67 DOT\n")))}v.isMDXComponent=!0}}]);