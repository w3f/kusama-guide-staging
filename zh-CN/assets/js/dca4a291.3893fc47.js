(self.webpackChunk=self.webpackChunk||[]).push([[4811],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,y=u["".concat(p,".").concat(d)]||u[d]||h[d]||i;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},27003:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>c,toc:()=>l,default:()=>u});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],s={id:"learn-cryptography",title:"Cryptography Explainer",sidebar_label:"Cryptography Explainer",description:"An overview of the cryptographic functions used in Polkadot"},p=void 0,c={unversionedId:"learn-cryptography",id:"learn-cryptography",isDocsHomePage:!1,title:"Cryptography Explainer",description:"An overview of the cryptographic functions used in Polkadot",source:"@site/../docs/learn-cryptography.md",sourceDirName:".",slug:"/learn-cryptography",permalink:"/zh-CN/docs/learn-cryptography",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-cryptography.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1626452468,formattedLastUpdatedAt:"2021/7/16",frontMatter:{id:"learn-cryptography",title:"Cryptography Explainer",sidebar_label:"Cryptography Explainer",description:"An overview of the cryptographic functions used in Polkadot"}},l=[{value:"Hashing Algorithm",id:"hashing-algorithm",children:[]},{value:"Keypairs and Signing",id:"keypairs-and-signing",children:[]}],h={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a high-level overview of the cryptography used in Polkadot. It assumes that you have some\nknowledge about cryptographic primitives that are generally used in blockchains such as hashes,\nelliptic curve cryptography (ECC), and public-private keypairs."),(0,i.kt)("p",null,"For detailed descriptions on the cryptography used in Polkadot please see the more advanced\n",(0,i.kt)("a",{parentName:"p",href:"https://research.web3.foundation"},"research wiki"),"."),(0,i.kt)("h2",{id:"hashing-algorithm"},"Hashing Algorithm"),(0,i.kt)("p",null,"The hashing algorithm used in Polkadot is\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BLAKE_(hash_function)#BLAKE2"},"Blake2b"),". Blake2 is considered to be\na very fast cryptographic hash function that is also used in the cryptocurrency\n",(0,i.kt)("a",{parentName:"p",href:"https://z.cash"},"Zcash"),"."),(0,i.kt)("h2",{id:"keypairs-and-signing"},"Keypairs and Signing"),(0,i.kt)("p",null,'Polkadot uses Schnorrkel/Ristretto x25519 ("sr25519") as its key derivation and signing algorithm.'),(0,i.kt)("p",null,"Sr25519 is based on the same underlying ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Curve25519"},"Curve25519")," as\nits EdDSA counterpart, ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/EdDSA#Ed25519"},"Ed25519"),". However, it uses\nSchnorr signatures instead of the EdDSA scheme. Schnorr signatures bring some noticeable benefits\nover the ECDSA/EdDSA schemes. For one, it is more efficient and still retains the same feature set\nand security assumptions. Additionally, it allows for native multisignature through\n",(0,i.kt)("a",{parentName:"p",href:"https://bitcoincore.org/en/2017/03/23/schnorr-signature-aggregation/"},"signature aggregation"),"."),(0,i.kt)("p",null,"The names Schnorrkel and Ristretto come from the two Rust libraries that implement this scheme, the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/schnorrkel"},"Schnorrkel")," library for Schnorr signatures and the\n",(0,i.kt)("a",{parentName:"p",href:"https://ristretto.group/ristretto.html"},"Ristretto")," library that makes it possible to use cofactor-8\ncurves like Curve25519."))}u.isMDXComponent=!0}}]);