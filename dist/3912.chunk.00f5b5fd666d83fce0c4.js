"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[3912],{16323:(t,n,e)=>{e.r(n),e.d(n,{NotFoundRelationsEditorMetadata:()=>O});var a=e(93551),r=e(40876),s=e(43801),o=e(13691),c=e(47098),i=e(82568),u=e(80827),l=e(41853),d=e(73301);class f extends a.M{}f.ɵfac=function(){let t;return function(n){return(t||(t=s.n5(f)))(n||f)}}(),f.ɵcmp=o.Xp({type:f,selectors:[["not-found-node"]],standalone:!0,features:[c.q,i.j],decls:4,vars:2,consts:[["name","not found",3,"parent","destroySubject"],[1,"node-content"],[1,"not-found"]],template:function(t,n){1&t&&(u._U(0,"relations-node-header",0),u.Tg(1,"div",1)(2,"div",2),l._(3,"Not found!"),u.qZ()()),2&t&&d.Q("parent",n)("destroySubject",n.destroySubject)},dependencies:[r.e],styles:[".not-found[_ngcontent-%COMP%]\n{\n    align-self: center;\n    font-size: 1.6em;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    color: #e10000;\n    font-weight: bold;\n}"],changeDetection:0});class O{constructor(){this.nodeDefinition=f,Object.freeze(this)}}},91861:(t,n,e)=>{e.d(n,{Bj:()=>o,DZ:()=>r,GP:()=>s,dK:()=>l,fI:()=>u,n7:()=>i,nR:()=>d,yh:()=>c});var a=e(40296);const r=new a.O("RELATIONS_MODULE_TYPES_DATA_EXTRACTORS"),s=new a.O("RELATIONS_MODULE_TYPES_PROVIDERS"),o=new a.O("RELATIONS_MODULE_TYPES_LOADER"),c=new a.O("RELATIONS_NODES_DATA_EXTRACTORS"),i=new a.O("RELATIONS_NODES_PROVIDERS"),u=new a.O("RELATIONS_NODES_LOADER"),l=new a.O("REFRESH_PALETTE_OBSERVABLES"),d=new a.O("RELATIONS_HISTORY_MANAGER")},89402:(t,n,e)=>{function a(t){return!!t.__ɵɵRelationsComponent}function r(){return function(t){return t.__ɵɵRelationsComponent=!0,t}}e.d(n,{H:()=>r,O:()=>a})},44677:(t,n,e)=>{e.d(n,{L:()=>r});var a=e(43939);const r=(t,n)=>{const e=t;return n?.debug("defaultExportExtractor: trying to extract default dynamic data"),(0,a.EN)(e.default)?{data:e.default}:null}},14389:(t,n,e)=>{e.d(n,{LK:()=>c,XW:()=>o,mv:()=>s});var a=e(97825),r=e(13457);function s(t,n,e,a,r=!1){t[n]={currentValue:e,previousValue:a,firstChange:r,isFirstChange:()=>r}}function o(t){return{provide:r.BG,useValue:{packages:[t],packagesChange:a.C,refresh(){}},multi:!0}}function c(t){try{return JSON.parse(t)}catch{return null}}},97825:(t,n,e)=>{e.d(n,{C:()=>s});var a=e(28653),r=e(58656);const s=new a.y(r.Z)},92640:(t,n,e)=>{e.d(n,{x:()=>r});var a=e(70625);const r={asyncValidators:[],validators:[],disabled:!1,type:a.NI,childType:a.NI,args:{}}},71791:(t,n,e)=>{e.d(n,{p:()=>_});var a=e(17777),r=e(66398),s=e(70625),o=e(92640);class c{constructor(t,n){this._factoryFn=t,this._args=n}valueOf(){return this._args?t=>(t={...this._args,args:t},this._factoryFn(t)):this._factoryFn}}class i{constructor(t,n){this._factoryFn=t,this._args=n}valueOf(){return this._args?t=>(t={...this._args,args:t},this._factoryFn(t)):this._factoryFn}}function u(t,n){if(!t)return new a.cw({});const e=t.ɵControlsMetadata??{},l=t.ɵValidators??[],d=t.ɵAsyncValidators??[],f=t.ɵArgs??{},O=Object.keys(t),_=new a.cw({},{validators:l?.map((t=>t instanceof c?t.valueOf()({...f,...n}):t)).filter((t=>!!t)),asyncValidators:d?.map((t=>t instanceof i?t.valueOf()({...f,...n}):t)).filter((t=>!!t))});for(const l of O){const d=e[l]??o.x,f=t[l];if(void 0===f)continue;const O=d.validators.map((t=>t instanceof c?t.valueOf()({...d.args,...n}):t)).filter((t=>!!t)),p=d.asyncValidators.map((t=>t instanceof i?t.valueOf()({...d.args,...n}):t)).filter((t=>!!t));let h;switch(d.type){case a.cw:h=u(f,n);break;case r.Oe:if(h=new r.Oe([],{validators:O,asyncValidators:p,...d.controlOptions}),f&&Array.isArray(f)){const t=h;for(const e of f)switch(d.childType){case a.cw:t.push(u(e,n));break;case r.Oe:break;default:t.push(new s.NI(e,{validators:O,asyncValidators:p,...d.controlOptions}))}}break;default:h=new s.NI(f,{validators:O,asyncValidators:p,...d.controlOptions})}d.disabled&&h.disable(),_.addControl(l,h)}return _}function l(t,n){return u(t,n)}var d=e(11776),f=e(95176),O=e(38327);class _{constructor(t){this._injector=t}build(t,n){return l(t,{...n,injector:this._injector})}}_.ɵfac=function(t){return new(t||_)(d.LF(f.z))},_.ɵprov=O.Yz({token:_,factory:_.ɵfac})}}]);
//# sourceMappingURL=3912.chunk.00f5b5fd666d83fce0c4.js.map