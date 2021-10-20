(self.webpackChunk=self.webpackChunk||[]).push([[1506],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||h[d]||a;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38948:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>p,toc:()=>c,default:()=>u});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),s=["components"],l={id:"learn-teleport",title:"Teleporting Assets To Other Parachains",sidebar_label:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",slug:"../learn-teleport"},i=void 0,p={unversionedId:"learn/learn-teleport",id:"learn/learn-teleport",isDocsHomePage:!1,title:"Teleporting Assets To Other Parachains",description:"Steps on how to teleport assets across parachains.",source:"@site/../docs/learn/learn-teleport.md",sourceDirName:"learn",slug:"/learn-teleport",permalink:"/zh-CN/docs/learn-teleport",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-teleport.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1631864714,formattedLastUpdatedAt:"2021/9/17",frontMatter:{id:"learn-teleport",title:"Teleporting Assets To Other Parachains",sidebar_label:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",slug:"../learn-teleport"}},c=[{value:"How to Teleport",id:"how-to-teleport",children:[],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2}],h={toc:c};function u(e){var t=e.components,l=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the main properties that Polkadot and Kusama bring to the ecosystems is decentralied\nblockchain interoperability. This interoperability allows for asset teleportation: the process of\nmoving assets, such as coins, tokens, or NTFs, between chains (parachains) to use them as you would\nany other asset native to that chain. Interoperability is possible through ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-crosschain"},"XCM"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-spree"},"SPREE modules"),", which together ensure that assets are not lost or duplicated across multiple chain."),(0,a.kt)("h2",{id:"how-to-teleport"},"How to Teleport"),(0,a.kt)("p",null,"Teleportation can be done through the ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps")," interface or through the\n",(0,a.kt)("inlineCode",{parentName:"p"},"xcmPallet.teleportAssets()")," extrinsic. In the following example, we will be using the PolkadotJS\ninterface."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps")," and connect to the chain with the tokens you want to teleport."),(0,a.kt)("li",{parentName:"ol"},"Navigate to \"Accounts > Teleport\". This opens the 'teleport assets' interface:\n",(0,a.kt)("img",{alt:"transfer",src:n(2574).Z})),(0,a.kt)("li",{parentName:"ol"},"Fill out the transaction:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},'"send from account" - Select the account with the source tokens.'),(0,a.kt)("li",{parentName:"ol"},'"destination chain" - Select the parachain you want to send the assets to.'),(0,a.kt)("li",{parentName:"ol"},'"send to address" - Select the account you want to be in control of the coins on the\ndestination chain.'),(0,a.kt)("li",{parentName:"ol"},'"amount" - Insert the number of tokens you want to teleport'))),(0,a.kt)("li",{parentName:"ol"},'After revewing the transaction information and fees, click the "Teleport" button.'),(0,a.kt)("li",{parentName:"ol"},'Click "Sign and Submit".'),(0,a.kt)("li",{parentName:"ol"},'Enter your password, and click "Sign the transaction".')),(0,a.kt)("p",null,"The transaction will be signed and broadcasted, and the tokens will appear on the destination chain\nshortly."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,'If you do not see "Accounts > Teleport" in ',(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps"),", the source chain that you have\nselected does not support teleportation yet. As of June 2021, unsupported chains include Polkadot\nmainnet, Rococo testnet, and their respective parachains."))}u.isMDXComponent=!0},2574:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/teleport_interface-b604e528f038cc2b80c4f23e8036a025.png"}}]);