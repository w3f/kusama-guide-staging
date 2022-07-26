(self.webpackChunk=self.webpackChunk||[]).push([[1506],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var n=a(74165),o=a(15861),s=a(67294),i=a(98562),r=a(73100),l="polkadot",p="kusama",c="statemine",u="statemint",d=!1;function h(e,t,a){return m.apply(this,arguments)}function m(){return(m=(0,o.Z)((0,n.Z)().mark((function e(t,a,o){var s,l,p,c,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return s="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return s="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return s="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return s="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==s){e.next=18;break}return e.abrupt("return");case 18:return p=new i.U(s),e.next=21,r.G.create({provider:p});case 21:c=e.sent,(u=a.split(".")).forEach((function(e){c.hasOwnProperty(e)&&(c=c[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=c.toString(),e.abrupt("break",35);case 29:return e.next=31,c();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+a);case 35:if(void 0!==l){e.next=37;break}return e.abrupt("return");case 37:d&&o(l);case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,a,n){var o={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};switch(t){case"humanReadable":var s=void 0;if(a===l||a===u)s=3;else{if(a!==p&&a!==c)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=6}e=parseFloat(e),e=Number.isInteger(e/o[a].precision)?e/o[a].precision+" "+o[a].symbol:(e/o[a].precision).toFixed(s)+" "+o[a].symbol;break;case"blocksToDays":e=6*e/86400;break;default:return void console.log("Ignoring unknown filter type")}d&&n(e.toString())}const f=function(e){var t=e.network,a=e.path,i=e.defaultValue,r=e.filter,m=void 0===r?void 0:r,f=(0,s.useState)(""),g=f[0],b=f[1];return(0,s.useEffect)((function(){d=!0,void 0!==m?k(i.toString(),m,t,b):b(i.toString());var e=void 0;switch(t){case l:e="wss://rpc.polkadot.io";break;case p:e="wss://kusama-rpc.polkadot.io/";break;case c:e="wss://statemine-rpc.polkadot.io/";break;case u:e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+net)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var s=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,a,b);case 2:void 0!==m&&k(i.toString(),m,t,b);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{s()}catch(r){console.log(r)}}}),[]),d=!1,g}},38948:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),i=a(47940),r=["components"],l={id:"learn-teleport",title:"Teleporting Assets",sidebar_label:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},p=void 0,c={unversionedId:"learn/learn-teleport",id:"learn/learn-teleport",title:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",source:"@site/../docs/learn/learn-teleport.md",sourceDirName:"learn",slug:"/learn-teleport",permalink:"/docs/learn-teleport",draft:!1,tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1658564248,formattedLastUpdatedAt:"Jul 23, 2022",frontMatter:{id:"learn-teleport",title:"Teleporting Assets",sidebar_label:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},sidebar:"docs",previous:{title:"Statemine",permalink:"/docs/kusama-statemine"},next:{title:"Identity",permalink:"/docs/learn-identity"}},u={},d=[{value:"How Teleports work",id:"how-teleports-work",level:2},{value:"Initiate Teleport",id:"initiate-teleport",level:3},{value:"Receive Teleported Assets",id:"receive-teleported-assets",level:3},{value:"Deposit Asset",id:"deposit-asset",level:3},{value:"Teleporting Tokens using Polkadot-JS Apps UI",id:"teleporting-tokens-using-polkadot-js-apps-ui",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],h={toc:d};function m(e){var t=e.components,l=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"One of the main properties that Polkadot and Kusama bring to the ecosystems is decentralized\nblockchain interoperability. This interoperability allows for asset teleportation: the process of\nmoving assets, such as coins, tokens, or NFTs, between chains (parachains) to use them as you would\nany other asset native to that chain. Interoperability is possible through ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-crosschain"},"XCM")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-spree"},"SPREE\nmodules"),", which together ensure that assets are not lost or duplicated across multiple chain."),(0,s.kt)("h2",{id:"how-teleports-work"},"How Teleports work"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"teleport",src:a(84532).Z,width:"1397",height:"611"})),(0,s.kt)("p",null,"As you can see from the diagram above, there are only 2 actors within this model: the source and the destination.\nThe way in which we transfer assets between the source and the destination are briefly summarized in the numbered\nlabels on the diagram, and are explained in more detail below:"),(0,s.kt)("h3",{id:"initiate-teleport"},"Initiate Teleport"),(0,s.kt)("p",null,"The source gathers the assets to be teleported from the sending account and ",(0,s.kt)("strong",{parentName:"p"},"takes them out of the circulating supply"),",\ntaking note of the total amount of assets that was taken out."),(0,s.kt)("h3",{id:"receive-teleported-assets"},"Receive Teleported Assets"),(0,s.kt)("p",null,"The source then creates an XCM instruction called ",(0,s.kt)("inlineCode",{parentName:"p"},"ReceiveTeleportedAssets")," and puts the amount of assets taken out of\ncirculation and the receiving account as parameters to this instruction. It then sends this instruction over to the\ndestination, where it gets processed and new assets get ",(0,s.kt)("strong",{parentName:"p"},"put back into circulating supply accordingly"),"."),(0,s.kt)("h3",{id:"deposit-asset"},"Deposit Asset"),(0,s.kt)("p",null,"The destination then deposits the assets to the receiving account of the asset."),(0,s.kt)("p",null,"The phrases ",(0,s.kt)("strong",{parentName:"p"},"taken out of circulating supply")," and ",(0,s.kt)("strong",{parentName:"p"},"put back into circulating supply")," are highlighted above to firstly give\nan indication of how much flexibility an XCM executor has in implementing the semantics of taking an asset out of and\nputting it back into its circulating supply. The straightforward answer is to burn the assets to take them out of\ncirculation, but one can imagine that there are indeed multiple methods of achieving the same goal, such as transferring\nthe assets locally to an inaccessible account, and likewise for putting assets back to circulation -- the receiving\nconsensus system can freely choose to implement such semantics by releasing assets from a pre-filled and inaccessible\ntreasury of the assets transferred, or perform a mint of the assets."),(0,s.kt)("p",null,"As such, the above also gives a hint on the disadvantages of this model -- it requires both the source and destination\nof have a high level of mutual trust. The destination must trust that the source has appropriately removed the assets\nthat was sent over from the circulating supply, and the source must also trust the destination to put the assets that\nwas taken out of circulation back into circulation. The result of an asset teleportation should result in the same\ncirculating supply of the asset. Failing to uphold either of these two conditions will result in a change in the asset's\ntotal issuance (in the case of fungible tokens) or a complete loss/duplication of an NFT."),(0,s.kt)("h2",{id:"teleporting-tokens-using-polkadot-js-apps-ui"},"Teleporting Tokens using Polkadot-JS Apps UI"),(0,s.kt)("p",null,"","",(0,s.kt)("img",{alt:"teleport",src:a(90860).Z,width:"681",height:"376"}),""),(0,s.kt)("p",null,"Here are a couple of things that you need to understand before submitting a teleport transaction"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"There will be a transaction fee imposed on the source chain. This fee is ",(0,s.kt)("strong",{parentName:"li"},"not")," automatically\ndeducted from the teleport amount you plan to send. Your account balance should be greater than\nthe teleport amount and the transaction fees. If you do not account for the sending fee, the\nteleport transaction will fail. The sending fee will be deducted from your account balance.")),(0,s.kt)("admonition",{title:"Existential Deposit",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"After the teleport, if your account balance drops below the Existential Deposit which is\n","",(0,s.kt)(i.Z,{network:"kusama",path:"consts.balances.existentialDeposit",defaultValue:33333300,filter:"humanReadable",mdxType:"RPC"}),",\nthat balance will be burnt and lost. Either plan on teleporting all of\nyour balance or leave enough balance such that the account does not get reaped.\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"There will be a transaction fee imposed at the destination chain. This fee is automatically\ndeducted from the teleport amount you send. After this fee is deducted, the remaining account\nbalance on the destination chain should be greater than its Existential Deposit. If not, the\nteleport transaction will fail and the sending fee along with the teleport amount will be deducted\nfrom your account balance.")),(0,s.kt)("p",null,"Teleportation can be done through the ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps")," interface or through the\n",(0,s.kt)("inlineCode",{parentName:"p"},"xcmPallet.limitedTeleportAssets()")," extrinsic. In the following example, we will be using the\nPolkadotJS interface to teleport KSM from Kusama to Statemine."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Navigate to ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps")," and connect to the chain with the tokens you want to teleport."),(0,s.kt)("p",{parentName:"li"},"","",(0,s.kt)("img",{alt:"teleport",src:a(59058).Z,width:"1684",height:"486"}),"")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Navigate to \"Accounts > Teleport\". This opens the 'teleport assets' interface:"),(0,s.kt)("p",{parentName:"li"},"","",(0,s.kt)("img",{alt:"transfer",src:a(31918).Z,width:"1608",height:"778"}),"")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Fill out the transaction:"),(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},'"send from account" - Select the account with the source tokens.'),(0,s.kt)("li",{parentName:"ol"},'"destination chain" - Select the parachain you want to send the assets to.'),(0,s.kt)("li",{parentName:"ol"},'"send to address" - Select the account you want to be in control of the coins on the\ndestination chain.'),(0,s.kt)("li",{parentName:"ol"},'"amount" - Insert the number of tokens you want to teleport. This does not include the\ntransfer fee'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'After reviewing the transaction information and fees, click the "Teleport" button. Remember that\nthe destination chain imposes receiving fee on the teleport amount. (It is currently 0.000010666 KSM on\nStatemine.)')),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'Click "Sign and Submit".')),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'Enter your password, and click "Sign the transaction".'))),(0,s.kt)("p",null,"The transaction will be signed and broadcasted, and the tokens will appear on the destination chain\nshortly. "),(0,s.kt)("p",null,"","In the given example screenshot, the received balance would be around 0.0049 KSM (Teleport amount\n0.005 KSM - Receiving fee 0.000010666 KSM). If you plan to teleport KSM back to Kusama from Statemine, you\nwill follow the same procedure as above."),(0,s.kt)("p",null,"A video tutorial on teleporting (on Kusama) is provided below for reference:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://youtu.be/PGyDpH2kad8"},(0,s.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/PGyDpH2kad8/0.jpg",alt:"Teleporting KSM"}))),(0,s.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,s.kt)("p",null,'If you do not see "Accounts > Teleport" in ',(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps"),", the source chain that you have\nselected does not support teleportation yet."))}m.isMDXComponent=!0},59058:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/KSM-Teleport-Kusama-b0624be36f98d38e5d72cfdda8e392b8.png"},90860:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/KSM-teleport-small-4396142d566de1a4de72326eaf8d1f14.png"},31918:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/ksm-teleport-apps-d917d80eea3faeb4a18d72879463a0e6.png"},84532:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/teleport-asset-4f624ff92c1b79da7067a267f10abc95.png"},95856:()=>{},46601:()=>{}}]);