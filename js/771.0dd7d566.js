"use strict";(self["webpackChunkCustomsPedia"]=self["webpackChunkCustomsPedia"]||[]).push([[771],{41005:function(e,a,n){n.r(a),n.d(a,{default:function(){return I}});n(14898);var l=n(28694),t=n(83487),o=n(38118),i=n(97913),r=n(32228),s=n(74560),d=n(19477),u=n(12567),g=n(47679),p=n(36981),c=n(94102),k=n(51832),w=n(81329),b=n(34197),m=n(48467),y=n(98836);const h={class:"main"},v={class:"main-top"},f={class:"main-top-nav"},z={class:"main-top-batch"},R={class:"th-s-label"},T={class:"th-s-label"},_={class:"th-s"},F={class:"actions"},C={class:"dialog-footer"};var L=(0,l.pM)({__name:"index",setup(e){const{t:a}=(0,r.s9)(),n=(0,y.rd)(),{TYPES:L,TypeOptions:N,LangOptions:x}=(0,k.A)(),I=(0,o.Kh)({reload:!0,loading:!1,list:[],pagination:{total:0,current:1,pageSize:0,sizeChange:()=>{},onChange:()=>{}}}),{pushQuery:W,queryParams:S}=(0,c.A)("/organize/knowledge",(async(e,a)=>{I.loading=!0;const n=await(0,m.n_)(e),{rows:l}=n,t=l||[];I.list=t.map((e=>(e.type=L[e.knowledgeType],e))),I.pagination={total:n.total||0,current:e.page,pageSize:e.perPage,sizeChange:e=>{I.reload=!1,B({perPage:e,page:1}),setTimeout((()=>I.reload=!0),400)},onChange:e=>B({page:e})},I.loading=!1})),K=(0,o.KR)(!1),V=(0,o.KR)(!1),A=(0,o.Kh)({id:0,name:"",type:"",data:[]}),P=(0,o.Kh)({name:[{required:!0,trigger:"blur"},{max:60,trigger:"blur"}],type:[{required:!0,trigger:"blur"}]}),q=(0,o.KR)(null),E=((0,o.KR)([a("page.organizes.knows.transferLeftTitle"),a("page.organizes.knows.transferRightTitle")]),(0,o.KR)([])),U=(0,o.Kh)({name:"",type:"ALL"}),X=(0,l.EW)((()=>{const e=N.filter((e=>"ALL"!==e.value));return e})),D=(0,o.KR)([]),B=async e=>{const a={knowledgeName:U.knowledgeName,knowledgeType:U.knowledgeType};"ALL"===a.knowledgeType&&(a.knowledgeType=""),W({...a,tags:"",page:I.pagination.current,perPage:I.pagination.pageSize,...e,refresh:(0,w.pr)(new Date)})},Q=async()=>{U.knowledgeName="",U.knowledgeType="ALL",I.reload=!1,await B({page:1}),setTimeout((()=>I.reload=!0),400)};(0,l.nT)((()=>{D.value=E.value[A.type]})),(0,l.nT)((()=>{const e=[];S.value.categoryId&&S.value.categoryId.split(",").map((a=>{a&&e.push(Number(a))}));S.value.keywords,S.value.startTime&&S.value.endTime&&(S.value.startTime,S.value.endTime),S.value.tags&&S.value.tags.split(",")}));const j=async()=>{V.value=!0,A.id=0,A.name="",A.type="1",A.data=[]},O=async(e,a)=>{n.push({path:"/organize/knowledge/detail",query:{id:a.knowledgeId}})},H=async(e,a)=>{V.value=!0,A.row=a,A.id=a.knowledgeId,A.knowledgeId=a.knowledgeId,A.name=a.knowledgeName,A.type=a.knowledgeType+"",A.data=[]},M=async()=>{let e=!1;try{q.value&&await q.value.validate()}catch(t){return}if(e=A.name.length>0&&A.type>0,!e)return;const l=await(0,m.z6)({knowledgeName:A.name});if(l&&500===~~l.code)s.nk.error("Duplicate Knowledge Base Name");else{if(K.value=!0,0===A.id){const e=await(0,m.WQ)({knowledgeName:A.name,knowledgeType:A.type});n.push({path:"/organize/knowledge/detail",query:{id:e.data.knowledgeId}})}else if(A.id.length>0){await(0,m.hc)({knowledgeName:A.name,knowledgeType:A.type,knowledgeId:A.knowledgeId});A.row.knowledgeName=A.name,A.row.knowledgeType=A.type,s.nk.success(a("page.organizes.knows.modifySuccess"))}V.value=!1,K.value=!1}},Y=e=>{n.push({path:"/organize/knowledge/qa",query:{knowledgeId:e.knowledgeId}})},$=async(e,a)=>{await G(e,a)},G=async(e,n)=>{I.list[e]["delLoading"]=!0;try{d.s.confirm(a("page.organizes.knows.deleteConfirm"),a("page.organizes.docus.hint"),{confirmButtonText:a("page.organizes.docus.buttonSubmit"),cancelButtonText:a("page.organizes.docus.buttonCancel"),type:"warning"}).then((async()=>{await(0,m.TF)({ids:n.knowledgeId}),s.nk.success(a("page.organizes.knows.deleteSuccess")),I.list.length>1?I.list.splice(e,1):W({refresh:(0,w.pr)(new Date)})})).catch((()=>{}))}catch(l){s.nk.warning(l.msg||l||"error")}I.list[e]["delLoading"]=!1},J=async()=>{const e=await(0,m.DB)();e&&e.data&&e.data.map((e=>{E.value[e.docType]||(E.value[e.docType]=[]),E.value[e.docType].push({id:e.id,docName:e.docName,docId:e.docId,userId:e.userId,docTags:e.docTags,docLang:e.docLang})}))};return(0,l.sV)((async()=>{J();const e=await(0,b.q7)();e&&e.data.progress&&n.push({path:"/organize/quick"})})),(e,n)=>{const r=(0,l.g2)("el-button"),s=(0,l.g2)("el-input"),d=(0,l.g2)("el-col"),c=(0,l.g2)("el-option"),k=(0,l.g2)("el-select"),w=(0,l.g2)("el-row"),b=(0,l.g2)("el-table-column"),m=(0,l.g2)("el-form-item"),y=(0,l.g2)("el-radio"),L=(0,l.g2)("el-radio-group"),x=((0,l.g2)("el-transfer"),(0,l.g2)("el-form")),W=(0,l.g2)("el-dialog"),S=(0,l.gN)("loading");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",h,[(0,l.Lk)("div",v,[(0,l.Lk)("div",f,(0,t.v_)((0,o.R1)(a)("page.organizes.knows.topNav")),1),(0,l.Lk)("div",z,[(0,l.bF)(r,{type:"primary",onClick:j},{icon:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(u.A),{type:"pk-plus"})])),default:(0,l.k6)((()=>[(0,l.eW)(" "+(0,t.v_)((0,o.R1)(a)("page.organizes.knows.add")),1)])),_:1})])]),I.reload?((0,l.uX)(),(0,l.Wv)(g.A,{key:0,"row-key":"id",data:I.list,loading:I.loading,pagination:I.pagination},{header:(0,l.k6)((()=>[(0,l.bF)(w,{onKeydown:(0,i.jR)(B,["enter"])},{default:(0,l.k6)((()=>[(0,l.bF)(d,{span:6},{default:(0,l.k6)((()=>[(0,l.Lk)("span",R,(0,t.v_)((0,o.R1)(a)("page.organizes.knows.th-s-name")),1),(0,l.bF)(s,{class:"th-s-input",modelValue:U.knowledgeName,"onUpdate:modelValue":n[0]||(n[0]=e=>U.knowledgeName=e),placeholder:(0,o.R1)(a)("page.organizes.knows.th-s-name-holder")},null,8,["modelValue","placeholder"])])),_:1}),(0,l.bF)(d,{span:6,class:"text-align-right"},{default:(0,l.k6)((()=>[(0,l.Lk)("span",T,(0,t.v_)((0,o.R1)(a)("page.organizes.knows.th-s-type")),1),(0,l.bF)(k,{class:"th-s-input w200",modelValue:U.knowledgeType,"onUpdate:modelValue":n[1]||(n[1]=e=>U.knowledgeType=e)},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)((0,o.R1)(N),(e=>((0,l.uX)(),(0,l.Wv)(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,l.bF)(d,{span:12,class:"text-align-right"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",_,[(0,l.bF)(r,{class:"th-s-button color-huge",onClick:Q},{icon:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(u.A),{type:"pk-refresh"})])),default:(0,l.k6)((()=>[(0,l.eW)(" "+(0,t.v_)((0,o.R1)(a)("page.organizes.knows.th-s-reset")),1)])),_:1}),(0,l.bF)(r,{type:"primary",class:"th-s-button",onClick:B},{icon:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(u.A),{type:"pk-search"})])),default:(0,l.k6)((()=>[(0,l.eW)(" "+(0,t.v_)((0,o.R1)(a)("page.organizes.knows.th-s")),1)])),_:1})])])),_:1})])),_:1})])),default:(0,l.k6)((()=>[(0,l.bF)(b,{type:"index",label:(0,o.R1)(a)("page.organizes.docus.tb-label-no"),width:"66"},null,8,["label"]),(0,l.bF)(b,{label:(0,o.R1)(a)("page.organizes.knows.tb-label-name"),prop:"knowledgeName",width:"240"},null,8,["label"]),(0,l.bF)(b,{label:(0,o.R1)(a)("page.organizes.knows.tb-label-type"),width:"100"},{default:(0,l.k6)((({row:e})=>[(0,l.eW)((0,t.v_)(e.type),1)])),_:1},8,["label"]),(0,l.bF)(b,{label:(0,o.R1)(a)("page.organizes.knows.tb-label-createTime"),prop:"createTime",width:"166"},null,8,["label"]),(0,l.bF)(b,{label:(0,o.R1)(a)("page.organizes.knows.tb-label-creator"),prop:"createBy",width:"166"},null,8,["label"]),(0,l.bF)(b,{label:(0,o.R1)(a)("page.organizes.knows.tb-label-updateTime"),prop:"updateTime",width:"166"},null,8,["label"]),(0,l.bF)(b,{label:(0,o.R1)(a)("page.organizes.knows.tb-label-updater"),prop:"updateBy",width:"166"},null,8,["label"]),(0,l.bF)(b,{label:(0,o.R1)(a)("page.organizes.knows.tb-label-documentNum"),prop:"documentCount",width:"200"},null,8,["label"]),(0,l.bF)(b,{fixed:"right",label:(0,o.R1)(a)("page.organizes.knows.tb-label-actions"),"min-width":"200"},{default:(0,l.k6)((({row:e,$index:n})=>[(0,l.Lk)("div",F,[(0,l.bF)(r,{type:"primary",text:"",onClick:a=>O(n,e)},{default:(0,l.k6)((()=>[(0,l.eW)((0,t.v_)((0,o.R1)(a)("page.organizes.knows.actionDetail")),1)])),_:2},1032,["onClick"]),(0,l.bF)(r,{class:"hide",type:"primary",text:"",onClick:a=>H(n,e)},{default:(0,l.k6)((()=>[(0,l.eW)((0,t.v_)((0,o.R1)(a)("page.organizes.knows.actionDataset")),1)])),_:2},1032,["onClick"]),1===e.knowledgeType&&e.documentCount>0?((0,l.uX)(),(0,l.Wv)(r,{key:0,type:"primary",onClick:a=>Y(e),text:""},{default:(0,l.k6)((()=>[(0,l.eW)((0,t.v_)((0,o.R1)(a)("page.organizes.knows.actionKnowledge")),1)])),_:2},1032,["onClick"])):(0,l.Q3)("",!0),(0,l.bF)(r,{type:"info",text:"",loading:e.delLoading,onClick:a=>$(n,e)},{default:(0,l.k6)((()=>[(0,l.eW)((0,t.v_)((0,o.R1)(a)("page.organizes.knows.actionDelete")),1)])),_:2},1032,["loading","onClick"])])])),_:1},8,["label"])])),_:1},8,["data","loading","pagination"])):((0,l.uX)(),(0,l.Wv)(p.A,{key:1}))]),(0,l.bo)(((0,l.uX)(),(0,l.Wv)(W,{modelValue:V.value,"onUpdate:modelValue":n[7]||(n[7]=e=>V.value=e),width:"400",title:A.id?(0,o.R1)(a)("page.organizes.knows.editTitle"):(0,o.R1)(a)("page.organizes.knows.addTitle"),"close-on":!1,"close-on-click-modal":!1},{footer:(0,l.k6)((()=>[(0,l.Lk)("div",C,[(0,l.bF)(r,{type:"default",onClick:n[6]||(n[6]=e=>V.value=!1)},{default:(0,l.k6)((()=>[(0,l.eW)((0,t.v_)((0,o.R1)(a)("page.organizes.knows.buttonCancel")),1)])),_:1}),(0,l.bF)(r,{type:"primary",onClick:M},{default:(0,l.k6)((()=>[(0,l.eW)((0,t.v_)((0,o.R1)(a)("page.organizes.knows.buttonSubmit")),1)])),_:1})])])),default:(0,l.k6)((()=>[(0,l.bF)(x,{model:A,rules:P,ref_key:"knowledgeFormRef",ref:q},{default:(0,l.k6)((()=>[(0,l.Q3)("",!0),(0,l.bF)(m,{label:(0,o.R1)(a)("page.organizes.knows.tb-label-name"),class:"form-input",prop:"name"},{default:(0,l.k6)((()=>[(0,l.bF)(s,{maxlength:"60",modelValue:A.name,"onUpdate:modelValue":n[2]||(n[2]=e=>A.name=e),placeholder:(0,o.R1)(a)("page.organizes.knows.inputHolder"),name:"name"},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,l.bF)(m,{label:(0,o.R1)(a)("page.organizes.knows.tb-label-type"),prop:"type"},{default:(0,l.k6)((()=>[(0,l.bF)(L,{disabled:A.id,modelValue:A.type,"onUpdate:modelValue":n[3]||(n[3]=e=>A.type=e),name:"type"},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(X.value,(e=>((0,l.uX)(),(0,l.Wv)(y,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])))),128))])),_:1},8,["disabled","modelValue"])])),_:1},8,["label"]),(0,l.Q3)("",!0),(0,l.Q3)("",!0)])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])),[[S,K.value]])],64)}}}),N=n(83940);const x=(0,N.A)(L,[["__scopeId","data-v-010b942c"]]);var I=x},55451:function(e,a,n){var l=n(78092),t=n(65685),o=n(31712),i=n(33747),r=i("toStringTag"),s=Object,d="Arguments"===o(function(){return arguments}()),u=function(e,a){try{return e[a]}catch(n){}};e.exports=l?o:function(e){var a,n,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(a=s(e),r))?n:d?o(a):"Object"===(l=o(a))&&t(a.callee)?"Arguments":l}},98202:function(e,a,n){var l=n(29163),t=n(59793);e.exports=function(e,a,n){return n.get&&l(n.get,a,{getter:!0}),n.set&&l(n.set,a,{setter:!0}),t.f(e,a,n)}},78092:function(e,a,n){var l=n(33747),t=l("toStringTag"),o={};o[t]="z",e.exports="[object z]"===String(o)},97167:function(e,a,n){var l=n(55451),t=String;e.exports=function(e){if("Symbol"===l(e))throw new TypeError("Cannot convert a Symbol value to a string");return t(e)}},98428:function(e){var a=TypeError;e.exports=function(e,n){if(e<n)throw new a("Not enough arguments");return e}},63307:function(e,a,n){var l=n(39528),t=n(65456),o=n(97167),i=n(98428),r=URLSearchParams,s=r.prototype,d=t(s.append),u=t(s["delete"]),g=t(s.forEach),p=t([].push),c=new r("a=1&a=2&b=3");c["delete"]("a",1),c["delete"]("b",void 0),c+""!=="a=2"&&l(s,"delete",(function(e){var a=arguments.length,n=a<2?void 0:arguments[1];if(a&&void 0===n)return u(this,e);var l=[];g(this,(function(e,a){p(l,{key:a,value:e})})),i(a,1);var t,r=o(e),s=o(n),c=0,k=0,w=!1,b=l.length;while(c<b)t=l[c++],w||t.key===r?(w=!0,u(this,t.key)):k++;while(k<b)t=l[k++],t.key===r&&t.value===s||d(this,t.key,t.value)}),{enumerable:!0,unsafe:!0})},43854:function(e,a,n){var l=n(39528),t=n(65456),o=n(97167),i=n(98428),r=URLSearchParams,s=r.prototype,d=t(s.getAll),u=t(s.has),g=new r("a=1");!g.has("a",2)&&g.has("a",void 0)||l(s,"has",(function(e){var a=arguments.length,n=a<2?void 0:arguments[1];if(a&&void 0===n)return u(this,e);var l=d(this,e);i(a,1);var t=o(n),r=0;while(r<l.length)if(l[r++]===t)return!0;return!1}),{enumerable:!0,unsafe:!0})},34817:function(e,a,n){var l=n(14508),t=n(65456),o=n(98202),i=URLSearchParams.prototype,r=t(i.forEach);l&&!("size"in i)&&o(i,"size",{get:function(){var e=0;return r(this,(function(){e++})),e},configurable:!0,enumerable:!0})}}]);