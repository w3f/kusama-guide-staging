"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9017],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,s=function(t,e){if(null==t)return{};var n,a,s={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,s=t.mdxType,o=t.originalType,l=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),h=c(n),m=s,p=h["".concat(l,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(p,i(i({ref:e},u),{},{components:n})):a.createElement(p,i({ref:e},u))}));function m(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=n.length,i=new Array(o);i[0]=h;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r.mdxType="string"==typeof t?t:s,i[1]=r;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83287:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=n(87462),s=n(63366),o=(n(67294),n(3905)),i=["components"],r={id:"learn-statemint",title:"Statemint",sidebar_label:"Statemint",description:"Statemint and its features",slug:"../../learn-statemint"},l=void 0,c={unversionedId:"learn/learn-statemint",id:"learn/learn-statemint",title:"Statemint",description:"Statemint and its features",source:"@site/../docs/learn/learn-statemint.md",sourceDirName:"learn",slug:"/learn-statemint",permalink:"/docs/learn-statemint",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1652185949,formattedLastUpdatedAt:"May 10, 2022",frontMatter:{id:"learn-statemint",title:"Statemint",sidebar_label:"Statemint",description:"Statemint and its features",slug:"../../learn-statemint"}},u={},d=[{value:"Creating Assets on Statemint",id:"creating-assets-on-statemint",level:2},{value:"Transferring Assets on Statemint",id:"transferring-assets-on-statemint",level:2}],h={toc:d};function m(t){var e=t.components,r=(0,s.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Statemint is a generic assets parachain which provides functionality for deploying and transferring\nassets \u2014 both Fungible and Non-Fungible Tokens (NFTs). It is a common good parachain on Polkadot\n(not to be confused with ",(0,o.kt)("a",{parentName:"p",href:"https://guide.kusama.network/docs/kusama-statemine/"},"Statemine"),", which is\na parachain on Kusama). The native token of Statemint is DOT. The Existential Deposit (ED), transfer fees,\nand the deposits for proxy/multisig operations on Statemint are about 1/10th of the values on the Relay chain.\nFor example, the Existential Deposit of a Statemint account is 0.1 DOT, when compared to 1 DOT on Polkadot.\nApart from the core protocol token DOT, the assets held on Statemint can be broadly categorized as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assets backed by an on-chain protocol\u2019s utility"),(0,o.kt)("li",{parentName:"ul"},"Assets with off-chain backing"),(0,o.kt)("li",{parentName:"ul"},"Assets without any backing")),(0,o.kt)("h2",{id:"creating-assets-on-statemint"},"Creating Assets on Statemint"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before minting assets on Statemint, we recommend that you try out this tutorial on Westmint, which\nis a parachain on Westend. The WND tokens (Westies) are free and are available through a\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-westies"},"faucet"),".")),(0,o.kt)("p",null,"To create an asset on Statemint, you would need a deposit of 100 DOT and around 2 DOT for the metadata\n. Before you create an asset on Statemint, ensure that your Statemint account balance is more\nthan 103 DOT, which should seamlessly account for the required deposits and transaction fees. You can\nsend DOT from a Polkadot account to a Statemint account using the teleport functionality. For\ninstructions on teleporting DOT, check this ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-teleport"},"tutorial on Teleports"),"."),(0,o.kt)("p",null,"Assuming you have the required DOT balance on your Statemint account, the following instructions\nshould let you successfully create an asset on Statemint"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access Statemint through Polkdot-JS Apps UI."),(0,o.kt)("li",{parentName:"ul"},"Navigate to Network > Assets.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Navigate to Assets page",src:n(91182).Z,width:"1222",height:"380"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the create button and you will be presented with a pop-up window. Choose the creator\naccount, name of the asset to be displayed on Statemint, the asset's symbol, number of decimals\nfor the asset, the minimum balance required to hold this asset on a Statemint account and the most\nimportant field of your asset - the unique asset ID. The UI would not let you enter an ID that has\nalready been taken. After all the details are entered, click on the next button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Asset Metadata",src:n(28523).Z,width:"1510",height:"798"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose the admin, issuer and the freezer accounts for your asset and click on the create button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Asset managing accounts",src:n(98600).Z,width:"1518",height:"510"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction. (If you like to verify the transaction details before signing,\nyou can click on the dropdown button pointed by the arrow in the snapshot below)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign asset creating transaction",src:n(59416).Z,width:"1520",height:"610"})),(0,o.kt)("p",null,"If the transaction is successful, you should see the asset and its details displayed in the\nNetwork > Assets page on Statemint."),(0,o.kt)("h2",{id:"transferring-assets-on-statemint"},"Transferring Assets on Statemint"),(0,o.kt)("admonition",{title:"Beware of scams",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Due to the permissionless nature of Statemint, anyone can create an asset with any name and symbol.\nThe most important attribute of an asset is the asset ID. There could be multiple assets with the\nsame name and symbol, but they cannot have the same asset ID.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The assets can be Sufficient or Non-Sufficient. To hold a Non-Sufficient asset, the Statemint\naccount needs to exist on-chain. This is different from Ethereum where a non-existent account can\nhold ERC-20 tokens. Ensure that the receiver account has at least 0.1 DOT which is the Existential\nDeposit for a Statemint account. Although, there are a few exceptions to this - If an asset is\nSufficient or someone has placed a deposit for that account to hold the asset, the Existential\nDeposit in DOT on the receiver account is not needed.")),(0,o.kt)("p",null,"To hold, send or receive most of the assets on Statemint (which are Non-Suffcient), the accounts\nneed to have a minimum balance of 0.1 DOT (The Existential Deposit on Statemint). You can send DOT\nfrom a Polkadot account to a Statemint account using the teleport functionality. For instructions on\nteleporting DOT, check this ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-teleport"},"tutorial on Teleports"),". The balance transfers of DOT\non Statemint are similar to the balance transfers DOT on Polkadot and can be done on the accounts\npage on Polkadot-JS Apps UI."),(0,o.kt)("p",null,"In this tutorial, transfer of JOEs (Asset ID: 8, Symbol: JOE) is demonstrated."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access Statemint through Polkdot-JS Apps UI."),(0,o.kt)("li",{parentName:"ul"},"Navigate to Network > Assets and click on the Balances tab"),(0,o.kt)("li",{parentName:"ul"},"Select the asset to transfer from the drop-down (The assets are sorted based on their IDs). If you\nhave accounts with the selected asset, they will be displayed.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Finding the asset",src:n(41958).Z,width:"1844",height:"408"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the send button"),(0,o.kt)("li",{parentName:"ul"},"Enter the receiver address and the amount to transfer.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Asset transfer transaction",src:n(39802).Z,width:"1516",height:"674"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign asset creating transaction",src:n(40993).Z,width:"1516",height:"592"})),(0,o.kt)("p",null,"If the transaction is successful, the assets are transferred to the receiver account."))}m.isMDXComponent=!0},91182:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Statemint-asset-0-c5f6c1142338248879ebbf478c15da9f.png"},28523:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Statemint-asset-1-6f406281abdca9f5c2941ebd4d9479fd.png"},98600:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Statemint-asset-2-2fd6118841d0c4e037d5f51c6b1010e1.png"},59416:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Statemint-asset-3-3952e84a1b7c80239e8fb1f907af2583.png"},41958:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Statemint-asset-transfer-1-7c5f1a4aca8065abd4f1a4d236ac6608.png"},39802:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Statemint-asset-transfer-2-53544e89f9bdda9d05ec85d7f7d2a684.png"},40993:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Statemint-asset-transfer-3-47efc6342359c1954b56dab347df9738.png"}}]);