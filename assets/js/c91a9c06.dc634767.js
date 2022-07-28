(self.webpackChunk=self.webpackChunk||[]).push([[8355],{47940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var a=n(74165),i=n(15861),r=n(67294),o=n(98562),s=n(73100),l="polkadot",d="kusama",u="statemine",p="statemint";function c(e,t,n){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)((0,a.Z)().mark((function e(t,n,i){var r,l,d,u,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){e.next=18;break}return e.abrupt("return");case 18:return d=new o.U(r),e.next=21,s.G.create({provider:d});case 21:u=e.sent,(p=n.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=p[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=u.toString(),e.abrupt("break",35);case 29:return e.next=31,u();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+n);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t,n,a){var i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};switch(t){case"humanReadable":var r=void 0;if(n===l||n===p)r=3;else{if(n!==d&&n!==u)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");r=6}e=parseFloat(e),e=Number.isInteger(e/i[n].precision)?e/i[n].precision+" "+i[n].symbol:(e/i[n].precision).toFixed(r)+" "+i[n].symbol;break;case"blocksToDays":e=6*e/86400;break;default:return void console.log("Ignoring unknown filter type")}a(e.toString())}const g=function(e){var t=e.network,n=e.path,o=e.defaultValue,s=e.filter,h=void 0===s?void 0:s,g=(0,r.useState)(""),k=g[0],f=g[1];return(0,r.useEffect)((function(){void 0!==h?m(o.toString(),h,t,f):f(o.toString());var e=void 0;switch(t){case l:e="wss://rpc.polkadot.io";break;case d:e="wss://kusama-rpc.polkadot.io/";break;case u:e="wss://statemine-rpc.polkadot.io/";break;case p:e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+net)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,n,f);case 2:if(void 0!==(i=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==h?m(i,h,t,f):f(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(s){console.log(s)}}}),[]),k}},48693:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(47940),s=["components"],l={id:"learn-identity",title:"Identity",sidebar_label:"Identity",description:"Learn about on-chain identity, judgements and registrars.",keywords:["identity","registrars","judgements"],slug:"../learn-identity"},d=void 0,u={unversionedId:"learn/learn-identity",id:"learn/learn-identity",title:"Identity",description:"Learn about on-chain identity, judgements and registrars.",source:"@site/../docs/learn/learn-identity.md",sourceDirName:"learn",slug:"/learn-identity",permalink:"/docs/learn-identity",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1659040559,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{id:"learn-identity",title:"Identity",sidebar_label:"Identity",description:"Learn about on-chain identity, judgements and registrars.",keywords:["identity","registrars","judgements"],slug:"../learn-identity"},sidebar:"docs",previous:{title:"Teleporting Assets",permalink:"/docs/learn-teleport"},next:{title:"W3F Registrar",permalink:"/docs/learn-registrar"}},p={},c=[{value:"Setting an Identity",id:"setting-an-identity",level:2},{value:"Format Caveat",id:"format-caveat",level:3},{value:"Judgements",id:"judgements",level:2},{value:"Registrars",id:"registrars",level:2},{value:"Becoming a Registrar",id:"becoming-a-registrar",level:3},{value:"Current Registrars",id:"current-registrars",level:3},{value:"Sub Accounts",id:"sub-accounts",level:2},{value:"Clearing and Killing an Identity",id:"clearing-and-killing-an-identity",level:2}],h={toc:c};function m(e){var t=e.components,l=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kusama provides a naming system that allows\nparticipants to add personal information to their on-chain account and subsequently ask for verification\nof this information by ",(0,r.kt)("a",{parentName:"p",href:"#registrars"},"registrars"),"."),(0,r.kt)("h2",{id:"setting-an-identity"},"Setting an Identity"),(0,r.kt)("p",null,"Users can set an identity by registering through default fields such as legal name, display name,\nwebsite, Twitter handle, Riot handle, etc. along with some extra, custom fields for which they would\nlike attestations (see ",(0,r.kt)("a",{parentName:"p",href:"#judgements"},"Judgements"),")."),(0,r.kt)("p",null,"Users must reserve funds in a bond to store their information on chain:\n","\n",(0,r.kt)(o.Z,{network:"kusama",path:"consts.identity.basicDeposit",defaultValue:33333e6,filter:"humanReadable",mdxType:"RPC"})," and\n","\n",(0,r.kt)(o.Z,{network:"kusama",path:"consts.identity.fieldDeposit",defaultValue:8333e6,filter:"humanReadable",mdxType:"RPC"}),"\nper each field beyond the legal name.\nThese funds are ",(0,r.kt)("em",{parentName:"p"},"locked"),", not spent - they are returned when the identity is cleared."),(0,r.kt)("p",null,"These amounts can also be extracted by querying constants through the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate/constants"},"Chain state constants")," tab on\nPolkadot-JS Apps."),(0,r.kt)("admonition",{title:"Instructions for setting and clearing Identities",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The procedure to set and clear identities is explained in detail in this support article -\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181981-how-to-set-and-clear-an-identity"},"How to set and clear an Identity")," ")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Ledger app doesn't support the extrinsic for setting identity yet. As a workaround, create a primary\nidentity with an on-chain account and then using that primary identity, assign a ",(0,r.kt)("a",{parentName:"p",href:"#sub-accounts"},"sub-identity"),"\nto the Ledger stash.")),(0,r.kt)("h3",{id:"format-caveat"},"Format Caveat"),(0,r.kt)("p",null,"Please note the following caveat: because the fields support different formats, from raw bytes to\nvarious hashes, a UI has no way of telling how to encode a given field it encounters. The Polkadot-JS\nUI currently encodes the raw bytes it encounters as UTF8 strings, which makes these values readable\non-screen. However, given that there are no restrictions on the values that can be placed into these\nfields, a different UI may interpret them as, for example, IPFS hashes or encoded bitmaps. This\nmeans any field stored as raw bytes will become unreadable by that specific UI. As field standards\ncrystallize, things will become easier to use but for now, every custom implementation of displaying\nuser information will likely have to make a conscious decision on the approach to take, or support\nmultiple formats and then attempt multiple encodings until the output makes sense."),(0,r.kt)("h2",{id:"judgements"},"Judgements"),(0,r.kt)("p",null,"After a user injects their information on chain, they can request judgement from a registrar. Users\ndeclare a maximum fee that they are willing to pay for judgement, and registrars whose fee is below\nthat amount can provide a judgement."),(0,r.kt)("p",null,"When a registrar provides judgement, they can select up to six levels of confidence in their\nattestation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unknown: The default value, no judgement made yet."),(0,r.kt)("li",{parentName:"ul"},"Reasonable: The data appears reasonable, but no in-depth checks (e.g. formal KYC process) were\nperformed."),(0,r.kt)("li",{parentName:"ul"},"Known Good: The registrar has certified that the information is correct."),(0,r.kt)("li",{parentName:"ul"},"Out of Date: The information used to be good, but is now out of date."),(0,r.kt)("li",{parentName:"ul"},"Low Quality: The information is low quality or imprecise, but can be fixed with an update."),(0,r.kt)("li",{parentName:"ul"},"Erroneous: The information is erroneous and may indicate malicious intent.")),(0,r.kt)("p",null,'A seventh state, "fee paid", is for when a user has requested judgement and it is in progress.\nInformation that is in this state or "erroneous" is "sticky" and cannot be modified; it can only be\nremoved by the complete removal of the identity.'),(0,r.kt)("p",null,"Registrars gain trust by performing proper due diligence and would presumably be replaced for\nissuing faulty judgements."),(0,r.kt)("p",null,"To be judged after submitting your identity information, go to the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},'"Extrinsics UI"')," and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," pallet, then\n",(0,r.kt)("inlineCode",{parentName:"p"},"requestJudgement"),". For the ",(0,r.kt)("inlineCode",{parentName:"p"},"reg_index")," put the index of the registrar you want to be judged by, and\nfor the ",(0,r.kt)("inlineCode",{parentName:"p"},"max_fee")," put the maximum you're willing to pay for these confirmations."),(0,r.kt)("p",null,"If you don't know which registrar to pick, first check the available registrars by going to\n",(0,r.kt)("a",{parentName:"p",href:"#"},'"Chain State UI"')," and selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"identity.registrars()")," to get the full list."),(0,r.kt)("admonition",{title:"Instructions for requesting and cancelling Identity judegements",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The procedure to request and cancel identity judgements is explained in detail in this\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181990-how-to-request-and-cancel-identity-judgement"},"support article"))),(0,r.kt)("h2",{id:"registrars"},"Registrars"),(0,r.kt)("p",null,"Registrars can set a fee for their services and limit their attestation to certain fields. For\nexample, a registrar could charge 0.1 KSM to\nverify one's legal name, email, and GPG key. When a user requests judgement, they will pay this fee\nto the registrar who provides the judgement on those claims. Users set a maximum fee they are willing\nto pay and only registrars below this amount would provide judgement."),(0,r.kt)("h3",{id:"becoming-a-registrar"},"Becoming a Registrar"),(0,r.kt)("p",null,"To become a registrar, submit a pre-image and proposal into\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy"},"Democracy"),", then wait for people to vote\non it. For best results, write a post about your identity and intentions beforehand, and once the\nproposal is in the queue ask people to endorse it so that it gets ahead in the referendum queue."),(0,r.kt)("p",null,"Here's how to submit a proposal to become a registrar:"),(0,r.kt)("p",null,'Go to the Democracy tab, select "Submit preimage", and input the information for this motion -\nnotably which account you\'re nominating to be a registrar in the ',(0,r.kt)("inlineCode",{parentName:"p"},"identity.setRegistrar")," function."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting a registrar",src:n(59097).Z,width:"841",height:"417"})),(0,r.kt)("p",null,"Copy the preimage hash. In the above image, that's\n",(0,r.kt)("inlineCode",{parentName:"p"},"0x90a1b2f648fc4eaff4f236b9af9ead77c89ecac953225c5fafb069d27b7131b7"),". Submit the preimage by signing\na transaction."),(0,r.kt)("p",null,'Next, select "Submit Proposal" and enter the previously copied preimage hash. The ',(0,r.kt)("inlineCode",{parentName:"p"},"locked balance"),"\nfield needs to be at least\n","",(0,r.kt)(o.Z,{network:"kusama",path:"consts.identity.basicDeposit",defaultValue:33333e6,filter:"humanReadable",mdxType:"RPC"}),".\nYou can find out the minimum by querying the chain state under ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Chain State")," -> Constants -> democracy -> minimumDeposit."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Submitting a proposal",src:n(45208).Z,width:"852",height:"337"})),(0,r.kt)("p",null,"At this point, DOT holders can endorse the motion. With enough endorsements, the motion\nwill become a referendum, which is then voted on. If it passes, users will be able to\nrequest judgement from this registrar."),(0,r.kt)("h3",{id:"current-registrars"},"Current Registrars"),(0,r.kt)("p",null,"There are multiple registrars on Kusama.\nUnless no additional information is available here, you must reach out to specific registrars\nindividually if you want to be judged by those."),(0,r.kt)("p",null,"Registrar 0:  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"URL"),": ",(0,r.kt)("a",{parentName:"p",href:"https://registrar.web3.foundation/"},"https://registrar.web3.foundation/"),"  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Account"),": H4XieK3r3dq3VEvRtqZR7wN7a1UEkXxf14orRsEfdFjmgkF,  ",(0,r.kt)("br",null),"","\n",(0,r.kt)("strong",{parentName:"p"},"Fee"),":  0.04 KSM  ",(0,r.kt)("br",null),"",""),(0,r.kt)("p",null,"Registrar 1:  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"URL"),": ",(0,r.kt)("a",{parentName:"p",href:"https://registrar.d11d.net/"},"https://registrar.d11d.net/"),"  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Account"),": Fom9M5W6Kck1hNAiE2mDcZ67auUCiNTzLBUdQy4QnxHSxdn,  ",(0,r.kt)("br",null),"","\n",(0,r.kt)("strong",{parentName:"p"},"Fee"),": 0.65 KSM,  ",(0,r.kt)("br",null),"",""),(0,r.kt)("p",null,"Registrar 2:  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Account"),": EK8veMNH6sVtvhSRo4q1ZRh6huCDm69gxK4eN5MFoZzo3G7,  ",(0,r.kt)("br",null),"","\n",(0,r.kt)("strong",{parentName:"p"},"Fee"),": 1 KSM,  ",(0,r.kt)("br",null),""),(0,r.kt)("p",null,"Registrar 3:  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Account"),": GLiebiQp5f6G5vNcc7BgRE9T3hrZSYDwP6evERn3hEczdaM,  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Fee"),": 1 KSM,  ",(0,r.kt)("br",null),""),(0,r.kt)("p",null,"Registrar 4:  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Account"),": GhmpzxUyTVsFJhV7s2wNvD8v3Bgikb6WvYjj4QSuSScAUw6,  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Fee"),": 0.04 KSM.  ",(0,r.kt)("br",null),""),(0,r.kt)("p",null,"To find out how to contact the registrar after the application for judgement or to learn who they\nare, we can check their identity by adding them to our Address Book. Their identity will be\nautomatically loaded."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chevdor is registrar #1",src:n(65494).Z,width:"579",height:"217"})),(0,r.kt)("h2",{id:"sub-accounts"},"Sub Accounts"),(0,r.kt)("p",null,'Users can also link accounts by setting "sub accounts", each with its own identity, under a primary\naccount. The system reserves a bond for each sub account. An example of how you might use this would\nbe a validation company running multiple validators. A single entity, "My Staking Company", could\nregister multiple sub accounts that represent the ',(0,r.kt)("a",{parentName:"p",href:"/docs/learn-keys"},"Stash accounts")," of each of their\nvalidators."),(0,r.kt)("p",null,"An account can have a maximum of 100 sub-accounts. Note that a deposit of\n","\n",(0,r.kt)(o.Z,{network:"kusama",path:"consts.identity.subAccountDeposit",defaultValue:6666e6,filter:"humanReadable",mdxType:"RPC"}),"\nis required for every sub-account."),(0,r.kt)("admonition",{title:"Explainer article and video on setting sub-identities",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Here is the ",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181991-how-to-set-identities-for-sub-accounts"},"how to set sub-identities"),"\narticle and a ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=0Yh1JYg3ZKU"},"video tutorial")," on setting sub-identities using\nPolkadot-JS UI")),(0,r.kt)("h2",{id:"clearing-and-killing-an-identity"},"Clearing and Killing an Identity"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Clearing:")," Users can clear their identity information and have their deposit returned. Clearing\nan identity also clears all sub accounts and returns their deposits."),(0,r.kt)("p",null,"To clear an identity:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts UI"),"."),(0,r.kt)("li",{parentName:"ol"},"Click the three dots corresponding to the account you want to clear and select 'Set on-chain\nidentity'."),(0,r.kt)("li",{parentName:"ol"},"Select 'Clear Identity', and sign and submit the transaction.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Killing:")," The Council can kill an identity that it deems erroneous. This results in a slash of\nthe deposit."))}m.isMDXComponent=!0},59097:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/12-0b101bf170ff7602551199f625c54b7d.jpg"},45208:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/13-df6ee832e734da72fd9461f4446ea3b9.jpg"},65494:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/16-95dc969648d23cdfdd68bf04135818bb.jpg"},95856:()=>{},46601:()=>{}}]);