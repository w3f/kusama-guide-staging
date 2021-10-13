(self.webpackChunk=self.webpackChunk||[]).push([[7633],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>h,kt:()=>d});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=c(n),d=s,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11427:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>c,toc:()=>h,default:()=>u});var a=n(22122),s=n(19756),o=(n(67294),n(3905)),i=["components"],r={id:"learn-assets",title:"Assets on Polkadot",sidebar_label:"Assets on Polkadot",description:"Learn about fungible and non-fungible assets in the Polkadot network.",slug:"../learn-assets"},l=void 0,c={unversionedId:"learn/learn-assets",id:"learn/learn-assets",isDocsHomePage:!1,title:"Assets on Polkadot",description:"Learn about fungible and non-fungible assets in the Polkadot network.",source:"@site/../docs/learn/learn-assets.md",sourceDirName:"learn",slug:"/learn-assets",permalink:"/docs/learn-assets",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-assets.md",tags:[],version:"current",lastUpdatedBy:"joepetrowski",lastUpdatedAt:1634131976,formattedLastUpdatedAt:"10/13/2021",frontMatter:{id:"learn-assets",title:"Assets on Polkadot",sidebar_label:"Assets on Polkadot",description:"Learn about fungible and non-fungible assets in the Polkadot network.",slug:"../learn-assets"}},h=[{value:"Fungible Assets",id:"fungible-assets",children:[{value:"Creation and Management",id:"creation-and-management",children:[]},{value:"Using",id:"using",children:[]},{value:"Application Development",id:"application-development",children:[]},{value:"Cross-Chain Accounting",id:"cross-chain-accounting",children:[]}]},{value:"Non-Fungible Assets",id:"non-fungible-assets",children:[{value:"Creation and Management",id:"creation-and-management-1",children:[]},{value:"Using",id:"using-1",children:[]}]},{value:"Advanced Techniques",id:"advanced-techniques",children:[]}],p={toc:h};function u(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Assets in the Polkadot and Kusama networks can be represented on several chains. They can also take\nmany forms, from a parachain's native token to on-chain representations of off-chain reserves. This\npage focuses on the latter, namely assets that would be issued by a creator (e.g. rights to audited,\noff-chain reserves held by the creator, or art issued as an NFT)."),(0,o.kt)("p",null,"The\n",(0,o.kt)("a",{parentName:"p",href:"https://www.parity.io/blog/statemint-generic-assets-chain-proposing-a-common-good-parachain-to-polkadot-governance/"},"Statemint parachain"),'\n(and Statemine on Kusama, they are functionally equivalent) hosts data structures and logic that\nspecialize in the creation, management, and use of assets in the Polkadot Network. Although other\nparachains can host applications dealing with assets on Statemint, Statemint can be thought of as\nthe "home base" of assets in the network.'),(0,o.kt)("p",null,"Statemint uses DOT as its native token (and Statemine, KSM). These chains yield their governance to\ntheir respective Relay Chain, and have no inflation or era-based rewards for collators. Collators\nreceive a portion of transaction fees. As\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots/"},"common good parachains"),",\nthey have a trusted relationship with the Relay Chain, and as such, can teleport DOT/KSM between\nthemselves and their Relay Chains. That is, DOT on Statemint is just as good as DOT on the Relay\nChain, likewise for KSM on Statemine and its Relay Chain."),(0,o.kt)("p",null,"Statemint does not support smart contracts. See the ",(0,o.kt)("a",{parentName:"p",href:"#advanced-techniques"},"Advanced")," section at the\nbottom for discussion on using proxy and multisig accounts to replicate oft used contract logic."),(0,o.kt)("h2",{id:"fungible-assets"},"Fungible Assets"),(0,o.kt)("p",null,"Fungible assets are those that are interchangeable, i.e. one unit is equivalent to any other unit\nfor the purposes of claiming the underlying item. Statemint represents fungible assets in the Assets\npallet. For those familiar with the ERC20 standard, this pallet presents a similar interface.\nHowever, the logic is encoded directly in the chain's runtime. As such, operations are not gas\nmetered and instead are benchmarked upon every release, leading to efficient execution and stable\ntransaction fees."),(0,o.kt)("h3",{id:"creation-and-management"},"Creation and Management"),(0,o.kt)("p",null,"Anyone on the network can create assets on Statemint, as long as they can reserve the required\ndeposit (1 KSM on Statemine, 100 DOT on Statemint). The network reserves the deposit on creation.\nThe creator also must specify a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetId"),", an integer of type ",(0,o.kt)("inlineCode",{parentName:"p"},"u32"),", to identify the asset.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetId"),' should be the canonical identifier for an asset, as the chain does not enforce\nuniqueness of metadata like "name" and "symbol". The creator also must specify a minimum balance,\nwhich will prevent accounts from having dust balances.'),(0,o.kt)("p",null,"An asset class has a number of privileged roles. The creator of the asset automatically takes on all\nprivileged roles, but can reassign them after creation. These roles are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Owner"),(0,o.kt)("li",{parentName:"ul"},"Issuer"),(0,o.kt)("li",{parentName:"ul"},"Admin"),(0,o.kt)("li",{parentName:"ul"},"Freezer")),(0,o.kt)("p",null,"The owner can set the accounts responsible for the other three roles, as well as set asset metadata\n(e.g. name, symbol, decimals). The issuer can mint and burn tokens to/from addresses of their\nchoosing. The freezer can freeze assets on target addresses or the entire asset class. The admin can\nmake force transfers as well as unfreeze accounts of the asset class. ",(0,o.kt)("strong",{parentName:"p"},"Always refer to the\n",(0,o.kt)("a",{parentName:"strong",href:"https://crates.parity.io/pallet_assets/index.html"},"reference documentation")," for certainty on\nprivileged roles.")),(0,o.kt)("p",null,"An asset's details contain one field not accessible to its owner or admin team, that of asset\nsufficiency. Only the network's governance mechanism can deem an asset as ",(0,o.kt)("em",{parentName:"p"},"sufficient.")," A balance of\na non-sufficient asset (the default) can only exist on already-existing accounts. That is, a user\ncould not create a new account on-chain by transferring an insufficient asset to it; the account\nmust already exist by having more than the existential deposit in DOT (or a sufficient asset). However, assets deemed\n",(0,o.kt)("em",{parentName:"p"},"sufficient")," can instantiate accounts. In the future, ",(0,o.kt)("em",{parentName:"p"},"sufficient")," assets will be able to pay\ntransaction fees, such that users can transact on Statemint without the need for DOT."),(0,o.kt)("h3",{id:"using"},"Using"),(0,o.kt)("p",null,"Users have a simple interface, namely the ability to transfer asset balances to other accounts\non-chain. As mentioned before, if the asset is not ",(0,o.kt)("em",{parentName:"p"},"sufficient,")," then the destination account must\nalready exist for the transfer to succeed."),(0,o.kt)("p",null,"The chain also contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive")," function, similar to that of the Balances pallet,\nthat will fail if execution would kill the sending account."),(0,o.kt)("p",null,"Statemint also sweeps dust balances into transfers. For example, if an asset has a minimum balance\nof 10 and an account has a balance of 25, then an attempt to transfer 20 units would actually\ntransfer all 25."),(0,o.kt)("h3",{id:"application-development"},"Application Development"),(0,o.kt)("p",null,"Statemint provides an ",(0,o.kt)("inlineCode",{parentName:"p"},"approve_transfer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_approved"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel_approval")," interface.\nApplication developers can use this interface so that users can authorize the application to\neffectuate transfers up to a given amount on behalf of an account."),(0,o.kt)("h3",{id:"cross-chain-accounting"},"Cross-Chain Accounting"),(0,o.kt)("p",null,"Statemint uses a reserve-backed system to manage asset transfers to other parachains. It tracks how\nmuch of each asset has gone to each parachain and will not accept more back from a particular\nparachain."),(0,o.kt)("p",null,"As a result of this, asset owners can use Statemint to track information like the total issuance of\ntheir asset in the entire network, as parachain balances would be included in the reserve-backed\ntable. Likewise, for the minting and burning of tokens, an asset's team can perform all operations\non Statemint and propagate any minted tokens to other parachains in the network."),(0,o.kt)("p",null,'Parachains that want to send assets to other parachains should do so via instructions to Statemint\nso that the reserve-backed table stays up to date. For more info, see the "Moving Assets between\nChains in XCM" section of the\n',(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/xcm-the-cross-consensus-message-format/"},"article on XCM"),"."),(0,o.kt)("h2",{id:"non-fungible-assets"},"Non-Fungible Assets"),(0,o.kt)("p",null,"Unlike fungible assets, the particular instance of a non-fungible asset (NFT) has meaning separate\nfrom another instance of the same class. Statemint represents NFTs in the\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_uniques/index.html"},"Uniques pallet"),"."),(0,o.kt)("p",null,"Similar to the Assets pallet, this functionality is encoded into the chain. Operations are\nbenchmarked prior to each release in lieu of any runtime metering, ensuring efficient execution and\nstable transaction fees."),(0,o.kt)("h3",{id:"creation-and-management-1"},"Creation and Management"),(0,o.kt)("p",null,'Anyone on the network can create an asset class, as long as they reserve the required deposit (1 KSM\non Statemine, 100 DOT on Statemint). Creating instances of a class also requires a per-instance\ndeposit, unless the chain\'s governance designates the class as "free holding", allowing the class to\nmint more instances without deposit. The creator must specify a ',(0,o.kt)("inlineCode",{parentName:"p"},"ClassId"),", which, like its cousin\n",(0,o.kt)("inlineCode",{parentName:"p"},"AssetId"),", should be the canonical identifier for the class."),(0,o.kt)("p",null,"The creator can also specify the same privileged roles of Owner, Admin, Issuer, and Freezer."),(0,o.kt)("p",null,"Asset classes and instances can have associated metadata. The metadata is an array of data that the\nclass Owner can add on-chain, for example a link to an IPFS hash or other off-chain hosting service.\nThe Uniques pallet also supports setting key/value pairs as attributes to a class or instance."),(0,o.kt)("h3",{id:"using-1"},"Using"),(0,o.kt)("p",null,"Users can transfer their NFTs to other accounts. The chain also provides an ",(0,o.kt)("inlineCode",{parentName:"p"},"approve_transfer"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_approved"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel_approval")," interface that application developers can use to allow\nusers to authorize an application to transfer an instance on their behalf."),(0,o.kt)("h2",{id:"advanced-techniques"},"Advanced Techniques"),(0,o.kt)("p",null,"Many asset creators on other networks use smart contracts to control privileged functions like\nminting and burning. Although Statemint does not have a smart contract interface, it contains the\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_multisig/index.html"},"Multisig"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_proxy/index.html"},"Proxy"),", and\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_utility/index.html"},"Utility")," pallets, which will meet most account\nmanagement needs."),(0,o.kt)("p",null,"For example, if a team wants sign-off from two groups to perform a privileged operation, it could\ncreate a 2-of-2 multisig from two anonymous proxies, and then set members from each group as proxies\nto those anonymous proxies."))}u.isMDXComponent=!0}}]);