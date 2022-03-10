"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,p=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(p,r(r({ref:t},h),{},{components:n})):a.createElement(p,r({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1357:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>h,default:()=>c});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"learn-staking-faq",title:"Staking FAQ",sidebar_label:"Staking FAQ",description:"Addresses FAQ on Staking",slug:"../learn-staking-faq"},l="Staking FAQ",d={unversionedId:"learn/learn-staking-faq",id:"learn/learn-staking-faq",title:"Staking FAQ",description:"Addresses FAQ on Staking",source:"@site/../docs/learn/learn-staking-faq.md",sourceDirName:"learn",slug:"/learn-staking-faq",permalink:"/docs/learn-staking-faq",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-staking-faq.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1646913109,formattedLastUpdatedAt:"3/10/2022",frontMatter:{id:"learn-staking-faq",title:"Staking FAQ",sidebar_label:"Staking FAQ",description:"Addresses FAQ on Staking",slug:"../learn-staking-faq"}},h=[{value:"1. How do I stake my DOT?",id:"1-how-do-i-stake-my-dot",children:[],level:2},{value:"2. When do I get slashed?",id:"2-when-do-i-get-slashed",children:[],level:2},{value:"3. Why am I not receiving staking rewards?",id:"3-why-am-i-not-receiving-staking-rewards",children:[{value:"Delayed staking reward payout",id:"delayed-staking-reward-payout",children:[],level:3},{value:"Nominated validators not in the active set",id:"nominated-validators-not-in-the-active-set",children:[],level:3},{value:"Nominated a validator with 100% commission",id:"nominated-a-validator-with-100-commission",children:[],level:3},{value:"Nominated an oversubscribed validator",id:"nominated-an-oversubscribed-validator",children:[],level:3},{value:"Min-Active Nomination Threshold is not met",id:"min-active-nomination-threshold-is-not-met",children:[],level:3}],level:2}],u={toc:h};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"staking-faq"},"Staking FAQ"),(0,i.kt)("h2",{id:"1-how-do-i-stake-my-dot"},"1. How do I stake my DOT?"),(0,i.kt)("p",null,"Thanks for considering to nominate and stake your DOT to secure the Polkadot Network and its parachains. The success of Nominated Proof of Staking (NPoS) relies on well informed nominators. To directly submit your intent to stake on Polkadot, you should"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"have an account on a non-custodial wallet that supports staking. Watch this tutorial on ",(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/sy7lvAqyzkY"},"creating an account on Polkadot-JS Extension"),"."),(0,i.kt)("li",{parentName:"ul"},"have more DOT than min-intention-threshold. This is a strict threshold decided by the chain protocol, which is now 10 DOT."),(0,i.kt)("li",{parentName:"ul"},"bond and nominate your DOT to Validators who are accepting nominations (you can choose up to 16). Read this article on ",(0,i.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000150130"},"how to choose validators"),".")),(0,i.kt)("p",null,"You will earn rewards when your stake is applied to one or multiple validators that enter the active set through NPoS election, which comes into effect in the next era. If you are a beginner and would like to securely stake your tokens using Polkadot-JS Apps, watch the video below"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/FCXC0CDhyS4"},(0,i.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/FCXC0CDhyS4/0.jpg",alt:"Staking on Polkadot JS"}))),(0,i.kt)("p",null,"If you choose to stake through custodial services like central exchanges, you may not have to follow the steps above. By staking through the custodial service, you place your trust in them to act in the best interests of you and the network. Make surre you thoroughly read the terms and conditions to understand the risks associated with the respective custodial staking service. (Not your keys, Not your tokens!)."),(0,i.kt)("h2",{id:"2-when-do-i-get-slashed"},"2. When do I get slashed?"),(0,i.kt)("p",null,"Slashing will happen if a validator misbehaves (e.g. goes offline, attacks the network, or runs modified software) in the network. They and their nominators will get slashed by losing a percentage of their staked DOT. By choosing to ",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000169507-the-role-responsibilities-of-a-polkadot-nominator"},"nominate reliable validators"),", you can minimize the risk of slashing and earn rewards for securing the network. Learn more about slashing ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking#slashing"},"here")),(0,i.kt)("h2",{id:"3-why-am-i-not-receiving-staking-rewards"},"3. Why am I not receiving staking rewards?"),(0,i.kt)("p",null,"If you do not see staking rewards on your account, it could be due to any of the below reasons."),(0,i.kt)("h3",{id:"delayed-staking-reward-payout"},"Delayed staking reward payout"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"learn-simple-payouts"},"staking reward distribution")," is not automatic and needs to be triggered through a transaction. Typically, it is the validators who trigger the staking reward payout transaction, but for some reason if they do not, you can claim the rewards on your own. "),(0,i.kt)("h3",{id:"nominated-validators-not-in-the-active-set"},"Nominated validators not in the active set"),(0,i.kt)("p",null,"If none of the validators you nominated made it to the active set in an era, you will not earn any rewards for that era. To maximize your chance of earning staking rewards on every era, consider nominating multiple validators (up to 16 on Polkadot)."),(0,i.kt)("h3",{id:"nominated-a-validator-with-100-commission"},"Nominated a validator with 100% commission"),(0,i.kt)("p",null,"When you nominated a validator who takes 100% commission on staking rewards, you will not receive any staking reward for the eras when your nomination is applied to that specific validator."),(0,i.kt)("h3",{id:"nominated-an-oversubscribed-validator"},"Nominated an oversubscribed validator"),(0,i.kt)("p",null,"Only the top 256 nominators of a Validator receive the staking rewards. If your nomination is applied to an oversubscribed Validator and your stake does not put you in the top 256, you will not earn rewards. On a regular basis, ensure that the Validators you chose are not oversubscribed."),(0,i.kt)("h3",{id:"min-active-nomination-threshold-is-not-met"},"Min-Active Nomination Threshold is not met"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/9507"},"bags-list implementation"),", the minimum stake threshold to earn staking rewards can change with each era. Do not confuse this with min-intention-threshold (10 DOT) which is required to submit your intention to nominate. The network supports 50,000 nominator intentions, but can reward only up to 22500 nominators in any given era. If you nominate with, say 50 DOT, you are not guaranteed to be part of the top 22500 and hence you may not earn staking rewards. The entry barrier to be an electing nominator is now determined dynamically, based on market demand."),(0,i.kt)("p",null,"The nominator intentions (up to 50,000) serve as a waitlist for the electing subset (22,500) which receives rewards in each era. Having more number of nominator intentions than the electing subset allows for the dynamic staking system to have some flexibility. For example, assume the top 1000 nominators all unbond their stake, having that extra buffer of nomination intentions becomes useful."))}c.isMDXComponent=!0}}]);