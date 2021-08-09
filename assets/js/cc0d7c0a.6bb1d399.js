(self.webpackChunk=self.webpackChunk||[]).push([[9791],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80056:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>d,toc:()=>u,default:()=>p});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),s=["components"],o={id:"learn-identity",title:"Identity",sidebar_label:"Identity"},l=void 0,d={unversionedId:"learn-identity",id:"learn-identity",isDocsHomePage:!1,title:"Identity",description:"Polkadot provides a naming system that allows participants to add personal information to their",source:"@site/../docs/learn-identity.md",sourceDirName:".",slug:"/learn-identity",permalink:"/docs/learn-identity",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-identity.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1628521453,formattedLastUpdatedAt:"8/9/2021",frontMatter:{id:"learn-identity",title:"Identity",sidebar_label:"Identity"}},u=[{value:"Setting an Identity",id:"setting-an-identity",children:[{value:"Format Caveat",id:"format-caveat",children:[]}]},{value:"Registrars",id:"registrars",children:[{value:"Becoming a registrar",id:"becoming-a-registrar",children:[]}]},{value:"Judgements",id:"judgements",children:[]},{value:"Cancelling Judgements",id:"cancelling-judgements",children:[{value:"Kusama Registrars",id:"kusama-registrars",children:[]},{value:"Polkadot Registrars",id:"polkadot-registrars",children:[]},{value:"Requesting Judgement",id:"requesting-judgement",children:[]}]},{value:"Sub Accounts",id:"sub-accounts",children:[]},{value:"Clearing and Killing an Identity",id:"clearing-and-killing-an-identity",children:[]}],c={toc:u};function p(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot provides a naming system that allows participants to add personal information to their\non-chain account and subsequently ask for verification of this information by\n",(0,r.kt)("a",{parentName:"p",href:"#registrars"},"registrars"),"."),(0,r.kt)("h2",{id:"setting-an-identity"},"Setting an Identity"),(0,r.kt)("p",null,"Users can set an identity by registering through default fields such as legal name, display name,\nwebsite, Twitter handle, Riot handle, etc. along with some extra, custom fields for which they would\nlike attestations (see ",(0,r.kt)("a",{parentName:"p",href:"#judgements"},"Judgements"),")."),(0,r.kt)("p",null,"Users must reserve funds in a bond to store their information on chain:\n{{ identity",(0,r.kt)("em",{parentName:"p"},"reserve_funds }}, and 0.008333 per each field beyond the legal name.\nThese funds are _locked"),", not spent - they are returned when the identity is cleared."),(0,r.kt)("p",null,"These amounts can also be extracted by querying constants through the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate/constants"},"Chain state constants")," tab on\npolkadot.js/apps."),(0,r.kt)("p",null,"First, select ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"selected constant query"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Identity as the selected constant query",src:n(90275).Z})),(0,r.kt)("p",null,'Then on the right-hand side, you can select the constants that you would like to view and add them\nonto the webpage by clicking the "plus" icon at the end of the bar.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Identity as the selected constant query",src:n(43696).Z})),(0,r.kt)("p",null,"Each field can store up to 32 bytes of information, so the data must be less than that. When\ninputting the data manually through the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsics UI"),",\na ",(0,r.kt)("a",{parentName:"p",href:"https://onlineutf8tools.com/convert-utf8-to-bytes"},"UTF8 to bytes")," converter can help."),(0,r.kt)("p",null,'The easiest way to add the built-in fields is to click the gear icon next to your account and select\n"Set on-chain identity".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Gear icon provides the option to set identity",src:n(84800).Z})),(0,r.kt)("p",null,"A popup will appear, offering the default fields."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Identity field setup popup",src:n(64041).Z})),(0,r.kt)("p",null,'To add custom fields beyond the default ones, use the Extrinsics UI to submit a raw transaction by\nfirst clicking "Add Item" and adding any field name you like. The example below adds a field\n',(0,r.kt)("inlineCode",{parentName:"p"},"steam"),", which is a user's ",(0,r.kt)("a",{parentName:"p",href:"https://store.steampowered.com"},"Steam"),' username. The first value is the\nfield name in bytes ("steam") and the second is the account name in bytes ("theswader"). The display\nname also has to be provided, otherwise, the Identity pallet would consider it wiped if we submitted\nit with the "None" option still selected. That is to say, every time you make a change to your\nidentity values, you need to re-submit the entire set of fields: the write operation is always\n"overwrite", never "append".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting a custom field",src:n(60289).Z})),(0,r.kt)("p",null,"Note that custom fields are not shown in the UI by default:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Only built-in fields are shown",src:n(80339).Z})),(0,r.kt)("p",null,"The rendering of such custom values is, ultimately, up to the UI/dapp makers. In the case of\nPolkadotJS, the team prefers to only show official fields for now. If you want to check that the\nvalues are still stored, use the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Chain State UI")," to\nquery the active account's identity info:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Raw values of custom fields are available on-chain",src:n(27503).Z})),(0,r.kt)("p",null,"It is up to your own UI or dapp to then do with this data as it pleases. The data will remain\navailable for querying via the Polkadot API, so you don't have to rely on the PolkadotJS UI."),(0,r.kt)("p",null,"You can have a maximum of 100 custom fields."),(0,r.kt)("h3",{id:"format-caveat"},"Format Caveat"),(0,r.kt)("p",null,"Please note the following caveat: because the fields support different formats, from raw bytes to\nvarious hashes, a UI has no way of telling how to encode a given field it encounters. The PolkadotJS\nUI currently encodes the raw bytes it encounters as UTF8 strings, which makes these values readable\non-screen. However, given that there are no restrictions on the values that can be placed into these\nfields, a different UI may interpret them as, for example, IPFS hashes or encoded bitmaps. This\nmeans any field stored as raw bytes will become unreadable by that specific UI. As field standards\ncrystallize, things will become easier to use but for now, every custom implementation of displaying\nuser information will likely have to make a conscious decision on the approach to take, or support\nmultiple formats and then attempt multiple encodings until the output makes sense."),(0,r.kt)("h2",{id:"registrars"},"Registrars"),(0,r.kt)("p",null,"Registrars can set a fee for their services and limit their attestation to certain fields. For\nexample, a registrar could charge 1 DOT to verify one's legal name, email, and GPG key. When a user\nrequests judgement, they will pay this fee to the registrar who provides the judgement on those\nclaims. Users set a maximum fee they are willing to pay and only registrars below this amount would\nprovide judgement."),(0,r.kt)("h3",{id:"becoming-a-registrar"},"Becoming a registrar"),(0,r.kt)("p",null,"To become a registrar, submit a pre-image and proposal into Democracy, then wait for people to vote\non it. For best results, write a post about your identity and intentions beforehand, and once the\nproposal is in the queue ask people to second it so that it gets ahead in the referendum queue."),(0,r.kt)("p",null,"Here's how to submit a proposal to become a registrar:"),(0,r.kt)("p",null,'Go to the Democracy tab, select "Submit preimage", and input the information for this motion -\nnotably which account you\'re nominating to be a registrar in the ',(0,r.kt)("inlineCode",{parentName:"p"},"identity.setRegistrar")," function."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting a registrar",src:n(85085).Z})),(0,r.kt)("p",null,"Copy the preimage hash. In the above image, that's\n",(0,r.kt)("inlineCode",{parentName:"p"},"0x90a1b2f648fc4eaff4f236b9af9ead77c89ecac953225c5fafb069d27b7131b7"),". Submit the preimage by signing\na transaction."),(0,r.kt)("p",null,'Next, select "Submit Proposal" and enter the previously copied preimage hash. The ',(0,r.kt)("inlineCode",{parentName:"p"},"locked balance"),"\nfield needs to be at least 0.033333 KSM. You can find out the minimum by\nquerying the chain state under ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Chain State")," -> Constants\n-> democracy -> minimumDeposit."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Submitting a proposal",src:n(19200).Z})),(0,r.kt)("p",null,"At this point, DOT holders can second the motion. With enough seconds, the motion will become a\nreferendum, which is then voted on. If it passes, users will be able to request judgement from this\nregistrar."),(0,r.kt)("h2",{id:"judgements"},"Judgements"),(0,r.kt)("p",null,"After a user injects their information on chain, they can request judgement from a registrar. Users\ndeclare a maximum fee that they are willing to pay for judgement, and registrars whose fee is below\nthat amount can provide a judgement."),(0,r.kt)("p",null,"When a registrar provides judgement, they can select up to six levels of confidence in their\nattestation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unknown: The default value, no judgement made yet."),(0,r.kt)("li",{parentName:"ul"},"Reasonable: The data appears reasonable, but no in-depth checks (e.g. formal KYC process) were\nperformed."),(0,r.kt)("li",{parentName:"ul"},"Known Good: The registrar has certified that the information is correct."),(0,r.kt)("li",{parentName:"ul"},"Out of Date: The information used to be good, but is now out of date."),(0,r.kt)("li",{parentName:"ul"},"Low Quality: The information is low quality or imprecise, but can be fixed with an update."),(0,r.kt)("li",{parentName:"ul"},"Erroneous: The information is erroneous and may indicate malicious intent.")),(0,r.kt)("p",null,'A seventh state, "fee paid", is for when a user has requested judgement and it is in progress.\nInformation that is in this state or "erroneous" is "sticky" and cannot be modified; it can only be\nremoved by complete removal of the identity.'),(0,r.kt)("p",null,"Registrars gain trust by performing proper due diligence and would presumably be replaced for\nissuing faulty judgements."),(0,r.kt)("p",null,"To be judged after submitting your identity information, go to the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},'"Extrinsics UI"')," and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," pallet, then\n",(0,r.kt)("inlineCode",{parentName:"p"},"requestJudgement"),". For the ",(0,r.kt)("inlineCode",{parentName:"p"},"reg_index")," put the index of the registrar you want to be judged by, and\nfor the ",(0,r.kt)("inlineCode",{parentName:"p"},"max_fee")," put the maximum you're willing to pay for these confirmations."),(0,r.kt)("p",null,"If you don't know which registrar to pick, first check the available registrars by going to\n",(0,r.kt)("a",{parentName:"p",href:"#"},'"Chain State UI"')," and selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"identity.registrars()")," to get the full list."),(0,r.kt)("h2",{id:"cancelling-judgements"},"Cancelling Judgements"),(0,r.kt)("p",null,"You may decide that you do not want to be judged by a registrar (for instance, because you realize\nyou entered incorrect data or selected the wrong registrar). In this case, after submitting the\nrequest for judgement but before your identity has been judged, you can issue a call to cancel the\njudgement using an extrinsic."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cancel Registrar",src:n(91552).Z})),(0,r.kt)("p",null,"To do this, first, go to the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},'"Extrinsics UI"')," and select\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," pallet, then ",(0,r.kt)("inlineCode",{parentName:"p"},"cancelRequest"),". Ensure that you are calling this from the correct\naccount (the one for which you initially requested judgement). For the ",(0,r.kt)("inlineCode",{parentName:"p"},"reg_index"),", put the index of\nthe registrar from which you requested judgement."),(0,r.kt)("p",null,"Submit the transaction, and the requested judgement will be cancelled."),(0,r.kt)("h3",{id:"kusama-registrars"},"Kusama Registrars"),(0,r.kt)("p",null,"There are multiple registrars on Kusama. Unless no additional information is available here, you must\nreach out to specific registrars individually if you want to be judged by those."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Registrar 0:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"URL: ",(0,r.kt)("a",{parentName:"li",href:"https://registrar.web3.foundation/"},"https://registrar.web3.foundation/")),(0,r.kt)("li",{parentName:"ul"},"Account: H4XieK3r3dq3VEvRtqZR7wN7a1UEkXxf14orRsEfdFjmgkF,"),(0,r.kt)("li",{parentName:"ul"},"Fee: 0.04 KSM"))),(0,r.kt)("li",{parentName:"ul"},"Registrar 1:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"URL: ",(0,r.kt)("a",{parentName:"li",href:"https://registrar.d11d.net/"},"https://registrar.d11d.net/")),(0,r.kt)("li",{parentName:"ul"},"Account: Fom9M5W6Kck1hNAiE2mDcZ67auUCiNTzLBUdQy4QnxHSxdn,"),(0,r.kt)("li",{parentName:"ul"},"Fee: 0.65 KSM,"))),(0,r.kt)("li",{parentName:"ul"},"Registrar 2:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Account: EK8veMNH6sVtvhSRo4q1ZRh6huCDm69gxK4eN5MFoZzo3G7,"),(0,r.kt)("li",{parentName:"ul"},"Fee: 1 KSM,"))),(0,r.kt)("li",{parentName:"ul"},"Registrar 3:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Account: GLiebiQp5f6G5vNcc7BgRE9T3hrZSYDwP6evERn3hEczdaM,"),(0,r.kt)("li",{parentName:"ul"},"Fee: 1 KSM,"))),(0,r.kt)("li",{parentName:"ul"},"Registrar 4:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Account: GhmpzxUyTVsFJhV7s2wNvD8v3Bgikb6WvYjj4QSuSScAUw6,"),(0,r.kt)("li",{parentName:"ul"},"Fee: 0.04 KSM,")))),(0,r.kt)("p",null,"To find out how to contact the registrar after the application for judgement or to learn who they\nare, we can check their identity by adding them to our Address Book. Their identity will be\nautomatically loaded."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chevdor is registrar #1",src:n(38078).Z})),(0,r.kt)("h3",{id:"polkadot-registrars"},"Polkadot Registrars"),(0,r.kt)("p",null,"There are multiple registrars on Polkadot. Unless no additional information is available here, you must\nreach out to specific registrars individually if you want to be judged by those."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Registrar 0:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"URL: ",(0,r.kt)("a",{parentName:"li",href:"https://registrar.web3.foundation/"},"https://registrar.web3.foundation/")),(0,r.kt)("li",{parentName:"ul"},"Account: 12j3Cz8qskCGJxmSJpVL2z2t3Fpmw3KoBaBaRGPnuibFc7o8,"),(0,r.kt)("li",{parentName:"ul"},"Fee: 0 DOT,"))),(0,r.kt)("li",{parentName:"ul"},"Registrar 1:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"URL: ",(0,r.kt)("a",{parentName:"li",href:"https://registrar.d11d.net/"},"https://registrar.d11d.net/")),(0,r.kt)("li",{parentName:"ul"},"Account: 1Reg2TYv9rGfrQKpPREmrHRxrNsUDBQKzkYwP1UstD97wpJ,"),(0,r.kt)("li",{parentName:"ul"},"Fee: 10 DOT,"))),(0,r.kt)("li",{parentName:"ul"},"Registrar 2:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Account: 1EpXirnoTimS1SWq52BeYx7sitsusXNGzMyGx8WPujPd1HB,"),(0,r.kt)("li",{parentName:"ul"},"Fee: 0 DOT,")))),(0,r.kt)("h3",{id:"requesting-judgement"},"Requesting Judgement"),(0,r.kt)("p",null,"Requesting judement follows the same process regardless of whether you're on the Kusama or Polkadot\nnetworks. Select one of the registrars from the query you made above."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Requesting judgement",src:n(35245).Z})),(0,r.kt)("p",null,"This will make your identity go from unjudged:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An unjudged identity",src:n(72374).Z})),(0,r.kt)("p",null,'To "waiting":'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A pending identity",src:n(41665).Z})),(0,r.kt)("p",null,"At this point, direct contact with the registrar is required - the contact info is in their identity\nas shown above. Each registrar will have their own set of procedures to verify your identity and\nvalues, and only once you've satisfied their requirements will the process continue."),(0,r.kt)("p",null,"Once the registrar has confirmed the identity, a green checkmark should appear next to your account\nname with the appropriate confidence level:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A confirmed identity",src:n(45785).Z})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that changing even a single field's value after you've been verified will un-verify your\naccount and you will need to start the judgement process anew. However, you can still change fields\nwhile the judgement is going on - it's up to the registrar to keep an eye on the changes.")),(0,r.kt)("h2",{id:"sub-accounts"},"Sub Accounts"),(0,r.kt)("p",null,'Users can also link accounts by setting "sub accounts", each with its own identity, under a primary\naccount. The system reserves a bond for each sub account. An example of how you might use this would\nbe a validation company running multiple validators. A single entity, "My Staking Company", could\nregister multiple sub accounts that represent the ',(0,r.kt)("a",{parentName:"p",href:"/docs/learn-keys"},"Stash accounts")," of each of their\nvalidators."),(0,r.kt)("p",null,"An account can have a maximum of 100 sub-accounts."),(0,r.kt)("p",null,"To register a sub-account on an existing account, you must currently use the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsics UI"),". There, select the identity pallet, then\n",(0,r.kt)("inlineCode",{parentName:"p"},"setSubs"),' as the function to use. Click "Add Item" for every child account you want to add to the\nparent sender account. The value to put into the Data field of each parent is the optional name of\nthe sub-account. If omitted, the sub-account will inherit the parent\'s name and be displayed as\n',(0,r.kt)("inlineCode",{parentName:"p"},"parent/parent")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"parent/child"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sub account setup",src:n(46180).Z})),(0,r.kt)("p",null,"Note that a deposit of 0.006666 is required for every sub-account."),(0,r.kt)("p",null,"You can use\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/chainstate/constants"},"polkadot.js/apps"),"\nagain to verify this amount by querying the ",(0,r.kt)("inlineCode",{parentName:"p"},"identity.subAccountDeposit")," constant."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sub account constant",src:n(67772).Z})),(0,r.kt)("h2",{id:"clearing-and-killing-an-identity"},"Clearing and Killing an Identity"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Clearing:")," Users can clear their identity information and have their deposit returned. Clearing\nan identity also clears all sub accounts and returns their deposits."),(0,r.kt)("p",null,"To clear an identity:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts UI"),"."),(0,r.kt)("li",{parentName:"ol"},"Click the three dots corresponding to the account you want to clear and select 'Set on-chain\nidentity'."),(0,r.kt)("li",{parentName:"ol"},"Select 'Clear Identity', and sign and submit the transaction.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Killing:")," The Council can kill an identity that it deems erroneous. This results in a slash of\nthe deposit."))}p.isMDXComponent=!0},84800:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/01-00f3ea87da232c2f7d999dc39405e782.jpg"},64041:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/02-e55b0d8720dbc6f43d42bbb7fa6c78ba.jpg"},60289:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-4b7ddfc500350cc20dd455983c451be4.jpg"},80339:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/04-1cfbb35efba85f7965b3907d270c7fa8.jpg"},27503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/05-473baf936b41cf5c55033313e658c776.jpg"},46180:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/06-8db63b396f151dd34f3acbc3b25f74d5.jpg"},72374:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/07-044349ecbf6f78cbe81ee21a35fb8e65.jpg"},35245:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/08-397ceb01e2b7d58432d0a28b3443b432.jpg"},41665:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/09-c7de0d6dbccae8cfa559554ff2df8552.jpg"},45785:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/10-0cd8e1b33492eb529995908c5fabbf61.jpg"},85085:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/12-0b101bf170ff7602551199f625c54b7d.jpg"},19200:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/13-df6ee832e734da72fd9461f4446ea3b9.jpg"},38078:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/16-95dc969648d23cdfdd68bf04135818bb.jpg"},90275:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/17-cded73776b2061a949d2984a8e92200c.jpg"},43696:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/18-d8d4adc982de74e0e7bbdd45cbf2c442.jpg"},67772:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/19-1753b99e43aed55796a436ed73b4ba02.jpg"},91552:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/registrar_cancel_judgement-a3c97ff1872f5450a2793271d139e23a.png"}}]);