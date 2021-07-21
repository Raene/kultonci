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
import axios from "axios";
Vue.use(VueLazyLoad)
Vue.use(VueSweetalert2);

axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      console.log("rees: ", error.response.data.message)
      originalRequest._retry = true;
      if (error.response.data.message === "JsonWebTokenError: invalid signature") {
      	console.log('router.history.current.path: ', router.history.current.path)
      	if (router.history.current.path.includes("user_wallet")) {
      		console.log("yay. not working")
      	}
        // window.location.href = router.history.current.path
      } else {
        store.commit('user/CLEAR_TOKEN')
        return router.push('/login')
      }
    }
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
