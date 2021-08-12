(self.webpackChunk=self.webpackChunk||[]).push([[1668],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>h,kt:()=>u});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},h=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,f=d["".concat(i,".").concat(u)]||d[u]||p[u]||r;return t?n.createElement(f,c(c({ref:a},h),{},{components:t})):n.createElement(f,c({ref:a},h))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<r;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71863:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>l,toc:()=>h,default:()=>d});var n=t(22122),o=t(19756),r=(t(67294),t(3905)),c=["components"],s={id:"build-parachains-rococo",title:"Rococo Parachain Testnet",sidebar_label:"Rococo Parachain Test Network"},i=void 0,l={unversionedId:"build-parachains-rococo",id:"build-parachains-rococo",isDocsHomePage:!1,title:"Rococo Parachain Testnet",description:"Rococo is a Polkadot testnet built for testing",source:"@site/../docs/build-parachains-rococo.md",sourceDirName:".",slug:"/build-parachains-rococo",permalink:"/docs/build-parachains-rococo",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-parachains-rococo.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1628784913,formattedLastUpdatedAt:"8/12/2021",frontMatter:{id:"build-parachains-rococo",title:"Rococo Parachain Testnet",sidebar_label:"Rococo Parachain Test Network"}},h=[{value:"What Parachains are on Rococo Now?",id:"what-parachains-are-on-rococo-now",children:[]},{value:"Obtaining ROC",id:"obtaining-roc",children:[]},{value:"Build and Register a Rococo Parathread",id:"build-and-register-a-rococo-parathread",children:[]},{value:"How to connect to a Parachain",id:"how-to-connect-to-a-parachain",children:[]},{value:"How to make Cross Chain transfers",id:"how-to-make-cross-chain-transfers",children:[{value:"Downward Transfers",id:"downward-transfers",children:[]},{value:"Upward Transfers",id:"upward-transfers",children:[]},{value:"Lateral Transfers",id:"lateral-transfers",children:[]}]}],p={toc:h};function d(e){var a=e.components,s=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus#rococo-crown"},"Rococo")," is a Polkadot testnet built for testing\nparachains. Unlike other testnets, Rococo allows parachains to interact with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary##relay-chain"},"Relay Chain"),"\nrather than running in isolation. Rococo utilizes ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-cumulus"},"Cumulus")," and HRMP (Horizontal Relay-routed Message\nPassing), which is also known as ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-crosschain##xcmp-lite(hrmp)"},"XCMP-lite"),", in order to send transfers and messages\nbetween parachains and the Relay Chain."),(0,r.kt)("p",null,"Messages are sent to the Relay Chain -> then from the Relay Chain to the desired parachain. Rococo\ncurrently runs three test system parachains: Tick, Trick, and Track, as well as several externally developed\nparachains."),(0,r.kt)("h2",{id:"what-parachains-are-on-rococo-now"},"What Parachains are on Rococo Now?"),(0,r.kt)("p",null,"You can view the list of included parachains on\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/parachains"},"Polkadot-JS Apps"),",\nand a list of\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/parachains/proposals"},"proposed parachains"),"."),(0,r.kt)("h2",{id:"obtaining-roc"},"Obtaining ROC"),(0,r.kt)("p",null,"ROC is the native testnet token on the Rococo testnet, and are available in the\n",(0,r.kt)("a",{parentName:"p",href:"https://app.element.io/#/room/#rococo-faucet:matrix.org"},"Rococo Faucet")," channel on Matrix.\nTo receive ROC tokens, send the following command on the channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"!drip YOUR_ROCOCO_ADDRESS\n")),(0,r.kt)("h2",{id:"build-and-register-a-rococo-parathread"},"Build and Register a Rococo Parathread"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus#rococo"},"Cumulus")," is set of tools for writing Substrate-based\nparachains."),(0,r.kt)("p",null,"If you are interested in running and launching your own parathread or parachain, Parity Technologies\nhas created a ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/cumulus-workshop/"},"cumulus parachain workshop")," to show you how."),(0,r.kt)("p",null,"Get stuck or need support along the way? Join the\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#rococo:matrix.parity.io"},"Rococo matrix chat channel")," and connect with other\nbuilders there."),(0,r.kt)("h2",{id:"how-to-connect-to-a-parachain"},"How to connect to a Parachain"),(0,r.kt)("p",null,"If you would like to connect to a parachain via ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot-JS Apps"),',\nyou may do so by clicking on the network selection at the top-left hand corner of the navigation and\nselecting any parachain of choice. For the purpose of these following examples, we will be using the\nRococo testnet "Custom Node" underneath "Development", following the\n',(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/cumulus-workshop/"},"parachain workshop"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"parachains on polkadotjs",src:t(7052).Z})),(0,r.kt)("h2",{id:"how-to-make-cross-chain-transfers"},"How to make Cross Chain transfers"),(0,r.kt)("p",null,'To send a transfer between parachains, navigate to "Accounts" > "Transfer". From here, you\'ll need\nto select the parachain node that you are running. Next, enter in the amount that you\'d like to send\nto another parachain. Be sure to select the correct parachain you\'d like to send an amount to. Once\nyou\'ve hit the "Submit" button, you should see a green notification, indicating a successful\ntransfer.'),(0,r.kt)("h3",{id:"downward-transfers"},"Downward Transfers"),(0,r.kt)("p",null,"Downward transfers are when an account on the Relay Chain sends a transfer to their account on a\ndifferent parachain. This type of transfer uses a depository and mint model, meaning that when the\nDOT leave the sender's account on the Relay Chain and are transferred into an account on a\nparachain, the parachain mints a corresponding amount of tokens on the parachain."),(0,r.kt)("p",null,'For example, we can send tokens from Alice\'s account on the Relay Chain to her account on\nparachain 200. To do so, we will need to head to the "Network" > "Parachains" tab and click on the\n"Transfer to chain" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rococo downward transfer",src:t(7731).Z})),(0,r.kt)("p",null,"Notice here, that we can select which parachain to send the funds to, specify the amount to be sent,\nand add any comments or a memo for the transfer."),(0,r.kt)("h3",{id:"upward-transfers"},"Upward Transfers"),(0,r.kt)("p",null,"Upward transfers occur ",(0,r.kt)("em",{parentName:"p"},"from")," a parachain ",(0,r.kt)("em",{parentName:"p"},"to"),' an account on the Relay Chain. To proceed with this\nkind of transfer, we need to be connected to a parachain node on the network and be on the\n"Network" > "Parachains" tab. Click on the "Transfer to chain" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rococo upward transfer",src:t(83115).Z})),(0,r.kt)("p",null,"Note that the toggle should be set to off, ensuring that the funds go to the Relay Chain and not\nanother parachain."),(0,r.kt)("h3",{id:"lateral-transfers"},"Lateral Transfers"),(0,r.kt)("p",null,"Lateral transfers are only possible with at least two different registered parachains. In true\nXCMP, lateral transfers would allow for messages to be sent directly from one parachain to another.\nHowever, this is not yet implemented, so the Relay Chain is helping us deliver messages for the time\nbeing. Lateral transfers work through the depository model, which means that in order to transfer\ntokens from chain 200 to chain 300, tokens must already be owned by chain 200 deposited on\nchain 300. Lateral transfers are called HRMP, Horizontal Relay-Chain Message Passing."),(0,r.kt)("p",null,"Before we can actually send funds from one parachain to another, we must ensure that the chain's\naccount on the recipient chain has some funds in it. In this example, Alice will be sending some\nfunds from her account on parachain 200 to her account on parachain 300."),(0,r.kt)("p",null,"We can get that parachain account address, from our parachain 300's terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2020-08-26 14:46:34 Parachain Account: 5Ec4AhNv5ArwGxtngtW8qcVgzpCAu8nokvnh6vhtvvFkJtpq\n")),(0,r.kt)("p",null,"From Alice's account on the Relay Chain, she is able to send some amount to parachain 200's\ndepository."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rococo lateral transfer",src:t(92871).Z})),(0,r.kt)("p",null,"Alice is now able to send from her account on parachain 200 to her account on parachain 300."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rococo lateral transfer part 2",src:t(32671).Z})))}d.isMDXComponent=!0},7052:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/polkadotjs_network_parachains-7056d93de2ce994a07c23cd229de34e6.png"},7731:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-downward-transfer-b5c167bf833760e06130c7ffb91006bc.png"},92871:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-lateral-transfer-312054a2d9d0d676de02fb20a170ed64.png"},32671:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-lateral-transfer2-9d6fded610bdc51b7140adcae0c27be6.png"},83115:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-upward-transfer-d6b7d116c2a96a5a18cebe77b40620a7.png"}}]);