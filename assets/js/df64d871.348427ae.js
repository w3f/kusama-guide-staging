(self.webpackChunk=self.webpackChunk||[]).push([[3781],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>h,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,p=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(p,r(r({ref:t},h),{},{components:a})):n.createElement(p,r({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16231:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>h,default:()=>c});var n=a(22122),o=a(19756),i=(a(67294),a(3905)),r=["components"],s={id:"learn-nominator",title:"Nominator",sidebar_label:"Nominator"},l=void 0,d={unversionedId:"learn-nominator",id:"learn-nominator",isDocsHomePage:!1,title:"Nominator",description:"Nominators secure the Relay Chain by selecting good validators and staking DOT.",source:"@site/../docs/learn-nominator.md",sourceDirName:".",slug:"/learn-nominator",permalink:"/docs/learn-nominator",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-nominator.md",version:"current",lastUpdatedBy:"Gabriel Crispino",lastUpdatedAt:1628153088,formattedLastUpdatedAt:"8/5/2021",frontMatter:{id:"learn-nominator",title:"Nominator",sidebar_label:"Nominator"}},h=[{value:"Active vs. Inactive Nomination",id:"active-vs-inactive-nomination",children:[]},{value:"Required Minimum Stake",id:"required-minimum-stake",children:[]},{value:"Oversubscribed Validators",id:"oversubscribed-validators",children:[]},{value:"The Election Solution Set",id:"the-election-solution-set",children:[]},{value:"Receiving Rewards",id:"receiving-rewards",children:[]},{value:"What to Take Into Consideration When Nominating",id:"what-to-take-into-consideration-when-nominating",children:[]},{value:"Filter Out Validators With Undesirable Traits",id:"filter-out-validators-with-undesirable-traits",children:[]},{value:"Review Your Validators&#39; History",id:"review-your-validators-history",children:[]},{value:"Be Aware of The Risks of Single Operators with Multiple Validators",id:"be-aware-of-the-risks-of-single-operators-with-multiple-validators",children:[]},{value:"Avoiding Oversubscribed Validators",id:"avoiding-oversubscribed-validators",children:[]},{value:"Guides",id:"guides",children:[]}],u={toc:h};function c(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nominators secure the Relay Chain by selecting good validators and staking DOT."),(0,i.kt)("p",null,"You may have an account with DOT and want to earn fresh DOT. You could do so as validator, which\nrequires a node running 24/7. If you do not have such node or do not want to bother, you can still\nearn DOT by nominating one or more validators."),(0,i.kt)("p",null,"By doing so, you become a nominator for the validator(s) of your choice. Pick your validators\ncarefully - if they do not behave properly, they will get slashed and you will lose DOT as well.\nHowever, if they do follow the rules of the network, then you can share in staking rewards that they\ngenerate."),(0,i.kt)("p",null,"While your DOT are staked by nominating a validator, they are 'locked' (bonded). You can receive new\nDOT in your account but you cannot stake as validator or transfer DOT away from your account. You\ncan ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-unbond"},"un-nominate at any time")," to stop staking your funds. Keep in\nmind that the un-nomination is effective in the next era, and that un-nominating does not\nautomatically unbond your funds. There is an unbonding period of 7 days on Kusama and 28 days on\nPolkadot before bonded funds can be transferred after issuing an unbond transaction."),(0,i.kt)("h3",{id:"active-vs-inactive-nomination"},"Active vs. Inactive Nomination"),(0,i.kt)("p",null,"When you go to the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"Account actions")," under staking\npage, you should see your bonded accounts and nomination status. If not, you can follow\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-nominate-polkadot"},"this")," guide to configure it first. Your nominations\nwill be effective in the next era; eras are roughly 6 hours on Kusama and 24 hours on Polkadot."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nominations",src:a(72831).Z})),(0,i.kt)("p",null,'Suppose you have nominated five validator candidates, and three out of five were elected to the\nactive validator set, then you should see two of your nominations as "waiting", and most likely one\nas "active" and the rest as "inactive". Active or inactive nomination means your nominated\nvalidators have been elected to be in the validator set, whereas waiting means they did not get\nelected. Generally, you will only have a single validator have an active nomination, which means\nthat you are directly supporting it with your stake this era and thus potentially receiving staking\nrewards. Inactive nominators were validators that were elected for this era but which you are not\nactively supporting. Every era, a new election will take place and you may be assigned a different\nactive nomination from among the validators you have selected.'),(0,i.kt)("p",null,"If you are committing a very large amount of stake, then you may have more than one active\nnomination. However, the election algorithm attempts to minimize this situation, and it should not\noccur often, so you should almost always see only a single active nomination per era. See the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen#optimizations"},"section on Phragm\xe9n optimization")," for more details."),(0,i.kt)("h3",{id:"required-minimum-stake"},"Required Minimum Stake"),(0,i.kt)("p",null,"Due to the way the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"Phragmen algorithm")," generates the solution set, and due to\nthe fact that the solution set must fit in a single block, in some eras, a minimum number of DOT\nwill be required to nominate with in order to receive staking rewards."),(0,i.kt)("p",null,"This parameter can be updated via on-chain governance and the most recent and up to date version can\nbe found on ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"chain state")," (select ",(0,i.kt)("strong",{parentName:"p"},"state query >\nstaking > minimumNominatorBond"),")"),(0,i.kt)("h3",{id:"oversubscribed-validators"},"Oversubscribed Validators"),(0,i.kt)("p",null,'Validators can only pay out to a certain number of nominators per era. This is currently set to\n256, but can be modified via governance. If more than\n256 nominators nominate the same validator, it is "oversubscribed", and\nonly the top 256 staked nominators (ranked by amount of stake) are paid\nrewards. Other nominators will receive no rewards for that era, although their stake will still be\nused to calculate entry into the active validator set.'),(0,i.kt)("p",null,"Although it is difficult to determine exactly how many nominators will nominate a given validator in\nthe next era, one can estimate based on the current number of nominators. A validator with only 5\nnominators in this era, for instance, is unlikely to have more than 256 in\nthe next era. An already-oversubscribed validator with 1000 nominators this era, however, is very\nlikely to be oversubscribed in the next era as well."),(0,i.kt)("h3",{id:"the-election-solution-set"},"The Election Solution Set"),(0,i.kt)("p",null,'Determining which validators are in the active set and which nominators are nominating them creates\na very large graph mapping nominators to their respective validators. This "solution set" is\ncomputed off-chain and submitted to the chain, which means it must fit in a single block. If there\nare a large number of nominators, this means that some nominators must be eliminated. Currently,\nnominators are sorted by amount of DOT staked and those with more DOT are prioritized. This means\nthat if you are staking with a small amount of DOT, you may not receive rewards. This minimal amount\nis dynamic based on the number of validators, number of nominators, amount nominated, and other\nfactors.'),(0,i.kt)("h3",{id:"receiving-rewards"},"Receiving Rewards"),(0,i.kt)("p",null,"As long as you have nominated more than one validator candidate, at least one of them got elected,\nand you are nominating with enough stake to get into the solution set, your bonded stake will be\nfully distributed to one or more validators. That being said, you may not receive rewards if you\nnominated very few validator candidates and no one got elected, or your stake is small and you only\nselected oversubscribed validators, or the validator you are nominating has 100% commission. It is\ngenerally wise to choose as many trustworthy validators as you can (up to 16) to reduce the risk of\nnone of your nominated validators being elected."),(0,i.kt)("p",null,"Rewards are ",(0,i.kt)("em",{parentName:"p"},"lazy")," - somebody must trigger a payout for a validator for rewards to go all of the\nvalidator's nominators. Any account can do this, although in practice validator operators often do\nthis as a service to their nominators. See the page on ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-simple-payouts"},"Simple Payouts")," for\nmore information and instructions for claiming rewards."),(0,i.kt)("h3",{id:"what-to-take-into-consideration-when-nominating"},"What to Take Into Consideration When Nominating"),(0,i.kt)("p",null,"One thing to keep in mind as a nominator is the validator's commission. The commission is the\npercentage of the validator reward which is taken by the validator before the rewards are split\namong the nominators. As a nominator, you may think that the lowest commission is best. However,\nthis is not always true. Validators must be able to run at break-even in order to sustainably\ncontinue operation. Independent validators that rely on the commission to cover their server costs\nhelp to keep the network decentralized. Commission is just one piece of the puzzle that you should\nconsider when picking validators to nominate."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking Returns",src:a(49448).Z})),(0,i.kt)("p",null,"As a nominator, if you only want to know the profit each validator made for each era, you can go to\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/targets"},"Targets")," section under the staking page by\ninputting the number of tokens you would like to stake to check it. Then, nominate those who have a\nhigher profit. However, that does not guarantee the right way to evaluate the validators' overall\nperformance."),(0,i.kt)("h3",{id:"filter-out-validators-with-undesirable-traits"},"Filter Out Validators With Undesirable Traits"),(0,i.kt)("p",null,'On the Targets page, you can filter out validators that have traits that may indicate an issue with\nyou nominating them. You can turn these filters off and on to help narrow down which validators you\nshould nominate. It is important to note that none of these traits are necessarily "bad"; however,\ndepending on your validator selection methodology, they may be characteristics that you would be\ninterested in filtering out.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Single from operator")," - Do not show groups of validators run by a single operator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"No 20%+ comm")," - Do not show any validators with a commission of 20% or higher."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"No at capacity")," - Do not show any validators who are currently operating\n",(0,i.kt)("a",{parentName:"li",href:"/docs/glossary#capacity"},"at capacity")," (i.e., could potentially be oversubscribed)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recent payouts")," - Only show validators that have recently caused a\n",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-simple-payouts"},"payout to be issued"),". Note that anyone can cause a payout to occur; it\ndoes not have to be the operator of a validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Only elected")," - Only show validators that are currently in the active set (i.e., they have been\nelected to produce blocks this era)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Only with an identity")," - Only show validators that have set an ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-identity"},"identity"),".\nNote that this identity does not have to be verified by a registrar for the validator to show up\nin the list.")),(0,i.kt)("h3",{id:"review-your-validators-history"},"Review Your Validators' History"),(0,i.kt)("p",null,"How the validator acted in the past may be a good indicator of how they will act in the future. An\nexample of problematic behavior would be if a validator is regularly offline, their nominators most\nlikely would get fewer rewards than others. More importantly, when many validators are\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking#unresponsiveness"},"unreachable"),", those nominators who staked with them will be\nslashed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Validator Stats",src:a(95322).Z})),(0,i.kt)("p",null,"Thus, to be a smart nominator, it would be better to query their\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/query/"},"histories")," to see statistics such as blocks\nproduced, rewards and slashes, and ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-identity"},"identity")," (if they have it set). Moreover, a\nnominator should do comprehensive research on their validator candidates - they should go over the\nvalidators' websites to see who they are, what kind of infrastructure setup they are using,\nreputation, the vision behind the validator, and more."),(0,i.kt)("h3",{id:"be-aware-of-the-risks-of-single-operators-with-multiple-validators"},"Be Aware of The Risks of Single Operators with Multiple Validators"),(0,i.kt)("p",null,'Recall that slashing is an additive function; the more validators that are offline or equivocate in\na given session, the harsher the penalties. Since validators that are controlled by a single entity\nare more at risk of a "synchronized" failure, nominating them implies a greater risk of having a\nlarge slash of your nominated funds. Generally, it is safer to nominate validators whose behavior is\nindependent from others in as many ways as possible (different hardware, geographic location, owner,\netc.).'),(0,i.kt)("h3",{id:"avoiding-oversubscribed-validators"},"Avoiding Oversubscribed Validators"),(0,i.kt)("p",null,"If you are not nominating with a large number of DOTs, you should try to avoid\n",(0,i.kt)("a",{parentName:"p",href:"/docs/glossary#oversubscribed"},"oversubscribed")," validators. It is not always easy to calculate if the\nvalidator selected will be oversubscribed in the next session; one way to avoid choosing potentially\noversubscribed validators is to filter out any that are ",(0,i.kt)("a",{parentName:"p",href:"/docs/glossary#capacity"},"at capacity")," on the\nTargets page."),(0,i.kt)("p",null,"Finally, if you have a very small amount of DOTs, you may not be able to have your nomination fit\ninto the election set. The nominator to validator mapping has to fit in a single block, and if there\nare too many nominators, the lowest-staked nominations will be dropped. This value is obviously\ndynamic and will vary over time. If you review the lowest amount of nominations that are occurring\non current validators, you can get a good idea of how many DOTs will likely be necessary to have\nyour nomination earn you rewards. You can read the blog post\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/polkadot-staking-an-update/"},'"Polkadot Staking: An Update"')," for more\ndetails."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"These concepts have been further explained in the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=weG_uzdSs1E&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=4"},"Why Nominate on Polkadot & Kusama video"),"\nand\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=K-a4CgVchvU&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=9"},"What to Consider when Nominating Validators on Polkadot and Kusama"),"\nand\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NYs9oWAbzbE&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=14"},"Nominating/Staking on Polkadot and Kusama"))),(0,i.kt)("h3",{id:"guides"},"Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-nominate-polkadot"},"Be a Nominator (Polkadot)")," - Guide on nominating on\nthe Kusama canary network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-unbond"},"Stop Being a Nominator (all networks)")," - Guide on stopping\nnominations and withdrawing tokens.")))}c.isMDXComponent=!0},72831:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_nominator_account-e0f5d58cd9cce279d6f462cde9f706f4.png"},49448:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_nominators_target-4b6618ad6611abdfa95dfd08551ac4d2.png"},95322:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_validator_stats-4b433d0c856a8bf0d2bb53cea027e009.png"}}]);