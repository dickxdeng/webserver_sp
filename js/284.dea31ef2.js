"use strict";(self["webpackChunkCustomsPedia"]=self["webpackChunkCustomsPedia"]||[]).push([[284],{75284:function(e,s,t){t.r(s),t.d(s,{default:function(){return w}});t(14898);var a=t(28694),u=t(83487),n=t(38118),l=t(32228),o=t(35733),c=t(98836),i=t(74913);const m={class:"layout-main-content"},r={class:"layer"},d={class:"row"},g=["onClick"],k={class:"title"},v={key:0,class:"desc"};var h=(0,a.pM)({__name:"index",setup(e){const s=(0,c.rd)(),t=(0,i.Pj)(),{t:h}=(0,l.s9)(),{ROLE_KEY:p}=(0,o.A)(),w=(0,a.EW)((()=>t.state.user.currentUser.roleKey===p.superadmin)),y=(0,a.EW)((()=>t.state.user.currentUser.menu));t.commit("global/setQiankunViewStyle","none"),t.commit("global/setMenuEnable",!1);const b=(0,n.KR)([{svg:"pk-homeqa",class:"qa",title:"layout.menu.qa",desc:"layout.menu.qa.desc",href:"/qa",bg:"/images/pk-homeqa.svg"},{svg:"pk-homedocument",class:"document",title:"layout.menu.document",desc:"layout.menu.document.desc",href:"/document",bg:"/images/pk-homedocument.svg"},{svg:"pk-homeknowledge",class:"knowledge",title:"layout.menu.knowledge",desc:"layout.menu.knowledge.desc",href:"/knowledge",bg:"/images/home-know.png"},{svg:"pk-homewait",class:"gray wait",title:"layout.menu.wait",desc:"",href:"",bg:"/images/home-wait.png"}]),f=()=>{y.value&&y.value.length>0?b.value=b.value.filter((e=>""===e.href||y.value.map((e=>e.path)).includes(e.href))):setTimeout((()=>f()),400)};w.value||f();const C=e=>{""!==e&&s.push({path:e})};return(e,s)=>((0,a.uX)(),(0,a.CE)("div",m,[(0,a.Lk)("div",r,[(0,a.Lk)("div",d,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(b.value,((e,s)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,u.C4)(["row-item",e.class]),style:(0,u.Tr)({background:`url(${e.bg}) no-repeat`,backgroundPosition:"right bottom"}),onClick:s=>C(e.href),key:s},[(0,a.Lk)("div",k,(0,u.v_)((0,n.R1)(h)(e.title)),1),e.desc?((0,a.uX)(),(0,a.CE)("div",v,(0,u.v_)((0,n.R1)(h)(e.desc)),1)):(0,a.Q3)("",!0)],14,g)))),128))])])]))}});const p=h;var w=p}}]);