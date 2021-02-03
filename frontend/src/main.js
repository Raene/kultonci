import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./utils/vee-validate.js";
import VueSweetalert2 from 'vue-sweetalert2';
import VueLazyLoad from 'vue-lazyload';
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css';


Vue.use(VueLazyLoad)
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
