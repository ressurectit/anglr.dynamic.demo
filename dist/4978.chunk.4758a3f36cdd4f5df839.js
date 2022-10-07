(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[4978,5175],{43490:(t,e,n)=>{"use strict";n.d(e,{B:()=>y});var o=n(2032),r=n(70625),i=n(91795),s=n(53633),a=n(46480),u=n(36759),l=n(79898),c=n(38937),d=n(30688),m=n(79440),p=n(68961),h=n(4905),f=n(95176),g=n(77842),v=n(47098);class y extends s.h{constructor(t,e,n,o,i){super(t,e,n,i),this._parentControl=o,this.control=new r.NI}set value(t){const e=this.value;this.valueOutput=t,t!==e&&this.control?.patchValue(t)}get value(){return this.valueOutput}set required(t){this._required=t,!0!==t?this.control?.removeValidators(i.kI.required):this.control?.addValidators(i.kI.required)}get required(){return this._required}set disabled(t){this._disabled=t,!0!==t?this.control?.enable():this.control?.disable()}get disabled(){return this._disabled}onOptionsSet(){this.options&&(this.controlSubscription?.unsubscribe(),this.controlSubscription=null,this.control=this._getFormControl(this.options?.controlName,this._parentControl,c.Z.FormControl,this.value),this._registerValidations(),this.controlSubscription=this.control?.valueChanges?.subscribe((t=>{this.valueOutput=t})))}_registerValidations(){}_getFormControl(t,e,n=c.Z.FormControl,o){let r=(0,d.sx)(t,e,n,o);return r||(this.logger?.warn("FormComponentBase: Unable to find control with name {@name}",{name:t}),r=(0,d.Wm)(n,o)),this.required&&r.addValidators(i.kI.required),this.disabled&&r.disable(),r}}y.ɵfac=function(t){return new(t||y)(m.Y(p.s),m.Y(h.SB),m.Y(f.z),m.Y(l.O,8),m.Y(a.bZ,8))},y.ɵdir=g.lG({type:y,inputs:{value:"value",required:"required",disabled:"disabled"},features:[v.q]}),(0,o.gn)([(0,u.A)(),(0,o.w6)("design:type",Object)],y.prototype,"valueOutput",void 0)},38937:(t,e,n)=>{"use strict";var o;n.d(e,{Z:()=>o}),function(t){t.FormControl="FormControl",t.FormArray="FormArray",t.FormGroup="FormGroup"}(o||(o={}))},79898:(t,e,n)=>{"use strict";n.d(e,{O:()=>o});const o=new(n(40296).O)("FORM_COMPONENT_CONTROL")},30688:(t,e,n)=>{"use strict";n.d(e,{Wm:()=>M,sx:()=>S,Hh:()=>F,iS:()=>k,I1:()=>N,pS:()=>E});var o=n(66398),r=n(17777),i=n(70625),s=n(14389),a=n(8477),u=n(71785),l=n(91861),c=n(20809),d=n(46480),m=n(11776),p=n(38327);function h(t,e,n,o,r,i,s){try{var a=t[i](s),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(o,r)}class f{constructor(t){this._logger=t}tryToGet(t){var e,o=this;return(e=function*(){if("form-components"!==t.package)return null;try{return o._logger?.debug("FormDynamicModuleItemsProvider: trying to get item {@item}",{name:t.name,package:t.package}),yield n(54384)(`./${t.name}/type`)}catch(e){o._logger?.debug("FormDynamicModuleItemsProvider: item {@item} was not found, reason: "+e,{name:t.name,package:t.package})}return null},function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function s(t){h(i,o,r,s,a,"next",t)}function a(t){h(i,o,r,s,a,"throw",t)}s(void 0)}))})()}}function g(t,e,n,o,r,i,s){try{var a=t[i](s),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(o,r)}f.ɵfac=function(t){return new(t||f)(m.LF(d.bZ,8))},f.ɵprov=p.Yz({token:f,factory:f.ɵfac});class v{constructor(t){this._logger=t}tryToGet(t){var e,o=this;return(e=function*(){try{return o._logger?.debug("FormDynamicModuleTypesProvider: trying to get types for module {@module}",{moduleName:t.package}),"form-components"===t.package?yield n.e(6311).then(n.bind(n,16311)):null}catch(e){o._logger?.debug("FormDynamicModuleTypesProvider: module {@module} was not found, reason: "+e,{moduleName:t.package})}return null},function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function s(t){g(i,o,r,s,a,"next",t)}function a(t){g(i,o,r,s,a,"throw",t)}s(void 0)}))})()}}function y(t,e,n,o,r,i,s){try{var a=t[i](s),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(o,r)}v.ɵfac=function(t){return new(t||v)(m.LF(d.bZ,8))},v.ɵprov=p.Yz({token:v,factory:v.ɵfac});class C{constructor(t){this._logger=t}tryToGet(t){var e,o=this;return(e=function*(){try{return o._logger?.debug("FormDynamicModuleRelationsProvider: trying to get relations types for module {@module}",{moduleName:t.package}),"form-components"===t.package?yield n.e(5737).then(n.bind(n,75737)):null}catch(e){o._logger?.debug("FormDynamicModuleRelationsProvider: module {@module} was not found, reason: "+e,{moduleName:t.package})}return null},function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function s(t){y(i,o,r,s,a,"next",t)}function a(t){y(i,o,r,s,a,"throw",t)}s(void 0)}))})()}}C.ɵfac=function(t){return new(t||C)(m.LF(d.bZ,8))},C.ɵprov=p.Yz({token:C,factory:C.ɵfac});const b={provide:a.Aw,useClass:f,multi:!0},w={provide:u.sc,useClass:v,multi:!0},O={provide:l.GP,useClass:C,multi:!0},P={provide:l.n7,useClass:f,multi:!0},x={provide:c.B6,useClass:f,multi:!0};var _=n(38937);function F(){return[b]}function k(){return[b,w,(0,s.XW)("form-components")]}function E(){return[O,P,(0,s.XW)("form-components"),...F()]}function N(){return[...F(),x]}function S(t,e,n=_.Z.FormControl,o){return e&&t?e.get(t)??M(n,o):M(n,o)}function M(t,e){switch(t){case _.Z.FormArray:return new o.Oe([]);case _.Z.FormGroup:return new r.cw(e??{});default:return new i.NI(e)}}},23657:(t,e,n)=>{"use strict";n.d(e,{w:()=>r});var o=n(22206);function r(t){return(0,o.R)(t,"layoutEditorMetadata")}},53633:(t,e,n)=>{"use strict";n.d(e,{h:()=>h});var o=n(46480),r=n(49891),i=n(43939),s=n(79440),a=n(68961),u=n(4905),l=n(95176),c=n(77842),d=n(36973);function m(t,e,n,o,r,i,s){try{var a=t[i](s),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(o,r)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function s(t){m(i,o,r,s,a,"next",t)}function a(t){m(i,o,r,s,a,"throw",t)}s(void 0)}))}}class h{constructor(t,e,n,o){this.changeDetector=t,this.componentElement=e,this.injector=n,this.logger=o,this.extensions=[],this.initialized=!1,this.destroyed=!1}get element(){return this.componentElement}get extensionsOptions(){return this.options}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const t of this.extensions)t.destroy();this.onDestroy()}}ngOnInit(){var t=this;return p((function*(){if(t.initialized)return;t.initialized=!0;const e=t.extensionsOptions;if(yield t.onInit(),yield t.onOptionsSet(),e)for(const e of t.extensions)yield e.initialize(t.injector,t.element,t);yield t.afterInit()}))()}ngOnChanges(t){var e=this;return p((function*(){if((0,r.$)("options")in t){yield e.onOptionsSet();const t=e.extensionsOptions;if(t)for(const n of e.extensions)yield n.optionsChange(t);if(!e.initialized)return;yield e.onOptionsChange()}delete t[(0,r.$)("options")],(0,i.Qr)(t)||e.onChanges(t)}))()}registerExtensions(t){this.extensions=t}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(t){}onOptionsSet(){}onDestroy(){}}h.ɵfac=function(t){return new(t||h)(s.Y(a.s),s.Y(u.SB),s.Y(l.z),s.Y(o.bZ,8))},h.ɵdir=c.lG({type:h,features:[d.T]})},6433:(t,e,n)=>{"use strict";n.d(e,{O:()=>i});var o=n(31331),r=n(43939);class i extends o.z{onInit(){this._applyStyling()}onOptionsChange(){this._applyStyling()}_applyStyling(){const t=this.options,e=this.element?.nativeElement.style;if(this.element){if((0,r.EN)(this.lastCssClass))for(const t of this.lastCssClass.split(" "))t&&this.element.nativeElement.classList.remove(t);if(this.lastCssClass=t?.cssClass,t?.cssClass)for(const e of t.cssClass.split(" "))e&&this.element?.nativeElement.classList.add(e)}(0,r.EN)(e)&&(t?.margin&&((0,r.EN)(t.margin.bottom)&&(e.marginBottom=t.margin.bottom),(0,r.EN)(t.margin.right)&&(e.marginRight=t.margin.right),(0,r.EN)(t.margin.top)&&(e.marginTop=t.margin.top),(0,r.EN)(t.margin.left)&&(e.marginLeft=t.margin.left)),t?.padding&&((0,r.EN)(t.padding.bottom)&&(e.paddingBottom=t.padding.bottom),(0,r.EN)(t.padding.right)&&(e.paddingRight=t.padding.right),(0,r.EN)(t.padding.top)&&(e.paddingTop=t.padding.top),(0,r.EN)(t.padding.left)&&(e.paddingLeft=t.padding.left)),t?.textStyling&&((0,r.EN)(t.textStyling.fontSize)&&(e.fontSize=t.textStyling.fontSize),(0,r.EN)(t.textStyling.fontWeight)&&(e.fontWeight=t.textStyling.fontWeight.toString())))}}},84978:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>D,extensions:()=>I});var o=n(6433),r=n(22607),i=n(2032),s=n(48659),a=n(78927),u=n(23657),l=n(5348),c=n(77880),d=n(43490),m=n(6552);function p(t,e,n,o,r,i,s){try{var a=t[i](s),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(o,r)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function s(t){p(i,o,r,s,a,"next",t)}function a(t){p(i,o,r,s,a,"throw",t)}s(void 0)}))}}const f=function(){var t=h((function*(){return new((yield Promise.all([n.e(6583),n.e(9901),n.e(6023)]).then(n.bind(n,68967))).MaterialRadioLayoutEditorMetadata)}));return function(){return t.apply(this,arguments)}}(),g=function(){var t=h((function*(){return new((yield Promise.all([n.e(4623),n.e(9360),n.e(9678),n.e(8745),n.e(1608)]).then(n.bind(n,28120))).MaterialRadioRelationsEditorMetadata)}));return function(){return t.apply(this,arguments)}}();var v=n(43801),y=n(77842),C=n(47098),b=n(82568),w=n(80827),O=n(65589),P=n(41853),x=n(73301),_=n(66794),F=n(6427),k=n(9204),E=n(61939),N=n(77470),S=n(27635),M=n(7182);let z=class extends d.B{};z.ɵfac=function(){let t;return function(e){return(t||(t=v.n5(z)))(e||z)}}(),z.ɵcmp=y.Xp({type:z,selectors:[["material-radio"]],standalone:!0,features:[C.q,b.j],decls:5,vars:6,consts:[[3,"formControl"],["value","1"]],template:function(t,e){1&t&&(w.Tg(0,"mat-radio-group",0),O.AL(1,"asRequired"),O.AL(2,"asFormControl"),w.Tg(3,"mat-radio-button",1),P._(4),w.qZ()()),2&t&&(x.Q("formControl",O.lc(1,2,O.lc(2,4,e.control))),_.x(4),F.Oq(null==e.options?null:e.options.options))},dependencies:[c.j,k.j,l.A,E.i,s.U,N.JJ,S.oH,a.F,M.VQ,M.U0],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0}),z=(0,i.gn)([(0,m.i)(g),(0,u.w)(f)],z);const D=z,I=[o.O,r.i]},22607:(t,e,n)=>{"use strict";n.d(e,{i:()=>a});var o=n(31331),r=n(67626),i=n(86485);function s(t,e,n,o,r,i,s){try{var a=t[i](s),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(o,r)}class a extends o.z{constructor(){super(...arguments),this.relationsProcessor=null,this.componentManager=null}onInit(){var t,e=this;return(t=function*(){e.injector&&e.metadata&&e.instance&&(e.relationsProcessor??(e.relationsProcessor=e.injector.get(r.v,null)),e.componentManager??(e.componentManager=e.injector.get(i.s,null)),e.relationsProcessor&&e.componentManager&&(e.componentManager.registerComponent(e.metadata.id,e.instance),yield e.relationsProcessor.initialized,e.relationsProcessor.updateRelations(e.metadata.id)))},function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){s(i,o,r,a,u,"next",t)}function u(t){s(i,o,r,a,u,"throw",t)}a(void 0)}))})()}onDestroy(){this.relationsProcessor&&this.componentManager&&this.metadata&&(this.relationsProcessor.destroyComponent(this.metadata.id),this.componentManager.unregisterComponent(this.metadata.id))}}},31331:(t,e,n)=>{"use strict";function o(t,e,n,o,r,i,s){try{var a=t[i](s),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(o,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var s=t.apply(e,n);function a(t){o(s,r,i,a,u,"next",t)}function u(t){o(s,r,i,a,u,"throw",t)}a(void 0)}))}}n.d(e,{z:()=>i});class i{constructor(t){this.metadata=t,this.initialized=!1}initialize(t,e,n){var o=this;return r((function*(){o.initialized=!0,o.injector=t,o.element=e,o.instance=n,yield o.onInit()}))()}optionsChange(t){var e=this;return r((function*(){e.options=t,e.initialized&&(yield e.onOptionsChange())}))()}destroy(){this.onDestroy()}onInit(){}onOptionsChange(){}onDestroy(){}}},54384:(t,e,n)=>{var o={"./checkbox/type":[34757,4757],"./datepicker/type":[96425,6425],"./formGroup/type":[70613,613],"./numberField/type":[90560,560],"./period/type":[13487,3487],"./radio/type":[41197,1197],"./select/type":[98746,8746],"./textField/type":[80477,477],"./textarea/type":[25552,5552]};function r(t){if(!n.o(o,t))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],r=e[0];return n.e(e[1]).then((()=>n(r)))}r.keys=()=>Object.keys(o),r.id=54384,t.exports=r}}]);
//# sourceMappingURL=4978.chunk.4758a3f36cdd4f5df839.js.map