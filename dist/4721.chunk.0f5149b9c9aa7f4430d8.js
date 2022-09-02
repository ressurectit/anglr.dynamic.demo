(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[4721],{53245:(e,t,n)=>{"use strict";n.d(t,{Y:()=>i});var r=n(46480),o=n(89952);function i(e){return{provide:o.U,useFactory:t=>new o.U(t,e),deps:[r.T0]}}},89952:(e,t,n)=>{"use strict";n.d(t,{U:()=>r});class r{constructor(e,t){this._storage=e,this._storeKey=t}setData(e,t){const n=this._storage.get(this._storeKey)??{};n[e]=t,this._storage.set(this._storeKey,n)}getData(e){return this._storage.get(this._storeKey)?.[e]??null}removeData(e){const t=this._storage.get(this._storeKey)??{};delete t[e],this._storage.set(this._storeKey,t)}getStored(){const e=this._storage.get(this._storeKey)??{};return Object.keys(e)}}},57489:(e,t,n)=>{"use strict";n.d(t,{IM:()=>E,hd:()=>P,ag:()=>L,vu:()=>A,y:()=>w,wr:()=>R});var r=n(14389),o=n(8477),i=n(71785),a=n(91861),s=n(20809),u=n(46480),c=n(11776),l=n(38327);function d(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}class f{constructor(e){this._logger=e}tryToGet(e){var t,r=this;return(t=function*(){if("handlebars-components"!==e.package)return null;try{return r._logger?.debug("HandlebarsDynamicModuleItemsProvider: trying to get item {@item}",{name:e.name,package:e.package}),yield n(349)(`./${e.name}/type`)}catch(t){r._logger?.debug("HandlebarsDynamicModuleItemsProvider: item {@item} was not found, reason: "+t,{name:e.name,package:e.package})}return null},function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(e){d(i,r,o,a,s,"next",e)}function s(e){d(i,r,o,a,s,"throw",e)}a(void 0)}))})()}}function m(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}f.ɵfac=function(e){return new(e||f)(c.LF(u.bZ,8))},f.ɵprov=l.Yz({token:f,factory:f.ɵfac});class p{constructor(e){this._logger=e}tryToGet(e){var t,r=this;return(t=function*(){try{return r._logger?.debug("HandlebarsDynamicModuleTypesProvider: trying to get types for module {@module}",{moduleName:e.package}),"handlebars-components"===e.package?yield n.e(8244).then(n.bind(n,18244)):null}catch(t){r._logger?.debug("HandlebarsDynamicModuleTypesProvider: module {@module} was not found, reason: "+t,{moduleName:e.package})}return null},function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(e){m(i,r,o,a,s,"next",e)}function s(e){m(i,r,o,a,s,"throw",e)}a(void 0)}))})()}}function g(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}p.ɵfac=function(e){return new(e||p)(c.LF(u.bZ,8))},p.ɵprov=l.Yz({token:p,factory:p.ɵfac});class v{constructor(e){this._logger=e}tryToGet(e){var t,r=this;return(t=function*(){try{return r._logger?.debug("HandlebarsDynamicModuleRelationsProvider: trying to get relations types for module {@module}",{moduleName:e.package}),"handlebars-components"===e.package?yield n.e(7393).then(n.bind(n,57393)):null}catch(t){r._logger?.debug("HandlebarsDynamicModuleRelationsProvider: module {@module} was not found, reason: "+t,{moduleName:e.package})}return null},function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(e){g(i,r,o,a,s,"next",e)}function s(e){g(i,r,o,a,s,"throw",e)}a(void 0)}))})()}}v.ɵfac=function(e){return new(e||v)(c.LF(u.bZ,8))},v.ɵprov=l.Yz({token:v,factory:v.ɵfac});const _={provide:o.Aw,useClass:f,multi:!0},y={provide:i.sc,useClass:p,multi:!0},h={provide:a.GP,useClass:v,multi:!0},O={provide:a.n7,useClass:f,multi:!0},T={provide:s.B6,useClass:f,multi:!0};function E(){return[_]}function w(){return[T]}function P(){return[_,y,(0,r.XW)("handlebars-components")]}function R(){return[h,O,(0,r.XW)("handlebars-components")]}function A(){return[...R(),...E()]}function L(){return[...E(),...w()]}},71785:(e,t,n)=>{"use strict";n.d(t,{RI:()=>y,Yh:()=>h,dB:()=>w,FX:()=>O,QT:()=>E,sc:()=>T,dK:()=>P});var r=n(40296),o=n(20350),i=n(39273),a=n(43801),s=n(13691),u=n(47098),c=n(80827),l=n(65589),d=n(73301),f=n(70983),m=n(77470),p=n(27635),g=n(61939);class v extends i.L{}v.ɵfac=function(){let e;return function(t){return(e||(e=a.n5(v)))(t||v)}}(),v.ɵcmp=s.Xp({type:v,selectors:[["input-boolean"]],features:[u.q],decls:2,vars:3,consts:[["type","checkbox",1,"properties-form-control",3,"formControl"]],template:function(e,t){1&e&&(c._U(0,"input",0),l.AL(1,"asRequired")),2&e&&d.Q("formControl",l.lc(1,1,t._control))},dependencies:[f.W,m.JJ,p.oH,g.i],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0});var _=n(21147);const y=new r.O("LAYOUT_EDITOR_PROPERTY_METADATA_PROPERTIES"),h=new r.O("LAYOUT_EDITOR_PROPERTY_TYPE_CONTROLS",{providedIn:"root",factory:()=>({inputString:o.q,inputBoolean:v,selectValue:_.f})}),O=new r.O("LAYOUT_MODULE_TYPES_DATA_EXTRACTORS"),T=new r.O("LAYOUT_MODULE_TYPES_PROVIDERS"),E=new r.O("LAYOUT_MODULE_TYPES_LOADER"),w=new r.O("LAYOUT_HISTORY_MANAGER"),P=new r.O("REFRESH_PALETTE_OBSERVABLES")},20350:(e,t,n)=>{"use strict";n.d(t,{q:()=>p});var r=n(39273),o=n(43801),i=n(13691),a=n(47098),s=n(80827),u=n(65589),c=n(73301),l=n(49280),d=n(77470),f=n(27635),m=n(61939);class p extends r.L{}p.ɵfac=function(){let e;return function(t){return(e||(e=o.n5(p)))(t||p)}}(),p.ɵcmp=i.Xp({type:p,selectors:[["input-string"]],features:[a.q],decls:2,vars:3,consts:[["type","text",1,"properties-form-control",3,"formControl"]],template:function(e,t){1&e&&(s._U(0,"input",0),u.AL(1,"asRequired")),2&e&&c.Q("formControl",u.lc(1,1,t._control))},dependencies:[l.Fj,d.JJ,f.oH,m.i],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0})},39273:(e,t,n)=>{"use strict";n.d(t,{L:()=>u});var r=n(79440),o=n(68961),i=n(13691);function a(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function s(e){a(i,r,o,s,u,"next",e)}function u(e){a(i,r,o,s,u,"throw",e)}s(void 0)}))}}class u{constructor(e){this._changeDetector=e,this._initialized=!1,this.values=[]}get control(){return this._control}set control(e){this._control=e,this._controlSet()}ngOnInit(){var e=this;return s((function*(){e._initialized||(e._initialized=!0,yield e._initialize())}))()}initialize(){var e=this;return s((function*(){yield e.ngOnInit()}))()}invalidateVisuals(){this._changeDetector.detectChanges()}_initialize(){}_controlSet(){}}u.ɵfac=function(e){return new(e||u)(r.Y(o.s))},u.ɵdir=i.lG({type:u,inputs:{control:"control",values:"values"}})},21147:(e,t,n)=>{"use strict";n.d(t,{f:()=>h});var r=n(39273),o=n(80827),i=n(73301),a=n(43801),s=n(13691),u=n(47098),c=n(65589),l=n(15686),d=n(66794),f=n(12311),m=n(24881),p=n(17790),g=n(77470),v=n(27635),_=n(61939);function y(e,t){if(1&e&&o._U(0,"option",2),2&e){const e=t.$implicit;i.Q("value",e)("text",e)}}class h extends r.L{}h.ɵfac=function(){let e;return function(t){return(e||(e=a.n5(h)))(t||h)}}(),h.ɵcmp=s.Xp({type:h,selectors:[["select-value"]],features:[u.q],decls:3,vars:4,consts:[[1,"properties-form-control",3,"formControl"],[3,"value","text",4,"ngFor","ngForOf"],[3,"value","text"]],template:function(e,t){1&e&&(o.Tg(0,"select",0),c.AL(1,"asRequired"),l.Y(2,y,1,2,"option",1),o.qZ()),2&e&&(i.Q("formControl",c.lc(1,2,t._control)),d.x(2),i.Q("ngForOf",t.values))},dependencies:[f.s,m.YN,p.Kr,m.EJ,g.JJ,v.oH,_.i],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0})},8477:(e,t,n)=>{"use strict";n.d(t,{Aw:()=>s,Vl:()=>u,X5:()=>i,gM:()=>a,qO:()=>c,xM:()=>o});var r=n(40296);const o=new r.O("LAYOUT_COMPONENT_TRANSFORM"),i=new r.O("LAYOUT_COMPONENT_CHILD_EXTENSIONS"),a=new r.O("LAYOUT_COMPONENTS_MODULE_DATA_EXTRACTORS"),s=new r.O("LAYOUT_COMPONENTS_MODULE_PROVIDERS"),u=new r.O("LAYOUT_COMPONENTS_LOADER"),c=new r.O("LAYOUT_METADATA_STORAGE")},91861:(e,t,n)=>{"use strict";n.d(t,{Bj:()=>a,DZ:()=>o,GP:()=>i,dK:()=>l,fI:()=>c,n7:()=>u,nR:()=>d,yh:()=>s});var r=n(40296);const o=new r.O("RELATIONS_MODULE_TYPES_DATA_EXTRACTORS"),i=new r.O("RELATIONS_MODULE_TYPES_PROVIDERS"),a=new r.O("RELATIONS_MODULE_TYPES_LOADER"),s=new r.O("RELATIONS_NODES_DATA_EXTRACTORS"),u=new r.O("RELATIONS_NODES_PROVIDERS"),c=new r.O("RELATIONS_NODES_LOADER"),l=new r.O("REFRESH_PALETTE_OBSERVABLES"),d=new r.O("RELATIONS_HISTORY_MANAGER")},44677:(e,t,n)=>{"use strict";n.d(t,{L:()=>o});var r=n(43939);const o=(e,t)=>{const n=e;return t?.debug("defaultExportExtractor: trying to extract default dynamic data"),(0,r.EN)(n.default)?{data:n.default}:null}},14389:(e,t,n)=>{"use strict";n.d(t,{LK:()=>s,XW:()=>a,mv:()=>i});var r=n(97825),o=n(13457);function i(e,t,n,r,o=!1){e[t]={currentValue:n,previousValue:r,firstChange:o,isFirstChange:()=>o}}function a(e){return{provide:o.B,useValue:{packages:[e],packagesChange:r.C,refresh(){}},multi:!0}}function s(e){try{return JSON.parse(e)}catch{return null}}},22804:(e,t,n)=>{"use strict";n.d(t,{I:()=>r});class r{constructor(e){this.getMetadataFn=e}getMetadata(e){return this.getMetadataFn(e)}}},99043:(e,t,n)=>{"use strict";n.d(t,{Yj:()=>E,gJ:()=>P,qN:()=>L,Rn:()=>A,fm:()=>w,eh:()=>R});var r=n(14389),o=n(8477),i=n(71785),a=n(20809),s=n(91861),u=n(46480),c=n(11776),l=n(38327);function d(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}class f{constructor(e){this._logger=e}tryToGet(e){var t,r=this;return(t=function*(){if("tinymce-components"!==e.package)return null;try{return r._logger?.debug("TinyMceDynamicModuleItemsProvider: trying to get item {@item}",{name:e.name,package:e.package}),yield n(49705)(`./${e.name}/type`)}catch(t){r._logger?.debug("TinyMceDynamicModuleItemsProvider: item {@item} was not found, reason: "+t,{name:e.name,package:e.package})}return null},function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(e){d(i,r,o,a,s,"next",e)}function s(e){d(i,r,o,a,s,"throw",e)}a(void 0)}))})()}}function m(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}f.ɵfac=function(e){return new(e||f)(c.LF(u.bZ,8))},f.ɵprov=l.Yz({token:f,factory:f.ɵfac});class p{constructor(e){this._logger=e}tryToGet(e){var t,r=this;return(t=function*(){try{return r._logger?.debug("TinyMceDynamicModuleTypesProvider: trying to get types for module {@module}",{moduleName:e.package}),"tinymce-components"===e.package?yield n.e(330).then(n.bind(n,30330)):null}catch(t){r._logger?.debug("TinyMceDynamicModuleTypesProvider: module {@module} was not found, reason: "+t,{moduleName:e.package})}return null},function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(e){m(i,r,o,a,s,"next",e)}function s(e){m(i,r,o,a,s,"throw",e)}a(void 0)}))})()}}function g(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}p.ɵfac=function(e){return new(e||p)(c.LF(u.bZ,8))},p.ɵprov=l.Yz({token:p,factory:p.ɵfac});class v{constructor(e){this._logger=e}tryToGet(e){var t,r=this;return(t=function*(){try{return r._logger?.debug("TinyMceDynamicModuleRelationsProvider: trying to get relations types for module {@module}",{moduleName:e.package}),"tinymce-components"===e.package?yield n.e(7541).then(n.bind(n,97541)):null}catch(t){r._logger?.debug("TinyMceDynamicModuleRelationsProvider: module {@module} was not found, reason: "+t,{moduleName:e.package})}return null},function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(e){g(i,r,o,a,s,"next",e)}function s(e){g(i,r,o,a,s,"throw",e)}a(void 0)}))})()}}v.ɵfac=function(e){return new(e||v)(c.LF(u.bZ,8))},v.ɵprov=l.Yz({token:v,factory:v.ɵfac});const _={provide:o.Aw,useClass:f,multi:!0},y={provide:i.sc,useClass:p,multi:!0},h={provide:s.GP,useClass:v,multi:!0},O={provide:s.n7,useClass:f,multi:!0},T={provide:a.B6,useClass:f,multi:!0};function E(){return[_]}function w(){return[T]}function P(){return[_,y,(0,r.XW)("tinymce-components")]}function R(){return[h,O,(0,r.XW)("tinymce-components")]}function A(){return[...R(),...E()]}function L(){return[...E(),...w()]}},349:(e,t,n)=>{var r={"./dataBlock/type":[52402,8033,2402],"./dataTemplate/type":[57990,8033,7990]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=349,e.exports=o},49705:(e,t,n)=>{var r={"./richTextBlock/type":[31439,1439],"./richTextSource/type":[1240,1240]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=49705,e.exports=o}}]);
//# sourceMappingURL=4721.chunk.0f5149b9c9aa7f4430d8.js.map