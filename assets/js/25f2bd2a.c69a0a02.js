(self.webpackChunk=self.webpackChunk||[]).push([[1213],{3905:(t,e,n)=>{"use strict";n.d(e,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),d=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=d(t.components);return o.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?o.createElement(h,r(r({ref:e},u),{},{components:n})):o.createElement(h,r({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16769:(t,e,n)=>{"use strict";n.r(e),n.d(e,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>c});var o=n(22122),a=n(19756),i=(n(67294),n(3905)),r=["components"],l={id:"maintain-guides-how-to-stop-validating",title:"How to Stop Validating",sidebar_label:"How to Stop Validating",description:"Steps on how to stop validating.",slug:"../maintain-guides-how-to-stop-validating"},s=void 0,d={unversionedId:"maintain/maintain-guides-how-to-stop-validating",id:"maintain/maintain-guides-how-to-stop-validating",isDocsHomePage:!1,title:"How to Stop Validating",description:"Steps on how to stop validating.",source:"@site/../docs/maintain/maintain-guides-how-to-stop-validating.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-stop-validating",permalink:"/docs/maintain-guides-how-to-stop-validating",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-stop-validating.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1631864714,formattedLastUpdatedAt:"9/17/2021",frontMatter:{id:"maintain-guides-how-to-stop-validating",title:"How to Stop Validating",sidebar_label:"How to Stop Validating",description:"Steps on how to stop validating.",slug:"../maintain-guides-how-to-stop-validating"},sidebar:"docs",previous:{title:"How to run a Validator on Kusama",permalink:"/docs/maintain-guides-how-to-validate-kusama"},next:{title:"Nominator Guide",permalink:"/docs/maintain-guides-how-to-nominate-kusama"}},u=[{value:"Chill Validator",id:"chill-validator",children:[]},{value:"Purge validator session keys",id:"purge-validator-session-keys",children:[]},{value:"Unbond your tokens",id:"unbond-your-tokens",children:[]}],p={toc:u};function c(t){var e=t.components,n=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you wish to remain a validator or nominator (e.g. you're only stopping for planned downtime or\nserver maintenance), submitting the ",(0,i.kt)("inlineCode",{parentName:"p"},"chill")," extrinsic in the ",(0,i.kt)("inlineCode",{parentName:"p"},"staking")," pallet should suffice. It is\nonly if you wish to unbond funds or reap an account that you should continue with the following."),(0,i.kt)("p",null,"To ensure a smooth stop to validation, make sure you should do the following actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chill your validator"),(0,i.kt)("li",{parentName:"ul"},"Purge validator session keys"),(0,i.kt)("li",{parentName:"ul"},"Unbond your tokens")),(0,i.kt)("p",null,"These can all be done with ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"PolkadotJS Apps")," interface or with\nextrinsics."),(0,i.kt)("h2",{id:"chill-validator"},"Chill Validator"),(0,i.kt)("p",null,"To chill your validator or nominator, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"staking.chill()")," extrinsic. See the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-chill"},"How to Chill")," page for more information. You can also\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-simple-payouts#claiming-rewards"},"claim your rewards")," at this time."),(0,i.kt)("h2",{id:"purge-validator-session-keys"},"Purge validator session keys"),(0,i.kt)("p",null,"Purging the validator's session keys removes the key reference to your stash. This can be done\nthrough the ",(0,i.kt)("inlineCode",{parentName:"p"},"session.purgeKeys()")," extrinsic with the controller account."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: ",(0,i.kt)("strong",{parentName:"p"},"If you skip this step, you will not be able to reap your stash account"),", and you will\nneed to rebond, purge the session keys, unbond, and wait the unbonding period again before being\nable to transfer your tokens. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-unbond"},"Unbonding and Rebonding")," for\nmore details.")),(0,i.kt)("h2",{id:"unbond-your-tokens"},"Unbond your tokens"),(0,i.kt)("p",null,"Unbonding your tokens can be done through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Network > Staking > Account actions"),' page in\nPolkadotJS Apps by clicking the corrosponding stash account dropdown and selecting "Unbond funds".\nThis can also be done through the ',(0,i.kt)("inlineCode",{parentName:"p"},"staking.unbond()")," extrinsic with the controller account."))}c.isMDXComponent=!0}}]);