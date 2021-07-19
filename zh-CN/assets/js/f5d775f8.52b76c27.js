(self.webpackChunk=self.webpackChunk||[]).push([[4784],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>u,kt:()=>v});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),v=o,m=p["".concat(s,".").concat(v)]||p[v]||h[v]||r;return t?n.createElement(m,i(i({ref:a},u),{},{components:t})):n.createElement(m,i({ref:a},u))}));function v(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85592:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>p});var n=t(22122),o=t(19756),r=(t(67294),t(3905)),i=["components"],l={id:"maintain-guides-validator-payout",title:"Validator Payout Overview",sidebar_label:"Validator Payout Overview"},s=void 0,d={unversionedId:"maintain-guides-validator-payout",id:"maintain-guides-validator-payout",isDocsHomePage:!1,title:"Validator Payout Overview",description:"Era Points",source:"@site/../docs/maintain-guides-validator-payout.md",sourceDirName:".",slug:"/maintain-guides-validator-payout",permalink:"/zh-CN/docs/maintain-guides-validator-payout",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-guides-validator-payout.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1626714166,formattedLastUpdatedAt:"2021/7/19",frontMatter:{id:"maintain-guides-validator-payout",title:"Validator Payout Overview",sidebar_label:"Validator Payout Overview"}},u=[{value:"Era Points",id:"era-points",children:[]},{value:"Payout Scheme",id:"payout-scheme",children:[]},{value:"Running Multiple Validators",id:"running-multiple-validators",children:[]},{value:"Slashing",id:"slashing",children:[]},{value:"Nominators and Validator Payments",id:"nominators-and-validator-payments",children:[]}],h={toc:u};function p(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"era-points"},"Era Points"),(0,r.kt)("p",null,"For every era (a period of time approximately 6 hours in length in Kusama, and 24 hours in\nPolkadot), validators are paid proportionally to the amount of ",(0,r.kt)("em",{parentName:"p"},"era points")," they have collected. Era\npoints are reward points earned for payable actions like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"issuing validity statements for ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/learn-parachains"},"parachain")," blocks."),(0,r.kt)("li",{parentName:"ul"},"producing a non-uncle block in the Relay Chain."),(0,r.kt)("li",{parentName:"ul"},"producing a reference to a previously unreferenced uncle block."),(0,r.kt)("li",{parentName:"ul"},"producing a referenced uncle block.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: An uncle block is a Relay Chain block that is valid in every regard, but which failed to\nbecome canonical. This can happen when two or more validators are block producers in a single slot,\nand the block produced by one validator reaches the next block producer before the others. We call\nthe lagging blocks uncle blocks.")),(0,r.kt)("p",null,"Payments occur at the end of every era."),(0,r.kt)("h2",{id:"payout-scheme"},"Payout Scheme"),(0,r.kt)("p",null,"No matter how much total stake is behind a validator, all validators split the block authoring\npayout essentially equally. The payout of a specific validator, however, may differ based on\n",(0,r.kt)("a",{parentName:"p",href:"#era-points"},"era points"),", as described above. Although there is a probabilistic component to\nreceiving era points, and they may be impacted slightly depending on factors such as network\nconnectivity, well-behaving validators should generally average out to having similar era point\ntotals over a large number of eras."),(0,r.kt)("p",null,'Validators may also receive "tips" from senders as an incentive to include transactions in their\nproduced blocks. Validators will receive 100% of these tips directly.'),(0,r.kt)("p",null,"Validators will receive staking rewards in the form of the native token of that chain (KSM for\nKusama and DOT for Polkadot)."),(0,r.kt)("p",null,"For simplicity, the examples below will assume all validators have the same amount of era points,\nand received no tips."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Validator Set Size (v): 4\nValidator 1 Stake (v1): 18 tokens\nValidator 2 Stake (v2):  9 tokens\nValidator 3 Stake (v3):  8 tokens\nValidator 4 Stake (v4):  7 tokens\nPayout (p): 8 DOT\n\nPayout for each validator (v1 - v4):\np / v = 8 / 4 = 2 tokens\n")),(0,r.kt)("p",null,"Note that this is different than most other Proof-of-Stake systems such as Cosmos. As long as a\nvalidator is in the validator set, it will receive the same block reward as every other validator.\nValidator ",(0,r.kt)("inlineCode",{parentName:"p"},"v1"),", who had 18 tokens staked, received the same reward (2 tokens) in this era as ",(0,r.kt)("inlineCode",{parentName:"p"},"v4"),"\nwho had only 7 tokens staked."),(0,r.kt)("h2",{id:"running-multiple-validators"},"Running Multiple Validators"),(0,r.kt)("p",null,"It is possible for a single entity to run multiple validators. Running multiple validators may\nprovide a better risk/reward ratio. Assuming you have enough DOT, or enough stake nominates your\nvalidator, to ensure that your validators remain in the validator set, running multiple validators\nwill result in a higher return than running a single validator."),(0,r.kt)("p",null,"For the following example, assume you have 18 DOT to stake. For simplicity's sake, we will ignore\nnominators. Running a single validator, as in the example above, would net you 2 DOT in this era."),(0,r.kt)("p",null,"Note that while DOT is used as an example, this same formula would apply to KSM when running a\nvalidator on Kusama."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Validator Set Size (v): 4\nValidator 1 Stake (v1): 18 DOT <- Your validator\nValidator 2 Stake (v2):  9 DOT\nValidator 3 Stake (v3):  8 DOT\nValidator 4 Stake (v4):  7 DOT\nPayout (p): 8 DOT\n\nYour payout = (p / v) * 1 = (8 / 4) * 1 = 2\n")),(0,r.kt)("p",null,"Running two validators, and splitting the stake equally, would result in the original validator ",(0,r.kt)("inlineCode",{parentName:"p"},"v4"),"\nto be kicked out of the validator set, as only the top ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," validators (as measured by stake) are\nselected to be in the validator set. More important, it would also double the reward that you get\nfrom each era."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Validator Set Size (v): 4\nValidator 1 Stake (v1): 9 DOT <- Your first validator\nValidator 2 Stake (v2): 9 DOT <- Your second validator\nValidator 3 Stake (v3): 9 DOT\nValidator 4 Stake (v4): 8 DOT\nPayout (p): 8 DOT\n\nYour payout = (p / v) * 2 = (8 / 4) * 2 = 4\n")),(0,r.kt)("p",null,"With enough stake, you could run more than two validators. However, each validator must have enough\nstake behind it to be in the validator set."),(0,r.kt)("p",null,"The incentives of the system favor equally-staked validators. This works out to be a dynamic, rather\nthan static, equilibrium. Potential validators will run different numbers of validators and apply\ndifferent amounts of stake to them as time goes on, and in response to the actions of other\nvalidators on the network."),(0,r.kt)("h2",{id:"slashing"},"Slashing"),(0,r.kt)("p",null,"Although rewards are paid equally, slashes are relative to a validator's stake. Therefore, if you do\nhave enough DOT to run multiple validators, it is in your best interest to do so. A slash of 30%\nwill, of course, be more DOT for a validator with 18 DOT staked than one with 9 DOT staked."),(0,r.kt)("p",null,"Running multiple validators does not absolve you of the consequences of misbehavior. Polkadot\npunishes attacks that appear coordinated more severely than individual attacks. You should not, for\nexample, run multiple validators hosted on the same infrastructure. A proper multi-validator\nconfiguration would ensure that they do not fail simultaneously."),(0,r.kt)("p",null,"Nominators have the incentive to nominate the lowest-staked validator, as this will result in the\nlowest risk and highest reward. This is due to the fact that while their vulnerability to slashing\nremains the same (since it is percentage-based), their rewards are higher since they will be a\nhigher proportion of the total stake allocated to that validator."),(0,r.kt)("p",null,"To clarify this, let us imagine two validators, ",(0,r.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"v2"),". Assume both are in the active set,\nhave commission set to 0%, and are well-behaved. The only difference is that ",(0,r.kt)("inlineCode",{parentName:"p"},"v1")," has 90 DOT\nnominating it and ",(0,r.kt)("inlineCode",{parentName:"p"},"v2")," only has 10. If you nominate ",(0,r.kt)("inlineCode",{parentName:"p"},"v1"),", it now has ",(0,r.kt)("inlineCode",{parentName:"p"},"90 + 10 = 100")," DOT, and you\nwill get 10% of the staking rewards for the next era. If you nominate ",(0,r.kt)("inlineCode",{parentName:"p"},"v2"),", it now has\n",(0,r.kt)("inlineCode",{parentName:"p"},"10 + 10 = 20")," DOT nominating it, and you will get 50% of the staking rewards for the next era. In\nactuality, it would be quite rare to see such a large difference between the stake of validators,\nbut the same principle holds even for smaller differences. If there is a 10% slash of either\nvalidator, then you will lose 1 DOT in each case."),(0,r.kt)("h2",{id:"nominators-and-validator-payments"},"Nominators and Validator Payments"),(0,r.kt)("p",null,'Nominated stake allows you to "vote" for validators and share in the rewards (and slashing) without\nrunning a validator node yourself. Validators can choose to keep a percentage of the rewards due to\ntheir validator to "reimburse" themselves for the cost of running a validator node. Other than that,\nall rewards are shared based on the stake behind each validator. This includes the stake of the\nvalidator itself, plus any stake bonded by nominators.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Validators set their preference as a percentage of the block reward, ",(0,r.kt)("em",{parentName:"p"},"not")," an absolute\nnumber of DOT. Polkadot's block reward is based on the ",(0,r.kt)("em",{parentName:"p"},"total")," amount at stake, with the reward\npeaking when the amount staked is at 50% of the total supply. The commission is set as the amount\ntaken by the validator; that is, 0% commission means that the validator does not receive any\nproportion of the rewards besides that owed to it from self-stake, and 100% commission means that\nthe validator operator gets all rewards and gives none to its nominators.")),(0,r.kt)("p",null,"In the following examples, we can see the results of several different validator payment schemes and\nsplit between nominator and validator stake. We will assume a single nominator for each validator.\nHowever, there can be numerous nominators for each validator. Rewards are still distributed\nproportionally - for example, if the total rewards to be given to nominators is 2 DOT, and there are\nfour nominators with equal stake bonded, each will receive 0.5 DOT. Note also that a single\nnominator may stake different validators."),(0,r.kt)("p",null,"Each validator in the example has selected a different validator payment (that is, a percentage of\nthe reward set aside directly for the validator before sharing with all bonded stake). The\nvalidator's payment percentage (in DOT, although the same calculations work for KSM) is listed in\nbrackets (",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),") next to each validator. Note that since the validator payment is public knowledge,\nhaving a low or non-existent validator payment may attract more stake from nominators, since they\nknow they will receive a larger reward."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Validator Set Size (v): 4\nValidator 1 Stake (v1) [20% commission]: 18 DOT (9 validator, 9 nominator)\nValidator 2 Stake (v2) [40% commission]:  9 DOT (3 validator, 6 nominator)\nValidator 3 Stake (v3) [10% commission]:  8 DOT (4 validator, 4 nominator)\nValidator 4 Stake (v4) [ 0% commission]:  6 DOT (1 validator, 5 nominator)\nPayout (p): 8 DOT\n\nPayout for each validator (v1 - v4):\np / v = 8 / 4 = 2 DOT\n\nv1:\n(0.2 * 2) = 0.4 DOT -> validator payment\n(2 - 0.4) = 1.6 -> shared between all stake\n(9 / 18) * 1.6 = 0.8 -> validator stake share\n(9 / 18) * 1.6 = 0.8 -> nominator stake share\nv1 validator total reward: 0.4 + 0.8 = 1.2 DOT\nv1 nominator reward: 0.8 DOT\n\nv2:\n(0.4 * 2) = 0.8 DOT -> validator payment\n(2 - 0.8) = 1.2 -> shared between all stake\n(3 / 9) * 1.2 = 0.4 -> validator stake share\n(6 / 9) * 1.2 = 0.8 -> nominator stake share\nv2 validator total reward: 0.8 + 0.4 = 1.2 DOT\nv2 nominator reward: 0.8 DOT\n\nv3:\n(0.1 * 2) = 0.2 DOT -> validator payment\n(2 - 0.2) = 1.8 -> shared between all stake\n(4 / 8) * 1.8 = 0.9 -> validator stake share\n(4 / 8) * 1.8 = 0.9 -> nominator stake share\nv3 validator total reward: 0.2 + 0.9 DOT = 1.1 DOT\nv3 nominator reward: 0.9 DOT\n\nv4:\n(0 * 2) = 0 DOT -> validator payment\n(2 - 0) = 2.0 -> shared between all stake\n(1 / 6) * 2 = 0.33 -> validator stake share\n(5 / 6) * 2 = 1.67 -> nominator stake share\nv4 validator total reward: 0 + 0.33 DOT = 0.33 DOT\nv4 nominator reward: 1.67 DOT\n")))}p.isMDXComponent=!0}}]);