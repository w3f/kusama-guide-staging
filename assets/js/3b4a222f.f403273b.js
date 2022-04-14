"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8881],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(a),p=s,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function p(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},76590:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>d});var n=a(87462),s=a(63366),i=(a(67294),a(3905)),o=["components"],r={id:"kusama-statemine",title:"Statemine",sidebar_label:"Statemine",description:"Statemine and its features",slug:"../../kusama-statemine"},l=void 0,c={unversionedId:"general/kusama/kusama-statemine",id:"general/kusama/kusama-statemine",title:"Statemine",description:"Statemine and its features",source:"@site/../docs/general/kusama/kusama-statemine.md",sourceDirName:"general/kusama",slug:"/kusama-statemine",permalink:"/docs/kusama-statemine",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-statemine.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1649951558,formattedLastUpdatedAt:"4/14/2022",frontMatter:{id:"kusama-statemine",title:"Statemine",sidebar_label:"Statemine",description:"Statemine and its features",slug:"../../kusama-statemine"},sidebar:"docs",previous:{title:"Polkadot Ambassador Programme",permalink:"/docs/ambassadors"},next:{title:"Kappa Sigma Mu",permalink:"/docs/maintain-guides-society-kusama"}},u=[{value:"Statemine",id:"statemine",children:[],level:2},{value:"Creating Assets on Statemine",id:"creating-assets-on-statemine",children:[],level:2},{value:"Transferring Assets on Statemine",id:"transferring-assets-on-statemine",children:[],level:2}],m={toc:u};function d(e){var t=e.components,r=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"statemine"},"Statemine"),(0,i.kt)("p",null,"Statemine is a generic assets parachain which provides functionality for deploying and transferring assets \u2014 both Fungible and Non-Fungible Tokens (NFTs). It is a common good parachain on Kusama (not to be confused with ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-common-goods#statemint"},"Statemint"),", which is a parachain on Polkadot). The native token of Statemine is KSM. Balance transfers and the Existential Deposit (ED) of KSM on Statemine are about 1/10th of the values on the Relay chain.\nApart from the core protocol token KSM, the assets held on Statemine can be broadly categorized as "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Assets backed by an on-chain protocol\u2019s utility"),(0,i.kt)("li",{parentName:"ul"},"Assets with off-chain backing"),(0,i.kt)("li",{parentName:"ul"},"Assets without any backing")),(0,i.kt)("h2",{id:"creating-assets-on-statemine"},"Creating Assets on Statemine"),(0,i.kt)("p",null,"::: info"),(0,i.kt)("p",null,"Before minting assets on Statemine, we recommend that you try out this tutorial on Westmint, which is a parachain on Westend.\nThe WND tokens (Westies) are free and are available through a ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-westies"},"faucet"),"."),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,"To create an asset on Statemine, you would need a deposit of 1 KSM. Ensure that your Statemine account balance is more than 1 KSM,\nwhich should account for the transaction fee as well. You can send KSM from a Kusama account to a Statemine account using the teleport functionality. For instructions on teleporting KSM, check this ",(0,i.kt)("a",{parentName:"p",href:"../../learn/learn-teleport"},"tutorial on Teleports"),"."),(0,i.kt)("p",null,"Assuming you have the required KSM balance on your Statemine account, the following instructions should let you successfully create an asset on Statemine"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access Statemine through Polkdot-JS Apps UI."),(0,i.kt)("li",{parentName:"ul"},"Navigate to Network > Assets.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Navigate to Assets page",src:a(44221).Z,width:"750",height:"230"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the create button and you will be presented with a pop-up window. Choose the creator account, name of the asset to be\ndisplayed on Statemine, the asset's symbol, number of decimals for the asset, the minimum balance required to hold this asset on a Statemine account and the most important field of your asset - the unique asset ID. The UI would not let you enter an ID that has already been taken. After all the details are entered, click on the next button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Asset Metadata",src:a(10921).Z,width:"1180",height:"622"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choose the admin, issuer and the freezer accounts for your asset and click on the create button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Asset managing accounts",src:a(76127).Z,width:"1180",height:"404"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sign and submit the transaction. (If you like to verify the transaction details before signing, you can click on the dropdown button pointed by the arrow in the snapshot below)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign asset creating transaction",src:a(11718).Z,width:"1184",height:"478"})),(0,i.kt)("p",null,"If the transaction is successful,  you should see the asset and its details displayed in the Network > Assets page on Statemine."),(0,i.kt)("h2",{id:"transferring-assets-on-statemine"},"Transferring Assets on Statemine"),(0,i.kt)("p",null,"::: caution Beware of scams"),(0,i.kt)("p",null,"Due to the permissionless nature of Statemine, anyone can create an asset with any name and symbol. The most important attribute\nof an asset is the asset ID. There could be multiple assets with the same name and symbol, but they cannot have the same asset ID. Ex: The USDT by Tether minted on Statemine holds the asset ID: 1984."),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,"To hold, send or receive most of the assets on Statemine, the accounts need to have a minimum balance of 0.1 microKSM (The Existential Deposit on Statemine). You can send KSM from a Kusama account to a Statemine account using the teleport functionality. For instructions on teleporting KSM, check this ",(0,i.kt)("a",{parentName:"p",href:"../../learn/learn-teleport"},"tutorial on Teleports"),". The balance transfers of KSM on Statemine are similar to the balance transfers KSM on Kusama and can be done on the accounts page on Polkadot-JS Apps UI."),(0,i.kt)("p",null,"In this tutorial, transfer of BILLCOINs (Asset ID: 223, Symbol: BILL) is demonstrated."),(0,i.kt)("p",null,"::: info"),(0,i.kt)("p",null,"Ensure that the receiver account has at least 0.1 microKSM which is the Existential Deposit for a Statemine acocunt"),(0,i.kt)("p",null,":::"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access Statemine through Polkdot-JS Apps UI."),(0,i.kt)("li",{parentName:"ul"},"Navigate to Network > Assets and click on the Balances tab"),(0,i.kt)("li",{parentName:"ul"},"Select the asset to transfer from the drop-down (The assets are sorted based on their IDs). If you have accounts with the selected asset, they will be displayed.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Finding the asset",src:a(61634).Z,width:"1440",height:"320"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the send button "),(0,i.kt)("li",{parentName:"ul"},"Enter the receiver address and the amount to transfer.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Asset transfer transaction",src:a(3271).Z,width:"1176",height:"516"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sign and submit the transaction")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign asset creating transaction",src:a(12788).Z,width:"1178",height:"454"})),(0,i.kt)("p",null,"If the transaction is successful, the assets are transferred to the receiver account."))}d.isMDXComponent=!0},44221:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-0-c0d765f1c353e064445d3f9c330b6906.png"},10921:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-1-7f4aedc6d554a7cd2c4096e7a945264e.png"},76127:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-2-3fc18f1c44deccb5ac4d110d231db774.png"},11718:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-3-ee5744e11d130f8e61db9e7ce11d9e83.png"},61634:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-transfer-1-aaa7dfc5e75b4860084b7717ab231f62.png"},12788:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-transfer-3-007cfb046164f925bef27347237ec2ab.png"},3271:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-transfer-asset-2-192c9086d931335714e037b3d3e756fe.png"}}]);