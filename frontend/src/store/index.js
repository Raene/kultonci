import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import btc from "./modules/btc";
import subscription from "./modules/subscription";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
  	user,
  	btc,
  	subscription
  }
});
