import Vue from "vue";
import axios from "axios";
import _ from "lodash";

const url = process.env.VUE_APP_URL;
const subscription = {
    namespaced: true,
    state: {
        packages: [],
        btcAddress: null,
        package: [],
        currentInvestment: {}
    },
    mutations: {
        SET_PACKAGES(state, payload) {
            Vue.set(state, "packages", payload);
            console.log("packages set: ", state.packages);
        },

        SET_PACKAGE(state, payload) {
        	Vue.set(state, "package", payload);
        	console.log("package set: ", state.package);
        },

        SET_BTC_ADDRESS(state, payload) {
        	Vue.set(state, "btcAddress", payload);
        	console.log("btcAddress set: ", state.btcAddress);
        },

        SET_CURRENT_INVESTMENT(state, payload) {
            Vue.set(state, "currentInvestment", payload);
            console.log("current Investment set: ", state.currentInvestment);
        }
    },
    actions: {
        getInvestmentPackages({ commit }) {
            return axios.get(url + "/subscription")
                .then((data) => {
                    console.log("subs data: ", data.data.data.subscription);
                    commit("SET_PACKAGES", data.data.data.subscription);
                })
                .catch(err => console.log(err));
        },

        getInvestmentPackage(context, payload) {
        	return axios.get(url + "/subscription/" + payload)
        		.then((data) => {
        			console.log("single package: ", data.data.data.btc[0].address);
        			context.commit("SET_PACKAGE", data.data.data.subscription);
        			context.commit("SET_BTC_ADDRESS", data.data.data.btc[0].address)
        		});
        },

        createDeposit(context, payload) {
        	return axios.post(url + "/user/createDeposit", payload);
        },

        uploadProofOfPaymnent(context, payload) {
        	return axios.post(url + "/payment/proofOfPayment", payload)
        		.then((data) => {
        			console.log("payment proof: ", data);
        		})
        		.catch(err => {
        			return err;
        		});
        },

        getUserInvestment(context, payload) {
        	return axios.get(url + "/user/investments/" +payload+"?type=user_id")
        		.then((data) => {
        			console.log("user inv: ", data.data.data[data.data.data.length-1]);
                    let currentInv = data.data.data[data.data.data.length-1];
                    context.commit("SET_CURRENT_INVESTMENT", currentInv);
        		})
        		.catch(err => console.log(err));
        }
    },
    getters: {
        getPackages(state) {
            if (_.isEmpty(state.packages) === false) return state.packages;
        },

        getPackage(state) {
            if (_.isEmpty(state.package) === false) return state.package;
        },

        getBtcAddress(state) {
        	if (state.btcAddress.length > 0) return state.btcAddress;
        },

        getCurrentInvestment(state) {
            if (_.isEmpty(state.currentInvestment) === false || state.currentInvestment !== []) return state.currentInvestment;
        }
    }
}

export default subscription;