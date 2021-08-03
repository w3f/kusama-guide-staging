(self.webpackChunk=self.webpackChunk||[]).push([[7476],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6654:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>u,toc:()=>c,default:()=>d});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o=["components"],s={id:"learn-registrar",title:"Using W3F Registrar",sidebar_label:"How to use W3F Registrar"},l=void 0,u={unversionedId:"learn-registrar",id:"learn-registrar",isDocsHomePage:!1,title:"Using W3F Registrar",description:"An on-chain identity is a good way to build up your reputation and let the community know more about",source:"@site/../docs/learn-registrar.md",sourceDirName:".",slug:"/learn-registrar",permalink:"/zh-CN/docs/learn-registrar",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-registrar.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1628005357,formattedLastUpdatedAt:"2021/8/3",frontMatter:{id:"learn-registrar",title:"Using W3F Registrar",sidebar_label:"How to use W3F Registrar"}},c=[{value:"Setting an On-chain Identity",id:"setting-an-on-chain-identity",children:[{value:"Filling out information",id:"filling-out-information",children:[]},{value:"Invoke transaction to set identity",id:"invoke-transaction-to-set-identity",children:[]}]},{value:"Request Judgement",id:"request-judgement",children:[]},{value:"Element Verification",id:"element-verification",children:[]},{value:"Email Verification",id:"email-verification",children:[]},{value:"Twitter Verification",id:"twitter-verification",children:[]}],p={toc:c};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An on-chain identity is a good way to build up your reputation and let the community know more about\nyou if you plan on running a validator or being a councilor. Web3 Foundation provides a registrar\nservice in the Kusama and Polkadot networks that only charges a small fee (0.04 KSM) on Kusama, and\nno fees on Polkadot (although there may be a small fee in the future). However, you will of course\nneed to reserve some DOT in your account while you have an identity, no matter which registrar you\nuse. For details on the amount necessary to reserve, as well as the identity system as a whole, see\nthe ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-identity"},"identity")," page."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": The registrar bot will not ask you to send any DOT, and never expose your private keys\nto anyone!")),(0,r.kt)("p",null,"If you have provided ",(0,r.kt)("inlineCode",{parentName:"p"},"display name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"twitter"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"element name (previously called Riot)"),"\nwhen setting an on-chain identity, these will be required to verify one by one by signing a\nchallenge message. Be aware that the ",(0,r.kt)("inlineCode",{parentName:"p"},"display name")," cannot be too similar to others that have been\nverified already. There is no need to set all of the fields when using the service. You are free to\nset whichever field or fields that you like."),(0,r.kt)("p",null,"Free feel to join the ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/community#polkadot"},"Polkadot's community")," to ask questions if there is\nanything unclear."),(0,r.kt)("h2",{id:"setting-an-on-chain-identity"},"Setting an On-chain Identity"),(0,r.kt)("h3",{id:"filling-out-information"},"Filling out information"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": The W3F Registrar currently ",(0,r.kt)("strong",{parentName:"p"},"does not")," support KYC or web verification. Make sure to\nleave it blank when you fill in your identity information.")),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts"),' page in Polkadot-JS Apps. The easiest way\nto add the built-in fields is to click the vertical three dots next to one\'s account and select "Set\non-chain identity".'),(0,r.kt)("p",null,"A popup will appear, offering the default fields."),(0,r.kt)("p",null,"Currently, the registrar ",(0,r.kt)("strong",{parentName:"p"},"only supports the following fields"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Display Name"),(0,r.kt)("li",{parentName:"ul"},"Email"),(0,r.kt)("li",{parentName:"ul"},"Twitter"),(0,r.kt)("li",{parentName:"ul"},"Element (formerly known as Riot)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"registrar",src:n(71133).Z})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If you try to register the other fields, such as:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"registrar",src:n(66957).Z})),(0,r.kt)("p",null,"You will eventually be asked to update your information, as these are not yet supported by the\nregistrar."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"registrar",src:n(418).Z})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"invoke-transaction-to-set-identity"},"Invoke transaction to set identity"),(0,r.kt)("p",null,"Once you have filled in the information you would like to store on-chain, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Set Identity")," to\nsubmit the transaction."),(0,r.kt)("p",null,"Now you have set the identity information on-chain, but that is not verified yet, so you should see\na little grey icon beside your name."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"registrar",src:n(46700).Z})),(0,r.kt)("p",null,"It is the time to interact with the W3F's verification bot by submitting the judgment request to the\nW3F's registrar."),(0,r.kt)("h2",{id:"request-judgement"},"Request Judgement"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"registrar",src:n(77628).Z})),(0,r.kt)("p",null,"Go to\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/extrinsics"},"Developer->Extrinics"),"\nand select your account to submit the ",(0,r.kt)("inlineCode",{parentName:"p"},"identity -> requestJudgement(reg_index, max_fee)"),"\ntransaction. This will request the registrar to validate the information you set on-chain earlier."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"reg_index")," is the position of the registrar. For W3F, use 0."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"max_fee")," is the amount of DOT or KSM to pay the registrar. For Kusama use ",(0,r.kt)("strong",{parentName:"p"},"0.04 KSM")," and for\nPolkadot use ",(0,r.kt)("strong",{parentName:"p"},"0 DOT"),"."),(0,r.kt)("p",null,"Note that in the future, a fee may be charged for the Polkadot registrar."),(0,r.kt)("h2",{id:"element-verification"},"Element Verification"),(0,r.kt)("p",null,"Since we provided the Element, Twitter, and Email information in this example, we would start to\nreceive the verification requests from those platforms. As for Element, an invitation will be sent\nby the bot named ",(0,r.kt)("inlineCode",{parentName:"p"},"W3F Registrar Verification"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The handle of the W3F bot is called @registrar:web3.foundation. If you are not sure whether\nthat is ours or not, ask in the Polkadot community chat first.")),(0,r.kt)("p",null,"Once you accept the invitation, you should see the following information."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"registrar",src:n(3188).Z})),(0,r.kt)("p",null,"Then go to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/signing"},"Sign and Verify"),' under the Developer tab in the\nPolkadotJS and select your account, paste the "Challenge" data to the "sign the following data"\nfield and click "Sign message".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"registrar",src:n(15092).Z})),(0,r.kt)("p",null,'Copy the result of the "signature of supplied data" and paste it to the W3F Registrar Verification\nchat.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"registrar",src:n(42882).Z})),(0,r.kt)("p",null,"If the information is correct, you should see a message like the above image that indicates your\naddress has been verified. This proves you are the owner of the account."),(0,r.kt)("h2",{id:"email-verification"},"Email Verification"),(0,r.kt)("p",null,'Next, you should receive an email called "W3F Registrar Verification Service". Below is an example\nfor reference.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Note: Please double-check the sender is "',(0,r.kt)("a",{parentName:"p",href:"mailto:registrar@web3.foundation"},"registrar@web3.foundation"),'", not the others.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"registrar",src:n(6906).Z})),(0,r.kt)("p",null,'You would do what you did in the above again. Copy the "Challenge" data and go to\n',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/signing"},"Sign and Verify"),' under the Developer tab in the PolkadotJS\nand select your account, paste the "Challenge" data to the "sign the following data" field and click\n"Sign message"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"registrar",src:n(84768).Z})),(0,r.kt)("p",null,'And reply with your signed data only in the email. Then click "Send".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Do not add anything in the email except the signed data.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"registrar",src:n(47515).Z})),(0,r.kt)("p",null,"Wait 1 or 2 minutes. You should receive another email that shows your email has been verified\nsuccessfully."),(0,r.kt)("h2",{id:"twitter-verification"},"Twitter Verification"),(0,r.kt)("p",null,"Lastly, if you have provided a Twitter handle, you would have to follow\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/w3f_registrar"},"@w3f_registrar")," first."),(0,r.kt)("p",null,'After following the Registrar account on Twitter, you will need to send it a DM. A simple "hello"\nwill do the trick.'),(0,r.kt)("p",null,"After waiting for a few minutes you should receive a challenge similar to the previous two."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"registrar",src:n(51126).Z})),(0,r.kt)("p",null,'Again, just like how you did in the above. By using your account to sign the "Challenge" data that\nyou received on Twitter in the ',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/signing"},"Sign and Verify")," page."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"registrar",src:n(16551).Z})),(0,r.kt)("p",null,"Paste the signed data to the chat and you would receive the verification status after 1 to 2\nminutes."),(0,r.kt)("p",null,'If everything has been verified successfully, you will see that your account verification status has\nbeen marked as "reasonable" with a ',(0,r.kt)("strong",{parentName:"p"},"green tick icon")," on the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts")," page."),(0,r.kt)("p",null,'Congratulations! Your identity should now show as a green "verified" checkmark on Polkadot-JS Apps.'))}d.isMDXComponent=!0},71133:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-e83d8d3c06d120ce302dc604c6c6eb5f.jpg"},84768:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/10-23055969b99ca54e7f248db85f81c3ce.jpg"},47515:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/11-d95d1a1b87f21b120626ecb56bbbc79f.jpg"},51126:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/12-3f84029e6606cc6013e2e181db2ce8a9.jpg"},16551:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/13-6c08bfb785240f36f6b1e20750a907a5.jpg"},66957:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-fff86478c2e9ec1303c638cca36232a0.jpg"},46700:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-fd16182283a169451a33e001ef61a49b.jpg"},77628:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-7f1b210354a50d6a4421b140856aebd6.jpg"},3188:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/5-54ffe81b8b5868e85fe52cbb88a0a54d.jpg"},418:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/6-c128537aebb2c6fe91777b5196628c76.jpg"},15092:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/7-9555ca621ffe943cb3a91d56e0545b0a.jpg"},42882:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/8-843c97d84cd4bfbbcf81ba879d55e2a7.jpg"},6906:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/9-3636d107aa8e0a07297e51e5a60c1f64.jpg"}}]);