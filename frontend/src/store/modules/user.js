import Vue from "vue";
import axios from "axios";

const user = {
	namespaced: true,
	state: {
		initialSignupDetails: {},
		profile: {},
		users: []
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
		}
	},
	actions: {
		signup(context, user) {
			console.log("user: ", user);
			return axios.post("http://localhost:3000/auth/register", user)
				.then((data) => {
					console.log(data);
				})
				.catch(err => {
					return err;
				});
		},

		login(context, user) {
			return axios.post("http://localhost:3000/auth/login", user)
				.then((data) => {
					console.log("login data says: ", data.data.message);
					context.commit("SET_PROFILE", data.data.message);
					localStorage.setItem("token", data.data.message.token);
				})
				.catch(err => {
					return err;
				});
		},

		getUsers(context) {
			const token = localStorage.getItem("token");
			return axios.get("http://localhost:3000/admin/users", { headers: { Authorization: `Bearer ${token}` } })
				.then((data) => {
					console.log("data: ", data.data);
					context.commit("SET_USERS", data.data.data);
				})
				.catch(err => {
					return err;
				});
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
		}
	}
}

export default user;