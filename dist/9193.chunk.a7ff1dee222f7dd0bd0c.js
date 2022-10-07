"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[9193],{51073:(t,e,o)=>{o.r(e),o.d(e,{ToggleButtonLayoutEditorMetadata:()=>d});var n=o(32441),r=o(76001),a=o(99711),i=o(2032),l=o(1501),s=o(58449),p=o(59982),c=o(57466);class u{constructor(t){this.onText=null,this.offText=null,this.state=null,this.disabled=!1,this.buttonCssClass=null,c.Rl.bind(this)(t)}}(0,i.gn)([(0,l._)("ON text"),(0,s.f)("Text to be displayed in toggle button when button is on"),(0,p.T)("inputString"),(0,i.w6)("design:type",String)],u.prototype,"onText",void 0),(0,i.gn)([(0,l._)("OFF text"),(0,s.f)("Text to be displayed in toggle button when button is off"),(0,p.T)("inputString"),(0,i.w6)("design:type",String)],u.prototype,"offText",void 0),(0,i.gn)([(0,l._)("State"),(0,s.f)("State of button on or off"),(0,p.T)("inputBoolean"),(0,i.w6)("design:type",Boolean)],u.prototype,"state",void 0),(0,i.gn)([(0,l._)("Disabled"),(0,s.f)("Indication whether is toggle button disabled"),(0,p.T)("inputBoolean"),(0,i.w6)("design:type",Boolean)],u.prototype,"disabled",void 0),(0,i.gn)([(0,l._)("Button css class"),(0,s.f)("Css class applied to button element itself"),(0,p.T)("inputString"),(0,i.w6)("design:type",String)],u.prototype,"buttonCssClass",void 0);class d{constructor(){this.metaInfo={name:"Toggle button",description:"Toggle button",group:"Buttons",optionsMetadata:{propertiesMetadata:[{modelType:n.k,propertiesControls:[r.e]},{modelType:u,propertiesControls:[(0,a.q)(["buttonCssClass","onText","offText","state","disabled"])]}]},defaultOptions:{onText:"On",offText:"Off",state:!0,disabled:!1,buttonCssClass:"btn btn-primary"}},Object.freeze(this)}}},94596:(t,e,o)=>{o.d(e,{$:()=>n});const n=Symbol("LayoutPropertyMetadata")},99711:(t,e,o)=>{o.d(e,{q:()=>E});var n=o(27052),r=o(39163),a=o(77880),i=o(87316),l=o(59951),s=o(80827),p=o(6845),c=o(73301),u=o(4477),d=o(41853),f=o(15686),g=o(65589),y=o(66794),v=o(6427),m=o(94727),h=o(43801),b=o(77842),_=o(47098),M=o(82568),C=o(12311),T=o(21651),w=o(19989),x=o(46480),F=o(71785),O=o(79440),R=o(8215),k=o(36973);function j(t,e,o,n,r,a,i){try{var l=t[a](i),s=l.value}catch(t){return void o(t)}l.done?e(s):Promise.resolve(s).then(n,r)}class S{constructor(t,e,o){this._viewContainerRef=t,this._typeControls=e,this._logger=o,this._componentRef=null,this.values=[]}ngOnChanges(){var t,e=this;return(t=function*(){const t=e.typeName??"inputString";if(e._logger?.debug("PropertyTypeControlRendererDirective: rendering property type control {@type}",{type:t}),e.ngOnDestroy(),e._viewContainerRef.clear(),e.typeName){const o=e._viewContainerRef.injector,n=e._typeControls[t];if(!n)throw e._logger?.error("PropertyTypeControlRendererDirective: unable to find property type control {@type}",{type:t}),new Error(`unable to find property type control ${t}`);if(e._componentRef=e._viewContainerRef.createComponent(n,{injector:o}),e._componentRef){const t=e._componentRef.instance;t.control=e.control,t.values=e.values,yield t.initialize(),t.invalidateVisuals()}}},function(){var e=this,o=arguments;return new Promise((function(n,r){var a=t.apply(e,o);function i(t){j(a,n,r,i,l,"next",t)}function l(t){j(a,n,r,i,l,"throw",t)}i(void 0)}))})()}ngOnDestroy(){this._componentRef&&(this._logger?.debug("PropertyTypeControlRendererDirective: destroying property type control {@type}",{type:this.typeName??"inputString"}),this._componentRef?.destroy(),this._componentRef=null)}}S.ɵfac=function(t){return new(t||S)(O.Y(R.s_),O.Y(F.Yh),O.Y(x.bZ,8))},S.ɵdir=b.lG({type:S,selectors:[["","propertyTypeControl",""]],inputs:{control:"control",typeName:["propertyTypeControl","typeName"],values:"values"},features:[k.T]});var Y=o(9204);function D(t,e){if(1&t&&s._U(0,"span",5),2&t){const t=p.o().$implicit,e=p.o();c.Q("tooltip",null==e.propertiesMetadata||null==e.propertiesMetadata[t]?null:e.propertiesMetadata[t].description)}}const I=function(){return[]};function Q(t,e){if(1&t&&(u.yn(0),s.Tg(1,"div",1)(2,"label",2),d._(3),f.Y(4,D,1,1,"span",3),s.qZ(),u.Gk(5,4),g.AL(6,"asFormControl"),s.qZ(),u.BQ()),2&t){const t=e.$implicit,o=p.o();let n,r;y.x(3),v.hi("",null!==(n=null==o.propertiesMetadata||null==o.propertiesMetadata[t]?null:o.propertiesMetadata[t].name)&&void 0!==n?n:t," "),y.x(1),c.Q("ngIf",null==o.propertiesMetadata||null==o.propertiesMetadata[t]?null:o.propertiesMetadata[t].description),y.x(1),c.Q("propertyTypeControl",null==o.propertiesMetadata||null==o.propertiesMetadata[t]?null:o.propertiesMetadata[t].type)("control",g.lc(6,5,null==o.form?null:o.form.get(t)))("values",null!==(r=null==o.propertiesMetadata||null==o.propertiesMetadata[t]?null:o.propertiesMetadata[t].values)&&void 0!==r?r:m.Dd(7,I))}}function B(t,e){if(1&t&&s._U(0,"span",5),2&t){const t=p.o().$implicit,e=p.o();c.Q("tooltip",null==e.propertiesMetadata||null==e.propertiesMetadata[t]?null:e.propertiesMetadata[t].description)}}function N(t,e){if(1&t&&(u.yn(0),s.Tg(1,"div",1)(2,"label",2),d._(3),f.Y(4,B,1,1,"span",3),s.qZ(),u.Gk(5,4),g.AL(6,"asFormControl"),s.qZ(),u.BQ()),2&t){const t=e.$implicit,o=p.o();let n,r;y.x(3),v.hi("",null!==(n=null==o.propertiesMetadata||null==o.propertiesMetadata[t]?null:o.propertiesMetadata[t].name)&&void 0!==n?n:t," "),y.x(1),c.Q("ngIf",null==o.propertiesMetadata||null==o.propertiesMetadata[t]?null:o.propertiesMetadata[t].description),y.x(1),c.Q("propertyTypeControl",null==o.propertiesMetadata||null==o.propertiesMetadata[t]?null:o.propertiesMetadata[t].type)("control",g.lc(6,5,null==o.form?null:o.form.get(t)))("values",null!==(r=null==o.propertiesMetadata||null==o.propertiesMetadata[t]?null:o.propertiesMetadata[t].values)&&void 0!==r?r:m.Dd(7,I))}}class q extends i.k{constructor(){super(...arguments),this.properties=[]}}function E(t){class e extends q{constructor(){super(...arguments),this.properties=t}}return e.ɵfac=function(){let t;return function(o){return(t||(t=h.n5(e)))(o||e)}}(),e.ɵcmp=b.Xp({type:e,selectors:[["generic-properties-control"]],inputs:{properties:"properties"},standalone:!0,features:[_.q,M.j],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"properties-form-group"],[1,"properties-control-label"],["class","fas fa-info-circle",3,"tooltip",4,"ngIf"],[3,"propertyTypeControl","control","values"],[1,"fas","fa-info-circle",3,"tooltip"]],template:function(t,e){1&t&&f.Y(0,N,7,8,"ng-container",0),2&t&&c.Q("ngForOf",e.properties)},dependencies:[n.e,C.s,T.O,r.z,w.i,l.i,S,a.j,Y.j],encapsulation:2,changeDetection:0}),e}q.ɵfac=function(){let t;return function(e){return(t||(t=h.n5(q)))(e||q)}}(),q.ɵcmp=b.Xp({type:q,selectors:[["default-generic-properties-control"]],inputs:{properties:"properties"},features:[_.q],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"properties-form-group"],[1,"properties-control-label"],["class","fas fa-info-circle",3,"tooltip",4,"ngIf"],[3,"propertyTypeControl","control","values"],[1,"fas","fa-info-circle",3,"tooltip"]],template:function(t,e){1&t&&f.Y(0,Q,7,8,"ng-container",0),2&t&&c.Q("ngForOf",e.properties)},dependencies:[C.s,T.O,w.i,S,Y.j],encapsulation:2,changeDetection:0})},59951:(t,e,o)=>{o.d(e,{i:()=>p});var n=o(27052),r=o(48659),a=o(5348),i=o(25626),l=o(77842),s=o(38327);class p{}p.ɵfac=function(t){return new(t||p)},p.ɵmod=l.oA({type:p}),p.ɵinj=s.cJ({imports:[n.e,r.U,a.A,i.F]})},85902:(t,e,o)=>{o.d(e,{T:()=>s});var n=o(8477),r=o(46480),a=o(11776),i=o(38327);function l(t,e,o,n,r,a,i){try{var l=t[a](i),s=l.value}catch(t){return void o(t)}l.done?e(s):Promise.resolve(s).then(n,r)}class s{constructor(t,e){this._loader=t,this._logger=e,this._cache={}}extractMetadata(t){var e,o=this;return(e=function*(){const e=`${t.package}-${t.name}`;if(o._cache[e])return o._cache[e];const n=yield o._loader.loadItem(t);if(!n)return null;const r=n.data;if(!r.layoutEditorMetadata)return o._logger?.warn("LayoutEditorMetadataExtractor: Missing metadata! ",{package:t.package,name:t.name}),null;o._logger?.debug("LayoutEditorMetadataExtractor: Reading metadata! ",{package:t.package,name:t.name});const a=yield r.layoutEditorMetadata;return Object.freeze(a),o._cache[e]=a,a},function(){var t=this,o=arguments;return new Promise((function(n,r){var a=e.apply(t,o);function i(t){l(a,n,r,i,s,"next",t)}function s(t){l(a,n,r,i,s,"throw",t)}i(void 0)}))})()}}s.ɵfac=function(t){return new(t||s)(a.LF(n.Vl),a.LF(r.bZ,8))},s.ɵprov=i.Yz({token:s,factory:s.ɵfac})},92640:(t,e,o)=>{o.d(e,{x:()=>r});var n=o(70625);const r={asyncValidators:[],validators:[],disabled:!1,type:n.NI,childType:n.NI,args:{}}},9204:(t,e,o)=>{o.d(e,{j:()=>s});var n=o(70625),r=o(46480),a=o(43939),i=o(79440),l=o(77842);class s{constructor(t){this._logger=t}transform(t,e){return(0,a.fp)(t)?null:t instanceof n.NI?t:(this._logger?.warn("Failed to cast AbstractControl to FormControl"),null)}}s.ɵfac=function(t){return new(t||s)(i.Y(r.bZ,24))},s.ɵpipe=l.Yj({name:"asFormControl",type:s,pure:!0})}}]);
//# sourceMappingURL=9193.chunk.a7ff1dee222f7dd0bd0c.js.map