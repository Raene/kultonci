import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./utils/db";
import "./utils/vee-validate.js";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueLazyLoad from 'vue-lazyload';
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css';
Vue.use(VueLazyLoad)
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
