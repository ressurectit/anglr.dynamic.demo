"use strict";(self.webpackChunkng_universal_demo=self.webpackChunkng_universal_demo||[]).push([[7672],{85638:(t,o,e)=>{var a,n;e.d(o,{F:()=>i}),function(t){t[t.Light=200]="Light",t[t.Normal=400]="Normal",t[t.SemiBold=600]="SemiBold",t[t.Bold=700]="Bold"}(a||(a={})),function(t){t[t.px=0]="px",t[t.pt=1]="pt",t[t.em=2]="em"}(n||(n={}));class i{}i.demoRelationsComplexLayout={id:"stackPanel-gnunpdxjmo",displayName:"root",package:"basic-components",name:"stackPanel",options:{children:[{id:"toggleButton-cxgzwxfbakimcwtt",displayName:"toggleButton-cxgzwxfbakimcwtt",package:"basic-components",name:"toggleButton",options:{onText:"enabled",offText:"disabled",state:!0,disabled:!1}},{id:"toggleButton-tebgqrkcwwjohouy",displayName:"toggleButton-tebgqrkcwwjohouy",package:"basic-components",name:"toggleButton",options:{onText:"true",offText:"false",state:!0,disabled:!1,margin:{top:"100px",right:null,bottom:null,left:"50px"},padding:{top:null,right:null,bottom:null,left:null},textStyling:null}},{id:"ifBlock-itsfrxuwqkjwmfba",displayName:"ifBlock-itsfrxuwqkjwmfba",package:"basic-components",name:"ifBlock",options:{content:{id:"textBlock-uxqfhpaidkfrkkcn",displayName:"textBlock-uxqfhpaidkfrkkcn",package:"basic-components",name:"textBlock",options:{text:"Text zavisly"}}}}]}},i.demoLayoutWithRelations={id:"stackPanel-vqvfofhvbr",displayName:"root",package:"basic-components",name:"stackPanel",options:{children:[{id:"toggleButton-hdiibafzmmsbxwce",displayName:"toggleButton-hdiibafzmmsbxwce",package:"basic-components",name:"toggleButton",options:{onText:"enabled",offText:"disabled",state:!0,disabled:!1}},{id:"toggleButton-fdlsupcfigkcfkht",displayName:"button",package:"basic-components",name:"toggleButton",options:{onText:"Visible",offText:"Hidden",state:!1,disabled:!1}},{id:"ifBlock-mptoexcmmpziivra",displayName:"if block",package:"basic-components",name:"ifBlock",options:{content:{id:"stackPanel-rrnjftuftknhrect",displayName:"stackPanel-rrnjftuftknhrect",package:"basic-components",name:"stackPanel",options:{children:[{id:"textBlock-rqatdtspmrxoiphw",displayName:"textBlock-rqatdtspmrxoiphw",package:"basic-components",name:"textBlock",options:{text:"Druhý riadok"}},{id:"textBlock-kogfkyqyjrbjmscb",displayName:"textBlock-kogfkyqyjrbjmscb",package:"basic-components",name:"textBlock",options:{text:"Prvý riadok"}}]}}}},{id:"textBlock-cwbnbrdroqimxhor",displayName:"textBlock-cwbnbrdroqimxhor",package:"basic-components",name:"textBlock",options:{text:"Tretí riadok - mimo"}}]}},i.demoLayout={id:"gridPanelTest",package:"basic-components",name:"gridPanel",options:{columns:[{width:"1fr"},{width:"2fr"},{width:"1fr"},{width:"100px"}],rows:[{height:"300px"}],cells:[{id:"celltest",package:"basic-components",name:"gridPanelCell",options:{gridColumnStart:2,gridColumnEnd:3,gridRowStart:1,gridRowEnd:2,component:{id:"stackPanelTest",package:"basic-components",name:"stackPanel",options:{padding:{top:"20px"},children:[{id:"textTest",package:"basic-components",name:"textBlock",options:{text:"toto je text",margin:{top:"10px",bottom:"6px",left:"12px",right:"14pt"},padding:{top:"8px",bottom:"8px",left:"12px",right:"12px"},textStyling:{fontSize:"20px"},flex:"1"}},{id:"text2Test",package:"basic-components",name:"textBlock",options:{text:"druhý riadok je toto",textStyling:{fontWeight:a.Bold}}},{id:"styleBlock-thjphwmhesuywokp",displayName:"styleBlock-thjphwmhesuywokp",package:"css-components",name:"styleBlock",options:{content:{id:"stackPanel-veydkvmijnamfvgo",displayName:"stackPanel-veydkvmijnamfvgo",package:"basic-components",name:"stackPanel",options:{children:[{id:"textBlock-recxnhpmozgxhrqe",displayName:"textBlock-recxnhpmozgxhrqe",package:"basic-components",name:"textBlock",options:{text:"This is your text"}},{id:"textBlock-lvxyyyfodftunril",displayName:"textBlock-lvxyyyfodftunril",package:"basic-components",name:"textBlock",options:{text:"This is your text",cssClass:"text-danger",margin:{top:null,right:null,bottom:null,left:null},padding:{top:null,right:null,bottom:null,left:null},textStyling:null}}]}},style:"text-block\r\n{\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n}\r\n\r\n.text-danger\r\n{\r\n    color: red;\r\n}"}},{id:"button-test",package:"basic-components",name:"button",options:{text:"test btn"}}]}}}},{id:"anotherCell",package:"basic-components",name:"gridPanelCell",options:{gridColumnStart:3,gridColumnEnd:4,gridRowStart:1,gridRowEnd:2,component:{package:"basic-components",id:"textJeTo",name:"textBlock",options:{text:"nový text"}}}},{id:"gridCellxxx",package:"basic-components",name:"gridPanelCell",options:{gridColumnStart:4,gridColumnEnd:5,gridRowStart:1,gridRowEnd:2,component:{id:"stackPanelxxx",package:"basic-components",name:"stackPanel",options:{horizontal:!0,children:[]}}}}]}},i.demoRelationsComplexRelations=[{id:"negation-sgxkzfxotghwaopl",name:"negation",package:"basic-components",displayName:"negation-sgxkzfxotghwaopl",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:600,y:321},options:null},outputs:[{outputName:"negatedCondition",inputs:[{id:"toggleButton-tebgqrkcwwjohouy",inputName:"disabled"}]}]},{id:"static-input",name:"static-input",package:"static-components",displayName:"static-input",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:166,y:257},options:null},outputs:[{outputName:"stringOutput",inputs:[]},{outputName:"booleanOutput",inputs:[{id:"toggleButton-cxgzwxfbakimcwtt",inputName:"disabled"}]}]},{id:"static-output",name:"static-output",package:"static-components",displayName:"static-output",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:1278,y:255},options:null},outputs:[]},{id:"toggleButton-cxgzwxfbakimcwtt",name:"toggleButton-cxgzwxfbakimcwtt",package:"layout-components",displayName:"toggleButton-cxgzwxfbakimcwtt",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:388,y:135},options:null},outputs:[{outputName:"toggle",inputs:[{id:"negation-sgxkzfxotghwaopl",inputName:"condition"}]}]},{id:"toggleButton-tebgqrkcwwjohouy",name:"toggleButton-tebgqrkcwwjohouy",package:"layout-components",displayName:"toggleButton-tebgqrkcwwjohouy",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:836,y:131},options:null},outputs:[{outputName:"toggle",inputs:[{id:"static-output",inputName:"booleanInput"},{id:"ifBlock-itsfrxuwqkjwmfba",inputName:"condition"}]}]},{id:"ifBlock-itsfrxuwqkjwmfba",name:"ifBlock-itsfrxuwqkjwmfba",package:"layout-components",displayName:"ifBlock-itsfrxuwqkjwmfba",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:1246,y:94},options:null},outputs:[]}],i.relationsDemo=[{id:"sample-source",package:"basic-components",name:"sampleSource",relationsOptions:null,outputs:[{outputName:"vystup",inputs:[{id:"sample-changes",inputName:"vstup"}]}],nodeMetadata:{scopeConfigurable:!0,coordinates:{x:30,y:60},options:null}},{id:"sample-changes",package:"basic-components",name:"sampleChange",relationsOptions:null,outputs:[{outputName:"vystup",inputs:[{id:"sample-changes2",inputName:"vstup"}]}],nodeMetadata:{scopeConfigurable:!0,coordinates:{x:230,y:100},options:null}},{id:"sample-changes2",package:"basic-components",name:"sampleChange",relationsOptions:null,outputs:[],nodeMetadata:{scopeConfigurable:!0,coordinates:{x:430,y:40},options:null}}],i.relationsStaticDemo=[{id:"sample-source",package:"basic-components",name:"sampleSource",relationsOptions:null,outputs:[{outputName:"vystup",inputs:[{id:"relations-sample-click",inputName:"vstup"}]}],nodeMetadata:{scopeConfigurable:!0,coordinates:{x:30,y:60},options:null}},{id:"relations-sample-click",package:"static-components",name:"relations-sample-click",relationsOptions:null,outputs:[{outputName:"vystup",inputs:[{id:"sample-changes",inputName:"vstup"}]}],nodeMetadata:{scopeConfigurable:!0,coordinates:{x:230,y:80},options:null}},{id:"sample-changes",package:"basic-components",name:"sampleChange",relationsOptions:null,outputs:[{outputName:"vystup",inputs:[{id:"relations-result",inputName:"vstup"}]}],nodeMetadata:{scopeConfigurable:!0,coordinates:{x:430,y:100},options:null}},{id:"relations-result",package:"static-components",name:"relations-result",relationsOptions:null,outputs:[],nodeMetadata:{scopeConfigurable:!0,coordinates:{x:630,y:60},options:null}}],i.relationsWithLayoutDemo=[{id:"toggleButton-fdlsupcfigkcfkht",name:"toggleButton-fdlsupcfigkcfkht",package:"layout-components",displayName:"toggleButton-fdlsupcfigkcfkht",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:517,y:315},options:null},outputs:[{outputName:"toggle",inputs:[{id:"ifBlock-mptoexcmmpziivra",inputName:"condition"}]}]},{id:"ifBlock-mptoexcmmpziivra",name:"ifBlock-mptoexcmmpziivra",package:"layout-components",displayName:"ifBlock-mptoexcmmpziivra",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:565,y:105},options:null},outputs:[]},{id:"toggleButton-hdiibafzmmsbxwce",name:"toggleButton-hdiibafzmmsbxwce",package:"layout-components",displayName:"toggleButton-hdiibafzmmsbxwce",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:89,y:103},options:null},outputs:[{outputName:"toggle",inputs:[{id:"negation-sgxkzfxotghwaopl",inputName:"condition"}]}]},{id:"negation-sgxkzfxotghwaopl",name:"negation",package:"basic-components",displayName:"negation-sgxkzfxotghwaopl",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:163,y:314},options:null},outputs:[{outputName:"negatedCondition",inputs:[{id:"toggleButton-fdlsupcfigkcfkht",inputName:"disabled"}]}]}],i.relationsStaticWithEditorDemo=[{id:"sample-source",package:"basic-components",name:"sampleSource",relationsOptions:null,outputs:[{outputName:"vystup",inputs:[{id:"relations-sample-click",inputName:"vstup"}]}],nodeMetadata:{scopeConfigurable:!0,coordinates:{x:30,y:60},options:null}},{id:"relations-sample-click",package:"static-components",name:"relations-sample-click",relationsOptions:null,outputs:[{outputName:"vystup",inputs:[{id:"sample-changes",inputName:"vstup"}]}],nodeMetadata:{scopeConfigurable:!0,coordinates:{x:230,y:80},options:null}},{id:"sample-changes",package:"basic-components",name:"sampleChange",relationsOptions:null,outputs:[{outputName:"vystup",inputs:[{id:"relations-result",inputName:"vstup"}]}],nodeMetadata:{scopeConfigurable:!0,coordinates:{x:430,y:100},options:null}},{id:"relations-result",package:"static-components",name:"relations-result",relationsOptions:null,outputs:[],nodeMetadata:{scopeConfigurable:!0,coordinates:{x:630,y:60},options:null}}],i.complexDemoRestLayout={id:"stackPanel-lmzeehndic",displayName:"root",package:"basic-components",name:"stackPanel",options:{children:[{id:"textBlock-qdmlirsbsocykwdt",displayName:"textBlock-qdmlirsbsocykwdt",package:"basic-components",name:"textBlock",options:{text:"Write 'nice' or 'default' and see what happens"}},{id:"ifBlock-tmwjofgfbijizdsd",displayName:"ifBlock-tmwjofgfbijizdsd",package:"basic-components",name:"ifBlock",options:{condition:!0,content:{id:"htmlBlock-fjcmywitfmggcczg",displayName:"result text",package:"basic-components",name:"htmlBlock",options:{}}}},{id:"styleBlock-gjloaxmndqctbvur",displayName:"result text",package:"css-components",name:"styleBlock",options:{content:{id:"htmlBlock-lkgbjhhwxcprqazq",displayName:"error text",package:"basic-components",name:"htmlBlock",options:{}},style:"*\r\n{\r\n    color: red;\r\n}"}}]}},i.complexDemoRestRelations=[{id:"rest-gtxgzfdjdetcfxge",name:"rest",package:"basic-components",displayName:"rest-gtxgzfdjdetcfxge",relationsOptions:{url:"api/test/{id}.json",method:"GET",runImmediately:!0,params:[{configurable:!0,name:"id",type:"PATH"}]},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:237,y:19},options:null},outputs:[{outputName:"success",inputs:[{id:"dataTemplate-jyigbbscythtjvbl",inputName:"data"},{id:"ifBlock-tmwjofgfbijizdsd",inputName:"condition"}]},{outputName:"error",inputs:[{id:"dataTemplate-ieotfcorviatqkio",inputName:"data"}]}]},{id:"static-input",name:"static-input",package:"static-components",displayName:"static-input",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:37,y:275},options:null},outputs:[{outputName:"stringOutput",inputs:[{id:"rest-gtxgzfdjdetcfxge",inputName:"id"}]},{outputName:"booleanOutput",inputs:[]}]},{id:"dataTemplate-jyigbbscythtjvbl",name:"dataTemplate",package:"handlebars-components",displayName:"dataTemplate-jyigbbscythtjvbl",relationsOptions:{template:"{{message}}"},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:551,y:404},options:null},outputs:[{outputName:"output",inputs:[{id:"htmlBlock-fjcmywitfmggcczg",inputName:"content"}]}]},{id:"dataTemplate-ieotfcorviatqkio",name:"dataTemplate",package:"handlebars-components",displayName:"dataTemplate-ieotfcorviatqkio",relationsOptions:{template:"{{message}}"},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:557,y:574},options:null},outputs:[{outputName:"output",inputs:[{id:"htmlBlock-lkgbjhhwxcprqazq",inputName:"content"}]}]},{id:"richTextSource-fylskmtjhddedbbp",name:"richTextSource",package:"tinymce-components",displayName:"richTextSource-fylskmtjhddedbbp",relationsOptions:{content:"<ul>\n<li><strong>name</strong> <em>{{name}}</em></li>\n<li><strong>surname</strong> <em>{{surname}}</em></li>\n</ul>"},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:11,y:419},options:null},outputs:[{outputName:"htmlString",inputs:[{id:"dataTemplate-jyigbbscythtjvbl",inputName:"template"}]}]},{id:"htmlBlock-fjcmywitfmggcczg",name:"htmlBlock-fjcmywitfmggcczg",package:"layout-components",displayName:"htmlBlock-fjcmywitfmggcczg",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:903,y:210},options:null},outputs:[]},{id:"htmlBlock-lkgbjhhwxcprqazq",name:"htmlBlock-lkgbjhhwxcprqazq",package:"layout-components",displayName:"htmlBlock-lkgbjhhwxcprqazq",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:911,y:346},options:null},outputs:[]},{id:"ifBlock-tmwjofgfbijizdsd",name:"ifBlock-tmwjofgfbijizdsd",package:"layout-components",displayName:"ifBlock-tmwjofgfbijizdsd",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:907,y:91},options:null},outputs:[]}],i.complexDemoFullLayout={id:"stackPanel-beygjadhnr",displayName:"root",package:"basic-components",name:"stackPanel",options:{children:[{id:"richTextBlock-wrqwuruxkuozuxrp",displayName:"richTextBlock-wrqwuruxkuozuxrp",package:"tinymce-components",name:"richTextBlock",options:{content:"<p>This is nice <strong>Rich Text Block</strong> with <em>static</em> content<br>you can use:</p>\n<ul>\n<li><span style='color: rgb(22, 145, 121);'>text styling</span></li>\n<li><span style='color: rgb(22, 145, 121);'>multiline text</span></li>\n<li><span style='color: rgb(22, 145, 121);'>and many other stuff</span></li>\n</ul>"}},{id:"styleBlock-nylkqvvggqgelzpt",displayName:"styleBlock-nylkqvvggqgelzpt",package:"css-components",name:"styleBlock",options:{content:{id:"stackPanel-pasdjtmntxxhbtif",displayName:"stackPanel-pasdjtmntxxhbtif",package:"basic-components",name:"stackPanel",options:{children:[{id:"richTextBlock-wayojkvcdzfxhgzw",displayName:"richTextBlock-wayojkvcdzfxhgzw",package:"tinymce-components",name:"richTextBlock",options:{content:"<p>This is nice <strong>Rich Text Block</strong> with <em>static</em> content used inside of <em><strong>style block</strong></em><br>you can use:</p>\n<ul>\n<li><span style='color: rgb(22, 145, 121);'>text styling</span></li>\n<li><span style='color: rgb(22, 145, 121);'>multiline text</span></li>\n<li><span style='color: rgb(22, 145, 121);'>and many other stuff</span></li>\n</ul>"}},{id:"textBlock-qhdyjknpcjqwacot",displayName:"textBlock-qhdyjknpcjqwacot",package:"basic-components",name:"textBlock",options:{text:"Simple text block within style block"}},{id:"textBlock-xkrqqhjijejhnsbk",displayName:"textBlock-xkrqqhjijejhnsbk",package:"basic-components",name:"textBlock",options:{text:"Simple text block with css class text-red within style block",cssClass:"text-red",margin:{top:null,right:null,bottom:null,left:null},padding:{top:null,right:null,bottom:null,left:null},textStyling:null}}]}},style:"rich-text-block\r\n{\r\n    font-size: 1.4em;\r\n}\r\n\r\ntext-block\r\n{\r\n    font-size: 1.2em;\r\n}\r\n\r\n.text-red\r\n{\r\n    color: red;\r\n}"}},{id:"textBlock-ddrupvsdqlvupdix",displayName:"textBlock-ddrupvsdqlvupdix",package:"basic-components",name:"textBlock",options:{text:"Simple text block"}},{id:"textBlock-ipaqxlwdcymfkwod",displayName:"textBlock-ipaqxlwdcymfkwod",package:"basic-components",name:"textBlock",options:{text:"Simple text block with css class text-red",cssClass:"text-red",margin:{top:null,right:null,bottom:null,left:null},padding:{top:null,right:null,bottom:null,left:null},textStyling:null}},{id:"stackPanel-txrjlfxozbodmxcb",displayName:"stackPanel-txrjlfxozbodmxcb",package:"basic-components",name:"stackPanel",options:{children:[{id:"toggleButton-mcthrpzgxzjsyfry",displayName:"toggleButton-mcthrpzgxzjsyfry",package:"basic-components",name:"toggleButton",options:{onText:"hide (true)",offText:"show (false)",state:!0,disabled:!1}},{id:"toggleButton-uiexplfcokfepzla",displayName:"toggleButton-uiexplfcokfepzla",package:"basic-components",name:"toggleButton",options:{onText:"show with negation (true)",offText:"hide with negation (false)",state:!0,disabled:!1,cssClass:null,margin:{top:null,right:null,bottom:null,left:"10px"},padding:{top:null,right:null,bottom:null,left:null},textStyling:null}}],horizontal:!0,wrap:!1,cssClass:null,margin:{top:"20px",right:null,bottom:"10px",left:null},padding:{top:null,right:null,bottom:null,left:null},textStyling:null}},{id:"ifBlock-npjsceeegdggbobt",displayName:"ifBlock-npjsceeegdggbobt",package:"basic-components",name:"ifBlock",options:{condition:!0,content:{id:"stackPanel-tkhpegqxzrnhcguy",displayName:"stackPanel-tkhpegqxzrnhcguy",package:"basic-components",name:"stackPanel",options:{children:[{id:"textBlock-yjmagkldyrobwnik",displayName:"textBlock-yjmagkldyrobwnik",package:"basic-components",name:"textBlock",options:{text:"Write something into input on left and you will see it here:"}},{id:"htmlBlock-dcpbevwptjcapuuo",displayName:"htmlBlock-dcpbevwptjcapuuo",package:"basic-components",name:"htmlBlock",options:{content:"text from input"}},{id:"htmlBlock-zechbkcvoryocjsw",displayName:"htmlBlock-zechbkcvoryocjsw",package:"basic-components",name:"htmlBlock",options:{content:"text from input with transform"}}]}}}},{id:"stackPanel-ngdupdsphwbvqyuc",displayName:"stackPanel-ngdupdsphwbvqyuc",package:"basic-components",name:"stackPanel",options:{horizontal:!0,wrap:!1,children:[{id:"textBlock-gyggvjnhplpvubzx",displayName:"textBlock-gyggvjnhplpvubzx",package:"basic-components",name:"textBlock",options:{text:"value of first button:",cssClass:"bold",margin:{top:null,right:"10px",bottom:null,left:null},padding:{top:null,right:null,bottom:null,left:null},textStyling:null}},{id:"htmlBlock-hcmxzixcqvdvmhro",displayName:"htmlBlock-hcmxzixcqvdvmhro",package:"basic-components",name:"htmlBlock",options:{content:"true or false"}}]}},{id:"stackPanel-ebgnhczhycabvtvm",displayName:"stackPanel-ebgnhczhycabvtvm",package:"basic-components",name:"stackPanel",options:{horizontal:!0,wrap:!1,children:[{id:"textBlock-raujpwlmgoquneph",displayName:"textBlock-raujpwlmgoquneph",package:"basic-components",name:"textBlock",options:{text:"value of first button with negation:",cssClass:"bold",margin:{top:null,right:"10px",bottom:null,left:null},padding:{top:null,right:null,bottom:null,left:null},textStyling:null}},{id:"htmlBlock-wrbokioxmurhwpfb",displayName:"htmlBlock-wrbokioxmurhwpfb",package:"basic-components",name:"htmlBlock",options:{content:"true or false"}}]}},{id:"textBlock-ursfvilgwmyoepof",displayName:"textBlock-ursfvilgwmyoepof",package:"basic-components",name:"textBlock",options:{text:"Data block sample:",cssClass:"bold",margin:{top:"16px",right:null,bottom:null,left:null},padding:{top:null,right:null,bottom:null,left:null},textStyling:null}},{id:"dataBlock-ehdywmgygqqixqtw",displayName:"dataBlock-ehdywmgygqqixqtw",package:"handlebars-components",name:"dataBlock",options:{template:"<div>static data</div>\r\n<div>name:{{name}}</div>\r\n<div>surname:{{surname}}</div>"}},{id:"textBlock-huuewtxeekrxignt",displayName:"textBlock-huuewtxeekrxignt",package:"basic-components",name:"textBlock",options:{text:"wysiwyg with data:",cssClass:"bold",margin:{top:"16px",right:null,bottom:null,left:null},padding:{top:null,right:null,bottom:null,left:null},textStyling:null}},{id:"htmlBlock-ggpvvtgijxhbcohp",displayName:"htmlBlock-ggpvvtgijxhbcohp",package:"basic-components",name:"htmlBlock",options:{content:"here will be wysiwyg data"}}]}},i.complexDemoFullRelations=[{id:"negation-qvbqandognyjqdmy",name:"negation",package:"basic-components",displayName:"negation-qvbqandognyjqdmy",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:841,y:194},options:null},outputs:[{outputName:"negatedCondition",inputs:[{id:"htmlBlock-wrbokioxmurhwpfb",inputName:"content"},{id:"static-output",inputName:"booleanInput"}]}]},{id:"sampleSource-fkyadmjjmcpqkrwr",name:"sampleSource",package:"basic-components",displayName:"sampleSource-fkyadmjjmcpqkrwr",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:34,y:291},options:null},outputs:[{outputName:"vystup",inputs:[]},{outputName:"obj",inputs:[{id:"dataBlock-ehdywmgygqqixqtw",inputName:"data"},{id:"dataTemplate-epbrdoqwxwiidpth",inputName:"data"}]}]},{id:"static-input",name:"static-input",package:"static-components",displayName:"static-input",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:37,y:22},options:null},outputs:[{outputName:"stringOutput",inputs:[{id:"htmlBlock-dcpbevwptjcapuuo",inputName:"content"},{id:"sampleChange-vdepgebvmexpjbgs",inputName:"vstup"}]},{outputName:"booleanOutput",inputs:[{id:"toggleButton-mcthrpzgxzjsyfry",inputName:"disabled"}]}]},{id:"static-output",name:"static-output",package:"static-components",displayName:"static-output",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:1257.4117647058822,y:254.41176470588235},options:null},outputs:[]},{id:"dataTemplate-epbrdoqwxwiidpth",name:"dataTemplate",package:"handlebars-components",displayName:"dataTemplate-epbrdoqwxwiidpth",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:453,y:470},options:null},outputs:[{outputName:"output",inputs:[{id:"htmlBlock-ggpvvtgijxhbcohp",inputName:"content"}]}]},{id:"richTextSource-iitweunljwassylo",name:"richTextSource",package:"tinymce-components",displayName:"richTextSource-iitweunljwassylo",relationsOptions:{content:"<ul>\n<li>name: <strong>{{name}}</strong></li>\n<li>surname: <strong>{{surname}}</strong></li>\n<li>man: <strong>{{man}}</strong></li>\n<li>address: <em>{{address.city}}</em></li>\n</ul>"},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:53,y:513},options:null},outputs:[{outputName:"htmlString",inputs:[{id:"dataTemplate-epbrdoqwxwiidpth",inputName:"template"}]}]},{id:"toggleButton-mcthrpzgxzjsyfry",name:"toggleButton-mcthrpzgxzjsyfry",package:"layout-components",displayName:"toggleButton-mcthrpzgxzjsyfry",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:432,y:27},options:null},outputs:[{outputName:"toggle",inputs:[{id:"htmlBlock-hcmxzixcqvdvmhro",inputName:"content"},{id:"ifBlock-npjsceeegdggbobt",inputName:"condition"}]}]},{id:"htmlBlock-hcmxzixcqvdvmhro",name:"htmlBlock-hcmxzixcqvdvmhro",package:"layout-components",displayName:"htmlBlock-hcmxzixcqvdvmhro",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:1172,y:21},options:null},outputs:[]},{id:"htmlBlock-wrbokioxmurhwpfb",name:"htmlBlock-wrbokioxmurhwpfb",package:"layout-components",displayName:"htmlBlock-wrbokioxmurhwpfb",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:1254,y:152},options:null},outputs:[]},{id:"toggleButton-uiexplfcokfepzla",name:"toggleButton-uiexplfcokfepzla",package:"layout-components",displayName:"toggleButton-uiexplfcokfepzla",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:431,y:147},options:null},outputs:[{outputName:"toggle",inputs:[{id:"negation-qvbqandognyjqdmy",inputName:"condition"}]}]},{id:"htmlBlock-dcpbevwptjcapuuo",name:"htmlBlock-dcpbevwptjcapuuo",package:"layout-components",displayName:"htmlBlock-dcpbevwptjcapuuo",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:55,y:189},options:null},outputs:[]},{id:"ifBlock-npjsceeegdggbobt",name:"ifBlock-npjsceeegdggbobt",package:"layout-components",displayName:"ifBlock-npjsceeegdggbobt",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:842,y:323},options:null},outputs:[]},{id:"dataBlock-ehdywmgygqqixqtw",name:"dataBlock-ehdywmgygqqixqtw",package:"layout-components",displayName:"dataBlock-ehdywmgygqqixqtw",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:433,y:325},options:null},outputs:[]},{id:"htmlBlock-ggpvvtgijxhbcohp",name:"htmlBlock-ggpvvtgijxhbcohp",package:"layout-components",displayName:"htmlBlock-ggpvvtgijxhbcohp",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:964,y:471},options:null},outputs:[]},{id:"htmlBlock-zechbkcvoryocjsw",name:"htmlBlock-zechbkcvoryocjsw",package:"layout-components",displayName:"htmlBlock-zechbkcvoryocjsw",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:605,y:616},options:null},outputs:[]},{id:"sampleChange-vdepgebvmexpjbgs",name:"sampleChange",package:"basic-components",displayName:"sampleChange-vdepgebvmexpjbgs",relationsOptions:{},nodeMetadata:{scopeConfigurable:!0,coordinates:{x:286,y:634},options:null},outputs:[{outputName:"vystup",inputs:[{id:"htmlBlock-zechbkcvoryocjsw",inputName:"content"}]}]}]},12193:(t,o,e)=>{function a(t,o,e,a,n,i,l){try{var s=t[i](l),c=s.value}catch(t){return void e(t)}s.done?o(c):Promise.resolve(c).then(a,n)}e.d(o,{S:()=>n});class n{constructor(t,o,e,a,n){this.providers=t,this.extractors=o,this.validatorFn=e,this.logger=a,this.noCache=n,this.cachedDynamicItems={},Array.isArray(this.providers)||(this.logger?.error("DynamicItemLoader: missing providers!"),this.providers=[]),Array.isArray(this.extractors)||(this.logger?.error("DynamicItemLoader: missing extractors!"),this.extractors=[])}loadItem(t){var o,e=this;return(o=function*(){let o=null;const a=`${t.package}-${t.name}`;if(a in e.cachedDynamicItems&&!e.noCache)return e.logger?.verbose("DynamicItemLoader: Loading from cache {@source}",{name:t.name,package:t.package}),e.cachedDynamicItems[a];for(const a of e.providers){const e=a.tryToGet(t);if(o=e?yield e:null,o)break}if(!o)return e.logger?.debug("DynamicItemLoader: Failed to get dynamic module {@source}",{name:t.name,package:t.package}),null;for(const n of e.extractors){const i=yield n.tryToExtract(o);if(i)return e.cachedDynamicItems[a]=e.validatorFn(i)?i:null,e.cachedDynamicItems[a]||e.logger?.warn("DynamicItemLoader: Found dynamic item {@source} is not of requested type",{name:t.name,package:t.package}),e.cachedDynamicItems[a]}return e.logger?.debug("DynamicItemLoader: Failed to extract dynamic item {@source}",{name:t.name,package:t.package}),e.cachedDynamicItems[a]=null,null},function(){var t=this,e=arguments;return new Promise((function(n,i){var l=o.apply(t,e);function s(t){a(l,n,i,s,c,"next",t)}function c(t){a(l,n,i,s,c,"throw",t)}s(void 0)}))})()}}},65569:(t,o,e)=>{e.d(o,{$:()=>l});var a=e(57466),n=e(43939);function i(t,o,e,a,n,i,l){try{var s=t[i](l),c=s.value}catch(t){return void e(t)}s.done?o(c):Promise.resolve(c).then(a,n)}class l{constructor(t,o){this._extractorFunctions=t,this._logger=o,Array.isArray(this._extractorFunctions)||(this._logger?.error("DynamicModuleDataExtractor: missing extractor functions!"),this._extractorFunctions=[])}tryToExtract(t){var o,e=this;return(o=function*(){const o={};for(const n of e._extractorFunctions)(0,a.l7)(!0,o,yield n(t,e._logger));return(0,n.Qr)(o)?null:o},function(){var t=this,e=arguments;return new Promise((function(a,n){var l=o.apply(t,e);function s(t){i(l,a,n,s,c,"next",t)}function c(t){i(l,a,n,s,c,"throw",t)}s(void 0)}))})()}}}}]);
//# sourceMappingURL=7672.chunk.aae1ed38c1059688a459.js.map