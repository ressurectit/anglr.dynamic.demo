"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[1156],{52191:(e,t,n)=>{n.r(t),n.d(t,{ListBlockDesignerSAComponent:()=>m});var r=n(11776),o=n(60405),i=n(38282),a=n(57466),s=n(43424),l=n(43801),c=n(77842),d=n(47098),h=n(82568),u=n(15686),g=n(73301);function p(e,t){}class m extends s.${constructor(){super(...arguments),this.designer=(0,r.f3)(i.q)}onInit(){var e;this.designer.options&&((e=this.designer.options.typeMetadata).scope??(e.scope=(0,a.Ox)(10)))}}m.ɵfac=function(){let e;return function(t){return(e||(e=l.n5(m)))(t||m)}}(),m.ɵcmp=c.Xp({type:m,selectors:[["list-block-designer"]],standalone:!0,features:[d.q,h.j],decls:1,vars:1,consts:[[3,"layoutComponentRenderer"]],template:function(e,t){1&e&&u.Y(0,p,0,0,"ng-template",0),2&e&&g.Q("layoutComponentRenderer",null==t.options?null:t.options.template)},dependencies:[o.i],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0})},27173:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(23199),o=n(79440),i=n(4905),a=n(77842),s=n(98906);class l{constructor(e,t){this.draggingSvc=e,this.element=t,this.initSubscriptions=new r.w0,this.isDropZone=!1}ngOnInit(){this.initSubscriptions.add(this.draggingSvc.draggingChange.subscribe((()=>this.processDragValue())))}ngOnDestroy(){this.initSubscriptions.unsubscribe()}processDragValue(){setTimeout((()=>{this.draggingSvc.dragging&&this.isDropZone?this.element.nativeElement.classList.add("drag-active"):this.element.nativeElement.classList.remove("drag-active")}))}}l.ɵfac=function(e){return new(e||l)(o.Y(s.z),o.Y(i.SB))},l.ɵdir=a.lG({type:l,selectors:[["",8,"designer-dropzone"]],inputs:{isDropZone:"isDropZone"},standalone:!0})},71785:(e,t,n)=>{n.d(t,{RI:()=>v,Yh:()=>C,dB:()=>b,FX:()=>y,QT:()=>w,sc:()=>P,dK:()=>O});var r=n(40296),o=n(20350),i=n(39273),a=n(43801),s=n(77842),l=n(47098),c=n(80827),d=n(65589),h=n(73301),u=n(70983),g=n(77470),p=n(27635),m=n(61939);class _ extends i.L{}_.ɵfac=function(){let e;return function(t){return(e||(e=a.n5(_)))(t||_)}}(),_.ɵcmp=s.Xp({type:_,selectors:[["input-boolean"]],features:[l.q],decls:2,vars:3,consts:[["type","checkbox",1,"properties-form-control",3,"formControl"]],template:function(e,t){1&e&&(c._U(0,"input",0),d.AL(1,"asRequired")),2&e&&h.Q("formControl",d.lc(1,1,t._control))},dependencies:[u.W,g.JJ,p.oH,m.i],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0});var f=n(21147);const v=new r.O("LAYOUT_EDITOR_PROPERTY_METADATA_PROPERTIES"),C=new r.O("LAYOUT_EDITOR_PROPERTY_TYPE_CONTROLS",{providedIn:"root",factory:()=>({inputString:o.q,inputBoolean:_,selectValue:f.f})}),y=new r.O("LAYOUT_MODULE_TYPES_DATA_EXTRACTORS"),P=new r.O("LAYOUT_MODULE_TYPES_PROVIDERS"),w=new r.O("LAYOUT_MODULE_TYPES_LOADER"),b=new r.O("LAYOUT_HISTORY_MANAGER"),O=new r.O("REFRESH_PALETTE_OBSERVABLES")},10219:(e,t,n)=>{n.d(t,{N:()=>i});var r=n(77842),o=n(38327);class i{}i.ɵfac=function(e){return new(e||i)},i.ɵmod=r.oA({type:i}),i.ɵinj=o.cJ({})},52053:(e,t,n)=>{n.d(t,{E:()=>i});var r=n(86463),o=n(38327);class i{constructor(){this.dropDataChangeSubject=new r.x,this.dropPlaceholderPreview=null,this.newDropPlaceholderPreviewSubject=new r.x,this.oldDropPlaceholderPreviewSubject=new r.x}get dropDataChange(){return this.dropDataChangeSubject.asObservable()}get newDropPlaceholderPreviewChange(){return this.newDropPlaceholderPreviewSubject.asObservable()}get oldDropPlaceholderPreviewChange(){return this.oldDropPlaceholderPreviewSubject.asObservable()}get dropPlaceholderPreviewIndex(){return this.dropPlaceholderPreview?.index??null}setDropData(e){this.dropDataChangeSubject.next(e)}setDropPlaceholderPreview(e){e?.index===this.dropPlaceholderPreview?.index&&e?.parentId===this.dropPlaceholderPreview?.parentId||(this.dropPlaceholderPreview&&this.oldDropPlaceholderPreviewSubject.next(this.dropPlaceholderPreview),this.dropPlaceholderPreview=e,this.dropPlaceholderPreview&&this.newDropPlaceholderPreviewSubject.next(this.dropPlaceholderPreview))}}i.ɵfac=function(e){return new(e||i)},i.ɵprov=o.Yz({token:i,factory:i.ɵfac})},20350:(e,t,n)=>{n.d(t,{q:()=>p});var r=n(39273),o=n(43801),i=n(77842),a=n(47098),s=n(80827),l=n(65589),c=n(73301),d=n(49280),h=n(77470),u=n(27635),g=n(61939);class p extends r.L{}p.ɵfac=function(){let e;return function(t){return(e||(e=o.n5(p)))(t||p)}}(),p.ɵcmp=i.Xp({type:p,selectors:[["input-string"]],features:[a.q],decls:2,vars:3,consts:[["type","text",1,"properties-form-control",3,"formControl"]],template:function(e,t){1&e&&(s._U(0,"input",0),l.AL(1,"asRequired")),2&e&&c.Q("formControl",l.lc(1,1,t._control))},dependencies:[d.Fj,h.JJ,u.oH,g.i],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0})},39273:(e,t,n)=>{n.d(t,{L:()=>l});var r=n(79440),o=n(68961),i=n(77842);function a(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function s(e){a(i,r,o,s,l,"next",e)}function l(e){a(i,r,o,s,l,"throw",e)}s(void 0)}))}}class l{constructor(e){this._changeDetector=e,this._initialized=!1,this.values=[]}get control(){return this._control}set control(e){this._control=e,this._controlSet()}ngOnInit(){var e=this;return s((function*(){e._initialized||(e._initialized=!0,yield e._initialize())}))()}initialize(){var e=this;return s((function*(){yield e.ngOnInit()}))()}invalidateVisuals(){this._changeDetector.detectChanges()}_initialize(){}_controlSet(){}}l.ɵfac=function(e){return new(e||l)(r.Y(o.s))},l.ɵdir=i.lG({type:l,inputs:{control:"control",values:"values"}})},21147:(e,t,n)=>{n.d(t,{f:()=>C});var r=n(39273),o=n(80827),i=n(73301),a=n(43801),s=n(77842),l=n(47098),c=n(65589),d=n(15686),h=n(66794),u=n(12311),g=n(24881),p=n(17790),m=n(77470),_=n(27635),f=n(61939);function v(e,t){if(1&e&&o._U(0,"option",2),2&e){const e=t.$implicit;i.Q("value",e)("text",e)}}class C extends r.L{}C.ɵfac=function(){let e;return function(t){return(e||(e=a.n5(C)))(t||C)}}(),C.ɵcmp=s.Xp({type:C,selectors:[["select-value"]],features:[l.q],decls:3,vars:4,consts:[[1,"properties-form-control",3,"formControl"],[3,"value","text",4,"ngFor","ngForOf"],[3,"value","text"]],template:function(e,t){1&e&&(o.Tg(0,"select",0),c.AL(1,"asRequired"),d.Y(2,v,1,2,"option",1),o.qZ()),2&e&&(i.Q("formControl",c.lc(1,2,t._control)),h.x(2),i.Q("ngForOf",t.values))},dependencies:[u.s,g.YN,p.Kr,g.EJ,m.JJ,_.oH,f.i],styles:["[_nghost-%COMP%]{display: block;}"],changeDetection:0})},98906:(e,t,n)=>{n.d(t,{z:()=>i});var r=n(86463),o=n(38327);class i{constructor(){this._dragging=!1,this._draggingChange=new r.x}get dragging(){return this._dragging}get draggingChange(){return this._draggingChange.asObservable()}setDragging(e){this._dragging!=e&&(this._dragging=e,this._draggingChange.next())}}i.ɵfac=function(e){return new(e||i)},i.ɵprov=o.Yz({token:i,factory:i.ɵfac})},26938:(e,t,n)=>{n.d(t,{$:()=>g});var r=n(46480);function o(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function s(e){o(a,r,i,s,l,"next",e)}function l(e){o(a,r,i,s,l,"throw",e)}s(void 0)}))}}class a{constructor(e,t,n){this._layoutMetadata=e,this._extractor=t,this._logger=n,this._items=[],this._initialized=!1,this._initPromise=null}[Symbol.asyncIterator](){let e=0;const t=this._initPromise??(this._initPromise=this._getInitPromise()),n=this._items;return{next:()=>i((function*(){return yield t,e<n.length?{value:n[e++],done:!1}:{value:n[e-1],done:!0}}))()}}forEach(e){var t=this;return i((function*(){yield t._initPromise??(t._initPromise=t._getInitPromise());for(const n of t._items)e(n.metadata,n.parent,n.levelIndex,n.level)}))()}_getComponents(){var e=this;return i((function*(){yield e._getComponent(e._layoutMetadata,null,0,0)}))()}_getComponent(e,t,n,r){var o=this;return i((function*(){const i={metadata:e,parent:t,levelIndex:n,level:r};o._items.push(i);const a=yield o._extractor.extractMetadata(e);if(!a)return void o._logger?.debug("LayoutComponentsIterator: failed to get metadata for iterator! {@data}",{package:e.package,name:e.name});if(!a.getDescendants)return;const s=a.getDescendants(e.options);for(let e=0;e<s.length;e++)yield o._getComponent(s[e],i,e,r+1)}))()}_getInitPromise(){var e=this;return i((function*(){e._initialized||(e._initialized=!0,yield e._getComponents())}))()}}function s(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){s(i,r,o,a,l,"next",e)}function l(e){s(i,r,o,a,l,"throw",e)}a(void 0)}))}}class c{constructor(e,t,n){this.layoutMetadata=e,this.extractor=t,this.logger=n,this.items=[],this.initialized=!1,this.initPromise=null}[Symbol.asyncIterator](){let e=0;const t=this.initPromise??(this.initPromise=this.getInitPromise()),n=this.items;return{next:()=>l((function*(){return yield t,e<n.length?{value:n[e++],done:!1}:{value:n[e-1],done:!0}}))()}}getChildren(){var e=this;return l((function*(){yield e.getComponent(e.layoutMetadata)}))()}getComponent(e){var t=this;return l((function*(){const n=yield t.extractor.extractMetadata(e);if(!n)return void t.logger?.debug("LayoutComponentsChildrenIterator: failed to get metadata for children iterator! {@data}",{package:e.package,name:e.name});if(!n.getDescendants)return;const r=n.getDescendants(e.options);for(let e=0;e<r.length;e++)t.items.push({index:e,metadata:r[e]})}))()}getInitPromise(){var e=this;return l((function*(){e.initialized||(e.initialized=!0,yield e.getChildren())}))()}}var d=n(11776),h=n(38327),u=n(85902);class g{constructor(e,t){this.extractor=e,this.logger=t}getIteratorFor(e){return new a(e,this.extractor,this.logger)}getChildrenIteratorFor(e){return new c(e,this.extractor,this.logger)}}g.ɵfac=function(e){return new(e||g)(d.LF(u.T),d.LF(r.bZ,8))},g.ɵprov=h.Yz({token:g,factory:g.ɵfac})},85902:(e,t,n)=>{n.d(t,{T:()=>l});var r=n(8477),o=n(46480),i=n(11776),a=n(38327);function s(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}class l{constructor(e,t){this._loader=e,this._logger=t,this._cache={}}extractMetadata(e){var t,n=this;return(t=function*(){const t=`${e.package}-${e.name}`;if(n._cache[t])return n._cache[t];const r=yield n._loader.loadItem(e);if(!r)return null;const o=r.data;if(!o.layoutEditorMetadata)return n._logger?.warn("LayoutEditorMetadataExtractor: Missing metadata! ",{package:e.package,name:e.name}),null;n._logger?.debug("LayoutEditorMetadataExtractor: Reading metadata! ",{package:e.package,name:e.name});const i=yield o.layoutEditorMetadata;return Object.freeze(i),n._cache[t]=i,i},function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(e){s(i,r,o,a,l,"next",e)}function l(e){s(i,r,o,a,l,"throw",e)}a(void 0)}))})()}}l.ɵfac=function(e){return new(e||l)(i.LF(r.Vl),i.LF(o.bZ,8))},l.ɵprov=a.Yz({token:l,factory:l.ɵfac})},83434:(e,t,n)=>{n.d(t,{t:()=>l});var r=n(46480),o=n(43939),i=n(86463),a=n(11776),s=n(38327);class l{constructor(e){this._logger=e,this._components={},this._rootComponentId=null,this._selectedComponent=null,this._highlightedComponent=null,this._layoutChange=new i.x,this._selectedChange=new i.x,this._highlightedChange=new i.x,this._displayNameChanges=new i.x,this._flatTree=null,this._draggedOverComponent=null,this._draggedOverComponentChange=new i.x}get selectedComponent(){return this._selectedComponent}get highlightedComponent(){return this._highlightedComponent}get draggedOverComponent(){return this._draggedOverComponent}get root(){return(0,o.fp)(this._rootComponentId)?null:this._components[this._rootComponentId]}get layoutChange(){return this._layoutChange.asObservable()}get selectedChange(){return this._selectedChange.asObservable()}get highlightedChange(){return this._highlightedChange.asObservable()}get displayNameChange(){return this._displayNameChanges.asObservable()}get draggedOverComponentChange(){return this._draggedOverComponentChange.asObservable()}get flatTree(){return this._flatTree??(this._flatTree=this._buildFlatTree())}selectComponent(e){this._selectedComponent=e??null,this._selectedChange.next()}unselectComponent(){this._selectedComponent=null,this._selectedChange.next()}highlightComponent(e){this._highlightedComponent=e??null,this._highlightedChange.next()}cancelHighlightedComponent(){this._highlightedComponent=null,this._highlightedChange.next()}dragOverComponent(e){e!==this._draggedOverComponent&&(this._draggedOverComponent=e??null,this._draggedOverComponentChange.next())}cancelDragOverComponent(){this._draggedOverComponent=null,this._draggedOverComponentChange.next()}registerLayoutDesignerComponent(e,t,n){if((0,o.fp)(n)&&(this._rootComponentId=t),this._components[t])return this._logger?.error(`LayoutEditorMetadataManager: Component with id ${t} is already registered!`),!1;const r=n?this._components[n]:null,i={component:e,parent:r,children:[]};return this._components[t]=i,r&&r.children.push(i),this._flatTree=null,this._layoutChange.next(),this._logger?.debug("LayoutEditorMetadataManager: Registering component {@id}",t),!0}getComponent(e){return this._components[e]?.component??null}getParent(e){return this._components[e]?.parent?.component??null}getIndex(e){const t=this._components[e];return t&&t.parent?t.parent.children.indexOf(t):null}getComponentDef(e){return this._components[e]??null}unregisterLayoutDesignerComponent(e){const t=this._components[e];if(delete this._components[e],t?.parent){const e=t.parent.children.indexOf(t);t.parent.children.splice(e,1)}e===this._rootComponentId&&(this._rootComponentId=null),this._flatTree=null,this._layoutChange.next(),this._logger?.debug("LayoutEditorMetadataManager: Unregistering component {@id}",e)}displayNameUpdated(){this._displayNameChanges.next()}getMetadata(){return(0,o.fp)(this._rootComponentId)||!this._components[this._rootComponentId]?null:this._components[this._rootComponentId].component.options?.typeMetadata??null}_buildFlatTree(){if((0,o.fp)(this._rootComponentId))return[];const e=this._components[this._rootComponentId];return e?this._buildFlatTreeForComponent(e):[]}_buildFlatTreeForComponent(e){let t=[e];for(const n of e.children)t=t.concat(this._buildFlatTreeForComponent(n));return t}}l.ɵfac=function(e){return new(e||l)(a.LF(r.bZ,8))},l.ɵprov=s.Yz({token:l,factory:l.ɵfac})},61939:(e,t,n)=>{n.d(t,{i:()=>o});var r=n(77842);class o{transform(e,t,n){return e??t}}o.ɵfac=function(e){return new(e||o)},o.ɵpipe=r.Yj({name:"asRequired",type:o,pure:!0})},27049:(e,t,n)=>{n.d(t,{r:()=>o});var r=n(43939);function o(e,t,n){const o=n.value??n.get?.();if(!(0,r.mf)(o))throw new Error(`Unable to apply @BindThis decorator to '${t.toString()}', it is not a method.`);return{configurable:!0,get(){const e=o.bind(this);return Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0}),e}}}}}]);
//# sourceMappingURL=1156.chunk.36ab6d4f598a9554ddae.js.map