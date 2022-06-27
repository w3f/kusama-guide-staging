"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1772],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8600:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),s=["components"],o={id:"mirror-build-storage",title:"Decentralized Storage Systems",sidebar_label:"Decentralized Storage",description:"Information about building with decentralized storage.",keywords:["build","cloud","storage"],slug:"../build-storage"},l=void 0,d={unversionedId:"build/mirror-build-storage",id:"build/mirror-build-storage",title:"Decentralized Storage Systems",description:"Information about building with decentralized storage.",source:"@site/../docs/build/mirror-build-storage.md",sourceDirName:"build",slug:"/build-storage",permalink:"/docs/build-storage",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-storage.md",tags:[],version:"current",frontMatter:{id:"mirror-build-storage",title:"Decentralized Storage Systems",sidebar_label:"Decentralized Storage",description:"Information about building with decentralized storage.",keywords:["build","cloud","storage"],slug:"../build-storage"}},c={},p=[{value:"DCS (Decentralized Cloud Storage)",id:"dcs-decentralized-cloud-storage",level:2},{value:"IPFS (Interplanetary File System)",id:"ipfs-interplanetary-file-system",level:3},{value:"Brief comparison of IPFS &amp; HTTP:",id:"brief-comparison-of-ipfs--http",level:4},{value:"Filecoin",id:"filecoin",level:3},{value:"Substrate Storage",id:"substrate-storage",level:2},{value:"Crust Storage",id:"crust-storage",level:3},{value:"PolkadotJS Storage",id:"polkadotjs-storage",level:3},{value:"Substrate Files",id:"substrate-files",level:3}],u={toc:p};function h(e){var t=e.components,o=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Storage is an integral part of modern computer systems, and the same is true for distributed\nand decentralized systems like a blockchain. When interacting with the Polkadot ecosystem, it\nwill be helpful if you familiarize yourself with the current WEB3 approach to decentralized\nstorage systems, and how these systems can support your endeavors."),(0,i.kt)("h2",{id:"dcs-decentralized-cloud-storage"},"DCS (Decentralized Cloud Storage)"),(0,i.kt)("p",null,"The key attribute that characterizes centralized cloud storage is the location of data."),(0,i.kt)("p",null,"In decentralized cloud storage, the key attribute becomes the data itself instead of the data's\nlocation."),(0,i.kt)("p",null,"This can be viewed as the shift from the centralized ",(0,i.kt)("em",{parentName:"p"},"location-centric")," storage approach to the\ndecentralized ",(0,i.kt)("em",{parentName:"p"},"content-centric")," approach."),(0,i.kt)("h3",{id:"ipfs-interplanetary-file-system"},"IPFS (Interplanetary File System)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS")," is a peer-to-peer distributed file system that seeks to connect all\ncomputing devices with the same system of files, by utilizing features such as content-addressing,\ncontent-signing, and enhanced security methods through encryption. IPFS aims to address the current\nhurdles of the HTTP-based Internet."),(0,i.kt)("h4",{id:"brief-comparison-of-ipfs--http"},"Brief comparison of IPFS & HTTP:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"IPFS"),(0,i.kt)("th",{parentName:"tr",align:null},"HTTP"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"network: peer-to-peer model (decentralized)"),(0,i.kt)("td",{parentName:"tr",align:null},"network: client-server model (centralized)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"requests: use a cryptographic hash of that data"),(0,i.kt)("td",{parentName:"tr",align:null},"requests: use the address on which data is hosted")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"accessibility: data is distributed to multiple nodes and can be accessed at any time. Bandwidth is high: nearest peer can serve the data"),(0,i.kt)("td",{parentName:"tr",align:null},"accessibility: data can only be accessed if the server is live and there are no interruptions in transmission. Bandwidth is limited: clients send requests to the same server")))),(0,i.kt)("h3",{id:"filecoin"},"Filecoin"),(0,i.kt)("p",null,"Like IPFS, ",(0,i.kt)("a",{parentName:"p",href:"https://filecoin.io/"},"Filecoin")," is a protocol developed by ",(0,i.kt)("a",{parentName:"p",href:"https://protocol.ai/"},"Protocol Labs"),"\nthat offers a decentralized storage network. Filecoin's main focus is the storage itself and uses IPFS as a\n","[complementary]"," back-end protocol."),(0,i.kt)("h2",{id:"substrate-storage"},"Substrate Storage"),(0,i.kt)("p",null,"Substrate takes a layered approach to storage by using a key-value data store that is implemented\nas a database-backed, modified Merkle tree. Substrate's higher-layer storage abstractions are\nbuilt on the key-value store."),(0,i.kt)("p",null,"The key-value data store is backed by ",(0,i.kt)("a",{parentName:"p",href:"https://rocksdb.org/"},"RocksDB"),", and it also supports an\nexperimental ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-db"},"Parity database"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The database is used for components that require persistent storage\nThese are components like Substrate clients, Substrate light-clients & off-chain workers.\nFor more information, check out\nSubstrate documentation ",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/main-docs/build/runtime-storage/"},"Storage Page"),"."))),(0,i.kt)("p",null,"When building on Substrate, runtime developers can utilize of Substrate's FRAME ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage pallet"),"\nwhich gives access to Substrate's storage APIs. These storage items support values that are encoded by\nParity's ",(0,i.kt)("inlineCode",{parentName:"p"},"SCALE (Simple Concatenated Aggregate Little-Endian) Codec"),"."),(0,i.kt)("p",null,"There is a\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/frame_support/storage/trait.StorageValue.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Storage Value"))," API\nthat is used to store single values,\na ",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/frame_support/storage/trait.StorageMap.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Storage Map"))," API\nthat is used to a key-value hash map,\na ",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/frame_support/storage/trait.StorageDoubleMap.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Storage Double Map"))," API\nthat creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"storage map")," with two keys to provide the ability to efficiently remove all entries that have\na common first key, and a ",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/frame_support/storage/trait.StorageNMap.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Storage N Map")),"\nAPI that can be used to store a hash map with any arbitrary number of keys."),(0,i.kt)("p",null,"These layered APIs act as runtime storage that allows you to store data in your blockchain. More information can\nbe found at the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/main-docs/build/runtime-storage/"},(0,i.kt)("inlineCode",{parentName:"a"},"Runtime Storage Page"))," on Substrate Developer Hub."),(0,i.kt)("h3",{id:"crust-storage"},"Crust Storage"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://crust.network"},"Crust Network")," provides a Web3.0 decentralized storage network for the Metaverse. It is designed to realize core values of decentralization, privacy, and assurance. Crust supports multiple storage-layer protocols such as ",(0,i.kt)("a",{parentName:"p",href:"#ipfs-interplanetary-file-system"},"IPFS"),", and exposes instant accessible on-chain storage functions to users. Crust\u02bcs technical stack is also capable of supporting data manipulating and computing."),(0,i.kt)("p",null,"Crust provides a native cross-chain communication communication pallet based on ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-crosschain"},"XCMP"),", called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/crustio/crust/tree/parachain/shadow/crust-collator/pallets/xstorage"},"xStorage"),"."),(0,i.kt)("p",null,"The protocol also supports most smart contract platforms, including Ethereum, with its ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/buildCrossChainSolution"},"cross-chain dStorage solution"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Learn more about Crust")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To learn more about Crust, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.crust.network/en"},"Crust Network Wiki"),".\nTry integrating with Crust by following their ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/build101"},"Crust Storage 101")," guide."))),(0,i.kt)("h3",{id:"polkadotjs-storage"},"PolkadotJS Storage"),(0,i.kt)("p",null,"The PolkadotJS API offers storage methods that are part of the default Substrate runtime.\nThey are exposed via ",(0,i.kt)("inlineCode",{parentName:"p"},"api.query.<module>.<method>"),".\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/substrate/storage/"},"official docs")," for more details."),(0,i.kt)("h3",{id:"substrate-files"},"Substrate Files"),(0,i.kt)("p",null,"PolkadotJS Apps includes a decentralized storage module that allows Substrate-based chain\nusers to upload their files to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/buildIPFSWeb3AuthGW"},"IPFS W3Auth Gateway")," and use the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/buildIPFSW3AuthPin"},"IPFS W3Auth Pinning Service")," to pin their files on Crust Network. "),(0,i.kt)("p",null,"Start by uploading a single file or folder:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"upload",src:a(8260).Z,width:"1917",height:"968"})),(0,i.kt)("p",null,"Choose a Gateway:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gateway",src:a(47771).Z,width:"1916",height:"966"})),(0,i.kt)("p",null,"Sign the message:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sign",src:a(4407).Z,width:"1918",height:"968"})),(0,i.kt)("p",null,"You should be able to view the file info, as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"file info",src:a(81879).Z,width:"1917",height:"966"})),(0,i.kt)("p",null,"As well as the file status:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"file statue",src:a(58608).Z,width:"1916",height:"966"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The whole files module is decentralized, so your file directory is only cached in browser.\nThe file directory info will not be visible if you switch to a new browser or clear the browser cache.\nThe storage module allows you to export file directory info from the current browser and import it to the new browser."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"manage file dir",src:a(87329).Z,width:"1917",height:"965"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"These above images are taken from this\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps/pull/6106"},"pull request")))))}h.isMDXComponent=!0},8260:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/substrate-files-1-b911815ce2aa992118b70e76adff406a.png"},47771:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/substrate-files-2-b16e86055a05152fd766c6c8fb2478b3.png"},4407:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/substrate-files-3-6b5badf567f42956c47ce5dcd7edd78c.png"},81879:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/substrate-files-4-80c0cc191b4a9d3dbcd336f2413e1922.png"},58608:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/substrate-files-5-9906fb4cea40075a2e3eb225a9d14dd7.png"},87329:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/substrate-files-6-e1d84abd6cf39f3b3651ae30a33b38b5.png"}}]);