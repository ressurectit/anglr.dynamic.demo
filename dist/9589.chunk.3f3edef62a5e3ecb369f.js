"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[9589],{44903:(t,e,n)=>{n.d(e,{D:()=>x});var o=n(30621),i=n(9249),s=n(66845),a=n(79440),r=n(13691),c=n(82568),d=n(84773),u=n(80827),l=n(41853),p=n(72891),h=n(43870),v=n(11282),f=n(73301),m=n(66794),g=n(31750),b=n(80943),y=n(96341);class x{constructor(t,e){this.data=t,this.dialog=e,this.content=null,this.content=t}}x.ɵfac=function(t){return new(t||x)(a.Y(i.m),a.Y(g.s))},x.ɵcmp=r.Xp({type:x,selectors:[["rich-text-block-editor-dialog"]],standalone:!0,features:[c.j],decls:9,vars:2,consts:[[3,"initialValue"],["editor",""],[1,"flex-row","flex-end"],["type","button","type","button",1,"btn","btn-info",3,"mat-dialog-close"],["type","button","type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){if(1&t){const t=d.E();u._U(0,"editor",0,1),u.Tg(2,"div",2)(3,"button",3)(4,"span"),l._(5,"cancel"),u.qZ()(),u.Tg(6,"button",4),p.N("click",(function(){h.CH(t);const n=v.M(1);return e.content=n.editor.getContent(),h.Kt(e.dialog.close(e.content))})),u.Tg(7,"span"),l._(8,"ok"),u.qZ()()()}if(2&t){let t;f.Q("initialValue",null!==(t=e.content)&&void 0!==t?t:""),m.x(3),f.Q("mat-dialog-close",null)}},dependencies:[o.I,b.ZT,s.Z,y.P],encapsulation:2,changeDetection:0})},99589:(t,e,n)=>{n.r(e),n.d(e,{RichTextSourceRelationsEditorMetadata:()=>k});var o=n(93551),i=n(88735),s=n(85478),a=n(43939),r=n(64297),c=n(44903),d=n(79440),u=n(68961),l=n(4905),p=n(13691),h=n(47098),v=n(82568),f=n(80827),m=n(41853),g=n(72891),b=n(73301),y=n(66794),x=n(47826);function _(t,e,n,o,i,s,a){try{var r=t[s](a),c=r.value}catch(t){return void n(t)}r.done?e(c):Promise.resolve(c).then(o,i)}class w extends o.M{constructor(t,e,n){super(t,e),this.dialog=n}showCodeEditor(){var t,e=this;return(t=function*(){const t=yield(0,r.n)(e.dialog.open(c.D,{title:"Rich text editor",width:"75vw",height:"75vh",data:e.metadata?.relationsOptions?.content??""}).afterClosed());(0,a.EN)(t)&&e.metadata?.relationsOptions&&(e.metadata.relationsOptions.content=t)},function(){var e=this,n=arguments;return new Promise((function(o,i){var s=t.apply(e,n);function a(t){_(s,o,i,a,r,"next",t)}function r(t){_(s,o,i,a,r,"throw",t)}a(void 0)}))})()}}w.ɵfac=function(t){return new(t||w)(d.Y(u.s),d.Y(l.SB),d.Y(x.J))},w.ɵcmp=p.Xp({type:w,selectors:[["rich-text-source-node"]],standalone:!0,features:[h.q,v.j],decls:12,vars:5,consts:[["name","rich text source",3,"parent","destroySubject"],[1,"node-content"],[1,"inputs-outputs"],[1,"inputs"],[1,"outputs"],[1,"output"],["name","htmlString",3,"parentCoordiantes","zoomLevel","parent"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(f._U(0,"relations-node-header",0),f.Tg(1,"div",1)(2,"div",2),f._U(3,"div",3),f.Tg(4,"div",4)(5,"div",5)(6,"div"),m._(7,"html string"),f.qZ(),f._U(8,"relation-node-output",6),f.qZ()()(),f.Tg(9,"button",7),g.N("click",(function(){return e.showCodeEditor()})),f.Tg(10,"span"),m._(11,"content"),f.qZ()()()),2&t&&(b.Q("parent",e)("destroySubject",e.destroySubject),y.x(8),b.Q("parentCoordiantes",e.nodePosition)("zoomLevel",e.zoomLevel)("parent",e))},dependencies:[i.e,s.n],encapsulation:2,changeDetection:0});class k{constructor(){this.metaInfo={name:"Rich text source",description:"Provides rich text source node",group:"Texts"},this.nodeDefinition=w,Object.freeze(this)}}}}]);
//# sourceMappingURL=9589.chunk.3f3edef62a5e3ecb369f.js.map