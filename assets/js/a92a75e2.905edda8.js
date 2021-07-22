(self.webpackChunk=self.webpackChunk||[]).push([[5562],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40099:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),s=["components"],i={id:"maintain-guides-how-to-systemd",title:"Using systemd for the Validator Node",sidebar_label:"Using systemd for the Validator Node"},l=void 0,c={unversionedId:"maintain-guides-how-to-systemd",id:"maintain-guides-how-to-systemd",isDocsHomePage:!1,title:"Using systemd for the Validator Node",description:"You can run your validator as a systemd process so that it",source:"@site/../docs/maintain-guides-how-to-systemd.md",sourceDirName:".",slug:"/maintain-guides-how-to-systemd",permalink:"/docs/maintain-guides-how-to-systemd",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-guides-how-to-systemd.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1626943906,formattedLastUpdatedAt:"7/22/2021",frontMatter:{id:"maintain-guides-how-to-systemd",title:"Using systemd for the Validator Node",sidebar_label:"Using systemd for the Validator Node"}},d=[],p={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can run your validator as a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Systemd"},"systemd")," process so that it\nwill automatically restart on server reboots or crashes (and helps to avoid getting slashed!)."),(0,o.kt)("p",null,"Before following this guide you should have already set up your validator by following the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-validator"},"How to validate")," article."),(0,o.kt)("p",null,"First create a new unit file called ",(0,o.kt)("inlineCode",{parentName:"p"},"polkadot-validator.service")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch /etc/systemd/system/polkadot-validator.service\n")),(0,o.kt)("p",null,"In this unit file you will write the commands that you want to run on server boot / restart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Polkadot Validator\n\n[Service]\nExecStart=PATH_TO_POLKADOT_BIN --validator --name SHOW_ON_TELEMETRY\nRestart=always\nRestartSec=120\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"WARNING:")," It's recommended to delay the restart of a node with ",(0,o.kt)("inlineCode",{parentName:"p"},"RestartSec")," in the case of node\ncrashes. It's possible that when a node crashes, consensus votes in GRANDPA aren't persisted to\ndisk. In this case, there is potential to equivocate when immediately restarting. What can happen\nis the node will not recognize votes that didn't make it to disk, and will then cast conflicting\nvotes. Delaying the restart will allow the network to progress past potentially conflicting votes,\nat which point other nodes will not accept them.")),(0,o.kt)("p",null,"To enable this to autostart on bootup run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable polkadot-validator.service\n")),(0,o.kt)("p",null,"Start it manually with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start polkadot-validator.service\n")),(0,o.kt)("p",null,"You can check that it's working with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status polkadot-validator.service\n")),(0,o.kt)("p",null,"You can tail the logs with ",(0,o.kt)("inlineCode",{parentName:"p"},"journalctl")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -f -u polkadot-validator\n")))}u.isMDXComponent=!0}}]);