"use strict";(self["webpackChunkSensepedia"]=self["webpackChunkSensepedia"]||[]).push([[856],{1075:function(e,a,l){l.d(a,{Ho:function(){return n},TF:function(){return d},WQ:function(){return u},YG:function(){return o},hc:function(){return i},n_:function(){return s}});var t=l(2324);const r="/api/v1";async function s(e){return(0,t.A)({url:r+"/system/role/list",method:"GET",params:{...e,pageNum:e.page,pageSize:e.perPage}})}async function o(){return(0,t.A)({url:r+"/system/role/all",method:"GET"})}async function n(e){return(0,t.A)({url:r+"/system/role/"+e,method:"GET"})}async function u(e){return(0,t.A)({url:r+"/system/role/add",method:"POST",data:e})}async function i(e){return(0,t.A)({url:r+"/system/role/edit",method:"PUT",data:e})}async function d(e){return(0,t.A)({url:r+"/system/role/"+e,method:"DELETE"})}},36981:function(e,a,l){l.d(a,{A:function(){return m}});var t=l(28694);const r={class:"main-content-screen"},s={class:"screen-header"},o={class:"header-search"},n={class:"screen-content",ref:"conentRef"},u={class:"content-data",style:{gap:"16px"}},i={class:"screen-footer"},d={class:"footer-pagination"};function p(e,a,l,p,g,c){const b=(0,t.g2)("el-skeleton-item"),m=(0,t.g2)("el-skeleton");return(0,t.uX)(),(0,t.CE)("div",r,[(0,t.Lk)("div",s,[(0,t.bF)(m,{animated:""},{template:(0,t.k6)((()=>[(0,t.Lk)("div",o,[(0,t.bF)(b,{variant:"text",style:{height:"28px"}}),(0,t.bF)(b,{variant:"text",style:{height:"28px"}}),(0,t.bF)(b,{variant:"text",style:{height:"28px"}}),(0,t.bF)(b,{variant:"text",style:{height:"28px"}})])])),_:1})]),(0,t.Lk)("div",n,[(0,t.bF)(m,{animated:""},{template:(0,t.k6)((()=>[(0,t.Lk)("div",u,[(0,t.bF)(b,{variant:"text",style:{height:"28px"}}),(0,t.bF)(b,{variant:"text",style:{height:"28px"}}),(0,t.bF)(b,{variant:"text",style:{height:"28px"}}),(0,t.bF)(b,{variant:"text",style:{height:"28px"}})])])),_:1})],512),(0,t.Lk)("div",i,[(0,t.bF)(m,{animated:""},{template:(0,t.k6)((()=>[(0,t.Lk)("div",d,[(0,t.bF)(b,{variant:"text",style:{height:"28px",width:"128px"}}),(0,t.bF)(b,{variant:"text",style:{height:"28px",width:"128px"}})])])),_:1})])])}var g=(0,t.pM)({name:"SkeleteTable",setup(e,a){}}),c=l(83940);const b=(0,c.A)(g,[["render",p],["__scopeId","data-v-60855484"]]);var m=b},92450:function(e,a,l){l.r(a),l.d(a,{default:function(){return q}});var t=l(28694),r=l(83487),s=l(38118),o=l(97913),n=l(74560),u=l(19477),i=l(12567),d=l(59531),p=l(36981),g=l(94102),c=l(35733),b=l(81329),m=l(95293),v=l(2324);const h="/api/v1";async function k(e){return(0,v.A)({url:h+"/system/user/list",method:"GET",params:{...e,pageNum:e.page,pageSize:e.perPage}})}async function f(e){return(0,v.A)({url:h+"/system/user/add",method:"POST",data:e})}async function y(e){return(0,v.A)({url:h+"/system/user",method:"PUT",data:e})}async function z(e){return(0,v.A)({url:h+"/system/user/"+e,method:"DELETE"})}var F=l(1075),R=l(32228),w=l(98836),_=l(74913);const x={class:"main"},V={class:"main-top"},I={class:"main-top-nav"},L={class:"main-top-batch"},N={class:"th-s-label"},A={class:"th-s-label"},T={class:"th-s-label"},E={class:"th-s-label"},C={class:"th-s"},W={class:"operations"},S={class:"dialog-form"},K={class:"dialog-form-title"},P={class:"dialog-form-item"},U={class:"dialog-form-title"},X={class:"dialog-form-item"},G={class:"dialog-form-title"},$={class:"dialog-form-item"},D={class:"dialog-footer"};var Z=(0,t.pM)({__name:"index",setup(e){const{t:a}=(0,R.s9)(),l=((0,w.rd)(),(0,_.Pj)()),v=((0,t.EW)((()=>l.state.user.currentUser)),(0,t.EW)((()=>1===l.state.user.currentUser.roleId))),h=(0,t.EW)((()=>l.state.global.pwdRange)),{STATES:Z,STATE_OPTIONS:B}=(0,c.A)(),H=[],q=(0,s.Kh)({reload:!0,loading:!1,list:[],pagination:{total:0,current:1,pageSize:10,sizeChange:()=>{},onChange:()=>{}}}),{pushQuery:O,queryParams:j}=(0,g.A)("/organize/system/user",(async(e,a)=>{q.loading=!0;const l=await k(e),{rows:t}=l,r=t||[];q.list=r.filter((e=>!!v.value||1!==e.roleId)),q.pagination={total:l.total||0,current:e.page,pageSize:e.perPage,sizeChange:async e=>{q.reload=!1,await ge({perPage:e,page:1}),setTimeout((()=>q.reload=!0),400)},onChange:e=>ge({page:e})},q.loading=!1})),Y=(0,s.KR)(!1),M=(0,s.KR)(!1),Q=(0,s.KR)({loginName:"",password:"123456",realName:"",phone:"",roleId:"",state:"",status:"",remark:"",reset:!0}),J={1:/^.{6,}$/,2:/^[a-zA-Z]{6,}$/,3:/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,4:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&(){}])[A-Za-z\d@#$!%*?&(){}]{8,}$/},ee={1:"Password can contain any characters, at least 6 characters long",2:"Password can only contain letters a-z and A-Z, at least 6 characters long",3:"Password must contain both letters and numbers, at least 6 characters long",4:"At least one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long"},ae=(e,a,l)=>{Q.value.userId&&Q.value.reset?a?J[h.value].test(a)?l():l(new Error(ee[h.value])):l(new Error("Please input the password")):l()},le=(0,s.Kh)({loginName:[{required:!0,trigger:"blur"}],password:[{validator:ae,trigger:"blur"}],roleId:[{required:!0,trigger:"blur"}],email:[{required:!1,trigger:"blur"},{type:"email",trigger:"change"}]}),te=(0,s.KR)([]),re=(0,t.EW)((()=>te.value.filter((e=>""!==e.value&&!(!v.value&&1===e.value))))),se={0:"success",1:"danger","-1":"info",2:"info"},oe=(0,s.KR)([]),ne=(0,t.EW)((()=>0===oe.value.length)),ue=(0,s.KR)(!1),ie=(0,s.KR)(null),de=(0,s.Kh)([{label:"Yes",value:!0},{label:"No",value:!1}]),pe=(0,s.Kh)({loginName:"",phone:"",roleId:"",status:"",createTime:""}),ge=async e=>{const a={...pe};O({...a,page:q.pagination.current,perPage:q.pagination.pageSize,...e,refresh:(0,b.pr)(new Date)})},ce=async()=>{pe.loginName="",pe.phone="",pe.roleId="",pe.status="",pe.createTime="",q.reload=!1,await ge({page:1}),setTimeout((()=>q.reload=!0),400)},be=e=>{oe.value=e},me=(e,a,l)=>(e.status,!0),ve=async()=>{if(0===oe.value.length)return void n.nk.error(a("page.organizes.docus.selectHint"));const e=oe.value.map((e=>e.userId)).join(",");u.s.confirm(a("page.organizes.user.deleteBatchHint"),a("page.organizes.docus.hint"),{confirmButtonText:a("page.organizes.docus.buttonSubmit"),cancelButtonText:a("page.organizes.docus.buttonCancel"),type:"warning"}).then((async()=>{ue.value=!0,await z(e),n.nk.success(a("page.organizes.docus.deleteSuccess")),ue.value=!1,O({refresh:(0,b.pr)(new Date)})})).catch((()=>{ue.value=!1}))},he=(e,a,l)=>{console.error(e,a,l),M.value=!0,Q.value={...e,status:Number(e.status),reset:!1}},ke=async()=>{M.value=!0,Q.value={userId:0,loginName:"",password:"123456",realName:"",phone:"",email:"",roleId:"",roleName:"",status:0,remark:"",reset:!0}},fe=async(e,a,l)=>{await ze(e,a,l)},ye=async()=>{Y.value=!0,ie.value&&ie.value.validate().then((async()=>{if(Q.value.userId){if(Q.value.reset){if(!J[h.value].test(Q.value.password))return n.nk.error(ee[h.value]),void(Y.value=!1);Q.value.password=(0,m.w)(Q.value.password)}try{await y(Q.value),n.nk.success(a("page.organizes.knows.modifySuccess"))}catch(e){n.nk.error("Form valid "+e)}}else try{await f(Q.value),n.nk.success(a("page.organizes.knows.createSuccess"))}catch(e){n.nk.error(e)}M.value=!1,setTimeout((()=>ce()),400)})).catch((()=>{})),Y.value=!1},ze=async(e,l,t)=>{q.list[l]["delLoading"]=!0;try{u.s.confirm(a("page.organizes.user.deleteHintDetail"),a("page.organizes.docus.hint"),{confirmButtonText:a("page.organizes.docus.buttonSubmit"),cancelButtonText:a("page.organizes.docus.buttonCancel"),type:"warning"}).then((async()=>{await z(e.userId+""),n.nk.success(a("page.organizes.knows.deleteSuccess")),q.list.length>1?q.list.splice(l,1):O({refresh:(0,b.pr)(new Date)})})).catch((()=>{}))}catch(r){n.nk.warning(r.msg||r||"error")}q.list[l]["delLoading"]=!1},Fe=async()=>{const e=await(0,F.YG)();e&&e.data&&(te.value=e.data.map((e=>(H[e.roleId]=e.roleName,{label:e.roleName,value:e.roleId}))),q.list=q.list.filter((e=>!!v.value||1!==e.roleId))),te.value.unshift({label:"ALL",value:""})},Re=e=>{const a=Z.find((a=>a.value===~~e.status));return a?a.label:(console.log(Z),Z[1]?.label)};return(0,t.sV)((async()=>{l.commit("global/setLefter",!0),window.document.documentElement.style.setProperty("--el-popper-width","fit-content"),await Fe()})),(0,t.hi)((()=>{l.commit("global/setLefter",!1)})),(e,l)=>{const n=(0,t.g2)("el-button"),u=(0,t.g2)("el-input"),g=(0,t.g2)("el-col"),c=(0,t.g2)("el-option"),b=(0,t.g2)("el-select"),m=(0,t.g2)("el-row"),v=(0,t.g2)("el-table-column"),h=(0,t.g2)("el-tag"),k=(0,t.g2)("el-form-item"),f=(0,t.g2)("el-radio"),y=(0,t.g2)("el-radio-group"),z=(0,t.g2)("el-form"),F=(0,t.g2)("el-dialog"),R=(0,t.gN)("loading");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.Lk)("div",x,[(0,t.Lk)("div",V,[(0,t.Lk)("div",I,(0,r.v_)((0,s.R1)(a)("page.organizes.user.topNav")),1),(0,t.Lk)("div",L,[(0,t.bF)(n,{type:"primary",onClick:ke},{icon:(0,t.k6)((()=>[(0,t.bF)((0,s.R1)(i.A),{type:"pk-plus"})])),default:(0,t.k6)((()=>[(0,t.eW)(" "+(0,r.v_)((0,s.R1)(a)("page.organizes.user.add")),1)])),_:1}),(0,t.bo)(((0,t.uX)(),(0,t.Wv)(n,{disabled:ne.value,onClick:ve},{icon:(0,t.k6)((()=>[(0,t.bF)((0,s.R1)(i.A),{type:"pk-batchdelete"})])),default:(0,t.k6)((()=>[(0,t.eW)(" "+(0,r.v_)((0,s.R1)(a)("page.organizes.user.del")),1)])),_:1},8,["disabled"])),[[R,ue.value]])])]),q.reload?((0,t.uX)(),(0,t.Wv)(d.A,{key:0,"row-key":"userId",data:q.list,loading:q.loading,pagination:q.pagination,onHandleSelection:be},{header:(0,t.k6)((()=>[(0,t.bF)(m,{onKeydown:(0,o.jR)(ge,["enter"])},{default:(0,t.k6)((()=>[(0,t.bF)(g,{span:5},{default:(0,t.k6)((()=>[(0,t.Lk)("span",N,(0,r.v_)((0,s.R1)(a)("page.organizes.user.th-s-login-name")),1),(0,t.bF)(u,{class:"th-s-input",modelValue:pe.loginName,"onUpdate:modelValue":l[0]||(l[0]=e=>pe.loginName=e),placeholder:(0,s.R1)(a)("page.organizes.user.th-s-login-name-holder")},null,8,["modelValue","placeholder"])])),_:1}),(0,t.bF)(g,{span:5},{default:(0,t.k6)((()=>[(0,t.Lk)("span",A,(0,r.v_)((0,s.R1)(a)("page.organizes.user.th-s-phone-number")),1),(0,t.bF)(u,{class:"th-s-input",modelValue:pe.phone,"onUpdate:modelValue":l[1]||(l[1]=e=>pe.phone=e),placeholder:(0,s.R1)(a)("page.organizes.user.th-s-phone-number-holder")},null,8,["modelValue","placeholder"])])),_:1}),(0,t.bF)(g,{span:5},{default:(0,t.k6)((()=>[(0,t.Lk)("span",T,(0,r.v_)((0,s.R1)(a)("page.organizes.user.th-s-role")),1),(0,t.bF)(b,{class:"th-s-input",modelValue:pe.roleId,"onUpdate:modelValue":l[2]||(l[2]=e=>pe.roleId=e)},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(te.value,(e=>((0,t.uX)(),(0,t.Wv)(c,{key:"role"+e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(g,{span:5},{default:(0,t.k6)((()=>[(0,t.Lk)("span",E,(0,r.v_)((0,s.R1)(a)("page.organizes.user.th-s-status")),1),(0,t.bF)(b,{class:"th-s-input",modelValue:pe.status,"onUpdate:modelValue":l[3]||(l[3]=e=>pe.status=e)},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)((0,s.R1)(Z),(e=>((0,t.uX)(),(0,t.Wv)(c,{key:"status"+e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(g,{span:4,class:"text-align-right"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",C,[(0,t.bF)(n,{class:"th-s-button color-huge border-huge",onClick:ce},{icon:(0,t.k6)((()=>[(0,t.bF)((0,s.R1)(i.A),{type:"pk-refresh"})])),default:(0,t.k6)((()=>[(0,t.eW)(" "+(0,r.v_)((0,s.R1)(a)("page.organizes.user.reset")),1)])),_:1}),(0,t.bF)(n,{type:"primary",class:"th-s-button",onClick:ge},{icon:(0,t.k6)((()=>[(0,t.bF)((0,s.R1)(i.A),{type:"pk-search"})])),default:(0,t.k6)((()=>[(0,t.eW)(" "+(0,r.v_)((0,s.R1)(a)("page.organizes.user.search")),1)])),_:1})])])),_:1})])),_:1})])),default:(0,t.k6)((()=>[(0,t.bF)(v,{type:"selection",width:"46",selectable:me}),(0,t.bF)(v,{label:(0,s.R1)(a)("page.organizes.user.tb-label-id"),prop:"userId",width:"80"},null,8,["label"]),(0,t.bF)(v,{label:(0,s.R1)(a)("page.organizes.user.tb-label-username"),prop:"loginName",width:"200"},null,8,["label"]),(0,t.bF)(v,{label:(0,s.R1)(a)("page.organizes.user.tb-label-nickname"),prop:"realName",width:"200"},null,8,["label"]),(0,t.bF)(v,{label:(0,s.R1)(a)("page.organizes.user.tb-label-tel"),prop:"phone",width:"200"},null,8,["label"]),(0,t.bF)(v,{label:(0,s.R1)(a)("page.organizes.user.tb-label-roleName"),prop:"roleName",width:"100"},null,8,["label"]),(0,t.bF)(v,{label:(0,s.R1)(a)("page.organizes.user.tb-label-state"),prop:"status",width:"100"},{default:(0,t.k6)((({row:e})=>[(0,t.bF)(h,{type:se[e.status]},{default:(0,t.k6)((()=>[(0,t.eW)((0,r.v_)(Re(e)),1)])),_:2},1032,["type"])])),_:1},8,["label"]),(0,t.bF)(v,{label:(0,s.R1)(a)("page.organizes.user.tb-label-createTime"),prop:"createTime",width:"200"},null,8,["label"]),(0,t.bF)(v,{fixed:"right",label:(0,s.R1)(a)("page.organizes.user.tb-label-operate"),"min-width":"100"},{default:(0,t.k6)((({row:e,$index:l})=>[(0,t.Lk)("div",W,[(0,t.bF)(n,{type:"primary",text:"",onClick:a=>he(e,l,a)},{default:(0,t.k6)((()=>[(0,t.eW)((0,r.v_)((0,s.R1)(a)("page.organizes.user.edit")),1)])),_:2},1032,["onClick"]),(0,t.bF)(n,{type:"info",text:"",onClick:a=>fe(e,l,a)},{default:(0,t.k6)((()=>[(0,t.eW)((0,r.v_)((0,s.R1)(a)("page.organizes.user.delete")),1)])),_:2},1032,["onClick"])])])),_:1},8,["label"])])),_:1},8,["data","loading","pagination"])):((0,t.uX)(),(0,t.Wv)(p.A,{key:1}))]),(0,t.bF)(F,{modelValue:M.value,"onUpdate:modelValue":l[14]||(l[14]=e=>M.value=e),title:(0,s.R1)(a)("page.organizes.user.dialog-title"),"close-on-click":!1,"close-on-press-escape":!1},{footer:(0,t.k6)((()=>[(0,t.Lk)("div",D,[(0,t.bF)(n,{onClick:l[13]||(l[13]=e=>M.value=!1)},{default:(0,t.k6)((()=>[(0,t.eW)((0,r.v_)((0,s.R1)(a)("page.organizes.user.cancel")),1)])),_:1}),(0,t.bo)(((0,t.uX)(),(0,t.Wv)(n,{type:"primary",onClick:ye},{default:(0,t.k6)((()=>[(0,t.eW)((0,r.v_)((0,s.R1)(a)("page.organizes.user.submit")),1)])),_:1})),[[R,Y.value]])])])),default:(0,t.k6)((()=>[(0,t.bF)(z,{model:Q.value,rules:le,ref_key:"userFormRef",ref:ie,"label-width":100},{default:(0,t.k6)((()=>[(0,t.Lk)("div",S,[(0,t.Lk)("div",K,(0,r.v_)((0,s.R1)(a)("page.organizes.user.dialog-label-id")),1),(0,t.Lk)("div",P,[(0,t.bF)(k,{label:(0,s.R1)(a)("page.organizes.user.dialog-label-username"),prop:"loginName"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{disabled:Q.value.userId>0,modelValue:Q.value.loginName,"onUpdate:modelValue":l[4]||(l[4]=e=>Q.value.loginName=e),placeholder:(0,s.R1)(a)("page.organizes.user.dialog-placeholder-prefix",{holder:(0,s.R1)(a)("page.organizes.user.dialog-label-username")})},null,8,["disabled","modelValue","placeholder"])])),_:1},8,["label"]),(0,t.bo)((0,t.bF)(k,{label:(0,s.R1)(a)("page.organizes.user.dialog-label-reset"),"label-width":"120",prop:"reset"},{default:(0,t.k6)((()=>[(0,t.bF)(y,{modelValue:Q.value.reset,"onUpdate:modelValue":l[5]||(l[5]=e=>Q.value.reset=e)},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(de,(e=>((0,t.uX)(),(0,t.Wv)(f,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label"]),[[o.aG,Q.value.userId>0]]),(0,t.bo)((0,t.bF)(k,{label:(0,s.R1)(a)("page.organizes.user.dialog-label-password"),prop:"password"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{maxlength:"20",disabled:0===Q.value.userId,type:"password",modelValue:Q.value.password,"onUpdate:modelValue":l[6]||(l[6]=e=>Q.value.password=e),placeholder:(0,s.R1)(a)("page.organizes.user.dialog-placeholder-prefix",{holder:(0,s.R1)(a)("page.organizes.user.dialog-label-password")})},null,8,["disabled","modelValue","placeholder"])])),_:1},8,["label"]),[[o.aG,Q.value.reset]]),(0,t.bF)(k,{label:(0,s.R1)(a)("page.organizes.user.dialog-label-nickname"),prop:"realName"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{maxlength:"30",modelValue:Q.value.realName,"onUpdate:modelValue":l[7]||(l[7]=e=>Q.value.realName=e),placeholder:(0,s.R1)(a)("page.organizes.user.dialog-placeholder-prefix",{holder:(0,s.R1)(a)("page.organizes.user.dialog-label-nickname")})},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,t.bF)(k,{label:(0,s.R1)(a)("page.organizes.user.dialog-label-tel"),prop:"phone"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{max:11,maxlength:"11",modelValue:Q.value.phone,"onUpdate:modelValue":l[8]||(l[8]=e=>Q.value.phone=e),placeholder:(0,s.R1)(a)("page.organizes.user.dialog-placeholder-prefix",{holder:(0,s.R1)(a)("page.organizes.user.dialog-label-tel")})},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,t.bF)(k,{label:(0,s.R1)(a)("page.organizes.user.dialog-label-email"),prop:"email"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{max:255,maxlength:"255",modelValue:Q.value.email,"onUpdate:modelValue":l[9]||(l[9]=e=>Q.value.email=e),placeholder:(0,s.R1)(a)("page.organizes.user.dialog-placeholder-prefix",{holder:(0,s.R1)(a)("page.organizes.user.dialog-label-email")})},null,8,["modelValue","placeholder"])])),_:1},8,["label"])]),(0,t.Lk)("div",U,(0,r.v_)((0,s.R1)(a)("page.organizes.user.dialog-label-roleTitle")),1),(0,t.Lk)("div",X,[(0,t.bF)(k,{label:(0,s.R1)(a)("page.organizes.user.dialog-label-roleName"),prop:"roleId"},{default:(0,t.k6)((()=>[Q.value.roleName?((0,t.uX)(),(0,t.CE)(t.FK,{key:0},[(0,t.eW)((0,r.v_)(Q.value.roleName),1)],64)):((0,t.uX)(),(0,t.Wv)(b,{key:1,disabled:Q.value.userId,modelValue:Q.value.roleId,"onUpdate:modelValue":l[10]||(l[10]=e=>Q.value.roleId=e),placeholder:"Please Select"},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(re.value,(e=>((0,t.uX)(),(0,t.Wv)(c,{key:"filter"+e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["disabled","modelValue"]))])),_:1},8,["label"]),(0,t.bF)(k,{label:(0,s.R1)(a)("page.organizes.user.dialog-label-state"),prop:"status"},{default:(0,t.k6)((()=>[(0,t.bF)(y,{modelValue:Q.value.status,"onUpdate:modelValue":l[11]||(l[11]=e=>Q.value.status=e)},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)((0,s.R1)(B),(e=>((0,t.uX)(),(0,t.Wv)(f,{key:"options"+e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label"])]),(0,t.Lk)("div",G,(0,r.v_)((0,s.R1)(a)("page.organizes.user.dialog-label-otherTitle")),1),(0,t.Lk)("div",$,[(0,t.bF)(k,{label:(0,s.R1)(a)("page.organizes.user.dialog-label-remarks"),prop:"remarks"},{default:(0,t.k6)((()=>[(0,t.bF)(u,{modelValue:Q.value.remark,"onUpdate:modelValue":l[12]||(l[12]=e=>Q.value.remark=e),placeholder:(0,s.R1)(a)("page.organizes.user.dialog-placeholder-prefix",{holder:(0,s.R1)(a)("page.organizes.user.dialog-label-remarks")})},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])])])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])],64)}}}),B=l(83940);const H=(0,B.A)(Z,[["__scopeId","data-v-559bc4ce"]]);var q=H}}]);