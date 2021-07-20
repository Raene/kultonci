(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["investment~signup~signupwithref~single-package"],{"0cb2":function(e,t,n){var r=n("7b0b"),o=Math.floor,i="".replace,a=/\$([$&'`]|\d\d?|<[^>]*>)/g,s=/\$([$&'`]|\d\d?)/g;e.exports=function(e,t,n,u,c,l){var f=n+e.length,p=u.length,h=s;return void 0!==c&&(c=r(c),h=a),i.call(l,h,(function(r,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(f);case"<":a=c[i.slice(1,-1)];break;default:var s=+i;if(0===s)return r;if(s>p){var l=o(s/10);return 0===l?r:l<=p?void 0===u[l-1]?i.charAt(1):u[l-1]+i.charAt(1):r}a=u[s-1]}return void 0===a?"":a}))}},"14c3":function(e,t,n){var r=n("c6b6"),o=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"222a":function(e,t,n){},2532:function(e,t,n){"use strict";var r=n("23e7"),o=n("5a34"),i=n("1d80"),a=n("ab13");r({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~String(i(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},2663:function(e,t,n){"use strict";n("222a")},"44e7":function(e,t,n){var r=n("861d"),o=n("c6b6"),i=n("b622"),a=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==o(e))}},5319:function(e,t,n){"use strict";var r=n("d784"),o=n("825a"),i=n("50c4"),a=n("a691"),s=n("1d80"),u=n("8aa5"),c=n("0cb2"),l=n("14c3"),f=Math.max,p=Math.min,h=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var d=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,_=r.REPLACE_KEEPS_$0,g=d?"$":"$0";return[function(n,r){var o=s(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,o,r):t.call(String(o),n,r)},function(e,r){if(!d&&_||"string"===typeof r&&-1===r.indexOf(g)){var s=n(t,e,this,r);if(s.done)return s.value}var v=o(e),m=String(this),b="function"===typeof r;b||(r=String(r));var y=v.global;if(y){var w=v.unicode;v.lastIndex=0}var R=[];while(1){var k=l(v,m);if(null===k)break;if(R.push(k),!y)break;var x=String(k[0]);""===x&&(v.lastIndex=u(m,i(v.lastIndex),w))}for(var T="",S=0,O=0;O<R.length;O++){k=R[O];for(var P=String(k[0]),E=f(p(a(k.index),m.length),0),C=[],U=1;U<k.length;U++)C.push(h(k[U]));var A=k.groups;if(b){var I=[P].concat(C,E,m);void 0!==A&&I.push(A);var D=String(r.apply(void 0,I))}else D=c(P,m,E,C,A,r);E>=S&&(T+=m.slice(S,E)+D,S=E+P.length)}return T+m.slice(S)}]}))},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},6547:function(e,t,n){var r=n("a691"),o=n("1d80"),i=function(e){return function(t,n){var i,a,s=String(o(t)),u=r(n),c=s.length;return u<0||u>=c?e?"":void 0:(i=s.charCodeAt(u),i<55296||i>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?e?s.charAt(u):i:e?s.slice(u,u+2):a-56320+(i-55296<<10)+65536)}};e.exports={codeAt:i(!1),charAt:i(!0)}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8f2c":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-section no-scroll wow fadeInUp"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center mt-5"},[n("div",{staticClass:"col-lg-10"},[e.path.includes("signup")?n("h2",{staticClass:"form-title text-center"},[e._v("Verify your identity")]):n("h2",{staticClass:"form-title text-center",staticStyle:{color:"#000000 !important"}},[e._v("Upload proof of payment")]),n("form",{staticClass:"register-form",on:{submit:function(t){return t.preventDefault(),e.runKyc(t)}}},[n("div",{staticClass:"form-group"},["/signup"===e.path?n("p",{staticClass:"text-center"},[e._v("Upload your passport image, national ID, or Driver's Licence")]):e._e(),n("br"),n("label",{staticClass:"form-submit btn btn-dark btn-lg mb10"},[n("input",{attrs:{type:"file",id:"file-Input"},on:{change:e.preview}}),e._v(" Insert Image ")]),e._m(0)]),"/signup"===e.path?n("div",{staticClass:" form-button d-flex justify-content-around"},[n("button",{staticClass:"form-submit form-submit btn btn-dark mb10",attrs:{type:"submit"}},[e._v("Upload")]),n("button",{staticClass:"form-submit form-submit btn btn-dark mb10",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.goBack(t)}}},[e._v("Back")])]):n("div",{staticClass:"form-group form-button d-flex justify-content-around",staticStyle:{"flex-direction":"row !important"}},[n("button",{staticClass:"form-submit btn btn-dark btn-lg mb10",attrs:{type:"submit"}},[e._v("Upload")]),n("button",{staticClass:"form-submit form-submit btn btn-dark mb10",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.goBack(t)}}},[e._v("Back")])])])])])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"imagepreview",attrs:{id:"image-Preview"}},[n("img",{staticClass:"imagepreview__image",attrs:{src:"",alt:"Image Preview"}}),n("span",{staticClass:"imagepreview__default-text"},[e._v("Image Preview")])])}],i=(n("caad"),n("b0c0"),n("ac1f"),n("2532"),n("5319"),n("260b")),a=n("cc84"),s=function(e,t){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(e,t)};function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)};function l(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):o(e.value).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}Object.create;function p(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||t)}Object.create;var h=n("a8e9"),d=n("ffa6"),_="firebasestorage.googleapis.com",g="storageBucket",v=12e4,m=6e5,b=function(e){function t(n,r){var o=e.call(this,y(n),"Firebase Storage: "+r+" ("+y(n)+")")||this;return o.customData={serverResponse:null},o._baseMessage=o.message,Object.setPrototypeOf(o,t.prototype),o}return u(t,e),t.prototype._codeEquals=function(e){return y(e)===this.code},Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.customData.serverResponse},set:function(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=this._baseMessage+"\n"+this.customData.serverResponse:this.message=this._baseMessage},enumerable:!1,configurable:!0}),t}(h["c"]);function y(e){return"storage/"+e}function w(){var e="An unknown error occurred, please check the error payload for server response.";return new b("unknown",e)}function R(e){return new b("object-not-found","Object '"+e+"' does not exist.")}function k(e){return new b("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function x(){var e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new b("unauthenticated",e)}function T(){return new b("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function S(e){return new b("unauthorized","User does not have permission to access '"+e+"'.")}function O(){return new b("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function P(){return new b("canceled","User canceled the upload/download.")}function E(e){return new b("invalid-url","Invalid URL '"+e+"'.")}function C(e){return new b("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function U(){return new b("no-default-bucket","No default bucket found. Did you set the '"+g+"' property when initializing the app?")}function A(){return new b("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function I(){return new b("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function D(){return new b("no-download-url","The given file does not have any download URLs.")}function j(e){return new b("invalid-argument",e)}function B(){return new b("app-deleted","The Firebase app was deleted.")}function L(e){return new b("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function q(e,t){return new b("invalid-format","String does not match format '"+e+"': "+t)}function N(e){throw new b("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},F=function(){function e(e,t){this.data=e,this.contentType=t||null}return e}();function z(e,t){switch(e){case $.RAW:return new F(H(t));case $.BASE64:case $.BASE64URL:return new F(X(e,t));case $.DATA_URL:return new F(K(t),V(t))}throw w()}function H(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){var o=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(o){var i=r,a=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&a,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function G(e){var t;try{t=decodeURIComponent(e)}catch(n){throw q($.DATA_URL,"Malformed data URL.")}return H(t)}function X(e,t){switch(e){case $.BASE64:var n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){var o=n?"-":"_";throw q(e,"Invalid character '"+o+"' found: is it base64url encoded?")}break;case $.BASE64URL:var i=-1!==t.indexOf("+"),a=-1!==t.indexOf("/");if(i||a){o=i?"+":"/";throw q(e,"Invalid character '"+o+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}var s;try{s=M(t)}catch(l){throw q(e,"Invalid character found")}for(var u=new Uint8Array(s.length),c=0;c<s.length;c++)u[c]=s.charCodeAt(c);return u}var W=function(){function e(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw q($.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var n=t[1]||null;null!=n&&(this.base64=J(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}return e}();function K(e){var t=new W(e);return t.base64?X($.BASE64,t.rest):G(t.rest)}function V(e){var t=new W(e);return t.contentType}function J(e,t){var n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y,Z={STATE_CHANGED:"state_changed"},Q={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ee(e){switch(e){case"running":case"pausing":case"canceling":return Q.RUNNING;case"paused":return Q.PAUSED;case"success":return Q.SUCCESS;case"canceled":return Q.CANCELED;case"error":return Q.ERROR;default:return Q.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(Y||(Y={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var te=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=Y.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=Y.ABORT,t()})),e.xhr_.addEventListener("error",(function(){e.errorCode_=Y.NETWORK_ERROR,t()})),e.xhr_.addEventListener("load",(function(){t()}))}))}return e.prototype.send=function(e,t,n,r){if(this.sent_)throw N("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(var o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw N("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw N("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw N("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)},e}();function ne(){return new te}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re=function(){function e(){}return e.prototype.createConnection=function(){return ne()},e}(),oe=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"},e.makeFromBucketSpec=function(t,n){var r;try{r=e.makeFromUrl(t,n)}catch(o){return new e(t,"")}if(""===r.path)return r;throw C(t)},e.makeFromUrl=function(t,n){var r=null,o="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}var a="(/(.*))?$",s=new RegExp("^gs://"+o+a,"i"),u={bucket:1,path:3};function c(e){e.path_=decodeURIComponent(e.path)}for(var l="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",h=new RegExp("^https?://"+f+"/"+l+"/b/"+o+"/o"+p,"i"),d={bucket:1,path:3},g=n===_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",m=new RegExp("^https?://"+g+"/"+o+"/"+v,"i"),b={bucket:1,path:2},y=[{regex:s,indices:u,postModify:i},{regex:h,indices:d,postModify:c},{regex:m,indices:b,postModify:c}],w=0;w<y.length;w++){var R=y[w],k=R.regex.exec(t);if(k){var x=k[R.indices.bucket],T=k[R.indices.path];T||(T=""),r=new e(x,T),R.postModify(r);break}}if(null==r)throw E(t);return r},e}(),ie=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(e,t,n){var r=1,o=null,i=!1,a=0;function s(){return 2===a}var u=!1;function c(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];u||(u=!0,t.apply(null,e))}function l(t){o=setTimeout((function(){o=null,e(f,s())}),t)}function f(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!u)if(e)c.call.apply(c,p([null,e],t));else{var o,f=s()||i;if(f)c.call.apply(c,p([null,e],t));else r<64&&(r*=2),1===a?(a=2,o=0):o=1e3*(r+Math.random()),l(o)}}var h=!1;function d(e){h||(h=!0,u||(null!==o?(e||(a=2),clearTimeout(o),l(0)):e||(a=1)))}return l(0),setTimeout((function(){i=!0,d(!0)}),n),d}function se(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){return void 0!==e}function ce(e){return"function"===typeof e}function le(e){return"object"===typeof e&&!Array.isArray(e)}function fe(e){return"string"===typeof e||e instanceof String}function pe(e){return he()&&e instanceof Blob}function he(){return"undefined"!==typeof Blob}function de(e,t,n,r){if(r<t)throw j("Invalid value for '"+e+"'. Expected "+t+" or greater.");if(r>n)throw j("Invalid value for '"+e+"'. Expected "+n+" or less.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e,t){var n=t.match(/^(\w+):\/\/.+/),r=null===n||void 0===n?void 0:n[1],o=t;return null==r&&(o="https://"+t),o+"/v0"+e}function ge(e){var t=encodeURIComponent,n="?";for(var r in e)if(e.hasOwnProperty(r)){var o=t(r)+"="+t(e[r]);n=n+o+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve=function(){function e(e,t,n,r,o,i,a,s,u,c,l){var f=this;this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(e,t){f.resolve_=e,f.reject_=t,f.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,n){if(n)t(!1,new me(!1,null,!0));else{var r=e.pool_.createConnection();e.pendingConnection_=r,null!==e.progressCallback_&&r.addUploadProgressListener(o),r.send(e.url_,e.method_,e.body_,e.headers_).then((function(){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingConnection_=null;var n=r.getErrorCode()===Y.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new me(a,r))}else{var s=r.getErrorCode()===Y.ABORT;t(!1,new me(!1,null,s))}}))}function o(t){var n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)}}function n(t,n){var r=e.resolve_,o=e.reject_,i=n.connection;if(n.wasSuccessCode)try{var a=e.callback_(i,i.getResponseText());ue(a)?r(a):r()}catch(u){o(u)}else if(null!==i){var s=w();s.serverResponse=i.getResponseText(),e.errorCallback_?o(e.errorCallback_(i,s)):o(s)}else if(n.canceled){s=e.appDelete_?B():P();o(s)}else{s=O();o(s)}}this.canceled_?n(!1,new me(!1,null,!0)):this.backoffId_=ae(t,n,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&se(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),o=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||o},e}(),me=function(){function e(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}return e}();function be(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function ye(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function we(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Re(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function ke(e,t,n,r,o,i){var a=ge(e.urlParams),s=e.url+a,u=Object.assign({},e.headers);return we(u,t),be(u,n),ye(u,i),Re(u,r),new ve(s,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Te(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=xe();if(void 0!==n){for(var r=new n,o=0;o<e.length;o++)r.append(e[o]);return r.getBlob()}if(he())return new Blob(e);throw new b("unsupported-environment","This browser doesn't seem to support creating Blobs")}function Se(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe=function(){function e(e,t){var n=0,r="";pe(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,n){if(pe(this.data_)){var r=this.data_,o=Se(r,t,n);return null===o?null:new e(o)}var i=new Uint8Array(this.data_.buffer,t,n-t);return new e(i,!0)},e.getBlob=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(he()){var r=t.map((function(t){return t instanceof e?t.data_:t}));return new e(Te.apply(null,r))}var o=t.map((function(e){return fe(e)?z($.RAW,e).data:e.data_})),i=0;o.forEach((function(e){i+=e.byteLength}));var a=new Uint8Array(i),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){var t;try{t=JSON.parse(e)}catch(n){return null}return le(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e){if(0===e.length)return null;var t=e.lastIndexOf("/");if(-1===t)return"";var n=e.slice(0,t);return n}function Ce(e,t){var n=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?n:e+"/"+n}function Ue(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,t){return t}var Ie=function(){function e(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Ae}return e}(),De=null;function je(e){return!fe(e)||e.length<2?e:Ue(e)}function Be(){if(De)return De;var e=[];function t(e,t){return je(t)}e.push(new Ie("bucket")),e.push(new Ie("generation")),e.push(new Ie("metageneration")),e.push(new Ie("name","fullPath",!0));var n=new Ie("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);var o=new Ie("size");return o.xform=r,e.push(o),e.push(new Ie("timeCreated")),e.push(new Ie("updated")),e.push(new Ie("md5Hash",null,!0)),e.push(new Ie("cacheControl",null,!0)),e.push(new Ie("contentDisposition",null,!0)),e.push(new Ie("contentEncoding",null,!0)),e.push(new Ie("contentLanguage",null,!0)),e.push(new Ie("contentType",null,!0)),e.push(new Ie("metadata","customMetadata",!0)),De=e,De}function Le(e,t){function n(){var n=e["bucket"],r=e["fullPath"],o=new oe(n,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function qe(e,t,n){for(var r={type:"file"},o=n.length,i=0;i<o;i++){var a=n[i];r[a.local]=a.xform(r,t[a.server])}return Le(r,e),r}function Ne(e,t,n){var r=Pe(t);if(null===r)return null;var o=r;return qe(e,o,n)}function Me(e,t,n){var r=Pe(t);if(null===r)return null;if(!fe(r["downloadTokens"]))return null;var o=r["downloadTokens"];if(0===o.length)return null;var i=encodeURIComponent,a=o.split(","),s=a.map((function(t){var r=e["bucket"],o=e["fullPath"],a="/b/"+i(r)+"/o/"+i(o),s=_e(a,n),u=ge({alt:"media",token:t});return s+u}));return s[0]}function $e(e,t){for(var n={},r=t.length,o=0;o<r;o++){var i=t[o];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe="prefixes",ze="items";function He(e,t,n){var r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[Fe])for(var o=0,i=n[Fe];o<i.length;o++){var a=i[o],s=a.replace(/\/$/,""),u=e._makeStorageReference(new oe(t,s));r.prefixes.push(u)}if(n[ze])for(var c=0,l=n[ze];c<l.length;c++){var f=l[c];u=e._makeStorageReference(new oe(t,f["name"]));r.items.push(u)}return r}function Ge(e,t,n){var r=Pe(n);if(null===r)return null;var o=r;return He(e,t,o)}var Xe=function(){function e(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e){if(!e)throw w()}function Ke(e,t){function n(n,r){var o=Ne(e,r,t);return We(null!==o),o}return n}function Ve(e,t){function n(n,r){var o=Ge(e,t,r);return We(null!==o),o}return n}function Je(e,t){function n(n,r){var o=Ne(e,r,t);return We(null!==o),Me(o,r,e.host)}return n}function Ye(e){function t(t,n){var r;return r=401===t.getStatus()?t.getResponseText().includes("Firebase App Check token is invalid")?T():x():402===t.getStatus()?k(e.bucket):403===t.getStatus()?S(e.path):n,r.serverResponse=n.serverResponse,r}return t}function Ze(e){var t=Ye(e);function n(n,r){var o=t(n,r);return 404===n.getStatus()&&(o=R(e.path)),o.serverResponse=r.serverResponse,o}return n}function Qe(e,t,n){var r=t.fullServerUrl(),o=_e(r,e.host),i="GET",a=e.maxOperationRetryTime,s=new Xe(o,i,Ke(e,n),a);return s.errorHandler=Ze(t),s}function et(e,t,n,r,o){var i={};t.isRoot?i["prefix"]="":i["prefix"]=t.path+"/",n&&n.length>0&&(i["delimiter"]=n),r&&(i["pageToken"]=r),o&&(i["maxResults"]=o);var a=t.bucketOnlyServerUrl(),s=_e(a,e.host),u="GET",c=e.maxOperationRetryTime,l=new Xe(s,u,Ve(e,t.bucket),c);return l.urlParams=i,l.errorHandler=Ye(t),l}function tt(e,t,n){var r=t.fullServerUrl(),o=_e(r,e.host),i="GET",a=e.maxOperationRetryTime,s=new Xe(o,i,Je(e,n),a);return s.errorHandler=Ze(t),s}function nt(e,t,n,r){var o=t.fullServerUrl(),i=_e(o,e.host),a="PATCH",s=$e(n,r),u={"Content-Type":"application/json; charset=utf-8"},c=e.maxOperationRetryTime,l=new Xe(i,a,Ke(e,r),c);return l.headers=u,l.body=s,l.errorHandler=Ze(t),l}function rt(e,t){var n=t.fullServerUrl(),r=_e(n,e.host),o="DELETE",i=e.maxOperationRetryTime;function a(e,t){}var s=new Xe(r,o,a,i);return s.successCodes=[200,204],s.errorHandler=Ze(t),s}function ot(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function it(e,t,n){var r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=ot(null,t)),r}function at(e,t,n,r,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}var u=s();a["Content-Type"]="multipart/related; boundary="+u;var c=it(t,r,o),l=$e(c,n),f="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+u+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",p="\r\n--"+u+"--",h=Oe.getBlob(f,r,p);if(null===h)throw A();var d={name:c["fullPath"]},_=_e(i,e.host),g="POST",v=e.maxUploadRetryTime,m=new Xe(_,g,Ke(e,n),v);return m.urlParams=d,m.headers=a,m.body=h.uploadData(),m.errorHandler=Ye(t),m}var st=function(){function e(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}return e}();function ut(e,t){var n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(o){We(!1)}var r=t||["active"];return We(!!n&&-1!==r.indexOf(n)),n}function ct(e,t,n,r,o){var i=t.bucketOnlyServerUrl(),a=it(t,r,o),s={name:a["fullPath"]},u=_e(i,e.host),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+r.size(),"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},f=$e(a,n),p=e.maxUploadRetryTime;function h(e){var t;ut(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){We(!1)}return We(fe(t)),t}var d=new Xe(u,c,h,p);return d.urlParams=s,d.headers=l,d.body=f,d.errorHandler=Ye(t),d}function lt(e,t,n,r){var o={"X-Goog-Upload-Command":"query"};function i(e){var t=ut(e,["active","final"]),n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){We(!1)}n||We(!1);var o=Number(n);return We(!isNaN(o)),new st(o,r.size(),"final"===t)}var a="POST",s=e.maxUploadRetryTime,u=new Xe(n,a,i,s);return u.headers=o,u.errorHandler=Ye(t),u}var ft=262144;function pt(e,t,n,r,o,i,a,s){var u=new st(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw I();var c=u.total-u.current,l=c;o>0&&(l=Math.min(l,o));var f=u.current,p=f+l,h=l===c?"upload, finalize":"upload",d={"X-Goog-Upload-Command":h,"X-Goog-Upload-Offset":""+u.current},_=r.slice(f,p);if(null===_)throw A();function g(e,n){var o,a=ut(e,["active","final"]),s=u.current+l,c=r.size();return o="final"===a?Ke(t,i)(e,n):null,new st(s,c,"final"===a,o)}var v="POST",m=t.maxUploadRetryTime,b=new Xe(n,v,g,m);return b.headers=d,b.body=_.uploadData(),b.progressCallback=s||null,b.errorHandler=Ye(e),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht=function(){function e(e,t,n){var r=ce(e)||null!=t||null!=n;if(r)this.next=e,this.error=t,this.complete=n;else{var o=e;this.next=o.next,this.error=o.error,this.complete=o.complete}}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t=function(){function e(e,t,n){var r=this;void 0===n&&(n=null),this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Be(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=function(e){r._request=void 0,r._chunkMultiplier=1,e._codeEquals("canceled")?(r._needToFetchStatus=!0,r.completeTransitions_()):(r._error=e,r._transition("error"))},this._metadataErrorHandler=function(e){r._request=void 0,e._codeEquals("canceled")?r.completeTransitions_():(r._error=e,r._transition("error"))},this._promise=new Promise((function(e,t){r._resolve=e,r._reject=t,r._start()})),this._promise.then(null,(function(){}))}return e.prototype._makeProgressCallback=function(){var e=this,t=this._transferred;return function(n){return e._updateProgress(t+n)}},e.prototype._shouldDoResumable=function(e){return e.size()>262144},e.prototype._start=function(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())},e.prototype._resolveToken=function(e){var t=this;Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((function(n){var r=n[0],o=n[1];switch(t._state){case"running":e(r,o);break;case"canceling":t._transition("canceled");break;case"pausing":t._transition("paused");break}}))},e.prototype._createResumable=function(){var e=this;this._resolveToken((function(t,n){var r=ct(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),o=e._ref.storage._makeRequest(r,t,n);e._request=o,o.getPromise().then((function(t){e._request=void 0,e._uploadUrl=t,e._needToFetchStatus=!1,e.completeTransitions_()}),e._errorHandler)}))},e.prototype._fetchStatus=function(){var e=this,t=this._uploadUrl;this._resolveToken((function(n,r){var o=lt(e._ref.storage,e._ref._location,t,e._blob),i=e._ref.storage._makeRequest(o,n,r);e._request=i,i.getPromise().then((function(t){t=t,e._request=void 0,e._updateProgress(t.current),e._needToFetchStatus=!1,t.finalized&&(e._needToFetchMetadata=!0),e.completeTransitions_()}),e._errorHandler)}))},e.prototype._continueUpload=function(){var e=this,t=ft*this._chunkMultiplier,n=new st(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((function(o,i){var a;try{a=pt(e._ref._location,e._ref.storage,r,e._blob,t,e._mappings,n,e._makeProgressCallback())}catch(u){return e._error=u,void e._transition("error")}var s=e._ref.storage._makeRequest(a,o,i);e._request=s,s.getPromise().then((function(t){e._increaseMultiplier(),e._request=void 0,e._updateProgress(t.current),t.finalized?(e._metadata=t.metadata,e._transition("success")):e.completeTransitions_()}),e._errorHandler)}))},e.prototype._increaseMultiplier=function(){var e=ft*this._chunkMultiplier;e<33554432&&(this._chunkMultiplier*=2)},e.prototype._fetchMetadata=function(){var e=this;this._resolveToken((function(t,n){var r=Qe(e._ref.storage,e._ref._location,e._mappings),o=e._ref.storage._makeRequest(r,t,n);e._request=o,o.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._transition("success")}),e._metadataErrorHandler)}))},e.prototype._oneShotUpload=function(){var e=this;this._resolveToken((function(t,n){var r=at(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),o=e._ref.storage._makeRequest(r,t,n);e._request=o,o.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._updateProgress(e._blob.size()),e._transition("success")}),e._errorHandler)}))},e.prototype._updateProgress=function(e){var t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()},e.prototype._transition=function(e){if(this._state!==e)switch(e){case"canceling":this._state=e,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":var t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=P(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}},e.prototype.completeTransitions_=function(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=ee(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,n,r){var o=this,i=new ht(t,n,r);return this._addObserver(i),function(){o._removeObserver(i)}},e.prototype.then=function(e,t){return this._promise.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype._addObserver=function(e){this._observers.push(e),this._notifyObserver(e)},e.prototype._removeObserver=function(e){var t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)},e.prototype._notifyObservers=function(){var e=this;this._finishPromise();var t=this._observers.slice();t.forEach((function(t){e._notifyObserver(t)}))},e.prototype._finishPromise=function(){if(void 0!==this._resolve){var e=!0;switch(ee(this._state)){case Q.SUCCESS:dt(this._resolve.bind(null,this.snapshot))();break;case Q.CANCELED:case Q.ERROR:var t=this._reject;dt(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}},e.prototype._notifyObserver=function(e){var t=ee(this._state);switch(t){case Q.RUNNING:case Q.PAUSED:e.next&&dt(e.next.bind(e,this.snapshot))();break;case Q.SUCCESS:e.complete&&dt(e.complete.bind(e))();break;case Q.CANCELED:case Q.ERROR:e.error&&dt(e.error.bind(e,this._error))();break;default:e.error&&dt(e.error.bind(e,this._error))()}},e.prototype.resume=function(){var e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e},e.prototype.pause=function(){var e="running"===this._state;return e&&this._transition("pausing"),e},e.prototype.cancel=function(){var e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e},e}(),gt=function(){function e(e,t){this._service=e,this._location=t instanceof oe?t:oe.makeFromUrl(t,e.host)}return e.prototype.toString=function(){return"gs://"+this._location.bucket+"/"+this._location.path},e.prototype._newRef=function(t,n){return new e(t,n)},Object.defineProperty(e.prototype,"root",{get:function(){var e=new oe(this._location.bucket,"");return this._newRef(this._service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return Ue(this._location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this._service},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=Ee(this._location.path);if(null===t)return null;var n=new oe(this._location.bucket,t);return new e(this._service,n)},enumerable:!1,configurable:!0}),e.prototype._throwIfRoot=function(e){if(""===this._location.path)throw L(e)},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new _t(e,new Oe(t),n)}function mt(e){var t={prefixes:[],items:[]};return bt(e,t).then((function(){return t}))}function bt(e,t,n){return l(this,void 0,void 0,(function(){var r,o,i,a;return f(this,(function(s){switch(s.label){case 0:return r={pageToken:n},[4,yt(e,r)];case 1:return o=s.sent(),(i=t.prefixes).push.apply(i,o.prefixes),(a=t.items).push.apply(a,o.items),null==o.nextPageToken?[3,3]:[4,bt(e,t,o.nextPageToken)];case 2:s.sent(),s.label=3;case 3:return[2]}}))}))}function yt(e,t){return l(this,void 0,void 0,(function(){var n,r;return f(this,(function(o){switch(o.label){case 0:return null!=t&&"number"===typeof t.maxResults&&de("options.maxResults",1,1e3,t.maxResults),n=t||{},r=et(e.storage,e._location,"/",n.pageToken,n.maxResults),[4,e.storage.makeRequestWithTokens(r)];case 1:return[2,o.sent().getPromise()]}}))}))}function wt(e){return l(this,void 0,void 0,(function(){var t;return f(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("getMetadata"),t=Qe(e.storage,e._location,Be()),[4,e.storage.makeRequestWithTokens(t)];case 1:return[2,n.sent().getPromise()]}}))}))}function Rt(e,t){return l(this,void 0,void 0,(function(){var n;return f(this,(function(r){switch(r.label){case 0:return e._throwIfRoot("updateMetadata"),n=nt(e.storage,e._location,t,Be()),[4,e.storage.makeRequestWithTokens(n)];case 1:return[2,r.sent().getPromise()]}}))}))}function kt(e){return l(this,void 0,void 0,(function(){var t;return f(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("getDownloadURL"),t=tt(e.storage,e._location,Be()),[4,e.storage.makeRequestWithTokens(t)];case 1:return[2,n.sent().getPromise().then((function(e){if(null===e)throw D();return e}))]}}))}))}function xt(e){return l(this,void 0,void 0,(function(){var t;return f(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("deleteObject"),t=rt(e.storage,e._location),[4,e.storage.makeRequestWithTokens(t)];case 1:return[2,n.sent().getPromise()]}}))}))}function Tt(e,t){var n=Ce(e._location.path,t),r=new oe(e._location.bucket,n);return new gt(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e){return/^[A-Za-z]+:\/\//.test(e)}function Ot(e,t){return new gt(e,t)}function Pt(e,t){if(e instanceof At){var n=e;if(null==n._bucket)throw U();var r=new gt(n,n._bucket);return null!=t?Pt(r,t):r}if(void 0!==t){if(t.includes(".."))throw j('`path` param cannot contain ".."');return Tt(e,t)}return e}function Et(e,t){if(t&&St(t)){if(e instanceof At)return Ot(e,t);throw j("To use ref(service, url), the first argument must be a Storage instance.")}return Pt(e,t)}function Ct(e,t){var n=null===t||void 0===t?void 0:t[g];return null==n?null:oe.makeFromBucketSpec(n,e)}function Ut(e,t,n){e.host="http://"+t+":"+n}var At=function(){function e(e,t,n,r,o,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._pool=r,this._url=o,this._firebaseVersion=i,this._bucket=null,this._host=_,this._appId=null,this._deleted=!1,this._maxOperationRetryTime=v,this._maxUploadRetryTime=m,this._requests=new Set,this._bucket=null!=o?oe.makeFromBucketSpec(o,this._host):Ct(this._host,this.app.options)}return Object.defineProperty(e.prototype,"host",{get:function(){return this._host},set:function(e){this._host=e,null!=this._url?this._bucket=oe.makeFromBucketSpec(this._url,e):this._bucket=Ct(e,this.app.options)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._maxUploadRetryTime},set:function(e){de("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._maxOperationRetryTime},set:function(e){de("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e},enumerable:!1,configurable:!0}),e.prototype._getAuthToken=function(){return l(this,void 0,void 0,(function(){var e,t;return f(this,(function(n){switch(n.label){case 0:return e=this._authProvider.getImmediate({optional:!0}),e?[4,e.getToken()]:[3,2];case 1:if(t=n.sent(),null!==t)return[2,t.accessToken];n.label=2;case 2:return[2,null]}}))}))},e.prototype._getAppCheckToken=function(){return l(this,void 0,void 0,(function(){var e,t;return f(this,(function(n){switch(n.label){case 0:return e=this._appCheckProvider.getImmediate({optional:!0}),e?[4,e.getToken()]:[3,2];case 1:return t=n.sent(),[2,t.token];case 2:return[2,null]}}))}))},e.prototype._delete=function(){return this._deleted=!0,this._requests.forEach((function(e){return e.cancel()})),this._requests.clear(),Promise.resolve()},e.prototype._makeStorageReference=function(e){return new gt(this,e)},e.prototype._makeRequest=function(e,t,n){var r=this;if(this._deleted)return new ie(B());var o=ke(e,this._appId,t,n,this._pool,this._firebaseVersion);return this._requests.add(o),o.getPromise().then((function(){return r._requests.delete(o)}),(function(){return r._requests.delete(o)})),o},e.prototype.makeRequestWithTokens=function(e){return l(this,void 0,void 0,(function(){var t,n,r;return f(this,(function(o){switch(o.label){case 0:return[4,Promise.all([this._getAuthToken(),this._getAppCheckToken()])];case 1:return t=o.sent(),n=t[0],r=t[1],[2,this._makeRequest(e,n,r)]}}))}))},e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e,t,n){return e=Object(h["o"])(e),vt(e,t,n)}function Dt(e){return e=Object(h["o"])(e),wt(e)}function jt(e,t){return e=Object(h["o"])(e),Rt(e,t)}function Bt(e,t){return e=Object(h["o"])(e),yt(e,t)}function Lt(e){return e=Object(h["o"])(e),mt(e)}function qt(e){return e=Object(h["o"])(e),kt(e)}function Nt(e){return e=Object(h["o"])(e),xt(e)}function Mt(e,t){return e=Object(h["o"])(e),Et(e,t)}function $t(e,t){return Tt(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft=function(){function e(e,t,n){this._delegate=e,this.task=t,this.ref=n}return Object.defineProperty(e.prototype,"bytesTransferred",{get:function(){return this._delegate.bytesTransferred},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"metadata",{get:function(){return this._delegate.metadata},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._delegate.state},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"totalBytes",{get:function(){return this._delegate.totalBytes},enumerable:!1,configurable:!0}),e}(),zt=function(){function e(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}return Object.defineProperty(e.prototype,"snapshot",{get:function(){return new Ft(this._delegate.snapshot,this,this._ref)},enumerable:!1,configurable:!0}),e.prototype.then=function(e,t){var n=this;return this._delegate.then((function(t){if(e)return e(new Ft(t,n,n._ref))}),t)},e.prototype.on=function(e,t,n,r){var o=this,i=void 0;return t&&(i="function"===typeof t?function(e){return t(new Ft(e,o,o._ref))}:{next:t.next?function(e){return t.next(new Ft(e,o,o._ref))}:void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,n||void 0,r||void 0)},e}(),Ht=function(){function e(e,t){this._delegate=e,this._service=t}return Object.defineProperty(e.prototype,"prefixes",{get:function(){var e=this;return this._delegate.prefixes.map((function(t){return new Gt(t,e._service)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){var e=this;return this._delegate.items.map((function(t){return new Gt(t,e._service)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextPageToken",{get:function(){return this._delegate.nextPageToken||null},enumerable:!1,configurable:!0}),e}(),Gt=function(){function e(e,t){this._delegate=e,this.storage=t}return Object.defineProperty(e.prototype,"name",{get:function(){return this._delegate.name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._delegate.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._delegate.fullPath},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return this._delegate.toString()},e.prototype.child=function(t){var n=$t(this._delegate,t);return new e(n,this.storage)},Object.defineProperty(e.prototype,"root",{get:function(){return new e(this._delegate.root,this.storage)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this._delegate.parent;return null==t?null:new e(t,this.storage)},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){return this._throwIfRoot("put"),new zt(It(this._delegate,e,t),this)},e.prototype.putString=function(e,t,n){void 0===t&&(t=$.RAW),this._throwIfRoot("putString");var r=z(t,e),o=c({},n);return null==o["contentType"]&&null!=r.contentType&&(o["contentType"]=r.contentType),new zt(new _t(this._delegate,new Oe(r.data,!0),o),this)},e.prototype.listAll=function(){var e=this;return Lt(this._delegate).then((function(t){return new Ht(t,e.storage)}))},e.prototype.list=function(e){var t=this;return Bt(this._delegate,e||void 0).then((function(e){return new Ht(e,t.storage)}))},e.prototype.getMetadata=function(){return Dt(this._delegate)},e.prototype.updateMetadata=function(e){return jt(this._delegate,e)},e.prototype.getDownloadURL=function(){return qt(this._delegate)},e.prototype.delete=function(){return this._throwIfRoot("delete"),Nt(this._delegate)},e.prototype._throwIfRoot=function(e){if(""===this._delegate._location.path)throw L(e)},e}(),Xt=function(){function e(e,t){var n=this;this.app=e,this._delegate=t,this.INTERNAL={delete:function(){return n._delegate._delete()}}}return Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._delegate.maxOperationRetryTime},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._delegate.maxUploadRetryTime},enumerable:!1,configurable:!0}),e.prototype.ref=function(e){if(St(e))throw j("ref() expected a child path but got a URL, use refFromURL instead.");return new Gt(Mt(this._delegate,e),this)},e.prototype.refFromURL=function(e){if(!St(e))throw j("refFromURL() expected a full URL but got a child path, use ref() instead.");try{oe.makeFromUrl(e,this._delegate.host)}catch(t){throw j("refFromUrl() expected a valid full URL but got an invalid one.")}return new Gt(Mt(this._delegate,e),this)},e.prototype.setMaxUploadRetryTime=function(e){this._delegate.maxUploadRetryTime=e},e.prototype.setMaxOperationRetryTime=function(e){this._delegate.maxOperationRetryTime=e},e.prototype.useEmulator=function(e,t){Ut(this._delegate,e,t)},e}(),Wt="@firebase/storage",Kt="0.5.6",Vt="storage";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e,t){var n=t.instanceIdentifier,r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal"),s=new Xt(r,new At(r,o,i,new re,n,a["a"].SDK_VERSION));return s}function Yt(e){var t={TaskState:Q,TaskEvent:Z,StringFormat:$,Storage:At,Reference:Gt};e.INTERNAL.registerComponent(new d["a"](Vt,Jt,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(Wt,Kt)}Yt(a["a"]);var Zt={data:function(){return{handyAttachments:[],path:this.$route.path,invId:null}},computed:{initialSignupDetails:function(){return this.$store.getters["user/getInitialSignupDetails"]},userAddressDetails:function(){return this.$store.getters["user/getUserAddressDetails"]}},methods:{uploadImage:function(){var e=document.getElementById("file-Input"),t=e.files[0],n=i["a"].storage().ref("user_images/"+t.name),r=n.put(t);return console.log(e.files[0]),r},runKyc:function(){this.path.includes("signup")?this.signup():this.uploadProofOfPayment()},signup:function(){var e=this,t=this.uploadImage();t.on("state_changed",(function(e){console.log(e)}),(function(e){return console.log("upload error: ",e)}),(function(){t.snapshot.ref.getDownloadURL().then((function(t){console.log("file available at",t);var n=new FormData;console.log("initial: ",e.initialSignupDetails),n.append("name",e.initialSignupDetails.user.name),n.append("email",e.initialSignupDetails.user.email),n.append("password",e.initialSignupDetails.user.password),n.append("repeat_password",e.initialSignupDetails.user.repeat_password),n.append("dob",e.initialSignupDetails.user.dob),n.append("phone",e.initialSignupDetails.user.phone),n.append("ssn",e.initialSignupDetails.user.ssn),n.append("address",e.userAddressDetails.user_address.address),n.append("city",e.userAddressDetails.user_address.city),n.append("state",e.userAddressDetails.user_address.state),n.append("country",e.userAddressDetails.user_address.country),n.append("zip",e.userAddressDetails.user_address.zip),n.append("answer",e.initialSignupDetails.questions_user.answer),n.append("security_questions_id",e.initialSignupDetails.questions_user.security_questions_id),n.append("referral_code",e.initialSignupDetails.referral_code?e.initialSignupDetails.referral_code:""),n.append("kyc",t),console.log("init signup: ",e.initialSignupDetails),console.log("address signup: ",e.userAddressDetails),e.$store.dispatch("user/signup",n).then((function(t){t?(console.log(t),e.$swal({icon:"error",title:"Signup Unsuccessful",toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,onOpen:function(t){t.addEventListener("mouseenter",e.$swal.stopTimer),t.addEventListener("mouseleave",e.$swal.resumeTimer)}})):(e.$swal({position:"center",icon:"success",title:"Signup Successful",showConfirmButton:!1,timer:1500}),e.$router.replace({path:"/login"}))}))}))}))},uploadProofOfPayment:function(){var e=this,t=this.uploadImage();t.on("state_changed",(function(e){console.log(e)}),(function(e){return console.log("upload error: ",e)}),(function(){t.snapshot.ref.getDownloadURL().then((function(t){console.log("file available at",t);var n=new FormData;n.append("paymentImg",t),n.append("id",localStorage.getItem("deposit_id")),e.$store.dispatch("subscription/uploadProofOfPaymnent",n).then((function(t){t?(console.log(t),e.$swal({icon:"error",title:"Upload Unsuccessful",toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,onOpen:function(t){t.addEventListener("mouseenter",e.$swal.stopTimer),t.addEventListener("mouseleave",e.$swal.resumeTimer)}})):(e.$swal({position:"center",icon:"success",title:"Payment proof upload successful. Awaiting approval.",showConfirmButton:!1,timer:1500}),e.$router.push({path:"/investment-packages"}),e.$emit("closeKyc"))}))}))}))},preview:function(){var e=document.getElementById("file-Input"),t=document.getElementById("image-Preview"),n=t.querySelector(".imagepreview__image"),r=t.querySelector(".imagepreview__default-text"),o=e.files[0],i=this;if(o){var a=new FileReader;r.style.display="none",n.style.display="block",a.addEventListener("load",(function(){n.setAttribute("src",this.result),i.$store.commit("setImgUrl",this.result),localStorage.setItem("imageUrl",this.result),console.log("result: ",this.result)})),a.readAsDataURL(o)}else r.style.display=null,n.style.display=null,n.setAttribute("src","")},goBack:function(){this.$emit("closeKyc")}}},Qt=Zt,en=(n("2663"),n("2877")),tn=Object(en["a"])(Qt,r,o,!1,null,"3f689ffe",null);t["a"]=tn.exports},9263:function(e,t,n){"use strict";var r=n("ad6d"),o=n("9f7f"),i=RegExp.prototype.exec,a=String.prototype.replace,s=i,u=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=o.UNSUPPORTED_Y||o.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=u||l||c;f&&(s=function(e){var t,n,o,s,f=this,p=c&&f.sticky,h=r.call(f),d=f.source,_=0,g=e;return p&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),g=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,_++),n=new RegExp("^(?:"+d+")",h)),l&&(n=new RegExp("^"+d+"$(?!\\s)",h)),u&&(t=f.lastIndex),o=i.call(p?n:f,g),p?o?(o.input=o.input.slice(_),o[0]=o[0].slice(_),o.index=f.lastIndex,f.lastIndex+=o[0].length):f.lastIndex=0:u&&o&&(f.lastIndex=f.global?o.index+o[0].length:t),l&&o&&o.length>1&&a.call(o[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o}),e.exports=s},"9f7f":function(e,t,n){"use strict";var r=n("d039");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ab13:function(e,t,n){var r=n("b622"),o=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,"/./"[e](t)}catch(r){}}return!1}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},caad:function(e,t,n){"use strict";var r=n("23e7"),o=n("4d64").includes,i=n("44d2"),a=n("ae40"),s=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!s},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("d039"),i=n("b622"),a=n("9263"),s=n("9112"),u=i("species"),c=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),h=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var d=i(e),_=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),g=_&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!_||!g||"replace"===e&&(!c||!l||p)||"split"===e&&!h){var v=/./[d],m=n(d,""[e],(function(e,t,n,r,o){return t.exec===a?_&&!o?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=m[0],y=m[1];r(String.prototype,e,b),r(RegExp.prototype,d,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}f&&s(RegExp.prototype[d],"sham",!0)}}}]);
//# sourceMappingURL=investment~signup~signupwithref~single-package.6c58daf9.js.map