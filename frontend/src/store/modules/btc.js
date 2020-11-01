import Vue from "vue";
import axios from "axios";
// import _ from "lodash";

const url = process.env.VUE_APP_URL;
const btc = {
	namespaced: true,
	state: {
		btc_address: null
	},
	mutations: {
		SET_BTC_ADDRESS(state, payload) {
			Vue.set(state, "btc_address", payload);
			localStorage.setItem("btcAddress", payload);
			console.log("btc address set: ", state.btc_address);
		}
	},
	actions: {
		create_btc_address(context, payload) {
			const token = localStorage.getItem("token");
			return axios.post(url + "/admin/btcAddress", payload, { headers: { Authorization: `Bearer ${token}` } });
		}
	},
	getters: {
		getBtcAddress(state) {
			if (state.btcAddress!==null) return state.btc_address;
		}
	}
}

export default btc;