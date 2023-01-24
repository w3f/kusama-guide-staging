"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4445],{3905:(a,e,t)=>{t.d(e,{Zo:()=>h,kt:()=>k});var n=t(67294);function o(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,o=function(a,e){if(null==a)return{};var t,n,o={},i=Object.keys(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(o[t]=a[t]);return o}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(o[t]=a[t])}return o}var s=n.createContext({}),c=function(a){var e=n.useContext(s),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},h=function(a){var e=c(a.components);return n.createElement(s.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(a,e){var t=a.components,o=a.mdxType,i=a.originalType,s=a.parentName,h=l(a,["components","mdxType","originalType","parentName"]),p=c(t),k=o,u=p["".concat(s,".").concat(k)]||p[k]||d[k]||i;return t?n.createElement(u,r(r({ref:e},h),{},{components:t})):n.createElement(u,r({ref:e},h))}));function k(a,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof a||o){var i=t.length,r=new Array(i);r[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=a,l.mdxType="string"==typeof a?a:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},56136:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>h,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),r=["components"],l={id:"learn-parachains-protocol",title:"Parachains' Protocol Overview",sidebar_label:"Protocol Overview",description:"High level view of actors and protocols involved in running parachains on Polkadot.",keywords:["parachains","application-specific","sharding","protocol","validator","collator","nominator"],slug:"../learn-parachains-protocol"},s=void 0,c={unversionedId:"learn/learn-parachains-protocol",id:"learn/learn-parachains-protocol",title:"Parachains' Protocol Overview",description:"High level view of actors and protocols involved in running parachains on Polkadot.",source:"@site/../docs/learn/learn-parachains-protocol.md",sourceDirName:"learn",slug:"/learn-parachains-protocol",permalink:"/docs/learn-parachains-protocol",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1674571702,formattedLastUpdatedAt:"Jan 24, 2023",frontMatter:{id:"learn-parachains-protocol",title:"Parachains' Protocol Overview",sidebar_label:"Protocol Overview",description:"High level view of actors and protocols involved in running parachains on Polkadot.",keywords:["parachains","application-specific","sharding","protocol","validator","collator","nominator"],slug:"../learn-parachains-protocol"}},h={},d=[{value:"Main Actors",id:"main-actors",level:2},{value:"Validators",id:"validators",level:3},{value:"Collators",id:"collators",level:3},{value:"Parachains&#39; Protocol Summary",id:"parachains-protocol-summary",level:2},{value:"Inclusion Pipeline",id:"inclusion-pipeline",level:2},{value:"Approval Process",id:"approval-process",level:2},{value:"Network Asynchrony",id:"network-asynchrony",level:2}],p={toc:d};function k(a){var e=a.components,l=(0,o.Z)(a,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This page is a summary of the\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/protocol-overview.html"},"Protocol Overview chapter in ",(0,i.kt)("strong",{parentName:"a"},"The Polkadot Parachain Host Implementer's Guide")))),(0,i.kt)("p",null,"The protocol aims to carry a parachain's block from authoring to inclusion through a process that\ncan be carried out repeatedly and in parallel for each parachain connected to the Relay Chain."),(0,i.kt)("h2",{id:"main-actors"},"Main Actors"),(0,i.kt)("h3",{id:"validators"},"Validators"),(0,i.kt)("p",null,"They are responsible for validating the proposed parachain's blocks by checking the\n",(0,i.kt)("strong",{parentName:"p"},"Proof-of-Validity"),' (PoV) of the blocks and ensuring the PoV remains available for a designated\nperiod. They have "skin in the game", meaning they have funds bonded on-chain that can be partially\nor fully confiscated by the network in case of misbehavior.'),(0,i.kt)("h3",{id:"collators"},"Collators"),(0,i.kt)("p",null,"They create the PoV that validators know how to check. Creating PoV requires familiarity with\ntransaction format and block authoring rules of a specific parachain, as well as having access to\nits full state."),(0,i.kt)("h2",{id:"parachains-protocol-summary"},"Parachains' Protocol Summary"),(0,i.kt)("p",null,"The parachains' protocol can be summarized into three main steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Collators send the parachain block (parablock) with PoV to the set of Validators assigned to the\nparachain (i.e. para-validators)."),(0,i.kt)("li",{parentName:"ol"},"Validators verify if the parablock follows the state transition rules of the parachain and sign\nstatements that can have a positive or negative outcome."),(0,i.kt)("li",{parentName:"ol"},"With enough positive statements, the block is added to the Relay Chain.")),(0,i.kt)("p",null,"The figure below shows a representation of a parachain with collators and validators. The figure\nalso shows the journey of a block (white square) through the three main steps, as well as the\nsections where the ",(0,i.kt)("a",{parentName:"p",href:"#inclusion-pipeline"},"Inclusion Pipeline")," and the\n",(0,i.kt)("a",{parentName:"p",href:"#approval-process"},"Approval Process")," take place (see following Sections)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"parachain-protocol-summary",src:t(30076).Z,width:"1920",height:"800"})),(0,i.kt)("p",null,"Signed negative statements will lead to a dispute, and if there are false negatives, whoever will be\non the wrong side (once the dispute is resolved) will be slashed. False positives can also happen;\nthose actors responsible for it will also be slashed. To detect false positives, PoV information\nmust be available after the block has been added to the Relay Chain so that validators can check the\nwork. PoVs are typically between 1 MB and 10 MB in size and are not included in the Relay Chain\nblocks. However, as a part of the data availability scheme, they are made available on the network\nfor a certain period so that the validators can perform the required checks."),(0,i.kt)("h2",{id:"inclusion-pipeline"},"Inclusion Pipeline"),(0,i.kt)("p",null,"The inclusion pipeline is the path of a parachain block (or parablock) from its creation to its\ninclusion into the Relay Chain. The main checkpoints of that path are listed below."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Validators are assigned to parachains by the ",(0,i.kt)("strong",{parentName:"li"},"Validator Assignment")," routine."),(0,i.kt)("li",{parentName:"ol"},"A collator produces the parachain block (known as parachain candidate or candidate) along with\nPoV."),(0,i.kt)("li",{parentName:"ol"},"The collator forwards the candidate and PoV to validators assigned to the same parachain via the\n",(0,i.kt)("strong",{parentName:"li"},"Collator Distribution")," subsystem."),(0,i.kt)("li",{parentName:"ol"},"The validators assigned to the parachain participate in the ",(0,i.kt)("strong",{parentName:"li"},"Candidate Backing")," subsystem.\nCandidates that gather enough signed validity statements are considered ",(0,i.kt)("strong",{parentName:"li"},'"backable"')," and their\nbacking is the set of signed statements."),(0,i.kt)("li",{parentName:"ol"},"A relay chain block author (selected by ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-consensus#block-production-babe"},"BABE"),") can\nnote up to 1 backable candidate for each parachain to be included in the Relay Chain block\nalongside its backing. Once included in the Relay Chain the candidate is considered backable in\nthat fork of the Relay Chain."),(0,i.kt)("li",{parentName:"ol"},'Once backable in the Relay Chain, the candidate is considered to be in "pending availability"\nstatus. It can only be considered a part of the parachain once it is ',(0,i.kt)("strong",{parentName:"li"},"proven available"),"."),(0,i.kt)("li",{parentName:"ol"},"In the following relay chain blocks, the validators will participate in the ",(0,i.kt)("strong",{parentName:"li"},"Availability\nDistribution")," subsystem to ensure availability of the candidate. The subsequent relay chain\nblocks will note information regarding the candidate's availability."),(0,i.kt)("li",{parentName:"ol"},"Once the relay chain state machine has enough information to consider the candidate's PoV as\nbeing available, the candidate is considered part of the parachain and is graduated to being a\nfull parachain block.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"parachain-inclusion-pipeline",src:t(68770).Z,width:"1920",height:"800"})),(0,i.kt)("p",null,"The figure above shows the path of a candidate block through the Inclusion pipeline. The block\nchanges its status through this path as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Candidate: A block is put forward by a collator to a para-validator (in this case V1). The\ncandidate block is shown as white square with one white tick mark at the side (PoV from the\ncollator). Note the candidate is not valid yet and can still fail to be included in the Relay\nChain."),(0,i.kt)("li",{parentName:"ul"},"Seconded: The block is put forward by the para-validator V1 to other para-validators (in this case\nV2 and V3). The seconded block is shown as white square with a white tick mark and two yellow tick\nmarks on top of it. The yellow marks show the PoV from the para-validators."),(0,i.kt)("li",{parentName:"ul"},"Backable: The block validity is attested by a majority of the para-validators. The backable block\nis shown as white square with a white tick mark and three yellow tick marks on top of it. The\nyellow marks show the PoV from the para-validators."),(0,i.kt)("li",{parentName:"ul"},"Backed: The block is backed and noted in a fork on the Relay Chain by a relay chain block author\n(in this case V4). The backed block is shown as square with white background and yellow border.\nThe backed block can still fail to be included in the Relay Chain. Note that for simplicity here\nthe backed parachain block is represented as a block of the Relay Chain, but in reality a relay\nchain block contains many parachian blocks."),(0,i.kt)("li",{parentName:"ul"},"Pending availability: The block is backed but not considered available yet."),(0,i.kt)("li",{parentName:"ul"},'Included: The block is backed and considered available (we have a parablock). Parablocks are shown\nas square with white background and yellow border enclosing a "P".')),(0,i.kt)("p",null,'Once the parablock is considered available and part of the parachain, it is still "pending\napproval". The Inclusion Pipeline must conclude for a specific parachain before a new block can be\naccepted on that parachain. After inclusion, the Approval Process starts, and it can run for many\nparachain blocks at once.'),(0,i.kt)("p",null,"The candidate can fail to be included in the parachain in any of the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The collator is not able to propagate the block to any of the assigned validators."),(0,i.kt)("li",{parentName:"ul"},"The candidate is not backed by validators participating to the Candidate Backing subsystem."),(0,i.kt)("li",{parentName:"ul"},"The candidate is not selected by a relay chain block author."),(0,i.kt)("li",{parentName:"ul"},"The candidate's PoV is not considered available within a timeout, and it is discarded from the\nRelay Chain.")),(0,i.kt)("h2",{id:"approval-process"},"Approval Process"),(0,i.kt)("p",null,'Once the parablock is considered available and part of the parachain, is still "pending approval".\nAt this stage the parablock is tentatively included in the parachain, although more confirmation is\nnecessary. In fact, the validators assigned to the parachain (i.e. the parachain validators) are\nsampled from a validator set which is assumed to be 1/3 dishonest in the worst-case scenario. In\nthis case, it is likely that the majority of the random para-validators sampled for a specific\nparachain are dishonest and can back a candidate wrongly. To address this, the ',(0,i.kt)("strong",{parentName:"p"},"Approval Process"),"\nallows detecting misbehavior after-the-fact without allocating more para-validators, which would\nultimately reduce the system's throughput. As a parablock can accept children blocks after being\nconsidered available, failure to pass the approval process will invalidate the parablock as well as\nits descendants (children blocks). Only the validators who backed the block in question will be\nslashed, not those who backed the descendants."),(0,i.kt)("p",null,"The approval pipeline can be divided into the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Parablocks that have been included by the Inclusion Pipeline are pending approval for a time\nwindow known as the ",(0,i.kt)("strong",{parentName:"li"},"secondary checking window"),"."),(0,i.kt)("li",{parentName:"ol"},"During the secondary checking window, validators (secondary checkers) randomly self-select to\nperform secondary checks on each of the parablock."),(0,i.kt)("li",{parentName:"ol"},"Secondary checkers acquire the parablock with PoV and re-run the validation function."),(0,i.kt)("li",{parentName:"ol"},"Secondary checkers gossip the results of their checks. Contradictory results lead to escalation\nin which all validators are required to check the block. The validators on the losing side will\nbe slashed."),(0,i.kt)("li",{parentName:"ol"},"At the end of the process the parablock is either approved or rejected.")),(0,i.kt)("p",null,"The figure below shows the path of a parachain block when it exits the Inclusion Pipeline and it\nenters the Approval Process. The parablock becomes accepted when it is backed, available and\n",(0,i.kt)("strong",{parentName:"p"},"undisputed"),'. Thr parablock is checked a second time by a subset of validators (V5, V6 and V7),\nand if there are no contradictory results the block is approved and gossiped to other relay chain\nvalidators. Note the parablock after secondary checks is shown as a square with white background a\nyellow border enclosing a "P", and three white ticks (one for each secondary check). Approved\npara-blocks are shown as yellow squares that become grey in color.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"parachain-approval-process",src:t(97717).Z,width:"1920",height:"800"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"More information can be found in the dedicated sections about the\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/protocol-approval.html"},"approval process")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/protocol-disputes.html"},"disputes"),".")),(0,i.kt)("h2",{id:"network-asynchrony"},"Network Asynchrony"),(0,i.kt)("p",null,"We have mentioned how a relay chain block author must select the candidate and note it on the Relay\nChain (we say the block is backed). The relay chain block author is selected by BABE, which is a\nforkful algorithm. This means that different block authors are chosen at the same time and they may\nnot work on the same block parent (i.e. the representations in the previous figures are simplistic).\nAlso, the sets of validators and parachains are not fixed, and the validators' assignments to\nparachains is also flexible."),(0,i.kt)("p",null,"We say that the network is ",(0,i.kt)("strong",{parentName:"p"},"asynchronous")," since there will be validators who have received a\nblock, and other validators who did not. Thus, the network is variable and it exists in multiple\nstates. In the figure below (",(0,i.kt)("em",{parentName:"p"},"left"),") the Group 1 received block C while Group 2 did not due to\nnetwork asynchrony. Validators in Group 2 can build another block on top of B, called C'. Assume\nthat afterwards, some validators become aware of both C and C' while others remain aware of one of\nthem (",(0,i.kt)("em",{parentName:"p"},"right"),"). Validators in Group 3 must be aware of the network state in each head (C and C') and\nthey may contribute to some or full extent on both. It is possible that due to network asynchrony\ntwo forks may grow in parallel for some time, but eventually one fork will be chosen by the finality\ngadget. In the absence of an adversarial network it is unlikely that two forks will coexist for some\ntime as there will be validators aware of both chain heads."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"parachain-forks",src:t(37106).Z,width:"1920",height:"800"})))}k.isMDXComponent=!0},97717:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/parachain-approval-process-c7325ce24e30aaf37145b0b5d5d00265.png"},37106:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/parachain-forks-b3d4a4e9161292fb63e1b86888a18579.png"},68770:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/parachain-inclusion-pipeline-1581c9648f229f4ad54257e0de65c332.png"},30076:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/parachain-protocol-summary-f35fa8aa8487c8ca5e1bd72b4d59d304.png"}}]);