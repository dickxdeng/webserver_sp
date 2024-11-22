"use strict";(self["webpackChunkSensepedia"]=self["webpackChunkSensepedia"]||[]).push([[884],{52379:function(e,r,a){a.d(r,{L:function(){return n}});a(81619);function n(e){return new Promise((function(r,a){try{var n=document.createElement("textarea");n.setAttribute("readonly","readonly"),n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy")&&document.execCommand("copy"),document.body.removeChild(n),r(e)}catch(t){a(t)}}))}},89884:function(e,r,a){a.r(r),a.d(r,{default:function(){return I}});var n=a(28724),t=a(30882),o=a(79266),l=(a(15800),a(91234),a(77111),a(14898),a(29306),a(27015),a(90426),a(47715),a(28694)),u=a(38118),s=a(83487),i=a(74560),c=a(19477),p=a(95293),d=a(2324),f="/api/v1";function m(e){return v.apply(this,arguments)}function v(){return v=(0,o.A)((0,t.A)().mark((function e(r){return(0,t.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.A)({url:f+"/system/user",method:"PUT",data:r}));case 1:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function g(e){return k.apply(this,arguments)}function k(){return k=(0,o.A)((0,t.A)().mark((function e(r){return(0,t.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.A)({url:f+"/system/user/resetPwd",method:"PUT",data:r}));case 1:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function h(){return b.apply(this,arguments)}function b(){return b=(0,o.A)((0,t.A)().mark((function e(){return(0,t.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.A)({url:f+"/system/user/resetAk",method:"POST"}));case 1:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return y=(0,o.A)((0,t.A)().mark((function e(r){return(0,t.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.A)({url:f+"/system/user/avatar",method:"POST",headers:{"Content-Type":"multipart/form-data"},data:r}));case 1:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}var x=a(52379),_=a(32228),A=a(74913),z=a(98836),R=function(e){return(0,l.Qi)("data-v-c305308a"),e=e(),(0,l.jt)(),e},F={class:"main"},V={class:"main-info"},L=R((function(){return(0,l.Lk)("div",{class:"main-info-title"},null,-1)})),P={class:"main-info-avatar"},W={class:"avatar"},C=["src"],E={class:"form"},N={class:"text-align"},T={class:"main-info-content"},U={class:"form"},q={key:0,class:"hint"},K={key:0,class:"hint"},S={class:"text-align"},X={class:"dialog-body"},Z={class:"ak-sk-container"},$={class:"ak-sk-container"},B={class:"dialog-footer"},j="/images/default-avatar.png",Q=(0,l.pM)({__name:"index",setup:function(e){var r="/api/v1",a=(0,_.s9)(),d=a.t,f=(0,A.Pj)(),v=((0,z.lq)(),(0,z.rd)()),k=(0,l.EW)((function(){return f.state.user.currentUser})),b=(0,l.EW)((function(){return f.state.global.pwdRange})),y=(0,u.KR)(!1),R=(0,u.KR)("info"),Q=(0,u.KR)(""),D=(0,u.KR)(null),H=(0,u.Kh)({loginName:k.value.name,realName:k.value.realName,phone:k.value.phone,email:k.value.email,createTime:k.value.createTime,ak:k.value.ak,sk:""}),I=(0,u.KR)(null),M=(0,u.Kh)({realName:[{required:!0,trigger:"blur"},{max:100,trigger:"blur"}]}),O={1:/^.{6,}$/,2:/^[a-zA-Z]{6,}$/,3:/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,4:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&(){}])[A-Za-z\d@#$!%*?&(){}]{8,}$/},G={1:"Password can contain any characters, and at least 6 characters long",2:"Password can only contain letters a-z and A-Z, and at least 6 characters long",3:"Password must contain both letters and numbers, and at least 6 characters long",4:"At least one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long"},J=function(e,r,a){r?O[b.value].test(r)?a():a(new Error(G[b.value])):a(new Error("Please input the password"))},Y=function(e,r,a){r!==ee.password?a(new Error("Password and confirm password do not match")):a()},ee=(0,u.Kh)({oldPassword:"",password:"",repassword:""}),re=(0,u.KR)(null),ae=(0,u.KR)(!1),ne=(0,l.EW)((function(){return!O[b.value].test(ee.password)||ee.password!==ee.repassword})),te=(0,u.Kh)({oldPassword:[{required:!0,trigger:"blur"},{min:6,trigger:"blur"}],password:[{validator:J,trigger:"blur"},{required:!0,trigger:"blur"}],repassword:[{validator:Y,trigger:"blur"},{required:!0,trigger:"blur"}]}),oe=(0,u.KR)(!1),le=function(e){var r=e.size/1024/1024<2;return!!r||(i.nk.error("exceed 2MB"),!1)},ue=function(){var e=(0,o.A)((0,t.A)().mark((function e(a){var n,o,l;return(0,t.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=new FormData,o.append("avatarfile",a.file),e.next=4,w(o);case 4:l=e.sent,200===l.code?(Q.value="".concat(r).concat(l.imgUrl),ee.avatar=l.imgUrl):i.nk.error(l.msg),null===(n=D.value)||void 0===n||n.clearFiles();case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),se=function(){v.push({path:"/home"})},ie=function(e,r,a){console.log(e,"-",r,"-",a,"+",ae.value),ae.value=e},ce=function(){var e=(0,o.A)((0,t.A)().mark((function e(){var r;return(0,t.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:r=e.sent,200===r.code?(H.ak=r.data.ak,H.sk=r.data.sk,i.nk.success(d("page.organizes.profile.applySuccess")),y.value=!0):i.nk.error(d("page.organizes.profile.applyError")),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=(0,o.A)((0,t.A)().mark((function e(){var r;return(0,t.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{r=d("page.organizes.profile.resetHint",{ak:H.ak}),c.s.confirm(r,d("page.qa.main.deleteHint"),{confirmButtonText:d("page.qa.main.confirmButton"),cancelButtonText:d("page.qa.main.cancelButton"),type:"warning"}).then((0,o.A)((0,t.A)().mark((function e(){var r;return(0,t.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:r=e.sent,200===r.code?(H.ak=r.data.ak,H.sk=r.data.sk,i.nk.success(d("page.organizes.profile.resetSuccess")),y.value=!0):i.nk.error(d("page.organizes.profile.resetError"));case 4:case"end":return e.stop()}}),e)})))).catch((function(){}))}catch(a){console.error(a)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=(0,o.A)((0,t.A)().mark((function e(){return(0,t.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,x.L)(H.ak||"");case 3:i.nk.success(d("page.qa.main.copySuccess")),e.next=10;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0),i.nk.error(d("page.qa.main.copyError"));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=(0,o.A)((0,t.A)().mark((function e(){return(0,t.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,x.L)(H.ak+" "+H.sk);case 3:i.nk.success(d("page.qa.main.copySuccess")),e.next=10;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0),i.nk.error(d("page.qa.main.copyError"));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=(0,o.A)((0,t.A)().mark((function e(){var r,a,o;return(0,t.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.value.validate();case 3:if(r=e.sent,r){e.next=6;break}return e.abrupt("return");case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return");case 11:return oe.value=!0,a=(0,n.A)({},H),a.userId=k.value.id,k.value.phone===H.phone&&delete a.phone,k.value.email===H.email&&delete a.email,e.prev=16,e.next=19,m(a);case 19:if(o=e.sent,200!==~~o.code){e.next=26;break}return i.nk.success(d("page.organizes.profile.update-success")),e.next=24,f.commit("user/saveUser",H);case 24:e.next=27;break;case 26:i.nk.error(d("page.organizes.profile.update-error"));case 27:e.next=32;break;case 29:e.prev=29,e.t1=e["catch"](16),i.nk.error(d("page.organizes.profile.update-error"));case 32:oe.value=!1;case 33:case"end":return e.stop()}}),e,null,[[0,8],[16,29]])})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=(0,o.A)((0,t.A)().mark((function e(){var r,a,n;return(0,t.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,null===(r=re.value)||void 0===r?void 0:r.validate();case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt("return");case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return");case 11:if(ee.password===ee.repassword){e.next=14;break}return i.nk.error(d("page.organizes.profile.repasswordError")),e.abrupt("return");case 14:return oe.value=!0,e.prev=15,e.next=18,g({oldPassword:(0,p.w)(ee.oldPassword),password:(0,p.w)(ee.password)});case 18:if(n=e.sent,200!==n.code){e.next=26;break}return i.nk.success(d("page.organizes.profile.update-success")),e.next=23,f.dispatch("user/logout");case 23:v.push({path:"/login"}),e.next=27;break;case 26:i.nk.error(n.message);case 27:e.next=32;break;case 29:e.prev=29,e.t1=e["catch"](15),i.nk.error(d("page.organizes.profile.update-error"));case 32:return e.prev=32,oe.value=!1,e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[0,8],[15,29,32,35]])})));return function(){return e.apply(this,arguments)}}(),ge=(0,l.EW)((function(){return v.currentRoute.value}));return ge.value.path.includes("profile")?R.value="info":R.value="pwd",(0,l.nT)((function(){v.currentRoute.value.path.includes("profile")?R.value="info":R.value="pwd"})),(0,l.sV)((function(){H.loginName=k.value.name,H.realName=k.value.realName,H.phone=k.value.phone,H.email=k.value.email,H.createTime=k.value.createTime,Q.value=k.value.avatar?"".concat(r).concat(k.value.avatar):j})),function(e,r){var a=(0,l.g2)("el-button"),n=(0,l.g2)("el-upload"),t=(0,l.g2)("el-form-item"),o=(0,l.g2)("el-input"),i=(0,l.g2)("el-form"),c=(0,l.g2)("el-tab-pane"),p=(0,l.g2)("el-tabs"),f=(0,l.g2)("el-alert"),m=(0,l.g2)("el-dialog"),v=(0,l.gN)("loading");return(0,l.uX)(),(0,l.CE)("div",F,[(0,l.Lk)("div",V,[L,(0,l.bF)(p,{modelValue:R.value,"onUpdate:modelValue":r[6]||(r[6]=function(e){return R.value=e}),class:"main-info-tabs",type:"border-card"},{default:(0,l.k6)((function(){return[(0,l.bF)(c,{label:(0,u.R1)(d)("page.organizes.profile.infoNav"),name:"info"},{default:(0,l.k6)((function(){return[(0,l.Lk)("div",P,[(0,l.Lk)("div",W,[(0,l.Lk)("img",{src:Q.value,alt:"avatar",width:"74",height:"74"},null,8,C)]),(0,l.bF)(n,{ref_key:"uploadRef",ref:D,"show-file-list":!1,accept:".png,.jpg,.jpeg","before-upload":le,"http-request":ue,limit:1},{default:(0,l.k6)((function(){return[(0,l.bF)(a,{type:"primary",text:""},{default:(0,l.k6)((function(){return[(0,l.eW)((0,s.v_)((0,u.R1)(d)("page.organizes.profile.avatar")),1)]})),_:1})]})),_:1},8,["accept"])]),(0,l.bF)(i,{ref_key:"infoFormRef",ref:I,class:"main-info-login",model:H,rules:M,"label-width":"100"},{default:(0,l.k6)((function(){return[(0,l.Lk)("div",E,[(0,l.bF)(t,{label:(0,u.R1)(d)("page.organizes.profile.form-login-name"),prop:"loginName"},{default:(0,l.k6)((function(){return[(0,l.eW)((0,s.v_)(k.value.name),1)]})),_:1},8,["label"]),(0,l.bF)(t,{label:(0,u.R1)(d)("page.organizes.profile.form-roleName"),prop:"roleName"},{default:(0,l.k6)((function(){return[(0,l.eW)((0,s.v_)(k.value.roleName),1)]})),_:1},8,["label"]),(0,l.bF)(t,{label:(0,u.R1)(d)("page.organizes.profile.form-real-name"),prop:"realName"},{default:(0,l.k6)((function(){return[(0,l.bF)(o,{max:100,maxlength:"100",modelValue:H.realName,"onUpdate:modelValue":r[0]||(r[0]=function(e){return H.realName=e}),placeholder:(0,u.R1)(d)("page.organizes.profile.form-real-name-holder")},null,8,["modelValue","placeholder"])]})),_:1},8,["label"]),(0,l.bF)(t,{label:(0,u.R1)(d)("page.organizes.profile.form-phone"),prop:"phone"},{default:(0,l.k6)((function(){return[(0,l.bF)(o,{max:11,maxlength:"11",modelValue:H.phone,"onUpdate:modelValue":r[1]||(r[1]=function(e){return H.phone=e}),placeholder:(0,u.R1)(d)("page.organizes.profile.form-phone-holder")},null,8,["modelValue","placeholder"])]})),_:1},8,["label"]),(0,l.bF)(t,{label:(0,u.R1)(d)("page.organizes.profile.form-email"),prop:"email"},{default:(0,l.k6)((function(){return[(0,l.bF)(o,{max:255,maxlength:"255",modelValue:H.email,"onUpdate:modelValue":r[2]||(r[2]=function(e){return H.email=e}),placeholder:(0,u.R1)(d)("page.organizes.profile.form-email-holder")},null,8,["modelValue","placeholder"])]})),_:1},8,["label"]),(0,l.bF)(t,{label:(0,u.R1)(d)("page.organizes.profile.form-create-time"),prop:"createTime"},{default:(0,l.k6)((function(){return[(0,l.eW)((0,s.v_)(H.createTime),1)]})),_:1},8,["label"]),(0,l.bF)(t,{label:(0,u.R1)(d)("page.organizes.profile.form-ak-sk"),prop:"akSk"},{default:(0,l.k6)((function(){return[(0,l.Lk)("span",null,(0,s.v_)(H.ak),1),void 0==H.ak?((0,l.uX)(),(0,l.Wv)(a,{key:0,type:"primary",text:"",onClick:ce},{default:(0,l.k6)((function(){return[(0,l.eW)((0,s.v_)((0,u.R1)(d)("page.organizes.profile.applyAkSk")),1)]})),_:1})):((0,l.uX)(),(0,l.CE)(l.FK,{key:1},[(0,l.bF)(a,{type:"primary",text:"",onClick:de},{default:(0,l.k6)((function(){return[(0,l.eW)((0,s.v_)((0,u.R1)(d)("page.organizes.profile.copy")),1)]})),_:1}),(0,l.bF)(a,{type:"primary",text:"",onClick:pe},{default:(0,l.k6)((function(){return[(0,l.eW)((0,s.v_)((0,u.R1)(d)("page.organizes.profile.resetAkSk")),1)]})),_:1})],64))]})),_:1},8,["label"]),(0,l.bF)(t,null,{default:(0,l.k6)((function(){return[(0,l.Lk)("div",N,[(0,l.bF)(a,{type:"info",onClick:se},{default:(0,l.k6)((function(){return[(0,l.eW)((0,s.v_)((0,u.R1)(d)("page.organizes.profile.cancel")),1)]})),_:1}),(0,l.bo)(((0,l.uX)(),(0,l.Wv)(a,{type:"primary",onClick:me},{default:(0,l.k6)((function(){return[(0,l.eW)((0,s.v_)((0,u.R1)(d)("page.organizes.profile.save")),1)]})),_:1})),[[v,oe.value]])])]})),_:1})])]})),_:1},8,["model","rules"])]})),_:1},8,["label"]),(0,l.bF)(c,{label:(0,u.R1)(d)("page.organizes.profile.modifyNav"),name:"pwd"},{default:(0,l.k6)((function(){return[(0,l.Lk)("div",T,[(0,l.bF)(i,{model:ee,rules:te,ref_key:"formRef",ref:re,"label-width":"100px",onValidate:ie},{default:(0,l.k6)((function(){return[(0,l.Lk)("div",U,[(0,l.bF)(t,{label:(0,u.R1)(d)("page.organizes.profile.oldPassword"),prop:"oldPassword"},{default:(0,l.k6)((function(){return[(0,l.bF)(o,{min:6,type:"password",modelValue:ee.oldPassword,"onUpdate:modelValue":r[3]||(r[3]=function(e){return ee.oldPassword=e}),placeholder:(0,u.R1)(d)("page.organizes.profile.oldPassword-holder")},null,8,["modelValue","placeholder"])]})),_:1},8,["label"]),(0,l.bF)(t,{label:(0,u.R1)(d)("page.organizes.profile.password"),prop:"password"},{default:(0,l.k6)((function(){return[(0,l.bF)(o,{min:6,maxlength:"20",type:"password",modelValue:ee.password,"onUpdate:modelValue":r[4]||(r[4]=function(e){return ee.password=e}),placeholder:(0,u.R1)(d)("page.organizes.profile.password-holder")},null,8,["modelValue","placeholder"]),ee.password?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",q,(0,s.v_)(G[b.value]),1))]})),_:1},8,["label"]),(0,l.bF)(t,{label:(0,u.R1)(d)("page.organizes.profile.repassword"),prop:"repassword"},{default:(0,l.k6)((function(){return[(0,l.bF)(o,{min:6,maxlength:"20",type:"password",modelValue:ee.repassword,"onUpdate:modelValue":r[5]||(r[5]=function(e){return ee.repassword=e}),placeholder:(0,u.R1)(d)("page.organizes.profile.repassword-holder")},null,8,["modelValue","placeholder"]),ee.repassword?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",K,(0,s.v_)(G[b.value]),1))]})),_:1},8,["label"]),(0,l.bF)(t,null,{default:(0,l.k6)((function(){return[(0,l.Lk)("div",S,[(0,l.bF)(a,{type:"info",onClick:se},{default:(0,l.k6)((function(){return[(0,l.eW)((0,s.v_)((0,u.R1)(d)("page.organizes.profile.cancel")),1)]})),_:1}),(0,l.bo)(((0,l.uX)(),(0,l.Wv)(a,{type:"primary",disabled:ne.value,onClick:ve},{default:(0,l.k6)((function(){return[(0,l.eW)((0,s.v_)((0,u.R1)(d)("page.organizes.profile.save")),1)]})),_:1},8,["disabled"])),[[v,oe.value]])])]})),_:1})])]})),_:1},8,["model","rules"])])]})),_:1},8,["label"])]})),_:1},8,["modelValue"])]),(0,l.bF)(m,{modelValue:y.value,"onUpdate:modelValue":r[8]||(r[8]=function(e){return y.value=e})},{title:(0,l.k6)((function(){return[(0,l.eW)((0,s.v_)((0,u.R1)(d)("page.organizes.profile.akDialogTitle")),1)]})),footer:(0,l.k6)((function(){return[(0,l.Lk)("div",B,[(0,l.bF)(a,{onClick:fe},{default:(0,l.k6)((function(){return[(0,l.eW)((0,s.v_)((0,u.R1)(d)("page.organizes.profile.copy")),1)]})),_:1}),(0,l.bF)(a,{type:"primary",onClick:r[7]||(r[7]=function(e){return y.value=!1})},{default:(0,l.k6)((function(){return[(0,l.eW)((0,s.v_)((0,u.R1)(d)("page.organizes.profile.close")),1)]})),_:1})])]})),default:(0,l.k6)((function(){return[(0,l.Lk)("div",X,[(0,l.bF)(f,{type:"warning",title:(0,u.R1)(d)("page.organizes.profile.hint"),"show-icon":""},null,8,["title"]),(0,l.Lk)("div",Z,[(0,l.Lk)("span",null,(0,s.v_)((0,u.R1)(d)("page.organizes.profile.ak"))+":",1),(0,l.Lk)("span",null,(0,s.v_)(H.ak),1)]),(0,l.Lk)("div",$,[(0,l.Lk)("span",null,(0,s.v_)((0,u.R1)(d)("page.organizes.profile.sk"))+":",1),(0,l.Lk)("span",null,(0,s.v_)(H.sk),1)])])]})),_:1},8,["modelValue"])])}}}),D=a(83940);const H=(0,D.A)(Q,[["__scopeId","data-v-c305308a"]]);var I=H}}]);