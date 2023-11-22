"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),k=a,m=p["".concat(s,".").concat(k)]||p[k]||u[k]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},76184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"maintain-networks",title:"Networks",sidebar_label:"Networks",description:"Information about the different networks of the Polkadot ecosystem.",keywords:["networks","mainnet","testnet","canary","substrate"],slug:"../maintain-networks"},s=void 0,c={unversionedId:"maintain/maintain-networks",id:"maintain/maintain-networks",title:"Networks",description:"Information about the different networks of the Polkadot ecosystem.",source:"@site/../docs/maintain/maintain-networks.md",sourceDirName:"maintain",slug:"/maintain-networks",permalink:"/docs/maintain-networks",draft:!1,tags:[],version:"current",lastUpdatedBy:"Pierre Besson",lastUpdatedAt:1699096514,formattedLastUpdatedAt:"Nov 4, 2023",frontMatter:{id:"maintain-networks",title:"Networks",sidebar_label:"Networks",description:"Information about the different networks of the Polkadot ecosystem.",keywords:["networks","mainnet","testnet","canary","substrate"],slug:"../maintain-networks"}},d={},p=[{value:"Main networks",id:"main-networks",level:2},{value:"Polkadot Mainnet",id:"polkadot-mainnet",level:3},{value:"Kusama Canary Network",id:"kusama-canary-network",level:3},{value:"Test Networks",id:"test-networks",level:2},{value:"Westend Test Network",id:"westend-test-network",level:3},{value:"Westend Faucet",id:"westend-faucet",level:4},{value:"Rococo Test Network",id:"rococo-test-network",level:3},{value:"Rococo Faucet",id:"rococo-faucet",level:4},{value:"Wococo Test Network (inactive)",id:"wococo-test-network-inactive",level:3},{value:"Differences",id:"differences",level:2},{value:"Telemetry Dashboard",id:"telemetry-dashboard",level:2}],u={toc:p},k="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)(k,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot is built on top of Substrate, a modular framework for blockchains. One feature of Substrate\nis to allow for connection to different networks using a single executable and configuring it with a\nstart-up flag. Here are some of the networks associated with Polkadot or Substrate that you may want\nto connect to and join."),(0,r.kt)("h2",{id:"main-networks"},"Main networks"),(0,r.kt)("p",null,"To connect to a Polkadot network please follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-sync"},"instructions")," for installing\nthe Polkadot executable."),(0,r.kt)("h3",{id:"polkadot-mainnet"},"Polkadot Mainnet"),(0,r.kt)("p",null,"Connecting to the Polkadot network is the default option when starting a node."),(0,r.kt)("p",null,"To start a Polkadot node, run the Polkadot binary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"polkadot\n")),(0,r.kt)("p",null,"and you will connect and start syncing to Polkadot."),(0,r.kt)("p",null,"Check your node is connected by viewing it on\n",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3"},"Telemetry"),"\n(you can set a custom node name by specifying ",(0,r.kt)("inlineCode",{parentName:"p"},'--name "my-custom-node-name"'),")"),(0,r.kt)("h3",{id:"kusama-canary-network"},"Kusama Canary Network"),(0,r.kt)("p",null,"Kusama is a canary network and holds real economic value."),(0,r.kt)("p",null,"Run the Polkadot binary and specify ",(0,r.kt)("inlineCode",{parentName:"p"},"kusama")," as the chain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"polkadot --chain=kusama\n")),(0,r.kt)("p",null,"and you will connect and start syncing to Kusama."),(0,r.kt)("p",null,"Check your node is connected by viewing it on\n",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe"},"Kusama Telemetry"),"\n(you can set a custom node name by specifying ",(0,r.kt)("inlineCode",{parentName:"p"},'--name "my-custom-node-name"'),")"),(0,r.kt)("h2",{id:"test-networks"},"Test Networks"),(0,r.kt)("h3",{id:"westend-test-network"},"Westend Test Network"),(0,r.kt)("p",null,"Westend is the primary test network of Polkadot. The tokens on this network are called ",(0,r.kt)("em",{parentName:"p"},"Westies"),"\n(WND) and they purposefully hold no economic value."),(0,r.kt)("p",null,"Run the Polkadot binary and specify ",(0,r.kt)("inlineCode",{parentName:"p"},"westend")," as the chain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"polkadot --chain=westend\n")),(0,r.kt)("p",null,"and you will connect and start syncing to Westend."),(0,r.kt)("p",null,"Check that your node is connected by viewing it on\n",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e"},"Westend Telemetry"),"\n(you can set a custom node name by specifying ",(0,r.kt)("inlineCode",{parentName:"p"},'--name "my-custom-node-name"'),")."),(0,r.kt)("h4",{id:"westend-faucet"},"Westend Faucet"),(0,r.kt)("p",null,"Follow the instruction ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-DOT#getting-tokens-on-the-westend-testnet"},"here")," to get\nWesties (WND) tokens."),(0,r.kt)("h3",{id:"rococo-test-network"},"Rococo Test Network"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://substrate.io/developers/rococo-network/"},"Rococo")," is a test network built for parachains.\nThe native token of this network (ROC) holds no economic value."),(0,r.kt)("p",null,"Run the Polkadot binary and specify ",(0,r.kt)("inlineCode",{parentName:"p"},"rococo")," as the chain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"polkadot --chain=rococo\n")),(0,r.kt)("p",null,"and you will connect and start syncing to Rococo."),(0,r.kt)("p",null,"Check that your node is connected by viewing it on\n",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/0x6408de7737c59c238890533af25896a2c20608d8b380bb01029acb392781063e"},"Rococo Telemetry"),"\n(you can set a custom node name by specifying ",(0,r.kt)("inlineCode",{parentName:"p"},'--name "my-custom-node-name"'),")."),(0,r.kt)("h4",{id:"rococo-faucet"},"Rococo Faucet"),(0,r.kt)("p",null,"Follow the instruction ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-DOT#getting-tokens-on-the-rococo-testnet"},"here")," to get\nROCs tokens."),(0,r.kt)("h3",{id:"wococo-test-network-inactive"},"Wococo Test Network (inactive)"),(0,r.kt)("p",null,"Wococo used to be a Polkadot test network for testing bridges. The network was shut down following\nthe bridge between Westend and Rococo deployment."),(0,r.kt)("h2",{id:"differences"},"Differences"),(0,r.kt)("p",null,"Runtime differences (e.g. existential and multisignature deposit sizes) between the different\nnetworks can be found by doing a ",(0,r.kt)("inlineCode",{parentName:"p"},"diff")," between the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," of the repositories. For example,\nto compare the Polkadot and Westend runtimes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/paritytech/polkadot && cd polkadot/runtime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ls")," - show the available runtimes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"diff polkadot/src/lib.rs westend/src/lib.rs"))),(0,r.kt)("p",null,"You can also paste the runtimes\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/runtime/polkadot/src/lib.rs"},"Polkadot"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/runtime/westend/src/lib.rs"},"Westend"),") into a\nweb-based diff tool like ",(0,r.kt)("a",{parentName:"p",href:"https://www.diffchecker.com/"},"Diffchecker")," if you're not comfortable with\nthe CLI."),(0,r.kt)("h2",{id:"telemetry-dashboard"},"Telemetry Dashboard"),(0,r.kt)("p",null,"If you connect to the public networks, the default configuration for your node will connect it to\nthe public ",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/"},"Telemetry")," service."),(0,r.kt)("p",null,"You can verify that your node is connected by navigating to the correct network on the dashboard and\nfinding the name of your node."),(0,r.kt)("p",null,"There is a built-in search function on the nodes page. Simply start typing keystrokes in the main\nwindow to make it available."))}m.isMDXComponent=!0}}]);