"use strict";(self["webpackChunkSensepedia"]=self["webpackChunkSensepedia"]||[]).push([[46],{85158:function(e,a,l){l.d(a,{Ay:function(){return h},Ju:function(){return b},W4:function(){return v}});var t=l(38118),n=l(28694),u=l(32228);function s(){return{"zh-CN":"zh-cn","zh-TW":"zh-hk","en-US":"en-us","th-TH":"th-th"}}function i(e){return e in s()?s()[e]:"zh-cn"}function r(){return"zh-cn"}function h(e){const{locale:a,t:l}=(0,u.s9)(),s=(0,t.KR)(r());return s.value=i(a.value),(0,n.wB)(a,(async()=>{s.value=i(a.value),await e(s.value)})),{defaultLang:s}}function v(e){const{locale:a,t:l}=(0,u.s9)(),s=(0,t.KR)(r());return s.value=i(a.value),(0,n.wB)(a,(async()=>{s.value=i(a.value),await e(s.value)})),{defaultLang:s}}function b(e){const{locale:a}=(0,u.s9)(),l=(0,t.KR)(r());return l.value=i(a.value),(0,n.wB)(a,(async()=>{l.value=i(a.value),await e({})})),{defaultLang:l}}},51832:function(e,a,l){l.d(a,{A:function(){return s}});l(14898);var t=l(38118),n=l(28694),u=l(32228);function s(){const{locale:e}=(0,u.s9)(),a={"zh-CN":[{value:"zh-cn",label:"简体中文"},{value:"zh-tw",label:"繁体中文"},{value:"en-us",label:"英文"},{value:"default",label:"其他"}],"zh-TW":[{value:"zh-cn",label:"简体中文"},{value:"zh-tw",label:"繁体中文"},{value:"en-us",label:"English"},{value:"default",label:"其他"}],"en-US":[{value:"zh-cn",label:"Chinese (Simplified)"},{value:"zh-tw",label:"Chinese (Traditional)"},{value:"en-us",label:"English"},{value:"default",label:"Others"}],"th-TH":[{value:"zh-cn",label:"简体中文"},{value:"zh-tw",label:"繁体中文"},{value:"en-us",label:"English"},{value:"default",label:"其他"}]},l="zh-CN",s={"zh-CN":{"zh-cn":"简体中文","zh-hk":"繁体中文","en-us":"English",default:"其他"},"zh-TW":{"zh-cn":"簡體中文","zh-hk":"繁體中文","en-us":"English",default:"其他"},"en-US":{"zh-cn":"Chinese (Simplified)","zh-hk":"Chinese (Traditional)","en-us":"English",default:"Others"}},i={"zh-CN":{0:"文本",1:"文本",2:"QA"},"zh-TW":{0:"文本",1:"文本",2:"QA"},"en-US":{0:"Text",1:"Text",2:"Q&A"}},r={DOCUMENT_WAIT_CONFIRM:1,DOCUMENT_WAIT_PUBLISH:2,DOCUMENT_PUBLISHED:3,DOCUMENT_STOP:4,DOCUMENT_DUPL:5,DOCUMENT_PUBLISH_FAILED:6,DOCUMENT_PUBLISH_ING:7,DOCUMENT_SPLITTING:8,DOCUMENT_SPLIT_SUCCESS:9,DOCUMENT_SPLIT_FAILED:10},h={UPLOAD:-1,NOT_READY:0,START:1,RUNNING:2,READY:3,ERROR:4,SPLIT:5,SPLIT_ERROR:6,TOKEN_EXCEED:7,TOKEN_LIMIT:8},v={"zh-CN":["上传中","待解析","解析中","解析失败","待校验","待上架","已上架","上架中","上架失败","切分中","切分失败","其他"],"zh-TW":["上傳中","待解析","解析中","解析失败","待校验","待上架","已上架","上架中","上架失敗","切分中","切分失敗","其他"],"en-US":["Uploading","Awaiting Parsing","Parsing","Parse Failed","Awaiting Verification","Awaiting Publish","Published","Publishing","Publish Failed","Splitting","Split Failed","Others"]},b={"zh-CN":["","通用问答","文档问答前","文档问答后","知识库问答"],"zh-TW":["","通用問答","文檔問答前","文檔問答後","知識庫問答"],"en-US":["","General Chat","Document Chat - Before Upload","Document Chat - After Upload","Knowledge Base Chat"]},c={"zh-CN":[{label:"全部",value:"ALL"},{label:"简体中文",value:"zh-cn"},{label:"繁体中文",value:"zh-hk"},{label:"英文",value:"en-us"},{label:"其他",value:"default"}],"zh-TW":[{label:"全部",value:"ALL"},{label:"簡體中文",value:"zh-cn"},{label:"繁體中文",value:"zh-hk"},{label:"英文",value:"en-us"},{label:"其他",value:"default"}],"en-US":[{label:"ALL",value:"ALL"},{label:"Chinese (Simplified)",value:"zh-cn"},{label:"Chinese (Traditional)",value:"zh-hk"},{label:"English",value:"en-us"},{label:"Others",value:"default"}]},p={"zh-CN":[{label:"全部",value:"ALL"},{label:"文本类型",value:"1"},{label:"QA类型",value:"2"}],"zh-TW":[{label:"全部",value:"ALL"},{label:"文本類型",value:"1"},{label:"QA類型",value:"2"}],"en-US":[{label:"ALL",value:"ALL"},{label:"Text",value:"1"},{label:"QA",value:"2"}]},o={"zh-CN":[{label:"全部",value:0},{label:"待解析",value:1},{label:"解析中",value:2},{label:"解析失败",value:3},{label:"待校验",value:4},{label:"待上架",value:5},{label:"已上架",value:6},{label:"上架中",value:7},{label:"上架失败",value:8},{label:"切分中",value:9},{label:"切分失败",value:10}],"zh-TW":[{label:"全部",value:0},{label:"待解析",value:1},{label:"解析中",value:2},{label:"解析失敗",value:3},{label:"待校驗",value:4},{label:"待上架",value:5},{label:"已上架",value:6},{label:"上架中",value:7},{label:"上架失敗",value:8},{label:"切分中",value:9},{label:"切分失敗",value:10}],"en-US":[{label:"ALL",value:0},{label:"Awaiting Parsing",value:1},{label:"Parsing",value:2},{label:"Parse Failed",value:3},{label:"Awaiting Verification",value:4},{label:"Awaiting Publish",value:5},{label:"Published",value:6},{label:"Publishing",value:7},{label:"Published Failed",value:8},{label:"Splitting",value:9},{label:"Splitted Failed",value:10}]},T={"zh-CN":[{label:"全部",value:0},{label:"通用问答",value:1},{label:"单文档问答前",value:2},{label:"单文档问答后",value:3},{label:"知识库问答",value:4},{label:"文档问答 - 文档对比",value:5}],"zh-TW":[{label:"全部",value:0},{label:"通用問答",value:1},{label:"單文檔問答前",value:2},{label:"單文檔問答後",value:3},{label:"知識庫問答",value:4},{label:"文檔問答 - 文檔對比",value:5}],"en-US":[{label:"ALL",value:0},{label:"General Chat",value:1},{label:"Document Chat - Before Upload",value:2},{label:"Document Chat - After Upload",value:3},{label:"Knowledge Base Chat",value:4},{label:"Document Chat - Document Comparison",value:5}]},S=()=>e.value in a?a[e.value]:a[l],d=()=>e.value in s?s[e.value]:s[l],f=()=>e.value in c?c[e.value]:c[l],L=()=>e.value in i?i[e.value]:i[l],E=()=>e.value in p?p[e.value]:p[l],O=()=>e.value in v?v[e.value]:v[l],C=()=>e.value in o?o[e.value]:o[l],N=()=>e.value in b?b[e.value]:b[l],g=()=>e.value in T?T[e.value]:T[l],U=(e,a)=>{if(e=~~e,a=~~a,a===h.UPLOAD)return 0;if(a===h.NOT_READY)return 1;if(a<=h.START)return 1;if(a===h.RUNNING)return 2;if(a===h.ERROR)return 3;if(a>=h.READY){if(e===r.DOCUMENT_WAIT_CONFIRM)return 4;if(e===r.DOCUMENT_WAIT_PUBLISH)return 5;if(e===r.DOCUMENT_PUBLISHED)return 6;if(e===r.DOCUMENT_STOP)return 5;if(e===r.DOCUMENT_PUBLISH_ING)return 7;if(e===r.DOCUMENT_PUBLISH_FAILED)return 8;if(e===r.DOCUMENT_SPLITTING)return 9;if(e===r.DOCUMENT_SPLIT_FAILED)return 10;if(e===r.DOCUMENT_SPLIT_SUCCESS)return 5}return 3},A=e=>1===e?{parserStates:h.NOT_READY+","+h.START,states:""}:2===e?{parserStates:h.RUNNING,states:""}:3===e?{parserStates:h.ERROR+","+h.TOKEN_EXCEED+","+h.TOKEN_LIMIT,states:""}:4===e?{parserStates:h.READY+","+h.SPLIT,states:r.DOCUMENT_WAIT_CONFIRM}:5===e?{parserStates:"",states:r.DOCUMENT_WAIT_PUBLISH+","+r.DOCUMENT_STOP+","+r.DOCUMENT_SPLIT_SUCCESS}:6===e?{parserStates:"",states:r.DOCUMENT_PUBLISHED}:7===e?{parserStates:"",states:r.DOCUMENT_PUBLISH_ING}:8===e?{parserStates:"",states:r.DOCUMENT_PUBLISH_FAILED}:9===e?{parserStates:"",states:r.DOCUMENT_SPLITTING}:10===e?{parserStates:"",states:r.DOCUMENT_SPLIT_FAILED}:{},_=(0,t.Kh)([]),m=(0,t.Kh)({}),P=(0,t.Kh)({}),D=(0,t.Kh)({}),I=(0,t.Kh)([]),z=(0,t.Kh)([]),y=(0,t.Kh)([]),M=(0,t.Kh)([]);return O().map((e=>{_.push(e)})),Object.keys(L()).map((e=>{m[e]=L()[e]})),Object.keys(d()).map((e=>{P[e]=d()[e]})),Object.keys(N()).map((e=>{D[e]=N()[e]})),C().map((e=>{z.push(e)})),f().map((e=>{I.push(e)})),E().map((e=>{y.push(e)})),g().map((e=>{M.push(e)})),(0,n.wB)((()=>e.value),(()=>{_.splice(0,_.length),O().map((e=>{_.push(e)})),Object.keys(m).map((e=>{m[e]=L()[e]})),Object.keys(P).map((e=>{P[e]=d()[e]})),z.splice(0,z.length),C().map((e=>{z.push(e)})),I.splice(0,I.length),f().map((e=>{I.push(e)})),y.splice(0,y.length),E().map((e=>{y.push(e)})),M.splice(0,M.length),g().map((e=>{M.push(e)}))})),{getLocaleOutputLang:S,getLocaleLangs:d,getLocaleTypes:L,getLocaleStatus:O,getLocaleLangOptions:f,getLocaleTypeOptions:E,getLocaleStatusOptions:C,translateState:U,queryState:A,STATES:_,TYPES:m,LANGS:P,SCOPES:D,StatusOptions:z,LangOptions:I,TypeOptions:y,ScopeOptions:M,STATE_PREV:r,STATE_NEXT:h}}},82365:function(e,a,l){l.d(a,{Ju:function(){return s},PW:function(){return v},TF:function(){return b},WQ:function(){return i},YQ:function(){return r},f0:function(){return c},hc:function(){return h},n_:function(){return u}});var t=l(2324);const n="/api/v1";async function u(e){return(0,t.A)({url:n+"/system/prompt/syslist",method:"POST",data:{...e,pageNum:e.page,pageSize:e.perPage}})}async function s(e){return(0,t.A)({url:n+"/system/speech/syslist",method:"POST",data:{...e,pageNum:e.page,pageSize:e.perPage}})}async function i(e){return(0,t.A)({url:n+"/system/prompt/add",method:"POST",data:e})}async function r(e){return(0,t.A)({url:n+"/system/speech/add",method:"POST",data:e})}async function h(e){return(0,t.A)({url:n+"/system/prompt/edit",method:"POST",data:e})}async function v(e){return(0,t.A)({url:n+"/system/speech/edit",method:"POST",data:e})}async function b(e){return(0,t.A)({url:n+"/system/prompt/remove",method:"POST",data:e})}async function c(e){return(0,t.A)({url:n+"/system/speech/remove",method:"POST",data:e})}},36981:function(e,a,l){l.d(a,{A:function(){return T}});var t=l(28694);const n={class:"main-content-screen"},u={class:"screen-header"},s={class:"header-search"},i={class:"screen-content",ref:"conentRef"},r={class:"content-data",style:{gap:"16px"}},h={class:"screen-footer"},v={class:"footer-pagination"};function b(e,a,l,b,c,p){const o=(0,t.g2)("el-skeleton-item"),T=(0,t.g2)("el-skeleton");return(0,t.uX)(),(0,t.CE)("div",n,[(0,t.Lk)("div",u,[(0,t.bF)(T,{animated:""},{template:(0,t.k6)((()=>[(0,t.Lk)("div",s,[(0,t.bF)(o,{variant:"text",style:{height:"28px"}}),(0,t.bF)(o,{variant:"text",style:{height:"28px"}}),(0,t.bF)(o,{variant:"text",style:{height:"28px"}}),(0,t.bF)(o,{variant:"text",style:{height:"28px"}})])])),_:1})]),(0,t.Lk)("div",i,[(0,t.bF)(T,{animated:""},{template:(0,t.k6)((()=>[(0,t.Lk)("div",r,[(0,t.bF)(o,{variant:"text",style:{height:"28px"}}),(0,t.bF)(o,{variant:"text",style:{height:"28px"}}),(0,t.bF)(o,{variant:"text",style:{height:"28px"}}),(0,t.bF)(o,{variant:"text",style:{height:"28px"}})])])),_:1})],512),(0,t.Lk)("div",h,[(0,t.bF)(T,{animated:""},{template:(0,t.k6)((()=>[(0,t.Lk)("div",v,[(0,t.bF)(o,{variant:"text",style:{height:"28px",width:"128px"}}),(0,t.bF)(o,{variant:"text",style:{height:"28px",width:"128px"}})])])),_:1})])])}var c=(0,t.pM)({name:"SkeleteTable",setup(e,a){}}),p=l(83940);const o=(0,p.A)(c,[["render",b],["__scopeId","data-v-60855484"]]);var T=o}}]);