import Vue from "vue";
import axios from "axios";
import _ from "lodash";

const url = process.env.VUE_APP_URL;
const subscription = {
	namespaced: true,
	state: {
		packages: [],
		btcAddress: null
	},
	mutations: {
		SET_PACKAGES(state, payload) {
			Vue.set(state, "packages", payload);
			console.log("package set: ", state.packages);
		}
	},
	actions: {
		getInvestmentPackages() {
			return axios.get(url + "/subscription")
				.then((data) => {
					console.log("subs data: ", data.data.data.subscription);
				})
				.catch(err => console.log(err));
		}
	},
	getters: {
		getPackages(state) {
			if (_.isEmpty(state.packages) === false) return state.packages;
		}
	} 
}

export default subscription;