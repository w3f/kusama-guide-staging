(self.webpackChunk=self.webpackChunk||[]).push([[9539],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>d,kt:()=>m});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=p(a),m=l,h=k["".concat(s,".").concat(m)]||k[m]||u[m]||r;return a?n.createElement(h,o(o({ref:e},d),{},{components:a})):n.createElement(h,o({ref:e},d))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=k;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6902:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>k});var n=a(22122),l=a(19756),r=(a(67294),a(3905)),o=["components"],i={id:"build-wallets",title:"Polkadot Wallets",sidebar_label:"Polkadot Wallets",description:"An overview of the current supported wallets on Polkadot.",slug:"../build-wallets"},s=void 0,p={unversionedId:"build/build-wallets",id:"build/build-wallets",isDocsHomePage:!1,title:"Polkadot Wallets",description:"An overview of the current supported wallets on Polkadot.",source:"@site/../docs/build/build-wallets.md",sourceDirName:"build",slug:"/build-wallets",permalink:"/zh-CN/docs/build-wallets",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-wallets.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1631864714,formattedLastUpdatedAt:"2021/9/17",frontMatter:{id:"build-wallets",title:"Polkadot Wallets",sidebar_label:"Polkadot Wallets",description:"An overview of the current supported wallets on Polkadot.",slug:"../build-wallets"}},d=[{value:"Polkadot Wallets",id:"polkadot-wallets",children:[{value:"Supported Wallets",id:"supported-wallets",children:[]},{value:"Treasury Funded Wallets",id:"treasury-funded-wallets",children:[]}]},{value:"Encryption Enhancement",id:"encryption-enhancement",children:[]}],u={toc:d};function k(t){var e=t.components,a=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"polkadot-wallets"},"Polkadot Wallets"),(0,r.kt)("p",null,"The integration of a ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/glossary#wallet"},"wallet")," with Polkadot allows for simple and easy access to\nprivate keys and signing transactions. Below are some wallets that support Polkadot along with their\ndevelopment statuses."),(0,r.kt)("h3",{id:"supported-wallets"},"Supported Wallets"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Wallet Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Development State"),(0,r.kt)("th",{parentName:"tr",align:null},"Team Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Custody"),(0,r.kt)("th",{parentName:"tr",align:null},"Supports"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.parity.io/signer/"},"Parity Signer")," (see warning below)"),(0,r.kt)("td",{parentName:"tr",align:null},"Live"),(0,r.kt)("td",{parentName:"tr",align:null},"Parity"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS and Android"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,r.kt)("td",{parentName:"tr",align:null},"Staking")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/apps/releases"},"Polkadot-js Desktop")),(0,r.kt)("td",{parentName:"tr",align:null},"Live"),(0,r.kt)("td",{parentName:"tr",align:null},"Parity"),(0,r.kt)("td",{parentName:"tr",align:null},"Win, Mac, Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,r.kt)("td",{parentName:"tr",align:null},"Staking")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/extension"},"Polkadot-js extension")),(0,r.kt)("td",{parentName:"tr",align:null},"Live"),(0,r.kt)("td",{parentName:"tr",align:null},"Parity"),(0,r.kt)("td",{parentName:"tr",align:null},"Browser extension"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,r.kt)("td",{parentName:"tr",align:null},"Staking")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-js apps")),(0,r.kt)("td",{parentName:"tr",align:null},"Live"),(0,r.kt)("td",{parentName:"tr",align:null},"Parity"),(0,r.kt)("td",{parentName:"tr",align:null},"Browser"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-Custodial"),(0,r.kt)("td",{parentName:"tr",align:null},"Staking")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/"},"Polkadot support")," can provide assistance with issues related to\nPolkadot-JS, the Polkadot{.js} extension, or Parity Signer. For other wallet software, you should\ncontact the developers of that wallet."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Warning: Parity Signer currently does not allow you to see the transaction you are signing. This\nmeans that you are at risk if connected to a compromised version of Polkadot-JS. A fix is being\nworked on; please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-signer/issues/724"},"this GitHub issue"),"\nfor more details.")),(0,r.kt)("h3",{id:"treasury-funded-wallets"},"Treasury Funded Wallets"),(0,r.kt)("p",null,"These are wallets which have been supported by either the Polkadot or Kusama Treasury via Treasury Proposal. Links in the Proposals section go to the Polkassembly post where the Treasury Proposal was discussed."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Wallet Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Proposals"),(0,r.kt)("th",{parentName:"tr",align:null},"Development State"),(0,r.kt)("th",{parentName:"tr",align:null},"Team Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Custody"),(0,r.kt)("th",{parentName:"tr",align:null},"Supports"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://fearlesswallet.io/"},"Fearless Wallet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/23"},"1"),", ",(0,r.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/34"},"2"),", ",(0,r.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/74"},"3"),", ",(0,r.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/102"},"4")),(0,r.kt)("td",{parentName:"tr",align:null},"Live"),(0,r.kt)("td",{parentName:"tr",align:null},"SORAMITSU"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,r.kt)("td",{parentName:"tr",align:null},"Staking")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://klever.io/"},"Klever")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/91"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"Live"),(0,r.kt)("td",{parentName:"tr",align:null},"Klever"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,r.kt)("td",{parentName:"tr",align:null},"Staking")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://polkawallet.io/"},"Polkawallet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/32"},"1"),", ",(0,r.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/41"},"2")),(0,r.kt)("td",{parentName:"tr",align:null},"Live"),(0,r.kt)("td",{parentName:"tr",align:null},"Polkawallet"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,r.kt)("td",{parentName:"tr",align:null},"Staking")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://stylo-app.com/"},"Stylo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://polkadot.polkassembly.io/treasury/39"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"Live"),(0,r.kt)("td",{parentName:"tr",align:null},"Thibaut Sardan"),(0,r.kt)("td",{parentName:"tr",align:null},"Android"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,r.kt)("td",{parentName:"tr",align:null},"Staking")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: these third-party wallets have been funded by the community through either the Polkadot or Kusama ",(0,r.kt)("a",{parentName:"p",href:"learn-treasury"},"Treasury"),". ",(0,r.kt)("strong",{parentName:"p"},"Web 3.0 Technologies Foundation does not endorse these wallets, and you should use your own due diligence in researching them.")," The official Polkadot Support cannot provide support for issues with these wallets or other non-Parity developed wallets.")),(0,r.kt)("h2",{id:"encryption-enhancement"},"Encryption Enhancement"),(0,r.kt)("p",null,"Some newly generated ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," account files cannot be imported (restored) into older wallet software.\nThis is due to an enhanced encryption method, which is also noticeable in a slight delay when\nencrypting/decrypting your wallet. If you are unable to load a ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," file, please ensure that you\nare using the latest version of the wallet software. If you are still unable to load it, ensure that\nthe wallet software is using the latest version of the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/api/"},"Polkadot API"),"."))}k.isMDXComponent=!0}}]);