"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2884],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48470:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>p,default:()=>u});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={id:"maintain-guides-how-to-upgrade",title:"How to Upgrade Your Validator",sidebar_label:"How to Upgrade Your Validator",descriptions:"Steps on how to upgrade your validator node.",slug:"../maintain-guides-how-to-upgrade"},l=void 0,d={unversionedId:"maintain/maintain-guides-how-to-upgrade",id:"maintain/maintain-guides-how-to-upgrade",title:"How to Upgrade Your Validator",description:"Validators perform critical functions for the network, and as such, have strict uptime requirements. Validators may have to go offline for short-periods of time to upgrade client software or to upgrade the host machine. Usually, standard client upgrades will only require you to stop the service, replace the binary and restart the service.  This operation can be executed within a session and if performed correctly will not produce a slashable event.",source:"@site/../docs/maintain/maintain-guides-how-to-upgrade.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-upgrade",permalink:"/zh-CN/docs/maintain-guides-how-to-upgrade",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-upgrade.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649264672,formattedLastUpdatedAt:"2022/4/6",frontMatter:{id:"maintain-guides-how-to-upgrade",title:"How to Upgrade Your Validator",sidebar_label:"How to Upgrade Your Validator",descriptions:"Steps on how to upgrade your validator node.",slug:"../maintain-guides-how-to-upgrade"}},p=[{value:"Key Components",id:"key-components",children:[{value:"Session Keys",id:"session-keys",children:[],level:3},{value:"Keystore",id:"keystore",children:[],level:3}],level:2},{value:"Steps",id:"steps",children:[{value:"Session <code>N</code>",id:"session-n",children:[],level:3},{value:"Session <code>N+3</code>",id:"session-n3",children:[],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Validators perform critical functions for the network, and as such, have strict uptime requirements. Validators may have to go offline for short-periods of time to upgrade client software or to upgrade the host machine. Usually, standard client upgrades will only require you to stop the service, replace the binary and restart the service.  This operation can be executed within a session and if performed correctly will not produce a slashable event."),(0,r.kt)("p",null,"Validators may also need to perform long-lead maintenance tasks that will span more than one session.  Under these circumstances, an active validator may chill their stash and be removed from the active validator set.  Alternatively, the validator may substitute the active validator server with another allowing the former to undergo maintenance activities."),(0,r.kt)("p",null,"This guide will provide an option for validators to seamlessly substitute an active validator server to allow for maintenance operations. "),(0,r.kt)("p",null,"The process can take several hours, so make sure you understand the instructions first and plan accordingly."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Keep an eye out on new releases from the community ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Upgrade or downgrade accordingly."))),(0,r.kt)("h2",{id:"key-components"},"Key Components"),(0,r.kt)("h3",{id:"session-keys"},"Session Keys"),(0,r.kt)("p",null,"Session keys are stored in the client and used to sign validator operations. They are what link your validator node to your Controller account. If you change them within a session you will have to wait for the current session to finish and a further two sessions to elapse before they are applied."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-keys"},"More info about keys in Polkadot.")),(0,r.kt)("h3",{id:"keystore"},"Keystore"),(0,r.kt)("p",null,"Each validator server contains essential private keys in a folder called the ",(0,r.kt)("em",{parentName:"p"},"keystore"),". These keys are used by a validator to sign transactions at the network level.  If two or more validators sign certain transactions using the same keys, it can lead to an ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-staking/#slashing"},"equivocation slash"),"."),(0,r.kt)("p",null,"For this reason, it is advised that validators DO NOT CLONE or COPY the ",(0,r.kt)("em",{parentName:"p"},"keystore")," folder and instead generate session keys for each new validator instance."),(0,r.kt)("p",null,"Default keystore path - ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot/chains/<chain>/keystore")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("p",null,"The following steps require a second validator which will be referred to as ",(0,r.kt)("inlineCode",{parentName:"p"},"Validator B"),"; the original server that is in the active set will be referred to as ",(0,r.kt)("inlineCode",{parentName:"p"},"Validator A"),"."),(0,r.kt)("h3",{id:"session-n"},"Session ",(0,r.kt)("inlineCode",{parentName:"h3"},"N")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start a second node. Once it is synced, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"--validator"),' flag. This is now "Validator B."'),(0,r.kt)("li",{parentName:"ol"},"Generate Session keys for ",(0,r.kt)("strong",{parentName:"li"},"Validator B"),"."),(0,r.kt)("li",{parentName:"ol"},"Submit a ",(0,r.kt)("inlineCode",{parentName:"li"},"set_key")," extrinsic from your Controller account with the session key generated from ",(0,r.kt)("strong",{parentName:"li"},"Validator B"),"."),(0,r.kt)("li",{parentName:"ol"},"Take note of the Session that this extrinsic was executed in."),(0,r.kt)("li",{parentName:"ol"},"Allow the current session to elapse and then wait for two full sessions. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It is imperative that you keep Validator A running during this time.")," ",(0,r.kt)("inlineCode",{parentName:"p"},"set_key")," does not have an immediate effect and requires two full sessions to elapse before it does.  If you do switch off Validator A too early you may risk being chilled and face a fault within the Thousand Validator Programme."),(0,r.kt)("h3",{id:"session-n3"},"Session ",(0,r.kt)("inlineCode",{parentName:"h3"},"N+3")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Validator B")," is now acting as your validator - you can safely perform operations on ",(0,r.kt)("strong",{parentName:"p"},"Validator A"),"."),(0,r.kt)("p",null,"When you are ready to restore ",(0,r.kt)("strong",{parentName:"p"},"Validator A"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start ",(0,r.kt)("strong",{parentName:"li"},"Validator A"),", sync the database and ensure that it is operating with the ",(0,r.kt)("inlineCode",{parentName:"li"},"--validator")," flag."),(0,r.kt)("li",{parentName:"ol"},"Generate new Session keys for ",(0,r.kt)("strong",{parentName:"li"},"Validator A"),"."),(0,r.kt)("li",{parentName:"ol"},"Submit a ",(0,r.kt)("inlineCode",{parentName:"li"},"set_key")," extrinsic from your Controller account with the session key generated from ",(0,r.kt)("strong",{parentName:"li"},"Validator A"),"."),(0,r.kt)("li",{parentName:"ol"},"Take note of the Session that this extrinsic was executed in.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Again, it is imperative that Validator B is kept running until the current session finishes and two further full sessions have elapsed.")),(0,r.kt)("p",null,"Once this time has elapsed, ",(0,r.kt)("strong",{parentName:"p"},"Validator A")," will take over. You can safely stop Validator B."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," To verify that the Session has changed, make sure that a block in the new Session is finalized. You should see log messages like the ones below to confirm the change:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2019-10-28 21:44:13 Applying authority set change scheduled at block #450092\n2019-10-28 21:44:13 Applying GRANDPA set change to new set with 20 authorities\n")))}u.isMDXComponent=!0}}]);