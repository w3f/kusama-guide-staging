"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],i={id:"learn-teleport",title:"Teleporting KSM between Kusama and Statemine",sidebar_label:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},s=void 0,p={unversionedId:"learn/learn-teleport",id:"learn/learn-teleport",title:"Teleporting KSM between Kusama and Statemine",description:"Steps on how to teleport assets across parachains.",source:"@site/../docs/learn/learn-teleport.md",sourceDirName:"learn",slug:"/learn-teleport",permalink:"/zh-CN/docs/learn-teleport",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-teleport.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1650959200,formattedLastUpdatedAt:"2022/4/26",frontMatter:{id:"learn-teleport",title:"Teleporting KSM between Kusama and Statemine",sidebar_label:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},sidebar:"docs",previous:{title:"Statemine",permalink:"/zh-CN/docs/kusama-statemine"},next:{title:"Identity",permalink:"/zh-CN/docs/learn-identity"}},c={},d=[{value:"How to Teleport",id:"how-to-teleport",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:d};function h(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One of the main properties that Polkadot and Kusama bring to the ecosystems is decentralized\nblockchain interoperability. This interoperability allows for asset teleportation: the process of\nmoving assets, such as coins, tokens, or NFTs, between chains (parachains) to use them as you would\nany other asset native to that chain. Interoperability is possible through ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-crosschain"},"XCM")," and ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-spree"},"SPREE\nmodules"),", which together ensure that assets are not lost or duplicated across multiple chain."),(0,r.kt)("h2",{id:"how-to-teleport"},"How to Teleport"),(0,r.kt)("p",null,"Here are a couple of things that you need to understand before submitting a teleport transaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There will be a transaction fee imposed on the source chain. This fee is ",(0,r.kt)("strong",{parentName:"p"},"not")," automatically\ndeducted from the teleport amount you plan to send. Your account balance should be greater than\nthe teleport amount and the transaction fees. If you do not account for the sending fee, the\nteleport transaction will fail. The sending fee will be deducted from your account balance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There will be a transaction fee imposed at the destination chain. This fee is automatically\ndeducted from the teleport amount you send. After this fee is deducted, the remaining account\nbalance on the destination chain should be greater than its Existential Deposit. If not, the\nteleport transaction will fail and the sending fee along with the teleport amount will be deducted\nfrom your account balance."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"teleport",src:n(90860).Z,width:"681",height:"376"})))),(0,r.kt)("p",null,"Teleportation can be done through the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps")," interface or through the\n",(0,r.kt)("inlineCode",{parentName:"p"},"xcmPallet.limitedTeleportAssets()")," extrinsic. In the following example, we will be using the\nPolkadotJS interface to teleport KSM from Kusama to Statemine."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps")," and connect to the chain with the tokens you want to teleport.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to \"Accounts > Teleport\". This opens the 'teleport assets' interface:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"transfer",src:n(31918).Z,width:"1608",height:"778"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the transaction:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},'"send from account" - Select the account with the source tokens.'),(0,r.kt)("li",{parentName:"ol"},'"destination chain" - Select the parachain you want to send the assets to.'),(0,r.kt)("li",{parentName:"ol"},'"send to address" - Select the account you want to be in control of the coins on the\ndestination chain.'),(0,r.kt)("li",{parentName:"ol"},'"amount" - Insert the number of tokens you want to teleport. This does not include the\ntransfer fee'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'After reviewing the transaction information and fees, click the "Teleport" button. Remember that\nthe destination chain imposes receiving fee on the teleport amount (It is currently 0.000010666 KSM on\nStatemine)')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click "Sign and Submit".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Enter your password, and click "Sign the transaction".'))),(0,r.kt)("p",null,"The transaction will be signed and broadcasted, and the tokens will appear on the destination chain\nshortly. In the given example screenshot, the received balance would be around 0.0049 KSM (Teleport amount\n0.005 KSM - Receiving fee 0.000010666 KSM). If you plan to teleport KSM back to Kusama from Statemine, you\nwill follow the same procedure as above."),(0,r.kt)("p",null,"A video tutorial on teleporting KSM from Kusama to Statemine is provided below:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/PGyDpH2kad8"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/PGyDpH2kad8/0.jpg",alt:"Teleporting KSM"}))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,'If you do not see "Accounts > Teleport" in ',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps"),", the source chain that you have\nselected does not support teleportation yet. As of June 2021, unsupported chains include Polkadot\nmainnet, Rococo testnet, and their respective parachains."))}h.isMDXComponent=!0},90860:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/KSM-teleport-small-4396142d566de1a4de72326eaf8d1f14.png"},31918:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ksm-teleport-apps-d917d80eea3faeb4a18d72879463a0e6.png"}}]);