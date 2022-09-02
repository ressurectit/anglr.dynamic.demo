"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[5563],{95563:(t,e,n)=>{n.r(e),n.d(e,{default:()=>St});var i=n(27052),o=n(46480),r=n(13691),a=n(38327);class s{}s.ɵfac=function(t){return new(t||s)},s.ɵmod=r.oA({type:s}),s.ɵinj=a.cJ({});var d=n(53633),l=n(60405),h=n(43939),c=n(17868),p=n(23199),u=n(49891),g=n(55436),m=n(36973);class y{constructor(){this.active=!1,this.initSubscriptions=new p.w0,this.minHeight="",this.minWidth="",this.horizontal=!1,this.canDrop=!1,this.editorMetadata=null}ngOnInit(){this.observer=new MutationObserver((t=>{for(const e of t)e.target instanceof HTMLElement&&this.updatedDimensions(e.target)})),this.initSubscriptions.add(this.layoutComponentRendererDirective?.componentElementChange.subscribe((t=>{t?(this.element=t,this.init()):this.observer?.disconnect()})))}ngOnChanges(t){(0,u.$)("editorMetadata")in t&&this.init()}ngOnDestroy(){this.observer?.disconnect(),this.initSubscriptions.unsubscribe()}init(){if(!this.element||!this.editorMetadata)return;const t=this.editorMetadata.getChildrenContainer?.(this.element)??this.element;this.minHeight=t.style.minHeight,this.minWidth=t.style.minWidth,this.updatedDimensions(t),this.observer?.observe(t,{childList:!0})}updatedDimensions(t){const e=[];t.childNodes.forEach((t=>e.push(t)));const n=e.filter((t=>"#comment"!=t.nodeName)).length;if(!(n&&!this.active||!n&&this.active))if(n){if(1===t.children.length&&t.children.item(0)?.classList.contains("drag-placeholder"))return;this.active=!1,this.horizontal?t.style.minWidth=this.minWidth:t.style.minHeight=this.minHeight}else this.active=!0,this.horizontal?t.style.minWidth=this.canDrop?"30px":"10px":t.style.minHeight=this.canDrop?"30px":"10px"}}y.ɵfac=function(t){return new(t||y)},y.ɵdir=r.lG({type:y,selectors:[["","designerMinWidth",""]],contentQueries:function(t,e,n){if(1&t&&g.Su(n,l.i,7),2&t){let t;g.iG(t=g.CR())&&(e.layoutComponentRendererDirective=t.first)}},inputs:{horizontal:"horizontal",canDrop:"canDrop",editorMetadata:"editorMetadata"},standalone:!0,features:[m.T]});var v=n(79440),f=n(4905),D=n(85902);function b(t,e,n,i,o,r,a){try{var s=t[r](a),d=s.value}catch(t){return void n(t)}s.done?e(d):Promise.resolve(d).then(i,o)}class M{constructor(t,e){this._element=t,this._metadataExtractor=e}get metadata(){return this._metadata}set metadata(t){this._metadata=t,this._copyDesignerStyles()}_copyDesignerStyles(){var t,e=this;return(t=function*(){if(!e._metadata)return;const t=(yield e._metadataExtractor.extractMetadata(e._metadata))?.applyDesignerStyles;t&&t(e._metadata.options,e._element.nativeElement.style)},function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){b(r,i,o,a,s,"next",t)}function s(t){b(r,i,o,a,s,"throw",t)}a(void 0)}))})()}}M.ɵfac=function(t){return new(t||M)(v.Y(f.SB),v.Y(D.T))},M.ɵdir=r.lG({type:M,selectors:[["","copyDesignerStyles",""]],inputs:{metadata:["copyDesignerStyles","metadata"]},exportAs:["copyDesignerStyles"],standalone:!0});var C=n(98906);class w{constructor(t,e){this.draggingSvc=t,this.element=e,this.initSubscriptions=new p.w0,this.isDropZone=!1}ngOnInit(){this.initSubscriptions.add(this.draggingSvc.draggingChange.subscribe((()=>this.processDragValue())))}ngOnDestroy(){this.initSubscriptions.unsubscribe()}processDragValue(){setTimeout((()=>{this.draggingSvc.dragging&&this.isDropZone?this.element.nativeElement.classList.add("drag-active"):this.element.nativeElement.classList.remove("drag-active")}))}}w.ɵfac=function(t){return new(t||w)(v.Y(C.z),v.Y(f.SB))},w.ɵdir=r.lG({type:w,selectors:[["",8,"designer-dropzone"]],inputs:{isDropZone:"isDropZone"},standalone:!0});var E=n(48936),_=n(93802),x=n(15783);class O{constructor(t,e,n){this.template=t,this.viewContainer=e,this.document=n}ngOnInit(){this.view=this.viewContainer.createEmbeddedView(this.template),this.element=this.view.rootNodes[0],this.document.body.appendChild(this.element)}ngOnDestroy(){this.element?.remove(),this.element=null,this.view?.destroy(),this.view=null}}O.ɵfac=function(t){return new(t||O)(v.Y(_.Rg),v.Y(x.s_),v.Y(E.K))},O.ɵdir=r.lG({type:O,selectors:[["","bodyRender",""]],standalone:!0});var P=n(82568),S=n(80827),T=n(41853),z=n(66794),I=n(6427);class R{}R.ɵfac=function(t){return new(t||R)},R.ɵcmp=r.Xp({type:R,selectors:[["layout-editor-drag-preview"]],inputs:{editorMetadata:"editorMetadata",layoutMetadata:"layoutMetadata"},standalone:!0,features:[P.j],decls:4,vars:2,consts:[[1,"semi-bold"],[1,"margin-left-extra-small","small-text"]],template:function(t,e){if(1&t&&(S.Tg(0,"span",0),T._(1),S.qZ(),S.Tg(2,"span",1),T._(3),S.qZ()),2&t){let t;z.x(1),I.Oq(null!==(t=null==e.editorMetadata||null==e.editorMetadata.metaInfo?null:e.editorMetadata.metaInfo.name)&&void 0!==t?t:null==e.layoutMetadata?null:e.layoutMetadata.name),z.x(2),I.hi("#",(null==e.layoutMetadata?null:e.layoutMetadata.displayName)||(null==e.layoutMetadata?null:e.layoutMetadata.id),"")}},styles:["[_nghost-%COMP%]\n{\n    display: block;\n    background-color: #eee;\n    border-radius: 6px;\n    padding: 3px 8px;\n}"],changeDetection:0});var Y=n(68961),A=n(85320);class N{constructor(t,e){this._element=t,this._changeDetector=e}ngOnInit(){this._observer=new MutationObserver((()=>this._changeDetector.detectChanges())),this._htmlElement=this.layoutComponentRendererDirective?.componentRef?.hostView?.rootNodes?.[0],this._htmlElement&&this._observer?.observe(this._htmlElement,{attributeFilter:["style"]})}ngOnDestroy(){this._observer?.disconnect()}}N.ɵfac=function(t){return new(t||N)(v.Y(f.SB),v.Y(Y.s))},N.ɵcmp=r.Xp({type:N,selectors:[["","layoutDesignerOverlayFor",""]],inputs:{layoutComponentRendererDirective:["layoutDesignerOverlayFor","layoutComponentRendererDirective"]},standalone:!0,features:[P.j],attrs:["layoutDesignerOverlayFor",""],decls:12,vars:24,consts:[[1,"margin-top-div"],[1,"margin-bottom-div"],[1,"margin-left-div"],[1,"margin-right-div"],[1,"padding-top-div"],[1,"padding-bottom-div"],[1,"padding-left-div"],[1,"padding-right-div"],[1,"border-top-div"],[1,"border-bottom-div"],[1,"border-left-div"],[1,"border-right-div"]],template:function(t,e){1&t&&S._U(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"div",11),2&t&&(A.Ud("height",null==e._htmlElement||null==e._htmlElement.style?null:e._htmlElement.style.marginTop),z.x(1),A.Ud("height",null==e._htmlElement||null==e._htmlElement.style?null:e._htmlElement.style.marginBottom),z.x(1),A.Ud("width",null==e._htmlElement||null==e._htmlElement.style?null:e._htmlElement.style.marginLeft),z.x(1),A.Ud("width",null==e._htmlElement||null==e._htmlElement.style?null:e._htmlElement.style.marginRight),z.x(1),A.Ud("height",null==e._htmlElement||null==e._htmlElement.style?null:e._htmlElement.style.paddingTop),z.x(1),A.Ud("height",null==e._htmlElement||null==e._htmlElement.style?null:e._htmlElement.style.paddingBottom),z.x(1),A.Ud("width",null==e._htmlElement||null==e._htmlElement.style?null:e._htmlElement.style.paddingLeft),z.x(1),A.Ud("width",null==e._htmlElement||null==e._htmlElement.style?null:e._htmlElement.style.paddingRight),z.x(1),A.Ud("height",null==e._htmlElement||null==e._htmlElement.style?null:e._htmlElement.style.borderTop),z.x(1),A.Ud("height",null==e._htmlElement||null==e._htmlElement.style?null:e._htmlElement.style.borderBottom),z.x(1),A.Ud("width",null==e._htmlElement||null==e._htmlElement.style?null:e._htmlElement.style.borderLeft),z.x(1),A.Ud("width",null==e._htmlElement||null==e._htmlElement.style?null:e._htmlElement.style.borderRight))},styles:['[_nghost-%COMP%]\n{\n    display: grid;\n\n    grid-template-columns: auto auto auto 1fr auto auto auto;\n    grid-template-rows: auto auto auto 1fr auto auto auto;\n}\n\n[class^="margin"][_ngcontent-%COMP%]\n{\n    background-color: #d0ff0060;\n}\n\n[class^="padding"][_ngcontent-%COMP%]\n{\n    background-color: #613eff60;\n}\n\n[class^="border"][_ngcontent-%COMP%]\n{\n    background-color: #0011ff62;\n}\n\n.margin-top-div[_ngcontent-%COMP%]\n{\n    grid-row: 1/2;\n    grid-column: 1/8;\n}\n\n.margin-bottom-div[_ngcontent-%COMP%]\n{\n    grid-row: 7/8;\n    grid-column: 1/8;\n}\n\n.margin-left-div[_ngcontent-%COMP%]\n{\n    grid-row: 2/7;\n    grid-column: 1/2;\n}\n\n.margin-right-div[_ngcontent-%COMP%]\n{\n    grid-row: 2/7;\n    grid-column: 7/8;\n}\n\n.padding-top-div[_ngcontent-%COMP%]\n{\n    grid-row: 3/4;\n    grid-column: 3/6;\n}\n\n.padding-bottom-div[_ngcontent-%COMP%]\n{\n    grid-row: 5/6;\n    grid-column: 3/6;\n}\n\n.padding-left-div[_ngcontent-%COMP%]\n{\n    grid-row: 4/5;\n    grid-column: 3/4;\n}\n\n.padding-right-div[_ngcontent-%COMP%]\n{\n    grid-row: 4/5;\n    grid-column: 5/6;\n}\n\n.border-top-div[_ngcontent-%COMP%]\n{\n    grid-row: 2/3;\n    grid-column: 2/7;\n}\n\n.border-bottom-div[_ngcontent-%COMP%]\n{\n    grid-row: 6/7;\n    grid-column: 2/7;\n}\n\n.border-left-div[_ngcontent-%COMP%]\n{\n    grid-row: 3/6;\n    grid-column: 2/3;\n}\n\n.border-right-div[_ngcontent-%COMP%]\n{\n    grid-row: 3/6;\n    grid-column: 6/7;\n}'],changeDetection:0});var k=n(71785),L=n(10219),B=n(6845),G=n(73301),U=n(11282),F=n(84773),Q=n(72891),Z=n(43870),j=n(4477),H=n(15686),W=n(95176),$=n(47098),q=n(82973),V=n(94727),X=n(83434),K=n(26938),J=n(21651),tt=n(74445),et=n(54214),nt=n(90675);function it(t,e,n,i,o,r,a){try{var s=t[r](a),d=s.value}catch(t){return void n(t)}s.done?e(d):Promise.resolve(d).then(i,o)}class ot{constructor(t,e){this._target=t,this._position=e,this.flip=new tt.v}get source(){return this._source}set source(t){t instanceof f.SB?this._source=t.nativeElement:this._source=t}get placement(){return this._placement}set placement(t){(0,h.HD)(t)?this._placement=et.X[t]:this._placement=t}ngOnChanges(t){((0,u.$)("source")in t||(0,u.$)("placement")in t)&&(0,h.EN)(this.source)&&this._applyPosition()}_applyPosition(){var t,e=this;return(t=function*(){const t={};e._placement&&(t.placement=e._placement);const n=yield e._position.placeElement(e._target.nativeElement,e._source,t).toPromise();(0,nt.e)(n),n.flip&&e.flip.next()},function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){it(r,i,o,a,s,"next",t)}function s(t){it(r,i,o,a,s,"throw",t)}a(void 0)}))})()}}ot.ɵfac=function(t){return new(t||ot)(v.Y(f.SB),v.Y(o.Vr))},ot.ɵdir=r.lG({type:ot,selectors:[["","positionTo",""]],inputs:{source:["positionTo","source"],placement:"placement"},outputs:{flip:"flip"},features:[m.T]});var rt=n(44214),at=n(2032),st=n(65508),dt=n(27049),lt=n(16114);const ht=new(n(40296).O)("DRAG_PREVIEW_REGISTRATOR");var ct=n(88364),pt=n(73379),ut=n(48759),gt=n(52053);class mt{constructor(t,e,n,i,o,r,a,s){this.dnd=t,this.designerElement=e,this.draggingSvc=n,this.manager=i,this.bus=o,this.zone=r,this.injector=a,this.document=s,this.initSubscriptions=new p.w0,this.placeholderDrop=this.dnd.dropTarget(["COMPONENT","METADATA"],{canDrop:()=>!0,drop:t=>{const e=t.getItem();let n=this.bus.dropPlaceholderPreviewIndex;return e&&(0,h.EN)(e.dragData.index)&&(0,h.EN)(n)&&n>e.dragData.index&&n--,{index:n,id:this.metadata?.id}}},this.initSubscriptions),this.containerDrop=this.dnd.dropTarget(["COMPONENT","METADATA"],{canDrop:t=>this.canDropAncestors()[0]&&t.isOver({shallow:!0}),drop:t=>{const[e,n]=this.getFixedDropCoordinates(t,!1);return{index:e,id:n}},hover:t=>{if(t.isOver({shallow:!0})){const[e,n]=this.getDropCoordinates(t,!1);if((0,h.fp)(e)||(0,h.fp)(n))return;this.bus.setDropPlaceholderPreview({index:e,parentId:n,placeholder:{height:0,width:0}})}}},this.initSubscriptions),this.drag=this.dnd.dragSource("COMPONENT",{beginDrag:()=>(this.draggingSvc.setDragging(!0),this.designerElement.nativeElement.classList.add("is-dragged"),{dragData:this.dragData}),canDrag:()=>!this.dragDisabled,endDrag:t=>{if(t.didDrop()){const e=t.getItem(),n=t.getDropResult();if(!e)return;e.dragData.index=n.index,this.bus.setDropData({data:e.dragData,id:n.id})}else this.designerElement.nativeElement.classList.remove("is-dragged");this.bus.setDropPlaceholderPreview(null),this.draggingSvc.setDragging(!1)}},this.initSubscriptions),this.dropzone=this.dnd.dropTarget(["COMPONENT","METADATA"],{canDrop:t=>(this.canDrop||this.canDropAncestors()[0])&&t.isOver({shallow:!0}),drop:t=>{const[e,n]=this.getFixedDropCoordinates(t,this.canDrop);return{index:e,id:n}},hover:t=>{if(t.isOver({shallow:!0})&&t.canDrop()){const[e,n]=this.getDropCoordinates(t,this.canDrop);if((0,h.fp)(e)||(0,h.fp)(n))return;this.bus.setDropPlaceholderPreview({index:e,parentId:n,placeholder:{height:0,width:0}})}}},this.initSubscriptions),this.dragDisabled=!1,this.dropMetadata=new tt.v,this.connectDropToContainer()}get metadata(){if(!this.dragData.metadata)throw new Error("DndCoreDesignerDirective: invalid drag data without metadata!");return this.dragData.metadata}get canDrop(){return this.manager.getComponent(this.metadata.id)?.canDrop??!1}get horizontal(){return this.manager.getComponent(this.metadata.id)?.horizontal??!1}get containerElement(){if(!this.componentElement)return;const t=this.manager.getComponent(this.metadata.id);return t?.editorMetadata?.getChildrenContainer?t.editorMetadata.getChildrenContainer(this.componentElement)??this.componentElement:this.componentElement}ngOnInit(){if(!this.dropzoneElement)throw new Error("DndCoreDesignerDirective: missing dropzone element!");if(!this.dragData)throw new Error("DndCoreDesignerDirective: missing drag data!");this.initSubscriptions.add(this.layoutComponentRendererDirective?.componentElementChange.subscribe((t=>{this.componentElement=t||null}))),this.initSubscriptions.add(this.bus.dropDataChange.pipe((0,lt.h)((t=>t.id===this.metadata.id))).subscribe((t=>this.dropMetadata.emit(t.data)))),this.initSubscriptions.add(this.bus.oldDropPlaceholderPreviewChange.pipe((0,lt.h)((t=>t.parentId===this.metadata.id))).subscribe((()=>{this.placeholderPreviewElement?.remove(),this.placeholderPreviewElement=null}))),this.initSubscriptions.add(this.bus.newDropPlaceholderPreviewChange.pipe((0,lt.h)((t=>t.parentId===this.metadata.id))).subscribe(this.showPlaceholderPreview))}ngOnDestroy(){this.initSubscriptions.unsubscribe(),this.placeholderConnection?.unsubscribe(),this.placeholderConnection=null,this.containerConnection?.unsubscribe(),this.containerConnection=null}registerPreviewElement(t){return this.drag.connectDragPreview(t,{offsetX:0,offsetY:0})}getDropCoordinates(t,e){if(e)return this.getDropCoordinatesForChildren(t);const[n,i,o]=this.canDropAncestors();if(!n||(0,h.fp)(i))return[null,null];const r=this.manager.getComponent(i),a=this.manager.getComponent(o)?.index??0,s=t.getItem();return s&&(0,h.EN)(s.dragData.index)&&s.dragData.metadata?.id===this.metadata.id?[s.dragData.index,s.dragData.parentId??""]:r?[a+this.getIndexIncrement(t,r.horizontal),i]:[null,null]}getDropCoordinatesForChildren(t){const e=t=>{const e=t.children[0].getBoundingClientRect();return(this.horizontal?e.x:e.y)+(this.horizontal?e.width:e.height)/2};if(!this.containerElement)return[null,null];let n=0;const i=t.getClientOffset();if(!i)return[null,null];const o=this.horizontal?i.x:i.y;for(let t=0;t<this.containerElement.children.length;t++){const i=this.containerElement.children[t];if(!i.classList.contains("drag-placeholder")){if(o<=e(i))return[n,this.metadata.id];n++}}return[n,this.metadata.id]}getFixedDropCoordinates(t,e){const[n,i]=this.getDropCoordinates(t,e);let o=n;const r=t.getItem();return r&&(0,h.EN)(o)&&(0,h.EN)(r.dragData.index)&&i===r.dragData.parentId&&o>r.dragData.index&&o--,[o,i]}getIndexIncrement(t,e){const n=this.dropzoneElement.getBoundingClientRect(),i=t.getClientOffset();return i?(e?i.x-n.x:i.y-n.y)<=(e?n.width/2:n.height/2)?0:1:0}showPlaceholderPreview(t){this.containerElement&&(this.placeholderPreviewElement??(this.placeholderPreviewElement=this.document.createElement("div")),this.placeholderPreviewElement.classList.add("drag-placeholder"),this.placeholderPreviewElement.remove(),this.connectDropToPlaceholder(),this.containerElement.insertBefore(this.placeholderPreviewElement,this.containerElement.children[t.index]))}connectDropToPlaceholder(){this.zone.runOutsideAngular((()=>{this.placeholderConnection?.unsubscribe(),this.placeholderPreviewElement&&(this.placeholderConnection=this.placeholderDrop.connectDropTarget(this.placeholderPreviewElement))}))}connectDropToContainer(){this.zone.runOutsideAngular((()=>{this.containerConnection?.unsubscribe(),this.containerConnection=this.containerDrop.connectDropTarget(this.designerElement.nativeElement)}))}canDropAncestors(t){(0,h.fp)(t)&&(t=this.metadata.id);const e=this.manager.getComponentDef(t);return e?.parent?e.parent.component.canDrop?[!0,e.parent.component.id,t]:this.canDropAncestors(e.parent.component.id):[!1,null,t]}}mt.ɵfac=function(t){return new(t||mt)(v.Y(ut.f),v.Y(f.SB),v.Y(C.z),v.Y(X.t),v.Y(gt.E),v.Y(ct.R),v.Y(W.z),v.Y(E.K))},mt.ɵdir=r.lG({type:mt,selectors:[["","dndCoreDesigner",""]],contentQueries:function(t,e,n){if(1&t&&g.Su(n,l.i,7),2&t){let t;g.iG(t=g.CR())&&(e.layoutComponentRendererDirective=t.first)}},inputs:{dropzoneElement:"dropzoneElement",dragData:["dndCoreDesigner","dragData"],dragDisabled:"dragDisabled"},outputs:{dropMetadata:"dropMetadata"},exportAs:["dndCoreDesigner"],features:[pt._([{provide:ht,useExisting:(0,st.Gp)((()=>mt))}])]}),(0,at.gn)([dt.r,(0,at.w6)("design:type",Function),(0,at.w6)("design:paramtypes",[Object]),(0,at.w6)("design:returntype",void 0)],mt.prototype,"showPlaceholderPreview",null);class yt{constructor(t,e,n,i){if(this.template=t,this.viewContainer=e,this.ngZone=n,this.dragPreviewRegistrator=i,!this.dragPreviewRegistrator)throw new Error("Unable to use DndCorePreviewDirective, becuase there is no drag preview registrator!")}ngOnInit(){this.templateRef=this.viewContainer.createEmbeddedView(this.template),this.element=this.templateRef.rootNodes[0],this.element&&document.body.append(this.element),this.ngZone.runOutsideAngular((()=>{this.element&&(this.placeholderConnection=this.dragPreviewRegistrator?.registerPreviewElement(this.element))}))}ngOnDestroy(){this.element?.remove(),this.element=null,this.templateRef?.destroy(),this.templateRef=null,this.placeholderConnection?.unsubscribe(),this.placeholderConnection=null}}function vt(t,e,n,i,o,r,a){try{var s=t[r](a),d=s.value}catch(t){return void n(t)}s.done?e(d):Promise.resolve(d).then(i,o)}function ft(t){function e(t){if(Object(t)!==t)return Promise.reject(new TypeError(t+" is not an object."));var e=t.done;return Promise.resolve(t.value).then((function(t){return{value:t,done:e}}))}return ft=function(t){this.s=t,this.n=t.next},ft.prototype={s:null,n:null,next:function(){return e(this.n.apply(this.s,arguments))},return:function(t){var n=this.s.return;return void 0===n?Promise.resolve({value:t,done:!0}):e(n.apply(this.s,arguments))},throw:function(t){var n=this.s.return;return void 0===n?Promise.reject(t):e(n.apply(this.s,arguments))}},new ft(t)}yt.ɵfac=function(t){return new(t||yt)(v.Y(_.Rg),v.Y(x.s_),v.Y(ct.R),v.Y(ht,8))},yt.ɵdir=r.lG({type:yt,selectors:[["","dndCorePreview",""]]});const Dt=["layoutDesigner"],bt=["dndCoreDesigner"];function Mt(t,e){if(1&t&&S._U(0,"layout-editor-drag-preview",8),2&t){const t=B.o();G.Q("editorMetadata",t.editorMetadata)("layoutMetadata",t.renderedType)}}function Ct(t,e){}function wt(t,e){if(1&t&&(S.Tg(0,"div",12),T._(1),S.qZ()),2&t){const t=B.o(2),e=U.M(1);let n;G.Q("positionTo",e),z.x(1),I.Oq(null!==(n=null==t.editorMetadata||null==t.editorMetadata.metaInfo?null:t.editorMetadata.metaInfo.name)&&void 0!==n?n:null==t.renderedType?null:t.renderedType.name)}}function Et(t,e){if(1&t){const t=F.E();S.Tg(0,"div",14),Q.N("click",(function(){Z.CH(t);const e=B.o(3);return Z.Kt(e.remove())})),S._U(1,"span",15),S.qZ()}if(2&t){B.o(3);const t=U.M(1);G.Q("positionTo",t)}}function _t(t,e){1&t&&(j.yn(0),H.Y(1,Et,2,1,"div",13),j.BQ())}function xt(t,e){if(1&t&&(j.yn(0),S._U(1,"div",9)(2,"div",10),H.Y(3,wt,2,2,"div",11),H.Y(4,_t,2,0,"ng-container",7),j.BQ()),2&t){const t=B.o(),e=U.M(7);z.x(2),G.Q("layoutDesignerOverlayFor",e),z.x(2),G.Q("ngIf",!!t.parent&&(null==t.parent.editorMetadata?null:t.parent.editorMetadata.removeDescendant))}}const Ot=function(t,e,n){return{metadata:t,parentId:e,index:n}};class Pt extends d.h{constructor(t,e,n,i,o,r,a,s,d){super(t,e,n,s),this.metadataExtractor=i,this.layoutEditorMetadataManager=o,this.iteratorSvc=r,this.history=a,this.parent=d,this.initSubscriptions=new p.w0,this.canDropFn=()=>this.canDrop,this.canDrop=!1,this.horizontal=!1,this.index=0,this.editorMetadata=null}get selected(){return this.layoutEditorMetadataManager.selectedComponent===this.options?.typeMetadata.id}get highlighted(){return this.layoutEditorMetadataManager.highlightedComponent===this.options?.typeMetadata.id}get element(){return this.designerElement}get extensionsOptions(){return this.options?.typeMetadata.options}get dragDisabled(){return!this.parent||!!this.editorMetadata?.metaInfo?.dragDisabled}get id(){return this.options?.typeMetadata?.id??""}ngOnDestroy(){this.logger?.debug("LayoutDesignerSAComponent: Destroying component {@data}",{id:this.options?.typeMetadata.id}),this.initSubscriptions.unsubscribe(),super.ngOnDestroy(),this.options&&this.layoutEditorMetadataManager.unregisterLayoutDesignerComponent(this.options.typeMetadata.id)}addDescendant(t){if(!this.options)return;const e=t.parentId;this.logger?.debug("LayoutDesignerSAComponent: Adding descendant {@data}",{id:t.metadata?.id,parent:this.options.typeMetadata.id}),t.metadata?(e&&(this.history.disable(),this.layoutEditorMetadataManager.getComponent(e)?.removeDescendant(t.metadata?.id),this.history.enable()),this.editorMetadata?.addDescendant?.(t?.metadata,this.options.typeMetadata.options,t.index??0),this.canDrop=this.editorMetadata?.canDropMetadata?.(this.options.typeMetadata.options)??!1,this.renderedType={...this.options.typeMetadata},this.changeDetector.markForCheck(),this.history.getNewState()):this.logger?.warn("LayoutDesignerSAComponent: Missing metadata while adding descendant")}removeDescendant(t){this.options&&(this.logger?.debug("LayoutDesignerSAComponent: Removing descendant {@data}",{id:this.options.typeMetadata.id,child:t}),this.editorMetadata?.removeDescendant?.(t,this.options.typeMetadata.options),this.canDrop=this.editorMetadata?.canDropMetadata?.(this.options.typeMetadata.options)??!1,this.renderedType={...this.options.typeMetadata},this.changeDetector.markForCheck(),this.history.getNewState())}showOverlay(t){this.logger?.verbose("LayoutDesignerComponent: Showing overlay for {@type}",{name:this.options?.typeMetadata.name,id:this.options?.typeMetadata.id}),t.preventDefault(),t.stopPropagation(),this.layoutEditorMetadataManager.highlightComponent(this.options?.typeMetadata.id)}hideOverlay(t){(0,h.EN)(this.parent)||(this.logger?.verbose("LayoutDesignerComponent: Hiding overlay for {@type}",{name:this.options?.typeMetadata.name,id:this.options?.typeMetadata.id}),t.preventDefault(),t.stopPropagation(),this.layoutEditorMetadataManager.cancelHighlightedComponent())}selectComponent(t){t.preventDefault(),t.stopPropagation(),this.options&&this.layoutEditorMetadataManager.selectComponent(this.options.typeMetadata.id)}unselectComponent(t){t.preventDefault(),t.stopPropagation(),this.layoutEditorMetadataManager.unselectComponent()}remove(){this.parent&&this.options&&this.parent.removeDescendant(this.options.typeMetadata.id)}onInit(){var t,e=()=>super.onInit,n=this;return(t=function*(){if(yield e().call(n),n.options){if(n.parent?.options){var t,i=!1,o=!1;try{for(var r,a=function(t){var e,n,i,o=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,i=Symbol.iterator);o--;){if(n&&null!=(e=t[n]))return e.call(t);if(i&&null!=(e=t[i]))return new ft(e.call(t));n="@@asyncIterator",i="@@iterator"}throw new TypeError("Object is not async iterable")}(n.iteratorSvc.getChildrenIteratorFor(n.parent.options?.typeMetadata));i=!(r=yield a.next()).done;i=!1){const t=r.value;if(n.options.typeMetadata.id===t.metadata.id){n.index=t.index;break}}}catch(e){o=!0,t=e}finally{try{i&&null!=a.return&&(yield a.return())}finally{if(o)throw t}}}n.initSubscriptions.add(n.layoutEditorMetadataManager.selectedChange.subscribe((()=>n.changeDetector.detectChanges()))),n.initSubscriptions.add(n.layoutEditorMetadataManager.highlightedChange.subscribe((()=>n.changeDetector.detectChanges()))),n.editorMetadata=yield n.metadataExtractor.extractMetadata(n.options.typeMetadata),n.canDrop=n.editorMetadata?.canDropMetadata?.(n.options.typeMetadata.options)??!1,n.layoutEditorMetadataManager.registerLayoutDesignerComponent(n,n.options.typeMetadata.id,n.parent?.options?.typeMetadata.id)}},function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){vt(r,i,o,a,s,"next",t)}function s(t){vt(r,i,o,a,s,"throw",t)}a(void 0)}))})()}onOptionsSet(){this.options&&(this.renderedType={...this.options.typeMetadata},this.horizontal=this.editorMetadata?.isHorizontalDrop?.(this.options.typeMetadata.options)??!1)}}Pt.ɵfac=function(t){return new(t||Pt)(v.Y(Y.s),v.Y(f.SB),v.Y(W.z),v.Y(D.T),v.Y(X.t),v.Y(K.$),v.Y(k.dB),v.Y(o.bZ,8),v.Y(Pt,12))},Pt.ɵcmp=r.Xp({type:Pt,selectors:[["layout-designer-component"]],viewQuery:function(t,e){if(1&t&&(g.Gf(Dt,7),g.Gf(bt,7)),2&t){let t;g.iG(t=g.CR())&&(e.designerElement=t.first),g.iG(t=g.CR())&&(e.dndCoreDesigner=t.first)}},standalone:!0,features:[$.q,P.j],decls:9,vars:17,consts:[[1,"designer-overlay",3,"dndCoreDesigner","dropzoneElement","dragDisabled","dragSource","copyDesignerStyles","dropMetadata","mouseleave","mouseover","click","dblclick"],["layoutDesigner","","dndCore","dndCoreDesigner"],["designerMinWidth","",1,"designer-dropzone",3,"canDrop","editorMetadata","horizontal","dropTarget","isDropZone"],["layoutDropzone",""],["class","mat-elevation-z4",3,"editorMetadata","layoutMetadata",4,"dndCorePreview"],[3,"layoutComponentRenderer","layoutComponentRendererDisableTransformer"],["renderer","layoutComponentRenderer"],[4,"ngIf"],[1,"mat-elevation-z4",3,"editorMetadata","layoutMetadata"],[1,"designer-overlay-border"],[1,"designer-overlay-layout",3,"layoutDesignerOverlayFor"],["class","designer-overlay-title","placement","TopStart",3,"positionTo",4,"bodyRender"],["placement","TopStart",1,"designer-overlay-title",3,"positionTo"],["class","designer-overlay-remove","placement","TopEnd",3,"positionTo","click",4,"bodyRender"],["placement","TopEnd",1,"designer-overlay-remove",3,"positionTo","click"],[1,"fas","fa-times"]],template:function(t,e){if(1&t&&(S.Tg(0,"div",0,1),Q.N("dropMetadata",(function(t){return e.addDescendant(t)}))("mouseleave",(function(t){return e.hideOverlay(t)}))("mouseover",(function(t){return e.showOverlay(t)}))("click",(function(t){return e.selectComponent(t)}))("dblclick",(function(t){return e.unselectComponent(t)})),S.Tg(3,"div",2,3),H.Y(5,Mt,1,2,"layout-editor-drag-preview",4),H.Y(6,Ct,0,0,"ng-template",5,6,q.W),H.Y(8,xt,5,2,"ng-container",7),S.qZ()()),2&t){const t=U.M(2),n=U.M(4);let i;G.Q("dndCoreDesigner",V.kE(13,Ot,e.renderedType,null==e.parent||null==e.parent.renderedType?null:e.parent.renderedType.id,e.index))("dropzoneElement",n)("dragDisabled",e.dragDisabled)("dragSource",t.drag)("copyDesignerStyles",e.renderedType),z.x(3),G.Q("canDrop",e.canDrop)("editorMetadata",e.editorMetadata)("horizontal",null!==(i=null==e.parent?null:e.parent.horizontal)&&void 0!==i&&i)("dropTarget",t.dropzone)("isDropZone",e.canDrop),z.x(3),G.Q("layoutComponentRenderer",e.renderedType)("layoutComponentRendererDisableTransformer",!0),z.x(2),G.Q("ngIf",e.highlighted||e.selected)}},dependencies:[i.e,J.O,s,ot,R,N,y,M,l.i,w,O,c.c8,rt.$d,rt.Li,L.N,mt,yt],styles:["[_nghost-%COMP%]\n{\n    display: contents;\n}\n\n.designer-overlay[_ngcontent-%COMP%]\n{\n    position: relative;\n    overflow: hidden;\n}\n\n.designer-dropzone[_ngcontent-%COMP%]\n{\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n}\n\n.designer-dropzone.drag-active[_ngcontent-%COMP%]\n{\n    margin: 8px;\n    border: solid 1px rgb(0, 0, 0, .3);\n}\n\n.designer-overlay-layout[_ngcontent-%COMP%], .designer-overlay-border[_ngcontent-%COMP%]\n{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n}\n\n.designer-overlay-border[_ngcontent-%COMP%]\n{\n    border: 1px solid #009dd8;\n}\n\n.designer-overlay-title[_ngcontent-%COMP%]\n{\n    position: absolute;\n    background-color: #009dd8;\n    color: white;\n    font-weight: 500;\n    z-index: 500;\n    padding: 2px 6px;\n    pointer-events: none;\n}\n\n.designer-overlay-remove[_ngcontent-%COMP%]\n{\n    position: absolute;\n    border-radius: 50%;\n    background-color: #009dd8;\n    padding: 2px 7px;\n    opacity: .75;\n    color: #fff;\n    cursor: pointer;\n}"],changeDetection:0});const St=Pt},53633:(t,e,n)=>{n.d(e,{h:()=>g});var i=n(46480),o=n(49891),r=n(43939),a=n(79440),s=n(68961),d=n(4905),l=n(95176),h=n(13691),c=n(36973);function p(t,e,n,i,o,r,a){try{var s=t[r](a),d=s.value}catch(t){return void n(t)}s.done?e(d):Promise.resolve(d).then(i,o)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){p(r,i,o,a,s,"next",t)}function s(t){p(r,i,o,a,s,"throw",t)}a(void 0)}))}}class g{constructor(t,e,n,i){this.changeDetector=t,this.componentElement=e,this.injector=n,this.logger=i,this.extensions=[],this.initialized=!1,this.destroyed=!1}get element(){return this.componentElement}get extensionsOptions(){return this.options}ngOnDestroy(){if(!this.destroyed){this.destroyed=!0;for(const t of this.extensions)t.destroy();this.onDestroy()}}ngOnInit(){var t=this;return u((function*(){if(t.initialized)return;t.initialized=!0;const e=t.extensionsOptions;if(yield t.onInit(),yield t.onOptionsSet(),e)for(const e of t.extensions)yield e.initialize(t.injector,t.element,t);yield t.afterInit()}))()}ngOnChanges(t){var e=this;return u((function*(){if((0,o.$)("options")in t){yield e.onOptionsSet();const t=e.extensionsOptions;if(t)for(const n of e.extensions)yield n.optionsChange(t);if(!e.initialized)return;yield e.onOptionsChange()}delete t[(0,o.$)("options")],(0,r.Qr)(t)||e.onChanges(t)}))()}registerExtensions(t){this.extensions=t}invalidateVisuals(){this.changeDetector.detectChanges()}onInit(){}afterInit(){}onOptionsChange(){}onChanges(t){}onOptionsSet(){}onDestroy(){}}g.ɵfac=function(t){return new(t||g)(a.Y(s.s),a.Y(d.SB),a.Y(l.z),a.Y(i.bZ,8))},g.ɵdir=h.lG({type:g,features:[c.T]})},90675:(t,e,n)=>{function i(t){Object.assign(t.target.style,{top:"0",left:"0",transform:`translate(${t.x}px, ${t.y}px)`})}n.d(e,{e:()=>i})}}]);
//# sourceMappingURL=5563.chunk.a2c383418a9eb835d00a.js.map