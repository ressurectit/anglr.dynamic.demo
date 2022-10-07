"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[6653],{27731:(t,e,r)=>{r.r(e),r.d(e,{TextBlockLayoutEditorMetadata:()=>d});var o=r(32441),n=r(76001),a=r(99711),i=r(2032),l=r(1501),p=r(58449),s=r(59982),c=r(57466);class u{constructor(t){this.text=null,c.Rl.bind(this)(t)}}(0,i.gn)([(0,l._)("Text"),(0,p.f)("Text to be displayed in text block"),(0,s.T)("inputString"),(0,i.w6)("design:type",String)],u.prototype,"text",void 0);class d{constructor(){this.metaInfo={name:"Text block",description:"Displays text",group:"Texts",optionsMetadata:{propertiesMetadata:[{modelType:o.k,propertiesControls:[n.e]},{modelType:u,propertiesControls:[(0,a.q)(["text"])]}]},defaultOptions:{text:"This is your text"}},Object.freeze(this)}}},94596:(t,e,r)=>{r.d(e,{$:()=>o});const o=Symbol("LayoutPropertyMetadata")},99711:(t,e,r)=>{r.d(e,{q:()=>P});var o=r(27052),n=r(39163),a=r(77880),i=r(87316),l=r(59951),p=r(80827),s=r(6845),c=r(73301),u=r(4477),d=r(41853),f=r(15686),y=r(65589),g=r(66794),m=r(6427),v=r(94727),h=r(43801),M=r(77842),_=r(47098),x=r(82568),C=r(12311),b=r(21651),T=r(19989),w=r(46480),k=r(71785),R=r(79440),F=r(8215),O=r(36973);function j(t,e,r,o,n,a,i){try{var l=t[a](i),p=l.value}catch(t){return void r(t)}l.done?e(p):Promise.resolve(p).then(o,n)}class Y{constructor(t,e,r){this._viewContainerRef=t,this._typeControls=e,this._logger=r,this._componentRef=null,this.values=[]}ngOnChanges(){var t,e=this;return(t=function*(){const t=e.typeName??"inputString";if(e._logger?.debug("PropertyTypeControlRendererDirective: rendering property type control {@type}",{type:t}),e.ngOnDestroy(),e._viewContainerRef.clear(),e.typeName){const r=e._viewContainerRef.injector,o=e._typeControls[t];if(!o)throw e._logger?.error("PropertyTypeControlRendererDirective: unable to find property type control {@type}",{type:t}),new Error(`unable to find property type control ${t}`);if(e._componentRef=e._viewContainerRef.createComponent(o,{injector:r}),e._componentRef){const t=e._componentRef.instance;t.control=e.control,t.values=e.values,yield t.initialize(),t.invalidateVisuals()}}},function(){var e=this,r=arguments;return new Promise((function(o,n){var a=t.apply(e,r);function i(t){j(a,o,n,i,l,"next",t)}function l(t){j(a,o,n,i,l,"throw",t)}i(void 0)}))})()}ngOnDestroy(){this._componentRef&&(this._logger?.debug("PropertyTypeControlRendererDirective: destroying property type control {@type}",{type:this.typeName??"inputString"}),this._componentRef?.destroy(),this._componentRef=null)}}Y.ɵfac=function(t){return new(t||Y)(R.Y(F.s_),R.Y(k.Yh),R.Y(w.bZ,8))},Y.ɵdir=M.lG({type:Y,selectors:[["","propertyTypeControl",""]],inputs:{control:"control",typeName:["propertyTypeControl","typeName"],values:"values"},features:[O.T]});var D=r(9204);function Q(t,e){if(1&t&&p._U(0,"span",5),2&t){const t=s.o().$implicit,e=s.o();c.Q("tooltip",null==e.propertiesMetadata||null==e.propertiesMetadata[t]?null:e.propertiesMetadata[t].description)}}const I=function(){return[]};function q(t,e){if(1&t&&(u.yn(0),p.Tg(1,"div",1)(2,"label",2),d._(3),f.Y(4,Q,1,1,"span",3),p.qZ(),u.Gk(5,4),y.AL(6,"asFormControl"),p.qZ(),u.BQ()),2&t){const t=e.$implicit,r=s.o();let o,n;g.x(3),m.hi("",null!==(o=null==r.propertiesMetadata||null==r.propertiesMetadata[t]?null:r.propertiesMetadata[t].name)&&void 0!==o?o:t," "),g.x(1),c.Q("ngIf",null==r.propertiesMetadata||null==r.propertiesMetadata[t]?null:r.propertiesMetadata[t].description),g.x(1),c.Q("propertyTypeControl",null==r.propertiesMetadata||null==r.propertiesMetadata[t]?null:r.propertiesMetadata[t].type)("control",y.lc(6,5,null==r.form?null:r.form.get(t)))("values",null!==(n=null==r.propertiesMetadata||null==r.propertiesMetadata[t]?null:r.propertiesMetadata[t].values)&&void 0!==n?n:v.Dd(7,I))}}function E(t,e){if(1&t&&p._U(0,"span",5),2&t){const t=s.o().$implicit,e=s.o();c.Q("tooltip",null==e.propertiesMetadata||null==e.propertiesMetadata[t]?null:e.propertiesMetadata[t].description)}}function L(t,e){if(1&t&&(u.yn(0),p.Tg(1,"div",1)(2,"label",2),d._(3),f.Y(4,E,1,1,"span",3),p.qZ(),u.Gk(5,4),y.AL(6,"asFormControl"),p.qZ(),u.BQ()),2&t){const t=e.$implicit,r=s.o();let o,n;g.x(3),m.hi("",null!==(o=null==r.propertiesMetadata||null==r.propertiesMetadata[t]?null:r.propertiesMetadata[t].name)&&void 0!==o?o:t," "),g.x(1),c.Q("ngIf",null==r.propertiesMetadata||null==r.propertiesMetadata[t]?null:r.propertiesMetadata[t].description),g.x(1),c.Q("propertyTypeControl",null==r.propertiesMetadata||null==r.propertiesMetadata[t]?null:r.propertiesMetadata[t].type)("control",y.lc(6,5,null==r.form?null:r.form.get(t)))("values",null!==(n=null==r.propertiesMetadata||null==r.propertiesMetadata[t]?null:r.propertiesMetadata[t].values)&&void 0!==n?n:v.Dd(7,I))}}class N extends i.k{constructor(){super(...arguments),this.properties=[]}}function P(t){class e extends N{constructor(){super(...arguments),this.properties=t}}return e.ɵfac=function(){let t;return function(r){return(t||(t=h.n5(e)))(r||e)}}(),e.ɵcmp=M.Xp({type:e,selectors:[["generic-properties-control"]],inputs:{properties:"properties"},standalone:!0,features:[_.q,x.j],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"properties-form-group"],[1,"properties-control-label"],["class","fas fa-info-circle",3,"tooltip",4,"ngIf"],[3,"propertyTypeControl","control","values"],[1,"fas","fa-info-circle",3,"tooltip"]],template:function(t,e){1&t&&f.Y(0,L,7,8,"ng-container",0),2&t&&c.Q("ngForOf",e.properties)},dependencies:[o.e,C.s,b.O,n.z,T.i,l.i,Y,a.j,D.j],encapsulation:2,changeDetection:0}),e}N.ɵfac=function(){let t;return function(e){return(t||(t=h.n5(N)))(e||N)}}(),N.ɵcmp=M.Xp({type:N,selectors:[["default-generic-properties-control"]],inputs:{properties:"properties"},features:[_.q],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"properties-form-group"],[1,"properties-control-label"],["class","fas fa-info-circle",3,"tooltip",4,"ngIf"],[3,"propertyTypeControl","control","values"],[1,"fas","fa-info-circle",3,"tooltip"]],template:function(t,e){1&t&&f.Y(0,q,7,8,"ng-container",0),2&t&&c.Q("ngForOf",e.properties)},dependencies:[C.s,b.O,T.i,Y,D.j],encapsulation:2,changeDetection:0})},59951:(t,e,r)=>{r.d(e,{i:()=>s});var o=r(27052),n=r(48659),a=r(5348),i=r(25626),l=r(77842),p=r(38327);class s{}s.ɵfac=function(t){return new(t||s)},s.ɵmod=l.oA({type:s}),s.ɵinj=p.cJ({imports:[o.e,n.U,a.A,i.F]})},85902:(t,e,r)=>{r.d(e,{T:()=>p});var o=r(8477),n=r(46480),a=r(11776),i=r(38327);function l(t,e,r,o,n,a,i){try{var l=t[a](i),p=l.value}catch(t){return void r(t)}l.done?e(p):Promise.resolve(p).then(o,n)}class p{constructor(t,e){this._loader=t,this._logger=e,this._cache={}}extractMetadata(t){var e,r=this;return(e=function*(){const e=`${t.package}-${t.name}`;if(r._cache[e])return r._cache[e];const o=yield r._loader.loadItem(t);if(!o)return null;const n=o.data;if(!n.layoutEditorMetadata)return r._logger?.warn("LayoutEditorMetadataExtractor: Missing metadata! ",{package:t.package,name:t.name}),null;r._logger?.debug("LayoutEditorMetadataExtractor: Reading metadata! ",{package:t.package,name:t.name});const a=yield n.layoutEditorMetadata;return Object.freeze(a),r._cache[e]=a,a},function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function i(t){l(a,o,n,i,p,"next",t)}function p(t){l(a,o,n,i,p,"throw",t)}i(void 0)}))})()}}p.ɵfac=function(t){return new(t||p)(a.LF(o.Vl),a.LF(n.bZ,8))},p.ɵprov=i.Yz({token:p,factory:p.ɵfac})},92640:(t,e,r)=>{r.d(e,{x:()=>n});var o=r(70625);const n={asyncValidators:[],validators:[],disabled:!1,type:o.NI,childType:o.NI,args:{}}},9204:(t,e,r)=>{r.d(e,{j:()=>p});var o=r(70625),n=r(46480),a=r(43939),i=r(79440),l=r(77842);class p{constructor(t){this._logger=t}transform(t,e){return(0,a.fp)(t)?null:t instanceof o.NI?t:(this._logger?.warn("Failed to cast AbstractControl to FormControl"),null)}}p.ɵfac=function(t){return new(t||p)(i.Y(n.bZ,24))},p.ɵpipe=l.Yj({name:"asFormControl",type:p,pure:!0})}}]);
//# sourceMappingURL=6653.chunk.fc7910ebfc37067fada7.js.map