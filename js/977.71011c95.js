"use strict";(self["webpackChunkSensepedia"]=self["webpackChunkSensepedia"]||[]).push([[977],{71977:function(e,r,s){s.r(r),s.d(r,{default:function(){return h}});var o=s(28694),a=s(83487),l=s(97913);const t={class:"main"},n={class:"title"},i={class:"text-align-right"};function d(e,r,s,d,u,m){const p=(0,o.g2)("el-input"),f=(0,o.g2)("el-form-item"),g=(0,o.g2)("el-button"),c=(0,o.g2)("router-link"),b=(0,o.g2)("el-alert"),w=(0,o.g2)("el-form");return(0,o.uX)(),(0,o.CE)("div",t,[(0,o.Lk)("h1",n,(0,a.v_)(e.t("page.user.register.form.title")),1),(0,o.bF)(w,{model:e.modelRef,rules:e.rulesRef,ref:"formRef"},{default:(0,o.k6)((()=>[(0,o.bF)(f,{label:"",prop:"username"},{default:(0,o.k6)((()=>[(0,o.bF)(p,{modelValue:e.modelRef.username,"onUpdate:modelValue":r[0]||(r[0]=r=>e.modelRef.username=r),placeholder:e.t("page.user.register.form-item-username"),onKeydown:(0,l.jR)(e.handleSubmit,["enter"])},null,8,["modelValue","placeholder","onKeydown"])])),_:1}),(0,o.bF)(f,{label:"",prop:"password"},{default:(0,o.k6)((()=>[(0,o.bF)(p,{type:"password",modelValue:e.modelRef.password,"onUpdate:modelValue":r[1]||(r[1]=r=>e.modelRef.password=r),placeholder:e.t("page.user.register.form-item-password"),onKeydown:(0,l.jR)(e.handleSubmit,["enter"])},null,8,["modelValue","placeholder","onKeydown"])])),_:1}),(0,o.bF)(f,{label:"",prop:"confirm"},{default:(0,o.k6)((()=>[(0,o.bF)(p,{type:"password",modelValue:e.modelRef.confirm,"onUpdate:modelValue":r[2]||(r[2]=r=>e.modelRef.confirm=r),placeholder:e.t("page.user.register.form-item-confirmpassword"),onKeydown:(0,l.jR)(e.handleSubmit,["enter"])},null,8,["modelValue","placeholder","onKeydown"])])),_:1}),(0,o.bF)(f,null,{default:(0,o.k6)((()=>[(0,o.bF)(g,{type:"primary",class:"submit",onClick:e.handleSubmit,loading:e.submitLoading},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(e.t("page.user.register.form.btn-submit")),1)])),_:1},8,["onClick","loading"]),(0,o.Lk)("div",i,[(0,o.bF)(c,{to:"/user/login"},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(e.t("page.user.register.form.btn-jump")),1)])),_:1})])])),_:1}),""===e.errorMsg||"undefined"===typeof e.errorMsg||e.submitLoading?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(b,{key:0,title:e.errorMsg,type:"error","show-icon":"",closable:!1},null,8,["title"]))])),_:1},8,["model","rules"])])}var u=s(38118),m=s(98836),p=s(74913),f=s(32228),g=s(74560),c=(0,o.pM)({name:"UserRegister",setup(){const e=(0,m.rd)(),r=(0,p.Pj)(),{t:s}=(0,f.s9)(),a=(0,u.Kh)({username:"",password:"",confirm:""}),l=(0,u.Kh)({username:[{required:!0,message:s("page.user.register.form-item-username.required")}],password:[{required:!0,message:s("page.user.register.form-item-password.required")}],confirm:[{validator:(e,r,o)=>""===r?Promise.reject(s("page.user.register.form-item-password.required")):r!==a.password?Promise.reject(s("page.user.register.form-item-confirmpassword.compare")):Promise.resolve()}]}),t=(0,u.KR)(),n=(0,u.KR)(!1),i=async()=>{n.value=!0;try{const o=await(t.value?.validate());if(!0===o){const o=await r.dispatch("userregister/register",a);!0===o&&(g.nk.success(s("page.user.register.form.register-success")),e.replace("/user/login"))}}catch(o){console.log("error",o),g.nk.warning(s("app.global.form.validatefields.catch"))}n.value=!1},d=(0,o.EW)((()=>r.state.userregister.errorMsg));return{t:s,modelRef:a,rulesRef:l,formRef:t,submitLoading:n,handleSubmit:i,errorMsg:d}}}),b=s(83940);const w=(0,b.A)(c,[["render",d],["__scopeId","data-v-2f96f1b8"]]);var h=w}}]);