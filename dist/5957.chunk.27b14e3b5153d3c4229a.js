"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[5957],{72611:(e,t,n)=>{n.r(t),n.d(t,{RelationsWithEditorModule:()=>O});var r=n(14392),o=n(76668),i=n(97212),a=n(89001),s=n(68027),u=n(22654),c=n(94761),l=n(47432),f=n(48397),d=n(99043),p=n(57489),v=n(20809),h=n(40921),m=n(56454),y=n(22804),w=n(17505),g=n(85638),b=n(54870),k=n(18567),_=n(43801),P=n(38327);class T extends b.w{getDefinedTypes(){const e={};return e[k.mx.relationsId]=k.mx,e[k.oK.relationsId]=k.oK,e}}T.ɵfac=function(){let e;return function(t){return(e||(e=_.n5(T)))(t||T)}}(),T.ɵprov=P.Yz({token:T,factory:T.ɵfac});var S=n(31166),x=n(79440),D=n(77842),E=n(73379),N=n(80827),Y=n(41853),q=n(72891),C=n(66794),F=n(73301),R=n(84967),Z=n(71674);let V=class{constructor(e){this._manager=e,this.metadata=g.F.relationsStaticWithEditorDemo}save(){g.F.relationsStaticWithEditorDemo=this._manager.getMetadata()}};V.ɵfac=function(e){return new(e||V)(x.Y(f.J))},V.ɵcmp=D.Xp({type:V,selectors:[["editor-view"]],features:[E._([m.z,{provide:v.te,useFactory:()=>new y.I((()=>[]))},(0,l.hE)(T),(0,d.eh)(),(0,h.RO)(),(0,p.wr)(),{provide:w.L,useClass:S.d}])],decls:8,vars:1,consts:[[1,"flex-row"],["type","button","goBack","",1,"btn","btn-primary","margin-left-extra-small"],["type","button",1,"btn","btn-primary",3,"click"],[1,"flex-1",3,"metadata"]],template:function(e,t){1&e&&(N.Tg(0,"div",0)(1,"button",1)(2,"span"),Y._(3,"go back"),N.qZ()(),N.Tg(4,"button",2),q.N("click",(function(){return t.save()})),N.Tg(5,"span"),Y._(6,"save"),N.qZ()()(),N._U(7,"relations-editor",3)),2&e&&(C.x(7),F.Q("metadata",t.metadata))},dependencies:[R.v,Z.Y],encapsulation:2,changeDetection:0}),V=(0,r.gn)([(0,c.N)({path:"editor"}),(0,r.w6)("design:paramtypes",[f.J])],V);var j=n(56224),B=n(75990),A=n(32361),J=n(31619),M=n(43747);let $=class{constructor(e){this._relationsManager=e}ngOnInit(){this._relationsManager.setRelations(g.F.relationsStaticWithEditorDemo)}};$.ɵfac=function(e){return new(e||$)(x.Y(B.N))},$.ɵcmp=D.Xp({type:$,selectors:[["relations-view"]],features:[E._([(0,j.A)(),(0,h.tw)(),(0,d.fm)(),(0,p.y)()])],decls:11,vars:0,consts:[[1,"margin-bottom-big"],["routerLink","/relationsWithEditor/editor"],[1,"bold"]],template:function(e,t){1&e&&(N.Tg(0,"div",0)(1,"a",1),Y._(2,"editor"),N.qZ()(),N.Tg(3,"div")(4,"div",2),Y._(5,"relations sample click"),N.qZ(),N._U(6,"relations-sample-click"),N.qZ(),N.Tg(7,"div")(8,"div",2),Y._(9,"relations result"),N.qZ(),N._U(10,"relations-result"),N.qZ())},dependencies:[A.y,J.o,M.m],encapsulation:2,changeDetection:0}),$=(0,r.gn)([(0,c.N)({path:""}),(0,r.w6)("design:paramtypes",[B.N])],$);const I=[$,V];var W=n(53245);let O=class{};O.ɵfac=function(e){return new(e||O)},O.ɵmod=D.oA({type:O}),O.ɵinj=P.cJ({providers:[(0,W.Y)("RELATIONS_TMP")],imports:[o.Bz,i.p,s.Q,u.Y,k.oK,k.mx]}),O=(0,r.gn)([(0,a.P)(I)],O)},56224:(e,t,n)=>{n.d(t,{X:()=>y,A:()=>w});var r=n(43939),o=n(60640),i=n(11776),a=n(65569),s=n(12193),u=n(46480),c=n(20809),l=n(10439);const f={provide:c.u7,useFactory:e=>new a.$([l.j],e),deps:[[new o.Fi,u.bZ]],multi:!0},d={provide:c.TZ,useFactory:()=>new s.S((0,i.f3)(c.B6),(0,i.f3)(c.u7),y,(0,i.f3)(u.bZ,{optional:!0})??void 0)};var p=n(86485),v=n(75990),h=n(67626),m=n(46855);const y=function(e){return!((0,r.fp)(e?.data)||!(0,r.P9)(e.data))};function w(){return[f,d,p.s,v.N,h.v,m.J]}},68027:(e,t,n)=>{n.d(t,{Q:()=>a});var r=n(56224),o=n(77842),i=n(38327);class a{static withProviders(){return{ngModule:a,providers:[(0,r.A)()]}}}a.ɵfac=function(e){return new(e||a)},a.ɵmod=o.oA({type:a}),a.ɵinj=i.cJ({})},46855:(e,t,n)=>{n.d(t,{J:()=>u});var r=n(48936),o=n(57466),i=n(11776),a=n(38327);function s(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}class u{constructor(e){this.document=e,this.loadedDataCache={}}loadData(e,t){var n,r=this;return(n=function*(){if(r.loadedDataCache[e])return r.loadedDataCache[e];const n=r.document.createElement("script"),i=`loadType${(0,o.Ox)(12)}`;let a=null;return n.innerText=`\n        (function(exports, loadType, require)\n        {\n            ${t}\n\n            loadType(exports);\n        })({}, ${i}.loadType, ${i}.require);`,window[i]={loadType:e=>a=e.default??null,require:e=>(console.log(e),null)},r.document.getElementsByTagName("head")[0].appendChild(n),delete window[i],n.remove(),r.loadedDataCache[e]=a,a},function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function a(e){s(i,r,o,a,u,"next",e)}function u(e){s(i,r,o,a,u,"throw",e)}a(void 0)}))})()}}u.ɵfac=function(e){return new(e||u)(i.LF(r.K))},u.ɵprov=a.Yz({token:u,factory:u.ɵfac})},97825:(e,t,n)=>{n.d(t,{C:()=>i});var r=n(28653),o=n(58656);const i=new r.y(o.Z)},94761:(e,t,n)=>{n.d(t,{N:()=>o});var r=n(43939);function o(e){return function(t){const n=e;n.component=t;const o=t;return(0,r.fp)(o.routeValues)&&Object.defineProperty(t,"routeValues",{enumerable:!0,configurable:!1,writable:!1,value:[]}),o.routeValues.push(n),t}}},61939:(e,t,n)=>{n.d(t,{i:()=>o});var r=n(77842);class o{transform(e,t,n){return e??t}}o.ɵfac=function(e){return new(e||o)},o.ɵpipe=r.Yj({name:"asRequired",type:o,pure:!0})},84967:(e,t,n)=>{n.d(t,{v:()=>s});var r=n(79440),o=n(77842),i=n(72891),a=n(55129);class s{constructor(e){this._location=e}goBack(e){e.preventDefault(),e.stopPropagation(),this._location.back()}}s.ɵfac=function(e){return new(e||s)(r.Y(a.Y))},s.ɵdir=o.lG({type:s,selectors:[["","goBack",""]],hostBindings:function(e,t){1&e&&i.N("click",(function(e){return t.goBack(e)}))}})},97212:(e,t,n)=>{n.d(t,{p:()=>i});var r=n(77842),o=n(38327);class i{}i.ɵfac=function(e){return new(e||i)},i.ɵmod=r.oA({type:i}),i.ɵinj=o.cJ({})},32434:(e,t,n)=>{n.d(t,{N:()=>a});var r=n(79440),o=n(55845),i=n(77842);class a{constructor(e){this.differs=e,this.keyValues=[],this.compareFn=s}transform(e,t=s){if(!e||!(e instanceof Map)&&"object"!=typeof e)return null;this.differ||(this.differ=this.differs.find(e).create());const n=this.differ.diff(e),r=t!==this.compareFn;return n&&(this.keyValues=[],n.forEachItem((e=>{this.keyValues.push({key:e.key,value:e.currentValue})}))),(n||r)&&(this.keyValues.sort(t),this.compareFn=t),this.keyValues}}function s(e,t){const n=e.key,r=t.key;if(n===r)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(null===n)return 1;if(null===r)return-1;if("string"==typeof n&&"string"==typeof r)return n<r?-1:1;if("number"==typeof n&&"number"==typeof r)return n-r;if("boolean"==typeof n&&"boolean"==typeof r)return n<r?-1:1;const o=String(n),i=String(r);return o==i?0:o<i?-1:1}a.ɵfac=function(e){return new(e||a)(r.Y(o.a,16))},a.ɵpipe=i.Yj({name:"keyvalue",type:a,pure:!1,standalone:!0})},45069:(e,t,n)=>{n.d(t,{C:()=>a});var r=n(43939);function o(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function s(e){o(a,r,i,s,u,"next",e)}function u(e){o(a,r,i,s,u,"throw",e)}s(void 0)}))}}function a(e){return function(t,n,o){const a=Symbol("ɵTimeout"),s=Symbol("ɵResolve"),u=Symbol("ɵResult"),c=o.value??o.get?.();if(!(0,r.mf)(c))throw new Error(`Unable to apply @DebounceCall() decorator to '${n.toString()}', it is not a method.`);return o.value=function(...t){var n=this;if(!(s in this)&&!(u in this)){let e;const t=new Promise((t=>e=t));Reflect.defineProperty(this,s,{writable:!0,value:e}),Reflect.defineProperty(this,u,{writable:!0,value:t})}return(0,r.EN)(this[a])&&clearTimeout(this[a]),a in this||Reflect.defineProperty(this,a,{writable:!0,value:null}),this[a]=setTimeout(i((function*(){n[s](yield c.apply(n,t)),n[u]=new Promise((e=>n[s]=e)),n[a]=null})),e),this[u]},o}}},49414:(e,t,n)=>{n.d(t,{S:()=>a});var r=n(43939);function o(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function s(e){o(a,r,i,s,u,"next",e)}function u(e){o(a,r,i,s,u,"throw",e)}s(void 0)}))}}function a(){return function(e,t,n){const o=Symbol("ɵSync"),a=n.value??n.get?.();if(!(0,r.mf)(a))throw new Error(`Unable to apply @WithSync() decorator to '${t.toString()}', it is not a method.`);return n.value=i((function*(...e){o in this||Reflect.defineProperty(this,o,{writable:!0,value:Promise.resolve()});const t=this[o];let n;this[o]=new Promise((e=>n=e)),yield t;const r=yield a.apply(this,e);return n?.(),r})),n}}}}]);
//# sourceMappingURL=5957.chunk.27b14e3b5153d3c4229a.js.map