"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[7569],{59065:(e,t,n)=>{n.r(t),n.d(t,{CheckboxRelationsEditorMetadata:()=>_});var o=n(93551),a=n(52580),r=n(60901),s=n(85478),i=n(43801),c=n(77842),d=n(47098),l=n(82568),u=n(80827),p=n(41853),f=n(73301),v=n(66794);class h extends o.M{}h.ɵfac=function(){let e;return function(t){return(e||(e=i.n5(h)))(t||h)}}(),h.ɵcmp=c.Xp({type:h,selectors:[["form-checkbox-node"]],standalone:!0,features:[d.q,l.j],decls:21,vars:14,consts:[[3,"parent","destroySubject"],[1,"node-content"],[1,"inputs-outputs"],[1,"inputs"],[1,"input"],["name","value",3,"parentCoordiantes","zoomLevel","parent"],["name","required",3,"parentCoordiantes","zoomLevel","parent"],["name","disabled",3,"parentCoordiantes","zoomLevel","parent"],[1,"outputs"],[1,"output"],["name","valueOutput",3,"parentCoordiantes","zoomLevel","parent"]],template:function(e,t){1&e&&(u._U(0,"relations-node-header",0),u.Tg(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),u._U(5,"relation-node-input",5),u.Tg(6,"div"),p._(7,"value"),u.qZ()(),u.Tg(8,"div",4),u._U(9,"relation-node-input",6),u.Tg(10,"div"),p._(11,"required"),u.qZ()(),u.Tg(12,"div",4),u._U(13,"relation-node-input",7),u.Tg(14,"div"),p._(15,"disabled"),u.qZ()()(),u.Tg(16,"div",8)(17,"div",9)(18,"div"),p._(19,"value"),u.qZ(),u._U(20,"relation-node-output",10),u.qZ()()()()),2&e&&(f.Q("parent",t)("destroySubject",t.destroySubject),v.x(5),f.Q("parentCoordiantes",t.nodePosition)("zoomLevel",t.zoomLevel)("parent",t),v.x(4),f.Q("parentCoordiantes",t.nodePosition)("zoomLevel",t.zoomLevel)("parent",t),v.x(4),f.Q("parentCoordiantes",t.nodePosition)("zoomLevel",t.zoomLevel)("parent",t),v.x(7),f.Q("parentCoordiantes",t.nodePosition)("zoomLevel",t.zoomLevel)("parent",t))},dependencies:[a.e,r.P,s.n],encapsulation:2,changeDetection:0});class _{constructor(){this.metaInfo={name:"Checkbox",description:"Checkbox",group:"Form fields"},this.nodeDefinition=h,Object.freeze(this)}}},89402:(e,t,n)=>{function o(e){return!!e.__ɵɵRelationsComponent}function a(){return function(e){return e.__ɵɵRelationsComponent=!0,e}}n.d(t,{H:()=>a,O:()=>o})},92640:(e,t,n)=>{n.d(t,{x:()=>a});var o=n(70625);const a={asyncValidators:[],validators:[],disabled:!1,type:o.NI,childType:o.NI,args:{}}},71791:(e,t,n)=>{n.d(t,{p:()=>v});var o=n(17777),a=n(66398),r=n(70625),s=n(92640);class i{constructor(e,t){this._factoryFn=e,this._args=t}valueOf(){return this._args?e=>(e={...this._args,args:e},this._factoryFn(e)):this._factoryFn}}class c{constructor(e,t){this._factoryFn=e,this._args=t}valueOf(){return this._args?e=>(e={...this._args,args:e},this._factoryFn(e)):this._factoryFn}}function d(e,t){if(!e)return new o.cw({});const n=e.ɵControlsMetadata??{},l=e.ɵValidators??[],u=e.ɵAsyncValidators??[],p=e.ɵArgs??{},f=Object.keys(e),v=new o.cw({},{validators:l?.map((e=>e instanceof i?e.valueOf()({...p,...t}):e)).filter((e=>!!e)),asyncValidators:u?.map((e=>e instanceof c?e.valueOf()({...p,...t}):e)).filter((e=>!!e))});for(const l of f){const u=n[l]??s.x,p=e[l];if(void 0===p)continue;const f=u.validators.map((e=>e instanceof i?e.valueOf()({...u.args,...t}):e)).filter((e=>!!e)),h=u.asyncValidators.map((e=>e instanceof c?e.valueOf()({...u.args,...t}):e)).filter((e=>!!e));let _;switch(u.type){case o.cw:_=d(p,t);break;case a.Oe:if(_=new a.Oe([],{validators:f,asyncValidators:h,...u.controlOptions}),p&&Array.isArray(p)){const e=_;for(const n of p)switch(u.childType){case o.cw:e.push(d(n,t));break;case a.Oe:break;default:e.push(new r.NI(n,{validators:f,asyncValidators:h,...u.controlOptions}))}}break;default:_=new r.NI(p,{validators:f,asyncValidators:h,...u.controlOptions})}u.disabled&&_.disable(),v.addControl(l,_)}return v}function l(e,t){return d(e,t)}var u=n(11776),p=n(95176),f=n(38327);class v{constructor(e){this._injector=e}build(e,t){return l(e,{...t,injector:this._injector})}}v.ɵfac=function(e){return new(e||v)(u.LF(p.z))},v.ɵprov=f.Yz({token:v,factory:v.ɵfac})}}]);
//# sourceMappingURL=7569.chunk.d16e183b06c8298132a2.js.map