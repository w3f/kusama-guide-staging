(self.webpackChunk=self.webpackChunk||[]).push([[2167],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,k=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},55557:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>c,default:()=>p});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i=["components"],l={id:"learn-ledger",title:"Using the Polkadot Ledger Application",sidebar_label:"Ledger Application"},s=void 0,d={unversionedId:"learn-ledger",id:"learn-ledger",isDocsHomePage:!1,title:"Using the Polkadot Ledger Application",description:"Note: Because of required WebUSB support, Ledger wallets currently only work on Chromium-based",source:"@site/../docs/learn-ledger.md",sourceDirName:".",slug:"/learn-ledger",permalink:"/docs/learn-ledger",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-ledger.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1628015583,formattedLastUpdatedAt:"8/3/2021",frontMatter:{id:"learn-ledger",title:"Using the Polkadot Ledger Application",sidebar_label:"Ledger Application"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Installing the Ledger Application",id:"installing-the-ledger-application",children:[{value:"Using Ledger Live",id:"using-ledger-live",children:[]},{value:"Using the Developer Release",id:"using-the-developer-release",children:[]}]},{value:"Using on Polkadot-JS Apps",id:"using-on-polkadot-js-apps",children:[{value:"Loading Your Account",id:"loading-your-account",children:[]},{value:"Confirming the Address on your Device",id:"confirming-the-address-on-your-device",children:[]},{value:"Checking the Balance of Your Account",id:"checking-the-balance-of-your-account",children:[]},{value:"Sending a Transfer",id:"sending-a-transfer",children:[]},{value:"Receiving a Transfer",id:"receiving-a-transfer",children:[]},{value:"Staking",id:"staking",children:[]},{value:"Removing Expired Democracy Locks",id:"removing-expired-democracy-locks",children:[]}]},{value:"Support",id:"support",children:[]}],u={toc:c};function p(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Because of required WebUSB support, Ledger wallets currently only work on Chromium-based\nbrowsers like Brave and Chrome.")),(0,r.kt)("p",null,"The Polkadot ",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger")," application is compatible with both the Ledger Nano S and the Ledger Nano X\ndevices. Ledger devices are hardware wallets that keep your secret secured on a physical device that\ndoes not expose it to your computer or the internet."),(0,r.kt)("p",null,'The Polkadot Ledger application allows you to manage Polkadot\'s native token, the DOT. It supports\nmost of the transaction types of the network (a notable exception is the "Batch" transaction from\nthe Utility pallet).'),(0,r.kt)("p",null,"If you have trouble using Ledger or following the directions below, you can try searching for your\nissue on the ",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/"},"Polkadot Knowledge Base"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please check out our\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=p24yOcLLFmI&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=33&ab_channel=Polkadot"},"intro to Ledger video on Youtube for more information"),".")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Here is a list of what you will need before starting:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Ledger Nano S or a Ledger Nano X."),(0,r.kt)("li",{parentName:"ul"},"The latest firmware installed (at the time of writing this is 1.6.1 on the Nano S, and 1.2.4-4 on\nthe Nano X)."),(0,r.kt)("li",{parentName:"ul"},"Ledger Live is installed and at version 2.1 or newer (see settings -> about to find out if you're\nup to date)."),(0,r.kt)("li",{parentName:"ul"},"A Chromium-based web browser is installed that you can use to access ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps"),".")),(0,r.kt)("h2",{id:"installing-the-ledger-application"},"Installing the Ledger Application"),(0,r.kt)("h3",{id:"using-ledger-live"},"Using Ledger Live"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Open the "Manager" tab in Ledger Live.'),(0,r.kt)("li",{parentName:"ul"},"Connect and unlock your Ledger device."),(0,r.kt)("li",{parentName:"ul"},"If asked, allow the manager on your device by pressing both buttons on the YES screen."),(0,r.kt)("li",{parentName:"ul"},"Find Polkadot in the app catalog and install it.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The Polkadot App in the Ledger Manager",src:n(55864).Z})),(0,r.kt)("p",null,"Please proceed to the ",(0,r.kt)("a",{parentName:"p",href:"#using-on-polkadot-js-apps"},"usage instructions")," below."),(0,r.kt)("h3",{id:"using-the-developer-release"},"Using the Developer Release"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: These instructions are for development installation only. It is recommended to install the\napplication from Ledger Live unless you ",(0,r.kt)("em",{parentName:"p"},"know exactly what you're doing"),".")),(0,r.kt)("p",null,"Instructions for downloading the prerelease binary from the GitHub releases are written ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot#download-and-install"},"in the\nREADME")," for the Polkadot Ledger application GitHub repository."),(0,r.kt)("p",null,"On the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot/releases"},"releases page")," you can download the shell script ",(0,r.kt)("inlineCode",{parentName:"p"},"install_app.sh")," and then make it\nexecutable in your shell by typing the command ",(0,r.kt)("inlineCode",{parentName:"p"},"chmod +x install_app.sh"),"."),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"install_app.sh")," ",(0,r.kt)("inlineCode",{parentName:"p"},"help")," command will show you the available options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"$ ./install_app.sh --help\nZondax Installer [Polkadot-1.2011.1] [Warning: use only for test/demo apps]\n  load    - Load Polkadot app\n  delete  - Delete Polkadot app\n  version - Show Polkadot app version\n")),(0,r.kt)("p",null,"Next, you must make sure your Ledger device is plugged in and unlocked and you're using the latest\nfirmware (1.6.1 at the time of writing). If everything is prepared, then type\n",(0,r.kt)("inlineCode",{parentName:"p"},"./install_app.sh load")," and accept the prompts on your Ledger device to install the application."),(0,r.kt)("p",null,"First it will prompt you to allow an unsafe manager - confirm this by switching the screen to the\nallow screen and pressing the corresponding buttons."),(0,r.kt)("p",null,'After some processing time, the screen of your device will update to say "Install app Polkadot".\nNavigate all the way to the right, verify the Identifier hash matches the one that is printed in\nyour terminal. Click both buttons on "Perform Installation" to install the application. It will ask\nagain for your PIN code.'),(0,r.kt)("p",null,"At the end of the process you should have the newly installed Polkadot application on the device."),(0,r.kt)("h2",{id:"using-on-polkadot-js-apps"},"Using on Polkadot-JS Apps"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Ledger Live should be off while using Ledger with Polkadot JS Apps as it can interfere with\nnormal operation.")),(0,r.kt)("h3",{id:"loading-your-account"},"Loading Your Account"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps")," already has an integration with the Ledger application so that your device will\nwork with the browser interface after installation. The functionality is currently gated behind a\nfeature setting that you will need to turn on."),(0,r.kt)("p",null,'In order to turn on the interoperability with the Polkadot Ledger application, go to the "Settings"\ntab in Polkadot-JS Apps. Find the option for attaching Ledger devices and switch the option from the\ndefault "Do not attach Ledger devices" to "Attach Ledger via WebUSB". Be aware: if you are not\nseeing this it is because there is\n',(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps/issues/3771"},"no Ledger support")," on FireFox."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dropdown selector for allowing Ledger connections in PolkadotJS Settings",src:n(46156).Z})),(0,r.kt)("p",null,'Click "Save" to keep your settings.'),(0,r.kt)("p",null,'Now when you go to the "Accounts" tab you will see a new button that says "Add Ledger". Ensure that\nyour Ledger device is unlocked and you have navigated into the Polkadot application, then click this\nbutton.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Ledger button in PolkadotJS",src:n(5528).Z})),(0,r.kt)("p",null,"A popup will appear asking you to select an account and derivation path."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Picking an account and derivation path",src:n(32728).Z})),(0,r.kt)("p",null,"The first input will let you name your account if you have not done so already. If you have already\nnamed your account, this will not change the existing name. The first dropdown lets you select an\naccount. You can have multiple accounts on a single Ledger device. The second dropdown lets you pick\na derivation path - think of it like a formula from which child accounts are generated. If in doubt,\npick the first option for both. 0 / 0 is a good default."),(0,r.kt)("p",null,"Once you confirm your selection, depending on your browser and its security settings, you might need\nto confirm the USB connection through a popup like the one below when adding the Ledger device for\nthe first time:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Display the device connection popup",src:n(16932).Z})),(0,r.kt)("p",null,'Click on the "Unknown device" line and the "Connect" button will become available.'),(0,r.kt)("p",null,'You should now be able to scroll down and find a new account on the page with the type "ledger".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Displaying the Ledger account in the list",src:n(36320).Z})),(0,r.kt)("p",null,"You can now use this account to interact with Polkadot on Polkadot-JS Apps and it will prompt your\nledger for confirmation when you initiate a transaction."),(0,r.kt)("h3",{id:"confirming-the-address-on-your-device"},"Confirming the Address on your Device"),(0,r.kt)("p",null,'On the "Accounts" tab, find your Ledger-connected account. Click on the three vertical dots at the\nend of the row. This will open a new menu, here you can click the "Show address on hardware device"\noption to display the address on your device.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Options menu of an account in the Accounts screen of PolkadotJS",src:n(78899).Z})),(0,r.kt)("p",null,"Here you can scroll through and make sure the address matches to what is displayed on Polkadot-JS\nApps."),(0,r.kt)("h3",{id:"checking-the-balance-of-your-account"},"Checking the Balance of Your Account"),(0,r.kt)("p",null,"There are a few methods to check the balance of your account. You can use Polkadot-JS Apps or you\ncan use a block explorer like ",(0,r.kt)("a",{parentName:"p",href:"https://polkascan.io/polkadot"},"Polkascan")," or ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.subscan.io/"},"Subscan"),"."),(0,r.kt)("h4",{id:"using-polkadot-js-apps"},"Using Polkadot-JS Apps"),(0,r.kt)("p",null,'Once you have your account loaded on the "Accounts" tab it should show a row with your Ledger\naccount. At the far right of the row is located your account\'s DOT balance. If you expand the\nbalance arrow, it will show details of your balance such as locks or reserved amounts.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Account row showing empty balance",src:n(36320).Z})),(0,r.kt)("h3",{id:"sending-a-transfer"},"Sending a Transfer"),(0,r.kt)("p",null,"Instructions to send a transfer can be found on the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-balance-transfers"},"balance transfer page"),"."),(0,r.kt)("h3",{id:"receiving-a-transfer"},"Receiving a Transfer"),(0,r.kt)("p",null,"In order to receive a transfer on the accounts stored on your Ledger device, you will need to\nprovide the sender (i.e. the payer) with your address."),(0,r.kt)("p",null,"The easiest way to get your address is to click on the account name which will open a sidebar. Your\naddress will be shown in this sidebar, along with some other information. Another method is just\nclicking on your account's avatar icon - this immediately copies your address to the clipboard."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Warning"),": before giving anyone your address, make sure it matches what's really on the Ledger\nby ",(0,r.kt)("a",{parentName:"p",href:"#confirming-the-address-on-your-device"},"confirming the address on your device"),". Some malware\nwill intercept clicks and clipboard requests and can change your copied value in-flight, so being\nextra vigilant around copy-paste operations makes sense.")),(0,r.kt)("h3",{id:"staking"},"Staking"),(0,r.kt)("p",null,"Since Ledger does not support batch transactions, you must do two separate transactions when you\nwant to stake using an account stored on a Ledger device."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Go to the "Staking" tab found under the "Network" dropdown in the top navigation menu.'),(0,r.kt)("li",{parentName:"ul"},'Click the "Account Actions" pane in the inner navigation.'),(0,r.kt)("li",{parentName:"ul"},'Click "+ Stash" instead of "+ Nominator" or "+ Validator" (selecting the latter two will not\nwork).'),(0,r.kt)("li",{parentName:"ul"},"Input the amount of tokens to bond and confirm the transaction."),(0,r.kt)("li",{parentName:"ul"},"Confirm the transaction on the Ledger device."),(0,r.kt)("li",{parentName:"ul"},'When the transaction is included you will see the newly bonded account in the "Account Actions"\npage.'),(0,r.kt)("li",{parentName:"ul"},'Select "Start Nominating" or "Start Validating" to start nominating or validating.'),(0,r.kt)("li",{parentName:"ul"},"Confirm the transaction on Apps and on the Ledger device.")),(0,r.kt)("h3",{id:"removing-expired-democracy-locks"},"Removing Expired Democracy Locks"),(0,r.kt)("p",null,"Since Ledger does not support batch transactions, you must issue several extrinsics manually when you\nwant remove expired democracy locks on an account stored on a Ledger device."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/accounts"},"https://polkadot.js.org/apps/#/accounts"),". Look at your expired locks and note which referenda\nthey were for."),(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/extrinsics"},"https://polkadot.js.org/apps/#/extrinsics")),(0,r.kt)("li",{parentName:"ul"},'For each referendum with an expired lock, issue a "democracy.removeVote(X)" extrinsic, where X =\nthe referendum you voted on and has an expired lock. Make sure you do it from the account with the\nexpired locks - you can\'t do it from another account.'),(0,r.kt)("li",{parentName:"ul"},'Once you have removed all of the votes, issue a "democracy.unlock(ACCOUNT)" extrinsic, where\nACCOUNT is the account you just removed the votes from.'),(0,r.kt)("li",{parentName:"ul"},"Go back to ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/accounts"},"https://polkadot.js.org/apps/#/accounts"),". You'll see that the locks are now removed.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": Despite the Polkadot ledger application being compatible with both the Ledger Nano S and the\nLedger Nano X, none of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy"},"Democracy")," extrinsics are available in the\nlight version. The following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot#democracy"},"repo by Zondax")," lists the currently supported Democracy extrinsics on\nthe full ledger."),(0,r.kt)("h2",{id:"support"},"Support"),(0,r.kt)("p",null,"If you need support please send an email to\n",(0,r.kt)("a",{parentName:"p",href:"mailto:support@polkadot.network"},"support@polkadot.network")," or visit our\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network"},"Support Page"),"."))}p.isMDXComponent=!0},78899:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/ledger-4-6f7e09be831f4a82031a066b8f222a6c.png"},46156:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/ledger-fd53351628660be133bf903bbc63f682.png"},32728:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-account-8690ff195ced1f005f03c2b2bbef349a.png"},36320:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},55864:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/manager-app-polkadot-8491d13e9ef8aaeadc32db0139138bc1.png"},16932:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/query-device-d7d9e7e7d28a34a343c59094db864a1a.png"},5528:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);