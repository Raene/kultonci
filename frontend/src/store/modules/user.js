import Vue from "vue";
import axios from "axios";

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
	actions: {
		signup(context, user) {
			console.log("user: ", user);
			return axios.post("http://localhost:3000/auth/register", user)
				.then((data) => {
					return data;
				})
				.catch(err => {
					return err;
				});
		},

		login(context, user) {
			return axios.post("http://localhost:3000/auth/login", user)
				.then((data) => {
					console.log("login data says: ", data);
				})
				.catch(err => console.log(err));
		}
	},
	getters: {
		getInitialSignupDetails(state) {
			return state.initialSignupDetails;
		}
	}
}

export default user;