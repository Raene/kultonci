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
		user: {},
		referrals: [],
		security_questions: []
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

		DELETE_USER(state, payload) {
			for(const i in state.users) {
				if (+state.users[i].userId === +payload) {
					state.users.splice(i, 1);
				}
			}
		},

		CLEAR_TOKEN(state) {
			Vue.set(state, "profile", null);
			localStorage.removeItem("user");
            localStorage.removeItem("token");
			console.log("user cleared: ", state.profile);
		},

		SET_REFERRALS(state, payload) {
			Vue.set(state, "referrals", payload);
			console.log("referral data: ", state.referrals);
		},

		SET_SECURITY_QUESTIONS(state, payload) {
			Vue.set(state, "security_questions", payload);
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

		deleteUser(context, userId) {
			const token = localStorage.getItem("token");
			return axios.delete(url + "/admin/deleteUser/" + userId, { headers: { Authorization: `Bearer ${token}` } });
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
		},

		 updateDeposit(context, payload) {
		 	console.log("upadte payload: ", payload);
            return axios.post(url + "/user/updateDeposit", payload);
        },

        getReferrals(context, payload) {
        	return axios.get(url + "/user/referrals/" + payload)
        		.then((data) => {
        			console.log("referral data: ", data.data.data);
        			context.commit("SET_REFERRALS", data.data.data);
        		})
        		.catch(err => {
        			console.log(err);
        		});
        },

        getWithdrawals(context, payload) {
        	return axios.get(url + "/withdrawal/" + payload +"?type=user_id")
        		.then((data) => {
        			console.log("Withdrawals data: ", data);
        		})
        		.catch(err => console.log(err));
        },

        getSecurityQuestions({ commit }) {
        	return axios.get(url + "/security-questions")
        		.then((data) => {
        			console.log("questions: ", data.data.data);
        			commit("SET_SECURITY_QUESTIONS", data.data.data);
        		})
        		.catch((err) => {
        			console.log(err);
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
		},

		getProfile(state) {
			if (!state.profile) {
				return null;
			}
			return state.profile;
		},

		getUser(state) {
			if (_.isEmpty(state.user) === false) return state.user;
		},

		getReferrals(state) {
			return state.referrals;
		},

		getSecurityQuestions(state) {
			return state.security_questions;
		}
	}
}

export default user;