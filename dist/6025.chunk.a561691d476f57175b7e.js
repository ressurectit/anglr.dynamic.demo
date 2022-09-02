/*! For license information please see 6025.chunk.a561691d476f57175b7e.js.LICENSE.txt */
"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[6025],{78064:(t,e,n)=>{n.r(e),n.d(e,{HtmlBlockRelationsEditorMetadata:()=>_});var a=n(93551),i=n(88735),o=n(60901),s=n(43801),l=n(13691),r=n(47098),c=n(82568),d=n(80827),u=n(41853),g=n(73301),m=n(66794);class f extends a.M{}f.ɵfac=function(){let t;return function(e){return(t||(t=s.n5(f)))(e||f)}}(),f.ɵcmp=l.Xp({type:f,selectors:[["html-block-node"]],standalone:!0,features:[r.q,c.j],decls:9,vars:5,consts:[[3,"parent","destroySubject"],[1,"node-content"],[1,"inputs-outputs"],[1,"inputs"],[1,"input"],["name","content",3,"parentCoordiantes","zoomLevel","parent"],[1,"outputs"]],template:function(t,e){1&t&&(d._U(0,"relations-node-header",0),d.Tg(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),d._U(5,"relation-node-input",5),d.Tg(6,"div"),u._(7,"content"),d.qZ()()(),d._U(8,"div",6),d.qZ()()),2&t&&(g.Q("parent",e)("destroySubject",e.destroySubject),m.x(5),g.Q("parentCoordiantes",e.nodePosition)("zoomLevel",e.zoomLevel)("parent",e))},dependencies:[i.e,o.P],encapsulation:2,changeDetection:0});class _{constructor(){this.metaInfo={name:"Html block",description:"Html block - displays html or string",group:"Data"},this.nodeDefinition=f,Object.freeze(this)}}},91861:(t,e,n)=>{n.d(e,{Bj:()=>s,DZ:()=>i,GP:()=>o,dK:()=>d,fI:()=>c,n7:()=>r,nR:()=>u,yh:()=>l});var a=n(40296);const i=new a.O("RELATIONS_MODULE_TYPES_DATA_EXTRACTORS"),o=new a.O("RELATIONS_MODULE_TYPES_PROVIDERS"),s=new a.O("RELATIONS_MODULE_TYPES_LOADER"),l=new a.O("RELATIONS_NODES_DATA_EXTRACTORS"),r=new a.O("RELATIONS_NODES_PROVIDERS"),c=new a.O("RELATIONS_NODES_LOADER"),d=new a.O("REFRESH_PALETTE_OBSERVABLES"),u=new a.O("RELATIONS_HISTORY_MANAGER")},89402:(t,e,n)=>{function a(t){return!!t.__ɵɵRelationsComponent}function i(){return function(t){return t.__ɵɵRelationsComponent=!0,t}}n.d(e,{H:()=>i,O:()=>a})},44677:(t,e,n)=>{n.d(e,{L:()=>i});var a=n(43939);const i=(t,e)=>{const n=t;return e?.debug("defaultExportExtractor: trying to extract default dynamic data"),(0,a.EN)(n.default)?{data:n.default}:null}},14389:(t,e,n)=>{n.d(e,{LK:()=>l,XW:()=>s,mv:()=>o});var a=n(97825),i=n(13457);function o(t,e,n,a,i=!1){t[e]={currentValue:n,previousValue:a,firstChange:i,isFirstChange:()=>i}}function s(t){return{provide:i.B,useValue:{packages:[t],packagesChange:a.C,refresh(){}},multi:!0}}function l(t){try{return JSON.parse(t)}catch{return null}}},64297:(t,e,n)=>{n.d(e,{n:()=>i});var a=n(68753);function i(t,e){const n="object"==typeof e;return new Promise(((i,o)=>{let s,l=!1;t.subscribe({next:t=>{s=t,l=!0},error:o,complete:()=>{l?i(s):n?i(e.defaultValue):o(new a.K)}})}))}},97825:(t,e,n)=>{n.d(e,{C:()=>o});var a=n(28653),i=n(58656);const o=new a.y(i.Z)},80943:(t,e,n)=>{n.d(e,{ZT:()=>f});var a=n(31750),i=n(79440),o=n(4905),s=n(13691),l=n(72891),r=n(86357),c=n(36973),d=n(98171),u=n(85320),g=n(77417);let m=0;class f{constructor(t,e,n){this.dialogRef=t,this._elementRef=e,this._dialog=n,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=R(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){const e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){(0,a.R)(this.dialogRef,0===t.screenX&&0===t.screenY?"keyboard":"mouse",this.dialogResult)}}f.ɵfac=function(t){return new(t||f)(i.Y(a.s,8),i.Y(o.SB),i.Y(g.uw))},f.ɵdir=s.lG({type:f,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,e){1&t&&l.N("click",(function(t){return e._onButtonClick(t)})),2&t&&r.u("aria-label",e.ariaLabel||null)("type",e.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["mat-dialog-close","dialogResult"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[c.T]});class _{constructor(t,e,n){this._dialogRef=t,this._elementRef=e,this._dialog=n,this.id="mat-dialog-title-"+m++}ngOnInit(){this._dialogRef||(this._dialogRef=R(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then((()=>{const t=this._dialogRef._containerInstance;t&&!t._ariaLabelledBy&&(t._ariaLabelledBy=this.id)}))}}_.ɵfac=function(t){return new(t||_)(i.Y(a.s,8),i.Y(o.SB),i.Y(g.uw))},_.ɵdir=s.lG({type:_,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-dialog-title"],hostVars:1,hostBindings:function(t,e){2&t&&d.I("id",e.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]});class p{}p.ɵfac=function(t){return new(t||p)},p.ɵdir=s.lG({type:p,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-dialog-content"]});class h{constructor(){this.align="start"}}function R(t,e){let n=t.nativeElement.parentElement;for(;n&&!n.classList.contains("mat-dialog-container");)n=n.parentElement;return n?e.find((t=>t.id===n.id)):null}h.ɵfac=function(t){return new(t||h)},h.ɵdir=s.lG({type:h,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-dialog-actions"],hostVars:4,hostBindings:function(t,e){2&t&&u.ek("mat-dialog-actions-align-center","center"===e.align)("mat-dialog-actions-align-end","end"===e.align)},inputs:{align:"align"}})}}]);
//# sourceMappingURL=6025.chunk.a561691d476f57175b7e.js.map