"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[8229],{28229:(n,t,e)=>{e.r(t),e.d(t,{default:()=>S,extensions:()=>T});var o=e(6433),i=e(2032),s=e(27052),r=e(53633),a=e(60405),l=e(23657),c=e(57466);function d(n,t,e,o,i,s,r){try{var a=n[s](r),l=a.value}catch(n){return void e(n)}a.done?t(l):Promise.resolve(l).then(o,i)}const p=function(){var n,t=(n=function*(){return new((yield e.e(8566).then(e.bind(e,28566))).GridPanelLayoutEditorMetadata)},function(){var t=this,e=arguments;return new Promise((function(o,i){var s=n.apply(t,e);function r(n){d(s,o,i,r,a,"next",n)}function a(n){d(s,o,i,r,a,"throw",n)}r(void 0)}))});return function(){return t.apply(this,arguments)}}();var u=e(4477),m=e(15686),g=e(66794),h=e(73301),f=e(43801),C=e(77842),y=e(47098),v=e(82568),O=e(12311);function w(n,t){}function E(n,t){if(1&n&&(u.yn(0),m.Y(1,w,0,0,"ng-template",1),u.BQ()),2&n){const n=t.$implicit;g.x(1),h.Q("layoutComponentRenderer",n)}}let R=class extends r.h{onOptionsSet(){this._fixCells();const n=this.componentElement.nativeElement.style;let t="",e="";if(this.options?.rows&&Array.isArray(this.options?.rows))for(const n of this.options.rows)t+=`${n.height} `;if(this.options?.columns&&Array.isArray(this.options?.columns))for(const n of this.options.columns)e+=`${n.width} `;n.gridTemplateRows=t.trim(),n.gridTemplateColumns=e.trim()}_fixCells(){var n;if(!this.options)return;(n=this.options).cells??(n.cells=[]);const t=[];for(let n=0;n<(this.options.rows??[]).length;n++)for(let e=0;e<(this.options.columns??[]).length;e++)t[n]??(t[n]=[]),t[n][e]="";for(const n of this.options.cells){n.package="basic-components",n.name="gridPanelCell";for(let e=n.options?.gridRowStart??1;e<(n.options?.gridRowEnd??2);e++)for(let o=n.options?.gridColumnStart??1;o<(n.options?.gridColumnEnd??2);o++){const i=e-1,s=o-1;""===t[i][s]&&(t[i][s]=n.id)}}for(let n=1;n<=(this.options.rows??[]).length;n++)for(let e=1;e<=(this.options.columns??[]).length;e++)""===t[n-1][e-1]&&this.options.cells.push({id:`${(0,c.Ox)(6)}-r${n}-${n+1}-c${e}-${e+1}`,package:"basic-components",name:"gridPanelCell",options:{gridRowStart:n,gridRowEnd:n+1,gridColumnStart:e,gridColumnEnd:e+1}})}};R.ɵfac=function(){let n;return function(t){return(n||(n=f.n5(R)))(t||R)}}(),R.ɵcmp=C.Xp({type:R,selectors:[["grid-panel"]],standalone:!0,features:[y.q,v.j],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"layoutComponentRenderer"]],template:function(n,t){1&n&&m.Y(0,E,2,1,"ng-container",0),2&n&&h.Q("ngForOf",null==t.options?null:t.options.cells)},dependencies:[s.e,O.s,a.i],encapsulation:2,changeDetection:0}),R=(0,i.gn)([(0,l.w)(p)],R);const S=R,T=[o.O]},23657:(n,t,e)=>{e.d(t,{w:()=>i});var o=e(22206);function i(n){return(0,o.R)(n,"layoutEditorMetadata")}},53633:(n,t,e)=>{e.d(t,{h:()=>g});var o=e(46480),i=e(49891),s=e(43939),r=e(79440),a=e(68961),l=e(4905),c=e(95176),d=e(77842),p=e(36973);function u(n,t,e,o,i,s,r){try{var a=n[s](r),l=a.value}catch(n){return void e(n)}a.done?t(l):Promise.resolve(l).then(o,i)}function m(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var s=n.apply(t,e);function r(n){u(s,o,i,r,a,"next",n)}function a(n){u(s,o,i,r,a,"throw",n)}r(void 0)}))}}class g{constructor(n,t,e,o){this.changeDetector=n,this.componentElement=t,this.injector=e,this.logger=o,this.extensions=[],this.initialized=!1,this.destroyed=!1}get element(){return this.componentElement}get extensionsOptions(){return this.options}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const n of this.extensions)n.destroy();this.onDestroy()}}ngOnInit(){var n=this;return m((function*(){if(n.initialized)return;n.initialized=!0;const t=n.extensionsOptions;if(yield n.onInit(),yield n.onOptionsSet(),t)for(const t of n.extensions)yield t.initialize(n.injector,n.element,n);yield n.afterInit()}))()}ngOnChanges(n){var t=this;return m((function*(){if((0,i.$)("options")in n){yield t.onOptionsSet();const n=t.extensionsOptions;if(n)for(const e of t.extensions)yield e.optionsChange(n);if(!t.initialized)return;yield t.onOptionsChange()}delete n[(0,i.$)("options")],(0,s.Qr)(n)||t.onChanges(n)}))()}registerExtensions(n){this.extensions=n}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(n){}onOptionsSet(){}onDestroy(){}}g.ɵfac=function(n){return new(n||g)(r.Y(a.s),r.Y(l.SB),r.Y(c.z),r.Y(o.bZ,8))},g.ɵdir=d.lG({type:g,features:[p.T]})},60405:(n,t,e)=>{e.d(t,{i:()=>R});var o,i=e(74445),s=e(95176),r=e(46480),a=e(13457),l=e(14389),c=e(49891),d=e(43939);!function(n){n[n.ShowNotFound=0]="ShowNotFound",n[n.Ignore=1]="Ignore",n[n.ThrowError=2]="ThrowError"}(o||(o={}));class p{constructor(n){this.missingTypeBehavior=o.ShowNotFound,(0,d.EN)(n)&&(this.missingTypeBehavior=n)}}var u=e(77842),m=e(82568),g=e(80827),h=e(41853);class f{}f.ɵfac=function(n){return new(n||f)},f.ɵcmp=u.Xp({type:f,selectors:[["not-found-layout-type"]],standalone:!0,features:[m.j],decls:5,vars:0,consts:[[1,"fas","fa-minus-circle"]],template:function(n,t){1&n&&(g.Tg(0,"div"),g._U(1,"span",0),g.Tg(2,"span"),h._(3,"NOT FOUND"),g.qZ(),g._U(4,"span",0),g.qZ())},styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0});var C=e(8477),y=e(79440),v=e(8215),O=e(73379),w=e(36973);function E(n,t,e,o,i,s,r){try{var a=n[s](r),l=a.value}catch(n){return void e(n)}a.done?t(l):Promise.resolve(l).then(o,i)}class R{constructor(n,t,e,o,s,r,a){this.viewContainerRef=n,this.loader=t,this.childExtensions=e,this.scopeId=o,this.options=s,this.metadataTransformer=r,this.logger=a,this.ɵComponentRef=null,this.componentMetadata=null,this.disableTransformer=!1,this.componentChange=new i.v,this.componentElementChange=new i.v,this.options&&this.options instanceof p||(this.options=new p)}get component(){return this.ɵComponentRef?this.ɵComponentRef.instance:null}get componentRef(){return this.ɵComponentRef}ngOnChanges(n){var t,e=this;return(t=function*(){if(e.logger?.debug("LayoutComponentRendererSADirective: rendering component {@id}",{id:e.componentMetadata?.id}),e.ngOnDestroy(),e.viewContainerRef.clear(),(0,c.$)("componentMetadata")in n&&e.componentMetadata){const n=e.customInjector??e.viewContainerRef.injector;let t=e.componentMetadata;const i=e.componentMetadata.scope;e.metadataTransformer&&!e.disableTransformer&&(t=e.metadataTransformer(e.componentMetadata,n));const r=yield e.loader.loadItem(t);if(!r){switch(e.logger?.warn("LayoutComponentRendererSADirective: Unable to find layout component type {@type}",{name:t.name,package:t.package}),e.options?.missingTypeBehavior){default:e.viewContainerRef.createComponent(f);break;case o.Ignore:break;case o.ThrowError:throw new Error(`LayoutComponentRendererSADirective: Unable to find layout component type Name: ${t.name} Package: ${t.package}`)}return}const c=s.z.create({parent:n,providers:[{provide:a.H$,useValue:i??e.scopeId??null},{provide:C.X5,useValue:r.childExtensions}]});e.ɵComponentRef=e.viewContainerRef.createComponent(r.data,{injector:c}),e.logger?.debug("LayoutComponentRendererSADirective: component rendered {@id}",{id:t?.id});const d=e.component;if(d){d.registerExtensions([...e.childExtensions?.map((n=>new n(t)))??[],...r?.extensions?.map((n=>new n(t)))??[]]);const n={};(0,l.mv)(n,"options",t.options,d.options,!0),e.logger?.debug("LayoutComponentRendererSADirective: setting options for component {@id}",{id:t?.id}),d.options=t.options,e.logger?.debug("LayoutComponentRendererSADirective: setting changes for component {@id}",{id:t?.id}),yield d.ngOnChanges?.(n),e.logger?.debug("LayoutComponentRendererSADirective: initializing component {@id}",{id:t?.id}),yield d.ngOnInit?.(),e.logger?.debug("LayoutComponentRendererSADirective: invalidating component visuals {@id}",{id:t?.id}),d.invalidateVisuals(),e.ɵComponentRef?.changeDetectorRef.markForCheck(),e.componentElementChange.next(e.ɵComponentRef?.hostView.rootNodes[0]),e.componentChange.next(e.ɵComponentRef)}}},function(){var n=this,e=arguments;return new Promise((function(o,i){var s=t.apply(n,e);function r(n){E(s,o,i,r,a,"next",n)}function a(n){E(s,o,i,r,a,"throw",n)}r(void 0)}))})()}ngOnDestroy(){this.ɵComponentRef&&(this.logger?.debug("LayoutComponentRendererSADirective: destroying component {@id}",{id:this.componentMetadata?.id,designer:this.disableTransformer}),this.ɵComponentRef?.destroy(),this.ɵComponentRef=null,this.componentChange.next(null),this.componentElementChange.next(null))}}R.ɵfac=function(n){return new(n||R)(y.Y(v.s_),y.Y(C.Vl),y.Y(C.X5,12),y.Y(a.H$,8),y.Y(p,8),y.Y(C.xM,8),y.Y(r.bZ,8))},R.ɵdir=u.lG({type:R,selectors:[["","layoutComponentRenderer",""]],inputs:{componentMetadata:["layoutComponentRenderer","componentMetadata"],customInjector:["layoutComponentRendererInjector","customInjector"],disableTransformer:["layoutComponentRendererDisableTransformer","disableTransformer"]},outputs:{componentChange:"layoutComponentRendererComponentChange",componentElementChange:"componentElementChange"},exportAs:["layoutComponentRenderer"],standalone:!0,features:[O._([{provide:C.X5,useValue:null}]),w.T]})},6433:(n,t,e)=>{e.d(t,{O:()=>s});var o=e(31331),i=e(43939);class s extends o.z{onInit(){this._applyStyling()}onOptionsChange(){this._applyStyling()}_applyStyling(){const n=this.options,t=this.element?.nativeElement.style;if(this.element){if((0,i.EN)(this.lastCssClass))for(const n of this.lastCssClass.split(" "))n&&this.element.nativeElement.classList.remove(n);if(this.lastCssClass=n?.cssClass,n?.cssClass)for(const t of n.cssClass.split(" "))t&&this.element?.nativeElement.classList.add(t)}(0,i.EN)(t)&&(n?.margin&&((0,i.EN)(n.margin.bottom)&&(t.marginBottom=n.margin.bottom),(0,i.EN)(n.margin.right)&&(t.marginRight=n.margin.right),(0,i.EN)(n.margin.top)&&(t.marginTop=n.margin.top),(0,i.EN)(n.margin.left)&&(t.marginLeft=n.margin.left)),n?.padding&&((0,i.EN)(n.padding.bottom)&&(t.paddingBottom=n.padding.bottom),(0,i.EN)(n.padding.right)&&(t.paddingRight=n.padding.right),(0,i.EN)(n.padding.top)&&(t.paddingTop=n.padding.top),(0,i.EN)(n.padding.left)&&(t.paddingLeft=n.padding.left)),n?.textStyling&&((0,i.EN)(n.textStyling.fontSize)&&(t.fontSize=n.textStyling.fontSize),(0,i.EN)(n.textStyling.fontWeight)&&(t.fontWeight=n.textStyling.fontWeight.toString())))}}},8477:(n,t,e)=>{e.d(t,{Aw:()=>a,Vl:()=>l,X5:()=>s,gM:()=>r,qO:()=>c,xM:()=>i});var o=e(40296);const i=new o.O("LAYOUT_COMPONENT_TRANSFORM"),s=new o.O("LAYOUT_COMPONENT_CHILD_EXTENSIONS"),r=new o.O("LAYOUT_COMPONENTS_MODULE_DATA_EXTRACTORS"),a=new o.O("LAYOUT_COMPONENTS_MODULE_PROVIDERS"),l=new o.O("LAYOUT_COMPONENTS_LOADER"),c=new o.O("LAYOUT_METADATA_STORAGE")},31331:(n,t,e)=>{function o(n,t,e,o,i,s,r){try{var a=n[s](r),l=a.value}catch(n){return void e(n)}a.done?t(l):Promise.resolve(l).then(o,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,s){var r=n.apply(t,e);function a(n){o(r,i,s,a,l,"next",n)}function l(n){o(r,i,s,a,l,"throw",n)}a(void 0)}))}}e.d(t,{z:()=>s});class s{constructor(n){this.metadata=n,this.initialized=!1}initialize(n,t,e){var o=this;return i((function*(){o.initialized=!0,o.injector=n,o.element=t,o.instance=e,yield o.onInit()}))()}optionsChange(n){var t=this;return i((function*(){t.options=n,t.initialized&&(yield t.onOptionsChange())}))()}destroy(){this.onDestroy()}onInit(){}onOptionsChange(){}onDestroy(){}}},14389:(n,t,e)=>{e.d(t,{LK:()=>a,XW:()=>r,mv:()=>s});var o=e(97825),i=e(13457);function s(n,t,e,o,i=!1){n[t]={currentValue:e,previousValue:o,firstChange:i,isFirstChange:()=>i}}function r(n){return{provide:i.BG,useValue:{packages:[n],packagesChange:o.C,refresh(){}},multi:!0}}function a(n){try{return JSON.parse(n)}catch{return null}}},97825:(n,t,e)=>{e.d(t,{C:()=>s});var o=e(28653),i=e(58656);const s=new o.y(i.Z)}}]);
//# sourceMappingURL=8229.chunk.8a57a0af4f79b466f993.js.map