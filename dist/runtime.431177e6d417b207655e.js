(()=>{"use strict";var e,a,d,c,b,f,t,r={},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var d=n[e]={exports:{}};return r[e].call(d.exports,d,d.exports,o),d.exports}o.m=r,o.amdO={},e=[],o.O=(a,d,c,b)=>{if(!d){var f=1/0;for(i=0;i<e.length;i++){for(var[d,c,b]=e[i],t=!0,r=0;r<d.length;r++)(!1&b||f>=b)&&Object.keys(o.O).every((e=>o.O[e](d[r])))?d.splice(r--,1):(t=!1,b<f&&(f=b));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[d,c,b]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var b=Object.create(null);o.r(b);var f={};a=a||[null,d({}),d([]),d(d)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,o.d(b,f),b},o.d=(e,a)=>{for(var d in a)o.o(a,d)&&!o.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,d)=>(o.f[d](e,a),a)),[])),o.u=e=>e+".chunk."+{3:"6931366d5742754de6d2",4:"93480e82e53488524831",43:"2f119bef3da463b65f15",59:"7a08dfc3f0250b51cb58",73:"43b9c36d38ba6a0ec291",77:"8cdf030197544761ecf2",111:"cb370a18aec7fe5d7192",162:"b968c56766213428640c",330:"8ccc7323723de57d1db1",353:"050ad11a99699ade5445",463:"6c4f11b8706cef5447d5",568:"4f585b5a674a3d885a6e",574:"6eec1e5069348c6400e6",613:"75f5eae775d1b69d4c29",636:"232eb84f68902c77e51c",643:"995f9e8ed595d35b3089",671:"549ac01fe47e88945bbd",679:"c8206d4d081f911c408b",778:"538dd12bbdaf29782c55",831:"84f01f2c8e4359eb707f",846:"2854af09ffce7b71c32e",930:"34bf7d611f4fb3cdb822",953:"df4312fe4366d9c5f547",1001:"645b42d38536e3c06354",1077:"e3b7fbafd9c3a3da55f1",1092:"838dded78aa1ae773256",1125:"be86e4712a84c0ab7a0c",1240:"40fe5f19eb435d3a4715",1353:"c1890e52f45971e4e7f7",1370:"2b9140566ba61e2c4b8b",1439:"f30b9ad36235060d44e5",1446:"ceacfa12f70f5c52723e",1490:"9c342acd3f7f6e96590e",1564:"9525788f7ab22b5925fa",1676:"82c034fa582543eecee3",1752:"307b2f3883ae8c6a62d0",1854:"080f7d4f550a4061b9c7",1862:"3690a329dac08cec9292",1863:"2a545a9a77ff4660d2f6",1864:"e514412f16966a441258",1934:"d262e1c819e570eb44c8",1973:"250bbd46333da1c76334",1988:"223e21ed7604fe9d738b",1990:"3db54846f8990f60e4cc",2069:"e33bd5767a40ec3c9230",2194:"c49cf197326050828d4e",2195:"e81969cd10e8057ef91e",2200:"ab9bec863518f74609a0",2229:"d1745253e40648bad12f",2294:"39255b971a2695a8ddac",2346:"daa42f6c4a02846d5f7c",2402:"cbc1447a7dabcf584769",2444:"4ab019adacdb89b47ca0",2458:"70f6542b16a7fa786ef6",2471:"e0beadcb68df54ca2a6c",2495:"03cb2228bf4d8b0123d3",2536:"a5da3744257abf69c7f9",2640:"b631f23a88b619754783",2713:"594d6771a2e080c64e9d",2745:"25935260dcf18ed833da",2868:"378c3f18c3ec53bb468b",2937:"eec2f1759fea7fb8361b",2988:"beb0409cca546d1fe7cb",3029:"e618833d56e360a31441",3039:"23b60076a1d99eb00804",3049:"0899d536f46cb071f024",3116:"2b52c8cc1153653c228b",3138:"916860f8d475208b68bb",3140:"3fdd5c2d3419f4fc31a1",3234:"bc733ded323b72ccd5dc",3290:"cfd317f6b19f202ad079",3292:"5c007133b479a4ab05f4",3348:"899f0e16d2d01fbe1817",3369:"b2451e31c00460860ff8",3389:"e64ea36ab513cbb649c4",3409:"e412fdbe9cf19cfba42a",3467:"c14c8e2fae5489c3073e",3469:"caaf4d50b9c4c956f4ca",3489:"adbdc959c6e7229b8e43",3618:"15f1a70e463cc0d31d4d",3812:"a7c46dbccd71f7d725a0",3898:"6c1b6531670cc00a03f3",3912:"00f5b5fd666d83fce0c4",3954:"fc8dd5c2701a6936275c",3982:"95f9ebeefd9043459a97",4041:"e00256ee1862d27cc2bc",4042:"a11a7c10894865edd153",4150:"67ad4cab7ce4b005d982",4168:"c88013f14460b2c04dec",4204:"18deadc6fcc1e3952f15",4222:"5fb94488513052b81873",4229:"a3b7e64a9f76890b40da",4243:"6e30a4ea64b1af30aa34",4262:"f8eee382bf0f887deed5",4277:"8319fb2acd5772a3ee7c",4335:"a3c1d8cbec298a47b16e",4373:"fb03c30db71560dff181",4374:"9d596f27f3314e4b469d",4394:"eb92e2574fb9e483ad3f",4505:"4893f8050d50cbcca09a",4522:"c22145a084a57e95a73f",4623:"a5690ad723c568f2131c",4703:"4ee3d723f8d346dcfc35",4721:"1b7ce0126fa11508abca",4747:"8d0402392c462a42b13b",4771:"473ac38ce382debbe315",4792:"ede293cc60162d11632f",4855:"4d1fdea96c2103e744ee",4906:"700aa052aba90d35d0e3",4912:"83bc7a5d1a13f2ef9e84",4957:"3e5236f712d8d6f867c7",4978:"40831c74c2a756c8f520",4999:"a71198952c8d659d8710",5060:"373d6558cf021ed49c1b",5175:"9a03a9c990df073a2ca3",5182:"e76b0fb336ab9248406b",5184:"048d6a656357a21b11c7",5234:"e41dfcd3fc31ec90ed07",5342:"54b0b50ebe0e44118e61",5416:"ba4671c818c9b73b3a64",5762:"36ac51325c6963c218e2",5842:"6d83ce32e7abdfdec8e4",5887:"e0396f87485d58003b45",5930:"425c09a4414007f1be54",5933:"289bf20d008ec1eef3b0",5979:"61a4086fdb310dd4f53b",5987:"20d3881e00ad8c196e23",6023:"d792139870ddb3cd1424",6038:"7fbc05e4dd8e75230bee",6152:"44747d80682cc3ed4573",6311:"b082a58809786ac1ee23",6320:"3580a82baa331d7dc779",6407:"5a66869002faa3f9de3e",6434:"356160a6e0d5bcb4804b",6530:"afda7b1a17b9f4d4679b",6583:"5b0ca61d00992b61a6b7",6594:"2f650a5f2f531f9e2478",6647:"25e41ec2d33ce7319cfb",6653:"1a649af05a2e095c8b7b",6705:"ca18e1ac512341e9f439",6753:"02d61de6ee014d8d36c0",6777:"adedb7d010c183aa4b89",6817:"9da1bad8db99e25a628c",6819:"5fc33176ba21e49a7b86",6861:"b1da60d999508cafe30a",6936:"9bf1574ba59a6b926949",7063:"e6c4bda966960493b356",7093:"8d43cbe709bebb90e526",7195:"b128cc3068c232702b04",7302:"82f8e334e189c2a78e8c",7309:"93fd28086e874fb08229",7321:"d8ff4a7f69eccb2e0203",7329:"66d5bd27e95eed5492ee",7393:"3f0682d9efd055af9cf3",7404:"ba980597ea4adeca443b",7406:"c354e58cc11902c1b2a9",7412:"228d2b69fb97a4791570",7433:"0e856e3340274390abcb",7496:"2090a3291601577840eb",7533:"0e5ae2843837ebc5422e",7541:"1bd55e73806d7ad31b6d",7654:"9ddf217640d2a055b029",7701:"6c221ec36d6b78a20471",7708:"40ba93a31a3356e96ecf",7727:"91550fb1e44c8c9b85de",7757:"1fc4e4a0468499ad935f",7800:"5ed7724406871a241a80",7863:"25f82a577d3815582a44",7878:"d77ee98a36163e711085",7951:"ca3e3997b5a93cb1d3e2",7964:"7b759f5309528be0d5e4",7990:"281fa423423970416455",8021:"80fa0c45689e7bd72561",8033:"ff7ba7fad5d89e34067f",8050:"f8dcc455e220476aab45",8127:"43b2cdc838da65086589",8174:"2488cde73a48ff62fd23",8183:"a8093ffbb9ebfa407d89",8226:"ce622acba370103313a0",8229:"5a41185475722f38d02a",8235:"bd9c452b03e0d61e4273",8244:"90b8dde607816ded5755",8265:"4bebc35d0441006199bc",8330:"41c492bfd776bbff0833",8393:"6a424381e8c1a672364d",8400:"0d61fed69d94f1e3a9af",8530:"d766e0e32f1fd1d6e397",8566:"075511a609403f82fa95",8602:"7087732b7ab49dbfdac8",8614:"1b5edcd0e642e9ef33c6",8639:"04d052653925321702c5",8654:"64386439e3ad75d7b169",8745:"78c0dd1a778df039b1b9",8758:"c1ea3f4cb111281f7a8d",8794:"6f866194d6480e7ae9a3",8831:"299b5881eaec0f95d680",8865:"57d9c9b0edd7898b8f7c",8880:"64eade702db17ac3ed40",8922:"0ce4c891ac1b02476ebe",8925:"a7439498596e1c4a145a",8945:"84dd0580c42d479b25f2",8946:"7feabc8096f867f5a800",8988:"75d7ca9e22bb9611c630",9023:"fd9102bb9f2b7277b6f6",9101:"aaa7ec6a33df374db249",9121:"226a2ff4b540ccc23b91",9193:"a1ceeebfaeaf2012bd06",9209:"36301f0e2518bd92fd60",9210:"5b2ae12dd115c98be516",9247:"bb5d9dd8cf0aa59459c9",9264:"61b612569752f42a1a1a",9270:"4cfc38a6ad14945a79b9",9310:"1c50c837619807d013e6",9353:"6be7846ebf0e8fc2804b",9359:"89cbeb594444b8931aa2",9360:"eabdf2d9d16d625a18f2",9421:"c8d2a068999e1d9cf5a6",9478:"8907976f009b2b3b8975",9531:"9d7edd2bb39fdd10be62",9587:"ce608a006ad2458e2e62",9739:"2bddc48366a052bbf260",9775:"451ddc7fee78a9b3afb5",9776:"acc51384c61bb704f743",9901:"96a9c6174ad1c59a3bd9",9913:"c57c0d5547b723cd7186",9917:"083583db6a21ce42e7e5",9926:"388038d1cadb4fd2bfc6",9935:"28145b03400a8519f433"}[e]+".js",o.miniCssF=e=>e+"."+o.h()+".css",o.h=()=>"431177e6d417b207655e",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},b="ng-universal-demo:",o.l=(e,a,d,f)=>{if(c[e])c[e].push(a);else{var t,r;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==b+d){t=l;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,o.nc&&t.setAttribute("nonce",o.nc),t.setAttribute("data-webpack",b+d),t.src=e),c[e]=[a];var u=(a,d)=>{t.onerror=t.onload=null,clearTimeout(s);var b=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(d))),a)return a(d)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),r&&document.head.appendChild(t)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="dist/",f=e=>new Promise(((a,d)=>{var c=o.miniCssF(e),b=o.p+c;if(((e,a)=>{for(var d=document.getElementsByTagName("link"),c=0;c<d.length;c++){var b=(t=d[c]).getAttribute("data-href")||t.getAttribute("href");if("stylesheet"===t.rel&&(b===e||b===a))return t}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){var t;if((b=(t=f[c]).getAttribute("data-href"))===e||b===a)return t}})(c,b))return a();((e,a,d,c)=>{var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onerror=b.onload=f=>{if(b.onerror=b.onload=null,"load"===f.type)d();else{var t=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.href||a,n=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");n.code="CSS_CHUNK_LOAD_FAILED",n.type=t,n.request=r,b.parentNode.removeChild(b),c(n)}},b.href=a,document.head.appendChild(b)})(e,b,a,d)})),t={3666:0},o.f.miniCss=(e,a)=>{t[e]?a.push(t[e]):0!==t[e]&&{8654:1}[e]&&a.push(t[e]=f(e).then((()=>{t[e]=0}),(a=>{throw delete t[e],a})))},(()=>{var e={3666:0,8075:0};o.f.j=(a,d)=>{var c=o.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(3666|8075)$/.test(a))e[a]=0;else{var b=new Promise(((d,b)=>c=e[a]=[d,b]));d.push(c[2]=b);var f=o.p+o.u(a),t=new Error;o.l(f,(d=>{if(o.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var b=d&&("load"===d.type?"missing":d.type),f=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+f+")",t.name="ChunkLoadError",t.type=b,t.request=f,c[1](t)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,d)=>{var c,b,[f,t,r]=d,n=0;if(f.some((a=>0!==e[a]))){for(c in t)o.o(t,c)&&(o.m[c]=t[c]);if(r)var i=r(o)}for(a&&a(d);n<f.length;n++)b=f[n],o.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return o.O(i)},d=self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();
//# sourceMappingURL=runtime.431177e6d417b207655e.js.map