(self.webpackChunk=self.webpackChunk||[]).push([[2273],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>m,kt:()=>c});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=p(a),c=n,u=h["".concat(s,".").concat(c)]||h[c]||d[c]||r;return a?o.createElement(u,i(i({ref:t},m),{},{components:a})):o.createElement(u,i({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2912:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>m,default:()=>h});var o=a(22122),n=a(19756),r=(a(67294),a(3905)),i=["components"],l={id:"learn-implementations",title:"Polkadot Implementations",sidebar_label:"Polkadot Implementations"},s="Polkadot Implementations",p={unversionedId:"learn-implementations",id:"learn-implementations",isDocsHomePage:!1,title:"Polkadot Implementations",description:"Polkadot is the flagship protocol of the Web3 Foundation, and while Polkadot can be defined as",source:"@site/../docs/learn-implementations.md",sourceDirName:".",slug:"/learn-implementations",permalink:"/docs/learn-implementations",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-implementations.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1628521453,formattedLastUpdatedAt:"8/9/2021",frontMatter:{id:"learn-implementations",title:"Polkadot Implementations",sidebar_label:"Polkadot Implementations"}},m=[{value:"Parity Technologies: A Rustic Vision for Polkadot",id:"parity-technologies-a-rustic-vision-for-polkadot",children:[]},{value:"Alternative Implementations",id:"alternative-implementations",children:[{value:"ChainSafe Systems: Gossamer",id:"chainsafe-systems-gossamer",children:[]},{value:"SORAMITSU: Kagome",id:"soramitsu-kagome",children:[]},{value:"Polkadot-JS Project: Polkadot-JS",id:"polkadot-js-project-polkadot-js",children:[]},{value:"Other implementations that have received grants",id:"other-implementations-that-have-received-grants",children:[]}]}],d={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"polkadot-implementations"},"Polkadot Implementations"),(0,r.kt)("p",null,"Polkadot is the flagship protocol of the ",(0,r.kt)("a",{parentName:"p",href:"https://web3.foundation/"},"Web3 Foundation"),", and while Polkadot can be defined as\na protocol, a network, or, a type of infrastructure, it serves to be an ecosystem. For true\ndecentralization, there should be multiple implementations of Polkadot. Even being a ",(0,r.kt)("em",{parentName:"p"},"Layer 0")," protocol\nthat attempts to build an interconnected, interoperable and secure Web3 ecosystem, Polkadot is a complex\npiece of software, and its formal implementation depends on being built on top of a tech stack."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"There is a countless number of development that is happening in the Polkadot ecosystem, though, this\npage will focus on implementations of Polkadot's underlying infrastructure (i.e. runtime, host).")),(0,r.kt)("h2",{id:"parity-technologies-a-rustic-vision-for-polkadot"},"Parity Technologies: A ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/paritytech/polkadot"},"Rustic Vision for Polkadot")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.parity.io/"},"Parity Technologies")," is often in the spotlight for its core development of Polkadot, and while this\nis true, Parity Polkadot also serves to be the ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," client. Parity has a rustic vision for Polkadot\nthrough the use of their main product, ",(0,r.kt)("a",{parentName:"p",href:"https://www.substrate.io/"},"Substrate"),". Substrate can also be used for different\nchains and different networks, but in the case of Polkadot, Substrate acts as the tech stack that is used\nto implement Polkadot's sharded heterogeneous multi-chain model. What's important to realize is that Polkadot\ncan support parachains that are not built on Substrate, and, chains can also be built on Substrate which are not\nrequired to be deployed onto Polkadot."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Parity focuses on blockchain infrastructure for the decentralised web, where they initially offered an\nEthereum client (Parity Ethereum). Parity was hired by the Web3 Foundation to foster the development of the\nfirst implementation of Polkadot. ")),(0,r.kt)("p",null,"With this in mind, we can point to some other implementations of Polkadot. Having different implementations\ninherently promotes the decentralization of the technology and progresses it in a meaningful way. Other\nimplementations of Polkadot that exist, many of whom have received a ",(0,r.kt)("a",{parentName:"p",href:"/docs/grants"},"grant")," from the Web3 Foundation,\nare in programming languages like Go, C++, and JavaScript."),(0,r.kt)("p",null,"As stated in the Soramitsu grant announcement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"It is critically important to have multiple implementations of the Polkadot protocol for a number\nof reasons, including decentralization, knowledge dispersion, and better definitions of the\nprotocol... Multiple implementations of Polkadot improves network resilience and adds to the\ndecentralization of the network. The governance of the network is more democratized when multiple\nteams build clients that run the nodes in the network.\n")),(0,r.kt)("h2",{id:"alternative-implementations"},"Alternative Implementations"),(0,r.kt)("h3",{id:"chainsafe-systems-gossamer"},"ChainSafe Systems: ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ChainSafe/gossamer#a-go-implementation-of-the-polkadot-host"},"Gossamer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gossamer")," is a Go implementation being built by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChainSafeSystems"},"ChainSafe Systems"),", a blockchain\nR&D firm based in Toronto, Canada that is also building an Eth2.0 Serenity client. They were awarded a grant from the Web3\nFoundation. "),(0,r.kt)("h3",{id:"soramitsu-kagome"},"SORAMITSU: ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/soramitsu/kagome#intro"},"Kagome")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kagome")," is a C++ implementation of the Polkadot Host being built by ",(0,r.kt)("a",{parentName:"p",href:"https://soramitsu.co.jp/"},"Soramitsu"),", a Japanese digital identity\ncompany that previously developed ",(0,r.kt)("a",{parentName:"p",href:"https://iroha.tech"},"Hyperledger Iroha"),". They were awarded a grant from the Web3 Foundation and released\nthe first version of Kagome in April 2020. As part of the process, they also released a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/soramitsu/libp2p-grpc"},"libp2p")," networking layer in C++."),(0,r.kt)("h3",{id:"polkadot-js-project-polkadot-js"},"Polkadot-JS Project: ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/polkadot-js"},"Polkadot-JS")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Polkadot-JS")," is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/client"},"JavaScript client")," and offers a collection of tools, interfaces, and libraries for Polkadot and Substrate."),(0,r.kt)("h3",{id:"other-implementations-that-have-received-grants"},"Other implementations that have received grants"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/opennetsys/golkadot"},"Golkadot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/polkadot-java"},"Polkadot in Java"))))}h.isMDXComponent=!0}}]);