"use strict";(self["webpackChunkSensepedia"]=self["webpackChunkSensepedia"]||[]).push([[878],{64878:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var o=t(28694),n=t(38118),s=t(97913),a=t(83487),i=t(98836),l=t(74913),u=t(32228),c=t(74560),d=t(47531),p=t(12567);
/*! js-cookie v3.0.5 | MIT */
function m(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)e[o]=t[o]}return e}var g={read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function f(e,r){function t(t,o,n){if("undefined"!==typeof document){n=m({},r,n),"number"===typeof n.expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var a in n)n[a]&&(s+="; "+a,!0!==n[a]&&(s+="="+n[a].split(";")[0]));return document.cookie=t+"="+e.write(o,t)+s}}function o(r){if("undefined"!==typeof document&&(!arguments.length||r)){for(var t=document.cookie?document.cookie.split("; "):[],o={},n=0;n<t.length;n++){var s=t[n].split("="),a=s.slice(1).join("=");try{var i=decodeURIComponent(s[0]);if(o[i]=e.read(a,i),r===i)break}catch(l){}}return r?o[r]:o}}return Object.create({set:t,get:o,remove:function(e,r){t(e,"",m({},r,{expires:-1}))},withAttributes:function(e){return f(this.converter,m({},this.attributes,e))},withConverter:function(e){return f(m({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(e)}})}var v=f(g,{path:"/"}),b=t(1421),w=t.n(b);const k="MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdH",h=0x462d53c8abac0;function y(e){const r=w().AES.encrypt(e,k,{iv:h,mode:w().mode.ECB,padding:w().pad.Pkcs7});return r}function R(e){const r=w().AES.decrypt(e,k,{iv:h,mode:w().mode.ECB,padding:w().pad.Pkcs7});return r.toString(w().enc.Utf8).toString()}var _=t(95293);const x=e=>((0,o.Qi)("data-v-2b6c2306"),e=e(),(0,o.jt)(),e),C={class:"main"},M={class:"left"},F=["src"],A={class:"right"},L=x((()=>(0,o.Lk)("h1",{class:"title",style:{"mix-blend-mode":"darken"}},[(0,o.Lk)("img",{src:"/images/pk-logo.png"})],-1))),E={class:"el-input__icon"},U={class:"el-input__icon"},K={class:"text-forget"};var S=(0,o.pM)({__name:"index",setup(e){const r=(0,i.rd)(),{currentRoute:t}=r,m=(0,l.Pj)(),{t:g}=(0,u.s9)(),f=(0,o.EW)((()=>"/")),b=(0,n.Kh)({username:"",password:"",remeberMe:!1}),w=(0,n.Kh)({username:[{required:!0,message:g("page.user.login.form-item-username.required")}],password:[{required:!0,message:g("page.user.login.form-item-password.required")},{min:6,message:g("page.user.login.form-item-password.min")}]}),k=(0,n.KR)(),h=(0,n.KR)(!1),x=async()=>{h.value=!0;try{const e=await(k.value?.validate());if(!0===e){b.remeberMe?(v.set("username",b.username,{expires:30}),v.set("password",y(b.password),{expires:30}),v.set("remeberMe",b.remeberMe,{expires:30})):(v.remove("username"),v.remove("password"),v.remove("remeberMe"));const e=await m.dispatch("userlogin/login",{username:b.username,password:(0,_.w)(b.password),remeberMe:b.remeberMe});if(!0===e){c.nk.success(g("page.user.login.form.login-success"));const{redirect:e,...o}=t.value.query;window.location.href=r.resolve({path:e||"/",query:{open:"video",...o}}).href}}}catch(e){console.log(e),c.nk.warning(g("app.global.form.validatefields.catch"))}h.value=!1},S=(0,o.EW)((()=>m.state.userlogin.loginStatus)),B=(0,o.EW)((()=>m.state.userlogin.retryLimit||0)),W=(0,o.EW)((()=>m.state.userlogin.retryMinute||0)),j=()=>{const e=v.get("username"),r=v.get("password"),t=v.get("remeberMe");e&&r&&(b.username=void 0===e?b.username:e,b.password=void 0===r?b.password:R(r),b.remeberMe=void 0!==t&&Boolean(t))};j();const I=(0,n.KR)(!1),V=()=>{I.value=!0,c.nk.success(g("page.user.login.form.forget-success"))};return(e,r)=>{const t=(0,o.g2)("el-input"),i=(0,o.g2)("el-form-item"),l=(0,o.g2)("el-checkbox"),u=(0,o.g2)("el-button"),c=(0,o.g2)("el-alert");return(0,o.uX)(),(0,o.CE)("div",C,[(0,o.Lk)("div",M,[(0,o.Lk)("img",{src:f.value+"images/login.png"},null,8,F)]),(0,o.Lk)("div",A,[L,(0,o.bF)((0,n.R1)(d.US),{class:"form",model:b,rules:w,ref_key:"formRef",ref:k},{default:(0,o.k6)((()=>[(0,o.bF)(i,{label:"",prop:"username"},{default:(0,o.k6)((()=>[(0,o.bF)(t,{class:"input",modelValue:b.username,"onUpdate:modelValue":r[0]||(r[0]=e=>b.username=e),placeholder:(0,n.R1)(g)("page.user.login.form-item-username"),onKeydown:(0,s.jR)(x,["enter"])},{prefix:(0,o.k6)((()=>[(0,o.Lk)("i",E,[(0,o.bF)((0,n.R1)(p.A),{type:"user"})])])),_:1},8,["modelValue","placeholder"])])),_:1}),(0,o.bF)(i,{label:"",prop:"password"},{default:(0,o.k6)((()=>[(0,o.bF)(t,{class:"input",modelValue:b.password,"onUpdate:modelValue":r[1]||(r[1]=e=>b.password=e),type:"password",placeholder:(0,n.R1)(g)("page.user.login.form-item-password"),onKeydown:(0,s.jR)(x,["enter"])},{prefix:(0,o.k6)((()=>[(0,o.Lk)("i",U,[(0,o.bF)((0,n.R1)(p.A),{type:"pwd"})])])),_:1},8,["modelValue","placeholder"])])),_:1}),(0,o.bF)(i,null,{default:(0,o.k6)((()=>[(0,o.bF)(l,{class:"text-align-right",modelValue:b.remeberMe,"onUpdate:modelValue":r[2]||(r[2]=e=>b.remeberMe=e)},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)((0,n.R1)(g)("page.user.login.rememberMe")),1)])),_:1},8,["modelValue"]),(0,o.Lk)("div",K,[(0,o.Lk)("span",{onClick:V},(0,a.v_)((0,n.R1)(g)("page.user.login.form.forget")),1)])])),_:1}),(0,o.bF)(i,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,{type:"primary",class:"submit",onClick:x,loading:h.value},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)((0,n.R1)(g)("page.user.login.form.btn-submit")),1)])),_:1},8,["loading"])])),_:1}),"error"!==S.value||h.value?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(c,{key:0,title:(0,n.R1)(g)("page.user.login.form.login-error"),type:"error","show-icon":"",closable:!1},null,8,["title"])),"limit"===S.value?((0,o.uX)(),(0,o.Wv)(c,{key:1,title:(0,n.R1)(g)("page.user.login.notMatch.retryLimit",{limit:B.value,minute:W.value}),type:"error","show-icon":"",closable:!1},null,8,["title"])):(0,o.Q3)("",!0),"exceed"===S.value?((0,o.uX)(),(0,o.Wv)(c,{key:2,title:(0,n.R1)(g)("page.user.login.retryLimit.exceed",{minute:W.value}),type:"error","show-icon":"",closable:!1},null,8,["title"])):(0,o.Q3)("",!0)])),_:1},8,["model","rules"])])])}}}),B=t(83940);const W=(0,B.A)(S,[["__scopeId","data-v-2b6c2306"]]);var j=W}}]);