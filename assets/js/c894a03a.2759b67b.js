(self.webpackChunk=self.webpackChunk||[]).push([[9017],{47940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>f});var n=a(74165),s=a(15861),o=a(67294),i=a(23010),r=a(7223),l="polkadot",c="kusama",u="statemine",d="statemint";function p(t,e,a){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)((0,n.Z)().mark((function t(e,a,s){var o,l,c,u,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=void 0,l=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){t.next=18;break}return t.abrupt("return");case 18:return c=new i.U(o),t.next=21,r.G.create({provider:c});case 21:u=t.sent,(d=a.split(".")).forEach((function(t){t in u&&(u=u[t])})),t.t1=d[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return l=u.toString(),t.abrupt("break",35);case 29:return t.next=31,u();case 31:return l=(l=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+a);case 35:return t.abrupt("return",l);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,e,a,n){var s={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};switch(e){case"humanReadable":var o=void 0;if(a===l||a===d)o=3;else{if(a!==c&&a!==u)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}t=parseFloat(t),t=Number.isInteger(t/s[a].precision)?t/s[a].precision+" "+s[a].symbol:(t/s[a].precision).toFixed(o)+" "+s[a].symbol;break;case"blocksToDays":t=6*t/86400;break;default:return void console.log("Ignoring unknown filter type")}n(t.toString())}const f=function(t){var e=t.network,a=t.path,i=t.defaultValue,r=t.filter,m=void 0===r?void 0:r,f=(0,o.useState)(""),k=f[0],b=f[1];return(0,o.useEffect)((function(){void 0!==m?h(i.toString(),m,e,b):b(i.toString());var t=void 0;switch(e){case l:t="wss://rpc.polkadot.io";break;case c:t="wss://kusama-rpc.polkadot.io/";break;case u:t="wss://statemine-rpc.polkadot.io/";break;case d:t="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+net)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var t=(0,s.Z)((0,n.Z)().mark((function t(){var s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e,a,b);case 2:if(void 0!==(s=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==m?h(s,m,e,b):b(s);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{o()}catch(r){console.log(r)}}}),[]),k}},83287:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(87462),s=a(63366),o=(a(67294),a(3905)),i=a(47940),r=["components"],l={id:"learn-statemint",title:"Statemint",sidebar_label:"Statemint",description:"Statemint and its features",slug:"../../learn-statemint"},c=void 0,u={unversionedId:"learn/learn-statemint",id:"learn/learn-statemint",title:"Statemint",description:"Statemint and its features",source:"@site/../docs/learn/learn-statemint.md",sourceDirName:"learn",slug:"/learn-statemint",permalink:"/docs/learn-statemint",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1658757668,formattedLastUpdatedAt:"Jul 25, 2022",frontMatter:{id:"learn-statemint",title:"Statemint",sidebar_label:"Statemint",description:"Statemint and its features",slug:"../../learn-statemint"}},d={},p=[{value:"Creating Assets on Statemint",id:"creating-assets-on-statemint",level:2},{value:"Transferring Assets on Statemint",id:"transferring-assets-on-statemint",level:2}],m={toc:p};function h(t){var e=t.components,l=(0,s.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Statemint is a generic assets parachain which provides functionality for deploying and transferring\nassets \u2014 both Fungible and Non-Fungible Tokens (NFTs). It is a common good parachain on Polkadot\n(not to be confused with ",(0,o.kt)("a",{parentName:"p",href:"https://guide.kusama.network/docs/kusama-statemine/"},"Statemine"),", which is\na parachain on Kusama). The native token of Statemint is DOT. The Existential Deposit (ED), transfer fees,\nand the deposits for proxy/multisig operations on Statemint are about 1/10th of the values on the Relay chain.\nFor example, the Existential Deposit of a Statemint account is ",(0,o.kt)(i.Z,{network:"statemint",path:"consts.balances.existentialDeposit",defaultValue:1e9,filter:"humanReadable",mdxType:"RPC"}),",\nwhen compared to ",(0,o.kt)(i.Z,{network:"polkadot",path:"consts.balances.existentialDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),", on Polkadot.\nApart from the core protocol token DOT, the assets held on Statemint can be broadly categorized as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assets backed by an on-chain protocol\u2019s utility"),(0,o.kt)("li",{parentName:"ul"},"Assets with off-chain backing"),(0,o.kt)("li",{parentName:"ul"},"Assets without any backing")),(0,o.kt)("h2",{id:"creating-assets-on-statemint"},"Creating Assets on Statemint"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before minting assets on Statemint, we recommend that you try out this tutorial on Westmint, which\nis a parachain on Westend. The WND tokens (Westies) are free and are available through a\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-westies"},"faucet"),".")),(0,o.kt)("p",null,"To create an asset on Statemint, you would need a deposit of ",(0,o.kt)(i.Z,{network:"statemint",path:"consts.assets.assetDeposit",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"\nand around ",(0,o.kt)(i.Z,{network:"statemint",path:"consts.assets.metadataDepositBase",defaultValue:20068e5,filter:"humanReadable",mdxType:"RPC"})," for the metadata\n. Before you create an asset on Statemint, ensure that your Statemint account balance is a bit more\nthan the sum of those two deposits, which should seamlessly account for the required deposits and transaction fees. You can\nsend DOT from a Polkadot account to a Statemint account using the teleport functionality. For\ninstructions on teleporting DOT, check this ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-teleport"},"tutorial on Teleports"),"."),(0,o.kt)("p",null,"Assuming you have the required DOT balance on your Statemint account, the following instructions\nshould let you successfully create an asset on Statemint"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access Statemint through Polkdot-JS Apps UI."),(0,o.kt)("li",{parentName:"ul"},"Navigate to Network > Assets.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Navigate to Assets page",src:a(91182).Z,width:"1222",height:"380"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the create button and you will be presented with a pop-up window. Choose the creator\naccount, name of the asset to be displayed on Statemint, the asset's symbol, number of decimals\nfor the asset, the minimum balance required to hold this asset on a Statemint account and the most\nimportant field of your asset - the unique asset ID. The UI would not let you enter an ID that has\nalready been taken. After all the details are entered, click on the next button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Asset Metadata",src:a(28523).Z,width:"1510",height:"798"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose the admin, issuer and the freezer accounts for your asset and click on the create button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Asset managing accounts",src:a(98600).Z,width:"1518",height:"510"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction. (If you like to verify the transaction details before signing,\nyou can click on the dropdown button pointed by the arrow in the snapshot below)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign asset creating transaction",src:a(59416).Z,width:"1520",height:"610"})),(0,o.kt)("p",null,"If the transaction is successful, you should see the asset and its details displayed in the\nNetwork > Assets page on Statemint."),(0,o.kt)("h2",{id:"transferring-assets-on-statemint"},"Transferring Assets on Statemint"),(0,o.kt)("admonition",{title:"Beware of scams",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Due to the permissionless nature of Statemint, anyone can create an asset with any name and symbol.\nThe most important attribute of an asset is the asset ID. There could be multiple assets with the\nsame name and symbol, but they cannot have the same asset ID.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The assets can be Sufficient or Non-Sufficient. To hold a Non-Sufficient asset, the Statemint\naccount needs to exist on-chain. This is different from Ethereum where a non-existent account can\nhold ERC-20 tokens. Ensure that the receiver account has at least 0.1 DOT which is the Existential\nDeposit for a Statemint account. Although, there are a few exceptions to this - If an asset is\nSufficient or someone has placed a deposit for that account to hold the asset, the Existential\nDeposit in DOT on the receiver account is not needed.")),(0,o.kt)("p",null,"To hold, send or receive most of the assets on Statemint (which are Non-Suffcient), the accounts\nneed to have a minimum balance of 0.1 DOT (The Existential Deposit on Statemint). You can send DOT\nfrom a Polkadot account to a Statemint account using the teleport functionality. For instructions on\nteleporting DOT, check this ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-teleport"},"tutorial on Teleports"),". The balance transfers of DOT\non Statemint are similar to the balance transfers DOT on Polkadot and can be done on the accounts\npage on Polkadot-JS Apps UI."),(0,o.kt)("p",null,"In this tutorial, transfer of JOEs (Asset ID: 8, Symbol: JOE) is demonstrated."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access Statemint through Polkdot-JS Apps UI."),(0,o.kt)("li",{parentName:"ul"},"Navigate to Network > Assets and click on the Balances tab"),(0,o.kt)("li",{parentName:"ul"},"Select the asset to transfer from the drop-down (The assets are sorted based on their IDs). If you\nhave accounts with the selected asset, they will be displayed.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Finding the asset",src:a(41958).Z,width:"1844",height:"408"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the send button"),(0,o.kt)("li",{parentName:"ul"},"Enter the receiver address and the amount to transfer.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Asset transfer transaction",src:a(39802).Z,width:"1516",height:"674"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign asset creating transaction",src:a(40993).Z,width:"1516",height:"592"})),(0,o.kt)("p",null,"If the transaction is successful, the assets are transferred to the receiver account."))}h.isMDXComponent=!0},91182:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/Statemint-asset-0-c5f6c1142338248879ebbf478c15da9f.png"},28523:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/Statemint-asset-1-6f406281abdca9f5c2941ebd4d9479fd.png"},98600:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/Statemint-asset-2-2fd6118841d0c4e037d5f51c6b1010e1.png"},59416:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/Statemint-asset-3-3952e84a1b7c80239e8fb1f907af2583.png"},41958:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/Statemint-asset-transfer-1-7c5f1a4aca8065abd4f1a4d236ac6608.png"},39802:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/Statemint-asset-transfer-2-53544e89f9bdda9d05ec85d7f7d2a684.png"},40993:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/Statemint-asset-transfer-3-47efc6342359c1954b56dab347df9738.png"},95856:()=>{},46601:()=>{}}]);