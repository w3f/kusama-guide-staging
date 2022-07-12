"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(n),p=a,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={id:"learn-staking-miner",title:"Staking Miner",sidebar_label:"Staking Miner",description:"Learn about Phragm\xe9n optimization on-chain via staking miners",keywords:["staking","npos","miner","phragm\xe9n"],slug:"../learn-staking-miner"},l=void 0,d={unversionedId:"learn/learn-staking-miner",id:"learn/learn-staking-miner",title:"Staking Miner",description:"Learn about Phragm\xe9n optimization on-chain via staking miners",source:"@site/../docs/learn/learn-staking-miner.md",sourceDirName:"learn",slug:"/learn-staking-miner",permalink:"/docs/learn-staking-miner",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-staking-miner.md",tags:[],version:"current",lastUpdatedBy:"emresurmeli",lastUpdatedAt:1657659516,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"learn-staking-miner",title:"Staking Miner",sidebar_label:"Staking Miner",description:"Learn about Phragm\xe9n optimization on-chain via staking miners",keywords:["staking","npos","miner","phragm\xe9n"],slug:"../learn-staking-miner"}},c={},u=[{value:"NPoS election optimization",id:"npos-election-optimization",level:2},{value:"Signed Phase of the election pallet",id:"signed-phase-of-the-election-pallet",level:2},{value:"Further Resources",id:"further-resources",level:2}],h={toc:u};function p(e){var t=e.components,s=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The staking-miner code is experimental and it is still in development phase. Use is at your own\ndiscretion, as there is a risk of losing some funds."))),(0,o.kt)("p",null,"The staking miner is a passive validator functionality which runs when a new set of validators need to be\nelected for NPoS. This is a computationally intense process, hence the mining. Staking miners\ncompete with each other to produce election solutions which consist of a validator set, stake\ndistribution across that set, and a score indicating how optimal the solution is. Staking miners run\nthe any given staking algortihms(as of now, sequential Phragm\xe9n or PhragMMS, this is subject to\nchange if improved alrgorithms are introduced) to produce results, and the result is then sent as a\ntransaction to the relay chain via a normal signed extrinsic. The transaction requires a bond, and a\ntransaction fee. The best solution is rewarded which in the least covers the transaction fee, and\nthe bond is returned to the account. If the solution is not valid, the bond and the fee are lost."),(0,o.kt)("p",null,"Staking miner uses a pallet called ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet_election_provider_multi_phase")," and can only produce\nsolutions during the\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_election_provider_multi_phase/index.html#signed-phase"},(0,o.kt)("inlineCode",{parentName:"a"},"SignedPhase")),"\nof the pallet's life cycle. Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"SignedPhase")," is over and the\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_election_provider_multi_phase/index.html#unsigned-phase"},(0,o.kt)("inlineCode",{parentName:"a"},"UnsignedPhase")),"\nstarts, only the off-chain workers can provide election results."),(0,o.kt)("p",null,"Running the staking miner requires passing the seed of a funded account in order to pay the fees for\nthe transactions that will be sent. The same account's balance is used to reserve deposits as well.\nThe best solution in each round is rewarded. All correct solutions will get their bond back and the\nones that submit invalid solutions will lose their bond."),(0,o.kt)("h2",{id:"npos-election-optimization"},"NPoS election optimization"),(0,o.kt)("p",null,"A basic election solution is a simple distribution of stake across validators, but this can be\noptimized for better distribution equaling a higher security score. The staking miner does not act\nas a validator and focuses solely on the election result and optimization of the solution. It\nconnects to a specified chain and keeps listening to new signed phase of the election pallet in\norder to submit solutions to the NPoS election. When the correct time comes, it computes its\nsolution and submits it to the chain. The default miner algorithm is sequential Phragm\xe9n with a\nconfigurable number of balancing iterations that improve the score."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NPoS election optimization",src:n(83471).Z,width:"1868",height:"804"})),(0,o.kt)("h2",{id:"signed-phase-of-the-election-pallet"},"Signed Phase of the election pallet"),(0,o.kt)("p",null,"The election provider pallet ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet_election_provider_multi_phase")," is divided into two phases,\n",(0,o.kt)("strong",{parentName:"p"},"signed")," and ",(0,o.kt)("strong",{parentName:"p"},"unsigned"),". At the end of the pallet's timeline, the function ",(0,o.kt)("inlineCode",{parentName:"p"},"elect()")," is called."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"                                                                   elect()\n                +   <--T::SignedPhase--\x3e  +  <--T::UnsignedPhase--\x3e   +\n  +-------------------------------------------------------------------+\n   Phase::Off   +       Phase::Signed     +      Phase::Unsigned      +\n")),(0,o.kt)("p",null,"Solutions provided by the staking miner can only be submitted during the signed phase. Solutions are\nsubmitted and queued on the chain as a ",(0,o.kt)("inlineCode",{parentName:"p"},"RawSolution"),". Once submitted, a solution cannot be retracted\nby the originating account."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RawSolution")," struct definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pub struct RawSolution<S> {\n    pub solution: S, // The solution itself\n    pub score: ElectionScore, // The claimed score of the solution.\n    pub round: u32, // The round at which this solution should be submitted.\n}\n")),(0,o.kt)("p",null,"A maximum of ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet::Config::MaxSignedSubmissions")," will be stored on-chain and they will be sorted\nbased on score. Higher the score the more optimal the election solution is. On both Polkadot and\nKusama the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/runtime/polkadot/src/lib.rs#L446"},"'MaxSignedSubmissions'"),"\nis set to {{ signed_max_submission }} submissions. This variable can be modified if needed through\ngovernance."),(0,o.kt)("p",null,"Upon arrival of a new solution:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the queue is not full, it is stored in the appropriate sorted index."),(0,o.kt)("li",{parentName:"ol"},"If the queue is full but the submitted solution is better than one of the queued ones, the worse\nsolution is discarded, the bond of the outgoing solution is returned, and the new solution is\nstored in the correct index."),(0,o.kt)("li",{parentName:"ol"},"If the queue is full and the solution is not an improvement compared to any of the queued ones,\nit is instantly rejected and no bond is reserved.")),(0,o.kt)("p",null,"Upon the end of the signed phase, no more solutions can be submitted and the solutions in the queue\nwill be checked using\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_election_provider_multi_phase/pallet/struct.Pallet.html#method.feasibility_check"},(0,o.kt)("inlineCode",{parentName:"a"},"Pallet::feasibility_check")),"\nwhich ensures the score is indeed correct, and marks them as valid or invalid. By checking each\nsolution in the queue, the queue will be reorganized by score. The highest valid score will be\nrewarded. Invalid solutions with higher score than the winning solution will be slashed. The rest of\nthe solutions will be discarded and their deposit will be returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Queue\n+-------------------------------+\n|Solution(score=20, valid=false)| +--\x3e  Slashed\n+-------------------------------+\n|Solution(score=15, valid=true )| +--\x3e  Rewarded, Saved\n+-------------------------------+\n|Solution(score=10, valid=true )| +--\x3e  Discarded\n+-------------------------------+\n|Solution(score=05, valid=false)| +--\x3e  Discarded\n+-------------------------------+\n|             None              |\n+-------------------------------+\n")),(0,o.kt)("p",null,"If you want to run a staking miner on your validator, refer to the repository provided in the\nresources section below."),(0,o.kt)("h2",{id:"further-resources"},"Further Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.parity.io/pallet_election_provider_multi_phase/index.html"},"Election Pallet definition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/staking-miner-v2"},"Staking Miner repository"))))}p.isMDXComponent=!0},83471:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/NPoS-election-optimization-3ef1b7bd0a99f64c4198511b4216989d.png"}}]);