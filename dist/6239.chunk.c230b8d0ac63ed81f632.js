(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[6239],{78391:(e,t,n)=>{var o={"./button/type":[4999,4999],"./gridPanel/type":[28229,8229],"./gridPanelCell/type":[24229,4229],"./htmlBlock/type":[57195,7195],"./ifBlock/type":[23234,3234],"./negation/type":[82937,2937],"./rest/type":[97496,7496],"./sampleChange/type":[37243,7243],"./sampleSource/type":[36736,6736],"./stackPanel/type":[54335,4335],"./textBlock/type":[88127,8127],"./toggleButton/type":[77964,7964]};function r(e){if(!n.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return n.e(t[1]).then((()=>n(r)))}r.keys=()=>Object.keys(o),r.id=78391,e.exports=r},24405:(e,t,n)=>{var o={"./styleBlock/type":[92030,278,7412]};function r(e){if(!n.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(r)))}r.keys=()=>Object.keys(o),r.id=24405,e.exports=r},56179:(e,t,n)=>{"use strict";n.d(t,{I3:()=>g,vQ:()=>f,El:()=>h});var o=n(8477),r=n(71785),a=n(46480),i=n(11776),s=n(38327);function c(e,t,n,o,r,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(o,r)}class u{constructor(e){this._logger=e}tryToGet(e){var t,o=this;return(t=function*(){if("css-components"!==e.package)return null;try{return o._logger?.debug("CssDynamicModuleItemsProvider: trying to get item {@item}",{name:e.name,package:e.package}),yield n(24405)(`./${e.name}/type`)}catch(t){o._logger?.debug("CssDynamicModuleItemsProvider: item {@item} was not found, reason: "+t,{name:e.name,package:e.package})}return null},function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function i(e){c(a,o,r,i,s,"next",e)}function s(e){c(a,o,r,i,s,"throw",e)}i(void 0)}))})()}}function l(e,t,n,o,r,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(o,r)}u.ɵfac=function(e){return new(e||u)(i.LF(a.bZ,8))},u.ɵprov=s.Yz({token:u,factory:u.ɵfac});class d{constructor(e){this._logger=e}tryToGet(e){var t,o=this;return(t=function*(){try{return o._logger?.debug("CssDynamicModuleTypesProvider: trying to get types for module {@module}",{moduleName:e.package}),"css-components"===e.package?yield n.e(5416).then(n.bind(n,85416)):null}catch(t){o._logger?.debug("CssDynamicModuleTypesProvider: module {@module} was not found, reason: "+t,{moduleName:e.package})}return null},function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function i(e){l(a,o,r,i,s,"next",e)}function s(e){l(a,o,r,i,s,"throw",e)}i(void 0)}))})()}}d.ɵfac=function(e){return new(e||d)(i.LF(a.bZ,8))},d.ɵprov=s.Yz({token:d,factory:d.ɵfac});const m={provide:o.Aw,useClass:u,multi:!0},p={provide:r.sc,useClass:d,multi:!0};function g(){return[m]}function f(){return[m,p]}function h(){return[...g()]}},53245:(e,t,n)=>{"use strict";n.d(t,{Y:()=>a});var o=n(46480),r=n(89952);function a(e){return{provide:r.U,useFactory:t=>new r.U(t,e),deps:[o.T0]}}},57069:(e,t,n)=>{"use strict";n.r(t),n.d(t,{LayoutModule:()=>N});var o=n(14392),r=n(27052),a=n(68624),i=n(89001),s=n(35648),c=n(99109),u=n(56179),l=n(99043),d=n(57489),m=n(37943),p=n(15467),g=n(70625),f=n(94761),h=n(89952),v=n(80827),y=n(73301),_=n(79440),w=n(13691),x=n(15686),b=n(4477),k=n(66794),C=n(12311),D=n(77470),P=n(27635),R=n(4489),T=n(68965),I=n(31686),E=n(60405);function F(e,t){if(1&e&&v._U(0,"ng-option",5),2&e){const e=t.$implicit;y.Q("value",e)("text",e)}}let A=class{constructor(e,t,n){this._store=e,this._router=t,this._route=n,this._available=new g.NI(""),this._metadata=null,this._availableNames=[]}ngOnInit(){this._availableNames=this._store.getStored(),this._route.params.subscribe((({id:e})=>{e&&(this._available.setValue(e),this._metadata=this._store.getData(e)),this._available.valueChanges.subscribe((e=>{this._router.navigate(["/layout/preview",e],{skipLocationChange:!1,replaceUrl:!0})}))}))}ngOnDestroy(){}};A.ɵfac=function(e){return new(e||A)(_.Y(h.U),_.Y(m.F0),_.Y(p.gz))},A.ɵcmp=w.Xp({type:A,selectors:[["layout-preview-view"]],decls:6,vars:3,consts:[[3,"formControl"],[3,"value","text",4,"ngFor","ngForOf"],[1,"flex-row","margin-top-big","flex-1"],[1,"flex-1","overflow-vertical-scroll"],[3,"layoutComponentRenderer"],[3,"value","text"]],template:function(e,t){1&e&&(v.Tg(0,"div")(1,"ng-select",0),x.Y(2,F,1,2,"ng-option",1),v.qZ()(),v.Tg(3,"div",2)(4,"div",3),b.Gk(5,4),v.qZ()()),2&e&&(k.x(1),y.Q("formControl",t._available),k.x(1),y.Q("ngForOf",t._availableNames),k.x(3),y.Q("layoutComponentRenderer",t._metadata))},dependencies:[C.s,D.JJ,P.oH,R.x,T.w,I.v,E.i],encapsulation:2,changeDetection:0}),A=(0,o.gn)([(0,f.N)({path:"preview"}),(0,f.N)({path:"preview/:id"}),(0,o.w6)("design:paramtypes",[h.U,m.F0,p.gz])],A);const M=[A];var L=n(53245),O=n(38327);let N=class{};N.ɵfac=function(e){return new(e||N)},N.ɵmod=w.oA({type:N}),N.ɵinj=O.cJ({providers:[(0,L.Y)("LAYOUT_DATA"),(0,u.I3)(),(0,l.Yj)(),(0,d.IM)()],imports:[r.e,a.U,s.A,c.u.withProviders()]}),N=(0,o.gn)([(0,i.P)(M)],N)},60405:(e,t,n)=>{"use strict";n.d(t,{i:()=>k});var o,r=n(74445),a=n(95176),i=n(46480),s=n(14389),c=n(49891),u=n(87606),l=n(43939);!function(e){e[e.ShowNotFound=0]="ShowNotFound",e[e.Ignore=1]="Ignore",e[e.ThrowError=2]="ThrowError"}(o||(o={}));class d{constructor(e){this.missingTypeBehavior=o.ShowNotFound,(0,l.EN)(e)&&(this.missingTypeBehavior=e)}}var m=n(13691),p=n(82568),g=n(80827),f=n(41853);class h{}h.ɵfac=function(e){return new(e||h)},h.ɵcmp=m.Xp({type:h,selectors:[["not-found-layout-type"]],standalone:!0,features:[p.j],decls:5,vars:0,consts:[[1,"fas","fa-minus-circle"]],template:function(e,t){1&e&&(g.Tg(0,"div"),g._U(1,"span",0),g.Tg(2,"span"),f._(3,"NOT FOUND"),g.qZ(),g._U(4,"span",0),g.qZ())},styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0});var v=n(8477),y=n(79440),_=n(15783),w=n(73379),x=n(36973);function b(e,t,n,o,r,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(o,r)}class k{constructor(e,t,n,o,a,i){this._viewContainerRef=e,this._loader=t,this._childExtensions=n,this._options=o,this._metadataTransformer=a,this._logger=i,this._componentRef=null,this.componentMetadata=null,this.disableTransformer=!1,this.componentChange=new r.v,this._options&&this._options instanceof d||(this._options=new d)}get component(){return this._componentRef?this._componentRef.instance:null}get componentRef(){return this._componentRef}ngOnChanges(e){var t,n=this;return(t=function*(){if(n._logger?.debug("LayoutComponentRendererSADirective: rendering component {@id}",{id:n.componentMetadata?.id}),n.ngOnDestroy(),n._viewContainerRef.clear(),(0,c.$)("componentMetadata")in e&&n.componentMetadata){const e=n.customInjector??n._viewContainerRef.injector;let t=n.componentMetadata;n._metadataTransformer&&!n.disableTransformer&&(t=n._metadataTransformer(n.componentMetadata,e));const r=yield n._loader.loadItem(t);if(!r){switch(n._logger?.warn("LayoutComponentRendererSADirective: Unable to find layout component type {@type}",{name:t.name,package:t.package}),n._options?.missingTypeBehavior){default:n._viewContainerRef.createComponent(h);break;case o.Ignore:break;case o.ThrowError:throw new Error(`LayoutComponentRendererSADirective: Unable to find layout component type Name: ${t.name} Package: ${t.package}`)}return}const i=a.z.create({parent:e,providers:[{provide:v.X5,useValue:r.childExtensions}]});n._componentRef=n._viewContainerRef.createComponent(r.data,{injector:i}),n._logger?.debug("LayoutComponentRendererSADirective: component rendered {@id}",{id:t?.id});const c=n.component;if(c){c.registerExtensions([...n._childExtensions?.map((e=>new e(t)))??[],...r?.extensions?.map((e=>new e(t)))??[]]);const e={};(0,s.m)(e,"options",t.options,c.options,!0),n._logger?.debug("LayoutComponentRendererSADirective: setting options for component {@id}",{id:t?.id}),c.options=t.options,n._logger?.debug("LayoutComponentRendererSADirective: setting changes for component {@id}",{id:t?.id}),yield(0,u.K)(c.ngOnChanges?.(e)),n._logger?.debug("LayoutComponentRendererSADirective: initializing component {@id}",{id:t?.id}),yield(0,u.K)(c.ngOnInit?.()),n._logger?.debug("LayoutComponentRendererSADirective: invalidating component visuals {@id}",{id:t?.id}),c.invalidateVisuals(),n._componentRef?.changeDetectorRef.markForCheck(),n.componentChange.next(n._componentRef)}}},function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function i(e){b(a,o,r,i,s,"next",e)}function s(e){b(a,o,r,i,s,"throw",e)}i(void 0)}))})()}ngOnDestroy(){this._componentRef&&(this._logger?.debug("LayoutComponentRendererSADirective: destroying component {@id}",{id:this.componentMetadata?.id,designer:this.disableTransformer}),this._componentRef?.destroy(),this._componentRef=null,this.componentChange.next(null))}}k.ɵfac=function(e){return new(e||k)(y.Y(_.s_),y.Y(v.Vl),y.Y(v.X5,12),y.Y(d,8),y.Y(v.xM,8),y.Y(i.bZ,8))},k.ɵdir=m.lG({type:k,selectors:[["","layoutComponentRenderer",""]],inputs:{componentMetadata:["layoutComponentRenderer","componentMetadata"],customInjector:["layoutComponentRendererInjector","customInjector"],disableTransformer:["layoutComponentRendererDisableTransformer","disableTransformer"]},outputs:{componentChange:"layoutComponentRendererComponentChange"},exportAs:["layoutComponentRenderer"],standalone:!0,features:[w._([{provide:v.X5,useValue:null}]),x.T]})},2991:(e,t,n)=>{"use strict";n.d(t,{h:()=>h,_:()=>v});var o=n(43939),r=n(60640),a=n(11776),i=n(46480),s=n(86707),c=n(65569),u=n(44677),l=n(9142),d=n(12193),m=n(8477);const p={provide:m.Aw,useClass:s.o,multi:!0},g={provide:m.gM,useFactory:e=>new c.$([u.L,l.k],e),deps:[[new r.Fi,i.bZ]],multi:!0},f={provide:m.Vl,useFactory:()=>new d.S((0,a.f3)(m.Aw),(0,a.f3)(m.gM),h,(0,a.f3)(i.bZ,{optional:!0})??void 0)},h=function(e){return!((0,o.fp)(e?.data)||!(0,o.P9)(e.data)||(0,o.EN)(e?.childExtensions)&&(!Array.isArray(e.childExtensions)||e.childExtensions.some((e=>!(0,o.P9)(e))))||(0,o.EN)(e?.extensions)&&(!Array.isArray(e.extensions)||e.extensions.some((e=>!(0,o.P9)(e)))))};function v(){return[f,p,g]}},99109:(e,t,n)=>{"use strict";n.d(t,{u:()=>i});var o=n(2991),r=n(13691),a=n(38327);class i{static withProviders(){return{ngModule:i,providers:[(0,o._)()]}}}i.ɵfac=function(e){return new(e||i)},i.ɵmod=r.oA({type:i}),i.ɵinj=a.cJ({})},9142:(e,t,n)=>{"use strict";n.d(t,{k:()=>r});var o=n(43939);const r=(e,t)=>{const n=e,r=n.extensions;return t?.debug("extensionsExportsExtractor: trying to extract dynamic item extensions"),r&&(0,o.wV)(r)&&(r.extensions||r.childExtensions)?{extensions:r.extensions,childExtensions:r.childExtensions}:n.childExtensions||n.extensions?{extensions:n.extensions,childExtensions:n.childExtensions}:null}},86707:(e,t,n)=>{"use strict";n.d(t,{o:()=>s});var o=n(46480),r=n(11776),a=n(38327);function i(e,t,n,o,r,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(o,r)}class s{constructor(e){this._logger=e}tryToGet(e){var t,o=this;return(t=function*(){switch(e.package){case"basic-components":try{return o._logger?.debug("DefaultDynamicModuleItemsProvider: trying to get item {@item}",{name:e.name,package:e.package}),yield n(78391)(`./${e.name}/type`)}catch(t){o._logger?.debug("DefaultDynamicModuleItemsProvider: item {@item} was not found, reason: "+t,{name:e.name,package:e.package})}break;case"material-components":try{return o._logger?.debug("DefaultDynamicModuleItemsProvider: trying to get item {@item}",{name:e.name,package:e.package}),yield n(15033)(`./${e.name}/type`)}catch(t){o._logger?.debug("DefaultDynamicModuleItemsProvider: item {@item} was not found, reason: "+t,{name:e.name,package:e.package})}break;default:return null}return null},function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function s(e){i(a,o,r,s,c,"next",e)}function c(e){i(a,o,r,s,c,"throw",e)}s(void 0)}))})()}}s.ɵfac=function(e){return new(e||s)(r.LF(o.bZ,8))},s.ɵprov=a.Yz({token:s,factory:s.ɵfac})},12193:(e,t,n)=>{"use strict";n.d(t,{S:()=>a});var o=n(87606);function r(e,t,n,o,r,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(o,r)}class a{constructor(e,t,n,o,r){this.providers=e,this.extractors=t,this.validatorFn=n,this.logger=o,this.noCache=r,this.cachedDynamicItems={},Array.isArray(this.providers)||(this.logger?.error("DynamicItemLoader: missing providers!"),this.providers=[]),Array.isArray(this.extractors)||(this.logger?.error("DynamicItemLoader: missing extractors!"),this.extractors=[])}loadItem(e){var t,n=this;return(t=function*(){let t=null;const r=`${e.package}-${e.name}`;if(r in n.cachedDynamicItems&&!n.noCache)return n.logger?.verbose("DynamicItemLoader: Loading from cache {@source}",{name:e.name,package:e.package}),n.cachedDynamicItems[r];for(const r of n.providers){const n=r.tryToGet(e);if(t=n?yield(0,o.K)(n):null,t)break}if(!t)return n.logger?.debug("DynamicItemLoader: Failed to get dynamic module {@source}",{name:e.name,package:e.package}),null;for(const o of n.extractors){const a=yield o.tryToExtract(t);if(a)return n.cachedDynamicItems[r]=n.validatorFn(a)?a:null,n.cachedDynamicItems[r]||n.logger?.warn("DynamicItemLoader: Found dynamic item {@source} is not of requested type",{name:e.name,package:e.package}),n.cachedDynamicItems[r]}return n.logger?.debug("DynamicItemLoader: Failed to extract dynamic item {@source}",{name:e.name,package:e.package}),n.cachedDynamicItems[r]=null,null},function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function s(e){r(i,o,a,s,c,"next",e)}function c(e){r(i,o,a,s,c,"throw",e)}s(void 0)}))})()}}},65569:(e,t,n)=>{"use strict";n.d(t,{$:()=>s});var o=n(57466),r=n(87606),a=n(43939);function i(e,t,n,o,r,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(o,r)}class s{constructor(e,t){this._extractorFunctions=e,this._logger=t,Array.isArray(this._extractorFunctions)||(this._logger?.error("DynamicModuleDataExtractor: missing extractor functions!"),this._extractorFunctions=[])}tryToExtract(e){var t,n=this;return(t=function*(){const t={};for(const a of n._extractorFunctions)(0,o.l7)(!0,t,yield(0,r.K)(a(e,n._logger)));return(0,a.Qr)(t)?null:t},function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function s(e){i(a,o,r,s,c,"next",e)}function c(e){i(a,o,r,s,c,"throw",e)}s(void 0)}))})()}}},15033:(e,t,n)=>{var o={"./checkbox/type":[67309,294,7309],"./datepicker/type":[2229,3167,9101,4262,6038,2229],"./numberField/type":[39310,3167,4262,9310],"./period/type":[40059,3167,4262,59],"./radio/type":[84978,5613,4978],"./select/type":[68235,3167,5887,8235],"./textField/type":[98865,3167,4262,8865],"./textarea/type":[18226,3167,4262,8226]};function r(e){if(!n.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(r)))}r.keys=()=>Object.keys(o),r.id=15033,e.exports=r},94761:(e,t,n)=>{"use strict";n.d(t,{N:()=>r});var o=n(43939);function r(e){return function(t){const n=e;n.component=t;const r=t;return(0,o.fp)(r.routeValues)&&Object.defineProperty(t,"routeValues",{enumerable:!0,configurable:!1,writable:!1,value:[]}),r.routeValues.push(n),t}}},61939:(e,t,n)=>{"use strict";n.d(t,{i:()=>r});var o=n(13691);class r{transform(e,t,n){return e??t}}r.ɵfac=function(e){return new(e||r)},r.ɵpipe=o.Yj({name:"asRequired",type:r,pure:!0})},87606:(e,t,n)=>{"use strict";function o(e,t,n,o,r,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(o,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){o(i,r,a,s,c,"next",e)}function c(e){o(i,r,a,s,c,"throw",e)}s(void 0)}))}}function a(e){return i.apply(this,arguments)}function i(){return(i=r((function*(e){return e instanceof Promise?yield e:e}))).apply(this,arguments)}n.d(t,{K:()=>a})}}]);
//# sourceMappingURL=6239.chunk.c230b8d0ac63ed81f632.js.map