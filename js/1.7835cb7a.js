"use strict";(self["webpackChunkSensepedia"]=self["webpackChunkSensepedia"]||[]).push([[1],{21312:function(e,a,t){t.r(a),t.d(a,{default:function(){return ia}});t(14898);var l=t(28694),n=t(83487),o=t(38118),i=t(97913),s=t(98836),r=t(74913),c=t(32228),u=t(19477),d=t(74560),p=t(87591),m=t(47531),v=t(18232),k=t(12567),g=t(69989),h=t(97053),f=t(49284),y=t(57668),w=t(18684),b=t(49302),_=t(17299);const q={class:"list-chat"},C={key:0,class:"list-chat-nodata"},R=["src"],L=["onClick"],x={key:0,class:"list-chat-item-online"},F={class:"list-chat-item-onlineT"},E={class:"list-chat-item-onlineD"},A={key:1,class:"list-chat-item-title"},I={class:"list-chat-item-onlineT"},W={class:"list-chat-item-onlineD"},K={key:2,class:"list-chat-item-op"};var X=(0,l.pM)({__name:"List",props:{filter:{}},emits:["loadData","stopLLM"],setup(e,{emit:a}){const{t:t}=(0,c.s9)(),s=(0,r.Pj)(),p=e,m=a,v=(0,l.EW)((()=>"/")),X=(0,l.EW)((()=>{const e=s.state.pk_qa.history;if(p.filter){const a=e.filter((e=>e.title.includes(p.filter)));return a.filter((e=>e.uuid))}return e.filter((e=>e.uuid))})),T=(0,l.EW)((()=>s.state.pk_qa.active)),S=async({uuid:e})=>{Q(e)||(T.value&&s.commit("pk_qa/updateHistory",{uuid:T.value,type:"update",isEdit:!1}),m("loadData",{uuid:e}))},B=async({uuid:e,title:a},l,n)=>{if(n?.stopPropagation(),e){await(0,b.aQ)({id:e,name:a});s.commit("pk_qa/updateHistory",{uuid:e,type:"update",title:a,isEdit:l}),d.nk.success(t("page.qa.main.modifySuccess"))}else{const e=await(0,b.xU)({name:a,scope:1}),n=~~e.data.id;s.commit("pk_qa/updateHistory",{uuid:n,type:"add",isEdit:l,createdAt:e.data.createTime}),s.commit("pk_qa/saveActive",{uuid:n}),d.nk.success(t("page.qa.main.submitSuccess"))}},V=({uuid:e},a,t)=>{e&&s.commit("pk_qa/updateHistory",{uuid:e,type:"update",isEdit:a})},D=async({uuid:e},a)=>{a?.stopPropagation(),u.s.confirm(t("page.qa.main.deleteHintDetail"),t("page.qa.main.deleteHint"),{confirmButtonText:t("page.qa.main.confirmButton"),cancelButtonText:t("page.qa.main.cancelButton"),type:t("page.qa.main.deleteType")}).then((async()=>{await(0,b.O8)({ids:""+e,scope:1}),m("stopLLM",{uuid:e}),s.commit("pk_qa/deleteHistory",{uuid:e}),d.nk.success(t("page.qa.main.deleteSuccess"))})).catch((()=>{}))},H=(0,y.s)(D,600);let N=!1,U=!1;const M=async(e,a,t)=>{N?N=!1:U||(U=!0,await B(e,a,t),U=!1)},O=({uuid:e},a)=>{N=!0,e&&s.commit("pk_qa/updateHistory",{uuid:e,type:"update",isEdit:a})},Q=e=>T.value===e;return(0,l.sV)((()=>{(0,_.eo)(),(0,_.Ru)()})),(0,l.hi)((()=>{(0,_.zg)()})),(e,a)=>((0,l.uX)(),(0,l.Wv)((0,o.R1)(g.kA),null,{default:(0,l.k6)((()=>[(0,l.Lk)("div",q,[X.value.length?((0,l.uX)(!0),(0,l.CE)(l.FK,{key:1},(0,l.pI)(X.value,((e,a)=>((0,l.uX)(),(0,l.CE)("div",{key:a},[(0,l.Lk)("a",{class:(0,n.C4)(["list-chat-item",Q(e.uuid)&&"active"]),onClick:a=>S(e)},[e.isEdit?((0,l.uX)(),(0,l.CE)("div",A,[(0,l.Lk)("div",I,[(0,l.bF)((0,o.R1)(h.WK),{class:"input",modelValue:e.title,"onUpdate:modelValue":a=>e.title=a,onBlur:a=>M(e,!1,a),onKeydown:[(0,i.jR)((a=>M(e,!1,a)),["enter"]),(0,i.jR)((a=>O(e,!1)),["esc"])],placeholder:(0,o.R1)(t)("page.qa.list.inputHolder")},null,8,["modelValue","onUpdate:modelValue","onBlur","onKeydown","placeholder"])]),(0,l.Lk)("div",W,(0,n.v_)(e.createdAt),1)])):((0,l.uX)(),(0,l.CE)("div",x,[(0,l.Lk)("div",F,[(0,l.bF)(w.A,{content:e.title.substring(0,99),placement:"bottom-start","show-arrow":!1},null,8,["content"])]),(0,l.Lk)("div",E,(0,n.v_)(e.createdAt),1)])),Q(e.uuid)&&e.uuid?((0,l.uX)(),(0,l.CE)("div",K,[e.isEdit?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)(l.FK,{key:0},[(0,l.bF)((0,o.R1)(f.S2),{class:"list-chat-item-opU",onClick:a=>V(e,!0,a)},{default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(k.A),{type:"pk-edit",class:"wh20"})])),_:2},1032,["onClick"]),(0,l.bF)((0,o.R1)(f.S2),{class:"list-chat-item-opD",onClick:a=>(0,o.R1)(H)(e,a)},{default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(k.A),{type:"pk-delete",class:"wh20"})])),_:2},1032,["onClick"])],64))])):(0,l.Q3)("",!0)],10,L)])))),128)):((0,l.uX)(),(0,l.CE)("div",C,[(0,l.Lk)("img",{src:v.value+"images/nodata.svg",width:"176px",height:"115px"},null,8,R),(0,l.eW)(" "+(0,n.v_)((0,o.R1)(t)("page.qa.list.nodata")),1)]))])])),_:1}))}}),T=t(83940);const S=(0,T.A)(X,[["__scopeId","data-v-4b1b508c"]]);var B=S;const V={class:"chat-hint-icon"},D={class:"chat-hint-box"},H={class:"chat-hint-box-title"},N={class:"chat-hint-box-desc"};var U=(0,l.pM)({__name:"Hint",props:{id:{},title:{},desc:{}},setup(e){const a=e,t=e=>{};return(e,o)=>((0,l.uX)(),(0,l.CE)("div",{class:"chat-hint",onClick:o[0]||(o[0]=e=>t(a.title))},[(0,l.Lk)("div",V,[(0,l.RG)(e.$slots,"icon")]),(0,l.Lk)("div",D,[(0,l.Lk)("div",H,(0,n.v_)(a.title),1),(0,l.Lk)("div",N,(0,n.v_)(a.desc),1)])]))}});const M=(0,T.A)(U,[["__scopeId","data-v-10048ac3"]]);var O=M,Q=t(91563),j=t(52379);const Y={key:0,class:"chat-message-divider"},J={class:"chat-message-header"},P=["src"],$={class:"chat-message-body"},G={class:"chat-message-body-text"},z={key:0,class:"chat-message-footer"},Z={class:"chat-message-footer-right"},ee={class:"chat-message-footer-rightr"},ae={key:1,class:"chat-message-weburl"},te={class:"index"},le={class:"url"},ne=["href"],oe=["onClick"],ie={class:"dialog-footer"};var se=(0,l.pM)({__name:"Message",props:{id:{},createdAt:{},text:{},owner:{},error:{type:Boolean},loading:{type:Boolean},like:{type:Boolean},unlike:{type:Boolean},feedback:{type:Boolean},urls:{},status:{},continueNumber:{},preConversationId:{}},emits:["regenerate","delete","like","unlike","feedback","continue"],setup(e,{emit:a}){const{t:t}=(0,c.s9)(),i=(0,r.Pj)(),s=e,u=a,p=(0,o.KR)("me"===s.owner),v=(0,o.KR)(null),g=(0,o.KR)(!1),h=(0,o.KR)(t("page.qa.message.feedback")),y=(0,o.KR)(t("page.qa.message.feedbackList").split(",")),_=(0,o.KR)(null),q=(0,o.Kh)({value:""}),C=(0,o.Kh)({value:[{required:!0,message:t("page.qa.message.feedbackPlaceholder"),trigger:"blur"}]}),R=(0,l.EW)((()=>i.state.global.canFeedback)),L=(0,l.EW)((()=>{let e=s.text?.replace(/<br\/>|<br>/g,"\n")||"";return e=e.replaceAll("\\boxed",""),2===s.status?e+=`<span class="stop">${t("page.qa.main.stopText")}</span>`:5===s.status&&Number(s.continueNumber||0)<3?e+=`<a class="limit">${t("page.qa.main.limitText")}</a>`:6===s.status&&(e=t("page.qa.message.error")),e||t("page.qa.answer.error")})),x=(0,l.EW)((()=>s.like)),F=(0,l.EW)((()=>s.unlike)),E=(0,l.EW)((()=>s.feedback)),A=(0,l.EW)((()=>!1)),I=async()=>{s.id&&!s.like&&(await(0,b.HL)({id:s.id,score:1}),u("like",s.id),d.nk.success(t("page.qa.main.likeSuccess")))},W=async()=>{s.id&&!s.unlike&&(await(0,b.Sn)({id:s.id,score:2}),u("unlike",s.id),d.nk.success(t("page.qa.main.globalSuccess")))},K=async()=>{s.id&&!s.feedback&&(g.value=!0),q.value=""},X=async()=>{try{const e=_.value?.validate();if(!e)return;await(0,b.H9)({id:s.id,comment:q.value}),u("feedback",s.id||0,q.value),d.nk.success(t("page.qa.main.submitSuccess")),g.value=!1}catch(e){g.value=!1,console.log(e)}},T=async()=>{u("continue")},S=e=>{q.value=e},B=e=>{switch(e){case"clipboard":D();break;case"delete":u("delete");break;case"asText":p.value=!p.value;break}},V=()=>{v.value?.scrollIntoView(),u("regenerate")},D=async()=>{try{await(0,j.L)(L.value||""),d.nk.success(t("page.qa.main.copySuccess"))}catch(e){d.nk.error(t("page.qa.main.copyError"))}};return(e,a)=>{const i=(0,l.g2)("el-divider"),r=(0,l.g2)("el-form-item"),c=(0,l.g2)("el-input"),u=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.CE)(l.FK,null,["me"===s.owner&&-1===e.preConversationId?((0,l.uX)(),(0,l.CE)("div",Y,[(0,l.bF)(i,{"content-position":"center"},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)((0,o.R1)(t)("page.qa.main.divider")),1)])),_:1})])):(0,l.Q3)("",!0),(0,l.Lk)("div",{ref_key:"messageRef",ref:v,class:(0,n.C4)(["chat-message","me"===s.owner?"reverse":""])},[(0,l.Lk)("div",J,[(0,l.Lk)("img",{src:"me"===s.owner?"/images/GroupQ.png":"/images/GroupA.png",width:"40",height:"40"},null,8,P)]),(0,l.Lk)("div",$,[(0,l.Lk)("div",G,[(0,l.bF)(Q.A,{ref:"textRef",owner:e.owner,error:e.error,text:L.value,loading:e.loading,UUID:e.id,"as-raw-text":p.value,onHandleLimit:T},null,8,["owner","error","text","loading","UUID","as-raw-text"])]),e.id?((0,l.uX)(),(0,l.CE)("div",z,["me"===s.owner?((0,l.uX)(),(0,l.CE)(l.FK,{key:0},[],64)):((0,l.uX)(),(0,l.CE)(l.FK,{key:1},[R.value?((0,l.uX)(),(0,l.Wv)((0,o.R1)(f.S2),{key:0,type:"text",onClick:I},{default:(0,l.k6)((()=>[x.value?((0,l.uX)(),(0,l.Wv)((0,o.R1)(k.A),{key:1,type:"pk-liked",class:"wh18 hover"})):((0,l.uX)(),(0,l.Wv)((0,o.R1)(k.A),{key:0,type:"pk-like",class:"wh18 hover"}))])),_:1})):(0,l.Q3)("",!0),R.value?((0,l.uX)(),(0,l.Wv)((0,o.R1)(f.S2),{key:1,type:"text",onClick:W},{default:(0,l.k6)((()=>[F.value?((0,l.uX)(),(0,l.Wv)((0,o.R1)(k.A),{key:1,type:"pk-unliked",class:"wh18 hover"})):((0,l.uX)(),(0,l.Wv)((0,o.R1)(k.A),{key:0,type:"pk-unlike",class:"wh18 hover"}))])),_:1})):(0,l.Q3)("",!0),R.value&&!E.value?((0,l.uX)(),(0,l.Wv)((0,o.R1)(f.S2),{key:2,type:"text",onClick:K},{default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(k.A),{type:"pk-feedback",class:"wh18 hover"})])),_:1})):(0,l.Q3)("",!0),(0,l.bF)((0,o.R1)(f.S2),{type:"text",onClick:a[0]||(a[0]=e=>B("clipboard"))},{default:(0,l.k6)((()=>[A.value?((0,l.uX)(),(0,l.Wv)((0,o.R1)(k.A),{key:1,type:"pk-copied",class:"wh18"})):((0,l.uX)(),(0,l.Wv)((0,o.R1)(k.A),{key:0,type:"pk-copy",class:"wh18 hover"}))])),_:1}),(0,l.Lk)("div",Z,[(0,l.Lk)("div",ee,[(0,l.bF)((0,o.R1)(f.S2),{type:"text",onClick:V},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)((0,o.R1)(t)("page.qa.message.regenerate")),1)])),_:1})])])],64))])):(0,l.Q3)("",!0),e.urls&&e.urls.length?((0,l.uX)(),(0,l.CE)("div",ae,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.urls,((e,a)=>((0,l.uX)(),(0,l.CE)("div",{class:"url-list",key:"weburl"+a},[(0,l.Lk)("div",te,(0,n.v_)(a+1),1),(0,l.Lk)("div",le,[(0,l.bF)(w.A,{content:e.title,placement:"bottom",offset:-12},{default:(0,l.k6)((()=>[(0,l.Lk)("a",{href:e.url,target:"_blank"},(0,n.v_)(e.title),9,ne)])),_:2},1032,["content"])])])))),128))])):(0,l.Q3)("",!0)]),(0,l.bF)(u,{modelValue:g.value,"onUpdate:modelValue":a[3]||(a[3]=e=>g.value=e),title:h.value,width:"25rem"},{footer:(0,l.k6)((()=>[(0,l.Lk)("div",ie,[(0,l.bF)((0,o.R1)(f.S2),{onClick:a[2]||(a[2]=e=>g.value=!1)},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)((0,o.R1)(t)("page.qa.main.cancelButton")),1)])),_:1}),(0,l.bF)((0,o.R1)(f.S2),{type:"primary",onClick:X},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)((0,o.R1)(t)("page.qa.main.submitButton")),1)])),_:1})])])),default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(m.US),{model:q,rules:C,ref_key:"feedbackRef",ref:_},{default:(0,l.k6)((()=>[(0,l.bF)(r,null,{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(y.value,(e=>((0,l.uX)(),(0,l.CE)("span",{class:"span",key:e,onClick:a=>S(e)},(0,n.v_)(e),9,oe)))),128))])),_:1}),(0,l.bF)(r,{label:"",props:"value"},{default:(0,l.k6)((()=>[(0,l.bF)(c,{modelValue:q.value,"onUpdate:modelValue":a[1]||(a[1]=e=>q.value=e),type:"textarea",autosize:{minRows:4,maxRows:4}},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])],2)],64)}}});const re=(0,T.A)(se,[["__scopeId","data-v-78a2d172"]]);var ce=re,ue=t(70579),de=t(76412),pe=t(85158),me=t(81329);const ve=e=>((0,l.Qi)("data-v-7b909cff"),e=e(),(0,l.jt)(),e),ke={class:"main"},ge={class:"left-chat"},he={class:"qa"},fe={class:"qa-header"},ye={class:"qa-header-title"},we={class:"qa-main"},be={class:"qa-main-create"},_e={class:"qa-main-list"},qe={class:"qa-main-clear"},Ce={id:"scrollRef",ref:"scrollRef",class:"main-chat"},Re={class:"main-chat-grow"},Le={class:"main-chat-nodata"},xe={class:"main-chat-nodata-left"},Fe={class:"main-chat-nodata-right",style:{width:"100%",gap:"16px"}},Ee={key:1,class:"main-chat-content"},Ae={class:"main-chat-grow"},Ie={key:0,class:"main-chat-nodata"},We=ve((()=>(0,l.Lk)("div",{class:"main-chat-nodata-left"},[(0,l.Lk)("span",null,[(0,l.Lk)("img",{src:"/images/GroupA.png",width:"40",height:"40"})])],-1))),Ke={class:"main-chat-nodata-right"},Xe={class:"main-chat-nodata-title"},Te=["innerHTML"],Se={class:"main-chat-nodata-hint"},Be=["onClick"],Ve=["src"],De={key:1,id:"chatMessage",class:"main-chat-message"},He={key:0},Ne={class:"main-chat-footer mt-24"},Ue={class:"main-chat-footer-op"},Me={class:"main-chat-footer-opNormal"},Oe={class:"normal-datah1"},Qe=["onClick"],je={class:"normal-data-item-operation"},Ye=["onClick"],Je=["onClick"],Pe={class:"normal-data-item addplus"},$e={class:"main-chat-footer-operation"},Ge={class:"el-dropdown-link"},ze={class:"main-chat-footer-opWeb"},Ze={class:"main-chat-footer-operation flex-grow"},ea={class:"main-chat-footer-input"},aa={class:"main-chat-footer-button"},ta={class:"dialog-footer"},la=1;var na=(0,l.pM)({__name:"index",setup(e){const{addChat:a,updateChat:t,updateChatSome:g,getChatByUuidAndIndex:h}=(0,ue.Y)(),{scrollbarRef:f,scrollToBottom:y,scrollToBottomIfAtBottom:q}=(0,de.A)();let C=new AbortController,R="",L=0;const x=(0,s.rd)(),{currentRoute:F}=x,E=(0,r.Pj)(),{locale:A,t:I}=(0,c.s9)();E.commit("global/setMenuEnable",!0);const W=(0,o.KR)(4e3),K=(0,o.KR)(!0),X=(0,o.KR)(!1),T=(0,o.KR)(""),S=(0,o.KR)(!1),V=(0,o.KR)([]),D=(0,o.KR)({title:I("page.qa.main.nodata.title"),subtitle:I("page.qa.main.nodata.detail"),hint:I("page.qa.main.nodata.hint")}),H=(0,o.KR)([]),N=(0,o.KR)(!1),U=(0,o.Kh)({id:0,content:"",scope:la}),M=(0,o.KR)(),Q=(0,o.KR)(!1),j=(0,o.KR)(!1),Y=(0,o.KR)(14),J=(0,o.KR)(0),P=(0,o.KR)(null),$=(0,o.KR)(""),G=(0,o.KR)(null),z=(0,o.KR)("prompt"),Z=(0,l.EW)((()=>"prompting"===z.value||!$.value||0===$.value.length)),ee=(0,l.EW)((()=>{const e=E.state.pk_qa.active;return e})),ae=(0,l.EW)((()=>E.state.pk_qa.history)),te=(0,l.EW)((()=>{const e=E.state.pk_qa.history.find((e=>e.uuid===ee.value));return e?e.chats:E.state.pk_qa.chats})),le=(0,o.Kh)({content:[{required:!0,message:I("page.qa.normalData.placeholder"),trigger:"blur"}]}),ne=e=>{e.stopPropagation();const a=e.key;a&&"Enter"===a&&console.log("enter")},oe=async()=>{const e=E.state.pk_document.history.find((e=>null===e.uuid));e||(await Aa(),E.commit("pk_qa/addHistory",{uuid:null,title:"New Chat",isEdit:!1,createdAt:(0,me.pr)(new Date)}),E.commit("pk_qa/saveActive",{uuid:null}),E.commit("pk_qa/saveHistory",{uuid:null}),await(0,l.dY)(),J.value=-1,(0,_.cY)())},ie=async(e,a)=>{$.value=e.prompt,G.value?.focus(),a&&(fa(!1,{},!0),$.value="")},se=async()=>{try{const e=await(M.value?.validate());if(!e)return;const{id:a}=U;a?await(0,b.v8)(U):(U.id=0,await(0,b.p1)(U)),await Ha()}catch(e){console.log(e)}finally{N.value=!1}},re=e=>{$.value=e.content||"",P.value&&P.value.hide(),Ra()},ve=async e=>{U.id=e.id,U.content=e.content||"",N.value=!0},na=async e=>{u.s.confirm(I("page.qa.main.deleteHintDetail"),I("page.qa.main.deleteHint"),{confirmButtonText:I("page.qa.main.confirmButton"),cancelButtonText:I("page.qa.main.cancelButton"),type:I("page.qa.main.deleteType")}).then((async()=>{await(0,b.Tf)(e),await Ha()})).catch((()=>{}))},oa=()=>{U.id=0,U.content="",N.value=!0};let ia="",sa=0;const ra=e=>{const a=e.event.target,{responseText:t}=a,l=t.trimEnd().split("\n");let n={},o=ia,i=!1;try{const e=l.length;if(e>0){for(let a=0;a<e;a++){const e=l[a];if(n=JSON.parse(e),n.stopId)R=n.stopId;else{if("conversationId"in n){L=n.conversationId,i=!1;break}n.answer&&(o+=n.answer),"sensitive"===n.finish_reason&&(o+=I("page.qa.message.error"))}}o&&g(ee.value,sa,{text:o,owner:"llm",error:!1,loading:i})}}catch(s){console.log(s)}},ca=e=>{const a=e.event.target,{responseText:t}=a,l=t.trimEnd().split("\n");let n={},o="",i=!1;try{const e=l.length;if(e<=2&&null===ee.value){try{const e=JSON.parse(l[0]);e.scope&&ma(e)}catch(s){console.error(s)}return}if(e>0){o="";for(let a=0;a<e;a++){const e=l[a];if(n=JSON.parse(e),n.stopId)R=n.stopId;else{if("conversationId"in n){L=n.conversationId,i=!1;break}n.answer&&(o+=n.answer),"sensitive"===n.finish_reason&&(o+=I("page.qa.message.error"))}}o&&(g(ee.value,te.value.length-1,{createdAt:(0,me.pr)(new Date),text:o,owner:"llm",error:!1,loading:i}),ia=o),q()}}catch(r){console.log(r)}},ua=async e=>{const a=te.value.findIndex((a=>a.id===e));-1!==a&&g(ee.value,a,{like:!0,unlike:!1})},da=async e=>{const a=te.value.findIndex((a=>a.id===e));-1!==a&&g(ee.value,a,{like:!1,unlike:!0})},pa=async(e,a)=>{const t=te.value.findIndex((a=>a.id===e));-1!==t&&g(ee.value,t,{feedback:a})},ma=e=>{E.commit("pk_qa/updateHistory",{type:"updateId",uuid:ee.value,id:e.id,name:e.name}),E.commit("pk_qa/saveActive",{uuid:e.id}),ka=e.id},va=(e,a,t)=>{const l=JSON.parse(e.pop()),{id:n,conversationId:o,urls:i,chatStatus:s,continueNumber:r}=l;let c=[];try{i&&X.value&&(c=JSON.parse(i))}catch(u){console.error(u)}ee.value===ka&&(E.commit("pk_qa/saveHistory",{uuid:ee.value}),J.value=o,g(ee.value,t,{id:n,prompt:a,conversationId:o,urls:c,status:s,continueNumber:r,loading:!1}))};let ka=null;const ga=async(e,a,t,l)=>{ka=ee.value,ia=e.text,sa=t;const n=await(0,b.C$)({sessionId:ee.value,query:a,webSearch:X.value,webCounts:8,maxNewTokens:2048,prompt:"",...l},C.signal,ra);if(n&&"string"===typeof n){const e=n.trimEnd().split("\n");if(null===ee.value&&e.length>0){const a=JSON.parse(e[0]);a.scope&&ma(a)}va(e,a,sa),G.value?.focus()}z.value="prompt"},ha=async(e,a,t,l)=>{ka=ee.value;const n=await(0,b.C$)({sessionId:ee.value,query:a,webSearch:X.value,webCounts:8,maxNewTokens:2048,prompt:"",...l},C.signal,ca);if(n&&"string"===typeof n){const e=n.trimEnd().split("\n");if(null===ee.value&&e.length>0){const a=JSON.parse(e[0]);a.scope&&ma(a)}l.prompt;return va(e,a,te.value.length-1),ee.value&&(0,b.aQ)({id:ee.value}),q(),void setTimeout((()=>{y(),G.value?.focus()}),400)}q(),z.value="prompt",g(ee.value,t,{loading:!1})},fa=async(e=!1,l=null,n=!1)=>{let o=$.value;e&&(o=l?.prompt??"",o=o||l?.options?.prompt);const i=[];if(S.value)for(let a=0;a<te.value.length;a+=2)i.push([te.value[a].text,te.value[a+1].text.split("\n\n数据来源：\n\n")[0]]);if(!o||0===o.length)return;if("prompting"===z.value)return;let s={};s.preFreetalkId=0!==J.value?J.value:null,s.onContinue=!1,a(ee.value,{id:0,createdAt:(0,me.pr)(new Date),text:o,owner:"me",error:!1,conversation:null,conversationId:0,preConversationId:J.value,options:{prompt:o,options:null}}),y(),z.value="prompting",$.value="";a(ee.value,{id:0,createdAt:(0,me.pr)(new Date),text:I("page.qa.main.llm.hint"),loading:!0,owner:"llm",error:!1,conversation:null,conversationId:0,preConversationId:J.value,options:{prompt:o,options:s}}),J.value=0,y(),C=new AbortController,s.temperature=.7;try{ia="",L=0,n&&(s.prompt=o,o=""),await ha(ia,o,te.value.length-1,s)}catch(r){const e=r?.message;if("canceled"===e)return g(ee.value,te.value.length-1,{loading:!1}),void q();const a=h(ee.value,te.value.length-1);if(a?.text&&a.text.length>0)return void g(ee.value,te.value.length-1,{text:a.text+"\n\n"+e,error:!0,loading:!1});t(ee.value,te.value.length-1,{createdAt:(0,me.pr)(new Date),text:e,owner:"llm",error:!0,loading:!1,conversation:null,options:{prompt:o,options:s}}),q()}finally{z.value="prompt"}},ya=async e=>{if("prompting"===z.value)return;const a=te.value[e],l=a?.prompt??"",n=a?.prompted??!1;if(n)return void ie(a,!0);const o=!0;if(o)return void fa(!0,a);let i={};a.options&&(i={...a.options}),z.value="prompting",t(ee.value,e,{createdAt:(0,me.pr)(new Date),text:"",owner:"llm",error:!1,loading:!0,conversation:null,options:{prompt:l,options:i}}),i.temperature=.7;try{ia="",await ha(ia,l,e,i)}catch(s){if("canceled"===s.message)return void g(ee.value,e,{loading:!1});const a=s?.message??I("page.qa.error");t(ee.value,e,{createdAt:(0,me.pr)(new Date),text:a,owner:"llm",error:!0,loading:!1,conversation:null,options:{prompt:l,options:i}})}finally{z.value="prompt"}},wa=async e=>{if("prompting"===z.value)return;const a=te.value[e];let l=a?.prompt??"";if(l=l||a?.options?.prompt,!l||0===l.length)return;let n=[];n.preFreetalkId=a.preConversationId,z.value="prompting",$.value="",t(ee.value,e,{text:a.text,error:!1,loading:!0,options:{prompt:l,options:a.options}}),C=new AbortController,n.onContinue=!0,n.id=a.id;try{await ga(a,l,e,n)}catch(o){t(ee.value,e,{loading:!1})}finally{z.value="prompt"}},ba=()=>{Ra(),fa()},_a=()=>{(0,_.OV)()},qa=()=>{(0,_.Zr)()},Ca=e=>{E.commit("pk_qa/deleteChat",e)},Ra=()=>{setTimeout((()=>xa()))},La=e=>{if(e.shiftKey&&"Enter"===e.key){e.preventDefault();const a=e.target,t=a.selectionStart,l=a.selectionEnd;$.value=$.value.substring(0,t)+"\n"+$.value.substring(l),setTimeout((()=>{a.selectionStart=a.selectionEnd=t+1,xa()}))}},xa=()=>{(0,_.cY)(),(0,_.bj)()},Fa=()=>{ba()},Ea=async e=>{const{uuid:a}=e;setTimeout((()=>(0,_.cY)()),0),"prompting"===z.value&&(z.value="prompt",await(0,b.iO)({sessionId:a,stopId:R}),setTimeout(Ua,100))},Aa=async()=>{"prompting"===z.value&&(z.value="prompt",await(0,b.iO)({sessionId:ee.value,stopId:R}),setTimeout(Ua,100),G.value?.focus())},Ia=async()=>{const e=ae.value?.map((e=>e.uuid));e&&0===e.length?d.nk.error(I("page.qa.main.operation.notEmpty")):u.s.confirm(I("page.qa.main.operation.clearHintDetail"),I("page.qa.main.operation.clearHint"),{confirmButtonText:I("page.qa.main.confirmButton"),cancelButtonText:I("page.qa.main.cancelButton"),type:"warning"}).then((async()=>{await Ea({uuid:ee.value}),await(0,b.O8)({ids:e.join(","),scope:1}),J.value=-1,E.commit("pk_qa/clearAll"),d.nk.success(I("page.qa.main.operation.successMessageLogs")),await(0,l.dY)(),(0,_.cY)()})).catch((()=>{}))},Wa=async()=>{null!==ee.value?u.s.confirm(I("page.qa.main.operation.deleteLogs"),I("page.qa.main.operation.hint"),{confirmButtonText:I("page.qa.main.confirmButton"),cancelButtonText:I("page.qa.main.cancelButton"),type:I("page.qa.main.deleteType")}).then((async()=>{await(0,b.b5)({id:ee.value}),J.value=-1,E.commit("pk_qa/clearChatByUuid",{uuid:ee.value}),d.nk.success(I("page.qa.main.operation.successMessageLogs")),await(0,l.dY)(),(0,_.cY)()})).catch((()=>{})):d.nk.error(I("page.qa.main.operation.notEmpty"))},Ka=e=>{Y.value=e,"number"===typeof e&&(document.documentElement.style.setProperty("--text-preview",e+"px"),d.nk.success(I("page.qa.main.operation.successMessageFont")))},Xa=async()=>{},Ta=async()=>{},Sa=()=>{J.value=-1,y()},Ba=async e=>{const a=await(0,b.Vh)({language:e});a&&a.data&&a.data.length>0&&(V.value=a.data.map((e=>(e.prompt=e.content,e))))},Va=async e=>{const a=await(0,b.Ju)({scope:1,language:e});a&&a.data.length>0?(D.value=a.data[0],D.value.hint=D.value.hint||I("page.qa.main.nodata.hint")):D.value={title:I("page.qa.main.nodata.title"),subtitle:I("page.qa.main.nodata.detail"),hint:I("page.qa.main.nodata.hint")}},Da=async()=>{const e=await(0,b.rL)({scope:1});if(e&&e.data&&e.data.length>0){const a=e.data.map((e=>({uuid:e.id,title:e.name,isEdit:!1,createdAt:e.updateTime,chats:[]})));E.commit("pk_qa/loadHistory",a)}},Ha=async()=>{const e=await(0,b.WK)({scope:la});e&&e.data&&e.data.length>=0&&(H.value=e.data)},Na=async e=>{K.value=!0,await Aa(),E.commit("pk_qa/saveActive",e),Q.value=!1,await Ua(),K.value=!1,await(0,l.dY)(),(0,_.cY)(),ja(),Qa(),y(),G.value?.focus()},Ua=async(e="add")=>{if(null===ee.value)return;if(j.value)return;j.value=!0;const a="update"===e&&te.value.length>0?te.value[0].createdAt:"",t=await(0,b.O7)({sessionId:ee.value,page:5,createTime:a});if(t&&t.data.length>0){const a=[];for(const e of t.data){let t=[];try{t=JSON.parse(e.urls)}catch(l){console.error(l)}a.push({createdAt:e.createTime,id:0,text:e.query||e.prompt,owner:"me",error:!1,loading:!1,like:1===e.score,unlike:2===e.score,feedback:e.comment,prompt:e.prompt,conversationId:e.conversationId,preConversationId:e.preConversationId}),a.push({createdAt:e.createTime,id:e.id,text:e.answer,owner:"llm",error:!1,loading:!1,like:1===e.score,unlike:2===e.score,feedback:e.comment,prompt:e.query||e.prompt,urls:t,conversationId:e.conversationId,preConversationId:e.preConversationId,status:e.chatStatus,continueNumber:e.continueNumber})}"update"===e?E.commit("pk_qa/updateChatsByUuid",{uuid:ee.value,data:a}):(E.commit("pk_qa/addChatsByUuid",{uuid:ee.value,data:a}),J.value=t.data.length>0?t.data[t.data.length-1].conversationId:-1)}t&&t.data.length<5&&(Q.value=!0),j.value=!1,y()},Ma=async e=>{const a=e.target.scrollTop||e.target.documentElement.scrollTop||e.target.body.scrollTop;a<=40&&!Q.value&&(await Ua("update"),window.document.removeEventListener("scroll",Ma))},Oa=async e=>{const a=e.target.scrollTop;e.target.scrollHeight,e.target.clientHeight;a<20&&a<20&&!Q.value&&await Ua("update")},Qa=()=>{window.document.addEventListener("scroll",Ma),setTimeout((()=>f.value?.wrapRef.addEventListener("scroll",Oa)),1e3)},ja=()=>{window.document.removeEventListener("scroll",Ma),f.value?.wrapRef.removeEventListener("scroll",Oa)},{defaultLang:Ya}=(0,pe.Ay)(Ba),{defaultLang:Ja}=(0,pe.W4)(Va);return(0,l.sV)((async()=>{await Da(),await Ha(),K.value=!1,ee.value&&await Ua("add"),await Ba(Ya.value),await Va(Ja.value),Qa(),y(),(0,_.cY)(),(0,_.bj)(),G.value?.focus()})),(0,l.hi)((()=>{(0,_.fO)(),ja(),"prompting"===z.value&&C.abort()})),(0,l.wB)((()=>X.value),((e,a)=>{X.value&&e?W.value=1800:W.value=4e3})),(e,a)=>{const t=(0,l.g2)("el-input"),s=(0,l.g2)("el-button"),r=(0,l.g2)("el-skeleton-item"),c=(0,l.g2)("el-skeleton"),u=(0,l.g2)("el-col"),d=(0,l.g2)("el-row"),g=(0,l.g2)("el-divider"),h=(0,l.g2)("ElScrollbar"),y=(0,l.g2)("el-dropdown-item"),b=(0,l.g2)("el-dropdown-menu"),_=(0,l.g2)("el-dropdown"),q=(0,l.g2)("el-switch"),C=(0,l.g2)("el-form-item"),R=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.CE)("div",ke,[(0,l.Lk)("div",ge,[(0,l.Lk)("div",he,[(0,l.Lk)("div",fe,[(0,l.Lk)("h1",ye,(0,n.v_)((0,o.R1)(I)("page.qa.header.title")),1),(0,l.bF)(t,{modelValue:T.value,"onUpdate:modelValue":a[0]||(a[0]=e=>T.value=e),class:"qa-header-input",placeholder:(0,o.R1)(I)("page.qa.header.input"),onKeydown:(0,i.jR)(ne,["enter"]),"suffix-icon":(0,o.R1)(v.vji)},null,8,["modelValue","placeholder","suffix-icon"])])]),(0,l.Lk)("div",we,[(0,l.Lk)("div",be,[(0,l.bF)(s,{type:"primary",class:"qa-main-create-button",onClick:oe},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)((0,o.R1)(I)("page.qa.main.create")),1)])),_:1})]),(0,l.Lk)("div",_e,[(0,l.bF)(B,{filter:T.value,onLoadData:Na,onStopLLM:Ea},null,8,["filter"])]),(0,l.Lk)("div",qe,[(0,l.bF)((0,o.R1)(k.A),{type:"pk-delete",onClick:Ia})])])]),(0,l.Lk)("div",Ce,[K.value?((0,l.uX)(),(0,l.Wv)(c,{key:0,class:"main-chat-content",animated:""},{template:(0,l.k6)((()=>[(0,l.Lk)("div",Re,[(0,l.Lk)("div",Le,[(0,l.Lk)("div",xe,[(0,l.bF)(r,{variant:"image",width:"72",height:"72",style:{width:"72px",height:"72px"}})]),(0,l.Lk)("div",Fe,[(0,l.bF)(r,{variant:"text"}),(0,l.bF)(r,{variant:"text"}),(0,l.bF)(r,{variant:"text"}),(0,l.bF)(r,{variant:"text"})])])])])),_:1})):((0,l.uX)(),(0,l.CE)("div",Ee,[(0,l.Lk)("div",Ae,[0===te.value.length?((0,l.uX)(),(0,l.CE)("div",Ie,[We,(0,l.Lk)("div",Ke,[(0,l.Lk)("div",Xe,(0,n.v_)(D.value.title),1),(0,l.Lk)("div",{class:"main-chat-nodata-detail",innerHTML:D.value.subtitle},null,8,Te),(0,l.Lk)("div",Se,[(0,l.Lk)("div",null,(0,n.v_)(D.value.hint),1),(0,l.bF)(d,{class:"mt-8"},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(V.value,((e,a)=>((0,l.uX)(),(0,l.Wv)(u,{class:(0,n.C4)({"mb-16":a<1}),span:12,key:"r"+a},{default:(0,l.k6)((()=>[(0,l.Lk)("a",{class:"full",onClick:a=>ie(e,!1)},[(0,l.bF)(O,{class:(0,n.C4)("chat-hint"+a%2),title:e.title,desc:e.description,prompt:""},{icon:(0,l.k6)((()=>[(0,l.Lk)("img",{src:e.icon,width:"24",height:"24"},null,8,Ve)])),_:2},1032,["class","title","desc"])],8,Be)])),_:2},1032,["class"])))),128))])),_:1})])])])):((0,l.uX)(),(0,l.CE)("div",De,[(0,l.bF)(h,{ref_key:"scrollbarRef",ref:f},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(te.value,((e,a)=>((0,l.uX)(),(0,l.Wv)(ce,{key:a,text:e.text,"created-at":e.createdAt,id:e.id,like:e.like,unlike:e.unlike,feedback:e.feedback,owner:e.owner,urls:e.urls,error:e.error,status:e.status,"continue-number":e.continueNumber,loading:e.loading,"pre-conversation-id":0===a?void 0:e.preConversationId,onRegenerate:e=>ya(a),onDelete:e=>Ca(a),onLike:ua,onUnlike:da,onFeedback:pa,onContinue:e=>wa(a)},null,8,["text","created-at","id","like","unlike","feedback","owner","urls","error","status","continue-number","loading","pre-conversation-id","onRegenerate","onDelete","onContinue"])))),128)),te.value.length>0&&-1===J.value?((0,l.uX)(),(0,l.CE)("div",He,[(0,l.bF)(g,{"content-position":"center"},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)((0,o.R1)(I)("page.qa.main.divider")),1)])),_:1})])):(0,l.Q3)("",!0)])),_:1},512)]))]),(0,l.Lk)("div",Ne,[(0,l.Lk)("div",Ue,[(0,l.Lk)("div",Me,[(0,l.bF)((0,o.R1)(p.Vc),{placement:"top-start",width:790,trigger:"hover",ref_key:"popRef",ref:P,modelValue:e.popnor,"onUpdate:modelValue":a[1]||(a[1]=a=>e.popnor=a)},{reference:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(k.A),{type:"pk-normaldata",class:"w20 h20"})])),default:(0,l.k6)((()=>[(0,l.Lk)("h1",Oe,(0,n.v_)((0,o.R1)(I)("page.qa.main.footer.normalData")),1),(0,l.bF)(h,{class:"normal-data"},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(H.value,((e,a)=>((0,l.uX)(),(0,l.CE)("div",{class:"normal-data-item",key:"normal"+a},[(0,l.Lk)("div",{class:"normal-data-item-title",onClick:a=>re(e)},[(0,l.bF)(w.A,{content:e.content,placement:"top-start","show-arrow":!1},null,8,["content"])],8,Qe),(0,l.Lk)("div",je,[(0,l.Lk)("div",{class:"normal-data-operation-edit",onClick:a=>ve(e)},[(0,l.bF)((0,o.R1)(k.A),{type:"pk-editnormal",class:"w20 h20"})],8,Ye),(0,l.Lk)("div",{class:"normal-data-operation-delete",onClick:a=>na(e)},[(0,l.bF)((0,o.R1)(k.A),{type:"pk-deletenormal",class:"w20 h20"})],8,Je)])])))),128))])),_:1}),(0,l.Lk)("div",Pe,[(0,l.Lk)("a",{class:"normal-data-item-add",onClick:oa},[(0,l.bF)((0,o.R1)(k.A),{type:"pk-addplus"}),(0,l.Lk)("span",null,(0,n.v_)((0,o.R1)(I)("page.qa.main.footer.createNormalData")),1)])])])),_:1},8,["modelValue"])]),(0,l.Lk)("div",{class:"main-chat-footer-operation",onClick:Wa},[(0,l.bF)((0,o.R1)(k.A),{type:"pk-deletelogs",class:"iconsvg w20 h20"})]),(0,l.Lk)("div",$e,[(0,l.bF)(_,{class:"footer-font","popper-class":"dropDownStyle",trigger:"click",placement:"top"},{dropdown:(0,l.k6)((()=>[(0,l.bF)(b,null,{default:(0,l.k6)((()=>[(0,l.bF)(y,{class:(0,n.C4)({"is-active":18===Y.value}),onClick:a[2]||(a[2]=e=>Ka(18))},{default:(0,l.k6)((()=>[(0,l.eW)(" Maximum 18 ")])),_:1},8,["class"]),(0,l.bF)(y,{class:(0,n.C4)({"is-active":16===Y.value}),onClick:a[3]||(a[3]=e=>Ka(16))},{default:(0,l.k6)((()=>[(0,l.eW)(" Large 16 ")])),_:1},8,["class"]),(0,l.bF)(y,{class:(0,n.C4)({"is-active":14===Y.value}),onClick:a[4]||(a[4]=e=>Ka(14))},{default:(0,l.k6)((()=>[(0,l.eW)(" Default 14 ")])),_:1},8,["class"]),(0,l.bF)(y,{class:(0,n.C4)({"is-active":12===Y.value}),onClick:a[5]||(a[5]=e=>Ka(12))},{default:(0,l.k6)((()=>[(0,l.eW)(" Minimum 12 ")])),_:1},8,["class"])])),_:1})])),default:(0,l.k6)((()=>[(0,l.Lk)("span",Ge,[(0,l.bF)((0,o.R1)(k.A),{type:"pk-fontselect",class:"iconsvg w20 h20"})])])),_:1})]),(0,l.Lk)("div",{class:"main-chat-footer-operation hide",onClick:Xa},[(0,l.bF)((0,o.R1)(k.A),{type:"pk-downloadlogs",class:"iconsvg w20 h20"})]),(0,l.Lk)("div",{class:"main-chat-footer-operation hide",onClick:Ta},[(0,l.bF)((0,o.R1)(k.A),{type:"pk-sharelogs",class:"iconsvg w20 h20"})]),(0,l.Lk)("div",ze,[(0,l.eW)((0,n.v_)((0,o.R1)(I)("page.qa.main.footer.web"))+" ",1),(0,l.bF)(q,{modelValue:X.value,"onUpdate:modelValue":a[6]||(a[6]=e=>X.value=e)},null,8,["modelValue"])]),(0,l.Lk)("div",Ze,[(0,l.bF)(s,{class:"flex-text",disabled:-1===J.value||0===te.value.length,onClick:Sa},{default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(k.A),{class:"mr6",type:"pk-documentupload"}),(0,l.eW)(" "+(0,n.v_)((0,o.R1)(I)("page.qa.main.operation.newText")),1)])),_:1},8,["disabled"])])]),(0,l.Lk)("div",ea,[(0,l.bF)(t,{maxlength:W.value,ref_key:"inputRef",ref:G,modelValue:$.value,"onUpdate:modelValue":a[7]||(a[7]=e=>$.value=e),type:"textarea","input-style":"height: 3.375rem",disabled:"prompting"===z.value,placeholder:(0,o.R1)(I)("page.qa.main.footer.inputplaceholder",{limit:W.value}),autosize:{minRows:1,maxRows:10},onInput:xa,onPaste:Ra,onKeydown:La,onKeypress:(0,i.jR)(Fa,["enter"]),onFocus:_a,onBlur:qa},null,8,["maxlength","modelValue","disabled","placeholder"]),(0,l.Lk)("div",aa,["prompt"===z.value?((0,l.uX)(),(0,l.Wv)(s,{key:0,type:"primary",disabled:Z.value,onClick:ba},{icon:(0,l.k6)((()=>[Z.value?((0,l.uX)(),(0,l.Wv)((0,o.R1)(k.A),{key:0,type:"pk-prompt",class:"main-chat-footer-promptwh"})):((0,l.uX)(),(0,l.Wv)((0,o.R1)(k.A),{key:1,type:"pk-prompting",class:"main-chat-footer-promptwh"}))])),_:1},8,["disabled"])):"prompting"===z.value?((0,l.uX)(),(0,l.Wv)(s,{key:1,type:"primary",onClick:Aa},{icon:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(k.A),{type:"pk-stopre",class:"main-chat-footer-promptwh"})])),_:1})):(0,l.Q3)("",!0)])])])]))],512),(0,l.bF)(R,{modelValue:N.value,"onUpdate:modelValue":a[10]||(a[10]=e=>N.value=e),title:U.id?(0,o.R1)(I)("page.qa.main.footer.modifyNormalDataHint"):(0,o.R1)(I)("page.qa.main.footer.createNormalDataHint"),width:"600"},{footer:(0,l.k6)((()=>[(0,l.Lk)("div",ta,[(0,l.bF)(s,{onClick:a[9]||(a[9]=e=>N.value=!1)},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)((0,o.R1)(I)("page.qa.main.cancelButton")),1)])),_:1}),(0,l.bF)(s,{type:"primary",onClick:se},{default:(0,l.k6)((()=>[(0,l.eW)((0,n.v_)((0,o.R1)(I)("page.qa.main.confirmButton")),1)])),_:1})])])),default:(0,l.k6)((()=>[(0,l.bF)((0,o.R1)(m.US),{model:U,rules:le,ref_key:"normalForm",ref:M,class:"normalForm","label-width":"10"},{default:(0,l.k6)((()=>[(0,l.bF)(C,{label:"",prop:"content"},{default:(0,l.k6)((()=>[(0,l.bF)(t,{class:"normal",maxlength:"500",type:"textarea",modelValue:U.content,"onUpdate:modelValue":a[8]||(a[8]=e=>U.content=e),placeholder:(0,o.R1)(I)("page.qa.normalData.placeholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});const oa=(0,T.A)(na,[["__scopeId","data-v-7b909cff"]]);var ia=oa}}]);