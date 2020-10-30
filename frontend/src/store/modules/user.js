import Vue from "vue";
import axios from "axios";
import _ from "lodash";

const url = process.env.VUE_APP_URL;
const user = {
	namespaced: true,
	state: {
		initialSignupDetails: {},
		profile: {},
		users: [],
		user: {}
	},
	mutations: {
		SET_INITIAL_SIGNUP_DETAILS(state, payload) {
			Vue.set(state, "initialSignupDetails", payload);
		},

		SET_PROFILE(state, payload) {
			Vue.set(state, "profile", payload);
			console.log("state.profile: ", state.profile);
		},

		SET_USERS(state, payload) {
			Vue.set(state, "users", payload);
			console.log("users set");
		},

		SET_USER(state, payload) {
			Vue.set(state, "user", payload);
			console.log("user set");
		},

		CLEAR_TOKEN(state) {
			Vue.set(state, "profile", null);
			localStorage.removeItem("user");
            localStorage.removeItem("token");
			console.log("user cleared: ", state.profile);
		}
	},
	actions: {
		signup(context, user) {
			console.log("user: ", user);
			return axios.post(url + "/auth/register", user)
				.then((data) => {
					console.log(data);
				})
				.catch(err => {
					return err;
				});
		},

		login(context, user) {
			return axios.post(url + "/auth/login", user);
		},

		getUsers(context) {
			const token = localStorage.getItem("token");
			return axios.get(url + "/admin/users", { headers: { Authorization: `Bearer ${token}` } })
				.then((data) => {
					console.log("data: ", data.data);
					context.commit("SET_USERS", data.data.data);
				})
				.catch(err => {
					return err;
				});
		},

		getUser(context, userId) {
			const token = localStorage.getItem("token");
			return axios.get(url + "/admin/users/" + userId, { headers: { Authorization: `Bearer ${token}` } });
		},

		verifyUser(context, userId) {
			const token = localStorage.getItem("token");
			return axios.post(url + "/admin/users", userId, { headers: { Authorization: `Bearer ${token}` } })
				.then((data) => {
					console.log("verify user data: ", data);
				})
				.catch(err => {
					return err;
				});
		},

		approveDeposit(context, depositId) {
			const token = localStorage.getItem("token");
			return axios.post(url + "/admin/verifySub", depositId, { headers: { Authorization: `Bearer ${token}` } });
		}
	},
	getters: {
		getInitialSignupDetails(state) {
			return state.initialSignupDetails;
		},

		getUsers(state) {
			if (state.users) return state.users;
		},

		getUserCount(state) {
			if (state.users) return state.users.length;
		},

		getProfile(state) {
			if (!state.profile) {
				return null;
			}
			return state.profile;
		},

		getUser(state) {
			if (_.isEmpty(state.user) === false) return state.user;
		}
	}
}

export default user;