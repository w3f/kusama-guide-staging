"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3944],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return o?n.createElement(m,s(s({ref:t},u),{},{components:o})):n.createElement(m,s({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},96238:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),s=["components"],i={id:"learn-account-generation",title:"Account Generation",sidebar_label:"Account Generation",description:"Steps on generating a Polkadot account.",keywords:["account","account generation","polkadot account","polkadotjs"],slug:"../learn-account-generation"},l=void 0,c={unversionedId:"learn/learn-account-generation",id:"learn/learn-account-generation",title:"Account Generation",description:"Steps on generating a Polkadot account.",source:"@site/../docs/learn/learn-account-generation.md",sourceDirName:"learn",slug:"/learn-account-generation",permalink:"/docs/learn-account-generation",draft:!1,tags:[],version:"current",lastUpdatedBy:"filippoweb3",lastUpdatedAt:1659945042,formattedLastUpdatedAt:"Aug 8, 2022",frontMatter:{id:"learn-account-generation",title:"Account Generation",sidebar_label:"Account Generation",description:"Steps on generating a Polkadot account.",keywords:["account","account generation","polkadot account","polkadotjs"],slug:"../learn-account-generation"},sidebar:"docs",previous:{title:"Thousand Contributors Programme",permalink:"/docs/thousand-contributors"},next:{title:"Backing up and Restoring Accounts",permalink:"/docs/learn-account-restore"}},u={},d=[{value:"DISCLAIMER: Key Security",id:"disclaimer-key-security",level:2},{value:"Storing your key safely",id:"storing-your-key-safely",level:3},{value:"Storing your account&#39;s JSON file",id:"storing-your-accounts-json-file",level:3},{value:"Polkadot{.js} Browser Extension",id:"polkadotjs-browser-extension",level:2},{value:"Install the Browser Extension",id:"install-the-browser-extension",level:3},{value:"Create Account",id:"create-account",level:3},{value:"Name Account",id:"name-account",level:3},{value:"Enter Password",id:"enter-password",level:3},{value:"Reset Password using the browser extension",id:"reset-password-using-the-browser-extension",level:3},{value:"Set Address for Polkadot Mainnet",id:"set-address-for-polkadot-mainnet",level:3},{value:"Subkey",id:"subkey",level:2},{value:"Polkadot-JS Apps",id:"polkadot-js-apps",level:2},{value:"Go to Polkadot-JS Apps",id:"go-to-polkadot-js-apps",level:3},{value:"Start Account Generation",id:"start-account-generation",level:3},{value:"Create and Back-Up Account",id:"create-and-back-up-account",level:3},{value:"Reset password using Polkadot-JS",id:"reset-password-using-polkadot-js",level:3},{value:"Multi-signature Accounts",id:"multi-signature-accounts",level:3},{value:"Parity Signer",id:"parity-signer",level:2},{value:"Create Account",id:"create-account-1",level:3},{value:"Name Account",id:"name-account-1",level:3},{value:"Back Up Account",id:"back-up-account",level:3},{value:"Set PIN",id:"set-pin",level:3},{value:"Get Address",id:"get-address",level:3},{value:"Your Address",id:"your-address",level:3},{value:"Ledger Hardware Wallet",id:"ledger-hardware-wallet",level:2},{value:"Vanity Generator",id:"vanity-generator",level:2}],p={toc:d};function h(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An address is the public part of a Polkadot account. The private part is the key used to access this\naddress. The public and private parts together make up a Polkadot account."),(0,r.kt)("p",null,"There are several ways to generate a Polkadot account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#polkadotjs-browser-extension"},"Polkadot{.js} Browser Extension")," ",(0,r.kt)("strong",{parentName:"li"},"RECOMMENDED FOR MOST USERS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#subkey"},"Subkey")," ",(0,r.kt)("strong",{parentName:"li"},"ADVANCED and MOST SECURE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#polkadot-js-apps"},"Polkadot-JS Apps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#parity-signer"},"Parity Signer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#vanity-generator"},"Vanity Generator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-ledger"},"Ledger Hardware Wallet"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you prefer video instructions for creating an account using Polkadot JS, we have an easy to\nfollow guide for beginners ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=sy7lvAqyzkY"},"on YouTube"))),(0,r.kt)("h2",{id:"disclaimer-key-security"},"DISCLAIMER: Key Security"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"only")," ways to get access to your account are via your secret seed or your account's JSON file\nin combination with a password. You must keep them both secure and private. If you share them with\nanyone they will have full access to your account, including all of your funds. This information is\na target for hackers and others with bad intentions - see also\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-scams"},"How to Recognize Scams"),"."),(0,r.kt)("p",null,"On this page, we recommend a variety of account generation methods that have various convenience and\nsecurity trade-offs. Please review this page carefully before making your account so that you\nunderstand the risks of the account generation method you choose and how to properly mitigate them\nin order to keep your funds safe."),(0,r.kt)("h3",{id:"storing-your-key-safely"},"Storing your key safely"),(0,r.kt)("p",null,"The seed is your ",(0,r.kt)("strong",{parentName:"p"},"key")," to the account. Knowing the seed allows you, or anyone else who knows the\nseed, to re-generate and control this account."),(0,r.kt)("p",null,"It is imperative to store the seed somewhere safe, secret, and secure. If you lose access to your\naccount (i.e. you forget the password for your account's JSON file), you can re-create it by\nentering the seed. This also means that somebody else can have control over your account if they\nhave access to your seed."),(0,r.kt)("p",null,"For maximum security, the seed should be written down on paper or another non-digital device and\nstored in a safe place. You may also want to protect your seed from physical damage, as well (e.g.\nby storing in a sealed plastic bag to prevent water damage, storing it in a fireproof safe, etching\nit in metal, etc.) It is recommended that you store multiple copies of the seed in geographically\nseparate locations (e.g., one in your home safe and one in a safety deposit box at your bank)."),(0,r.kt)("admonition",{title:"You should not store your seed on any kind of computer that has or may have access to the internet in the future",type:"caution"}),(0,r.kt)("h3",{id:"storing-your-accounts-json-file"},"Storing your account's JSON file"),(0,r.kt)("p",null,"The JSON file is encrypted with a password, which means you can import it into any wallet which\nsupports JSON imports, but to then use it, you need the password. You don't have to be as careful\nwith your JSON file's storage as you would with your seed (i.e. it can be on a USB drive near you),\nbut remember that in this case, your account is only as secure as the password you used to encrypt\nit. Do not use easy to guess or hard to remember passwords. It is good practice to use a\n",(0,r.kt)("a",{parentName:"p",href:"https://xkcd.com/936/"},"mnemonic password of four to five words"),". These are nearly impossible for\ncomputers to guess due to the number of combinations possible, but much easier for humans to\nremember."),(0,r.kt)("h2",{id:"polkadotjs-browser-extension"},"Polkadot{.js} Browser Extension"),(0,r.kt)("p",null,"The Polkadot{.js} Extension provides a reasonable balance of security and usability. It provides a\nseparate local mechanism to generate your address and interact with Polkadot."),(0,r.kt)("p",null,'This method involves installing the Polkadot{.js} plugin and using it as a \u201cvirtual vault," separate\nfrom your browser, to store your private keys. It also allows the signing of transactions and similar\nfunctionality.'),(0,r.kt)("p",null,"It is still running on the same computer you use to connect to the internet with and thus is less\nsecure than using Parity Signer or other air-gapped approaches."),(0,r.kt)("h3",{id:"install-the-browser-extension"},"Install the Browser Extension"),(0,r.kt)("p",null,"The browser extension is available for both\n",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en"},"Google Chrome"),"\n(and Chromium-based browsers like Brave) and\n",(0,r.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension"},"FireFox"),"."),(0,r.kt)("p",null,"If you would like to know more or review the code of the plugin yourself, you can visit the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/extension"},"GitHub source repository"),"."),(0,r.kt)("p",null,"After installing the plugin, you should see the orange and white Polkadot{.js} logo in the menu bar\nof your browser."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"plugin-02",src:o(18322).Z,width:"1200",height:"648"})),(0,r.kt)("h3",{id:"create-account"},"Create Account"),(0,r.kt)("p",null,"Open the Polkadot{.js} browser extension by clicking the logo on the top bar of your browser. You\nwill see a browser popup, not unlike the one below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Initial Polkadot-JS popup",src:o(10160).Z,width:"579",height:"643"})),(0,r.kt)("p",null,'Click the big plus button or select "Create new account" from the small plus icon in the top right.\nThe Polkadot{.js} plugin will then use system randomness to make a new seed for you and display it\nto you in the form of twelve words.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"New seed",src:o(42303).Z,width:"566",height:"617"})),(0,r.kt)("p",null,"You should back up these words as ",(0,r.kt)("a",{parentName:"p",href:"#storing-your-key-safely"},"explained above"),'. It is imperative to\nstore the seed somewhere safe, secret, and secure. If you cannot access your account via\nPolkadot{.js} for some reason, you can re-enter your seed through the "Add account menu" by\nselecting "Import account from pre-existing seed".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"New seed",src:o(35823).Z,width:"575",height:"621"})),(0,r.kt)("h3",{id:"name-account"},"Name Account"),(0,r.kt)("p",null,"The account name is arbitrary and for your use only. It is not stored on the blockchain and will not\nbe visible to other users who look at your address via a block explorer. If you're juggling multiple\naccounts, it helps to make this as descriptive and detailed as needed."),(0,r.kt)("h3",{id:"enter-password"},"Enter Password"),(0,r.kt)("p",null,"The password will be used to encrypt this account's information. You will need to re-enter it when\nusing the account for any kind of outgoing transaction or when using it to cryptographically sign a\nmessage."),(0,r.kt)("p",null,"Note that this password does NOT protect your seed phrase. If someone knows the twelve words in your\nmnemonic seed, they still have control over your account even if they do not know the password."),(0,r.kt)("h3",{id:"reset-password-using-the-browser-extension"},"Reset Password using the browser extension"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Before following the instructions below make sure you have your mnemonic phrase stored in a safe place accessible to you.")),(0,r.kt)("p",null,"Let's say you created ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNT 1")," protected by password ",(0,r.kt)("inlineCode",{parentName:"p"},"PSW 1"),". To reset the password of your ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNT 1")," using the browser extension you must follow the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the browser extension go to ",(0,r.kt)("inlineCode",{parentName:"li"},"ACCOUNT 1"),' and click "Forget account". This action will delete the access to your account. Note that your tokens are still in your account on the polkadot blockchain network.'),(0,r.kt)("li",{parentName:"ul"},'On the browser extension click the "+" button in the topright corner and select the option "Import account from pre-existing seed". After entering the mnemonic phrase you can chose a new password ',(0,r.kt)("inlineCode",{parentName:"li"},"PSW 2"),".")),(0,r.kt)("admonition",{title:"JSON files do not allow to change account passwords",type:"info"},(0,r.kt)("p",{parentName:"admonition"},'If you add the account to the extension using the option "Restore account from backup JSON file", this will allow you to restore access to your account using JSON file protected by the password ',(0,r.kt)("inlineCode",{parentName:"p"},"PSW 1"),", but does not let you set a new password. Thus, ",(0,r.kt)("inlineCode",{parentName:"p"},"PSW 1")," will become the account password by default.")),(0,r.kt)("admonition",{title:"Accounts on Cold wallets do not need passwords",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For hardware wallets such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger"),", you may have to set a PIN for accessing the accounts on the device, but you do not need to set a password for every individual account. When you need to make transactions with your account, you are required to sign using your Ledger device. Also, Ledger wallets let you generate multiple accounts for multiple blockchain networks without having to set different passwords to access such accounts.")),(0,r.kt)("h3",{id:"set-address-for-polkadot-mainnet"},"Set Address for Polkadot Mainnet"),(0,r.kt)("p",null,"Now we will ensure that the addresses are displayed as Polkadot mainnet addresses."),(0,r.kt)("p",null,'Click on "Options" at the top of the plugin window, and under "Display address format for" select\n"Polkadot Relay Chain".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"New seed",src:o(36487).Z,width:"562",height:"878"})),(0,r.kt)("p",null,"Your address' format is only visual - the data used to derive this representation of your address\nare the same, so you can use the same address on multiple chains. However, for privacy reasons, we\nrecommend creating a new address for each chain you're using."),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-accounts#address-conversion-tools"},"Accounts page")," also has a tool you can use to\nconvert your address between the different chain formats."),(0,r.kt)("p",null,'You can copy your address by clicking on the account\'s icon while the desired chain format is\nactive. E.g. selecting "Substrate" as the format will change your address to start with the number\n5, and clicking the colorful icon of your account will copy it in that format. While in Polkadot\nmode (starts with 1), that format will be copied, and so on.'),(0,r.kt)("h2",{id:"subkey"},"Subkey"),(0,r.kt)("p",null,"Subkey is recommended for technically advanced users who are comfortable with the command line and\ncompiling Rust code. Subkey allows you to generate keys on any device that can compile the code.\nSubkey may also be useful for automated account generation using an air-gapped device. It is not\nrecommended for general users."),(0,r.kt)("p",null,"For detailed build and usage instructions of subkey, please see\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/bin/utils/subkey"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"subkey-01",src:o(39913).Z,width:"1200",height:"715"})),(0,r.kt)("h2",{id:"polkadot-js-apps"},"Polkadot-JS Apps"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you use this method to create your account and clear your cookies in your browser,\nyour account will be lost forever if you do not ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-restore"},"back it up"),". Make sure\nyou store your seed phrase in a safe place, or download the account's JSON file if using the\nPolkadot{.js} browser extension. Learn more about account backup and restoration\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-restore"},"here"),".")),(0,r.kt)("p",null,"Using the Polkadot-JS user interface without the plugin is ",(0,r.kt)("strong",{parentName:"p"},"not recommended"),". It is the least\nsecure way of generating an account. It should only be used if all of the other methods are not\nfeasible in your situation."),(0,r.kt)("h3",{id:"go-to-polkadot-js-apps"},"Go to Polkadot-JS Apps"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps")," (or ",(0,r.kt)("a",{parentName:"p",href:"https://dotapps.io/"},"dotapps.io"),')\nand click on "Accounts" underneath the Accounts tab. It is located in the navigation bar at the top\nof your screen.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pjs-01",src:o(92778).Z,width:"2880",height:"1642"})),(0,r.kt)("admonition",{title:"Creating an Account on a different network",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You will need to click on the network selection in the top left corner of the navigation menu.\nA pop-up sidebar will appear listing live, testing, and custom node to choose from. "),(0,r.kt)("p",{parentName:"admonition"},'Do remember to hit the "Switch" button when you want to switch your network.')),(0,r.kt)("h3",{id:"start-account-generation"},"Start Account Generation"),(0,r.kt)("p",null,'Click on the "Add Account" button. You should see a pop-up similar to the process encountered when\nusing the ',(0,r.kt)("a",{parentName:"p",href:"#polkadotjs-browser-plugin"},"Polkadot JS Extension method")," above. Follow the same\ninstructions and remember to ",(0,r.kt)("a",{parentName:"p",href:"#storing-your-key-safely"},"store your seed safely"),"!"),(0,r.kt)("h3",{id:"create-and-back-up-account"},"Create and Back-Up Account"),(0,r.kt)("p",null,"Click \u201cSave\u201d and your account will be created. It will also generate a\n",(0,r.kt)("a",{parentName:"p",href:"#storing-your-accounts-json-file"},"backup JSON file")," that you should safely store, ideally on a USB\noff the computer you're using. You should not store it in cloud storage, email it to yourself, etc."),(0,r.kt)("p",null,"You can use this backup file to restore your account. This backup file is not readable unless it is\ndecrypted with the password."),(0,r.kt)("h3",{id:"reset-password-using-polkadot-js"},"Reset password using Polkadot-JS"),(0,r.kt)("p",null,'To reset the password of an account created with Polkadot-JS you just need to go in the "Accounts" tab, click the icon with three vertical dots on your account and select "Change this account\'s password".'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you create an account first using Polkadot-JS, and then you add it to the browser extension, to change the passowrd of such account you need to follow the ",(0,r.kt)("a",{parentName:"p",href:"#reset-password"},"guidelines for the browser extension"),".")),(0,r.kt)("h3",{id:"multi-signature-accounts"},"Multi-signature Accounts"),(0,r.kt)("p",null,"Multi-signature accounts are accounts created from several standard accounts (or even other\nmulti-sig accounts). For a full explanation, please see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-accounts#multi-signature-accounts"},"Accounts Explainer section on multi-sigs"),"."),(0,r.kt)("p",null,"On the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts")," tab, click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Multisig")," button. Enter\nthe threshold and add signatories. The threshold must be less than or equal to the number of\nsignatories. The threshold indicates how many members must agree for an extrinsic\nsubmission to be successful. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," when done."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Multi-sig account creation",src:o(99940).Z,width:"2128",height:"1068"})),(0,r.kt)("p",null,"This merely calculates the multi-signature's address and adds it to your UI. The account does not\nexist yet, and is subject to the same\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"Existential Deposit and Reaping")," rules as\nregular accounts."),(0,r.kt)("p",null,"Suppose we funded it with some tokens, and now want to send from the multi-sig to another account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sending from multi-sig account",src:o(47441).Z,width:"2012",height:"920"})),(0,r.kt)("p",null,"The next step is to sign the transaction from with enough accounts to meet the threshold; in the\nabove case, two out of three signatories must sign."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Signing from multi-sig account",src:o(79241).Z,width:"2024",height:"1232"})),(0,r.kt)("p",null,"There is currently no indication of a pending transaction from a multi-sig in the UI. This means the\nsecond signatory must ",(0,r.kt)("strong",{parentName:"p"},"repeat the call in full")," in order to sign it. In other words:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if Alice initiates a transaction from the multi-sig to Ferdie for 150 tokens, there will be a\npending transaction in the chain."),(0,r.kt)("li",{parentName:"ul"},"if Bob initiates a transaction from the multi-sig to Ferdie for 250 tokens, there will be\n",(0,r.kt)("strong",{parentName:"li"},"another")," pending transaction in the chain, and the first one will not complete."),(0,r.kt)("li",{parentName:"ul"},"because the threshold is 2/3, Charlie can now finalize either or both of these by repeating the\ndesired transaction.")),(0,r.kt)("p",null,"Other calls work the same - if a multi-sig wants to become a Council member, the candidacy\nrequest has to come from the multi-sig, but be signed (re-requested) from each signatory until the\nthreshold is reached."),(0,r.kt)("p",null,"Signatories should communicate off-chain to prevent many pending transactions and crossed\ncommunication lines on-chain."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The bigger the multisig, the more of a deposit an account needs to put down when initiating a\nmulti-sig call. This is to prevent chain storage spam with pending but never-resolved multi-sig\ntransactions. Once a call is resolved (canceled or executed) the deposit is returned to the\ninitiator. The deposit is not taken from the multi-sig's balance but from the initiator.")),(0,r.kt)("p",null,"For a more in-depth introduction into multi-signature accounts on Polkadot, please see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-accounts#multi-signature-accounts"},"the accounts page section on Multi-sigs"),"."),(0,r.kt)("h2",{id:"parity-signer"},"Parity Signer"),(0,r.kt)("p",null,'Parity Signer is a secure way of storing your DOT on an air-gapped device. It is highly recommended\nthat you turn off wifi, cellular network, Bluetooth, NFC, and any other communications methods after\ninstalling it. The device needs to be offline and only you should be viewing the device screen. If\nyou have any communications methods turned on, you will see an "unshielded" icon in red in the\ntop-right corner that indicates your connection may not be secure.'),(0,r.kt)("h3",{id:"create-account-1"},"Create Account"),(0,r.kt)("p",null,'Click "Create" to create an identity, or "recover" if you have previously backed up the recovery\nphrase. You can have multiple identities on one device. Each identity can manage multiple addresses\non different networks.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parity Signer Create Account 1",src:o(27153).Z,width:"360",height:"640"})),(0,r.kt)("h3",{id:"name-account-1"},"Name Account"),(0,r.kt)("p",null,'Input the name for your identity and then click "Create".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parity Signer Create Account 2",src:o(40565).Z,width:"360",height:"640"})),(0,r.kt)("h3",{id:"back-up-account"},"Back Up Account"),(0,r.kt)("p",null,"Parity Signer will then generate a recovery phrase for you and display it in the form of 12 or 24\nwords."),(0,r.kt)("p",null,"You should write down this recovery phrase on paper and\n",(0,r.kt)("a",{parentName:"p",href:"#storing-your-key-safely"},"store it somewhere safe"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parity Signer Create Account 3",src:o(87092).Z,width:"360",height:"640"})),(0,r.kt)("h3",{id:"set-pin"},"Set PIN"),(0,r.kt)("p",null,"After confirming that you have backed up your seed, a new textbox will appear in which you can set a\nPIN. The PIN code should contain at least 6 digits. If the PIN codes do not match, it will not allow\nyou to create an account. The PIN code will be used when signing any transaction, or to protect\nsensitive operations such as deleting an identity or revealing the recovery phrase."),(0,r.kt)("p",null,"Note that if someone knows the 12/24 words in your recovery phrase, they will still have control\nover your account, even if they do not know the PIN."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parity Signer Create Account 4",src:o(70308).Z,width:"360",height:"640"})),(0,r.kt)("h3",{id:"get-address"},"Get Address"),(0,r.kt)("p",null,'Choose which network you would like to create an address for by clicking the name of the network.\nFor example, if you select "Polkadot", a new Polkadot address will be created for you under this\nidentity.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parity Signer Create Account 5",src:o(57210).Z,width:"360",height:"640"})),(0,r.kt)("p",null,"There is currently no way to copy your address from Parity signer in plain text in order to send it\nvia text or email. You must use the QR method."),(0,r.kt)("h3",{id:"your-address"},"Your Address"),(0,r.kt)("p",null,"The address will be shown as a QR code. You can import your address to the Polkadot-JS Apps by going\nto the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts"),' page on an Internet-connected computer\nand click "Add via QR", and following the instructions to add the account. An account created this\nway will always require you to sign messages with your Parity Signer device. It will do this only by\nscanning and displaying QR codes, leaving even someone with total control of your internet-connected\ncomputer has a very small and limited scope for interacting with the Parity Signer device, which can\ncontinue to keep your key safe.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parity Signer Create Account 6",src:o(96194).Z,width:"360",height:"640"})),(0,r.kt)("h2",{id:"ledger-hardware-wallet"},"Ledger Hardware Wallet"),(0,r.kt)("p",null,"To use a Ledger hardware wallet to create your address and keep your tokens in cold storage, follow\nthe instructions on our ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-ledger"},"Ledger hardware wallet guide page"),"."),(0,r.kt)("h2",{id:"vanity-generator"},"Vanity Generator"),(0,r.kt)("p",null,"The vanity generator is a tool on ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts/vanity"},"Polkadot-JS UI"),"\nthat lets you generate addresses that contain a specific substring."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Vanity Generator page",src:o(47432).Z,width:"2880",height:"1220"})),(0,r.kt)("p",null,"The vanity generator takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"Search for": The substring that you would like to include in your new address.'),(0,r.kt)("li",{parentName:"ul"},'"case sensitive": "Yes" if the search is case sensitive; "no" if not.'),(0,r.kt)("li",{parentName:"ul"},'"keypair crypto type": Specifies the type of account you\'d like to generate; Schnorrkel is\nrecommended in most cases for its security.')),(0,r.kt)("p",null,'If you\'ve filled out all details above and hit the "Start generation" button, a list of accounts\nwill start generating on your screen. Note that depending on the length of the substring and the\nprocessing speed of your computer, it may take some time before any accounts appear.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Vanity Generator search",src:o(61344).Z,width:"2880",height:"1644"})),(0,r.kt)("p",null,'The "Save" button will allow you to save the generated accounts - they are not saved if you do not\nchoose to do this. The next steps are identical to the\n',(0,r.kt)("a",{parentName:"p",href:"#polkadotjs"},"steps above on creating an account on the UI"),", where a password and name need to be\nfilled in, and a backup file of your account will be downloaded."),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("a",{parentName:"p",href:"#subkey"},"Subkey tool")," also has vanity generation built-in, and is orders of magnitude\nfaster than the web version. If you need to generate addresses with longer strings, or need plenty\nof them, we recommend using Subkey instead."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Vanity Generator chosen address",src:o(66222).Z,width:"2228",height:"1242"})))}h.isMDXComponent=!0},99940:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create-multisig-b002afc19f9f54d35de5b03912b59707.png"},92778:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_js_01-75ab34e50cf548a839d771e86ec23276.png"},18322:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_plugin_js_02-858c89575d1ebdc18ebfc53d58db070f.jpg"},10160:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_plugin_js_new_01-315e2145964575b73f42bcd9f065cc8e.png"},42303:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_plugin_js_new_02-ff03c501e427e552c9e0ac056aa1b64e.png"},35823:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_plugin_js_new_03-795e0862ec595fa68742e6e8abe77916.png"},36487:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_plugin_js_new_04-eb4fb0e6318033124bbaf5ccc43642da.png"},27153:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ps-create-1-7a5d80579f372d9d34a2b72fb2b2fcc1.jpg"},40565:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ps-create-2-71ee22c75a0271b4a43b615651d191d0.jpg"},87092:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ps-create-3-ce87d8a7367c11eb5b1141dd14179a64.jpg"},70308:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ps-create-4-5449bc3fe002fabbe183ca2b9b7541c0.jpg"},57210:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ps-create-5-7ebabdbcec95fc0a0b1d493a93425183.jpg"},96194:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ps-create-6-b3e7100d2df0a0ac53db229f1a8bf6ec.jpg"},47441:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/send-from-multi-b76d6f40f1b72cc65f1f180e586c60eb.png"},79241:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sign-from-multi-1-a089e1bb6fddb5863f31f42631ca4319.png"},39913:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/subkey_01-970aa5682220aabc6f5927a38b3a5954.jpg"},66222:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_save_account-2b7fa9cb0b0c0f726205b5777ac71361.png"},61344:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_vanity_generate-47770cb048dcd6c738f619110f4c5607.png"},47432:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_vanity_generator_page-f938a1fbb87bd21e2226323109f0c4e2.png"}}]);