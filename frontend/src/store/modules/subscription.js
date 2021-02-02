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
            // Vue.set(state, "currentInvestment", payload);
            state.currentInvestment = payload;
            console.log("current Investment set: ", state.currentInvestment);
        }
    },
    actions: {
        getInvestmentPackages({ commit }) {
            return axios.get(url + "/subscription")
                .then((data) => {
                    console.log("package: ", data);
                    console.log("btc: ", data.data.data.address);
                    console.log("subs data: ", data.data.data.subscription);
                    commit("SET_PACKAGES", data.data.data.subscription);
                    commit("SET_BTC_ADDRESS", data.data.data.btc[0].address);
                })
                .catch(err => console.log(err));
        },

        getInvestmentPackage(context, payload) {
        	return axios.get(url + "/subscription/" + payload)
        		.then((data) => {
        			console.log("single package: ", data.data.data.btc[0].address);
        			context.commit("SET_PACKAGE", data.data.data.subscription);
        			context.commit("SET_BTC_ADDRESS", data.data.data.btc[0].address)
        		})
                .catch(err => console.log(err));
        },

        createDeposit(context, payload) {
            const token = localStorage.getItem("token");
            console.log("deposit payload: ", payload);
        	return axios.post(url + "/user/createDeposit", payload, { headers: { Authorization: `Bearer ${token}` } });
        },

        uploadProofOfPaymnent(context, payload) {
            const token = localStorage.getItem("token");
        	return axios.post(url + "/payment/proofOfPayment", payload, { headers: { Authorization: `Bearer ${token}` } })
        		.then((data) => {
        			console.log("payment proof: ", data);
        		})
        		.catch(err => {
        			return err;
        		});
        },

        getUserInvestment(context, payload) {
            const token = localStorage.getItem("token");
        	return axios.get(url + "/user/investments/" +payload+"?type=user_id", { headers: { Authorization: `Bearer ${token}` } })
                .then((data) => {
                if (data.data.data[0] !== undefined) {
                    console.log("payment inv: ", data.data.data[0]);
                    let paymentProof = data.data.data[0].paymentProof;
                    context.commit("SET_CURRENT_INVESTMENT", data.data.data[0]);
                    return paymentProof;
                } else {
                    context.commit("SET_CURRENT_INVESTMENT", {
                        total_deposit: 0.00,
                        package_level: "null",
                        package_name: "null",
                        earnings: 0.00
                    });
                }
                // let currentInv = data.data.data[data.data.data.length-1];
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