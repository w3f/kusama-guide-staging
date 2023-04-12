"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9806],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(d,i(i({ref:t},h),{},{components:a})):n.createElement(d,i({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"learn-comparisons",title:"Polkadot Comparisons",sidebar_label:"Other comparisons",description:"Learn how Polkadot compares to Ethereum 2, Cosmos, and other chains.",keywords:["comparisons","polkadot","blockchain"],slug:"../learn-comparisons"},c=void 0,l={unversionedId:"learn/learn-comparisons",id:"learn/learn-comparisons",title:"Polkadot Comparisons",description:"Learn how Polkadot compares to Ethereum 2, Cosmos, and other chains.",source:"@site/../docs/learn/learn-comparisons.md",sourceDirName:"learn",slug:"/learn-comparisons",permalink:"/docs/learn-comparisons",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1679996989,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{id:"learn-comparisons",title:"Polkadot Comparisons",sidebar_label:"Other comparisons",description:"Learn how Polkadot compares to Ethereum 2, Cosmos, and other chains.",keywords:["comparisons","polkadot","blockchain"],slug:"../learn-comparisons"}},h={},p=[{value:"Ethereum 1.x",id:"ethereum-1x",level:2},{value:"Binance Smart Chain",id:"binance-smart-chain",level:2}],m={toc:p},u="wrapper";function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kusama is a blockchain technology but makes\nsome innovations that sets it apart from other popular chains."),(0,o.kt)("admonition",{title:"In-depth Comparisons for multi-chain ecosystems",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"See the in-depth comparisons for ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-comparisons-ethereum-2"},"Ethereum 2.0"),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-comparisons-cosmos"},"Cosmos")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-comparisons-avalanche"},"Avalanche"),".")),(0,o.kt)("h2",{id:"ethereum-1x"},"Ethereum 1.x"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org"},"Ethereum")," is a smart contract blockchain that allows for general computation\nto be deployed on-chain and operated across the p2p network. Ethereum 1.x refers to the current\nEthereum release and the immediately planned future upgrades."),(0,o.kt)("p",null,"The difference between Ethereum 1.x and\nKusama is quite large. Ethereum is a single\nchain that allows developers to extend its functionality through the deployment of blobs of code\nonto the chain (called smart contracts).\nKusama, as described in the whitepaper, is a\nfully extensible and scalable blockchain network that provides security and interoperability through\nshared state."),(0,o.kt)("p",null,"In practical terms, this means that the layer of abstraction between these two projects is\nremarkably different for developers. In Ethereum, developers write smart contracts that all execute\non a single virtual machine, called the Ethereum Virtual Machine (EVM). In\nKusama, however, developers write their\nlogic into individual blockchains, where the interface is part of the state transition function of\nthe blockchain itself. Kusama will also\nsupport smart contract blockchains for Wasm and EVM to provide compatibility with existing\ncontracts, but will not have smart contract functionality on its core chain, the Relay Chain."),(0,o.kt)("p",null,"As such, Kusama is a possible augmentation\nand scaling method for Ethereum 1.x, rather than competition."),(0,o.kt)("h2",{id:"binance-smart-chain"},"Binance Smart Chain"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.binance.com"},"Binance Chain")," is a Proof of Stake Authority (PoSA) blockchain used to\nexchange digital assets on Binance DEX. Binance Smart Chain is an EVM-compatible smart contract\nchain bridged to Binance Chain. Together, they form the Binance Dual Chain System. Binance Smart\nChain is also a Proof of Stake Authority chain and allows users to create smart contracts and dapps."),(0,o.kt)("p",null,"Both chains are built with Cosmos SDK and therefore are a part of the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-comparisons-cosmos"},"Cosmos")," ecosystem. Due to specifics of the Cosmos architecture,\ninteroperability of Binance Smart Chain is based on bridges. This means all validators of both\nchains are also bridge operators, therefore the security of the system relies on trusting\nvalidators. At the moment, there are 21 Binance Smart Chain validator nodes."),(0,o.kt)("p",null,"Kusama has an entirely different purpose, as\nit was built to connect and secure unique blockchains. It is a protocol on which single blockchains\n(such as Binance Smart Chain) could be built and benefit from shared security, interoperability and\nscalability. Interoperability within Kusama\nis based on pooled security on Kusama, and\nthe security of the entire Kusama network,\nand has much stronger economic security."),(0,o.kt)("p",null,"Scalability based on bridges relies on each bridged chain finding its own set of validators,\ntherefore duplicate resources are required. Scalability on\nKusama is based on the security of the Relay\nChain, and as the number of validators in the active set on\nKusama are increased, more parachains can be\nsupported."))}d.isMDXComponent=!0}}]);