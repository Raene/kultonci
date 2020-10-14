import Vue from "vue";

const user = {
	namespaced: true,
	state: {
		initialSignupDetails: {}
	},
	mutations: {
		SET_INITIAL_SIGNUP_DETAILS(state, payload) {
			Vue.set(state, "initialSignupDetails", payload);
		}
	},
	actions: {},
	getters: {
		getInitialSignupDetails(state) {
			return state.initialSignupDetails;
		}
	}
}

export default user;