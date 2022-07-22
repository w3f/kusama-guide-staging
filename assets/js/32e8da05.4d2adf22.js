(self.webpackChunk=self.webpackChunk||[]).push([[6140],{47940:(a,e,t)=>{"use strict";t.d(e,{Z:()=>h});var n=t(74165),o=t(15861),i=t(67294),r=t(11306),s=t(76670),l="polkadot",c="kusama";function d(a,e,t){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)((0,n.Z)().mark((function a(e,t,o){var i,l,c,d,p;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=void 0,l=void 0,a.t0=e,a.next="polkadot"===a.t0?5:"kusama"===a.t0?7:9;break;case 5:return i="wss://rpc.polkadot.io",a.abrupt("break",10);case 7:return i="wss://kusama-rpc.polkadot.io/",a.abrupt("break",10);case 9:console.log("Unknown socket url provided, no connection made.");case 10:if(void 0!==i){a.next=14;break}return a.abrupt("return");case 14:return c=new r.U(i),a.next=17,s.G.create({provider:c});case 17:d=a.sent,(p=t.split(".")).forEach((function(a){d=d[a]})),a.t1=p[0],a.next="consts"===a.t1?23:"query"===a.t1?25:30;break;case 23:return l=d.toString(),a.abrupt("break",31);case 25:return a.next=27,d();case 27:return l=(l=a.sent).toString(),a.abrupt("break",31);case 30:console.log("Unknown path prefix ("+p[0]+") in "+t);case 31:if(void 0!==l){a.next=33;break}return a.abrupt("return");case 33:o(l);case 34:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function u(a,e,t,n){var o={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"}};switch(e){case"humanReadable":var i=void 0;if(t===l)i=3;else{if(t!==c)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=6}a=((a=parseFloat(a))/o[t].precision).toFixed(i)+" "+o[t].symbol;break;case"blocksToDays":a=6*a/86400;break;default:return void console.log("Ignoring unknown filter type")}n(a.toString())}const h=function(a){var e=a.network,t=a.path,r=a.defaultValue,s=a.filter,p=void 0===s?void 0:s,h=(0,i.useState)(""),m=h[0],w=h[1];return(0,i.useEffect)((function(){void 0!==p?u(r.toString(),p,e,w):w(r.toString());var a=void 0;switch(e){case l:a="wss://rpc.polkadot.io";break;case c:a="wss://kusama-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+net)}if(void 0===a)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var a=(0,o.Z)((0,n.Z)().mark((function a(){return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d(e,t,w);case 2:void 0!==p&&u(r.toString(),p,e,w);case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),m}},65779:(a,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),r=t(47940),s=["components"],l={id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",keywords:["crowdloans","parachains","lending","auction"],slug:"../learn-crowdloans"},c=void 0,d={unversionedId:"learn/learn-crowdloans",id:"learn/learn-crowdloans",title:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",source:"@site/../docs/learn/learn-crowdloans.md",sourceDirName:"learn",slug:"/learn-crowdloans",permalink:"/docs/learn-crowdloans",draft:!1,tags:[],version:"current",lastUpdatedBy:"alfarok",lastUpdatedAt:1658262345,formattedLastUpdatedAt:"Jul 19, 2022",frontMatter:{id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",keywords:["crowdloans","parachains","lending","auction"],slug:"../learn-crowdloans"},sidebar:"docs",previous:{title:"Bridges",permalink:"/docs/learn-bridges"},next:{title:"Using ENS with DOT/KSM accounts",permalink:"/docs/ens"}},p={},u=[{value:"Starting a Crowdloan Campaign",id:"starting-a-crowdloan-campaign",level:2},{value:"Supporting a Crowdloan Campaign",id:"supporting-a-crowdloan-campaign",level:2},{value:"Contributing to Crowdloans",id:"contributing-to-crowdloans",level:3},{value:"Withdraw Crowdloaned Tokens",id:"withdraw-crowdloaned-tokens",level:3}],h={toc:u};function m(a){var e=a.components,l=(0,o.Z)(a,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kusama allows parachains to source tokens\nfor their parachain bids in a decentralised crowdloan. "),(0,i.kt)("admonition",{title:"Contributing to a crowdloan",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you are here for guidance on how to\ncontribute for a crowdloan, watch the video below or read this ",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000177341-how-to-participate-in-crowdloans-on-polkadot-or-kusama"},"support article on crowdloans"),".")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/AA9mPANmzmU"},(0,i.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/AA9mPANmzmU/0.jpg",alt:"Crowdloans on Polkadot JS"}))),(0,i.kt)("admonition",{title:"Testing on Rococo",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For information on how to participate in the crowdloan and parachain auction testing on\nRococo, please see the ","",(0,i.kt)("a",{parentName:"p",href:"/docs/build-pdk##testing-a-parachains:-rococo-testnet"},"Rococo content"),".")),(0,i.kt)("h2",{id:"starting-a-crowdloan-campaign"},"Starting a Crowdloan Campaign"),(0,i.kt)("p",null,"Anyone who has registered a parachain can create a new crowdloan campaign for a slot\nby depositing a specified number of tokens. A campaign is configured as a\nrange of slots (i.e. the duration of the ","\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachain")," will bid for), a cap, and a duration.\nThe duration can last over several auctions, meaning that the team will not need to restart the\ncampaign just because they do not secure a slot on their first attempt."),(0,i.kt)("admonition",{title:"Crowdloan Submission Deposit Required",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In order to create a new crowdloan campaign, your account must have\n10 KSM transferrable which will be reserved for\nthe duration of the crowdloan")),(0,i.kt)("p",null,"When setting the parameters of a crowdloan campaign, consider the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A crowdloan campaign can start well before the auction slot is opened. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The campaign creation form requires setting a crowdloan cap ","\u2014"," the maximum amount a campaign\ncan collect. A team can still win an ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"auction")," if the cap is not reached.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Set the desired end of the crowdloan in the "Ending block" field. This helps to ensure that the\ncrowdloan is live during the entire duration of the auction. For example, if an auction starts in\nthree days and will last for five days, you may want to set your crowdloan to end in 10 days, or a\nsimilar timescale. ')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"One way of calculating the ending block number is adding:  ",(0,i.kt)("inlineCode",{parentName:"p"},"(10 * 60 * 24 * 7) * (x * 6) + y")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"x")," is the number of auction periods you want the crowdloan to continue for ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"y")," is the current block number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"(Blocks/Min * Min/Hour * Hour/Day * Day/Week) * (x[Period] * Week/Period) + y[BlockNumber]"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'"First period" field refers to the first period you want to bid for. If the current auction\nencompasses periods ',(0,i.kt)("inlineCode",{parentName:"p"},"(3, 4, 5, 6)"),", your first period can be at least ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),". The last slot must also\nbe within that range.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can only cancel an ongoing crowdloan if no contributions have been made. Your deposit will be\nreturned to you."))))),(0,i.kt)("p",null,"Prior to the start of the crowdloan campaign, the owner will upload the parachain data. Once\nthe crowdloan is live, ",(0,i.kt)("strong",{parentName:"p"},"the parachain configuration will be locked")," and will be deployed as\nthe parachain's runtime.  Of course, once the parachain is running it can always change via\nruntime upgrades (as determined through its own local governance)."),(0,i.kt)("h2",{id:"supporting-a-crowdloan-campaign"},"Supporting a Crowdloan Campaign"),(0,i.kt)("h3",{id:"contributing-to-crowdloans"},"Contributing to Crowdloans"),(0,i.kt)("admonition",{title:"Minimum Crowdloan Contribution",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The minimum balance for contributions for a crowdloan campaign is\ncurrently set to\n","",(0,i.kt)(r.Z,{network:"kusama",path:"consts.crowdloan.minContribution",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),".\nThis is in an attempt to make crowdloans as accessible as possible while maintaining a\nbalance to justify the use of the network's resources. ")),(0,i.kt)("p",null,"Each created campaign will have an index. Once a crowdloan campaign is open, anyone can participate\nby sending a special transaction that references the campaign's index. Tokens used to participate\nmust be transferable ","\u2014"," that is, not locked for any reason, including staking, vesting, and\ngovernance ","\u2014"," because they will be moved into a module-controlled account that was generated\nuniquely for this campaign."),(0,i.kt)("admonition",{title:"Do not send Crowdloan contributions directly to the Parachain address",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"All crowdloan contributions are handled by the Crowdloan module\u2019s logic where a\ncampaign is identified by an index, not by address. **Never transfer tokens to an address in\nsupport of a campaign. ")),(0,i.kt)("p",null,"It is up to individual parachain teams to decide if and how they want to reward participants who\nforgo staking and choose to lock their tokens in support of the parachain\u2019s campaign. As one can\nimagine, rewards will take many forms and may vary widely among projects."),(0,i.kt)("p",null,"If a crowdloan campaign is successful, that parachain will be on-boarded to the Relay Chain. The\ncollective tokens will be locked in that parachain's account for the entire duration that it is\nactive."),(0,i.kt)("h3",{id:"withdraw-crowdloaned-tokens"},"Withdraw Crowdloaned Tokens"),(0,i.kt)("p",null,"Participants will be able to reclaim their tokens in one of two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the campaign was successful, then the parachain will enter a retirement phase at the end of its\nlease. During this phase, participants can withdraw the tokens with which they participated."),(0,i.kt)("li",{parentName:"ul"},"If the campaign was unsuccessful, then this retirement phase will begin at the campaign's\nconfigured end, and participants can likewise withdraw their tokens.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"crowdloan.contribute")," extrinsic is trustless"),(0,i.kt)("p",{parentName:"admonition"},"Contributing to a crowdloan through Polkadot JS Apps (which uses ",(0,i.kt)("inlineCode",{parentName:"p"},"crowdloan.contribute")," extrinsic)\nguarantees that you receive your tokens after the campaign ends. If you intend to make contributions\nthrough other websites and custodial service providers like central exchanges, review their terms and\nconditions thoroughly and assess the risks associated. ")),(0,i.kt)("p",null,"Note: When the lease periods won by the crowdloan have finished, or the crowdloan has ended without\nwinning a slot, anyone can trigger the refund of crowdloan contributions back to their original\nowners. This can be done through the permissionless ",(0,i.kt)("inlineCode",{parentName:"p"},"crowdloan.refund")," extrinsic available on Polkadot\nJS Apps > Developer > Extrinsics page, by specifying the parachain ID. This extrinsic may need to be\nissued multiple times, if the list of contributors is too long. All contributions must be returned before\nthe crowdloan is entirely deleted from the system."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Crowdloan refund",src:t(72239).Z,width:"1440",height:"552"})),(0,i.kt)("p",null,"Many projects will have dashboards available that allow users to participate in their crowdloans.\nPolkadotJS apps also offers a breakdown of ongoing crowdloans on the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"},"Apps page"),"."),(0,i.kt)("p",null,"Here is an example of the crowdloans in play during the very first Kusama auction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"crowdloan dashboard",src:t(30931).Z,width:"2328",height:"1540"})),(0,i.kt)("p",null,"Furthermore, check out this video on\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YrTxDufrcQM"},"How to Participate in Crowdloans")," for steps on how to\naccess available crowdloans on PolkadotJS apps."))}m.isMDXComponent=!0},72239:(a,e,t)=>{"use strict";t.d(e,{Z:()=>n});const n=t.p+"assets/images/crowdloan-refund-a452b6b303e27c25b3e87c42577a9265.png"},30931:(a,e,t)=>{"use strict";t.d(e,{Z:()=>n});const n=t.p+"assets/images/kusama-crowdloans-0237f5d573dee5e221b51678b2ed25f1.png"},69396:()=>{},46601:()=>{}}]);