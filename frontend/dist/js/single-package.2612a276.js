(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["single-package"],{"71d3":function(t,e,s){"use strict";var i=s("9294"),a=s.n(i);a.a},"842a":function(t,e,s){},"8f2c":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"kyc"}},[t.isLoggingIn?s("Preloader"):t._e(),t.isLoggingIn?t._e():s("div",{staticClass:"container"},["/signup"===t.path?s("h2",{staticClass:"form-title"},[t._v("Verify your identity")]):s("h2",{staticClass:"form-title"},[t._v("Upload proof of payment")]),s("form",{staticClass:"register-form",on:{submit:function(e){return e.preventDefault(),t.runKyc(e)}}},[s("div",{staticClass:"form-group"},["/signup"===t.path?s("p",{staticClass:"text-center"},[t._v("Upload your passport image, national ID, or Driver's Licence")]):t._e(),s("br"),s("label",{staticClass:"form-submit"},[s("input",{attrs:{type:"file",id:"file-Input"},on:{change:t.preview}}),t._v(" Insert Image ")]),t._m(0)]),(t.path,s("div",{staticClass:"form-group form-button"},[s("button",{staticClass:"form-submit",attrs:{type:"submit"}},[t._v("Upload")])]))])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"imagepreview",attrs:{id:"image-Preview"}},[s("img",{staticClass:"imagepreview__image",attrs:{src:"",alt:"Image Preview"}}),s("span",{staticClass:"imagepreview__default-text"},[t._v("Image Preview")])])}],n=(s("b0c0"),s("f152")),o={components:{Preloader:n["a"]},data:function(){return{handyAttachments:[],isLoggingIn:!1,path:this.$route.path,invId:null}},computed:{initialSignupDetails:function(){return this.$store.getters["user/getInitialSignupDetails"]}},methods:{runKyc:function(){"/signup"===this.path?this.signup():this.uploadProofOfPayment()},signup:function(){var t=this,e=document.querySelector("#file-Input");console.log("kyc: ",e);var s=new FormData;s.append("name",this.initialSignupDetails.name),s.append("email",this.initialSignupDetails.email),s.append("password",this.initialSignupDetails.password),s.append("repeat_password",this.initialSignupDetails.repeat_password),s.append("kyc",e.files[0]),this.$store.dispatch("user/signup",s).then((function(e){e?(t.isLoggingIn=!1,console.log(e),t.$swal({icon:"error",title:"Signup Unsuccessful",toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,onOpen:function(e){e.addEventListener("mouseenter",t.$swal.stopTimer),e.addEventListener("mouseleave",t.$swal.resumeTimer)}})):(t.isLoggingIn=!1,t.$swal({position:"center",icon:"success",title:"Signup Successful",showConfirmButton:!1,timer:1500}),t.$router.push({path:"/login"}))}))},uploadProofOfPayment:function(){var t=this,e=document.querySelector("#file-Input");console.log("beans: ",e);var s=new FormData;s.append("paymentImg",e.files[0]),s.append("id",localStorage.getItem("deposit_id")),this.$store.dispatch("subscription/uploadProofOfPaymnent",s).then((function(e){e?(t.isLoggingIn=!1,console.log(e),t.$swal({icon:"error",title:"Upload Unsuccessful",toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,onOpen:function(e){e.addEventListener("mouseenter",t.$swal.stopTimer),e.addEventListener("mouseleave",t.$swal.resumeTimer)}})):(t.isLoggingIn=!1,t.$swal({position:"center",icon:"success",title:"Payment proof upload successful. Awaiting approval.",showConfirmButton:!1,timer:1500}),t.$router.push({path:"/investment-packages"}))}))},preview:function(){var t=document.getElementById("file-Input"),e=document.getElementById("image-Preview"),s=e.querySelector(".imagepreview__image"),i=e.querySelector(".imagepreview__default-text"),a=t.files[0],n=this;if(a){var o=new FileReader;i.style.display="none",s.style.display="block",o.addEventListener("load",(function(){s.setAttribute("src",this.result),n.$store.commit("setImgUrl",this.result),localStorage.setItem("imageUrl",this.result),console.log("result: ",this.result)})),o.readAsDataURL(a)}else i.style.display=null,s.style.display=null,s.setAttribute("src","")}}},r=o,l=(s("71d3"),s("2877")),c=Object(l["a"])(r,i,a,!1,null,"44c2e899",null);e["a"]=c.exports},9294:function(t,e,s){},"94cb":function(t,e,s){"use strict";var i=s("842a"),a=s.n(i);a.a},e284:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"top","data-spy":"scroll","data-target":".navbar-collapse","data-offset":"50"}},[s("TheHeader"),s("SinglePackage"),s("VueInjectJs",{attrs:{src:"/landing/js/jquery.js"}}),s("VueInjectJs",{attrs:{src:"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"}}),s("TheFooter")],1)},a=[],n=s("4663"),o=s.n(n),r=s("227e"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"testimonial"}},[t.kycReady?s("section",{attrs:{id:"testimonial"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-sm-12"},[s("KnowYourCustomer")],1)])])]):s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"row"},t._l(t.packages,(function(e){return s("div",{key:e.PackageId,staticClass:"col-md-4 col-sm-12"},[s("div",{staticClass:"feature-thumb"},[s("h4",[t._v(t._s(e.PackageName))]),s("hr"),s("div",[s("p",[t._v("Minimum Investment of "),s("strong",[t._v("$"+t._s(e.minprice))])]),s("p",[t._v("Maximum Investment of "),s("strong",[t._v("$"+t._s(e.maxprice))])])]),s("button",{staticClass:"section-btn btn btn-default smoothScroll",on:{click:function(s){return t.showForm(e.PackageName,e.name)}}},[t._v("Select"),s("i",{staticClass:"fa fa-angle-right"})])])])})),0),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-sm-12"},[s("button",{staticClass:"section-btn btn btn-default smoothScroll",on:{click:function(e){t.kycReady=!0}}},[t._v("Upload Proof of Payment"),s("i",{staticClass:"fa fa-angle-right"})])])])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-sm-12"},[s("div",{staticClass:"section-title"},[s("h2",[t._v("Select a subpackage")]),s("hr",{staticStyle:{"border-color":"gold"}})])])])}],u=s("8f2c"),p={components:{KnowYourCustomer:u["a"]},data:function(){return{kycReady:!1,routeId:this.$route.params.id}},computed:{packages:function(){return this.$store.getters["subscription/getPackage"]},btcAddress:function(){return this.$store.getters["subscription/getBtcAddress"]}},created:function(){this.$store.dispatch("subscription/getInvestmentPackage",this.routeId)},mounted:function(){console.log("package: ",this.package)},methods:{showForm:function(t,e){var s=this;this.$swal({title:"Input Amount",input:"text",showConfirmButton:!0,confirmButtonText:"Submit"}).then((function(i){if(i.value){var a=s.$swal.getInput().value;console.log("amount: ",a);var n=JSON.parse(localStorage.getItem("user"));s.$store.dispatch("subscription/createDeposit",{user_id:n.id,locked_deposit:a,total_deposit:a,package_level:t,package_name:e}).then((function(t){console.log("deposit data: ",t.data.data),localStorage.setItem("deposit_id",t.data.data)})).catch((function(t){return console.log(t)})),s.$swal({title:"BTC Address",text:"Make payment using BTC address, then upload proof of payment",input:"text",inputValue:s.btcAddress,inputAttributes:{disabled:!0},showConfirmButton:!0,confirmButtonText:"Copy BTC address"}).then((function(t){if(t.value){var e=s.$swal.getInput();e.select(),navigator.clipboard.writeText(e.value),s.$swal({position:"center",icon:"success",title:"Copied",showConfirmButton:!1,timer:1500})}}))}}))}}},d=p,m=(s("94cb"),s("2877")),g=Object(m["a"])(d,l,c,!1,null,"47f82aff",null),f=g.exports,v=s("07a3"),h={components:{VueInjectJs:o.a,TheHeader:r["a"],SinglePackage:f,TheFooter:v["a"]}},w=h,_=Object(m["a"])(w,i,a,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=single-package.2612a276.js.map