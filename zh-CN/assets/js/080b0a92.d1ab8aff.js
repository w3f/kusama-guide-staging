"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,g=d["".concat(u,".").concat(b)]||d[b]||p[b]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78735:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>s,toc:()=>c,default:()=>d});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"maintain-bug-bounty",title:"Bug Bounty",sidebar_label:"Bug Bounty",description:"An overview of how you can help catch bugs.",slug:"../../maintain-bug-bounty"},u=void 0,s={unversionedId:"maintain/maintain-bug-bounty",id:"maintain/maintain-bug-bounty",title:"Bug Bounty",description:"An overview of how you can help catch bugs.",source:"@site/../docs/maintain/maintain-bug-bounty.md",sourceDirName:"maintain",slug:"/maintain-bug-bounty",permalink:"/zh-CN/docs/maintain-bug-bounty",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-bug-bounty.md",tags:[],version:"current",lastUpdatedBy:"emresurmeli",lastUpdatedAt:1648504996,formattedLastUpdatedAt:"2022/3/28",frontMatter:{id:"maintain-bug-bounty",title:"Bug Bounty",sidebar_label:"Bug Bounty",description:"An overview of how you can help catch bugs.",slug:"../../maintain-bug-bounty"}},c=[{value:"Eligibility",id:"eligibility",children:[],level:2},{value:"How to report a bug",id:"how-to-report-a-bug",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: The bug bounty program does ",(0,i.kt)("em",{parentName:"p"},"not")," cover bugs on code bases that are external to or, written\non top of Polkadot, or that use Polkadot. To be eligable for the bug bounty program the bug has to\nbe a part of the Polkadot codebase, this includes protocols that Polkadot uses such as AnV, XCM,\nGRANDPA, etc.")),(0,i.kt)("p",null,"We call on our community and all bug bounty hunters to help identify bugs in Polkadot."),(0,i.kt)("p",null,"If you discover a bug, we appreciate your cooperation in responsibly investigating and reporting it\nas per ",(0,i.kt)("a",{parentName:"p",href:"https://web3.foundation/security-report/"},"instructions on Web3 Foundation website"),".\nDisclosure to any third parties disqualifies bug bounty eligibility."),(0,i.kt)("h2",{id:"eligibility"},"Eligibility"),(0,i.kt)("p",null,"Generally speaking, any bug that poses a significant vulnerability, either to the soundness of\nprotocols and protocol/implementation compliance to network security, to classical client security,\nas well as security of cryptographic primitives, could be eligible for a reward. Please note that it's\nentirely our discretion to decide whether a bug is significant enough to qualify for a reward."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples include:")," An attack that could disrupt the entire network and harm the validity to the\nnetwork would be considered a critical threat. An attack that would disrupt service to others\nwould be regarded as a high threat."),(0,i.kt)("p",null,"Please note: The submission quality will be a significant factor in the level of considered compensation.\nA high-quality submission includes explaining how the bug can be reproduced, how it was\ndiscovered, and otherwise critical details. Please disclose responsibly; disclosure to any third\nparties disqualifies bug bounty eligibility."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Responsible investigation and reporting")," Responsible investigation and reporting include, but\nisn't limited to, the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Don't violate the privacy of other users, destroy data, etc."),(0,i.kt)("li",{parentName:"ul"},"Don't defraud or harm Polkadot network or its users during your research; you should make a good\nfaith effort not to interrupt or degrade our services."),(0,i.kt)("li",{parentName:"ul"},"Don't target the validators' physical security measures, or attempt to use social engineering,\nspam, distributed denial of service (DDoS) attacks, etc."),(0,i.kt)("li",{parentName:"ul"},"Initially, report the bug only to us and not to anyone else."),(0,i.kt)("li",{parentName:"ul"},"Give us a reasonable amount of time to fix the bug before disclosing it to anyone else, and give\nus adequate written warning before disclosing it to anyone else."),(0,i.kt)("li",{parentName:"ul"},"In general, please investigate and report bugs in a way that makes a reasonable, good-faith effort\nnot to be disruptive or harmful to our users or us. Otherwise, your actions might be interpreted\nas an attack rather than an effort to be helpful.")),(0,i.kt)("h2",{id:"how-to-report-a-bug"},"How to report a bug"),(0,i.kt)("p",null,"Please follow the instructions at\n",(0,i.kt)("a",{parentName:"p",href:"https://web3.foundation/security-report/"},"web3.foundation/security-report/"),"."))}d.isMDXComponent=!0}}]);