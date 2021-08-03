(self.webpackChunk=self.webpackChunk||[]).push([[6929],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32288:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>u});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i=["components"],s={id:"maintain-wss",title:"Set up Secure WebSocket for Remote Connections",sidebar_label:"Set up Secure WebSocket for Remote Connections"},l=void 0,c={unversionedId:"maintain-wss",id:"maintain-wss",isDocsHomePage:!1,title:"Set up Secure WebSocket for Remote Connections",description:"You might want to host a node on one server and then connect to it from a UI hosted on another, e.g.",source:"@site/../docs/maintain-wss.md",sourceDirName:".",slug:"/maintain-wss",permalink:"/zh-CN/docs/maintain-wss",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-wss.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1627993497,formattedLastUpdatedAt:"2021/8/3",frontMatter:{id:"maintain-wss",title:"Set up Secure WebSocket for Remote Connections",sidebar_label:"Set up Secure WebSocket for Remote Connections"}},p=[{value:"Set up a node",id:"set-up-a-node",children:[]},{value:"Set up a certificate",id:"set-up-a-certificate",children:[{value:"Domain and Certbot",id:"domain-and-certbot",children:[]},{value:"Self-signed",id:"self-signed",children:[]}]},{value:"Set up Nginx server",id:"set-up-nginx-server",children:[]},{value:"Importing the Certificate",id:"importing-the-certificate",children:[]},{value:"Connecting to the node",id:"connecting-to-the-node",children:[]}],d={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You might want to host a node on one server and then connect to it from a UI hosted on another, e.g.\n",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS UI"),". This will not be possible unless you set up a secure\nproxy for websocket connections. Let's see how we can set up WSS on a remote Substrate node."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: this should ",(0,a.kt)("strong",{parentName:"em"},"only")," be done for sync nodes used as back-end for some dapps or projects.\nNever open websockets to your validator node - there's no reason to do that and it can only lead to\nsecurity gaffes.")),(0,a.kt)("p",null,"In this guide we'll be using Ubuntu 18.04 hosted on a \\$10 DigitalOcean droplet. We'll assume you're\nusing a similar OS, and that you have nginx installed (if not, run ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt-get install nginx"),")."),(0,a.kt)("h2",{id:"set-up-a-node"},"Set up a node"),(0,a.kt)("p",null,"Whether it's a generic Substrate node, a Kusama node, or your own private blockchain, they all\ndefault to the same websocket connection: port 9944 on localhost. For this example, we'll set up a\nKusama sync node (non-validator)."),(0,a.kt)("p",null,"Create a new server on your provider of choice or locally at home (preferred). We'll assume you're\nusing Ubuntu 18.04. Then install Substrate and build the node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://getsubstrate.io -sSf | bash\ngit clone https://github.com/paritytech/polkadot kusama\ncd kusama\n./scripts/init.sh\ncargo build --release\n./target/release/polkadot --name "DigitalOcean 10 USD droplet ftw" --rpc-cors all\n')),(0,a.kt)("p",null,"This will start the syncing process with Kusama's mainnet."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: the ",(0,a.kt)("inlineCode",{parentName:"em"},"--rpc-cors")," mode needs to be set to all so that all external connections are allowed.")),(0,a.kt)("h2",{id:"set-up-a-certificate"},"Set up a certificate"),(0,a.kt)("p",null,"To get WSS (secure websocket), you need an SSL certificate. There are two possible approaches."),(0,a.kt)("h3",{id:"domain-and-certbot"},"Domain and Certbot"),(0,a.kt)("p",null,"The first approach is getting a dedicated domain, redirecting its nameservers to your IP address,\nsetting up an Nginx server for that domain, and finally\n",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx.html"},"following LetsEncrypt instructions"),"\nfor Nginx setup. This will auto-generate an SSL certificate and include it in your Nginx\nconfiguration. This will let you connect Polkadot-JS UI to a URL like mynode.mydomain.com rather\nthan 82.196.8.192:9944, which is arguably more user friendly."),(0,a.kt)("p",null,"This is simple to do on cloud hosting providers or if you have a static IP, but harder to pull off\nwhen running things from your home server."),(0,a.kt)("h3",{id:"self-signed"},"Self-signed"),(0,a.kt)("p",null,"The second approach and one we'll follow here is generating a self-signed certificate and relying on\nthe raw IP address of your node when connecting to it."),(0,a.kt)("p",null,"Generate a self-signed certificate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt\nsudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048\n")),(0,a.kt)("h2",{id:"set-up-nginx-server"},"Set up Nginx server"),(0,a.kt)("p",null,"Now it's time to tell Nginx to use these certificates. The server block below is all you need, but\nkeep in mind that you need to replace some placeholder values. Notably:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SERVER_ADDRESS")," should be replaced by your domain name if you have it, or your server's IP\naddress if not."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CERT_LOCATION")," should be ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/letsencrypt/live/YOUR_DOMAIN/fullchain.pem")," if you used Certbot,\nor ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/ssl/certs/nginx-selfsigned.crt")," if self-signed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CERT_LOCATION_KEY")," should be ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/letsencrypt/live/YOUR_DOMAIN/privkey.pem")," if you used Certbot,\nor ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/ssl/private/nginx-selfsigned.key")," if self-signed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CERT_DHPARAM")," should be ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/letsencrypt/ssl-dhparams.pem")," if you used Certbot, and\n",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/ssl/certs/dhparam.pem")," if self-signed.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note that if you used Certbot, it should have made the path insertions below for you if you\nfollowed the ",(0,a.kt)("a",{parentName:"em",href:"https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx.html"},"official instructions"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},'server {\n\n        server_name SERVER_ADDRESS;\n\n        root /var/www/html;\n        index index.html;\n\n        location / {\n          try_files $uri $uri/ =404;\n\n          proxy_pass http://localhost:9944;\n          proxy_set_header X-Real-IP $remote_addr;\n          proxy_set_header Host $host;\n          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\n          proxy_http_version 1.1;\n          proxy_set_header Upgrade $http_upgrade;\n          proxy_set_header Connection "upgrade";\n        }\n\n        listen [::]:443 ssl ipv6only=on;\n        listen 443 ssl;\n        ssl_certificate CERT_LOCATION;\n        ssl_certificate_key CERT_LOCATION_KEY;\n\n        ssl_session_cache shared:cache_nginx_SSL:1m;\n        ssl_session_timeout 1440m;\n\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n        ssl_prefer_server_ciphers on;\n\n        ssl_ciphers "ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:ECDHE-ECDSA-DES-CBC3-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:DES-CBC3-SHA:!DSS";\n\n        ssl_dhparam CERT_DHPARAM;\n\n}\n')),(0,a.kt)("p",null,"Restart nginx after setting this up: ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo service nginx restart"),"."),(0,a.kt)("h2",{id:"importing-the-certificate"},"Importing the Certificate"),(0,a.kt)("p",null,"If you used the self-signed certificate approach, modern browsers will not let you connect to this\nwebsocket endpoint without that certificate being imported - they will emit an\n",(0,a.kt)("inlineCode",{parentName:"p"},"NET:ERR_CERT_AUTHORITY_INVALID")," message."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ERR_CERT_AUTHORITY_INVALID",src:n(69330).Z})),(0,a.kt)("p",null,"Every websocket connection bootstraps itself with ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," first, so to allow the certificate, visit\nthe IP of your machine in the browser prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"https"),", like so: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://MY_IP"),'. This should\nproduce a "Not private" warning which you can skip by going to "Advanced" and the clicking on\n"Proceed to Site". You have now whitelisted this IP and its self-signed certificate for connecting.'),(0,a.kt)("h2",{id:"connecting-to-the-node"},"Connecting to the node"),(0,a.kt)("p",null,"Open ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS UI"),' and click the logo in the top left to switch the\nnode. Activate the "Development" toggle and input your node\'s address - either the domain or the IP\naddress. Remember to prefix with ',(0,a.kt)("inlineCode",{parentName:"p"},"wss://")," and if you're using the 443 port, append ",(0,a.kt)("inlineCode",{parentName:"p"},":443"),", like so:\n",(0,a.kt)("inlineCode",{parentName:"p"},"wss://example.com:443"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A sync-in-progress chain connected to Polkadot-JS UI",src:n(63505).Z})),(0,a.kt)("p",null,"Now you have a secure remote connect setup for your Substrate node."))}u.isMDXComponent=!0},63505:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/maintain-wss-image-0fe72147f38d8b6766328dd834a517a6.png"},69330:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o="data:image/png;base64,"}}]);