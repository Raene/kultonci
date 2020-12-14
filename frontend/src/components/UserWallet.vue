<template>
    <section id="testimonial">
        <section class="page-top-banner section-gap-full relative" data-stellar-background-ratio="0.5">
            <div class="overlay overlay-bg"></div>
            <div class="row coingecko-script">
                    <div class="col-md-12 col-sm-12">
                        <coingecko-coin-price-marquee-widget coin-ids="bitcoin,eos,ethereum,litecoin,ripple,bitcoin-cash,tether,stellar,tron,binancecoin" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>
                    </div>
                </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="section-title">
                            <h2 class="invert-col">Welcome, {{ profile.name }}</h2>
                            <hr>
                            <h5 class="invert-col">We're glad you took the bold step to invest with us.</h5>
                            <p class="invert-col" style="font-size: 18px;">Keep up with the progress of your investments - view your <strong>Deposits & Earnings</strong> on your fully secure personal investments page.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="style-span col-md-6 col-sm-12">
                        <!-- <span> -->
                        <span>
                            <h5 class="invert-col" v-if="currentInvestment.package_name === 'null'">You're not on any package</h5>
                            <router-link style="text-decoration: none !important;" v-if="currentInvestment.package_name === 'null'" class="section-btn btn btn-default" to="/investment-packages">Select a package</router-link>
                            <!-- <h5 v-if="profile.email==='perkinsproperties2015@gmail.com' || profile.email==='isairobles5@gmail.com'">You are on the</h5>
                    <p v-if="profile.email==='perkinsproperties2015@gmail.com' || profile.email==='isairobles5@gmail.com'" class="package">
                        Weekly Package
                    </p> -->
                            <h5 class="invert-col" v-if="currentInvestment.package_name !== 'null' && currentInvestment.verified !== 0">You are on the</h5>
                            <p v-if="currentInvestment.package_name !== 'null' && currentInvestment.verified !== 0" class="package invert-col">
                                {{ currentInvestment.package_name }}
                            </p>
                        </span>
                        <p v-if="false" class="msg">Your account is temporarily closed now</p>
                        <div v-if="currentInvestment.package_name !== 'null' && currentInvestment.verified !== 0" class="btn-container">
                            <button class="btn btn-danger bg-danger btn-lg">Request Withdrawal</button>
                            <button class="btn btn-danger bg-danger btn-lg">Add Deposits</button>
                        </div>
                        <div class="card white-card" style="margin-top: 10px;">
                            <div class="card-body">
                                <h5 style="color: black;" class="text-left">Referral link</h5>
                                <input id="referral_value" v-model="referral_code" type="text" class="form-control" disabled>
                                <button @click="copyLink" style="margin-top: 15px;" class="btn btn-primary link-btn">Copy Link</button>
                            </div>
                        </div>
                        <!-- </span> -->
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="card white-card text-white bg-light mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h5 style="color: #000000;">Overall portfolio</h5>
                                    </div>
                                    <div class="col-md-12" style="max-width: 70%; margin: 0 auto;">
                                        <pie-chart :chart-data="chartData" :options="chartOptions"></pie-chart>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h5 class="text-left deposit-title">Deposits</h5>
                    <div class="row">
                        <div class="col-md-9">
                            <div class="card text-white bg-primary mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-money uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <!-- <h5 class="card-title">{{ profile.email === "perkinsproperties2015@gmail.com" || profile.email === "isairobles5@gmail.com"?"USD 30,000.00":"USD 0.00" }}</h5> -->
                                        <h5 class="card-title">USD {{ currentInvestment.total_deposit === null || isApproved === false?"0.00": currentInvestment.total_deposit }}</h5>
                                        <p class="card-text">Total Deposits</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-primary mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-money uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <!-- <h5 class="card-title">{{ profile.email === "perkinsproperties2015@gmail.com" || profile.email === "isairobles5@gmail.com"?"USD 30,000.00":"USD 0.00" }}</h5> -->
                                        <h5 class="card-title">USD {{ currentInvestment.total_deposit === null || isApproved === false?"0.00": currentInvestment.initial_deposit }}</h5>
                                        <p class="card-text">Initial Deposits</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-primary mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-lock uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <!-- <h5 class="card-title">{{ profile.email === "perkinsproperties2015@gmail.com" || profile.email==="isairobles5@gmail.com"?"USD 30,000.00":"USD 0.00" }}</h5> -->
                                        <h5 class="card-title">USD {{ currentInvestment.locked_deposit === null || isApproved === false?"0.00": currentInvestment.locked_deposit }}</h5>
                                        <p class="card-text">Locked Deposits</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-primary mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-lock uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <!-- <h5 class="card-title">{{ profile.email === "perkinsproperties2015@gmail.com"?"USD 30,000.00":"USD 0.00" }}</h5> -->
                                        <h5 class="card-title">USD {{ isApproved === false?"0.00": currentInvestment.compounded_deposits }}</h5>
                                        <p class="card-text">Compounded Deposits</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 class="text-left earning-title">Earnings</h5>
                    <div class="row">
                        <div class="col-md-9">
                            <div class="card text-white bg-danger mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-money uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <!-- <h5 class="card-title">{{ profile.email === "perkinsproperties2015@gmail.com"?"USD 15,000.00":"USD 0.00" }}</h5> -->
                                        <h5 class="card-title">USD {{ currentInvestment.total_earnings === null || isApproved === false?"0.00": currentInvestment.total_earnings }}</h5>
                                        <p class="card-text">Total Earnings</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-danger mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-credit-card uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <!-- <h5 class="card-title">{{ profile.email === "perkinsproperties2015@gmail.com"?"USD 15,000.00":"USD 0.00" }}</h5> -->
                                        <h5 class="card-title">USD {{ currentInvestment.paid_earnings === null || isApproved === false?"0.00": currentInvestment.paid_earnings }}</h5>
                                        <p class="card-text">Paid Earnings</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-danger mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-lock uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <h5 class="card-title">USD {{ currentInvestment.compounded_earnings === null || isApproved === false?"0.00": currentInvestment.compounded_earnings }}</h5>
                                        <p class="card-text">Compounded Earnings</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-danger mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-retweet uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <h5 class="card-title">USD {{ currentInvestment.referral_earnings === null || isApproved === false?"0.00": currentInvestment.referral_earnings }}</h5>
                                        <p class="card-text">Referral Earnings</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h5 class="text-left col-invert">Get More Bitcoin!</h5>
                    <p class="text-left col-invert">Boost your investment. Sign up & buy bitcoins. <a class="invert-col" href="">Help?</a></p>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card text-white get-bitcoin mb-3 text-left">
                                <div class="card-body uw-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h5><a target="_blank" href="https://www.coinbase.com/">Coinbase</a></h5>
                                            <h5><a target="_blank" href="https://cex.io/">Cex.io</a></h5>
                                            <h5><a target="_blank" href="https://coinmama.com/">CoinMama</a></h5>
                                            <h5><a target="_blank" href="https://www.bitstamp.net/">Bitstamp</a></h5>
                                            <h5><a target="_blank" href="https://localbitcoins.com/">LocalBitCoins</a></h5>
                                        </div>
                                        <div class="col-md-6">
                                            <h5><a target="_blank" href="https://www.kraken.com/">Kraken</a></h5>
                                            <h5><a target="_blank" href="https://www.binance.com/">Binance</a></h5>
                                            <h5><a target="_blank" href="https://gemini.com/">Gemini Exchange</a></h5>
                                            <h5><a target="_blank" href="https://paxful.com/">Paxful</a></h5>
                                            <h5><a target="_blank" href="https://xcoins.io/">XCoins</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 class="text-left withdrawal-title">Withdrawals</h5>
                    <div class="row">
                        <div class="col-md-9">
                            <div class="card text-white bg-warning mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-bank uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <h5 class="card-title">USD {{ currentInvestment.total_withdrawals === null || isApproved === false?"0.00": currentInvestment.total_withdrawals }}</h5>
                                        <p class="card-text">Total Withdrawals</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-warning mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-pause uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <h5 class="card-title">USD {{ currentInvestment.pending_withdrawals === null || isApproved === false?"0.00": currentInvestment.pending_withdrawals }}</h5>
                                        <p class="card-text">Pending Withdrawals</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row item-row">
                        <div class="col-md-9">
                            <div class="card text-white bg-warning mb-3 text-left">
                                <div class="card-body uw-body">
                                    <i class="fa fa-retweet uw-icon item1 text-center"></i>
                                    <span class="item2">
                                        <h5 class="card-title">USD {{ currentInvestment.referral_withdrawals === null || isApproved === false?"0.00": currentInvestment.referral_withdrawals }}</h5>
                                        <p class="card-text">Referral Withdrawals</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="referrals.length > 0" class="row item-row">
                        <div class="col-md-12">
                            <div class="card text-white bg-warning mb-3">
                                <div class="card-body">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <!-- <th scope="col">#</th> -->
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Date Joined</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(referral, index) in referrals" :key="index">
                                                <!-- <th scope="row">1</th> -->
                                                <td>{{ referral.name }}</td>
                                                <td>{{ referral.email }}</td>
                                                <td>{{ referral.dateJoined }}</td>
                                            </tr>
                                            <!-- <p v-if="referral.noVal === false">You have no referrals</p> -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="row item-row">
                        <div class="col-md-12">
                            <div class="card text-white bg-warning mb-3">
                                <div class="card-body">
                                    <h5 class="card-title">No Referrals</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <VueInjectJs src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js" />
    </section>
</template>
<script>
import VueInjectJs from "vue-inject-js";
import PieChart from "../utils/pie-chart.js";
// import Vue from "vue";
export default {
    components: {
        PieChart,
        VueInjectJs
    },
    data() {
        return {
            chartOptions: {
                hoverBorderWidth: 20
            },
            chartData: null,
            referral_code: null
        };
    },

    computed: {
        currentInvestment() {
            if (this.$store.getters["subscription/getCurrentInvestment"] !== undefined && this.$store.getters["subscription/getCurrentInvestment"].verified !== 0) {
                return this.$store.getters["subscription/getCurrentInvestment"];
            }
            return {
                total_deposit: "0.00",
                package_level: "null",
                package_name: "null",
                locked_deposit: "0.00",
                earnings: "0.00"
            }
        },

        isApproved() {
            if (this.currentInvestment.verified !== 0) {
                return true;
            }
            return false;
        },

        profile() {
            if (!this.$store.getters["user/getProfile"]) {
                console.log("no user");
            }
            return this.$store.getters["user/getProfile"];
        },

        referrals() {
            let referralData = [];
            if (this.$store.getters["user/getReferrals"].length > 0) {
                referralData = this.$store.getters["user/getReferrals"];
            }
            // else {
            //     referralData.push({ name: null, email: null, dateJoined: null, noVal: false });
            // }
            return referralData;
        }
    },

    methods: {
        fillData() {
            this.chartData = {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                labels: ["Deposits", "Earnings", "Withdrawals"],
                datasets: [{
                    label: "Data One",
                    backgroundColor: ["#337ab7", "#dc3545", "#ffc107"],
                    data: [this.getDeposit(), this.getEarning(), 0]
                }]
            }
        },

        getDeposit() {
            return this.currentInvestment.total_deposit;
        },

        getEarning() {
            return this.currentInvestment.earnings;
        },

        copyLink() {
            const copyText = document.querySelector("#referral_value");
            copyText.select();
            console.log("copytext: ", copyText)
            navigator.clipboard.writeText(copyText.value);
            const linkBtn = document.querySelector(".link-btn");
            linkBtn.textContent = "Copied!";
            setInterval(() => {
                linkBtn.textContent = "Copy Link"
            }, 2000)
        }
    },

    mounted() {
        const user = localStorage.getItem("user");
        if (!user) {
            this.$store.commit("user/SET_PROFILE", null);
        }
        this.$store.commit("user/SET_PROFILE", JSON.parse(user));
        this.referral_code = process.env.VUE_APP_REFERRAL + this.profile.referral;
        this.$store.dispatch("user/getUser", JSON.parse(user).id)
            .then((data) => {
                console.log("userdata: ", data.data.data[0].userVerified);
                if (data.data.data[0].userVerified === 0) {
                    this.$swal({
                        icon: "info",
                        title: "Information!!",
                        text: "Your “image” is being processed and your account is under review. Make an Investment now to speed up the process",
                        position: "center",
                        showCloseButton: true,
                        showCancelButton: false
                    });
                }
            })
            .catch(err => console.log(err));
        this.$store.dispatch("subscription/getUserInvestment", this.profile.id)
            .then(() => {
                this.fillData();
            });
        this.$store.dispatch("user/getReferrals",
            this.profile.id);

        console.log("current inv.td: ", this.currentInvestment.total_deposit);
        console.log("isApproved: ", this.isApproved);
    }
}
</script>
<style scoped>
.col-invert {
    color: black;
}
.relative {
    position: relative;
}
.overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.page-top-banner {
    background: url(../assets/landing/images/bitcoin pocket_1.jpg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* opacity: .9; */
    /* background-color: black; */
}

.page-top-banner .overlay-bg {
    opacity: 1;
}

.deposit-title {
    color: #337ab7;
    font-size: 46px;
}

.earning-title {
    color: #dc3545;
    font-size: 46px;
}

.withdrawal-title {
    color: #ffc107;
    font-size: 46px;
}

.invert-col {
    color: #ffffff;
}

#testimonial {
    background-color: #ffffff;
    padding-top: 0;
}

.style-span {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

th {
    text-align: center;
}

.btn:focus {
    border: none !important;
    outline: none !important;
}

.btn:active {
    outline: none !important;
    border: none !important;
}

.btn-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.get-bitcoin {
    border: 1px solid #e3e17b;
    background-color: #e3e17b;
}

.get-bitcoin a {
    color: #000000;
}

.get-bitcoin a:hover {
    color: #ffffff;
}

a {
    color: #ffffff;
    text-decoration: underline !important;
}

.text-left {
    text-align: left !important;
}

.bg-danger {
    background-color: #dc3545;
}

.bg-warning {
    background-color: #ffc107;
}

.item-row {
    margin-top: 30px;
}

.white-card {
    background-color: #ffffff;
}

.card {
    padding: 15px;
}

.uw-body {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.uw-icon {
    font-size: 4em;
    margin: 5px;
    color: #ffffff;
}

.item2 {
    flex-grow: 8;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-left: 20px;
}

.item2 p {
    text-align: left;
    font-weight: bolder;
}

.item2 h5 {
    font-size: 40px;
    font-weight: bolder;
}

.package {
    background-color: gold;
    width: 200px;
    margin: 0 auto;
    padding: 10px;
    color: #000000;
    border-radius: 10px;
    font-weight: bold;
    text-transform: uppercase;
    /*letter-spacing: 1px;*/
}

.msg {
    background-color: red;
    /*width: 200px;*/
    margin-top: 20px;
    padding: 10px;
    color: #ffffff;
    border-radius: 10px;
    font-weight: bold;
    text-transform: uppercase;
    /*letter-spacing: 1px;*/
}

@media (min-width: 960px) {
    .col-md-4 {
        max-width: 100% !important;
    }
}

@media (min-width: 600px) {
    .col-sm-4 {
        max-width: 100% !important;
    }
}

/*h2 {
    margin-bottom: 20px;
}*/

h2 small {
    font-size: 82%;
    font-weight: 600;
}

p {
    font-size: 15px;
    text-align: center;
}

h5 {
    font-size: 23px;
}

.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-btn {
    background: gold;
    border-radius: 50px;
    border: 1px solid #000000;
    color: #000000;
    font-size: inherit;
    font-weight: normal;
    padding: 15px 30px;
    transition: 0.5s;
    margin-top: 7px;
    text-decoration: none;
}

.section-btn:hover {
    background: #000000;
    border-color: #e3e17b;
    color: #e3e17b;
}

.feature-thumb {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sub-packages {
    margin-bottom: 7px;
}

.coingecko-script {
    margin-bottom: 50px;
}

.btn-danger {
    margin-top: 20px;

}
</style>