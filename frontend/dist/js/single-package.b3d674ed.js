(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["single-package"],{e284:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.kycReady?s("KnowYourCustomer"):s("div",[s("TheHeader"),t._m(0),s("div",{staticClass:"content"},[s("div",{staticClass:"container"},[t._m(1),s("div",{staticClass:"row"},[s("div",{staticClass:"offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12"},[s("div",{staticClass:"row"},t._l(t.packages,(function(e){return s("div",{key:e.PackageId,staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mx-auto"},[s("div",{staticClass:"post-block"},[s("div",{staticClass:"post-content text-center"},[s("h2",{staticClass:"post-title"},[s("a",{staticClass:"title",attrs:{href:"#"}},[t._v(t._s(e.PackageName))])]),s("hr"),s("p",[t._v("Minimum Investment 0f $"+t._s(e.minprice))]),s("p",[t._v("Maximum Investment 0f $"+t._s(e.maxprice))]),s("a",{staticClass:"btn btn-default",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.showForm(e.PackageName,e.name)}}},[t._v("Get Started")])])])])})),0),s("hr")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mx-auto"},[s("a",{staticClass:"btn btn-default",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.kycReady=!0}}},[t._v("Upload proof of payment")])])])])])])]),s("TheFooter")],1)],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-header invest-header"},[s("div",{staticClass:"other-overlay"}),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[s("div",{staticClass:"page-caption"})])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row "},[s("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "},[s("div",{staticClass:"section-title text-center"},[s("h2",[t._v("Select a subpackage")])])])])}],c=s("227e"),i=s("07a3"),l=s("8f2c"),n={components:{TheHeader:c["a"],TheFooter:i["a"],KnowYourCustomer:l["a"]},data:function(){return{kycReady:!1,routeId:this.$route.params.id}},computed:{packages:function(){return this.$store.getters["subscription/getPackage"]},btcAddress:function(){return this.$store.getters["subscription/getBtcAddress"]}},created:function(){this.$store.dispatch("subscription/getInvestmentPackage",this.routeId)},mounted:function(){console.log("package: ",this.btcAddress)},methods:{showForm:function(t,e){var s=this;this.$swal({title:"Input Amount",input:"text",showConfirmButton:!0,confirmButtonText:"Submit"}).then((function(a){if(a.value){var o=s.$swal.getInput().value;console.log("amount: ",o);var c=JSON.parse(localStorage.getItem("user"));s.$store.dispatch("subscription/createDeposit",{user_id:c.id,initial_deposit:+o,package_level:t,package_name:e}).then((function(t){console.log("deposit data: ",t.data.data),localStorage.setItem("deposit_id",t.data.data)})).catch((function(t){return console.log(t)})),s.$swal({title:"BTC Address",text:"Make payment using BTC address, then upload proof of payment",input:"text",inputValue:s.btcAddress,inputAttributes:{disabled:!0},showConfirmButton:!0,confirmButtonText:"Copy BTC address"}).then((function(t){if(t.value){var e=s.$swal.getInput();e.select(),navigator.clipboard.writeText(e.value),s.$swal({position:"center",icon:"success",title:"Copied",showConfirmButton:!1,timer:1500})}}))}}))}}},r=n,d=s("2877"),u=Object(d["a"])(r,a,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=single-package.b3d674ed.js.map