"use strict";(self["webpackChunkSensepedia"]=self["webpackChunkSensepedia"]||[]).push([[131],{50029:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var a=t(35206),u=t(58712),r=t(51465),o=t(37288),l=t(15400),i=t(28724),c=t(30882),s=t(79266),d=(t(91234),t(64536),t(20897),t(19382),t(58926),t(14898),t(29306),t(10348),t(81619),t(28694)),p=t(83487),g=t(38118),f=t(97913),v=t(32228),k=t(19477),h=t(74560),w=t(12567),b=t(59531),m=t(36981),A=t(52582),y=t(18684),L=t(94102),R=t(51832),z=t(26497),x=t(81329),T=t(34197),_=t(48467),K=t(98836),C=function(e){return(0,d.Qi)("data-v-575f63e2"),e=e(),(0,d.jt)(),e},F={class:"main-top"},W={class:"main-top-nav"},S=C((function(){return(0,d.Lk)("span",null,"<",-1)})),N=C((function(){return(0,d.Lk)("span",null,"< ",-1)})),X=C((function(){return(0,d.Lk)("span",null,"/",-1)})),I={key:2},V={key:5},E={key:6,class:"n-type"},Q={key:7},U={key:0,class:"main-top-batch"},B={class:"th-s-label"},P={class:"th-s-label"},D={class:"th-s-label"},H={class:"th-s"},j={class:"empty"},q=C((function(){return(0,d.Lk)("div",{class:"icon"},[(0,d.Lk)("img",{src:"/images/pk-nodata.png",width:"176",height:"115"})],-1)})),M={class:"actions"},O={class:"preview"},G={key:2,class:"footer"},Y=(0,d.pM)({__name:"detail",setup:function(e){var n=(0,v.s9)(),t=(n.locale,n.t),C=(0,K.rd)(),Y=(0,R.A)(),J=(Y.STATES,Y.TYPES),Z=Y.LANGS,$=Y.LangOptions,ee=(Y.StatusOptions,Y.TypeOptions),ne=Y.translateState,te=Y.queryState,ae=C.currentRoute.value.query.id,ue=(0,g.KR)(""),re=(0,g.KR)(1),oe=(0,d.EW)((function(){return ee[re.value].label})),le=(0,g.KR)(!1),ie=(0,g.KR)(!1),ce=(0,g.Kh)({knowledgeId:ae,knowledgeName:"",knowledgeType:""}),se=(0,g.KR)(0),de=(0,g.KR)(!1),pe=(0,g.KR)(!1),ge=(0,g.Kh)({reload:!0,loading:!1,list:[],pagination:{total:0,current:1,pageSize:10,sizes:[10,20,50,100,1e3],sizeChange:function(){},onChange:function(e){}}}),fe=(0,g.KR)([]),ve=(0,L.A)("/organize/knowledge/detail",function(){var e=(0,s.A)((0,c.A)().mark((function e(n,t){var a,u,r;return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return ge.loading=!0,n.knowledgeId=ae,n.associate=le.value?"0":"1",e.next=5,(0,_.r0)(n);case 5:a=e.sent,u=a.rows,r=u||[],ge.list=r.map((function(e){return e.docTags=(0,z.QV)(e.docTags||""),e.tags=""!==e.docTags?e.docTags.split(","):[],e.type=J[e.docType],e.lang=Z[e.docLang||"zh-cn"],e.translateState=ne(e.state,e.parserState),e})),setTimeout((function(){ge.list.map((function(e){return e.kdid&&Le.value.tableRef.toggleRowSelection(e,!0)}))})),ge.pagination={total:a.total||0,current:n.page,pageSize:n.perPage,sizes:[10,20,50,100,1e3],sizeChange:function(e){ge.reload=!1,Ke({perPage:e,page:1}),setTimeout((function(){return ge.reload=!0}),400)},onChange:function(e){return Ke({page:e})}},ge.loading=!1;case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),ke=ve.pushQuery,he=ve.queryParams,we=function(e){fe.value=e,e.length<ge.list.length&&!0===ie.value&&(ie.value=!1)},be=(0,d.EW)((function(){return 0===fe.value.length})),me=(0,d.EW)((function(){return 0===fe.value.length})),Ae=(0,g.KR)(!1),ye=((0,g.KR)(!1),(0,g.KR)(!1),(0,g.KR)(!1)),Le=(0,g.KR)(null),Re=((0,g.KR)(!1),(0,g.Kh)({id:0,name:"",lang:"",tags:[]}),(0,g.KR)(!1),(0,g.KR)({lang:"1",tags:[],type:"",files:[]}),(0,g.KR)(!1),(0,g.KR)(null),(0,g.Kh)({lang:[{required:!0,trigger:"change"}],name:[{required:!0,trigger:"blur"}],type:[{required:!0,trigger:"change"}]}),(0,g.Kh)({show:!1,uuid:"",history:{},sourceUrl:"",docName:""})),ze=((0,g.KR)([]),(0,g.Kh)({fileList:[],show:!1,success:0,fail:0,type:"expand"})),xe=((0,g.KR)("/preview/SampleQAData.xlsx"),(0,g.KR)(""),(0,g.KR)(!1),(0,g.KR)(),(0,g.KR)(["标签","长","常常常常","常常"])),Te=(0,g.Kh)([{label:"全部",value:"ALL"},{label:"医学",value:"医学"},{label:"财经",value:"财经"},{label:"保险",value:"保险"},{label:"其他",value:"其他"}]),_e=(0,g.Kh)({docName:"",docLang:"ALL",state:0,docType:"ALL",docTags:"ALL",associate:0}),Ke=((0,d.EW)((function(){return $.filter((function(e){return"ALL"!==e.value}))})),(0,d.EW)((function(){return ee.filter((function(e){return"ALL"!==e.value}))})),(0,d.EW)((function(){return Te.filter((function(e){return"ALL"!==e.value}))})),function(){var e=(0,s.A)((0,c.A)().mark((function e(n){var t;return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=(0,i.A)((0,i.A)((0,i.A)((0,i.A)({id:ae,knowledgeId:ae},_e),te(_e.state)),{},{perPage:ge.pagination.pageSize,page:ge.pagination.current},n),{},{refresh:(0,x.pr)(new Date)}),"ALL"===t.docLang&&delete t.docLang,"ALL"===t.docType&&delete t.docType,"ALL"===t.docTags&&delete t.docTags,delete t.state,delete t.parserState,ke(t),pe.value=!1;case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),Ce=function(){var e=(0,s.A)((0,c.A)().mark((function e(){return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return _e.docName="",_e.docLang="ALL",_e.state=0,_e.docType="ALL",_e.docTags="ALL",ie.value=!1,ge.reload=!1,e.next=9,Ke({page:1});case 9:pe.value=!1,setTimeout((function(){return ge.reload=!0}),400);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,d.nT)((function(){var e=[];he.value.categoryId&&he.value.categoryId.split(",").map((function(n){n&&e.push(Number(n))}));var n={keywords:he.value.keywords||"",category:e,datetime:he.value.startTime&&he.value.endTime?[he.value.startTime,he.value.endTime]:[],tags:he.value.tags};_e.name=n.keywords})),(0,d.nT)((function(){""!==_e.docName||"ALL"!==_e.docLang||"ALL"!==_e.docTags?pe.value=!0:pe.value=!1}));var Fe=function(){ie.value,Le.value.tableRef.toggleAllSelection()},We=function(){var e=(0,s.A)((0,c.A)().mark((function e(){var n;return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,_.r0)({perPage:10,page:1,knowledgeId:ae,associate:1});case 2:n=e.sent,n&&(se.value=+n.total);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=(0,s.A)((0,c.A)().mark((function e(){return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,We();case 2:0===se.value?k.s.confirm(t("page.organizes.knows.detail-selectHintDetail",{knowledgeName:ue.value}),t("page.organizes.docus.hint"),{confirmButtonText:t("page.organizes.docus.buttonSave"),cancelButtonText:t("page.organizes.docus.buttonDel"),cancelButtonClass:"el-button--danger",type:"warning"}).then((0,s.A)((0,c.A)().mark((function e(){return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:C.push({path:"/organize/knowledge"});case 1:case"end":return e.stop()}}),e)})))).catch((0,s.A)((0,c.A)().mark((function e(){return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.TF)({ids:ae});case 3:h.nk.success(t("page.organizes.knows.deleteSuccess")),C.push({path:"/organize/knowledge"}),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),h.nk.error((null===e.t0||void 0===e.t0?void 0:e.t0.msg)||e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))):C.push({path:"/organize/knowledge"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=function(){le.value=!1,_e.associate=1,Ke({}),We()},Xe=function(){ce.knowledgeName=ue.value,ce.knowledgeId=ae,ce.knowledgeType=re.value,de.value=!0,Ve=!1},Ie=!1,Ve=!1,Ee=function(){var e=(0,s.A)((0,c.A)().mark((function e(){var n;return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!Ie){e.next=3;break}return Ie=!1,e.abrupt("return");case 3:if(!Ve){e.next=5;break}return e.abrupt("return");case 5:return Ve=!0,e.next=8,(0,_.z6)({knowledgeName:ce.knowledgeName});case 8:if(n=e.sent,!n||500!==~~n.code){e.next=13;break}return h.nk.error("Duplicate Knowledge Base Name"),Ve=!1,e.abrupt("return");case 13:return e.next=15,(0,_.hc)(ce);case 15:ue.value=ce.knowledgeName,h.nk.success(t("page.organizes.successMessage")),de.value=!1;case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Qe=function(){Ie=!0,de.value=!1},Ue=function(){var e=(0,s.A)((0,c.A)().mark((function e(){var n;return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(fe.value=fe.value.filter((function(e){return 6===e.translateState})),0!==fe.value.length){e.next=4;break}return h.nk.error(t("page.organizes.docus.selectHint")),e.abrupt("return");case 4:n="<p>".concat(t("page.organizes.knows.detail-batchStopHintDetail"),"</p>"),k.s.confirm(n,t("page.organizes.docus.hint"),{dangerouslyUseHTMLString:!0,confirmButtonText:t("page.organizes.docus.buttonSubmit"),cancelButtonText:t("page.organizes.docus.buttonCancel"),type:"warning"}).then((0,s.A)((0,c.A)().mark((function e(){var n,a,u;return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Ae.value=!0,n=fe.value.map((function(e){return e.docId})),a=n.join(","),u={knowledgeId:ae,knowledgeName:ue.value,knowledgeType:re.value,documentIds:a},e.next=6,(0,_.sl)(u);case 6:e.sent,h.nk.success(t("page.organizes.successMessage")),Ae.value=!1,Ke({refresh:(0,x.pr)(new Date)});case 10:case"end":return e.stop()}}),e)})))).catch((function(){Ae.value=!1}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=(0,s.A)((0,c.A)().mark((function e(){return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:le.value=!0,_e.associate=0,Ke({});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Pe=function(){0!==fe.value.length?k.s.confirm(t("page.organizes.knows.detail-cancelHintDetail"),t("page.organizes.docus.hint"),{confirmButtonText:t("page.organizes.docus.buttonSubmit"),cancelButtonText:t("page.organizes.docus.buttonCancel"),type:"warning"}).then((0,s.A)((0,c.A)().mark((function e(){return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:le.value=!1,_e.associate=1,Ke({});case 3:case"end":return e.stop()}}),e)})))):(le.value=!1,_e.associate=1,Ke({}))},De=function(){var e=(0,s.A)((0,c.A)().mark((function e(){var n;return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!ye.value){e.next=2;break}return e.abrupt("return");case 2:return ye.value=!0,n=(0,i.A)({knowledgeId:ae,knowledgeName:ue.value,knowledgeType:re.value,documentIds:fe.value.map((function(e){return e.docId})).join(","),checkAll:ie.value},_e),"ALL"===n.docLang&&delete n.docLang,"ALL"===n.docType&&delete n.docType,"ALL"===n.docTags&&delete n.docTags,delete n.state,e.next=10,(0,_.hc)(n);case 10:e.sent,fe.value=[],ie.value=!1,ye.value=!1,Ke({}),h.nk.success(t("page.organizes.successMessage"));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),He=function(){var e=(0,s.A)((0,c.A)().mark((function e(n){return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:Re.show=!0,Re.uuid=n.docId,Re.sourceUrl=n.sourceFile,Re.docName=n.docName;case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),je=function(){var e=(0,s.A)((0,c.A)().mark((function e(n){var a;return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:a="<p>".concat(t("page.organizes.knows.detail-stopHintDetail"),"</p>"),k.s.confirm(a,t("page.organizes.docus.hint"),{dangerouslyUseHTMLString:!0,confirmButtonText:t("page.organizes.docus.buttonSubmit"),cancelButtonText:t("page.organizes.docus.buttonCancel"),type:"warning"}).then((0,s.A)((0,c.A)().mark((function e(){var t;return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.removeLoading=!0,t={knowledgeId:ae,knowledgeName:ue.value,knowledgeType:re.value,documentIds:n.docId},e.next=4,(0,_.sl)(t);case 4:return Ke({}),e.next=7,We();case 7:case"end":return e.stop()}}),e)})))).catch((function(){})),n.removeLoading=!1;case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),qe=function(e,n){return!e.kdid};(0,d.sV)((0,s.A)((0,c.A)().mark((function e(){return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Oe();case 2:Me();case 3:case"end":return e.stop()}}),e)})))),(0,d.hi)((function(){}));var Me=function(){(0,T.Q2)().then((function(e){xe.value=e.data,xe.value=["ALL"].concat((0,l.A)(xe.value))}))},Oe=function(){var e=(0,s.A)((0,c.A)().mark((function e(){var n;return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,_.P)(ae);case 2:n=e.sent,n&&n.data&&(ue.value=n.data.knowledgeName,re.value=n.data.knowledgeType);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ge=function(e,n){var t;return function(){for(var a=arguments.length,u=new Array(a),r=0;r<a;r++)u[r]=arguments[r];t&&clearTimeout(t),t=setTimeout((function(){e.apply(void 0,u)}),n)}},Ye=window.ResizeObserver;return window.ResizeObserver=function(e){function n(e){return(0,u.A)(this,n),e=Ge(e,100),(0,r.A)(this,n,[e])}return(0,o.A)(n,e),(0,a.A)(n)}(Ye),window.onbeforeunload=function(){if(ze.fileList.length)return t("page.organizes.docus.unload")},window.addEventListener("beforeunload",(function(e){ze.fileList.length&&(e.returnValue=t("page.organizes.docus.upload"))})),function(e,n){var a=(0,d.g2)("el-button"),u=(0,d.g2)("el-input"),r=(0,d.g2)("el-col"),o=(0,d.g2)("el-option"),l=(0,d.g2)("el-select"),i=(0,d.g2)("el-checkbox"),c=(0,d.g2)("el-row"),s=(0,d.g2)("el-table-column"),v=(0,d.g2)("el-tag"),k=(0,d.g2)("el-dialog"),h=(0,d.gN)("loading");return(0,d.uX)(),(0,d.CE)("div",{class:(0,p.C4)(["main",{"full-shrink":le.value}])},[(0,d.Lk)("div",F,[(0,d.Lk)("div",W,[le.value?((0,d.uX)(),(0,d.Wv)(a,{key:1,type:"text",onClick:Ne},{default:(0,d.k6)((function(){return[N,(0,d.eW)((0,p.v_)((0,g.R1)(t)("page.organizes.knows.detail-topNav")),1)]})),_:1})):((0,d.uX)(),(0,d.Wv)(a,{key:0,type:"text",onClick:Se},{default:(0,d.k6)((function(){return[S,(0,d.eW)(" "+(0,p.v_)((0,g.R1)(t)("page.organizes.knows.detail-topNav")),1)]})),_:1})),X,le.value||de.value?le.value?((0,d.uX)(),(0,d.Wv)(a,{key:4,type:"text",onClick:Ne},{default:(0,d.k6)((function(){return[(0,d.eW)((0,p.v_)(ue.value),1)]})),_:1})):((0,d.uX)(),(0,d.Wv)(u,{key:3,maxlength:"60",modelValue:ce.knowledgeName,"onUpdate:modelValue":n[0]||(n[0]=function(e){return ce.knowledgeName=e}),onBlur:Ee,onKeypress:(0,f.jR)(Ee,["enter"]),onKeydown:(0,f.jR)(Qe,["esc"])},null,8,["modelValue"])):((0,d.uX)(),(0,d.CE)("span",I,[(0,d.eW)((0,p.v_)(ue.value),1),(0,d.bF)((0,g.R1)(w.A),{type:"pk-editnormal",class:"n-edit",onClick:Xe})])),de.value?(0,d.Q3)("",!0):((0,d.uX)(),(0,d.CE)("span",V,"/")),le.value||de.value?le.value?((0,d.uX)(),(0,d.CE)("span",Q,(0,p.v_)((0,g.R1)(t)("page.organizes.knows.detail-publish")),1)):(0,d.Q3)("",!0):((0,d.uX)(),(0,d.CE)("span",E,(0,p.v_)(oe.value),1))]),le.value?(0,d.Q3)("",!0):((0,d.uX)(),(0,d.CE)("div",U,[(0,d.bF)(a,{type:"primary",onClick:Be},{icon:(0,d.k6)((function(){return[(0,d.bF)((0,g.R1)(w.A),{type:"pk-indb"})]})),default:(0,d.k6)((function(){return[(0,d.eW)(" "+(0,p.v_)((0,g.R1)(t)("page.organizes.knows.detail-batchPublish")),1)]})),_:1}),(0,d.bo)(((0,d.uX)(),(0,d.Wv)(a,{disabled:be.value,onClick:Ue},{icon:(0,d.k6)((function(){return[(0,d.bF)((0,g.R1)(w.A),{type:"pk-batchpublish"})]})),default:(0,d.k6)((function(){return[(0,d.eW)(" "+(0,p.v_)((0,g.R1)(t)("page.organizes.knows.detail-batchStop")),1)]})),_:1},8,["disabled"])),[[h,Ae.value]])]))]),ge.reload?((0,d.uX)(),(0,d.Wv)(b.A,{key:0,ref_key:"screenTableRef",ref:Le,"row-key":"docId",data:ge.list,loading:ge.loading,pagination:ge.pagination,onHandleSelection:we},(0,d.eX)({header:(0,d.k6)((function(){return[(0,d.bF)(c,{onKeydown:(0,f.jR)(Ke,["enter"])},{default:(0,d.k6)((function(){return[(0,d.bF)(r,{span:4},{default:(0,d.k6)((function(){return[(0,d.Lk)("span",B,(0,p.v_)((0,g.R1)(t)("page.organizes.docus.th-s-name")),1),(0,d.bF)(u,{class:"th-s-input",modelValue:_e.docName,"onUpdate:modelValue":n[1]||(n[1]=function(e){return _e.docName=e}),placeholder:(0,g.R1)(t)("page.organizes.docus.th-s-name-holder")},null,8,["modelValue","placeholder"])]})),_:1}),(0,d.bF)(r,{span:4,class:"text-align-right"},{default:(0,d.k6)((function(){return[(0,d.Lk)("span",P,(0,p.v_)((0,g.R1)(t)("page.organizes.docus.th-s-lang")),1),(0,d.bF)(l,{class:"th-s-input w200",modelValue:_e.docLang,"onUpdate:modelValue":n[2]||(n[2]=function(e){return _e.docLang=e})},{default:(0,d.k6)((function(){return[((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)((0,g.R1)($),(function(e){return(0,d.uX)(),(0,d.Wv)(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),(0,d.bF)(r,{span:4},{default:(0,d.k6)((function(){return[(0,d.Lk)("span",D,(0,p.v_)((0,g.R1)(t)("page.organizes.docus.th-s-tags")),1),(0,d.bF)(l,{class:"th-s-input",modelValue:_e.docTags,"onUpdate:modelValue":n[3]||(n[3]=function(e){return _e.docTags=e}),clearable:"",filterable:"","allow-create":"","default-first-option":"",placeholder:(0,g.R1)(t)("page.organizes.docus.th-s-tags-holder")},{default:(0,d.k6)((function(){return[((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(xe.value,(function(e){return(0,d.uX)(),(0,d.Wv)(o,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","placeholder"])]})),_:1}),le.value?((0,d.uX)(),(0,d.Wv)(r,{key:0,span:4},{default:(0,d.k6)((function(){return[pe.value?(0,d.Q3)("",!0):((0,d.uX)(),(0,d.Wv)(i,{key:0,disabled:pe.value,modelValue:ie.value,"onUpdate:modelValue":n[4]||(n[4]=function(e){return ie.value=e}),onChange:Fe},{default:(0,d.k6)((function(){return[(0,d.eW)((0,p.v_)((0,g.R1)(t)("page.organizes.knows.checkAll")),1)]})),_:1},8,["disabled","modelValue"]))]})),_:1})):(0,d.Q3)("",!0),(0,d.bF)(r,{span:le.value?8:12},{default:(0,d.k6)((function(){return[(0,d.Lk)("div",H,[(0,d.bF)(a,{class:"th-s-button color-huge border-huge",onClick:Ce},{icon:(0,d.k6)((function(){return[(0,d.bF)((0,g.R1)(w.A),{type:"pk-refresh"})]})),default:(0,d.k6)((function(){return[(0,d.eW)(" "+(0,p.v_)((0,g.R1)(t)("page.organizes.docus.th-s-reset")),1)]})),_:1}),(0,d.bF)(a,{class:"th-s-button",type:"primary",onClick:Ke},{icon:(0,d.k6)((function(){return[(0,d.bF)((0,g.R1)(w.A),{type:"pk-search"})]})),default:(0,d.k6)((function(){return[(0,d.eW)(" "+(0,p.v_)((0,g.R1)(t)("page.organizes.docus.th-s")),1)]})),_:1})])]})),_:1},8,["span"])]})),_:1})]})),default:(0,d.k6)((function(){return[(0,d.bF)(s,{type:"selection",width:"46",selectable:qe}),(0,d.bF)(s,{type:"index",width:"66",label:(0,g.R1)(t)("page.organizes.docus.tb-label-no")},null,8,["label"]),(0,d.bF)(s,{label:(0,g.R1)(t)("page.organizes.docus.tb-label-name"),prop:"docName","min-width":"240"},null,8,["label"]),(0,d.bF)(s,{label:(0,g.R1)(t)("page.organizes.docus.tb-label-lang"),prop:"lang",width:"200"},null,8,["label"]),(0,d.bF)(s,{label:(0,g.R1)(t)("page.organizes.docus.tb-label-tags"),width:"200"},{default:(0,d.k6)((function(e){var n=e.row;return[((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(n.tags,(function(e){return(0,d.uX)(),(0,d.Wv)(v,{class:"tag-tool",type:"info",key:e},{default:(0,d.k6)((function(){return[(0,d.bF)(y.A,{content:e,placement:"left"},null,8,["content"])]})),_:2},1024)})),128))]})),_:1},8,["label"]),(0,d.bF)(s,{label:(0,g.R1)(t)("page.organizes.docus.tb-label-createtime"),prop:"createTime",width:"200"},null,8,["label"]),(0,d.bF)(s,{label:(0,g.R1)(t)("page.organizes.docus.tb-label-updatetime"),prop:"updateTime",width:"200"},null,8,["label"]),(0,d.bF)(s,{fixed:"right",label:(0,g.R1)(t)("page.organizes.docus.tb-label-actions"),prop:"action",width:"240"},{default:(0,d.k6)((function(e){var n=e.row;return[(0,d.Lk)("div",M,[1===re.value?((0,d.uX)(),(0,d.Wv)(a,{key:0,class:"color-huge",type:"primary",text:"",onClick:function(e){return He(n)}},{default:(0,d.k6)((function(){return[(0,d.eW)((0,p.v_)((0,g.R1)(t)("page.organizes.knows.detail-actionPreview")),1)]})),_:2},1032,["onClick"])):(0,d.Q3)("",!0),le.value?(0,d.Q3)("",!0):((0,d.uX)(),(0,d.Wv)(a,{key:1,class:"color-huge",type:"primary",text:"",onClick:function(e){return je(n)},loading:n.removeLoading},{default:(0,d.k6)((function(){return[(0,d.eW)((0,p.v_)((0,g.R1)(t)("page.organizes.knows.detail-actionRemove")),1)]})),_:2},1032,["onClick","loading"]))])]})),_:1},8,["label"])]})),_:2},[le.value||ge.loading||0!==se.value?void 0:{name:"empty",fn:(0,d.k6)((function(){return[(0,d.Lk)("div",j,[q,(0,d.bF)(a,{type:"primary",onClick:Be},{icon:(0,d.k6)((function(){return[(0,d.bF)((0,g.R1)(w.A),{type:"pk-indb"})]})),default:(0,d.k6)((function(){return[(0,d.eW)(" "+(0,p.v_)((0,g.R1)(t)("page.organizes.knows.detail-batchPublish")),1)]})),_:1})])]})),key:"0"}]),1032,["data","loading","pagination"])):((0,d.uX)(),(0,d.Wv)(m.A,{key:1})),(0,d.bF)(k,{title:Re.docName,width:"50vw",modelValue:Re.show,"onUpdate:modelValue":n[5]||(n[5]=function(e){return Re.show=e})},{default:(0,d.k6)((function(){return[(0,d.Lk)("div",O,[(0,d.bF)(A.A,{uuid:Re.uuid,history:Re.history,sourceUrl:Re.sourceUrl},null,8,["uuid","history","sourceUrl"])])]})),_:1},8,["title","modelValue"]),le.value?((0,d.uX)(),(0,d.CE)("div",G,[(0,d.bF)(a,{type:"default",onClick:Pe},{default:(0,d.k6)((function(){return[(0,d.eW)((0,p.v_)((0,g.R1)(t)("page.organizes.knows.detail-actionCancel")),1)]})),_:1}),(0,d.bo)(((0,d.uX)(),(0,d.Wv)(a,{disabled:me.value&&!ie.value,type:"primary",onClick:De},{default:(0,d.k6)((function(){return[(0,d.eW)((0,p.v_)((0,g.R1)(t)("page.organizes.knows.detail-actionPublish")),1)]})),_:1},8,["disabled"])),[[h,ye.value]])])):(0,d.Q3)("",!0)],2)}}}),J=t(83940);const Z=(0,J.A)(Y,[["__scopeId","data-v-575f63e2"]]);var $=Z},51465:function(e,n,t){t.d(n,{A:function(){return o}});t(70585);var a=t(7491),u=t(23625),r=t(47870);function o(e,n,t){return n=(0,a.A)(n),(0,r.A)(e,(0,u.A)()?Reflect.construct(n,t||[],(0,a.A)(e).constructor):n.apply(e,t))}}}]);