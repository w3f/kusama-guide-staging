(self.webpackChunk=self.webpackChunk||[]).push([[2791],{47940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>k});var n=a(74165),o=a(15861),i=a(67294),s=a(98562),r=a(73100),l="polkadot",u="kusama",d="statemine",p="statemint";function c(t,e,a){return m.apply(this,arguments)}function m(){return(m=(0,o.Z)((0,n.Z)().mark((function t(e,a,o){var i,l,u,d,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=void 0,l=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){t.next=18;break}return t.abrupt("return");case 18:return u=new s.U(i),t.next=21,r.G.create({provider:u});case 21:d=t.sent,(p=a.split(".")).forEach((function(t){d=d[t]})),t.t1=p[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return l=d.toString(),t.abrupt("break",35);case 29:return t.next=31,d();case 31:return l=(l=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+a);case 35:if(void 0!==l){t.next=37;break}return t.abrupt("return");case 37:o(l);case 38:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,e,a,n){var o={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};switch(e){case"humanReadable":var i=void 0;if(a===l||a===p)i=3;else{if(a!==u&&a!==d)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=6}t=parseFloat(t),t=Number.isInteger(t/o[a].precision)?t/o[a].precision+" "+o[a].symbol:(t/o[a].precision).toFixed(i)+" "+o[a].symbol;break;case"blocksToDays":t=6*t/86400;break;default:return void console.log("Ignoring unknown filter type")}n(t.toString())}const k=function(t){var e=t.network,a=t.path,s=t.defaultValue,r=t.filter,m=void 0===r?void 0:r,k=(0,i.useState)(""),g=k[0],y=k[1];return(0,i.useEffect)((function(){void 0!==m?h(s.toString(),m,e,y):y(s.toString());var t=void 0;switch(e){case l:t="wss://rpc.polkadot.io";break;case u:t="wss://kusama-rpc.polkadot.io/";break;case d:t="wss://statemine-rpc.polkadot.io/";break;case p:t="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+net)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(e,a,y);case 2:void 0!==m&&h(s.toString(),m,e,y);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{i()}catch(r){console.log(r)}}}),[]),g}},77611:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),s=a(47940),r=["components"],l={id:"maintain-guides-how-to-nominate-kusama",title:"Become a Nominator on Kusama",sidebar_label:"How to Nominate on Kusama",description:"Steps on how to nominate on Kusama.",keywords:["nominate","nominator","kusama","stake","staking"],slug:"../../maintain-guides-how-to-nominate-kusama"},u=void 0,d={unversionedId:"maintain/kusama/maintain-guides-how-to-nominate-kusama",id:"maintain/kusama/maintain-guides-how-to-nominate-kusama",title:"Become a Nominator on Kusama",description:"Steps on how to nominate on Kusama.",source:"@site/../docs/maintain/kusama/maintain-guides-how-to-nominate-kusama.md",sourceDirName:"maintain/kusama",slug:"/maintain-guides-how-to-nominate-kusama",permalink:"/docs/maintain-guides-how-to-nominate-kusama",draft:!1,tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1658564248,formattedLastUpdatedAt:"Jul 23, 2022",frontMatter:{id:"maintain-guides-how-to-nominate-kusama",title:"Become a Nominator on Kusama",sidebar_label:"How to Nominate on Kusama",description:"Steps on how to nominate on Kusama.",keywords:["nominate","nominator","kusama","stake","staking"],slug:"../../maintain-guides-how-to-nominate-kusama"},sidebar:"docs",previous:{title:"Staking Concepts",permalink:"/docs/learn-staking"},next:{title:"How to run a Validator on Kusama",permalink:"/docs/maintain-guides-how-to-validate-kusama"}},p={},c=[{value:"Setting up Stash and Controller keys",id:"setting-up-stash-and-controller-keys",level:2},{value:"Using Polkadot-JS UI",id:"using-polkadot-js-ui",level:2},{value:"Step 1: Bond your tokens",id:"step-1-bond-your-tokens",level:3},{value:"Step 2: Nominate a validator",id:"step-2-nominate-a-validator",level:3},{value:"Step 3: Stop nominating",id:"step-3-stop-nominating",level:3},{value:"Using Command-Line Interface (CLI)",id:"using-command-line-interface-cli",level:2},{value:"Step 1: Install @polkadot/api-cli",id:"step-1-install-polkadotapi-cli",level:3},{value:"Step 2. Bond your KSM",id:"step-2-bond-your-ksm",level:3},{value:"Step 3. Nominate a validator",id:"step-3-nominate-a-validator",level:3}],m={toc:c};function h(t){var e=t.components,l=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The following information applies to the Kusama network. If you want to nominate on Polkadot,\ncheck out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-nominate-polkadot"},"Polkadot guide")," instead.")),(0,i.kt)("p",null,"Nominators are one type of participant in the staking subsystem of Kusama. They are responsible\nfor appointing their stake to the validators who are the second type of participant. By appointing\ntheir stake, they are able to elect the active set of validators and share in the rewards that are\npaid out."),(0,i.kt)("p",null,"While the ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-validate-kusama"},"validators")," are active participants in the network that engage in the block production\nand finality mechanisms, nominators take a slightly more passive role. Being a nominator does not require\nrunning a node of your own or worrying about online uptime. However, a good nominator performs due diligence\non the validators that they elect. When looking for validators to nominate, a nominator should pay attention\nto their own reward percentage for nominating a specific validator - as well as the risk that they bear of\nbeing slashed if the validator gets slashed."),(0,i.kt)("admonition",{title:"Explainer videos on staking",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you prefer a video format for the tutorials, the following videos related to staking on Kusama are available:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/FCXC0CDhyS4"},"How to Stake on Polkadot (and Kusama)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=7VlTncHCGPc&t=305s"},"Staking with Kusama App on Ledger and PolkadotJS Apps UI")))),(0,i.kt)("h2",{id:"setting-up-stash-and-controller-keys"},"Setting up Stash and Controller keys"),(0,i.kt)("p",null,"Nominators are recommended to set up two separate stash and controller accounts. Explanation and\nreasoning for generating distinct accounts for this purpose is elaborated in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-keys###%22controller%22-and-%22stash%22-keys"},"keys")," section of\nthe Wiki."),(0,i.kt)("p",null,"You can generate your stash and controller account via any of the recommended methods that are\ndetailed on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-account-generation"},"account generation")," page."),(0,i.kt)("p",null,"Starting with runtime version v2023 natively included in client version\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases/tag/v0.8.23"},"0.8.23"),", payouts can go to any custom\naddress. If you'd like to redirect payments to an account that is neither the controller nor the\nstash account, set one up. Note that it is extremely unsafe to set an exchange address as the\nrecipient of the staking rewards."),(0,i.kt)("h2",{id:"using-polkadot-js-ui"},"Using Polkadot-JS UI"),(0,i.kt)("h3",{id:"step-1-bond-your-tokens"},"Step 1: Bond your tokens"),(0,i.kt)("p",null,"On the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS UI"),' navigate to the "Staking" tab (within the\n"Network" menu).'),(0,i.kt)("p",null,'The "Staking Overview" subsection will show you all the active validators and their information -\ntheir identities, the amount of KSM that are staking for them, amount that is their own provided\nstake, how much they charge in commission, the era points they\'ve earned in the current era, and the\nlast block number that they produced. If you click on the chart button it will take you to the\n"Validator Stats" page for that validator that shows you more detailed and historical information\nabout the validator\'s stake, rewards and slashes.'),(0,i.kt)("p",null,'The "Account actions" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"link"),") allows you\nto stake and nominate."),(0,i.kt)("p",null,'The "Payouts" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/payouts"},"link"),") allows you to\nclaim rewards from staking."),(0,i.kt)("p",null,'The "Targets" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/targets"},"link"),") will help you\nestimate your earnings and this is where it's good to start picking favorites."),(0,i.kt)("p",null,'The "Waiting" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/waiting"},"link"),") lists all pending\nvalidators that are awaiting more nominations to enter the active validator set. Validators will\nstay in the waiting queue until they have enough KSM backing them (as allocated through the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"Phragm\xe9n election mechanism"),"). It is possible validator can remain in the queue\nfor a very long time if they never get enough backing."),(0,i.kt)("p",null,'The "Validator Stats" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/query"},"link"),") allows you\nto query a validator's stash address and see historical charts on era points, elected stake,\nrewards, and slashes."),(0,i.kt)("p",null,'Pick "Account actions" underneath "Network" > "Staking", then click the "+ Nominator" button.'),(0,i.kt)("p",null,"You will see a modal window that looks like the below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nominator-update-1",src:a(86367).Z,width:"2194",height:"1170"})),(0,i.kt)("p",null,'Select a "value bonded" that is ',(0,i.kt)("strong",{parentName:"p"},"less")," than the total amount of KSM you have, so you have some\nleft over to pay transaction fees. Transaction fees are currently at least 0.01 KSM, but they are\ndynamic based on a variety of factors including the load of recent blocks."),(0,i.kt)("p",null,"Also be mindful of the reaping threshold - the amount that must remain in an account lest it be\nburned. That amount is 0.01 in Kusama, so it's recommended to keep at least 0.1 KSM in your account\nto be on the safe side."),(0,i.kt)("p",null,"Choose whatever payment destination that makes sense to you. If you're unsure, you can choose \"Stash\naccount (increase amount at stake)\" to simply accrue the rewards into the amount you're staking and\nearn compound interest."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Payout account selection dropdown with the custom account option highlighted",src:a(42394).Z,width:"742",height:"245"})),(0,i.kt)("admonition",{title:"Explainer video on using the Polkadot-JS UI",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"These concepts have been further explained in Polkadot's\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=mNStMPZjiHM&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8"},"UI Walkthrough Video"))),(0,i.kt)("h3",{id:"step-2-nominate-a-validator"},"Step 2: Nominate a validator"),(0,i.kt)("p",null,"You are now bonded. Being bonded means your tokens are locked and could be\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking#slashing"},"slashed")," if the validators you nominate misbehave. All bonded funds can\nnow be distributed to up to ",(0,i.kt)(s.Z,{network:"kusama",path:"consts.staking.maxNominations",defaultValue:24,mdxType:"RPC"})," validators.\nBe careful about the validators you choose since you will be slashed if your validator commits an offence."),(0,i.kt)("p",null,'Click on "Nominate" on an account you\'ve bonded and you will be presented with another popup asking\nyou to select some validators.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nominating validators",src:a(47043).Z,width:"2208",height:"982"})),(0,i.kt)("p",null,"Select them, confirm the transaction, and you're done - you are now nominating. Your nominations\nwill become active in the next era. Eras last six hours on Kusama - depending on when you do this,\nyour nominations may become active almost immediately, or you may have to wait almost the entire six\nhours before your nominations are active. You can check how far along Kusama is in the current era\non the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking"},"Staking page"),"."),(0,i.kt)("p",null,"Assuming at least one of your nominations ends up in the active validator set, you will start to get\nrewards allocated to you. In order to claim them (i.e., add them to your account), you must manually\nclaim them. To initiate a claim, you can do it yourself or have the validator that you staked for\ninitiate a claim. This is to help optimize the effectiveness and storage of payouts on Kusama. See\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking#claiming-rewards"},"Claiming Rewards")," section of the Staking wiki page for more\ndetails."),(0,i.kt)("h3",{id:"step-3-stop-nominating"},"Step 3: Stop nominating"),(0,i.kt)("p",null,"At some point, you might decide to stop nominating one or more validators. You can always change who\nyou're nominating, but you cannot withdraw your tokens unless you unbond them. Detailed instructions\nare available ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-unbond"},"here"),"."),(0,i.kt)("h2",{id:"using-command-line-interface-cli"},"Using Command-Line Interface (CLI)"),(0,i.kt)("p",null,"Apart from using the Polkadot-JS UI to participate in the staking, you can do all these things in\nCLI instead. The CLI approach allows you to interact with the Kusama network without\ngoing to the PolkadotJS dashboard."),(0,i.kt)("h3",{id:"step-1-install-polkadotapi-cli"},"Step 1: Install @polkadot/api-cli"),(0,i.kt)("p",null,"We assume you have installed ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org"},"NodeJS with npm"),". Run the following command to\ninstall the ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/api-cli")," globally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @polkadot/api-cli\n")),(0,i.kt)("h3",{id:"step-2-bond-your-ksm"},"Step 2. Bond your KSM"),(0,i.kt)("p",null,"Executing the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "MNEMONIC_PHRASE" tx.staking.bond CONTROLLER_ADDRESS NUMBER_OF_TOKENS REWARD_DESTINATION --ws WEBSOCKET_ENDPOINT\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CONTROLLER_ADDRESS"),": An address you would like to bond to the stash account. Stash and Controller\ncan be the same address but it is not recommended since it defeats the security of the two-account\nstaking model."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NUMBER_OF_TOKENS"),": The number of KSM / DOT you would like to stake to the network. ",(0,i.kt)("strong",{parentName:"p"},"Note"),": KSM\nhas twelve decimal places and is always represented as an integer with zeroes at the end. So 1 KSM =\n1_000_000_000_000 Plancks."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"REWARD_DESTINATION"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Staked")," - Pay into the stash account, increasing the amount at stake accordingly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stash")," - Pay into the stash account, not increasing the amount at stake."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Account")," - Pay into a custom account, like so:\n",(0,i.kt)("inlineCode",{parentName:"li"},"Account DMTHrNcmA8QbqRS4rBq8LXn8ipyczFoNMb1X4cY2WD9tdBX"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Controller")," - Pay into the controller account.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "xxxx xxxxx xxxx xxxxx" tx.staking.bond DMTHrNcmA8QbqRS4rBq8LXn8ipyczFoNMb1X4cY2WD9tdBX 1000000000000 Staked --ws wss://kusama-rpc.polkadot.io/\n')),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'...\n...\n    "status": {\n      "InBlock": "0x0ed1ec0ba69564e8f98958d69f826adef895b5617366a32a3aa384290e98514e"\n    }\n')),(0,i.kt)("p",null,"You can check the transaction status by using the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"InBlock")," in\n",(0,i.kt)("a",{parentName:"p",href:"https://polkascan.io/pre/kusama"},"Polkascan"),". Also, you can verify the bonding state under the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"Staking")," page on the Polkadot-JS Apps Dashboard."),(0,i.kt)("h3",{id:"step-3-nominate-a-validator"},"Step 3. Nominate a validator"),(0,i.kt)("p",null,"To nominate a validator, you can execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "MNEMONIC_PHRASE" tx.staking.nominate \'["VALIDATOR_ADDRESS"]\' --ws WS_ENDPOINT\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "xxxx xxxxx xxxx xxxxx" tx.staking.nominate \'["CmD9vaMYoiKe7HiFnfkftwvhKbxN9bhyjcDrfFRGbifJEG8","E457XaKbj2yTB2URy8N4UuzmyuFRkcdxYs67UvSgVr7HyFb"]\' --ws wss://kusama-rpc.polkadot.io/\n')),(0,i.kt)("p",null,"After a few seconds, you should see the hash of the transaction and if you would like to verify the\nnomination status, you can check that on the Polkadot-JS UI as well."))}h.isMDXComponent=!0},86367:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/kusama_nominator_popup-633f75e8b404699f33b7d78f5ad7fd34.png"},47043:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/kusama_nominator_selection-8e7c4058648339294ebce2e1ce0c58e8.png"},42394:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/01-cc60f0cb7494041501c0ed80e5dca352.png"},95856:()=>{},46601:()=>{}}]);