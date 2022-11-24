"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],c={id:"learn-account-transfer",title:"Transfer of Polkadot-JS Accounts between Computers",sidebar_label:"Account Transfer",description:"Steps on transferring Accounts between computers.",keywords:["account","account transfer","polkadot account","polkadotjs"],slug:"../learn-account-transfer"},l=void 0,i={unversionedId:"learn/learn-account-transfer",id:"learn/learn-account-transfer",title:"Transfer of Polkadot-JS Accounts between Computers",description:"Steps on transferring Accounts between computers.",source:"@site/../docs/learn/learn-account-transfer.md",sourceDirName:"learn",slug:"/learn-account-transfer",permalink:"/docs/learn-account-transfer",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1669293804,formattedLastUpdatedAt:"Nov 24, 2022",frontMatter:{id:"learn-account-transfer",title:"Transfer of Polkadot-JS Accounts between Computers",sidebar_label:"Account Transfer",description:"Steps on transferring Accounts between computers.",keywords:["account","account transfer","polkadot account","polkadotjs"],slug:"../learn-account-transfer"}},p={},u=[{value:"Transferring Polkadot-JS Apps Accounts/Addresses From One Computer to Another",id:"transferring-polkadot-js-apps-accountsaddresses-from-one-computer-to-another",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"transferring-polkadot-js-apps-accountsaddresses-from-one-computer-to-another"},"Transferring Polkadot-JS Apps Accounts/Addresses From One Computer to Another"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This will overwrite any existing accounts with the same pubkey on your new computer. This generally\nshould not make a difference (since it can still access the same account), but might if you have\ne.g. an account which was stored externally in the extension on the old computer but was created\ndirectly in browser on the new one.")),(0,a.kt)("p",null,"This has been tested on Brave and Chrome, but not other browsers."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to Polkadot-JS Apps"),(0,a.kt)("li",{parentName:"ol"},"Go to JavaScript console on the browser (Available in Developer Tools)"),(0,a.kt)("li",{parentName:"ol"},"Type in the command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"JSON.stringify(localStorage)\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Copy and paste the returned string to a text editor and save the file."),(0,a.kt)("li",{parentName:"ol"},"Check that the string you pasted both begins and ends with a tick mark ('). If not, add one to\nthe beginning and end."),(0,a.kt)("li",{parentName:"ol"},"Save and send that file with the copied string to the new computer."),(0,a.kt)("li",{parentName:"ol"},"On new computer, go to Polkadot-JS Apps"),(0,a.kt)("li",{parentName:"ol"},"Open the Javascript console on the browser (Available in Developer Tools)"),(0,a.kt)("li",{parentName:"ol"},"Set a variable raw equal to the string from the text file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"raw = ... copy-pasted json from original computer ...\n")),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"Run the following code on the console:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"accounts = JSON.parse(raw);\nfor (var key in accounts) {\n    if (accounts.hasOwnProperty(key)) {\n        val = JSON.stringify(accounts[key]).replace(/\\\\/g,'').slice(1,-1);\n        console.log(key + \" -> \" + val);\n        localStorage.setItem(key, val);\n    }\n}\n")),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"Refresh Polkadot-JS App browser and check Accounts and Addresses pages. All of your accounts and\naddresses should now be available.")))}f.isMDXComponent=!0}}]);