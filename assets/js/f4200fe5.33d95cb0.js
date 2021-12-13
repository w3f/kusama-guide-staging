"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2909],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31639:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>g,default:()=>w,frontMatter:()=>f,metadata:()=>y,toc:()=>N});var n=a(87462),o=a(63366),r=a(67294),l=a(3905),i=a(72389),s=a(79443);const u=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var p=a(63616),c=a(86010);const d="tabItem_1uMI";function m(e){var t,a,n,o=e.lazy,l=e.block,i=e.defaultValue,s=e.values,m=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=s?s:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,p.lx)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===i?i:null!=(t=null!=i?i:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=k[0])?void 0:n.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=u(),N=y.tabGroupChoices,v=y.setTabGroupChoices,w=(0,r.useState)(g),T=w[0],x=w[1],C=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=N[m];null!=S&&S!==T&&b.some((function(e){return e.value===S}))&&x(S)}var P=function(e){var t=e.currentTarget,a=C.indexOf(t),n=b[a].value;n!==T&&(O(t),x(n),null!=m&&v(m,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;a=C[n]||C[0];break;case"ArrowLeft":var o=C.indexOf(e.currentTarget)-1;a=C[o]||C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},h)},b.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":T===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:P,onClick:P},null!=a?a:t)}))),o?(0,r.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function h(e){var t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}const k=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)};var b=["components"],f={id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node",description:"Steps on how to set up a full node.",slug:"../maintain-sync"},g=void 0,y={unversionedId:"maintain/maintain-sync",id:"maintain/maintain-sync",title:"Set up a Full Node",description:"Steps on how to set up a full node.",source:"@site/../docs/maintain/maintain-sync.md",sourceDirName:"maintain",slug:"/maintain-sync",permalink:"/docs/maintain-sync",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-sync.md",tags:[],version:"current",lastUpdatedBy:"Charles Walker",lastUpdatedAt:1638887998,formattedLastUpdatedAt:"12/7/2021",frontMatter:{id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node",description:"Steps on how to set up a full node.",slug:"../maintain-sync"}},N=[{value:"Types of Nodes",id:"types-of-nodes",children:[],level:3},{value:"Setup Instructions",id:"setup-instructions",children:[],level:2},{value:"Get Substrate",id:"get-substrate",children:[],level:2},{value:"Clone and Build",id:"clone-and-build",children:[],level:2},{value:"Run",id:"run",children:[],level:2},{value:"Running an Archive Node",id:"running-an-archive-node",children:[],level:2},{value:"Using Docker",id:"using-docker",children:[],level:2}],v={toc:N};function w(e){var t=e.components,a=(0,o.Z)(e,b);return(0,l.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If you're building dapps or products on a Substrate-based chain like Polkadot, Kusama or a custom\nSubstrate implementation, you probably want the ability to run a node-as-a-back-end. After all, it's\nalways better to rely on your own infrastructure than on a third-party-hosted one in this brave new\ndecentralized world."),(0,l.kt)("p",null,"This guide will show you how to connect to ",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.network/"},"Polkadot network"),", but the\nsame process applies to any other ",(0,l.kt)("a",{parentName:"p",href:"https://substrate.io"},"Substrate"),"-based chain. First,\nlet's clarify the term ",(0,l.kt)("em",{parentName:"p"},"full node"),"."),(0,l.kt)("h3",{id:"types-of-nodes"},"Types of Nodes"),(0,l.kt)("p",null,"A blockchain's growth comes from a ",(0,l.kt)("em",{parentName:"p"},"genesis block"),", ",(0,l.kt)("em",{parentName:"p"},"extrinsics"),", and ",(0,l.kt)("em",{parentName:"p"},"events"),"."),(0,l.kt)("p",null,"When a validator seals block 1, it takes the blockchain's state at block 0. It then applies all\npending changes on top of it, and emits the events that are the result of these changes. Later, the\nstate of the chain at block 1 is used in the same way to build the state of the chain at block 2,\nand so on. Once two thirds of the validators agree on a specific block being valid, it is finalized."),(0,l.kt)("p",null,"An ",(0,l.kt)("strong",{parentName:"p"},"archive node")," keeps all the past blocks. An archive node makes it convenient to query the past\nstate of the chain at any point in time. Finding out what an account's balance at a certain block\nwas, or which extrinsics resulted in a certain state change are fast operations when using an\narchive node. However, an archive node takes up a lot of disk space - around Kusama's 1.6 millionth\nblock this was around 15 to 20GB."),(0,l.kt)("p",null,"Archive nodes are used by utilities that need past information - like block explorers, council\nscanners, discussion platforms like ",(0,l.kt)("a",{parentName:"p",href:"https://polkassembly.io"},"Polkassembly"),", and others. They need\nto be able to look at past on-chain data."),(0,l.kt)("p",null,"A ",(0,l.kt)("strong",{parentName:"p"},"full node")," is ",(0,l.kt)("em",{parentName:"p"},"pruned"),": it discards all finalized blocks older than a configurable number\nexcept the genesis block: This is 256 blocks from the last finalized one, by default. A node that is\npruned this way requires much less space than an archive node."),(0,l.kt)("p",null,"A full node may eventually be able to rebuild the entire chain with no additional information, and\nbecome an archive node, but at the time of writing, this is not implemented. If you need to query\nhistorical blocks past what you pruned, you need to purge your database and resync your node\nstarting in archive mode. Alternatively you can use a backup or snapshot of a trusted source to\navoid needing to sync from genesis with the network, and only need the blocks past that snapshot."),(0,l.kt)("p",null,"Full nodes allow you to read the current state of the chain and to submit and validate extrinsics\ndirectly on the network without relying on a centralized infrastructure provider."),(0,l.kt)("p",null,"Another type of node is a ",(0,l.kt)("strong",{parentName:"p"},"light node"),". A light node has only the runtime and the current state,\nbut does not store past blocks and so cannot read historical data without requesting it from a node\nthat has it. Light nodes are useful for resource restricted devices. An interesting use-case of\nlight nodes is a Chrome extension, which is a node in its own right, running the runtime in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-light-ui"},"WASM\nformat")," as well as a full or light node that is\ncompletely encapsulated in WASM and can be integrated into webapps:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/smoldot#wasm-light-node"},"https://github.com/paritytech/smoldot#wasm-light-node")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"setup-instructions"},"Setup Instructions"),(0,l.kt)("p",null,"This is not recommended if you're a validator. Please see the\n",(0,l.kt)("a",{parentName:"p",href:"/docs/maintain-guides-secure-validator"},"secure validator setup")," if you are running validator."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: The bash commands that are provided to run against ",(0,l.kt)("strong",{parentName:"p"},"your node")," use\n",(0,l.kt)("inlineCode",{parentName:"p"},"Polkadot")," as the default chain.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--chain")," flag if you are\nfollowing the setup instructions to setup a ",(0,l.kt)("inlineCode",{parentName:"p"},"Kusama")," node.\nFor example:"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name" --chain kusama\n'))),(0,l.kt)(h,{groupId:"operating-systems",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(k,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install Homebrew within the terminal by running:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Then, run:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install openssl cmake llvm\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install Rust in your terminal by running:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Once Rust is installed, run the following command to clone and build the polkadot code:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\n./scripts/init.sh\ncargo build --release\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Start your node:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Find your node on ",(0,l.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,l.kt)(k,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"Ubuntu")," (same webpage).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Determine the latest version of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases"},"Polkadot binary"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,l.kt)("inlineCode",{parentName:"p"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"v0.8.22"),"):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://github.com/paritytech/polkadot/releases/download/*VERSION*/polkadot -o polkadot\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Then, run the following:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod +x polkadot\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Start your node:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Find your node on ",(0,l.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,l.kt)(k,{value:"linux",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Determine the latest version of the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/releases"},"Polkadot binary"),".")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The nature of pre-built binaries means that they may not work on your particular architecture or Linux distribution.\nIf you see an error like ",(0,l.kt)("inlineCode",{parentName:"p"},"cannot execute binary file: Exec format error")," it likely means the binary is not compatible\nwith your system. You will either need to compile the ",(0,l.kt)("a",{parentName:"p",href:"#clone-and-build"},(0,l.kt)("strong",{parentName:"a"},"source code"))," or use ",(0,l.kt)("a",{parentName:"p",href:"#using-docker"},(0,l.kt)("strong",{parentName:"a"},"Docker")),".")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,l.kt)("inlineCode",{parentName:"p"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"v0.8.22"),"):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://github.com/paritytech/polkadot/releases/download/*VERSION*/polkadot -o polkadot\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run the following: ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo chmod +x polkadot"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run the following:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Find your node on ",(0,l.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry")))))),(0,l.kt)("h2",{id:"get-substrate"},"Get Substrate"),(0,l.kt)("p",null,"Follow instructions as outlined\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/getting-started/overview/"},"here")," - note that Windows users will\nhave their work cut out for them. It's better to use a virtual machine instead."),(0,l.kt)("p",null,"Test if the installation was successful by running ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo --version"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u03bb cargo --version\ncargo 1.41.0 (626f0f40e 2019-12-03)\n")),(0,l.kt)("h2",{id:"clone-and-build"},"Clone and Build"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot"},"paritytech/polkadot")," repo's master branch contains the\nlatest Polkadot code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\n./scripts/init.sh\ncargo build --release\n")),(0,l.kt)("p",null,"Alternatively, if you wish to use a specific release, you can check out a specific tag (",(0,l.kt)("inlineCode",{parentName:"p"},"v0.8.3")," in\nthe example below):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\ngit checkout tags/v0.8.3\n./scripts/init.sh\ncargo build --release\n")),(0,l.kt)("h2",{id:"run"},"Run"),(0,l.kt)("p",null,"The built binary will be in the ",(0,l.kt)("inlineCode",{parentName:"p"},"target/release")," folder, called ",(0,l.kt)("inlineCode",{parentName:"p"},"polkadot"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Polkadot"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n')),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--help")," flag to find out which flags you can use when running the node. For example, if\n",(0,l.kt)("a",{parentName:"p",href:"/docs/maintain-wss"},"connecting to your node remotely"),", you'll probably want to use ",(0,l.kt)("inlineCode",{parentName:"p"},"--ws-external")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"--rpc-cors all"),"."),(0,l.kt)("p",null,"The syncing process will take a while depending on your bandwidth, processing power, disk speed and\nRAM. On a \\$10 DigitalOcean droplet, the process can complete in some 36 hours."),(0,l.kt)("p",null,"Congratulations, you're now syncing with Polkadot. Keep in mind that the process is identical when\nusing any other Substrate chain."),(0,l.kt)("h2",{id:"running-an-archive-node"},"Running an Archive Node"),(0,l.kt)("p",null,"When running as a simple sync node (above), only the state of the past 256 blocks will be kept. When\nvalidating, it defaults to ",(0,l.kt)("a",{parentName:"p",href:"#types-of-nodes"},"archive mode"),". To keep the full state use the\n",(0,l.kt)("inlineCode",{parentName:"p"},"--pruning")," flag:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Polkadot"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "My node\'s name" --pruning archive\n')),(0,l.kt)("p",null,"It is possible to almost quadruple synchronization speed by using an additional flag:\n",(0,l.kt)("inlineCode",{parentName:"p"},"--wasm-execution Compiled"),". Note that this uses much more CPU and RAM, so it should be turned off\nafter the node is in sync."),(0,l.kt)("h2",{id:"using-docker"},"Using Docker"),(0,l.kt)("p",null,"Finally, you can use Docker to run your node in a container. Doing this is a bit more advanced so\nit's best left up to those that either already have familiarity with docker, or have completed the\nother set-up instructions in this guide.\nBe aware that when you run polkadot in docker the process only listen on localhost by default.\nIf you would like to connect to your node's services (rpc, websockets, and prometheus) you need to ensure\nthat you run you node with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--rpc-external"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--ws-external"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"--prometheus-external")," commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-zsh"},'docker run -p 9944:9944 -p 9615:9615 parity/polkadot:v0.9.13 --name "calling_home_from_a_docker_container" --rpc-external --ws-external --prometheus-external\n')))}w.isMDXComponent=!0}}]);