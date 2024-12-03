"use strict";(self["webpackChunkSensepedia"]=self["webpackChunkSensepedia"]||[]).push([[361],{34197:function(e,a,t){t.d(a,{Cp:function(){return u},DX:function(){return R},Ds:function(){return h},Ji:function(){return p},MX:function(){return y},P:function(){return r},Q2:function(){return z},Qp:function(){return v},TF:function(){return c},Ty:function(){return k},WQ:function(){return s},ZJ:function(){return m},bc:function(){return x},co:function(){return _},ds:function(){return w},hc:function(){return d},lD:function(){return T},mk:function(){return f},n_:function(){return o},pq:function(){return b},q7:function(){return g},z6:function(){return i}});t(63307),t(43854),t(34817);var n=t(2324);const l="/api/v1";async function o(e){return(0,n.A)({url:l+"/knowledge/document/list",method:"POST",data:{...e,pageNum:e.page,pageSize:e.perPage}})}async function u(e){return(0,n.A)({url:l+"/knowledge/document/quick/list",method:"POST",data:{...e,pageNum:e.page,pageSize:e.perPage}})}async function r(e,a,t){return(0,n.A)({url:l+"/knowledge/document/get/"+e,method:"GET",params:{id:e,preview:a,split:t}})}async function i(e){return(0,n.A)({url:l+"/knowledge/document/quick/add",method:"POST",headers:{"Content-Type":"multipart/form-data"},data:e})}async function s(e){return(0,n.A)({url:l+"/knowledge/document/add",method:"POST",headers:{"Content-Type":"multipart/form-data"},data:e})}async function d(e){return(0,n.A)({url:l+"/knowledge/document/edit",method:"POST",data:e})}async function c(e){return(0,n.A)({url:l+"/knowledge/document/remove",method:"DELETE",data:e})}async function p(){return(0,n.A)({url:l+"/knowledge/document/quick/clear",method:"PUT"})}async function v(){return(0,n.A)({url:l+"/knowledge/document/quick/remove",method:"POST"})}async function m(e){return(0,n.A)({url:l+"/knowledge/document/quick/stopResume",method:"POST",data:e})}async function g(){return(0,n.A)({url:l+"/knowledge/document/quick/status",method:"POST"})}async function h(e){return(0,n.A)({url:l+"/knowledge/document/quick/count",method:"POST",data:e})}async function k(e){return(0,n.A)({url:l+"/knowledge/document/reanalyze",method:"GET",params:e})}async function f(e){const a=new URLSearchParams(e).toString();return(0,n.A)({url:l+"/knowledge/document/listing",method:"POST",data:a})}async function w(e){const a=new URLSearchParams(e).toString();return(0,n.A)({url:l+"/knowledge/document/delist",method:"POST",data:a})}async function b(e){return(0,n.A)({url:l+"/knowledge/associate/"+e.docId})}async function y(e){return(0,n.A)({url:l+"/knowledge/document/check",method:"POST",data:e})}async function T(e){return(0,n.A)({url:l+"/knowledge/document/split",method:"POST",data:e})}async function _(e){return(0,n.A)({url:l+"/knowledge/document/getSplits",method:"GET",params:e})}async function R(e){return(0,n.A)({url:l+"/knowledge/document/saveSplits",method:"POST",data:e})}async function x(e){return(0,n.A)({url:l+"/knowledge/document/splitStatus",method:"GET",params:e})}async function z(){return(0,n.A)({url:l+"/knowledge/document/tags",method:"GET"})}},38818:function(e,a,t){t.r(a),t.d(a,{default:function(){return j}});t(14898);var n=t(28694),l=t(83487),o=t(38118),u=t(97913),r=t(98836),i=t(74560),s=t(19477),d=t(52582),c=t(12567),p=t(34197),v=t(92301),m=t(32228);const g=e=>((0,n.Qi)("data-v-298e93e6"),e=e(),(0,n.jt)(),e),h={class:"main"},k={class:"main-top"},f={class:"main-nav-back"},w={key:0,class:"main-nav-title"},b={key:1,class:"main-nav-title"},y={class:"main-preview"},T={class:"main-preview-pdf"},_={class:"main-preview-pdf-tabs"},R={class:"main-preview-pdf-tab"},x={key:0,class:"tab-split"},z={class:"tab-md hide"},S={class:"main-preview-pdf-viewer"},C={class:"main-preview-editor"},P={class:"preview",id:"editor"},L=["textContent"],A={class:"main-preview-split"},I={class:"main-preview-split-navtop"},E={class:"th-s-label"},F={class:"th-s-label"},V=g((()=>(0,n.Lk)("span",null,"/",-1))),K={class:"th-s"},X={class:"main-preview-split-navbtn"},U={class:"main-preview-split-table"},O={class:"split-next-no"},q={class:"split-next-text"},H=["innerHTML"],N={class:"insert-form"},W={class:"dialog-footer"},G={class:"preview-guilde"},D=["src"];var M=(0,n.pM)({__name:"preview",setup(e){(0,r.lq)();const a=(0,r.rd)(),{t:t}=(0,m.s9)(),g=(0,o.KR)(!1),M=(0,o.KR)("uuid"),B=(0,o.KR)({}),Q=(0,o.KR)(""),j=(0,n.EW)((()=>"/preview/pdfjs/web/viewer.html?file="+encodeURIComponent("/preview/Document Verification Guidelines.pdf")+"&pagemode=none")),J=()=>{g.value=!0},$=a.currentRoute.value.params.id,Z=a.currentRoute.value.query.split,Y=(0,o.KR)(t("page.organizes.preview.defaultSplitMethods")),ee=(0,o.KR)([t("page.organizes.preview.splitMethods")]),ae=(0,o.KR)(!1),te=(0,o.KR)({}),ne=(0,o.KR)({}),le=(0,o.KR)(0),oe=(0,o.KR)(!1),ue=(0,o.KR)(null),re=(0,o.KR)({}),ie=(0,o.KR)(!1),se=(0,o.KR)({inputs:[],list:[],docId:"",total:0}),de=(0,o.KR)([]),ce=(0,o.Kh)({chunkText:"",chunkParagraph:1});let pe=!1,ve=null,me=1;const ge=()=>{ve&&clearInterval(ve),me=1,ve=setInterval((async()=>{const e=await(0,p.P)($,null,null);e&&e.data&&5===e.data.parserState&&(await Ve(),ie.value=!1,ve&&clearInterval(ve)),me++,me>100&&ve&&clearInterval(ve)}),4e3)},he=()=>{ce.chunkParagraph=1,ce.chunkText="",ke(),Ue(1)},ke=()=>{+ce.chunkParagraph>se.value.total?i.nk.error(t("page.organizes.preview.splitParagraphExceed")):+ce.chunkParagraph>1?Ue(+ce.chunkParagraph):de.value.map((e=>{e.enable=!ce.chunkText,ce.chunkText&&e.page_content?.includes(ce.chunkText)&&(e.enable=!0)}))},fe=()=>{oe.value=!0,le.value=0},we=()=>{le.value<0||le.value>se.value.total?i.nk.error(t("page.organizes.preview.insertNumberError")):(se.value.inputs.splice(le.value,0,{page_content:""}),de.value=se.value.inputs,Ue(le.value),oe.value=!1,setTimeout((()=>Oe(le.value))))},be=async()=>{ae.value=!0,ie.value=!0,_e.value="split";const e=await(0,p.bc)({docId:$});if(pe&&e?.data)return void ge();pe=!0;const a=Ae.getValue();await(0,p.MX)({docId:$,markdownContent:a}),setTimeout((async()=>{await(0,p.lD)({docId:$}),setTimeout((async()=>{await(0,p.lD)({docId:$}),ge()}),4e3)}),1e3)},ye=async()=>{},Te=(0,o.KR)({name:"文件"}),_e=(0,o.KR)(Z?"split":"render"),Re=(0,o.KR)(""),xe=((0,n.EW)((()=>"/preview/pdfjs/web/viewer.html?file="+encodeURIComponent(Re.value)+"&pagemode=none")),(0,o.KR)("")),ze=(0,o.KR)(""),Se=()=>{const e=window.document.documentElement.clientHeight-110;Ae.height(e)},Ce=()=>{const e=window.document.documentElement.clientHeight-182;Le?.height(e),Le?.state.preview&&Le.previewing(),setTimeout((()=>{Le&&!Le.state.preview&&Le.previewing()}),600)},Pe=()=>{};(0,o.KR)(!1);let Le=null,Ae=null;const Ie=()=>{if("render"===_e.value||Z)return void a.push({path:"/organize/document"});const e=t("page.organizes.preview.backSplitHint"),n=t("page.organizes.preview.titleH");s.s.confirm(e,n,{confirmButtonText:t("page.organizes.docus.buttonSubmit"),cancelButtonText:t("page.organizes.docus.buttonCancel"),type:"warning"}).then((()=>{_e.value="render",Fe()})).catch((()=>{}))};window.addEventListener("resize",(()=>{Se(),Ce()}));const Ee=async()=>{s.s.confirm(t("page.organizes.preview.document"),t("page.organizes.preview.titleH"),{confirmButtonText:t("page.organizes.docus.buttonSubmit"),cancelButtonText:t("page.organizes.docus.buttonCancel"),type:"warning"}).then((async()=>{if(ie.value=!0,"render"===_e.value){const e=Ae.getValue();await(0,p.MX)({docId:$,markdownContent:e}),await(0,p.lD)({docId:$}),a.push("/organize/document")}else{const e={};de.value=de.value.filter((e=>e.page_content));let n=0;e.inputs=de.value.map((e=>(delete e.enable,e.id=n,e.is_compound=e.is_compound||!1,e.jump_index=e.jump_index||0,e.metadata=e.metadata||{},e))),e.list=se.value.list,e.docId=se.value.docId,await(0,p.DX)(e),i.nk.success(t("page.organizes.docus.success")),a.push("/organize/document")}ie.value=!1})).catch((()=>{ie.value=!1}))},Fe=()=>{Ae=window.editormd("editor",{path:"/preview/editormd/lib/",htmlDecode:"style,script,iframe",watch:!1,toolbar:!0,codeFold:!0,searchReplace:!0,toolbarIcons:()=>window.editormd.toolbarModes.full.concat(["customIcon"]),toolbarIconsClass:{customIcon:"fa-paste"},toolbarIconTexts:{customIcon:"从草稿箱加载"},lang:{toolbar:{customIcon:"从草稿箱加载"}},toolbarHeaders:{customIcon:()=>{Ae.CodeAutoSaveGetCache()}},onresize:()=>{},onload:()=>{window.editormd.loadPlugin("/preview/editormd/lib/plugins/code-auto-save/code-auto-save",(()=>{Ae.CodeAutoSave()})),Se(),Pe()}})},Ve=async()=>{const e=await(0,p.co)({docId:$});e&&200===e.code&&e.data?(se.value.inputs=e.data.inputs,se.value.list=e.data.chunk_document_list||[],se.value.docId=e.data.doc_id,se.value.total=se.value.inputs.length,de.value=se.value.inputs,setTimeout((()=>Oe(0)),100)):(i.nk.error(e?.msg),_e.value="render",Fe())},Ke=e=>{te.value[e]&&ne.value[e]&&(ne.value[e].scrollTop=te.value[e].$el.querySelector("textarea").scrollTop)},Xe=e=>ce.chunkText?e.replaceAll(ce.chunkText,`<span class="highlight">${ce.chunkText}</span>`):e,Ue=e=>{const a=re.value[e-1];if(a&&ue.value){const e=a.offsetTop;ue.value.wrapRef.scrollTop=e}},Oe=e=>{if(e)ne.value[e].style.height=te.value[e].textarea.clientHeight+"px";else for(e in te.value)ne.value[e].style.height=te.value[e].textarea.clientHeight+"px"};let qe=0;const He=e=>{if("Enter"===e.key){if(e.target&&"TEXTAREA"===e.target.nodeName)return;const a=window.document.querySelectorAll(".highlight");if(0===a.length)return;for(const e of a)if(e.className.includes("highlighted")){e.className=e.className.replace("highlighted","");break}const t=a[qe];t.className+=" highlighted",ue.value.wrapRef.scrollTop=t.parentNode.parentNode.offsetTop,t.parentNode.scrollTop=t.offsetTop,qe++,qe>=a.length&&(qe=0)}};return(0,n.wB)((()=>te.value),(()=>{Oe(0)})),(0,n.sV)((async()=>{try{if($&&$.length>10){ie.value=!0;const e=await(0,p.P)($,"preview");if(e&&e.data){if(Te.value=e.data,Te.value.name=e.data.docName,ze.value=Te.value.markdownContent,Te.value.sourceFile){let e=Te.value.mdFile;Q.value=Te.value.sourceFile;const a=await(0,v.Ml)({url:e});xe.value=a}"split"===_e.value&&await Ve()}ie.value=!1}}catch(e){i.nk.error(e)}window.document.getElementById("pdfPreview").style.height=window.document.documentElement.clientHeight-174+"px",Fe(),window.document.addEventListener("keydown",He)})),(0,n.hi)((()=>{clearInterval(ve),window.document.removeEventListener("keydown",He)})),(e,a)=>{const r=(0,n.g2)("el-link"),i=(0,n.g2)("el-button"),s=(0,n.g2)("el-option"),p=(0,n.g2)("el-select"),v=(0,n.g2)("el-input"),m=(0,n.g2)("el-col"),$=(0,n.g2)("el-row"),Z=(0,n.g2)("el-scrollbar"),ae=(0,n.g2)("el-form-item"),pe=(0,n.g2)("el-form"),ve=(0,n.g2)("el-dialog"),me=(0,n.gN)("loading");return(0,n.uX)(),(0,n.CE)("div",h,[(0,n.Lk)("div",k,[(0,n.Lk)("div",f,[(0,n.bF)(r,{onClick:Ie},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)((0,o.R1)(t)("page.organizes.preview.back")),1)])),_:1}),"render"===_e.value?((0,n.uX)(),(0,n.CE)("span",w,(0,l.v_)((0,o.R1)(t)("page.organizes.preview.titleT")),1)):((0,n.uX)(),(0,n.CE)("span",b,(0,l.v_)((0,o.R1)(t)("page.organizes.preview.titleS")),1)),(0,n.Lk)("a",{onClick:J,class:"color-huge mr16"}," Guidelines "),"render"===_e.value?((0,n.uX)(),(0,n.Wv)(i,{key:2,class:"color-huge border-huge",onClick:be},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)((0,o.R1)(t)("page.organizes.preview.splitPreview")),1)])),_:1})):(0,n.Q3)("",!0),(0,n.bF)(i,{disabled:ie.value,type:"primary",onClick:Ee},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)((0,o.R1)(t)("page.organizes.preview.confirm")),1)])),_:1},8,["disabled"])])]),(0,n.Lk)("div",y,[(0,n.Lk)("div",T,[(0,n.Lk)("div",_,[(0,n.Lk)("div",R,(0,l.v_)(Te.value.name),1),"splitP"===_e.value?((0,n.uX)(),(0,n.CE)("div",x,[(0,n.Lk)("div",z,[(0,n.bF)(p,{modelValue:Y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>Y.value=e),onClick:ye},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(ee.value,(e=>((0,n.uX)(),(0,n.Wv)(s,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])])):(0,n.Q3)("",!0)]),(0,n.Lk)("div",S,[(0,n.bF)(d.A,{id:"pdfPreview",uuid:M.value,history:B.value,sourceUrl:Q.value},null,8,["uuid","history","sourceUrl"])])]),(0,n.bo)((0,n.Lk)("div",C,[(0,n.Lk)("div",P,[(0,n.Lk)("textarea",{class:"none",textContent:(0,l.v_)(xe.value)},null,8,L)])],512),[[u.aG,"render"===_e.value]]),(0,n.bo)((0,n.Lk)("div",A,[(0,n.Lk)("div",I,[(0,n.bF)($,null,{default:(0,n.k6)((()=>[(0,n.bF)(m,{span:16},{default:(0,n.k6)((()=>[(0,n.Lk)("span",E,(0,l.v_)((0,o.R1)(t)("page.organizes.preview.splitText")),1),(0,n.bF)(v,{disabled:ie.value,class:"th-s-input",modelValue:ce.chunkText,"onUpdate:modelValue":a[1]||(a[1]=e=>ce.chunkText=e),placeholder:(0,o.R1)(t)("page.organizes.preview.splitTextPlaceHolder")},null,8,["disabled","modelValue","placeholder"]),(0,n.Lk)("span",F,(0,l.v_)((0,o.R1)(t)("page.organizes.preview.splitParagraph")),1),(0,n.bF)(v,{min:1,max:se.value.total,disabled:ie.value,type:"number",class:"th-s-input th-s-number",modelValue:ce.chunkParagraph,"onUpdate:modelValue":a[2]||(a[2]=e=>ce.chunkParagraph=e)},null,8,["max","disabled","modelValue"]),V,(0,n.Lk)("span",null,(0,l.v_)(se.value.total),1)])),_:1}),(0,n.bF)(m,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",K,[(0,n.bF)(i,{disabled:ie.value,class:"th-s-button",type:"primary",onClick:ke},{icon:(0,n.k6)((()=>[(0,n.bF)((0,o.R1)(c.A),{type:"pk-search"})])),default:(0,n.k6)((()=>[(0,n.eW)(" "+(0,l.v_)((0,o.R1)(t)("page.organizes.docus.th-s")),1)])),_:1},8,["disabled"]),(0,n.bF)(i,{disabled:ie.value,class:"th-s-button color-huge border-huge",onClick:he},{icon:(0,n.k6)((()=>[(0,n.bF)((0,o.R1)(c.A),{type:"pk-refresh"})])),default:(0,n.k6)((()=>[(0,n.eW)(" "+(0,l.v_)((0,o.R1)(t)("page.organizes.docus.th-s-reset")),1)])),_:1},8,["disabled"])])])),_:1})])),_:1})]),(0,n.Lk)("div",X,[(0,n.bF)($,null,{default:(0,n.k6)((()=>[(0,n.bF)(m,{span:4},{default:(0,n.k6)((()=>[(0,n.bF)(i,{disabled:ie.value,class:"th-s-button color-huge border-huge",onClick:fe},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)((0,o.R1)(t)("page.organizes.preview.buttonAdd")),1)])),_:1},8,["disabled"])])),_:1})])),_:1})]),(0,n.bo)(((0,n.uX)(),(0,n.CE)("div",U,[(0,n.bF)(Z,{ref_key:"scrollbarRef",ref:ue,height:"68vh"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(de.value,((e,a)=>((0,n.uX)(),(0,n.CE)("div",{ref_for:!0,ref:e=>re.value[a]=e,key:a},[void 0===e.enable||!0===e.enable?((0,n.uX)(),(0,n.CE)("div",{key:0,class:(0,l.C4)(["split-next","split-next"+a])},[(0,n.Lk)("div",O," #"+(0,l.v_)((a+1+"").padStart(4,"0")),1),(0,n.Lk)("div",q,[(0,n.bF)(v,{ref_for:!0,ref:e=>te.value[a]=e,class:"textarea",type:"textarea",modelValue:e.page_content,"onUpdate:modelValue":a=>e.page_content=a,onInput:e=>Oe(a),onScroll:e=>Ke(a),autosize:{minRows:5,maxRows:14},placeholder:(0,o.R1)(t)("page.organizes.preview.insertTextHolder")},null,8,["modelValue","onUpdate:modelValue","onInput","onScroll","placeholder"]),(0,n.Lk)("div",{ref_for:!0,ref:e=>ne.value[a]=e,class:"highlighted-text",innerHTML:Xe(e.page_content)},null,8,H)])],2)):(0,n.Q3)("",!0)])))),128))])),_:1},512)])),[[me,ie.value]])],512),[[u.aG,"render"!==_e.value]])]),(0,n.bF)(ve,{modelValue:oe.value,"onUpdate:modelValue":a[4]||(a[4]=e=>oe.value=e),width:"20%",title:(0,o.R1)(t)("page.organizes.preview.addTitle"),"close-on-click-modal":!1,"close-on-press-escape":!1,"close-on-click-wrapper":!1},{footer:(0,n.k6)((()=>[(0,n.Lk)("div",W,[(0,n.bF)(i,{type:"primary",onClick:we},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)((0,o.R1)(t)("page.organizes.preview.confirmButton")),1)])),_:1})])])),default:(0,n.k6)((()=>[(0,n.Lk)("div",N,[(0,n.bF)(pe,null,{default:(0,n.k6)((()=>[(0,n.bF)(ae,{label:(0,o.R1)(t)("page.organizes.preview.addLabel")},{default:(0,n.k6)((()=>[(0,n.bF)(v,{min:0,max:se.value.total,type:"number",modelValue:le.value,"onUpdate:modelValue":a[3]||(a[3]=e=>le.value=e),class:"number"},null,8,["max","modelValue"])])),_:1},8,["label"])])),_:1})])])),_:1},8,["modelValue","title"]),(0,n.bF)(ve,{modelValue:g.value,"onUpdate:modelValue":a[5]||(a[5]=e=>g.value=e),width:"50%",title:"Guidelines","close-on-click-modal":!1,"close-on-press-escape":!1,"close-on-click-wrapper":!1},{default:(0,n.k6)((()=>[(0,n.Lk)("div",G,[(0,n.Lk)("iframe",{src:j.value},null,8,D)])])),_:1},8,["modelValue"])])}}}),B=t(83940);const Q=(0,B.A)(M,[["__scopeId","data-v-298e93e6"]]);var j=Q}}]);