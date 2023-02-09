"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),b=r,y=c["".concat(l,".").concat(b)]||c[b]||d[b]||a;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:r,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},78735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],u={id:"maintain-bug-bounty",title:"Bug Bounty",sidebar_label:"Bug Bounty",description:"An overview of how you can help catch bugs.",keywords:["bug","bug bounty","report"],slug:"../../maintain-bug-bounty"},l=void 0,s={unversionedId:"maintain/maintain-bug-bounty",id:"maintain/maintain-bug-bounty",title:"Bug Bounty",description:"An overview of how you can help catch bugs.",source:"@site/../docs/maintain/maintain-bug-bounty.md",sourceDirName:"maintain",slug:"/maintain-bug-bounty",permalink:"/docs/maintain-bug-bounty",draft:!1,tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1663541349,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{id:"maintain-bug-bounty",title:"Bug Bounty",sidebar_label:"Bug Bounty",description:"An overview of how you can help catch bugs.",keywords:["bug","bug bounty","report"],slug:"../../maintain-bug-bounty"}},p={},c=[{value:"Eligibility",id:"eligibility",level:2},{value:"How to report a bug",id:"how-to-report-a-bug",level:2}],d={toc:c};function b(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you discover a bug, we appreciate your cooperation in responsibly investigating and reporting it\nas per ",(0,a.kt)("a",{parentName:"p",href:"https://web3.foundation/security-report/"},"instructions on Web3 Foundation website"),".\nDisclosure to any third parties disqualifies bug bounty eligibility."),(0,a.kt)("admonition",{title:"Bug bounty program scope",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The bug bounty program does ",(0,a.kt)("em",{parentName:"p"},"not")," cover bugs on code bases that are external to or, written on top\nof Polkadot, or that use Polkadot. To be eligible for the bug bounty program the bug has to be a\npart of the Polkadot codebase, this includes protocols that Polkadot uses such as AnV, XCM, GRANDPA,\netc."),(0,a.kt)("p",{parentName:"admonition"},"We call on our community and all bug bounty hunters to help identify bugs in Polkadot.")),(0,a.kt)("h2",{id:"eligibility"},"Eligibility"),(0,a.kt)("p",null,"Generally speaking, any bug that poses a significant vulnerability, either to the soundness of\nprotocols and protocol/implementation compliance to network security, to classical client security,\nas well as security of cryptographic primitives, could be eligible for a reward. Please note that\nit's entirely our discretion to decide whether a bug is significant enough to qualify for a reward."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The submission quality will be a significant factor in the level of considered compensation. A\nhigh-quality submission includes explaining how the bug can be reproduced, how it was discovered,\nand otherwise critical details. Please disclose responsibly; disclosure to any third parties\ndisqualifies bug bounty eligibility."),(0,a.kt)("p",{parentName:"admonition"},"Examples:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"An attack that could disrupt the entire network and harm the validity to the network would be\nconsidered a critical threat."),(0,a.kt)("li",{parentName:"ul"},"An attack that would disrupt service to others would be regarded as a high threat."))),(0,a.kt)("admonition",{title:"Responsible investigation and reporting",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Responsible investigation and reporting include, but isn't limited to, the following:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Don't violate the privacy of other users, destroy data, etc."),(0,a.kt)("li",{parentName:"ul"},"Don't defraud or harm Polkadot network or its users during your research; you should make a good\nfaith effort not to interrupt or degrade our services."),(0,a.kt)("li",{parentName:"ul"},"Don't target the validators' physical security measures, or attempt to use social engineering,\nspam, distributed denial of service (DDoS) attacks, etc."),(0,a.kt)("li",{parentName:"ul"},"Initially, report the bug only to us and not to anyone else."),(0,a.kt)("li",{parentName:"ul"},"Give us a reasonable amount of time to fix the bug before disclosing it to anyone else, and give\nus adequate written warning before disclosing it to anyone else."),(0,a.kt)("li",{parentName:"ul"},"In general, please investigate and report bugs in a way that makes a reasonable, good-faith effort\nnot to be disruptive or harmful to our users or us. Otherwise, your actions might be interpreted\nas an attack rather than an effort to be helpful."))),(0,a.kt)("h2",{id:"how-to-report-a-bug"},"How to report a bug"),(0,a.kt)("p",null,"Please follow the instructions at\n",(0,a.kt)("a",{parentName:"p",href:"https://web3.foundation/security-report/"},"web3.foundation/security-report/"),"."))}b.isMDXComponent=!0}}]);