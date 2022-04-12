"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2754],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(a),p=n,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||r;return a?o.createElement(m,c(c({ref:t},u),{},{components:a})):o.createElement(m,c({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<r;l++)c[l]=a[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},17134:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>l,toc:()=>u,default:()=>h});var o=a(87462),n=a(63366),r=(a(67294),a(3905)),c=["components"],i={id:"kusama-social-recovery",title:"Social Recovery",sidebar_label:"Account Recovery",description:"Steps on how to perform account recovery on Kusama.",keywords:["recovery","social recovery","account","kusama"],slug:"../../kusama-social-recovery"},s=void 0,l={unversionedId:"general/kusama/kusama-social-recovery",id:"general/kusama/kusama-social-recovery",title:"Social Recovery",description:"Steps on how to perform account recovery on Kusama.",source:"@site/../docs/general/kusama/kusama-social-recovery.md",sourceDirName:"general/kusama",slug:"/kusama-social-recovery",permalink:"/docs/kusama-social-recovery",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-social-recovery.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649779476,formattedLastUpdatedAt:"4/12/2022",frontMatter:{id:"kusama-social-recovery",title:"Social Recovery",sidebar_label:"Account Recovery",description:"Steps on how to perform account recovery on Kusama.",keywords:["recovery","social recovery","account","kusama"],slug:"../../kusama-social-recovery"},sidebar:"docs",previous:{title:"Account Generation",permalink:"/docs/learn-account-generation"},next:{title:"Proxy Accounts",permalink:"/docs/learn-proxies"}},u=[{value:"Create a Recoverable Account",id:"create-a-recoverable-account",children:[],level:2},{value:"Recover your Account",id:"recover-your-account",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],d={toc:u};function h(e){var t=e.components,i=(0,n.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Managing an account is not an easy task. Many people have lost their private keys due to improper\nkey management over the past few years. Kusama provides a method that allows users to recover their\naccounts by setting up a social recovery. It is an M-of-N recovery tool based on the\nmulti-signature wallet to get back access to your lost account."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"There is no way to get back your private key by using this method")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is just a way of performing transactions on behalf of the lost account, so you can\nthink of it as a proxy instead."))),(0,r.kt)("p",null,"In this guide, you will learn how to create a recoverable account, how to recover it, and what you\nneed to be aware of when using it."),(0,r.kt)("h2",{id:"create-a-recoverable-account"},"Create a Recoverable Account"),(0,r.kt)("p",null,"You will use your existing account to call ",(0,r.kt)("inlineCode",{parentName:"p"},"createRecovery")," to select a list of accounts you\ntrust to help you recover the account when you lose the private key. To create a recoverable\naccount, you will be required to set a ",(0,r.kt)("inlineCode",{parentName:"p"},"threshold")," that is the number of your friends who need to\napprove the recovery process to recover your account."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(69464).Z,width:"1700",height:"1070"})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Account Recovery")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are recovering an account, ensure that your network is set to Kusama.\nYou can do this by selecting the network from the top right corner in the Polkadot-JS UI."))),(0,r.kt)("p",null,"First, see the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts")," page on Polkadot-JS Apps\nthat shows all available accounts on your browser's local storage and Polkadot-JS extension.\nTo create a recoverable account, make sure you have some KSM to pay the transaction fees.\nYou You will also need some for the reserve required by the account recovery setup."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusama accounts page",src:a(33814).Z,width:"2870",height:"1638"})),(0,r.kt)("p",null,'Then, click the menu beside the "send" button, and choose "Make recoverable".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusama accounts make recoverable",src:a(30063).Z,width:"2878",height:"1022"})),(0,r.kt)("p",null,"Now you need to provide the following information:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"trusted social recovery helpers")," - A list of accounts that you trust. These can help you if you\nlose the private key. Since setting up a recoverable account requires you to lock up KSM, ensure\nyour account has enough transferable balance to cover it. As you select additional recovery helpers,\nmore KSM will be required."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"recovery threshold")," - The number of friends required to submit a ",(0,r.kt)("inlineCode",{parentName:"p"},"vouchRecovery")," transaction in\norder to recover the account."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"1 is the minimum, but it is not recommended to set a small number. If you set 1, that means\nany of your recovery helpers would be able to recover your account."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"recovery block delay")," - Once the threshold is reached, you will need to wait until the block delay\nhas passed until you can claim the recovery. This is a protection mechanism to allow the account\nowner to have enough time to check and react in case someone pretends to be you and initiates a\nrecovery process."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Setting the block delay to be a little longer would be better since even if an attacker\nacquired enough signatures to recover your account, they would still have to wait until the block\ndelay is passed to control your account."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusama accounts page2",src:a(32045).Z,width:"2194",height:"1232"})),(0,r.kt)("h2",{id:"recover-your-account"},"Recover your Account"),(0,r.kt)("p",null,"This section would be showing you how to initiate a recovery process and get back the balance that\nheld in the lost account to the new account."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(58984).Z,width:"2675",height:"1705"})),(0,r.kt)("p",null,"The above diagram shows the whole process of recovering an account."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ensure that your new account has enough KSM to pay for the transaction fees and the amount\nthat is used for reserve when making a recovery."))),(0,r.kt)("p",null,'Navigate to the menu beside the send button in the row of your new account and click\nthe "Initiate recover for another" option.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusama accounts initial recoverable",src:a(30063).Z,width:"2878",height:"1022"})),(0,r.kt)("p",null,'Then input the address you would like to recover in the "recover this account" field and click\n"Start recovery".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusama accounts initial recoverable2",src:a(12913).Z,width:"1832",height:"544"})),(0,r.kt)("p",null,"Once the transaction went through, some KSM will be locked to prevent malicious behavior."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(93091).Z,width:"2802",height:"180"})),(0,r.kt)("p",null,'Now call your friends that you have set in the first section, but heading over to "Developer" >\n"Extrinsics" and using the recovery pallet. They are required to submit a ',(0,r.kt)("inlineCode",{parentName:"p"},"vouchRecovery"),"\ntransaction."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(22268).Z,width:"2874",height:"890"})),(0,r.kt)("p",null,"Once the threshold is reached and the block delay is passed, use the new account to submit a\n",(0,r.kt)("inlineCode",{parentName:"p"},"claimRecovery")," transaction that would set a proxy on behalf of your lost account. It means that you\ncan still indirectly use the lost account to interact with the network."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(49848).Z,width:"2886",height:"850"})),(0,r.kt)("p",null,'To see the proxy information, use your new account by calling the "recovery->proxy(Accountid)"\nfunction at the ',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Chain state")," page. It should point to\nyour lost account."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(38658).Z,width:"2868",height:"670"})),(0,r.kt)("p",null,'Next, in order to call the "closeRecovery" transaction, you can make use of the "asRecovered"\nfunction as your lost account to get the locked KSM.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(92340).Z,width:"2866",height:"1044"})),(0,r.kt)("p",null,'Once the transaction goes through, the reserved KSM from the "NEW-ACC" will have been moved to the\nlost account. This is a way of preventing someone from recovering other accounts maliciously.\nImagine if someone tried to initiate recovery on your account; you can do this to slash their\nlocked KSM.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(61184).Z,width:"2852",height:"380"})),(0,r.kt)("p",null,"Moving on, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"asRecovered")," function to submit the ",(0,r.kt)("inlineCode",{parentName:"p"},"removeRecovery")," transaction on behalf of\nthe lost account to release the reserved KSM from your lost account."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(85826).Z,width:"2864",height:"828"})),(0,r.kt)("p",null,"Now your account balance should be transferable."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(70824).Z,width:"2866",height:"324"})),(0,r.kt)("p",null,"Finally, transfer all of your available balance from the lost account to the new account."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(45862).Z,width:"2860",height:"1068"})),(0,r.kt)("p",null,"The recovery process is now complete and successful."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(16246).Z,width:"2892",height:"348"})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Using ",(0,r.kt)("inlineCode",{parentName:"h5"},"Root")," origin")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There is still one possible way to recover the account without going through the recovery\nprocess. That is by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Root")," origin. However, in order to use root permissions, you will\nneed to either go through the council or submit a public proposal. To learn more about governance,\nsee ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"here"),"."))),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/blob/master/frame/recovery/src/lib.rs"},"Substrate's Recovery Pallet")," -\nThe Rust implementation of the recovery pallet.")))}h.isMDXComponent=!0},12913:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/kusama_make_account_initial-3061c821ee7789052080f87088e04e91.png"},32045:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/kusama_make_account_recoverable-62d204d0f94bee69417a9eed0923a8ab.png"},30063:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/kusama_make_recoverable-cf8cc2b88a20470cc7b9b475fe74b2b4.png"},33814:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/kusama_social_recovery_accounts_page-9a2106084803cc8bb9c3d33251d9fda4.png"},92340:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/social-recovery-10-c5174d9c34444108a0f9b65c8709a088.png"},61184:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/social-recovery-11-8d65e3b3645c8d577a04ce5711a23da1.png"},85826:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/social-recovery-12-d6d627497f4bf3b1f4af8cd69c86ac33.png"},70824:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/social-recovery-13-48311acc0e472c4d1d8995fc58a1e661.png"},45862:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/social-recovery-14-b80cf0a40d80b3c845a23d0817f9634e.png"},16246:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/social-recovery-15-20dbcbcf49e1f513b798b1b05e01543c.png"},93091:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/social-recovery-6-474cafc1a1ef60b8cd79b4e48bef24e2.png"},22268:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/social-recovery-7-23c91290b58d407c23fc2ac389626e6a.png"},49848:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/social-recovery-8-8062fe4c4c20f3da45f1460b1cc3a5fa.png"},38658:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/social-recovery-9-c6a6920959523fadb5942449ccc17441.png"},69464:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/social-recovery-diag-1-7d7432fe88f494dfa884b1268204e77f.png"},58984:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/social-recovery-diag-2-872bb7e71e872580fb1be0d523775c3a.png"}}]);