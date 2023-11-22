"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[657],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=i.createContext({}),u=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return i.createElement(l.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},g=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=u(n),g=r,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?i.createElement(h,a(a({ref:e},c),{},{components:n})):i.createElement(h,a({ref:e},c))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},35810:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"contributing",title:"Contributing to the Polkadot Wiki",sidebar_label:"Contributing to the Wiki",description:"Contribute to the Polkadot Wiki.",keywords:["contributing","contributions","translations"],slug:"../contributing"},l=void 0,u={unversionedId:"general/contributing",id:"general/contributing",title:"Contributing to the Polkadot Wiki",description:"Contribute to the Polkadot Wiki.",source:"@site/../docs/general/contributing.md",sourceDirName:"general",slug:"/contributing",permalink:"/docs/contributing",draft:!1,tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1693818728,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{id:"contributing",title:"Contributing to the Polkadot Wiki",sidebar_label:"Contributing to the Wiki",description:"Contribute to the Polkadot Wiki.",keywords:["contributing","contributions","translations"],slug:"../contributing"},sidebar:"docs",previous:{title:"Kappa Sigma Mu",permalink:"/docs/maintain-guides-society-kusama"},next:{title:"Grants",permalink:"/docs/grants"}},c={},d=[{value:"How to Contribute",id:"how-to-contribute",level:2},{value:"Guideline and Rules for Contributing",id:"guideline-and-rules-for-contributing",level:2},{value:"Heritage",id:"heritage",level:2},{value:"Helping With Translations",id:"helping-with-translations",level:2}],p={toc:d},g="wrapper";function h(t){var e=t.components,s=(0,r.Z)(t,a);return(0,o.kt)(g,(0,i.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The wiki was started and is maintained by Web3 Foundation. It is an open source project and aims to\nbe the most extensive resource of knowledge on the Polkadot and Kusama ecosystem. A large part of\nthe material currently focuses on Polkadot and Kusama directly but it is not opposed to covering\ninformational material for community projects."),(0,o.kt)("admonition",{title:"Marketing material",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please do not try to pull request any marketing material as this will be rejected.")),(0,o.kt)("p",null,"Nonetheless, pull requests, discussions, and contributions from the community are encouraged. Active\ncommunity members who demonstrate a record of good contributions may be given write access to the\nrepository."),(0,o.kt)("p",null,"Otherwise, Web3 Foundation holds the administrative position and final say on the content that is\nincluded. Specifically, the Technical Education team at the foundation are most directly involved."),(0,o.kt)("admonition",{title:"Contributing Explainer",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=6i55KOcy7B0"},"How to Contribute to the Polkadot Wiki"),"\nvideo for steps on contributions.")),(0,o.kt)("h2",{id:"how-to-contribute"},"How to Contribute"),(0,o.kt)("p",null,"You can contribute to the wiki on the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-wiki"},"w3f/polkadot-wiki GitHub repository"),". Every page is a\n",(0,o.kt)("a",{parentName:"p",href:"https://guides.github.com/features/mastering-markdown/"},"MarkDown")," file, which is an easy to learn\nsyntax extension to plain text that makes creating links, rendering images, and nice-looking\nformatting simple."),(0,o.kt)("p",null,'Each page has an "Edit this page" link at the bottom of the content. By clicking it you are taken to\nthe GitHub sign-in page, where you can either log in or create an account.'),(0,o.kt)("p",null,"Once logged in, you'll be taken to the GitHub built-in text editor where you can make your edits\ndirectly. When you've completed your changes, you can add any specific details on what was changed\nand commit to a ",(0,o.kt)("strong",{parentName:"p"},"new branch")," to create a new Pull Request to the repository. From there one of the\nmaintainers will review your changes, and either merge them or request changes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"contributing",src:n(79747).Z,width:"2044",height:"1402"}),"\n",(0,o.kt)("img",{alt:"creating-pull-request",src:n(83488).Z,width:"2112",height:"812"})),(0,o.kt)("p",null,'Remember that after you click "Propose Changes", you must also click on "Create Pull Request" on the\nnext page.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"creating-pull-request-2",src:n(37648).Z,width:"1201",height:"655"})),(0,o.kt)("h2",{id:"guideline-and-rules-for-contributing"},"Guideline and Rules for Contributing"),(0,o.kt)("p",null,"There are a few basic ground-rules for contributors:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"No ",(0,o.kt)("inlineCode",{parentName:"strong"},"--force")," pushes")," or modifying the Git history in any way."),(0,o.kt)("li",{parentName:"ol"},"Pull requests are preferred to issues, especially for small changes such as typos. Issues should\nbe used for generic or broad-based changes or missing content. Suggestions and requests are\nencouraged."),(0,o.kt)("li",{parentName:"ol"},"Only use ",(0,o.kt)("strong",{parentName:"li"},"non-master branches"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Significant modifications"),", even by contributors, ought to be subject to a ",(0,o.kt)("strong",{parentName:"li"},"pull request")," to\nsolicit feedback from other contributors."),(0,o.kt)("li",{parentName:"ol"},"Pull requests to solicit feedback are ",(0,o.kt)("em",{parentName:"li"},"encouraged")," for any other non-trivial contribution but\nleft to the discretion of the contributor."),(0,o.kt)("li",{parentName:"ol"},"Contributors should attempt to adhere to the prevailing ",(0,o.kt)("inlineCode",{parentName:"li"},"MarkDown")," style, language, and layout."),(0,o.kt)("li",{parentName:"ol"},"Correct grammar should be used at all times. Pull requests with typos will not be merged until\nfixed."),(0,o.kt)("li",{parentName:"ol"},"Care should be taken to remain as objective and informative as possible. There should be no\neditorializing, and external bias should not be present."),(0,o.kt)("li",{parentName:"ol"},"We use a plugin called Prettier to standardize the style across documents. You can run this on\nyour local copy with ",(0,o.kt)("inlineCode",{parentName:"li"},"npx lint-staged"),", but for simplicity we also have a bot which runs this for\nus in your PRs.")),(0,o.kt)("h2",{id:"heritage"},"Heritage"),(0,o.kt)("p",null,"This document is based on the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Level/community/blob/master/CONTRIBUTING.md"},"Level contribution guidelines"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"helping-with-translations"},"Helping With Translations"),(0,o.kt)("admonition",{title:"Currently the Wiki is being reorganized and updated, during this time we will not be",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"prioritizing translations. :::"),(0,o.kt)("p",{parentName:"admonition"},"The Wiki's default language is ",(0,o.kt)("em",{parentName:"p"},"English"),", though, there is a desire to translate the Wiki in as many\nlanguages as possible. Another way you can contribute is by helping with translations."),(0,o.kt)("p",{parentName:"admonition"},"There is a feature at the bottom of the main page of the Polkadot Wiki that will redirect you to\n",(0,o.kt)("a",{parentName:"p",href:"https://crowdin.com/project/polkadot-wiki"},"crowdin"),", which is where translation contributions can\nbe made."),(0,o.kt)("p",{parentName:"admonition"},"There, you will see the progress of translating the docs associated with the Wiki in many different\nlanguages."),(0,o.kt)("img",{align:"center",width:"700",height:"350",src:"/img/contributing/translate/polkadot-translate-feature.png"}),(0,o.kt)("br",null),(0,o.kt)("p",{parentName:"admonition"},"The following are steps on how to interact with the crowdin interface for translations. Check out\nthe official ",(0,o.kt)("a",{parentName:"p",href:"https://support.crowdin.com/online-editor/"},"crowdin knowledge base")," as well."),(0,o.kt)("p",{float:"center"},(0,o.kt)("img",{src:"/img/contributing/translate/crowdin-translate-1.png",width:"550",height:"450"}),(0,o.kt)("img",{src:"/img/contributing/translate/crowdin-translate-2.png",width:"550",height:"450"}),(0,o.kt)("br",null),(0,o.kt)("img",{src:"/img/contributing/translate/crowdin-translate-3.png",width:"550",height:"450"}),(0,o.kt)("img",{src:"/img/contributing/translate/crowdin-translate-4.png",width:"550",height:"450"}),(0,o.kt)("br",null),(0,o.kt)("img",{src:"/img/contributing/translate/crowdin-translate-5.png",width:"550",height:"450"}),(0,o.kt)("img",{src:"/img/contributing/translate/crowdin-translate-6.png",width:"550",height:"450"}),(0,o.kt)("br",null)),(0,o.kt)("p",{parentName:"admonition"},"The following shows an example in ",(0,o.kt)("em",{parentName:"p"},"Arabic"),". You can type in your desired translation for each\nsection in the provided area, while using the suggestions generated by the crowdin built-in\ntranslator."),"   ",(0,o.kt)("img",{src:"/img/contributing/translate/crowdin-translate-7.png"}),(0,o.kt)("img",{src:"/img/contributing/translate/crowdin-translate-8.png"}),(0,o.kt)("br",null),(0,o.kt)("p",{parentName:"admonition"},"Make sure to save your translation."),(0,o.kt)("img",{align:"center",width:"800",height:"50",src:"/img/contributing/translate/crowdin-translate-9.png"})))}h.isMDXComponent=!0},79747:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/contributing-69801a2ab9b4924d0057fd15ffeb53ab.png"},37648:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/creating-pull-request-2-dbd958496c4e13a05ce366472d8235f0.png"},83488:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/creating-pull-request-d619fd33e91fa84290fb190070c603f4.png"}}]);