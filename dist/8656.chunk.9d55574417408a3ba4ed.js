"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[8656],{3326:(t,e,n)=>{n.r(e),n.d(e,{ToggleButtonRelationsEditorMetadata:()=>h});var o=n(93551),a=n(52580),s=n(60901),r=n(85478),i=n(43801),c=n(77842),l=n(47098),d=n(82568),u=n(80827),f=n(41853),p=n(73301),v=n(66794);class g extends o.M{}g.ɵfac=function(){let t;return function(e){return(t||(t=i.n5(g)))(e||g)}}(),g.ɵcmp=c.Xp({type:g,selectors:[["toggle-button-node"]],standalone:!0,features:[l.q,d.j],decls:13,vars:8,consts:[[3,"parent","destroySubject"],[1,"node-content"],[1,"inputs-outputs"],[1,"inputs"],[1,"input"],["name","disabled",3,"parentCoordiantes","zoomLevel","parent"],[1,"outputs"],[1,"output"],["name","toggle",3,"parentCoordiantes","zoomLevel","parent"]],template:function(t,e){1&t&&(u._U(0,"relations-node-header",0),u.Tg(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),u._U(5,"relation-node-input",5),u.Tg(6,"div"),f._(7,"disabled"),u.qZ()()(),u.Tg(8,"div",6)(9,"div",7)(10,"div"),f._(11,"toggle"),u.qZ(),u._U(12,"relation-node-output",8),u.qZ()()()()),2&t&&(p.Q("parent",e)("destroySubject",e.destroySubject),v.x(5),p.Q("parentCoordiantes",e.nodePosition)("zoomLevel",e.zoomLevel)("parent",e),v.x(7),p.Q("parentCoordiantes",e.nodePosition)("zoomLevel",e.zoomLevel)("parent",e))},dependencies:[a.e,s.P,r.n],encapsulation:2,changeDetection:0});class h{constructor(){this.metaInfo={name:"Toggle button",description:"Toggle button",group:"Buttons"},this.nodeDefinition=g,Object.freeze(this)}}},89402:(t,e,n)=>{function o(t){return!!t.__ɵɵRelationsComponent}function a(){return function(t){return t.__ɵɵRelationsComponent=!0,t}}n.d(e,{H:()=>a,O:()=>o})},92640:(t,e,n)=>{n.d(e,{x:()=>a});var o=n(70625);const a={asyncValidators:[],validators:[],disabled:!1,type:o.NI,childType:o.NI,args:{}}},71791:(t,e,n)=>{n.d(e,{p:()=>v});var o=n(17777),a=n(66398),s=n(70625),r=n(92640);class i{constructor(t,e){this._factoryFn=t,this._args=e}valueOf(){return this._args?t=>(t={...this._args,args:t},this._factoryFn(t)):this._factoryFn}}class c{constructor(t,e){this._factoryFn=t,this._args=e}valueOf(){return this._args?t=>(t={...this._args,args:t},this._factoryFn(t)):this._factoryFn}}function l(t,e){if(!t)return new o.cw({});const n=t.ɵControlsMetadata??{},d=t.ɵValidators??[],u=t.ɵAsyncValidators??[],f=t.ɵArgs??{},p=Object.keys(t),v=new o.cw({},{validators:d?.map((t=>t instanceof i?t.valueOf()({...f,...e}):t)).filter((t=>!!t)),asyncValidators:u?.map((t=>t instanceof c?t.valueOf()({...f,...e}):t)).filter((t=>!!t))});for(const d of p){const u=n[d]??r.x,f=t[d];if(void 0===f)continue;const p=u.validators.map((t=>t instanceof i?t.valueOf()({...u.args,...e}):t)).filter((t=>!!t)),g=u.asyncValidators.map((t=>t instanceof c?t.valueOf()({...u.args,...e}):t)).filter((t=>!!t));let h;switch(u.type){case o.cw:h=l(f,e);break;case a.Oe:if(h=new a.Oe([],{validators:p,asyncValidators:g,...u.controlOptions}),f&&Array.isArray(f)){const t=h;for(const n of f)switch(u.childType){case o.cw:t.push(l(n,e));break;case a.Oe:break;default:t.push(new s.NI(n,{validators:p,asyncValidators:g,...u.controlOptions}))}}break;default:h=new s.NI(f,{validators:p,asyncValidators:g,...u.controlOptions})}u.disabled&&h.disable(),v.addControl(d,h)}return v}function d(t,e){return l(t,e)}var u=n(11776),f=n(95176),p=n(38327);class v{constructor(t){this._injector=t}build(t,e){return d(t,{...e,injector:this._injector})}}v.ɵfac=function(t){return new(t||v)(u.LF(f.z))},v.ɵprov=p.Yz({token:v,factory:v.ɵfac})}}]);
//# sourceMappingURL=8656.chunk.9d55574417408a3ba4ed.js.map