"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[1863],{43424:(n,t,e)=>{e.d(t,{$:()=>B});var o=e(2032),i=e(27052),r=e(53633),s=e(60405),a=e(90255),c=e(23657),d=e(11776),l=e(95176),p=e(13457),u=e(86485),m=e(96130),h=e(79440),f=e(77842),g=e(73379);class v{constructor(n,t,e){this.componentManager=n,this.relationsProcessor=t,this.scopeId=e}ngOnDestroy(){this.componentManager.ngOnDestroy(),this.relationsProcessor.destroyScope()}}v.ɵfac=function(n){return new(n||v)(h.Y(u.s),h.Y(m.v),h.Y(p.H$))},v.ɵdir=f.lG({type:v,selectors:[["","scopedRelations",""]],standalone:!0,features:[g._([{provide:u.s,useFactory:()=>(0,d.f3)(u.s,{skipSelf:!0}).openScope((0,d.f3)(p.H$))},{provide:m.v,useFactory:()=>(0,d.f3)(m.v,{skipSelf:!0}).openScope((0,d.f3)(p.H$),(0,d.f3)(u.s),(0,d.f3)(l.z))}])]});var y=e(6552);function C(n,t,e,o,i,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(o,i)}function O(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var r=n.apply(t,e);function s(n){C(r,o,i,s,a,"next",n)}function a(n){C(r,o,i,s,a,"throw",n)}s(void 0)}))}}const w=function(){var n=O((function*(){return new((yield Promise.all([e.e(6583),e.e(9901),e.e(3898)]).then(e.bind(e,70541))).ListBlockLayoutEditorMetadata)}));return function(){return n.apply(this,arguments)}}(),R=function(){var n=O((function*(){return new((yield Promise.all([e.e(9360),e.e(4623),e.e(8745),e.e(9678),e.e(7404)]).then(e.bind(e,95103))).ListBlockRelationsEditorMetadata)}));return function(){return n.apply(this,arguments)}}(),x=function(){var n=O((function*(){return(yield Promise.all([e.e(8282),e.e(1156)]).then(e.bind(e,52191))).ListBlockDesignerSAComponent}));return function(){return n.apply(this,arguments)}}();var E=e(49891),S=e(36759);class T{constructor(){this.datum=null,this.index=0,this.first=!1,this.last=!1}invalidateVisuals(){}}T.ɵfac=function(n){return new(n||T)},T.ɵdir=f.lG({type:T}),(0,o.gn)([(0,S.A)(),(0,o.w6)("design:type",Object)],T.prototype,"datum",void 0),(0,o.gn)([(0,S.A)(),(0,o.w6)("design:type",Number)],T.prototype,"index",void 0),(0,o.gn)([(0,S.A)(),(0,o.w6)("design:type",Boolean)],T.prototype,"first",void 0),(0,o.gn)([(0,S.A)(),(0,o.w6)("design:type",Boolean)],T.prototype,"last",void 0);var P=e(36973);function M(n,t,e,o,i,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(o,i)}class I{constructor(){this.initialized=!1,this.componentManager=(0,d.f3)(u.s),this.relationsProcessor=(0,d.f3)(m.v),this.relations=new T,this.datum=null,this.index=0,this.first=!1,this.last=!1,this.componentId=""}ngOnChanges(n){var t,e=this;return(t=function*(){(0,E.$)("componentId")in n&&!e.initialized&&e.componentId&&(e.initialized=!0,e.componentManager.registerComponent(e.componentId,e.relations),yield e.relationsProcessor.initialized,e.relationsProcessor.updateRelations(e.componentId)),(0,E.$)("datum")in n&&(e.relations.datum=e.datum),(0,E.$)("index")in n&&(e.relations.index=e.index),(0,E.$)("first")in n&&(e.relations.first=e.first),(0,E.$)("last")in n&&(e.relations.last=e.last)},function(){var n=this,e=arguments;return new Promise((function(o,i){var r=t.apply(n,e);function s(n){M(r,o,i,s,a,"next",n)}function a(n){M(r,o,i,s,a,"throw",n)}s(void 0)}))})()}ngOnDestroy(){this.relationsProcessor.destroyComponent(this.componentId),this.componentManager.unregisterComponent(this.componentId)}}I.ɵfac=function(n){return new(n||I)},I.ɵdir=f.lG({type:I,selectors:[["","listBlockScope",""]],inputs:{datum:"datum",index:"index",first:"first",last:"last",componentId:"componentId"},standalone:!0,features:[P.T]});var D=e(4477),N=e(15686),b=e(6845),A=e(66794),_=e(73301),L=e(43801),z=e(47098),k=e(82568),Y=e(12311);function $(n,t){}function j(n,t){if(1&n&&(D.yn(0),N.Y(1,$,0,0,"ng-template",1),D.BQ()),2&n){const n=t.$implicit,e=t.index,o=t.first,i=t.last,r=b.o();A.x(1),_.Q("layoutComponentRenderer",null==r.options?null:r.options.template)("datum",n)("first",o)("last",i)("index",e)("componentId",r.id)}}let B=class extends r.h{constructor(){super(...arguments),this.id="",this.data=[]}setId(n){this.id=n}};B.ɵfac=function(){let n;return function(t){return(n||(n=L.n5(B)))(t||B)}}(),B.ɵcmp=f.Xp({type:B,selectors:[["list-block"]],inputs:{data:"data"},standalone:!0,features:[z.q,k.j],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["scopedRelations","","listBlockScope","",3,"layoutComponentRenderer","datum","first","last","index","componentId"]],template:function(n,t){1&n&&N.Y(0,j,2,6,"ng-container",0),2&n&&_.Q("ngForOf",t.data)},dependencies:[i.e,Y.s,s.i,v,I],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0}),B=(0,o.gn)([(0,a.W)(x),(0,y.i)(R),(0,c.w)(w)],B)},51863:(n,t,e)=>{e.r(t),e.d(t,{default:()=>c,extensions:()=>d});var o=e(6433),i=e(22607),r=e(31331);function s(n,t,e,o,i,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(o,i)}class a extends r.z{onInit(){var n,t=this;return(n=function*(){t.instance&&t.instance.setId(t.metadata.id)},function(){var t=this,e=arguments;return new Promise((function(o,i){var r=n.apply(t,e);function a(n){s(r,o,i,a,c,"next",n)}function c(n){s(r,o,i,a,c,"throw",n)}a(void 0)}))})()}}const c=e(43424).$,d=[o.O,i.i,a]},90255:(n,t,e)=>{e.d(t,{W:()=>i});var o=e(22206);function i(n){return(0,o.R)(n,"layoutEditorDesignerType")}},23657:(n,t,e)=>{e.d(t,{w:()=>i});var o=e(22206);function i(n){return(0,o.R)(n,"layoutEditorMetadata")}},53633:(n,t,e)=>{e.d(t,{h:()=>h});var o=e(46480),i=e(49891),r=e(43939),s=e(79440),a=e(68961),c=e(4905),d=e(95176),l=e(77842),p=e(36973);function u(n,t,e,o,i,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(o,i)}function m(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var r=n.apply(t,e);function s(n){u(r,o,i,s,a,"next",n)}function a(n){u(r,o,i,s,a,"throw",n)}s(void 0)}))}}class h{constructor(n,t,e,o){this.changeDetector=n,this.componentElement=t,this.injector=e,this.logger=o,this.extensions=[],this.initialized=!1,this.destroyed=!1}get element(){return this.componentElement}get extensionsOptions(){return this.options}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const n of this.extensions)n.destroy();this.onDestroy()}}ngOnInit(){var n=this;return m((function*(){if(n.initialized)return;n.initialized=!0;const t=n.extensionsOptions;if(yield n.onInit(),yield n.onOptionsSet(),t)for(const t of n.extensions)yield t.initialize(n.injector,n.element,n);yield n.afterInit()}))()}ngOnChanges(n){var t=this;return m((function*(){if((0,i.$)("options")in n){yield t.onOptionsSet();const n=t.extensionsOptions;if(n)for(const e of t.extensions)yield e.optionsChange(n);if(!t.initialized)return;yield t.onOptionsChange()}delete n[(0,i.$)("options")],(0,r.Qr)(n)||t.onChanges(n)}))()}registerExtensions(n){this.extensions=n}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(n){}onOptionsSet(){}onDestroy(){}}h.ɵfac=function(n){return new(n||h)(s.Y(a.s),s.Y(c.SB),s.Y(d.z),s.Y(o.bZ,8))},h.ɵdir=l.lG({type:h,features:[p.T]})},60405:(n,t,e)=>{e.d(t,{i:()=>x});var o,i=e(74445),r=e(95176),s=e(46480),a=e(13457),c=e(14389),d=e(49891),l=e(43939);!function(n){n[n.ShowNotFound=0]="ShowNotFound",n[n.Ignore=1]="Ignore",n[n.ThrowError=2]="ThrowError"}(o||(o={}));class p{constructor(n){this.missingTypeBehavior=o.ShowNotFound,(0,l.EN)(n)&&(this.missingTypeBehavior=n)}}var u=e(77842),m=e(82568),h=e(80827),f=e(41853);class g{}g.ɵfac=function(n){return new(n||g)},g.ɵcmp=u.Xp({type:g,selectors:[["not-found-layout-type"]],standalone:!0,features:[m.j],decls:5,vars:0,consts:[[1,"fas","fa-minus-circle"]],template:function(n,t){1&n&&(h.Tg(0,"div"),h._U(1,"span",0),h.Tg(2,"span"),f._(3,"NOT FOUND"),h.qZ(),h._U(4,"span",0),h.qZ())},styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0});var v=e(8477),y=e(79440),C=e(8215),O=e(73379),w=e(36973);function R(n,t,e,o,i,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(o,i)}class x{constructor(n,t,e,o,r,s,a){this.viewContainerRef=n,this.loader=t,this.childExtensions=e,this.scopeId=o,this.options=r,this.metadataTransformer=s,this.logger=a,this.ɵComponentRef=null,this.componentMetadata=null,this.disableTransformer=!1,this.componentChange=new i.v,this.componentElementChange=new i.v,this.options&&this.options instanceof p||(this.options=new p)}get component(){return this.ɵComponentRef?this.ɵComponentRef.instance:null}get componentRef(){return this.ɵComponentRef}ngOnChanges(n){var t,e=this;return(t=function*(){if(e.logger?.debug("LayoutComponentRendererSADirective: rendering component {@id}",{id:e.componentMetadata?.id}),e.ngOnDestroy(),e.viewContainerRef.clear(),(0,d.$)("componentMetadata")in n&&e.componentMetadata){const n=e.customInjector??e.viewContainerRef.injector;let t=e.componentMetadata;const i=e.componentMetadata.scope;e.metadataTransformer&&!e.disableTransformer&&(t=e.metadataTransformer(e.componentMetadata,n));const s=yield e.loader.loadItem(t);if(!s){switch(e.logger?.warn("LayoutComponentRendererSADirective: Unable to find layout component type {@type}",{name:t.name,package:t.package}),e.options?.missingTypeBehavior){default:e.viewContainerRef.createComponent(g);break;case o.Ignore:break;case o.ThrowError:throw new Error(`LayoutComponentRendererSADirective: Unable to find layout component type Name: ${t.name} Package: ${t.package}`)}return}const d=r.z.create({parent:n,providers:[{provide:a.H$,useValue:i??e.scopeId??null},{provide:v.X5,useValue:s.childExtensions}]});e.ɵComponentRef=e.viewContainerRef.createComponent(s.data,{injector:d}),e.logger?.debug("LayoutComponentRendererSADirective: component rendered {@id}",{id:t?.id});const l=e.component;if(l){l.registerExtensions([...e.childExtensions?.map((n=>new n(t)))??[],...s?.extensions?.map((n=>new n(t)))??[]]);const n={};(0,c.mv)(n,"options",t.options,l.options,!0),e.logger?.debug("LayoutComponentRendererSADirective: setting options for component {@id}",{id:t?.id}),l.options=t.options,e.logger?.debug("LayoutComponentRendererSADirective: setting changes for component {@id}",{id:t?.id}),yield l.ngOnChanges?.(n),e.logger?.debug("LayoutComponentRendererSADirective: initializing component {@id}",{id:t?.id}),yield l.ngOnInit?.(),e.logger?.debug("LayoutComponentRendererSADirective: invalidating component visuals {@id}",{id:t?.id}),l.invalidateVisuals(),e.ɵComponentRef?.changeDetectorRef.markForCheck(),e.componentElementChange.next(e.ɵComponentRef?.hostView.rootNodes[0]),e.componentChange.next(e.ɵComponentRef)}}},function(){var n=this,e=arguments;return new Promise((function(o,i){var r=t.apply(n,e);function s(n){R(r,o,i,s,a,"next",n)}function a(n){R(r,o,i,s,a,"throw",n)}s(void 0)}))})()}ngOnDestroy(){this.ɵComponentRef&&(this.logger?.debug("LayoutComponentRendererSADirective: destroying component {@id}",{id:this.componentMetadata?.id,designer:this.disableTransformer}),this.ɵComponentRef?.destroy(),this.ɵComponentRef=null,this.componentChange.next(null),this.componentElementChange.next(null))}}x.ɵfac=function(n){return new(n||x)(y.Y(C.s_),y.Y(v.Vl),y.Y(v.X5,12),y.Y(a.H$,8),y.Y(p,8),y.Y(v.xM,8),y.Y(s.bZ,8))},x.ɵdir=u.lG({type:x,selectors:[["","layoutComponentRenderer",""]],inputs:{componentMetadata:["layoutComponentRenderer","componentMetadata"],customInjector:["layoutComponentRendererInjector","customInjector"],disableTransformer:["layoutComponentRendererDisableTransformer","disableTransformer"]},outputs:{componentChange:"layoutComponentRendererComponentChange",componentElementChange:"componentElementChange"},exportAs:["layoutComponentRenderer"],standalone:!0,features:[O._([{provide:v.X5,useValue:null}]),w.T]})},6433:(n,t,e)=>{e.d(t,{O:()=>r});var o=e(31331),i=e(43939);class r extends o.z{onInit(){this._applyStyling()}onOptionsChange(){this._applyStyling()}_applyStyling(){const n=this.options,t=this.element?.nativeElement.style;if(this.element){if((0,i.EN)(this.lastCssClass))for(const n of this.lastCssClass.split(" "))n&&this.element.nativeElement.classList.remove(n);if(this.lastCssClass=n?.cssClass,n?.cssClass)for(const t of n.cssClass.split(" "))t&&this.element?.nativeElement.classList.add(t)}(0,i.EN)(t)&&(n?.margin&&((0,i.EN)(n.margin.bottom)&&(t.marginBottom=n.margin.bottom),(0,i.EN)(n.margin.right)&&(t.marginRight=n.margin.right),(0,i.EN)(n.margin.top)&&(t.marginTop=n.margin.top),(0,i.EN)(n.margin.left)&&(t.marginLeft=n.margin.left)),n?.padding&&((0,i.EN)(n.padding.bottom)&&(t.paddingBottom=n.padding.bottom),(0,i.EN)(n.padding.right)&&(t.paddingRight=n.padding.right),(0,i.EN)(n.padding.top)&&(t.paddingTop=n.padding.top),(0,i.EN)(n.padding.left)&&(t.paddingLeft=n.padding.left)),n?.textStyling&&((0,i.EN)(n.textStyling.fontSize)&&(t.fontSize=n.textStyling.fontSize),(0,i.EN)(n.textStyling.fontWeight)&&(t.fontWeight=n.textStyling.fontWeight.toString())))}}},8477:(n,t,e)=>{e.d(t,{Aw:()=>a,Vl:()=>c,X5:()=>r,gM:()=>s,qO:()=>d,xM:()=>i});var o=e(40296);const i=new o.O("LAYOUT_COMPONENT_TRANSFORM"),r=new o.O("LAYOUT_COMPONENT_CHILD_EXTENSIONS"),s=new o.O("LAYOUT_COMPONENTS_MODULE_DATA_EXTRACTORS"),a=new o.O("LAYOUT_COMPONENTS_MODULE_PROVIDERS"),c=new o.O("LAYOUT_COMPONENTS_LOADER"),d=new o.O("LAYOUT_METADATA_STORAGE")},22607:(n,t,e)=>{e.d(t,{i:()=>a});var o=e(31331),i=e(96130),r=e(86485);function s(n,t,e,o,i,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(o,i)}class a extends o.z{constructor(){super(...arguments),this.relationsProcessor=null,this.componentManager=null}onInit(){var n,t=this;return(n=function*(){t.injector&&t.metadata&&t.instance&&(t.relationsProcessor??(t.relationsProcessor=t.injector.get(i.v,null)),t.componentManager??(t.componentManager=t.injector.get(r.s,null)),t.relationsProcessor&&t.componentManager&&(t.componentManager.registerComponent(t.metadata.id,t.instance),yield t.relationsProcessor.initialized,t.relationsProcessor.updateRelations(t.metadata.id)))},function(){var t=this,e=arguments;return new Promise((function(o,i){var r=n.apply(t,e);function a(n){s(r,o,i,a,c,"next",n)}function c(n){s(r,o,i,a,c,"throw",n)}a(void 0)}))})()}onDestroy(){this.relationsProcessor&&this.componentManager&&this.metadata&&(this.relationsProcessor.destroyComponent(this.metadata.id),this.componentManager.unregisterComponent(this.metadata.id))}}},31331:(n,t,e)=>{function o(n,t,e,o,i,r,s){try{var a=n[r](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(o,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,r){var s=n.apply(t,e);function a(n){o(s,i,r,a,c,"next",n)}function c(n){o(s,i,r,a,c,"throw",n)}a(void 0)}))}}e.d(t,{z:()=>r});class r{constructor(n){this.metadata=n,this.initialized=!1}initialize(n,t,e){var o=this;return i((function*(){o.initialized=!0,o.injector=n,o.element=t,o.instance=e,yield o.onInit()}))()}optionsChange(n){var t=this;return i((function*(){t.options=n,t.initialized&&(yield t.onOptionsChange())}))()}destroy(){this.onDestroy()}onInit(){}onOptionsChange(){}onDestroy(){}}},14389:(n,t,e)=>{e.d(t,{LK:()=>a,XW:()=>s,mv:()=>r});var o=e(97825),i=e(13457);function r(n,t,e,o,i=!1){n[t]={currentValue:e,previousValue:o,firstChange:i,isFirstChange:()=>i}}function s(n){return{provide:i.BG,useValue:{packages:[n],packagesChange:o.C,refresh(){}},multi:!0}}function a(n){try{return JSON.parse(n)}catch{return null}}},97825:(n,t,e)=>{e.d(t,{C:()=>r});var o=e(28653),i=e(58656);const r=new o.y(i.Z)}}]);
//# sourceMappingURL=1863.chunk.30daccd6e49bcf1d2ba7.js.map