"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3091],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(o),h=r,g=p["".concat(d,".").concat(h)]||p[h]||u[h]||a;return o?n.createElement(g,i(i({ref:t},l),{},{components:o})):n.createElement(g,i({ref:t},l))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},74789:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],s={id:"learn-guides-ledger",title:"Polkadot-JS Guides for Ledger Devices",sidebar_label:"Ledger",description:"Polkadot-JS Guides for Ledger Devices.",keywords:["ledger","polkadot-js"],slug:"../learn-guides-ledger"},d=void 0,c={unversionedId:"learn/learn-guides-ledger",id:"learn/learn-guides-ledger",title:"Polkadot-JS Guides for Ledger Devices",description:"Polkadot-JS Guides for Ledger Devices.",source:"@site/../docs/learn/learn-guides-ledger.md",sourceDirName:"learn",slug:"/learn-guides-ledger",permalink:"/docs/learn-guides-ledger",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1699519944,formattedLastUpdatedAt:"Nov 9, 2023",frontMatter:{id:"learn-guides-ledger",title:"Polkadot-JS Guides for Ledger Devices",sidebar_label:"Ledger",description:"Polkadot-JS Guides for Ledger Devices.",keywords:["ledger","polkadot-js"],slug:"../learn-guides-ledger"}},l={},p=[{value:"Loading Your Account",id:"loading-your-account",level:2},{value:"Derivation paths",id:"derivation-paths",level:3},{value:"Connecting your ledger device",id:"connecting-your-ledger-device",level:3},{value:"Confirming the Address on your Device",id:"confirming-the-address-on-your-device",level:2},{value:"Checking the Balance of Your Account",id:"checking-the-balance-of-your-account",level:2},{value:"Sending a Transfer",id:"sending-a-transfer",level:2},{value:"Receiving a Transfer",id:"receiving-a-transfer",level:2},{value:"Staking",id:"staking",level:2},{value:"Removing Expired Democracy Locks",id:"removing-expired-democracy-locks",level:2}],u={toc:p},h="wrapper";function g(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)(h,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"loading-your-account"},"Loading Your Account"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Ledger Live should be off while using Ledger with Polkadot-JS UI as it can interfere with normal\noperation.")),(0,a.kt)("p",null,"You can import your Ledger account to ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot Extension")," or to\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),". For instructions on how to import\nLedger accounts to the Polkadot Extension read through\n",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000175387-how-to-add-your-ledger-through-the-polkadot-extension"},"this support article"),",\nwhile if you want to import Ledger accounts to the Polkadot-JS UI you can consult\n",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170812-how-to-add-ledger-account-through-the-polkadot-js-ui"},"this other article"),"."),(0,a.kt)("h3",{id:"derivation-paths"},"Derivation paths"),(0,a.kt)("p",null,"When adding a Ledger account using the extension or the UI, you will be asked to select an\n",(0,a.kt)("inlineCode",{parentName:"p"},"account type")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"account index"),". The first lets you select an account, while the second lets\nyou pick a derivation path from that account - think of it like a formula from which child accounts\nare generated. When you are creating a\nKusama ledger account for the first time on\nLedger Live with name ","",(0,a.kt)("inlineCode",{parentName:"p"},"Kusama 1"),", this\ncan be added to Polkadot-JS using the 0/0 derivation path (i.e. account type = 0 and account index =\n0). If you add a second account called\n","",(0,a.kt)("inlineCode",{parentName:"p"},"Kusama 2"),", this will correspond to the\n1/0 derivation path, and so on. We thus have multiple parent accounts that can be viewed and used in\nboth Ledger Live and Polkadot-JS. Additionally, we can use Polkadot-JS UI to create multiple\nchildren accounts from each parent account. For example,\n","",(0,a.kt)("inlineCode",{parentName:"p"},"Kusama 1")," with 0/0 derivation path can\nhave child 0/1, 0/2, etc. that can be used within the UI. However, such children accounts cannot be\nused in Ledger Live, as it only scans through the parent accounts. So, remember that the balances on\nthe children accounts cannot be viewed, and you will not be able to transact with those accounts on\nLedger Live."),(0,a.kt)("h3",{id:"connecting-your-ledger-device"},"Connecting your ledger device"),(0,a.kt)("p",null,"While using a ledger device to sign transactions, depending on your browser and its security\nsettings, you might need to confirm the USB connection through a popup like the one below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Display the device connection popup",src:o(57302).Z,width:"468",height:"461"})),(0,a.kt)("p",null,'If you are adding your Ledger Nano for the first time, click on the "Unknown device" line and the\n"Connect" button will become available.'),(0,a.kt)("admonition",{title:"Signature error message",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you have already connected your device, but an error message appears before signing a\ntransaction, make sure you have opened the\nKusama application on your Ledger Nano\ndevice. Visit\n",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181994"},"this support page")," for\nmore information about signing transactions using your ledger.")),(0,a.kt)("h2",{id:"confirming-the-address-on-your-device"},"Confirming the Address on your Device"),(0,a.kt)("p",null,"To display your Kusama ledger account\naddress on your Ledger Nano, you can follow the guidelines on\n",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181854-how-to-confirm-your-account-address-on-your-ledger-device"},"this support article"),".\nHere you can scroll through and make sure the address matches what is displayed on\n",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),"."),(0,a.kt)("h2",{id:"checking-the-balance-of-your-account"},"Checking the Balance of Your Account"),(0,a.kt)("p",null,"There are a few methods to check the balance of your account. Check out\n",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000169332-where-can-i-see-the-balance-of-my-account-"},"this support article"),"\nfor information."),(0,a.kt)("h2",{id:"sending-a-transfer"},"Sending a Transfer"),(0,a.kt)("p",null,"General instructions to send a transfer can be found on\n",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170304-how-to-send-transfer-funds-out-of-your-dot-account-on-the-polkadot-js-ui"},"this support page"),".\nTo sign transactions with your Ledger nano check\n",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181994"},"this support article"),"."),(0,a.kt)("h2",{id:"receiving-a-transfer"},"Receiving a Transfer"),(0,a.kt)("p",null,"To receive a transfer on the accounts stored on your Ledger device, you must provide the sender\n(i.e. the payer) with your address. To do so, follow the instructions on\n",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181866-how-to-receive-dot-to-my-account-on-polkadot-js-ui"},"this support page"),"."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Before giving anyone your address, ensure it matches what's on the Ledger by\n",(0,a.kt)("a",{parentName:"p",href:"#confirming-the-address-on-your-device"},"confirming the address on your device"),". Some malware will\nintercept clicks and clipboard requests and can change your copied value in-flight, so being extra\nvigilant around copy-paste operations makes sense.")),(0,a.kt)("h2",{id:"staking"},"Staking"),(0,a.kt)("p",null,'For staking using Ledger devices, check the section "How to stake using your Ledger" on\n',(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000168057-how-do-i-stake-nominate-on-polkadot-"},"this support article"),"."),(0,a.kt)("h2",{id:"removing-expired-democracy-locks"},"Removing Expired Democracy Locks"),(0,a.kt)("p",null,"Check out\n",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181870-how-to-remove-expired-democracy-locks"},"this support page"),"\nthe learn how to remove democracy locks after the end of a Governance referendum."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please be advised"),": Despite the Polkadot ledger application being compatible with both the Ledger\nNano S and the Ledger Nano X, none of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy"},"Democracy"),"\nextrinsics are available in the light version. The following\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot"},"repository by Zondax")," lists the currently supported\nDemocracy extrinsics on the full ledger."))}g.isMDXComponent=!0},57302:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/query-device-d7d9e7e7d28a34a343c59094db864a1a.png"}}]);