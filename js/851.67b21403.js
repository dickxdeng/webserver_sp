"use strict";(self["webpackChunkCustomsPedia"]=self["webpackChunkCustomsPedia"]||[]).push([[851],{26497:function(e,a,l){function t(e){return e.replace(/(^,*)|(,*$)/g,"")}l.d(a,{QV:function(){return t}})},18684:function(e,a,l){l.d(a,{A:function(){return c}});var t=l(28694),o=l(83487),n=l(38118);const s={key:1};var u=(0,t.pM)({__name:"Tooltip",props:{content:{},placement:{},className:{},showArrow:{type:Boolean,default:!0},offset:{default:0}},setup(e){const a=(0,t.Ht)(),l=(0,n.KR)(!0),u=(0,n.KR)(null),i=()=>{if(u.value){const e=u.value?.parentNode?.parentNode?.offsetWidth,a=u.value.offsetWidth;l.value=!(a>e)}};return(e,d)=>{const c=(0,t.g2)("el-tooltip");return(0,t.uX)(),(0,t.Wv)(c,{class:"el-tooltip",effect:"light",disabled:l.value,content:e.content,placement:e.placement,"show-arrow":e.showArrow,offset:e.offset},{default:(0,t.k6)((()=>[(0,t.Lk)("span",{class:"over-flow",onMouseover:i},[(0,t.Lk)("span",{ref_key:"refName",ref:u,class:(0,o.C4)(e.className)},[(0,n.R1)(a).default?(0,t.RG)(e.$slots,"default",{key:0}):((0,t.uX)(),(0,t.CE)("span",s,(0,o.v_)(e.content||"-"),1))],2)],32)])),_:3},8,["disabled","content","placement","show-arrow","offset"])}}}),i=l(83940);const d=(0,i.A)(u,[["__scopeId","data-v-7d8873d0"]]);var c=d},50029:function(e,a,l){l.r(a),l.d(a,{default:function(){return M}});l(14898);var t=l(28694),o=l(83487),n=l(38118),s=l(97913),u=l(32228),i=l(19477),d=l(74560),c=l(12567),r=l(47679),g=l(36981),p=l(52582),v=l(18684),k=l(94102),h=l(51832),b=l(26497),m=l(81329),w=l(34197),y=l(48467),f=l(98836);const L=e=>((0,t.Qi)("data-v-575f63e2"),e=e(),(0,t.jt)(),e),R={class:"main-top"},z={class:"main-top-nav"},_=L((()=>(0,t.Lk)("span",null,"<",-1))),T=L((()=>(0,t.Lk)("span",null,"< ",-1))),A=L((()=>(0,t.Lk)("span",null,"/",-1))),C={key:2},K={key:5},W={key:6,class:"n-type"},F={key:7},N={key:0,class:"main-top-batch"},X={class:"th-s-label"},S={class:"th-s-label"},I={class:"th-s-label"},x={class:"th-s"},V={class:"empty"},E=L((()=>(0,t.Lk)("div",{class:"icon"},[(0,t.Lk)("img",{src:"/images/pk-nodata.png",width:"176",height:"115"})],-1))),Q={class:"actions"},P={class:"preview"},U={key:2,class:"footer"};var B=(0,t.pM)({__name:"detail",setup(e){const{locale:a,t:l}=(0,u.s9)(),L=(0,f.rd)(),{STATES:B,TYPES:D,LANGS:H,LangOptions:M,StatusOptions:j,TypeOptions:q,translateState:O,queryState:$}=(0,h.A)(),G=L.currentRoute.value.query.id,Y=(0,n.KR)(""),J=(0,n.KR)(1),Z=(0,t.EW)((()=>q[J.value].label)),ee=(0,n.KR)(!1),ae=(0,n.KR)(!1),le=(0,n.Kh)({knowledgeId:G,knowledgeName:"",knowledgeType:""}),te=(0,n.KR)(0),oe=(0,n.KR)(!1),ne=(0,n.KR)(!1),se=(0,n.Kh)({reload:!0,loading:!1,list:[],pagination:{total:0,current:1,pageSize:10,sizes:[10,20,50,100,1e3],sizeChange:()=>{},onChange:e=>{}}}),ue=(0,n.KR)([]),{pushQuery:ie,queryParams:de}=(0,k.A)("/organize/knowledge/detail",(async(e,a)=>{se.loading=!0,e.knowledgeId=G,e.associate=ee.value?"0":"1";const l=await(0,y.r0)(e),{rows:t}=l,o=t||[];se.list=o.map((e=>(e.docTags=(0,b.QV)(e.docTags||""),e.tags=""!==e.docTags?e.docTags.split(","):[],e.type=D[e.docType],e.lang=H[e.docLang||"zh-cn"],e.translateState=O(e.state,e.parserState),e))),setTimeout((()=>{se.list.map((e=>e.kdid&&ke.value.tableRef.toggleRowSelection(e,!0)))})),se.pagination={total:l.total||0,current:e.page,pageSize:e.perPage,sizes:[10,20,50,100,1e3],sizeChange:e=>{se.reload=!1,fe({perPage:e,page:1}),setTimeout((()=>se.reload=!0),400)},onChange:e=>fe({page:e})},se.loading=!1})),ce=e=>{ue.value=e,e.length<se.list.length&&!0===ae.value&&(ae.value=!1)},re=(0,t.EW)((()=>0===ue.value.length)),ge=(0,t.EW)((()=>0===ue.value.length)),pe=(0,n.KR)(!1),ve=((0,n.KR)(!1),(0,n.KR)(!1),(0,n.KR)(!1)),ke=(0,n.KR)(null),he=((0,n.KR)(!1),(0,n.Kh)({id:0,name:"",lang:"",tags:[]}),(0,n.KR)(!1),(0,n.KR)({lang:"1",tags:[],type:"",files:[]}),(0,n.KR)(!1),(0,n.KR)(null),(0,n.Kh)({lang:[{required:!0,trigger:"change"}],name:[{required:!0,trigger:"blur"}],type:[{required:!0,trigger:"change"}]}),(0,n.Kh)({show:!1,uuid:"",history:{},sourceUrl:"",docName:""})),be=((0,n.KR)([]),(0,n.Kh)({fileList:[],show:!1,success:0,fail:0,type:"expand"})),me=((0,n.KR)("/preview/SampleQAData.xlsx"),(0,n.KR)(""),(0,n.KR)(!1),(0,n.KR)(),(0,n.KR)(["标签","长","常常常常","常常"])),we=(0,n.Kh)([{label:"全部",value:"ALL"},{label:"医学",value:"医学"},{label:"财经",value:"财经"},{label:"保险",value:"保险"},{label:"其他",value:"其他"}]),ye=(0,n.Kh)({docName:"",docLang:"ALL",state:0,docType:"ALL",docTags:"ALL",associate:0}),fe=((0,t.EW)((()=>M.filter((e=>"ALL"!==e.value)))),(0,t.EW)((()=>q.filter((e=>"ALL"!==e.value)))),(0,t.EW)((()=>we.filter((e=>"ALL"!==e.value)))),async e=>{const a={id:G,knowledgeId:G,...ye,...$(ye.state),perPage:se.pagination.pageSize,page:se.pagination.current,...e,refresh:(0,m.pr)(new Date)};"ALL"===a.docLang&&delete a.docLang,"ALL"===a.docType&&delete a.docType,"ALL"===a.docTags&&delete a.docTags,delete a.state,delete a.parserState,ie(a),ne.value=!1}),Le=async()=>{ye.docName="",ye.docLang="ALL",ye.state=0,ye.docType="ALL",ye.docTags="ALL",ae.value=!1,se.reload=!1,await fe({page:1}),ne.value=!1,setTimeout((()=>se.reload=!0),400)};(0,t.nT)((()=>{const e=[];de.value.categoryId&&de.value.categoryId.split(",").map((a=>{a&&e.push(Number(a))}));const a={keywords:de.value.keywords||"",category:e,datetime:de.value.startTime&&de.value.endTime?[de.value.startTime,de.value.endTime]:[],tags:de.value.tags};ye.name=a.keywords})),(0,t.nT)((()=>{""!==ye.docName||"ALL"!==ye.docLang||"ALL"!==ye.docTags?ne.value=!0:ne.value=!1}));const Re=()=>{ae.value,ke.value.tableRef.toggleAllSelection()},ze=async()=>{const e=await(0,y.r0)({perPage:10,page:1,knowledgeId:G,associate:1});e&&(te.value=+e.total)},_e=async()=>{await ze(),0===te.value?i.s.confirm(l("page.organizes.knows.detail-selectHintDetail",{knowledgeName:Y.value}),l("page.organizes.docus.hint"),{confirmButtonText:l("page.organizes.docus.buttonSave"),cancelButtonText:l("page.organizes.docus.buttonDel"),cancelButtonClass:"el-button--danger",type:"warning"}).then((async()=>{L.push({path:"/organize/knowledge"})})).catch((async()=>{try{await(0,y.TF)({ids:G}),d.nk.success(l("page.organizes.knows.deleteSuccess")),L.push({path:"/organize/knowledge"})}catch(e){d.nk.error(e?.msg||e)}})):L.push({path:"/organize/knowledge"})},Te=()=>{ee.value=!1,ye.associate=1,fe({}),ze()},Ae=()=>{le.knowledgeName=Y.value,le.knowledgeId=G,le.knowledgeType=J.value,oe.value=!0,Ke=!1};let Ce=!1,Ke=!1;const We=async()=>{if(Ce)return void(Ce=!1);if(Ke)return;Ke=!0;const e=await(0,y.z6)({knowledgeName:le.knowledgeName});if(e&&500===~~e.code)return d.nk.error("Duplicate Knowledge Base Name"),void(Ke=!1);await(0,y.hc)(le),Y.value=le.knowledgeName,d.nk.success(l("page.organizes.successMessage")),oe.value=!1},Fe=()=>{Ce=!0,oe.value=!1},Ne=async()=>{if(ue.value=ue.value.filter((e=>6===e.translateState)),0===ue.value.length)return void d.nk.error(l("page.organizes.docus.selectHint"));let e=`<p>${l("page.organizes.knows.detail-batchStopHintDetail")}</p>`;i.s.confirm(e,l("page.organizes.docus.hint"),{dangerouslyUseHTMLString:!0,confirmButtonText:l("page.organizes.docus.buttonSubmit"),cancelButtonText:l("page.organizes.docus.buttonCancel"),type:"warning"}).then((async()=>{pe.value=!0;let e=ue.value.map((e=>e.docId));const a=e.join(","),t={knowledgeId:G,knowledgeName:Y.value,knowledgeType:J.value,documentIds:a};await(0,y.sl)(t);d.nk.success(l("page.organizes.successMessage")),pe.value=!1,fe({refresh:(0,m.pr)(new Date)})})).catch((()=>{pe.value=!1}))},Xe=async()=>{ee.value=!0,ye.associate=0,fe({})},Se=()=>{0!==ue.value.length?i.s.confirm(l("page.organizes.knows.detail-cancelHintDetail"),l("page.organizes.docus.hint"),{confirmButtonText:l("page.organizes.docus.buttonSubmit"),cancelButtonText:l("page.organizes.docus.buttonCancel"),type:"warning"}).then((async()=>{ee.value=!1,ye.associate=1,fe({})})):(ee.value=!1,ye.associate=1,fe({}))},Ie=async()=>{if(ve.value)return;ve.value=!0;const e={knowledgeId:G,knowledgeName:Y.value,knowledgeType:J.value,documentIds:ue.value.map((e=>e.docId)).join(","),checkAll:ae.value,...ye};"ALL"===e.docLang&&delete e.docLang,"ALL"===e.docType&&delete e.docType,"ALL"===e.docTags&&delete e.docTags,delete e.state;await(0,y.hc)(e);ue.value=[],ae.value=!1,ve.value=!1,fe({}),d.nk.success(l("page.organizes.successMessage"))},xe=async e=>{he.show=!0,he.uuid=e.docId,he.sourceUrl=e.sourceFile,he.docName=e.docName},Ve=async e=>{let a=`<p>${l("page.organizes.knows.detail-stopHintDetail")}</p>`;i.s.confirm(a,l("page.organizes.docus.hint"),{dangerouslyUseHTMLString:!0,confirmButtonText:l("page.organizes.docus.buttonSubmit"),cancelButtonText:l("page.organizes.docus.buttonCancel"),type:"warning"}).then((async()=>{e.removeLoading=!0;const a={knowledgeId:G,knowledgeName:Y.value,knowledgeType:J.value,documentIds:e.docId};await(0,y.sl)(a),fe({}),await ze()})).catch((()=>{})),e.removeLoading=!1},Ee=(e,a)=>!e.kdid;(0,t.sV)((async()=>{await Pe(),Qe()})),(0,t.hi)((()=>{}));const Qe=()=>{(0,w.Q2)().then((e=>{me.value=e.data,me.value=["ALL",...me.value]}))},Pe=async()=>{const e=await(0,y.P)(G);e&&e.data&&(Y.value=e.data.knowledgeName,J.value=e.data.knowledgeType)},Ue=(e,a)=>{let l;return(...t)=>{l&&clearTimeout(l),l=setTimeout((()=>{e(...t)}),a)}},Be=window.ResizeObserver;return window.ResizeObserver=class extends Be{constructor(e){e=Ue(e,100),super(e)}},window.onbeforeunload=function(){if(be.fileList.length)return l("page.organizes.docus.unload")},window.addEventListener("beforeunload",(e=>{be.fileList.length&&(e.returnValue=l("page.organizes.docus.upload"))})),(e,a)=>{const u=(0,t.g2)("el-button"),i=(0,t.g2)("el-input"),d=(0,t.g2)("el-col"),k=(0,t.g2)("el-option"),h=(0,t.g2)("el-select"),b=(0,t.g2)("el-checkbox"),m=(0,t.g2)("el-row"),w=(0,t.g2)("el-table-column"),y=(0,t.g2)("el-tag"),f=(0,t.g2)("el-dialog"),L=(0,t.gN)("loading");return(0,t.uX)(),(0,t.CE)("div",{class:(0,o.C4)(["main",{"full-shrink":ee.value}])},[(0,t.Lk)("div",R,[(0,t.Lk)("div",z,[ee.value?((0,t.uX)(),(0,t.Wv)(u,{key:1,type:"text",onClick:Te},{default:(0,t.k6)((()=>[T,(0,t.eW)((0,o.v_)((0,n.R1)(l)("page.organizes.knows.detail-topNav")),1)])),_:1})):((0,t.uX)(),(0,t.Wv)(u,{key:0,type:"text",onClick:_e},{default:(0,t.k6)((()=>[_,(0,t.eW)(" "+(0,o.v_)((0,n.R1)(l)("page.organizes.knows.detail-topNav")),1)])),_:1})),A,ee.value||oe.value?ee.value?((0,t.uX)(),(0,t.Wv)(u,{key:4,type:"text",onClick:Te},{default:(0,t.k6)((()=>[(0,t.eW)((0,o.v_)(Y.value),1)])),_:1})):((0,t.uX)(),(0,t.Wv)(i,{key:3,maxlength:"60",modelValue:le.knowledgeName,"onUpdate:modelValue":a[0]||(a[0]=e=>le.knowledgeName=e),onBlur:We,onKeypress:(0,s.jR)(We,["enter"]),onKeydown:(0,s.jR)(Fe,["esc"])},null,8,["modelValue"])):((0,t.uX)(),(0,t.CE)("span",C,[(0,t.eW)((0,o.v_)(Y.value),1),(0,t.bF)((0,n.R1)(c.A),{type:"pk-editnormal",class:"n-edit",onClick:Ae})])),oe.value?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("span",K,"/")),ee.value||oe.value?ee.value?((0,t.uX)(),(0,t.CE)("span",F,(0,o.v_)((0,n.R1)(l)("page.organizes.knows.detail-publish")),1)):(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("span",W,(0,o.v_)(Z.value),1))]),ee.value?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("div",N,[(0,t.bF)(u,{type:"primary",onClick:Xe},{icon:(0,t.k6)((()=>[(0,t.bF)((0,n.R1)(c.A),{type:"pk-indb"})])),default:(0,t.k6)((()=>[(0,t.eW)(" "+(0,o.v_)((0,n.R1)(l)("page.organizes.knows.detail-batchPublish")),1)])),_:1}),(0,t.bo)(((0,t.uX)(),(0,t.Wv)(u,{disabled:re.value,onClick:Ne},{icon:(0,t.k6)((()=>[(0,t.bF)((0,n.R1)(c.A),{type:"pk-batchpublish"})])),default:(0,t.k6)((()=>[(0,t.eW)(" "+(0,o.v_)((0,n.R1)(l)("page.organizes.knows.detail-batchStop")),1)])),_:1},8,["disabled"])),[[L,pe.value]])]))]),se.reload?((0,t.uX)(),(0,t.Wv)(r.A,{key:0,ref_key:"screenTableRef",ref:ke,"row-key":"docId",data:se.list,loading:se.loading,pagination:se.pagination,onHandleSelection:ce},(0,t.eX)({header:(0,t.k6)((()=>[(0,t.bF)(m,{onKeydown:(0,s.jR)(fe,["enter"])},{default:(0,t.k6)((()=>[(0,t.bF)(d,{span:4},{default:(0,t.k6)((()=>[(0,t.Lk)("span",X,(0,o.v_)((0,n.R1)(l)("page.organizes.docus.th-s-name")),1),(0,t.bF)(i,{class:"th-s-input",modelValue:ye.docName,"onUpdate:modelValue":a[1]||(a[1]=e=>ye.docName=e),placeholder:(0,n.R1)(l)("page.organizes.docus.th-s-name-holder")},null,8,["modelValue","placeholder"])])),_:1}),(0,t.bF)(d,{span:4,class:"text-align-right"},{default:(0,t.k6)((()=>[(0,t.Lk)("span",S,(0,o.v_)((0,n.R1)(l)("page.organizes.docus.th-s-lang")),1),(0,t.bF)(h,{class:"th-s-input w200",modelValue:ye.docLang,"onUpdate:modelValue":a[2]||(a[2]=e=>ye.docLang=e)},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)((0,n.R1)(M),(e=>((0,t.uX)(),(0,t.Wv)(k,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(d,{span:4},{default:(0,t.k6)((()=>[(0,t.Lk)("span",I,(0,o.v_)((0,n.R1)(l)("page.organizes.docus.th-s-tags")),1),(0,t.bF)(h,{class:"th-s-input",modelValue:ye.docTags,"onUpdate:modelValue":a[3]||(a[3]=e=>ye.docTags=e),clearable:"",filterable:"","allow-create":"","default-first-option":"",placeholder:(0,n.R1)(l)("page.organizes.docus.th-s-tags-holder")},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(me.value,(e=>((0,t.uX)(),(0,t.Wv)(k,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])])),_:1}),ee.value?((0,t.uX)(),(0,t.Wv)(d,{key:0,span:4},{default:(0,t.k6)((()=>[ne.value?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.Wv)(b,{key:0,disabled:ne.value,modelValue:ae.value,"onUpdate:modelValue":a[4]||(a[4]=e=>ae.value=e),onChange:Re},{default:(0,t.k6)((()=>[(0,t.eW)((0,o.v_)((0,n.R1)(l)("page.organizes.knows.checkAll")),1)])),_:1},8,["disabled","modelValue"]))])),_:1})):(0,t.Q3)("",!0),(0,t.bF)(d,{span:ee.value?8:12},{default:(0,t.k6)((()=>[(0,t.Lk)("div",x,[(0,t.bF)(u,{class:"th-s-button color-huge border-huge",onClick:Le},{icon:(0,t.k6)((()=>[(0,t.bF)((0,n.R1)(c.A),{type:"pk-refresh"})])),default:(0,t.k6)((()=>[(0,t.eW)(" "+(0,o.v_)((0,n.R1)(l)("page.organizes.docus.th-s-reset")),1)])),_:1}),(0,t.bF)(u,{class:"th-s-button",type:"primary",onClick:fe},{icon:(0,t.k6)((()=>[(0,t.bF)((0,n.R1)(c.A),{type:"pk-search"})])),default:(0,t.k6)((()=>[(0,t.eW)(" "+(0,o.v_)((0,n.R1)(l)("page.organizes.docus.th-s")),1)])),_:1})])])),_:1},8,["span"])])),_:1})])),default:(0,t.k6)((()=>[(0,t.bF)(w,{type:"selection",width:"46",selectable:Ee}),(0,t.bF)(w,{type:"index",width:"66",label:(0,n.R1)(l)("page.organizes.docus.tb-label-no")},null,8,["label"]),(0,t.bF)(w,{label:(0,n.R1)(l)("page.organizes.docus.tb-label-name"),prop:"docName","min-width":"240"},null,8,["label"]),(0,t.bF)(w,{label:(0,n.R1)(l)("page.organizes.docus.tb-label-lang"),prop:"lang",width:"200"},null,8,["label"]),(0,t.bF)(w,{label:(0,n.R1)(l)("page.organizes.docus.tb-label-tags"),width:"200"},{default:(0,t.k6)((({row:e})=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.tags,(e=>((0,t.uX)(),(0,t.Wv)(y,{class:"tag-tool",type:"info",key:e},{default:(0,t.k6)((()=>[(0,t.bF)(v.A,{content:e,placement:"left"},null,8,["content"])])),_:2},1024)))),128))])),_:1},8,["label"]),(0,t.bF)(w,{label:(0,n.R1)(l)("page.organizes.docus.tb-label-createtime"),prop:"createTime",width:"200"},null,8,["label"]),(0,t.bF)(w,{label:(0,n.R1)(l)("page.organizes.docus.tb-label-updatetime"),prop:"updateTime",width:"200"},null,8,["label"]),(0,t.bF)(w,{fixed:"right",label:(0,n.R1)(l)("page.organizes.docus.tb-label-actions"),prop:"action",width:"240"},{default:(0,t.k6)((({row:e})=>[(0,t.Lk)("div",Q,[1===J.value?((0,t.uX)(),(0,t.Wv)(u,{key:0,class:"color-huge",type:"primary",text:"",onClick:a=>xe(e)},{default:(0,t.k6)((()=>[(0,t.eW)((0,o.v_)((0,n.R1)(l)("page.organizes.knows.detail-actionPreview")),1)])),_:2},1032,["onClick"])):(0,t.Q3)("",!0),ee.value?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.Wv)(u,{key:1,class:"color-huge",type:"primary",text:"",onClick:a=>Ve(e),loading:e.removeLoading},{default:(0,t.k6)((()=>[(0,t.eW)((0,o.v_)((0,n.R1)(l)("page.organizes.knows.detail-actionRemove")),1)])),_:2},1032,["onClick","loading"]))])])),_:1},8,["label"])])),_:2},[ee.value||se.loading||0!==te.value?void 0:{name:"empty",fn:(0,t.k6)((()=>[(0,t.Lk)("div",V,[E,(0,t.bF)(u,{type:"primary",onClick:Xe},{icon:(0,t.k6)((()=>[(0,t.bF)((0,n.R1)(c.A),{type:"pk-indb"})])),default:(0,t.k6)((()=>[(0,t.eW)(" "+(0,o.v_)((0,n.R1)(l)("page.organizes.knows.detail-batchPublish")),1)])),_:1})])])),key:"0"}]),1032,["data","loading","pagination"])):((0,t.uX)(),(0,t.Wv)(g.A,{key:1})),(0,t.bF)(f,{title:he.docName,width:"50vw",modelValue:he.show,"onUpdate:modelValue":a[5]||(a[5]=e=>he.show=e)},{default:(0,t.k6)((()=>[(0,t.Lk)("div",P,[(0,t.bF)(p.A,{uuid:he.uuid,history:he.history,sourceUrl:he.sourceUrl},null,8,["uuid","history","sourceUrl"])])])),_:1},8,["title","modelValue"]),ee.value?((0,t.uX)(),(0,t.CE)("div",U,[(0,t.bF)(u,{type:"default",onClick:Se},{default:(0,t.k6)((()=>[(0,t.eW)((0,o.v_)((0,n.R1)(l)("page.organizes.knows.detail-actionCancel")),1)])),_:1}),(0,t.bo)(((0,t.uX)(),(0,t.Wv)(u,{disabled:ge.value&&!ae.value,type:"primary",onClick:Ie},{default:(0,t.k6)((()=>[(0,t.eW)((0,o.v_)((0,n.R1)(l)("page.organizes.knows.detail-actionPublish")),1)])),_:1},8,["disabled"])),[[L,ve.value]])])):(0,t.Q3)("",!0)],2)}}}),D=l(83940);const H=(0,D.A)(B,[["__scopeId","data-v-575f63e2"]]);var M=H}}]);