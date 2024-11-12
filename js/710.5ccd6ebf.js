"use strict";(self["webpackChunkCustomsPedia"]=self["webpackChunkCustomsPedia"]||[]).push([[710],{77919:function(e,l,a){a.r(l),a.d(l,{default:function(){return P}});var o=a(28694),t=a(83487),p=a(38118),i=a(97913),u=a(74560),d=(a(19477),a(12567)),s=a(47679),n=a(36981),r=a(94102),g=a(51832),b=a(85158),c=a(81329),h=a(82365),m=a(32228),v=a(98836),k=a(74913);const f={class:"main"},R={class:"main-top"},_={class:"main-top-nav"},F={class:"main-top-batch"},z={class:"th-s-label"},V={class:"th-s-label"},y={class:"th-s"},w={class:"operations"},C={class:"upload-form"},W={class:"dialog-footer"},L={class:"edit-form"},K={class:"dialog-footer"},X={class:"detail-form"},U={class:"dialog-footer"};var E=(0,o.pM)({__name:"speech",setup(e){const{locale:l,t:a}=(0,m.s9)(),E=(0,k.Pj)(),{SCOPES:S,LANGS:A,LangOptions:P,ScopeOptions:x}=((0,v.rd)(),(0,g.A)()),I=(0,p.Kh)({reload:!0,loading:!1,list:[],pagination:{total:0,current:1,pageSize:10,sizeChange:()=>{},onChange:e=>{}}}),T=(0,p.KR)([]),{pushQuery:N,queryParams:Q}=(0,r.A)("/organize/system/speech",(async(e,l)=>{I.loading=!0,e.language=e.language||ee.value;const a=await(0,h.Ju)(e),{rows:o,data:t}=a,p=o||t;I.list=p.map((e=>(e.lang=A[e.language],e.scope=Number(e.scope),e))),I.pagination={total:a.total||0,current:Number(e.page)||1,pageSize:Number(e.perPage)||10,sizeChange:async e=>{I.reload=!1,await $({perPage:e,page:1}),setTimeout((()=>I.reload=!0),400)},onChange:e=>$({page:e})},I.loading=!1})),q=e=>{T.value=e},D=((0,o.EW)((()=>0===T.value.length)),(0,p.KR)(!1),(0,p.KR)(!1)),O=(0,p.KR)(!1),j=(0,p.Kh)({name:""}),J=(0,p.Kh)({name:[{required:!0,trigger:"blur"}]}),B=(0,p.KR)(!1),G=(0,p.KR)(!1),H=(0,p.Kh)({id:0,title:""}),M=(0,p.Kh)({title:[{required:!0,trigger:"blur"}]}),Y=(0,p.KR)(!1),$=((0,p.KR)({}),async e=>{const l={...le};N({...l,page:I.pagination.current,perPage:I.pagination.pageSize,...e,refresh:(0,c.pr)(new Date)})}),Z=async()=>{le.name="",le.language=ee.value,le.scope="",I.reload=!1,await $({page:1}),setTimeout((()=>I.reload=!0),400)},{defaultLang:ee}=(0,b.Ju)($),le=(0,p.Kh)({title:"",language:ee.value,scope:""}),ae=(0,o.EW)((()=>P.filter((e=>"ALL"!==e.value)))),oe=(0,o.EW)((()=>x.filter((e=>e.value)))),te=(e,l)=>!0,pe=e=>{H.id=e.id,H.title=e.title,H.subtitle=e.subtitle,H.language=e.language,H.scope=e.scope,B.value=!0},ie=async()=>{try{if(H.id){await(0,h.PW)(H);u.nk.success(a("page.organizes.speech.editSuccess")),B.value=!1,H.id="",N({...le,refresh:(0,c.pr)(new Date)})}else{await(0,h.YQ)(j);u.nk.success(a("page.organizes.speech.addSuccess")),D.value=!1,N({...le,refresh:(0,c.pr)(new Date)})}}catch(e){console.error(e)}};return(0,o.sV)((async()=>{E.commit("global/setLefter",!0)})),(0,o.hi)((()=>{E.commit("global/setLefter",!1)})),(e,l)=>{const u=(0,o.g2)("el-button"),r=(0,o.g2)("el-option"),g=(0,o.g2)("el-select"),b=(0,o.g2)("el-col"),c=(0,o.g2)("el-row"),h=(0,o.g2)("el-table-column"),m=(0,o.g2)("el-input"),v=(0,o.g2)("el-form-item"),k=(0,o.g2)("el-form"),E=(0,o.g2)("el-dialog"),A=(0,o.gN)("loading");return(0,o.uX)(),(0,o.CE)("div",f,[(0,o.Lk)("div",R,[(0,o.Lk)("div",_,(0,t.v_)((0,p.R1)(a)("page.organizes.speech.topNav")),1),(0,o.Lk)("div",F,[(0,o.Q3)("",!0)])]),I.reload?((0,o.uX)(),(0,o.Wv)(s.A,{key:0,"row-key":"id",data:I.list,loading:I.loading,pagination:I.pagination,onHandleSelection:q},{header:(0,o.k6)((()=>[(0,o.bF)(c,{onKeydown:(0,i.jR)($,["enter"])},{default:(0,o.k6)((()=>[(0,o.bF)(b,{span:7},{default:(0,o.k6)((()=>[(0,o.Lk)("span",z,(0,t.v_)((0,p.R1)(a)("page.organizes.prompt.th-s-label-lang")),1),(0,o.bF)(g,{modelValue:le.language,"onUpdate:modelValue":l[0]||(l[0]=e=>le.language=e),placeholder:(0,p.R1)(a)("page.organizes.prompt.th-s-label-lang-holder")},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(ae.value,(e=>((0,o.uX)(),(0,o.Wv)(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])])),_:1}),(0,o.bF)(b,{span:7},{default:(0,o.k6)((()=>[(0,o.Lk)("span",V,(0,t.v_)((0,p.R1)(a)("page.organizes.speech.th-s-label-scope")),1),(0,o.bF)(g,{modelValue:le.scope,"onUpdate:modelValue":l[1]||(l[1]=e=>le.scope=e)},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(oe.value,(e=>((0,o.uX)(),(0,o.Wv)(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,o.bF)(b,{span:10},{default:(0,o.k6)((()=>[(0,o.Lk)("div",y,[(0,o.bF)(u,{class:"th-s-button color-huge border-huge",onClick:Z},{icon:(0,o.k6)((()=>[(0,o.bF)((0,p.R1)(d.A),{type:"pk-refresh"})])),default:(0,o.k6)((()=>[(0,o.eW)(" "+(0,t.v_)((0,p.R1)(a)("page.organizes.prompt.reset")),1)])),_:1}),(0,o.bF)(u,{type:"primary",class:"th-s-button",onClick:$},{icon:(0,o.k6)((()=>[(0,o.bF)((0,p.R1)(d.A),{type:"pk-search"})])),default:(0,o.k6)((()=>[(0,o.eW)(" "+(0,t.v_)((0,p.R1)(a)("page.organizes.prompt.search")),1)])),_:1})])])),_:1})])),_:1})])),default:(0,o.k6)((()=>[(0,o.bF)(h,{type:"selection",width:"46",selectable:te}),(0,o.bF)(h,{type:"index",width:"66",label:(0,p.R1)(a)("page.organizes.docus.tb-label-no")},null,8,["label"]),(0,o.bF)(h,{prop:"title",label:(0,p.R1)(a)("page.organizes.speech.tb-label-name"),width:"200"},{default:(0,o.k6)((({row:e})=>[(0,o.Lk)("span",null,(0,t.v_)(e.title),1)])),_:1},8,["label"]),(0,o.bF)(h,{label:(0,p.R1)(a)("page.organizes.speech.tb-label-lang"),prop:"lang",width:"160"},null,8,["label"]),(0,o.bF)(h,{label:(0,p.R1)(a)("page.organizes.speech.tb-label-description"),prop:"subtitle",width:"240"},null,8,["label"]),(0,o.bF)(h,{label:(0,p.R1)(a)("page.organizes.speech.tb-label-scope"),prop:"scope",width:"160"},{default:(0,o.k6)((({row:e})=>[(0,o.Lk)("span",null,(0,t.v_)((0,p.R1)(S)[e.scope]),1)])),_:1},8,["label"]),(0,o.bF)(h,{label:(0,p.R1)(a)("page.organizes.speech.tb-label-create-by"),prop:"createBy",width:"100"},null,8,["label"]),(0,o.bF)(h,{label:(0,p.R1)(a)("page.organizes.prompt.tb-label-createTime"),prop:"createTime",width:"160"},null,8,["label"]),(0,o.bF)(h,{fixed:"right",label:(0,p.R1)(a)("page.organizes.prompt.tb-label-operate"),width:"200"},{default:(0,o.k6)((({row:e,$index:l})=>[(0,o.Lk)("div",w,[(0,o.bF)(u,{type:"text",onClick:l=>pe(e)},{default:(0,o.k6)((()=>[(0,o.eW)((0,t.v_)((0,p.R1)(a)("page.organizes.prompt.edit")),1)])),_:2},1032,["onClick"]),(0,o.Q3)("",!0)])])),_:1},8,["label"])])),_:1},8,["data","loading","pagination"])):((0,o.uX)(),(0,o.Wv)(n.A,{key:1})),(0,o.bo)(((0,o.uX)(),(0,o.Wv)(E,{modelValue:D.value,"onUpdate:modelValue":l[7]||(l[7]=e=>D.value=e),title:(0,p.R1)(a)("page.organizes.speech.uploadTitle"),width:"824"},{footer:(0,o.k6)((()=>[(0,o.Lk)("div",W,[(0,o.bF)(u,{onClick:l[6]||(l[6]=e=>D.value=!1)},{default:(0,o.k6)((()=>[(0,o.eW)((0,t.v_)((0,p.R1)(a)("page.organizes.prompt.cancel")),1)])),_:1}),(0,o.bF)(u,{type:"primary",onClick:ie},{default:(0,o.k6)((()=>[(0,o.eW)((0,t.v_)((0,p.R1)(a)("page.organizes.prompt.submit")),1)])),_:1})])])),default:(0,o.k6)((()=>[(0,o.Lk)("div",C,[(0,o.bF)(k,{ref:"uploadFormRef",model:j,rules:J,"label-width":"100px"},{default:(0,o.k6)((()=>[(0,o.bF)(v,{label:(0,p.R1)(a)("page.organizes.speech.dialog-label-name"),prop:"title"},{default:(0,o.k6)((()=>[(0,o.bF)(m,{modelValue:j.title,"onUpdate:modelValue":l[2]||(l[2]=e=>j.title=e),placeholder:(0,p.R1)(a)("page.organizes.speech.dialog-placeholder",{holder:(0,p.R1)(a)("page.organizes.speech.dialog-label-name")})},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,o.bF)(v,{label:(0,p.R1)(a)("page.organizes.speech.dialog-label-lang"),prop:"language"},{default:(0,o.k6)((()=>[(0,o.bF)(g,{modelValue:j.language,"onUpdate:modelValue":l[3]||(l[3]=e=>j.language=e),placeholder:(0,p.R1)(a)("page.organizes.speech.dialog-placeholder",{holder:(0,p.R1)(a)("page.organizes.speech.dialog-label-lang")})},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(ae.value,(e=>((0,o.uX)(),(0,o.Wv)(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,o.bF)(v,{label:(0,p.R1)(a)("page.organizes.speech.dialog-label-scope"),prop:"scope"},{default:(0,o.k6)((()=>[(0,o.bF)(g,{modelValue:j.scope,"onUpdate:modelValue":l[4]||(l[4]=e=>j.scope=e),placeholder:(0,p.R1)(a)("page.organizes.speech.dialog-placeholder",{holder:(0,p.R1)(a)("page.organizes.speech.dialog-label-scope")})},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(oe.value,(e=>((0,o.uX)(),(0,o.Wv)(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,o.bF)(v,{label:(0,p.R1)(a)("page.organizes.speech.dialog-label-description"),prop:"description"},{default:(0,o.k6)((()=>[(0,o.bF)(m,{type:"textarea",modelValue:j.subtitle,"onUpdate:modelValue":l[5]||(l[5]=e=>j.subtitle=e),placeholder:(0,p.R1)(a)("page.organizes.speech.dialog-placeholder",{holder:(0,p.R1)(a)("page.organizes.speech.dialog-label-description")})},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1},8,["model","rules"])])])),_:1},8,["modelValue","title"])),[[A,O.value]]),(0,o.bo)(((0,o.uX)(),(0,o.Wv)(E,{modelValue:B.value,"onUpdate:modelValue":l[13]||(l[13]=e=>B.value=e),title:(0,p.R1)(a)("page.organizes.speech.editTitle"),width:"824"},{footer:(0,o.k6)((()=>[(0,o.Lk)("div",K,[(0,o.bF)(u,{onClick:l[12]||(l[12]=e=>B.value=!1)},{default:(0,o.k6)((()=>[(0,o.eW)((0,t.v_)((0,p.R1)(a)("page.organizes.prompt.cancel")),1)])),_:1}),(0,o.bF)(u,{type:"primary",onClick:ie},{default:(0,o.k6)((()=>[(0,o.eW)((0,t.v_)((0,p.R1)(a)("page.organizes.prompt.submit")),1)])),_:1})])])),default:(0,o.k6)((()=>[(0,o.Lk)("div",L,[(0,o.bF)(k,{ref:"editFormRef",model:H,rules:M,"label-width":"100px"},{default:(0,o.k6)((()=>[(0,o.bF)(v,{label:(0,p.R1)(a)("page.organizes.speech.dialog-label-name"),prop:"title"},{default:(0,o.k6)((()=>[(0,o.bF)(m,{modelValue:H.title,"onUpdate:modelValue":l[8]||(l[8]=e=>H.title=e),placeholder:(0,p.R1)(a)("page.organizes.speech.dialog-placeholder",{holder:(0,p.R1)(a)("page.organizes.speech.dialog-label-name")})},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,o.bF)(v,{label:(0,p.R1)(a)("page.organizes.speech.dialog-label-lang"),prop:"language"},{default:(0,o.k6)((()=>[(0,o.bF)(g,{disabled:!0,modelValue:H.language,"onUpdate:modelValue":l[9]||(l[9]=e=>H.language=e)},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(ae.value,(e=>((0,o.uX)(),(0,o.Wv)(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label"]),(0,o.bF)(v,{label:(0,p.R1)(a)("page.organizes.speech.dialog-label-scope"),prop:"icon"},{default:(0,o.k6)((()=>[(0,o.bF)(g,{disabled:!0,modelValue:H.scope,"onUpdate:modelValue":l[10]||(l[10]=e=>H.scope=e)},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(oe.value,(e=>((0,o.uX)(),(0,o.Wv)(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label"]),(0,o.bF)(v,{label:(0,p.R1)(a)("page.organizes.speech.dialog-label-description"),prop:"description"},{default:(0,o.k6)((()=>[(0,o.bF)(m,{type:"textarea",modelValue:H.subtitle,"onUpdate:modelValue":l[11]||(l[11]=e=>H.subtitle=e),placeholder:(0,p.R1)(a)("page.organizes.speech.dialog-placeholder",{holder:(0,p.R1)(a)("page.organizes.speech.dialog-label-description")})},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1},8,["model","rules"])])])),_:1},8,["modelValue","title"])),[[A,G.value]]),(0,o.bF)(E,{modelValue:Y.value,"onUpdate:modelValue":l[15]||(l[15]=e=>Y.value=e),title:(0,p.R1)(a)("page.organizes.prompt.detailTitle"),width:"824"},{footer:(0,o.k6)((()=>[(0,o.Lk)("div",U,[(0,o.bF)(u,{onClick:l[14]||(l[14]=e=>Y.value=!1)},{default:(0,o.k6)((()=>[(0,o.eW)((0,t.v_)((0,p.R1)(a)("page.organizes.prompt.cancel")),1)])),_:1})])])),default:(0,o.k6)((()=>[(0,o.Lk)("div",X,[(0,o.bF)(k,null,{default:(0,o.k6)((()=>[(0,o.bF)(v,{label:(0,p.R1)(a)("page.organizes.prompt.dialog-label-name"),prop:"name"},{default:(0,o.k6)((()=>[(0,o.eW)((0,t.v_)((0,p.R1)(a)("page.organizes.prompt.dialog-label-name")),1)])),_:1},8,["label"])])),_:1})])])),_:1},8,["modelValue","title"])])}}}),S=a(83940);const A=(0,S.A)(E,[["__scopeId","data-v-3b17c058"]]);var P=A}}]);