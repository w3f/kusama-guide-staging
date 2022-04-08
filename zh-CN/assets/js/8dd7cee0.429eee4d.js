"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1486],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,p=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return a?n.createElement(p,r(r({ref:t},c),{},{components:a})):n.createElement(p,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},63349:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>c,default:()=>u});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],l={id:"doc-thousand-validators",title:"Thousand Validators Programme",sidebar_label:"Thousand Validators Programme",description:"Learn about the Thousand Validators Programme and how it can support your validator endeavors.",slug:"../thousand-validators"},s=void 0,d={unversionedId:"general/doc-thousand-validators",id:"general/doc-thousand-validators",title:"Thousand Validators Programme",description:"Learn about the Thousand Validators Programme and how it can support your validator endeavors.",source:"@site/../docs/general/thousand-validators.md",sourceDirName:"general",slug:"/thousand-validators",permalink:"/zh-CN/docs/thousand-validators",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/thousand-validators.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649079622,formattedLastUpdatedAt:"2022/4/4",frontMatter:{id:"doc-thousand-validators",title:"Thousand Validators Programme",sidebar_label:"Thousand Validators Programme",description:"Learn about the Thousand Validators Programme and how it can support your validator endeavors.",slug:"../thousand-validators"},sidebar:"docs",previous:{title:"Parameters",permalink:"/zh-CN/docs/kusama-parameters"},next:{title:"Timeline",permalink:"/zh-CN/docs/kusama-timeline"}},c=[{value:"How it Works",id:"how-it-works",children:[{value:"Weights",id:"weights",children:[{value:"Inclusion",id:"inclusion",children:[],level:4},{value:"Span Inclusion *",id:"span-inclusion-",children:[],level:4},{value:"Discovered *",id:"discovered-",children:[],level:4},{value:"Nominated *",id:"nominated-",children:[],level:4},{value:"Rank *",id:"rank-",children:[],level:4},{value:"Unclaimed",id:"unclaimed",children:[],level:4},{value:"Bonded *",id:"bonded-",children:[],level:4},{value:"Faults *",id:"faults-",children:[],level:4},{value:"Offline time",id:"offline-time",children:[],level:4},{value:"Location *",id:"location-",children:[],level:4},{value:"Council",id:"council",children:[],level:4},{value:"Democracy",id:"democracy",children:[],level:4}],level:3}],level:2},{value:"Setting up a Validator",id:"setting-up-a-validator",children:[],level:2},{value:"How to Apply",id:"how-to-apply",children:[{value:"Requirements",id:"requirements",children:[],level:4},{value:"Nominators",id:"nominators",children:[],level:4}],level:2}],h={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Thousand Validators Programme is an initiative by Web3 Foundation and Parity Technologies to use\nthe funds held by both organizations to nominate validators in the community."),(0,o.kt)("p",null,"It serves two major purposes: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Give validators a structured on-ramp to join the active set of\nvalidators on Kusama and Polkadot "),(0,o.kt)("li",{parentName:"ol"},"Further decentralize the validator active set.")),(0,o.kt)("h2",{id:"how-it-works"},"How it Works"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/1k-validators-be"},"nominating backend")," will routinely change its nominations at every four eras. The backend does this by short-listing candidates by validity and then sorts validators by their weighted score in descending order. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Validators with a higher weighted score are selected for any possible slots. As validators are nominated and actively validate, their weighted scores decrease allowing other validators to be selected in subsequent rounds of assessment. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If a validator is active during a single nomination period (the time after a new nomination and before the next one) and does not break any of the requirements, it will have its rank increased by 1. Validators with higher rank have performed well within the programme for a longer period of time."))),(0,o.kt)("p",null,"The backend nominates as many validators as it reasonably can in such a manner to allow each nominee an opportunity to be elected into the active set."),(0,o.kt)("h3",{id:"weights"},"Weights"),(0,o.kt)("p",null,"Each candidate is assessed by on-chain parameters to produce a weighted score. In this section, we'll briefly review the weights of each metric and how they contribute to the total score."),(0,o.kt)("h4",{id:"inclusion"},"Inclusion"),(0,o.kt)("p",null,"The inclusion weight accounts for 40 points. It is assessed by an evaluation of the validator's inclusion in the active set over the past 84 eras. A candidate can be assured of full score if there were no stints of active validation in 84 eras."),(0,o.kt)("h4",{id:"span-inclusion-"},"Span Inclusion *"),(0,o.kt)("p",null,"The span inclusion weight accounts for 40 points. It is assessed by an evaluation of the validator's inclusion in the active set over the past 28 eras.  A candidate can be assured of full score if there were no stints of active validation in 28 eras."),(0,o.kt)("h4",{id:"discovered-"},"Discovered *"),(0,o.kt)("p",null,"The discovered weight accounts for 5 points. It is determined by comparing the candidates tenure in the programme relative to other candidates. A candidate that is in the programme for a longer duration relative to the entire group of validators allows for a higher score."),(0,o.kt)("h4",{id:"nominated-"},"Nominated *"),(0,o.kt)("p",null,"The nominated weight accounts for 10 points, and it is assessed based on when the candidate was last nominated relative to the other candidates in the programme."),(0,o.kt)("h4",{id:"rank-"},"Rank *"),(0,o.kt)("p",null,"The rank weight accounts for 5 points and is assessed relative to the ranks of other candidates within the programme.  "),(0,o.kt)("h4",{id:"unclaimed"},"Unclaimed"),(0,o.kt)("p",null,"The unclaimed weight relates to the number of payouts outstanding for greater than sixteen eras. Each payout that exceeds this threshold would attribute a negative score of 10 points."),(0,o.kt)("h4",{id:"bonded-"},"Bonded *"),(0,o.kt)("p",null,"Candidates with a bond size that is relatively higher than others would receive a score of 50 points."),(0,o.kt)("h4",{id:"faults-"},"Faults *"),(0,o.kt)("p",null,"A fault is attained when a candidate has an offline event when actively validating. A legitimate fault is irrevocable. Faults account for 5 points in the system and are relative to others in the programme."),(0,o.kt)("h4",{id:"offline-time"},"Offline time"),(0,o.kt)("p",null,"Candidates who have accumulated < 200 minutes offline time during the weekly period will receive 2 points in the system.  Offline time is judged by a candidate's connection to the W3F Telemetry and is reset on Sundays."),(0,o.kt)("h4",{id:"location-"},"Location *"),(0,o.kt)("p",null,"The system allocates a score of 40 points for candidates who host their validators in uniquely located data centres. A candidate's location is determined from Telemetry and is relative to the number of other candidates located at the same data centre."),(0,o.kt)("h4",{id:"council"},"Council"),(0,o.kt)("p",null,"Candidates will receive a score of up to 50 points for voting for council members. Candidates may back as few as one candidate; to attain a full score of 50 points, the 1KV candidate should allocate > 75% of their bond to the respective council members."),(0,o.kt)("h4",{id:"democracy"},"Democracy"),(0,o.kt)("p",null,"Candidates will receive 10 * 1KV points for each referendum they have voted on (Aye/Nay). Scores are based on votes for referendum 163 and beyond."),(0,o.kt)("p",null,"*"," Scores that are based on their relative position against others are assessed as follows:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The respective weight is assigned high and low percentiles. Any scores lower than the score at the low percentile and higher than the score at the high percentile are removed.  "),(0,o.kt)("li",{parentName:"ul"},"The weighted score is then obtained by ((candidate_value - low_threshold) / (high_threshold - low_threshold)) * weight.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The default low and high percentiles are 10 and 90%, respectively."),(0,o.kt)("li",{parentName:"ul"},"Inclusion and Span Inclusions are measured against low and high percentiles of 20 and 75%, respectively."),(0,o.kt)("li",{parentName:"ul"},"Bonded is measured against low and high percentiles of 5 and 85%, respectively."),(0,o.kt)("li",{parentName:"ul"},"Finally, location is measured against low and high percentiles of 10 and 95%, respectively. ")),(0,o.kt)("h2",{id:"setting-up-a-validator"},"Setting up a Validator"),(0,o.kt)("p",null,"Please see the guide on how to ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-how-to-validate-polkadot"},"set up a validator"),"\nas well as additional information on how to ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-secure-validator"},"secure a validator"),"."),(0,o.kt)("h2",{id:"how-to-apply"},"How to Apply"),(0,o.kt)("p",null,"In order to apply to the Kusama programme, set up your node to adhere to the requirements below\nand fill in the ",(0,o.kt)("a",{parentName:"p",href:"https://forms.gle/xqYLoceTwg1qvc9i6"},"application form"),".  The process of review and addition is a manual one; you'll be invited to the 1KV Kusama channel and added to the leader board, if accepted."),(0,o.kt)("p",null,"","","",""),(0,o.kt)("h4",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Verified identity (see ",(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/learn-identity#setting-an-identity"},"here")," for instructions)"),(0,o.kt)("li",{parentName:"ul"},"Connect to dedicated telemetry (use\n",(0,o.kt)("inlineCode",{parentName:"li"},"--telemetry-url 'wss://telemetry-backend.w3f.community/submit 1'")," when starting the node)"),(0,o.kt)("li",{parentName:"ul"},"Minimum of 10 KSM self-stake (exceptions by approval for good intentions)"),(0,o.kt)("li",{parentName:"ul"},"No more than 10% commission"),(0,o.kt)("li",{parentName:"ul"},"Separate controller and stash (or have a Staking proxy set up)"),(0,o.kt)("li",{parentName:"ul"},"Must be on the latest release"),(0,o.kt)("li",{parentName:"ul"},"Max two nodes (under same sub/super identity)")),(0,o.kt)("h4",{id:"nominators"},"Nominators"),(0,o.kt)("p",null,'The below addresses are the stash / controller pairs for the primary nominators involved in the\nKusama\nThousand Validators programme. They are formatted like "',(0,o.kt)("inlineCode",{parentName:"p"},"stash")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"controller"),'".'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"",(0,o.kt)("inlineCode",{parentName:"li"},"G1rrUNQSk7CjjEmLSGcpNu72tVtyzbWdUvgmSer9eBitXWf")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"H9BFvNPTqDEmWZ63M82ohrFmvEFASm25ErUMzmXDrbAr1kq"),"","",""),(0,o.kt)("li",{parentName:"ul"},"",(0,o.kt)("inlineCode",{parentName:"li"},"HgTtJusFEn2gmMmB5wmJDnMRXKD6dzqCpNR7a99kkQ7BNvX")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"H4UgNEEN92YXz96AyQgwkJQSpXGdptYLkj9jXVKrNXjQHRJ"),"","",""),(0,o.kt)("li",{parentName:"ul"},"",(0,o.kt)("inlineCode",{parentName:"li"},"EX9uchmfeSqKTM7cMMg8DkH49XV8i4R7a7rqCn8btpZBHDP")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"H54GA3nq3xeNrdbHkepAufSPMjaCxxkmfej4PosqD84bY3V"),"","","")),(0,o.kt)("p",null,"A time delay proxy is used as the interaction method for some of these accounts."),(0,o.kt)("p",null,"Within the Kusama programme, there are several other nominator accounts that can exhaustively be determined by parsing data found ",(0,o.kt)("a",{parentName:"p",href:"https://kusama.w3f.community/nominators"},"here"),""),(0,o.kt)("p",null,"Since approximately early January 2021, the nominators will select an automatic number of validators to nominate based on the lowest amount staked for a validator and the amount of funds it holds. This can be anywhere from a few validators receiving nomination from a single nominator, to the max of 24 nominators on Kusama."))}u.isMDXComponent=!0}}]);