"use strict";(self["webpackChunkCustomsPedia"]=self["webpackChunkCustomsPedia"]||[]).push([[88],{26936:function(e,t,a){a.d(t,{A4:function(){return l},B2:function(){return f},Dr:function(){return p},E1:function(){return v},HV:function(){return s},Rk:function(){return i},SB:function(){return g},Wb:function(){return d},ZE:function(){return c},_I:function(){return m},n_:function(){return o},uQ:function(){return u}});var n=a(2324);const r="/api/v1";async function o(e){return(0,n.A)({url:r+"/knowledge/chatlog/list",method:"POST",data:{...e,pageNum:e.page,pageSize:e.perPage}})}async function u(e){return(0,n.A)({url:r+"/knowledge/chat/download",method:"POST",responseType:"blob",data:e})}async function l(e){return(0,n.A)({url:r+"/system/intellectsessionchatlog/logs/list",method:"POST",data:{...e,pageNum:e.page,pageSize:e.perPage}})}async function s(e){return(0,n.A)({url:r+"/system/documentchatlog/chatlog/list",method:"POST",data:{pageNum:e.page,pageSize:e.perPage,...e}})}async function i(e){return(0,n.A)({url:r+"/system/document-compare/logs/list",method:"POST",data:{pageNum:e.page,pageSize:e.perPage,...e}})}async function d(e){return(0,n.A)({url:r+"/system/intellectsessionchatlog/logs/download",method:"POST",responseType:"blob",data:e})}async function c(e){return(0,n.A)({url:r+"/system/documentchatlog/chatlog/download",method:"POST",responseType:"blob",data:e})}async function p(e){return(0,n.A)({url:r+"/system/document-compare/logs/download",method:"POST",responseType:"blob",data:e})}async function f(){return(0,n.A)({url:r+"/system/user/tree",method:"GET"})}async function m(e){return(0,n.A)({url:r+"/monitor/logininfor/list",method:"GET",params:{pageNum:e.page,pageSize:e.perPage,...e}})}async function v(e){return(0,n.A)({url:r+"/monitor/online/list",method:"GET",params:{pageNum:e.page,pageSize:e.perPage,...e}})}async function g(e){return(0,n.A)({url:r+"/monitor/logininfor/remove",method:"DELETE",data:e})}},14559:function(e,t,a){a.r(t),a.d(t,{default:function(){return Te}});a(14898),a(63307),a(43854),a(34817);var n,r=a(28694),o=a(83487),u=a(38118),l=a(12567),s=a(47679),i=a(94102),d=a(35733),c=a(81329),p=a(26936),f={version:"0.20.2"},m=1200,v=1252;var g=function(){return"undefined"!==typeof Buffer&&"undefined"!==typeof process&&"undefined"!==typeof process.versions&&!!process.versions.node}(),k=function(){if("undefined"!==typeof Buffer){var e=!Buffer.from;if(!e)try{Buffer.from("foo","utf8")}catch(t){e=!0}return e?function(e,t){return t?new Buffer(e,t):new Buffer(e)}:Buffer.from.bind(Buffer)}return function(){}}(),h=function(){if("undefined"===typeof Buffer)return!1;var e=k([65,0]);if(!e)return!1;var t=e.toString("utf16le");return 1==t.length}();var y=/\u0000/g;new Date("6/9/69 00:00 UTC").valueOf();function b(e,t){for(var a=1-2*(e[t+7]>>>7),n=((127&e[t+7])<<4)+(e[t+6]>>>4&15),r=15&e[t+6],o=5;o>=0;--o)r=256*r+e[t+o];return 2047==n?0==r?a*(1/0):NaN:(0==n?n=-1022:(n-=1023,r+=Math.pow(2,52)),a*Math.pow(2,n-52)*r)}var w=function(e,t,a){for(var n=[],r=t;r<a;r+=2)n.push(String.fromCharCode(W(e,r)));return n.join("").replace(y,"")},C=g?function(e,t,a){return Buffer.isBuffer(e)&&h?e.toString("utf16le",t,a).replace(y,""):w(e,t,a)}:w,E=function(e,t,a){for(var n=[],r=t;r<a;r++)n.push(String.fromCharCode(R(e,r)));return n.join("")},_=g?function(e,t,a){return Buffer.isBuffer(e)?e.toString("utf8",t,a):E(e,t,a)}:E,X=function(e,t){var a=z(e,t);return a>0?_(e,t+4,t+4+a-1):""},I=function(e,t){var a=z(e,t);return a>0?_(e,t+4,t+4+a-1):""},S=function(e,t){var a=2*z(e,t);return a>0?_(e,t+4,t+4+a-1):""},L=function(e,t){var a=z(e,t);return a>0?C(e,t+4,t+4+a):""},A=function(e,t){var a=z(e,t);return a>0?_(e,t+4,t+4+a):""},F=function(e,t){return b(e,t)};function B(){C=function(e,t,a){return n.utils.decode(1200,e.slice(t,a)).replace(y,"")},_=function(e,t,a){return n.utils.decode(65001,e.slice(t,a))},function(e,t){var a=z(e,t);return a>0?n.utils.decode(v,e.slice(t+4,t+4+a-1)):""},function(e,t){var a=z(e,t);return a>0?n.utils.decode(m,e.slice(t+4,t+4+a-1)):""},function(e,t){var a=2*z(e,t);return a>0?n.utils.decode(1200,e.slice(t+4,t+4+a-1)):""},function(e,t){var a=z(e,t);return a>0?n.utils.decode(1200,e.slice(t+4,t+4+a)):""},function(e,t){var a=z(e,t);return a>0?n.utils.decode(65001,e.slice(t+4,t+4+a)):""}}g&&(function(e,t){if(!Buffer.isBuffer(e))return X(e,t);var a=e.readUInt32LE(t);return a>0?e.toString("utf8",t+4,t+4+a-1):""},function(e,t){if(!Buffer.isBuffer(e))return I(e,t);var a=e.readUInt32LE(t);return a>0?e.toString("utf8",t+4,t+4+a-1):""},function(e,t){if(!Buffer.isBuffer(e)||!h)return S(e,t);var a=2*e.readUInt32LE(t);return e.toString("utf16le",t+4,t+4+a-1)},function(e,t){if(!Buffer.isBuffer(e)||!h)return L(e,t);var a=e.readUInt32LE(t);return e.toString("utf16le",t+4,t+4+a)},function(e,t){if(!Buffer.isBuffer(e))return A(e,t);var a=e.readUInt32LE(t);return e.toString("utf8",t+4,t+4+a)},function(e,t){return Buffer.isBuffer(e)?e.readDoubleLE(t):F(e,t)}),"undefined"!==typeof n&&B();var R=function(e,t){return e[t]},W=function(e,t){return 256*e[t+1]+e[t]},z=function(e,t){return e[t+3]*(1<<24)+(e[t+2]<<16)+(e[t+1]<<8)+e[t]};try{/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g}catch(De){}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
(function(){try{return"undefined"==typeof Uint8Array||"undefined"==typeof Uint8Array.prototype.subarray?"slice":"undefined"!==typeof Buffer?"undefined"==typeof Buffer.prototype.subarray?"slice":("function"==typeof Buffer.from?Buffer.from([72,62]):new Buffer([72,62]))instanceof Uint8Array?"subarray":"slice":"subarray"}catch(De){return"slice"}})();f.version;var U=a(32228),K=a(74913),P=a(98836);const T={class:"main"},D={class:"main-top"},N={class:"main-top-nav"},V=["onClick"],O={class:"th-s-label"},x={class:"th-s-label"},Q={class:"th-s-label"},j={class:"th-s-label"},M={class:"th-s"},Y={key:0},q={key:1},Z={key:2},H={key:0},G=["onClick"],J={key:1},$={key:2},ee={key:0},te=["onClick"],ae={key:1},ne={key:2},re={key:0},oe={key:1},ue={key:2},le={key:0},se={key:1},ie={key:0},de=["onClick"],ce={key:1},pe={key:2},fe={key:0},me={key:1},ve={key:2},ge={key:0},ke={key:1},he={key:0},ye={key:1},be={key:0},we={key:1},Ce={key:0},Ee={key:1},_e={key:2},Xe={key:3},Ie={key:4},Se={key:5},Le={key:0},Ae={key:1},Fe={key:2},Be={key:0},Re={key:1},We={key:2},ze={class:"dialog-footer"};var Ue=(0,r.pM)({__name:"index",setup(e){const{ROLE_KEY:t}=(0,d.A)(),a=(0,r.EW)((()=>v.state.user.currentUser.menu)),n=(0,u.Kh)(["know"]),f=(0,u.KR)("know"),{t:m}=((0,u.KR)("custom-table"),(0,u.KR)("custom-table-header"),(0,U.s9)()),v=(0,K.Pj)(),g=((0,P.rd)(),(0,r.EW)((()=>v.state.user.currentUser.roleKey===t.superadmin))),k=(0,u.KR)([{label:"ALL",value:""},{label:"Like",value:1},{label:"Dislike",value:2},{label:"Empty",value:0}]),h=(0,u.KR)([{label:"ALL",value:""},{label:"Commented",value:"1"}]),y=(0,u.Kh)({show:!1,content:""}),b=(0,r.EW)((()=>{try{const e=JSON.parse(y.content);return JSON.stringify(e,null,4)}catch(De){return y.content?.replaceAll("<br/>","\n")}})),w=(0,r.EW)((()=>v.state.global.openDocumentCompare)),C=(0,u.KR)([]),E=(0,u.KR)(!1),_=(0,u.KR)(!1),X=((0,u.KR)(""),(0,u.KR)([]),(0,u.Kh)({reload:!0,loading:!1,list:[],pagination:{total:0,current:1,pageSize:10,sizeChange:()=>{},onChange:e=>{}}})),I=(0,u.KR)([]),{pushQuery:S,queryParams:L}=(0,i.A)("/organize/log",(async(e,t)=>{void 0===e.from&&(e.from=(0,c.pr)(Ke.datetime[0])),void 0===e.to&&(e.to=(0,c.pr)(Ke.datetime[1])),X.loading=!0;let a=p.n_;"know"===f.value?a=p.n_:"document"===f.value?a=p.HV:"compare"===f.value?a=p.Rk:"general"===f.value&&(a=p.A4),""===e.score&&delete e.score,""===e.comment&&delete e.comment;const n=await a(e),{rows:r,data:o}=n,u=r||o||[];X.list=u.map((e=>e)),X.pagination={total:n.total||0,current:e.page,pageSize:e.perPage,sizeChange:async e=>{X.reload=!1,await Pe({perPage:e,page:1}),X.reload=!0},onChange:e=>Pe({page:e})},X.loading=!1})),A=()=>{a.value&&a.value.length>0?(a.value.map((e=>e.path)).includes("/document")&&n.unshift("document","compare"),a.value.map((e=>e.path)).includes("/qa")&&n.unshift("general")):setTimeout(A,400)};g.value?n.unshift("general","document","compare"):A();const F=e=>{I.value=e},B=e=>{f.value=e,X.list=[],X.pagination={total:0},Te()},R=e=>{y.show=!0,y.content=e},W=e=>e?.length>100,z=e=>e.slice(0,100)+"...",Ue=()=>{const e=new Date;return e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),e.setDate(e.getDate()-7),e},Ke=(0,u.Kh)({score:"",comment:"",datetime:[Ue(),new Date],memberIds:[]}),Pe=async e=>{const t={...Ke,...e};t.from=(0,c.pr)(Ke.datetime[0]),t.to=(0,c.pr)(Ke.datetime[1]),t.userIds=Ke.memberIds.length>0?Ke.memberIds.join(","):C.value.map((e=>e.userId)).join(","),delete t.datetime,S(t)},Te=async()=>{Ke.score="",Ke.comment="",Ke.datetime=[Ue(),new Date],Ke.memberIds=[],X.reload=!1,await Pe({page:1,refresh:(0,c.pr)(new Date)}),X.reload=!0},Ne=async()=>{if(E.value=!0,null!==Ke.datetime){try{const e={userIds:"",from:(0,c.pr)(Ke.datetime[0]),to:(0,c.pr)(Ke.datetime[1])};0===Ke.memberIds.length?e.userIds=C.value.map((e=>e.userId)).join(","):e.userIds=Ke.memberIds.join(",");let t=p.uQ;"know"===f.value?t=p.uQ:"document"===f.value?t=p.ZE:"compare"===f.value?t=p.Dr:"general"===f.value&&(t=p.Wb);const a=await t(e),n=window.URL.createObjectURL(a),r=document.createElement("a");r.href=n,r.download="logs.xlsx",document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(n)}catch(e){console.log(e)}E.value=!1}else E.value=!1},Ve=async()=>{const e=await(0,p.B2)();if(e&&e.data){const t=e=>{e&&e.forEach((e=>{e.subList&&e.subList.length>0&&e&&t(e.subList),C.value.push(e)}))};e.data.subList=e.data.subList||[],C.value=e.data.subList,e.data.subList.forEach((e=>{e&&t(e.subList)})),-1===C.value.findIndex((t=>t.userId===e.data.userId))&&C.value.push(e.data)}};return(0,r.sV)((async()=>{await Ve();const e=n.findIndex((e=>"compare"===e));w.value||-1===e||n.splice(e,1),window.document.documentElement.style.setProperty("--el-popper-width","fit-content")})),(0,r.hi)((()=>{})),(e,t)=>{const a=(0,r.g2)("el-tag"),i=(0,r.g2)("el-date-picker"),d=(0,r.g2)("el-col"),c=(0,r.g2)("el-option"),p=(0,r.g2)("el-select"),v=(0,r.g2)("el-row"),g=(0,r.g2)("el-button"),w=(0,r.g2)("el-table-column"),I=(0,r.g2)("el-input"),S=(0,r.g2)("el-dialog"),L=(0,r.gN)("loading");return(0,r.uX)(),(0,r.CE)("div",T,[(0,r.Lk)("div",D,[(0,r.Lk)("div",N,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n,(e=>((0,r.uX)(),(0,r.CE)(r.FK,{key:e},[f.value!=e?((0,r.uX)(),(0,r.CE)("span",{key:0,onClick:t=>B(e)},(0,o.v_)((0,u.R1)(m)("page.organizes.logs."+e)),9,V)):((0,r.uX)(),(0,r.Wv)(a,{key:1,type:"primary",effect:"dark"},{default:(0,r.k6)((()=>[(0,r.eW)((0,o.v_)((0,u.R1)(m)("page.organizes.logs."+e)),1)])),_:2},1024))],64)))),128))])]),X.reload?((0,r.uX)(),(0,r.Wv)(s.A,{key:0,"row-key":"id",data:X.list,loading:X.loading,pagination:X.pagination,onHandleSelection:F},{header:(0,r.k6)((()=>[(0,r.bF)(v,null,{default:(0,r.k6)((()=>[(0,r.bF)(d,{span:12},{default:(0,r.k6)((()=>[(0,r.Lk)("span",O,(0,o.v_)((0,u.R1)(m)("page.organizes.logs.th-s-datetime")),1),(0,r.bF)(i,{modelValue:Ke.datetime,"onUpdate:modelValue":t[0]||(t[0]=e=>Ke.datetime=e),type:"datetimerange","start-placeholder":"Start Date","end-placeholder":"End Date",format:"YYYY-MM-DD HH:mm:ss","date-format":"YYYY/MM/DD ddd","time-format":"A hh:mm:ss"},null,8,["modelValue"])])),_:1}),(0,r.bF)(d,{span:4},{default:(0,r.k6)((()=>[(0,r.Lk)("span",x,(0,o.v_)((0,u.R1)(m)("page.organizes.logs.th-s-member")),1),(0,r.bF)(p,{class:"th-s-input",modelValue:Ke.memberIds,"onUpdate:modelValue":t[1]||(t[1]=e=>Ke.memberIds=e),multiple:"",placeholder:(0,u.R1)(m)("page.organizes.logs.th-s-member-holder")},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(C.value,(e=>((0,r.uX)(),(0,r.Wv)(c,{key:e.userId,label:e.loginName,value:e.userId},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])])),_:1}),(0,r.bF)(d,{span:4},{default:(0,r.k6)((()=>[(0,r.Lk)("span",Q,(0,o.v_)((0,u.R1)(m)("page.organizes.logs.th-s-score")),1),(0,r.bF)(p,{class:"th-s-input",modelValue:Ke.score,"onUpdate:modelValue":t[2]||(t[2]=e=>Ke.score=e)},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(k.value,(e=>((0,r.uX)(),(0,r.Wv)(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,r.bF)(d,{span:4},{default:(0,r.k6)((()=>[(0,r.Lk)("span",j,(0,o.v_)((0,u.R1)(m)("page.organizes.logs.th-s-method")),1),(0,r.bF)(p,{class:"th-s-input",modelValue:Ke.comment,"onUpdate:modelValue":t[3]||(t[3]=e=>Ke.comment=e)},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(h.value,(e=>((0,r.uX)(),(0,r.Wv)(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,r.bF)(v,{style:{"margin-top":"10px"}},{default:(0,r.k6)((()=>[(0,r.bF)(d,{span:24},{default:(0,r.k6)((()=>[(0,r.Lk)("div",M,[(0,r.bo)(((0,r.uX)(),(0,r.Wv)(g,{type:"primary",onClick:Ne},{default:(0,r.k6)((()=>[(0,r.eW)((0,o.v_)((0,u.R1)(m)("page.organizes.logs.export")),1)])),_:1})),[[L,E.value]]),(0,r.bF)(g,{class:"th-s-button color-huge border-huge",onClick:Te},{icon:(0,r.k6)((()=>[(0,r.bF)((0,u.R1)(l.A),{type:"pk-refresh"})])),default:(0,r.k6)((()=>[(0,r.eW)(" "+(0,o.v_)((0,u.R1)(m)("page.organizes.logs.reset")),1)])),_:1}),(0,r.bo)(((0,r.uX)(),(0,r.Wv)(g,{disabled:null===Ke.datetime,type:"primary",onClick:Pe},{icon:(0,r.k6)((()=>[(0,r.bF)((0,u.R1)(l.A),{type:"pk-search"})])),default:(0,r.k6)((()=>[(0,r.eW)(" "+(0,o.v_)((0,u.R1)(m)("page.organizes.logs.search")),1)])),_:1},8,["disabled"])),[[L,_.value]])])])),_:1})])),_:1})])),default:(0,r.k6)((()=>[(0,r.bF)(w,{label:"Id",prop:"id",width:"55"}),(0,r.bF)(w,{label:"SessionId",prop:"sessionId",width:"100"},{default:(0,r.k6)((({row:e})=>["document"===f.value?((0,r.uX)(),(0,r.CE)("span",Y,(0,o.v_)(e.docId),1)):"compare"===f.value?((0,r.uX)(),(0,r.CE)("span",q,(0,o.v_)(e.document_compare_id),1)):((0,r.uX)(),(0,r.CE)("span",Z,(0,o.v_)(e.sessionId),1))])),_:1}),(0,r.bF)(w,{sortable:"",label:"CreateTime",prop:"createTime",width:"160"}),(0,r.bF)(w,{label:"UserName",prop:"loginName",width:"100"}),(0,r.bF)(w,{label:"Query",prop:"query",width:"160"},{default:(0,r.k6)((({row:e})=>[W(e.query)?((0,r.uX)(),(0,r.CE)("span",H,[(0,r.eW)((0,o.v_)(z(e.query))+" ",1),(0,r.Lk)("a",{class:"showall",onClick:t=>R(e.query)},"View All",8,G)])):e.query?((0,r.uX)(),(0,r.CE)("span",J,(0,o.v_)(e.query),1)):((0,r.uX)(),(0,r.CE)("span",$,"-"))])),_:1}),(0,r.bF)(w,{label:"Answer",prop:"answer",width:"460"},{default:(0,r.k6)((({row:e})=>[W(e.answer)?((0,r.uX)(),(0,r.CE)("span",ee,[(0,r.eW)((0,o.v_)(z(e.answer))+" ",1),(0,r.Lk)("a",{class:"showall",onClick:t=>R(e.answer)},"View All",8,te)])):e.answer?((0,r.uX)(),(0,r.CE)("span",ae,(0,o.v_)(e.answer),1)):((0,r.uX)(),(0,r.CE)("span",ne,"-"))])),_:1}),(0,r.bF)(w,{label:"Like/Dislike",prop:"score",width:"120"},{default:(0,r.k6)((({row:e})=>[1===e.score?((0,r.uX)(),(0,r.CE)("span",re,"Like")):2===e.score?((0,r.uX)(),(0,r.CE)("span",oe,"Dislike")):((0,r.uX)(),(0,r.CE)("span",ue,"Empty"))])),_:1}),(0,r.bF)(w,{label:"Comment",prop:"comment",width:"100"},{default:(0,r.k6)((({row:e})=>[e.comment?((0,r.uX)(),(0,r.CE)("span",le,(0,o.v_)(e.comment),1)):((0,r.uX)(),(0,r.CE)("span",se,"-"))])),_:1}),"know"===f.value||"document"===f.value||"compare"===f.value?((0,r.uX)(),(0,r.Wv)(w,{key:0,label:"References",prop:"references",width:"460"},{default:(0,r.k6)((({row:e})=>[W(e.references)?((0,r.uX)(),(0,r.CE)("span",ie,[(0,r.eW)((0,o.v_)(z(e.references))+" ",1),(0,r.Lk)("a",{onClick:t=>R(e.references)},"View All",8,de)])):e.references?((0,r.uX)(),(0,r.CE)("span",ce,(0,o.v_)(e.references),1)):((0,r.uX)(),(0,r.CE)("span",pe,"-"))])),_:1})):(0,r.Q3)("",!0),"know"===f.value||"document"===f.value?((0,r.uX)(),(0,r.Wv)(w,{key:1,label:"DocumentId",prop:"docId",width:"160"},{default:(0,r.k6)((({row:e})=>["know"!==f.value&&"document"!==f.value||!e.docId?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("span",fe,(0,o.v_)(e.docId),1)),"compare"===f.value&&e.document_compare_id?((0,r.uX)(),(0,r.CE)("span",me,(0,o.v_)(e.document_compare_id),1)):((0,r.uX)(),(0,r.CE)("span",ve,"-"))])),_:1})):(0,r.Q3)("",!0),"know"===f.value||"document"===f.value?((0,r.uX)(),(0,r.Wv)(w,{key:2,label:"DocumentName",prop:"docName",width:"160"},{default:(0,r.k6)((({row:e})=>[e.docName?((0,r.uX)(),(0,r.CE)("span",ge,(0,o.v_)(e.docName),1)):((0,r.uX)(),(0,r.CE)("span",ke,"-"))])),_:1})):(0,r.Q3)("",!0),"know"===f.value?((0,r.uX)(),(0,r.Wv)(w,{key:3,label:"KnowledgeId",prop:"knowledgeId",width:"160"},{default:(0,r.k6)((({row:e})=>[e.knowledgeId?((0,r.uX)(),(0,r.CE)("span",he,(0,o.v_)(e.knowledgeId),1)):((0,r.uX)(),(0,r.CE)("span",ye,"-"))])),_:1})):(0,r.Q3)("",!0),"know"===f.value?((0,r.uX)(),(0,r.Wv)(w,{key:4,label:"KnowledgeName",prop:"knowledgeName",width:"160"},{default:(0,r.k6)((({row:e})=>[e.knowledgeName?((0,r.uX)(),(0,r.CE)("span",be,(0,o.v_)(e.knowledgeName),1)):((0,r.uX)(),(0,r.CE)("span",we,"-"))])),_:1})):(0,r.Q3)("",!0),(0,r.bF)(w,{label:"Chat Status",prop:"chatStatus",width:"160"},{default:(0,r.k6)((({row:e})=>[1===e.chatStatus?((0,r.uX)(),(0,r.CE)("span",Ce,"Success")):2===e.chatStatus?((0,r.uX)(),(0,r.CE)("span",Ee,"Success")):3===e.chatStatus?((0,r.uX)(),(0,r.CE)("span",_e,"Failed")):4===e.chatStatus?((0,r.uX)(),(0,r.CE)("span",Xe,"Stopped")):5===e.chatStatus?((0,r.uX)(),(0,r.CE)("span",Ie,"Exceed Token")):((0,r.uX)(),(0,r.CE)("span",Se,"Failed"))])),_:1}),(0,r.bF)(w,{label:"ConversationId",prop:"conversationId",width:"160"},{default:(0,r.k6)((({row:e})=>["know"!==f.value&&"general"!==f.value||!e.conversationId?"document"!==f.value&&"compare"!==f.value||!e.freetalkId?((0,r.uX)(),(0,r.CE)("span",Fe,"-")):((0,r.uX)(),(0,r.CE)("span",Ae,(0,o.v_)(e.freetalkId),1)):((0,r.uX)(),(0,r.CE)("span",Le,(0,o.v_)(e.conversationId),1))])),_:1}),(0,r.bF)(w,{label:"PreConversationId",prop:"preConversationId",width:"160"},{default:(0,r.k6)((({row:e})=>["know"!==f.value&&"general"!==f.value||!e.preConversationId?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("span",Be,(0,o.v_)(e.preConversationId),1)),"document"!==f.value&&"compare"!==f.value||!e.preFreetalkId?((0,r.uX)(),(0,r.CE)("span",We,"-")):((0,r.uX)(),(0,r.CE)("span",Re,(0,o.v_)(e.preFreetalkId),1))])),_:1}),"know"===f.value?((0,r.uX)(),(0,r.Wv)(w,{key:5,label:"Knowledge Base",prop:"knowledges",width:"160"})):(0,r.Q3)("",!0)])),_:1},8,["data","loading","pagination"])):(0,r.Q3)("",!0),(0,r.bF)(S,{modelValue:y.show,"onUpdate:modelValue":t[6]||(t[6]=e=>y.show=e),title:"ALL Content"},{footer:(0,r.k6)((()=>[(0,r.Lk)("div",ze,[(0,r.bF)(g,{onClick:t[5]||(t[5]=e=>y.show=!1)},{default:(0,r.k6)((()=>[(0,r.eW)("Close")])),_:1})])])),default:(0,r.k6)((()=>[(0,r.Lk)("div",null,[(0,r.bF)(I,{class:"dialog-ta",disabled:!0,type:"textarea",modelValue:b.value,"onUpdate:modelValue":t[4]||(t[4]=e=>b.value=e),style:{height:"80vh"}},null,8,["modelValue"])])])),_:1},8,["modelValue"])])}}}),Ke=a(83940);const Pe=(0,Ke.A)(Ue,[["__scopeId","data-v-349352a8"]]);var Te=Pe},55451:function(e,t,a){var n=a(78092),r=a(65685),o=a(31712),u=a(33747),l=u("toStringTag"),s=Object,i="Arguments"===o(function(){return arguments}()),d=function(e,t){try{return e[t]}catch(a){}};e.exports=n?o:function(e){var t,a,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=d(t=s(e),l))?a:i?o(t):"Object"===(n=o(t))&&r(t.callee)?"Arguments":n}},98202:function(e,t,a){var n=a(29163),r=a(59793);e.exports=function(e,t,a){return a.get&&n(a.get,t,{getter:!0}),a.set&&n(a.set,t,{setter:!0}),r.f(e,t,a)}},78092:function(e,t,a){var n=a(33747),r=n("toStringTag"),o={};o[r]="z",e.exports="[object z]"===String(o)},97167:function(e,t,a){var n=a(55451),r=String;e.exports=function(e){if("Symbol"===n(e))throw new TypeError("Cannot convert a Symbol value to a string");return r(e)}},98428:function(e){var t=TypeError;e.exports=function(e,a){if(e<a)throw new t("Not enough arguments");return e}},63307:function(e,t,a){var n=a(39528),r=a(65456),o=a(97167),u=a(98428),l=URLSearchParams,s=l.prototype,i=r(s.append),d=r(s["delete"]),c=r(s.forEach),p=r([].push),f=new l("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&n(s,"delete",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return d(this,e);var n=[];c(this,(function(e,t){p(n,{key:t,value:e})})),u(t,1);var r,l=o(e),s=o(a),f=0,m=0,v=!1,g=n.length;while(f<g)r=n[f++],v||r.key===l?(v=!0,d(this,r.key)):m++;while(m<g)r=n[m++],r.key===l&&r.value===s||i(this,r.key,r.value)}),{enumerable:!0,unsafe:!0})},43854:function(e,t,a){var n=a(39528),r=a(65456),o=a(97167),u=a(98428),l=URLSearchParams,s=l.prototype,i=r(s.getAll),d=r(s.has),c=new l("a=1");!c.has("a",2)&&c.has("a",void 0)||n(s,"has",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return d(this,e);var n=i(this,e);u(t,1);var r=o(a),l=0;while(l<n.length)if(n[l++]===r)return!0;return!1}),{enumerable:!0,unsafe:!0})},34817:function(e,t,a){var n=a(14508),r=a(65456),o=a(98202),u=URLSearchParams.prototype,l=r(u.forEach);n&&!("size"in u)&&o(u,"size",{get:function(){var e=0;return l(this,(function(){e++})),e},configurable:!0,enumerable:!0})}}]);