(window.webpackJsonp=window.webpackJsonp||[]).push([[38,25,31,34],{509:function(t,e,n){"use strict";n.r(e);var r={name:"LayoutH2"},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[n("div",{staticClass:"max-w-4xl mx-auto text-center"},[n("h2",{staticClass:"text-3xl font-extrabold text-gray-900 sm:text-4xl"},[t._t("title")],2),t._v(" "),t.$slots.text?n("p",{staticClass:"mt-3 text-xl text-gray-500 sm:mt-4"},[t._t("text")],2):t._e()])])}),[],!1,null,"d135b782",null);e.default=component.exports},510:function(t,e,n){"use strict";n.r(e);var r={name:"NumberObj",props:["valueObj"]},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v("\n  "+t._s(t.valueObj.d)),n("span",{directives:[{name:"show",rawName:"v-show",value:t.valueObj.f,expression:"valueObj.f"}],staticClass:"number-f"},[t._v("."+t._s(t.valueObj.f))])])}),[],!1,null,null,null);e.default=component.exports},515:function(t,e,n){t.exports=n.p+"img/spinner-gray.a51bfce.svg"},516:function(t,e,n){t.exports=n.p+"img/spinner-blue.f7f11e6.svg"},517:function(t,e,n){"use strict";n.r(e);var r={name:"TxInfo",props:["status","hash","confirmation","message"],computed:{txInfoClassArr:function(){var t=["tx-info"];return 0===this.status?t.push("tx-info-pending"):1===this.status?t.push("tx-info-confirming"):2===this.status?t.push("tx-info-success"):this.status>2&&t.push("tx-info-error"),t},statusDisplay:function(){return 0===this.status?this.$t("ether.tx.Pending"):1===this.status?this.$t("ether.tx.Confirming")+" ... "+this.confirmation+" "+this.$t("ether.tx.blocks"):2===this.status?this.$t("ether.tx.Success")+" ... "+this.confirmation+" "+this.$t("ether.tx.blocks"):this.status>2?this.$t("ether.tx.Error"):void 0},hashDisplay:function(){return this.hash?this.hash:"..."}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:"number"==typeof t.status&&t.status>-1,expression:"typeof status === 'number' && status > -1"}],staticClass:"space-x-2",class:t.txInfoClassArr},[r("div",{staticClass:"w-1/4 flex items-center justify-center"},[0===t.status?r("img",{staticClass:"w-20 h-20",attrs:{src:n(515),alt:"spinner"}}):1===t.status?r("img",{staticClass:"w-20 h-20",attrs:{src:n(516),alt:"spinner"}}):2===t.status?r("fa",{staticClass:"mx-5 fa-3x",attrs:{icon:["fas","check-square"]}}):t.status>2?r("fa",{staticClass:"mx-5 fa-3x",attrs:{icon:["fas","times-circle"]}}):t._e()],1),t._v(" "),r("div",{staticClass:"w-full py-3"},[r("div",{staticClass:"tx-title"},[t._v("\n      "+t._s(t.statusDisplay)+"\n    ")]),t._v(" "),t.hash?r("div",{staticClass:"tx-hash"},[t._v("\n      "+t._s(t.hash)+"\n    ")]):t._e(),t._v(" "),t.message?r("div",{staticClass:"tx-message"},[t._v("\n      "+t._s(t.message)+"\n    ")]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},644:function(t,e,n){"use strict";n.r(e);var r=n(1),o=(n(15),n(16),n(55),n(56),n(11)),c=n.n(o),v=n(0),d={name:"V12Upgrade",data:function(){return{showV1UpgradeBtn:!0,txV1UpgradeStatus:-1,txV1UpgradeHash:null,txV1UpgradeConfirmation:0,txV1UpgradeMessage:null,showV2UpgradeBtn:!0,txV2UpgradeStatus:-1,txV2UpgradeHash:null,txV2UpgradeConfirmation:0,txV2UpgradeMessage:null}},computed:{status:function(){return this.$store.state.vokenResale.status},account:function(){return this.$store.state.vokenResale.account},capReached:function(){return this.status.processInPercentObj.d>="100"&&0===this.account.v1.resale.timestamp&&0===this.account.v1.upgrade.timestamp&&0===this.account.v2.resale.timestamp&&0===this.account.v2.upgrade.timestamp},capReachedAndOnlyResale:function(){return this.capReached&&(this.v1UpgradeAllowed||this.v2UpgradeAllowed)},showUpgrade:function(){return this.capReached?this.account.v1.resale.timestamp>0||this.account.v2.resale.timestamp>0:this.showV1Upgrade||this.showV2Upgrade},showV1Upgrade:function(){return this.account.v1.balance>"0"&&0===this.account.v1.resale.timestamp},showV2Upgrade:function(){return this.account.v2.balance>"0"&&0===this.account.v2.resale.timestamp},v1UpgradeAllowed:function(){return this.account.v1.balance>"0"&&0===this.account.v1.upgrade.timestamp&&0===this.account.v1.resale.timestamp},v2UpgradeAllowed:function(){return this.account.v2.balance>"0"&&0===this.account.v2.upgrade.timestamp&&0===this.account.v2.resale.timestamp},v1UsdUpgrade:function(){return new c.a(this.account.v1.weiAudit).multipliedBy(this.account.v1.upgrade.etherUSDPrice).div(Math.pow(10,18)).toString()},v1UsdUpgradeStr:function(){return v.a.ns2Str(this.v1UsdUpgrade,6)},v1UsdUpgradeObj:function(){return v.a.ns2Obj(this.v1UsdUpgradeStr)},v2UsdUpgrade:function(){return new c.a(this.account.v2.weiAudit).multipliedBy(this.account.v2.upgrade.etherUSDPrice).div(Math.pow(10,18)).toString()},v2UsdUpgradeStr:function(){return v.a.ns2Str(this.v2UsdUpgrade,6)},v2UsdUpgradeObj:function(){return v.a.ns2Obj(this.v2UsdUpgradeStr)}},methods:{v1Upgrade:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showV1UpgradeBtn=!1,t.txV1UpgradeStatus=0,t.txV1UpgradeMessage=null,e.next=5,t.$store.state.vokenResale.contract().methods.applyV1Upgrade().send({from:t.$store.state.ether.account}).on("transactionHash",t.onV1UpgradeTransactionHash).on("receipt",t.onV1UpgradeReceipt).on("confirmation",t.onV1UpgradeConfirmation).on("error",t.onV1UpgradeError).catch(t.onV1UpgradeError);case 5:case"end":return e.stop()}}),e)})))()},onV1UpgradeTransactionHash:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txV1UpgradeStatus=0,e.txV1UpgradeHash=t;case 2:case"end":return n.stop()}}),n)})))()},onV1UpgradeReceipt:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txV1UpgradeMessage=null,t.status?e.txV1UpgradeStatus=1:e.txV1UpgradeStatus=3;case 2:case"end":return n.stop()}}),n)})))()},onV1UpgradeConfirmation:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e.txV1UpgradeStatus<3&&t<9)){n.next=11;break}if(!(t<6)){n.next=5;break}e.txV1UpgradeStatus=1,n.next=10;break;case 5:return e.txV1UpgradeStatus=2,n.next=8,e.$store.dispatch("vokenUpgrade/SYNC_ACCOUNT");case 8:return n.next=10,e.$store.dispatch("vokenUpgrade/SYNC_ACCOUNT_V1_UPGRADE");case 10:e.txV1UpgradeConfirmation=t;case 11:case"end":return n.stop()}}),n)})))()},onV1UpgradeError:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txV1UpgradeStatus=3,e.txV1UpgradeMessage=t.message,e.showV1UpgradeBtn=!0;case 3:case"end":return n.stop()}}),n)})))()},v2Upgrade:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showV2UpgradeBtn=!1,t.txV2UpgradeStatus=0,t.txV2UpgradeMessage=null,e.next=5,t.$store.state.vokenResale.contract().methods.applyV2Upgrade().send({from:t.$store.state.ether.account}).on("transactionHash",t.onV2UpgradeTransactionHash).on("receipt",t.onV2UpgradeReceipt).on("confirmation",t.onV2UpgradeConfirmation).on("error",t.onV2UpgradeError).catch(t.onV2UpgradeError);case 5:case"end":return e.stop()}}),e)})))()},onV2UpgradeTransactionHash:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txV2UpgradeStatus=0,e.txV2UpgradeHash=t;case 2:case"end":return n.stop()}}),n)})))()},onV2UpgradeReceipt:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txV2UpgradeMessage=null,t.status?e.txV2UpgradeStatus=1:e.txV2UpgradeStatus=3;case 2:case"end":return n.stop()}}),n)})))()},onV2UpgradeConfirmation:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e.txV2UpgradeStatus<3&&t<9)){n.next=11;break}if(!(t<6)){n.next=5;break}e.txV2UpgradeStatus=1,n.next=10;break;case 5:return e.txV2UpgradeStatus=2,n.next=8,e.$store.dispatch("vokenUpgrade/SYNC_ACCOUNT");case 8:return n.next=10,e.$store.dispatch("vokenUpgrade/SYNC_ACCOUNT_V2_UPGRADE");case 10:e.txV2UpgradeConfirmation=t;case 11:case"end":return n.stop()}}),n)})))()},onV2UpgradeError:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txV2UpgradeStatus=3,e.txV2UpgradeMessage=t.message,e.showV2UpgradeBtn=!0;case 3:case"end":return n.stop()}}),n)})))()}}},l=n(7),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-16"},[n("div",{staticClass:"resp-wide"},[n("layout-h2",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        "+t._s(t.$t("v12.Option2__"))+"\n      ")]},proxy:!0},{key:"text",fn:function(){return[t._v("\n        "+t._s(t.$t("v12.Upgrade_to_VokenTB"))+"\n      ")]},proxy:!0}])}),t._v(" "),n("article",{staticClass:"resp-mt prose lg:prose-lg xl:prose-xl max-w-none"},[n("p",[t._v("\n        "+t._s(t.$t("v12.By_upgrading__"))+"\n      ")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.account.v1.resale.timestamp>0,expression:"account.v1.resale.timestamp > 0"}],staticClass:"font-bold text-orange-600"},[t._v("\n        Voken1.0: "+t._s(t.$t("v12.You_have_applied_to_RESALE_at"))+"\n        "+t._s(t.$moment(1e3*t.account.v1.resale.timestamp).format("YYYY-MM-DD HH:mm:ss"))+",\n        "+t._s(t.$t("v12.for"))+"\n        "),n("number-obj",{attrs:{"value-obj":t.account.v1.resale.usdAuditObj}}),t._v(" USD(DAI).\n      ")],1),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.account.v2.resale.timestamp>0,expression:"account.v2.resale.timestamp > 0"}],staticClass:"font-bold text-orange-600"},[t._v("\n        Voken2.0: "+t._s(t.$t("v12.You_have_applied_to_RESALE_at"))+"\n        "+t._s(t.$moment(1e3*t.account.v2.resale.timestamp).format("YYYY-MM-DD HH:mm:ss"))+",\n        "+t._s(t.$t("v12.for"))+"\n        "),n("number-obj",{attrs:{"value-obj":t.account.v2.resale.usdAuditObj}}),t._v(" USD(DAI).\n      ")],1),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.account.canOnlyResale,expression:"account.canOnlyResale"}],staticClass:"font-bold break-all"},[t._v("\n        "+t._s(t.$t("v12.You_can_only_apply_for_resale_"))+"\n        (Address "),n("span",{staticClass:"font-mono"},[t._v(t._s(t.$store.state.ether.account))]),t._v(")\n      ")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.account.canOnlyResale&&t.capReachedAndOnlyResale,expression:"!account.canOnlyResale && capReachedAndOnlyResale"}],staticClass:"font-bold"},[n("number-obj",{attrs:{"value-obj":t.status.processInPercentObj}}),t._v("\n        %\n        "+t._s(t.$t("v12.of_total"))+" 21,000,000 VokenTB "+t._s(t.$t("v12.upgraded"))+".\n        "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.status.processInPercentObj.d>="100",expression:"status.processInPercentObj.d >= '100'"}]},[t._v("\n          "+t._s(t.$t("v12.Cap_reached_"))+"\n        ")]),t._v("\n        "+t._s(t.$t("v12.You_can_only_apply_for_resale_"))+"\n      ")],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showUpgrade&&!t.account.canOnlyResale,expression:"showUpgrade && !account.canOnlyResale"}],staticClass:"audited"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showV1Upgrade,expression:"showV1Upgrade"}],staticClass:"audited-wrapper"},[n("div",{staticClass:"audited-header"},[t._v("\n          Voken1.0\n        ")]),t._v(" "),n("dl",{staticClass:"audited-body"},[n("div",[n("dt",[t._v("\n              "+t._s(t.$t("v12.Holding__"))+"\n            ")]),t._v(" "),n("dd",[n("number-obj",{attrs:{"value-obj":t.account.v1.balanceObj}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n                Voken1.0\n              ")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.account.v1.weiAudit>"0",expression:"account.v1.weiAudit > '0'"}]},[n("dt",[t._v("\n              "+t._s(t.$t("v12.Audited_Cost"))+"\n            ")]),t._v(" "),n("dd",[n("number-obj",{attrs:{"value-obj":t.account.v1.weiAuditObj}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n                ETH\n              ")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.v1UsdUpgrade>"0",expression:"v1UsdUpgrade > '0'"}]},[n("dt",[n("p",[t._v("\n                "+t._s(t.$t("v12.You"))+"\n                "),t.account.v1.upgrade.timestamp?n("span",[t._v(t._s(t.$t("v12.have_used")))]):n("span",[t._v(t._s(t.$t("v12.can_used")))]),t._v("\n                "+t._s(t.$t("v12.the_ETH_as"))+"\n              ")]),t._v(" "),n("p",[t._v("\n                $\n                "),n("number-obj",{attrs:{"value-obj":t.account.v1.upgrade.etherUSDPriceObj}}),t._v("\n                x\n                "),n("number-obj",{attrs:{"value-obj":t.account.v1.weiAuditObj}}),t._v("\n                =\n              ")],1)]),t._v(" "),n("dd",[n("number-obj",{attrs:{"value-obj":t.v1UsdUpgradeObj}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n                USD(DAI)\n              ")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.v1UsdUpgrade>"0",expression:"v1UsdUpgrade > '0'"}]},[n("dt",[n("p",[t._v("\n                "+t._s(t.$t("v12.for_upgrading_to"))+"\n              ")]),t._v(" "),n("p",[t._v("\n                $\n                "),n("number-obj",{attrs:{"value-obj":t.v1UsdUpgradeObj}}),t._v("\n                /\n                "),n("number-obj",{attrs:{"value-obj":t.account.v1.upgrade.vokenUSDPriceObj}}),t._v("\n                =\n              ")],1)]),t._v(" "),n("dd",[n("number-obj",{attrs:{"value-obj":t.account.v1.upgrade.claimObj}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n                VokenTB\n              ")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.v1UsdUpgrade>"0",expression:"v1UsdUpgrade > '0'"}]},[n("dt",[t._v("\n              "+t._s(t.$t("v12.with_an_additional_bonus"))+"\n            ")]),t._v(" "),n("dd",[n("number-obj",{attrs:{"value-obj":t.account.v1.upgrade.bonusObj}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n                VokenTB\n              ")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.v1UsdUpgrade>"0",expression:"v1UsdUpgrade > '0'"}]},[n("dt",[t._v("\n              "+t._s(t.$t("v12.totally"))+"\n            ")]),t._v(" "),n("dd",[n("number-obj",{attrs:{"value-obj":t.account.v1.upgrade.summedObj}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n                VokenTB\n              ")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.v1UpgradeAllowed&&t.showV1UpgradeBtn,expression:"v1UpgradeAllowed && showV1UpgradeBtn"}]},[n("button",{staticClass:"mt-2 w-full btn btn-pink justify-center py-2 text-lg",on:{click:t.v1Upgrade}},[t._v("\n              "+t._s(t.$t("v12.Apply_to_Upgrade"))+"\n            ")])]),t._v(" "),n("tx-info",{staticClass:"mt-4 mb-2",attrs:{status:t.txV1UpgradeStatus,hash:t.txV1UpgradeHash,confirmation:t.txV1UpgradeConfirmation,message:t.txV1UpgradeMessage}})],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showV2Upgrade,expression:"showV2Upgrade"}],staticClass:"audited-wrapper"},[n("div",{staticClass:"audited-header"},[t._v("\n          Voken2.0\n        ")]),t._v(" "),n("dl",{staticClass:"audited-body"},[n("div",[n("dt",[t._v("\n              "+t._s(t.$t("v12.Holding__"))+"\n            ")]),t._v(" "),n("dd",[n("number-obj",{attrs:{"value-obj":t.account.v2.balanceObj}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n                Voken2.0\n              ")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.account.v2.weiAudit>"0",expression:"account.v2.weiAudit > '0'"}]},[n("dt",[t._v("\n              "+t._s(t.$t("v12.Audited_Cost"))+"\n            ")]),t._v(" "),n("dd",[n("number-obj",{attrs:{"value-obj":t.account.v2.weiAuditObj}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n                ETH\n              ")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.v2UsdUpgrade>"0",expression:"v2UsdUpgrade > '0'"}]},[n("dt",[n("p",[t._v("\n                "+t._s(t.$t("v12.You"))+"\n                "),t.account.v2.upgrade.timestamp?n("span",[t._v(t._s(t.$t("v12.have_used")))]):n("span",[t._v(t._s(t.$t("v12.can_used")))]),t._v("\n                "+t._s(t.$t("v12.the_ETH_as"))+"\n              ")]),t._v(" "),n("p",[t._v("\n                $\n                "),n("number-obj",{attrs:{"value-obj":t.account.v2.upgrade.etherUSDPriceObj}}),t._v("\n                x\n                "),n("number-obj",{attrs:{"value-obj":t.account.v2.weiAuditObj}}),t._v("\n                =\n              ")],1)]),t._v(" "),n("dd",[n("number-obj",{attrs:{"value-obj":t.v2UsdUpgradeObj}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n                USD(DAI)\n              ")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.v2UsdUpgrade>"0",expression:"v2UsdUpgrade > '0'"}]},[n("dt",[n("p",[t._v("\n                "+t._s(t.$t("v12.for_upgrading_to"))+"\n              ")]),t._v(" "),n("p",[t._v("\n                $\n                "),n("number-obj",{attrs:{"value-obj":t.v2UsdUpgradeObj}}),t._v("\n                /\n                "),n("number-obj",{attrs:{"value-obj":t.account.v2.upgrade.vokenUSDPriceObj}}),t._v("\n                =\n              ")],1)]),t._v(" "),n("dd",[n("number-obj",{attrs:{"value-obj":t.account.v2.upgrade.claimObj}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n                VokenTB\n              ")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.v2UsdUpgrade>"0",expression:"v2UsdUpgrade > '0'"}]},[n("dt",[t._v("\n              "+t._s(t.$t("v12.with_an_additional_bonus"))+"\n            ")]),t._v(" "),n("dd",[n("number-obj",{attrs:{"value-obj":t.account.v2.upgrade.bonusObj}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n                VokenTB\n              ")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.v2UsdUpgrade>"0",expression:"v2UsdUpgrade > '0'"}]},[n("dt",[t._v("\n              "+t._s(t.$t("v12.totally"))+"\n            ")]),t._v(" "),n("dd",[n("number-obj",{attrs:{"value-obj":t.account.v2.upgrade.summedObj}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n                VokenTB\n              ")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.v2UpgradeAllowed&&t.showV2UpgradeBtn,expression:"v2UpgradeAllowed && showV2UpgradeBtn"}]},[n("button",{staticClass:"mt-2 w-full btn btn-pink justify-center py-2 text-lg",on:{click:t.v2Upgrade}},[t._v("\n              "+t._s(t.$t("v12.Apply_to_Upgrade"))+"\n            ")])]),t._v(" "),n("tx-info",{staticClass:"mt-4 mb-2",attrs:{status:t.txV2UpgradeStatus,hash:t.txV2UpgradeHash,confirmation:t.txV2UpgradeConfirmation,message:t.txV2UpgradeMessage}})],1)])]),t._v(" "),n("article",{directives:[{name:"show",rawName:"v-show",value:!t.capReached&&!t.account.canOnlyResale,expression:"!capReached && !account.canOnlyResale"}],staticClass:"resp-mt prose lg:prose-lg xl:prose-xl max-w-none"},[n("h3",[t._v("\n        "+t._s(t.$t("v12.Vesting_plan"))+"\n      ")]),t._v(" "),n("p",[t._v("\n        "+t._s(t.$t("v12.All_Voken_upgraded__"))+"\n        "),n("nuxt-link",{attrs:{to:t.localePath("/voken/public-sale")}},[t._v("\n          "+t._s(t.$t("voken.Public_Sale"))+"\n        ")]),t._v("\n        "+t._s(t.$t("v12.finished__then_release__daily"))+"\n      ")],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutH2:n(509).default,NumberObj:n(510).default,TxInfo:n(517).default})}}]);