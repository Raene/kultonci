<template>
    <div>
        <TheHeader />
        <!-- page-header -->
        <div class="post-pageheader">
            <div class="wallet-overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="post-pagecaption">
                            <h1 class="text-white">{{ profile.name }}'s Wallet</h1>
                            <div class="meta text-white">
                                <span v-if="currentInvestment.package_name === 'null'" class="meta-date meta-divider">No package </span>
                                <span v-else-if="currentInvestment.package_name !== 'null' && currentInvestment.verified !== 0" class="meta-date meta-divider">{{ currentInvestment.package_name }} </span>
                                <span class="meta-admin">View <router-link to="/user-wallet/user/profile" class="meta-link">Profile</router-link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.page-header-->
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                        <!-- categories -->
                        <!-- <div class="widget widget-categories">
                        <h4 class="widget-title">Wallet</h4>
                        <ul class="list-unstyled">
                            <li><a href="#">Bitcoin</a></li>
                            <li><a href="#">Ethereum</a></li>
                            <li><a href="#">Ripple</a></li>
                            <li> <a href="#">Litecoin</a></li>
                            <li> <a href="#">Stellar</a></li>
                        </ul>
                    </div> -->
                        <!-- /.categories -->
                        <!-- widget-tags -->
                        <div class="widget widget-tags">
                            <h4 class="widget-title">Wallet</h4>
                            <router-link to="/user-wallet/user" class="btn btn-default btn-xs">Dashboard</router-link> <br> <router-link to="/user-wallet/user/profile" class="btn btn-default btn-xs">View Profile</router-link> <br> <router-link to="/investment-packages" class="btn btn-default btn-xs">Invest</router-link> <br> <a href="#" class="btn btn-default btn-xs">Reqiest Withdrawal</a><br>
                        </div>
                        <div class="widget">
                            <h4 class="widget-title">Referral Link</h4>
                            <form>
                                <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label required sr-only ">Name <span class="require">*</span></label>
                                            <input type="text" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                                        <button id="singlebutton" name="singlebutton" class="btn btn-primary">Copy Link</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.widget-tags -->
                    </div>
                   <router-view />
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>
<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue"
export default {
    components: {
        TheHeader,
        TheFooter
    },
    data() {
        return {
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
        // fillData() {
        //     this.chartData = {
        //         hoverBackgroundColor: "red",
        //         hoverBorderWidth: 10,
        //         labels: ["Deposits", "Earnings", "Withdrawals"],
        //         datasets: [{
        //             label: "Data One",
        //             backgroundColor: ["#337ab7", "#dc3545", "#ffc107"],
        //             data: [this.getDeposit(), this.getEarning(), 0]
        //         }]
        //     }
        // },

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
                // this.fillData();
                console.log("worlde")
            });
        this.$store.dispatch("user/getReferrals",
            this.profile.id);

        console.log("current inv.td: ", this.currentInvestment.total_deposit);
        console.log("isApproved: ", this.isApproved);
    }
}
</script>
<style>
.bg-gold {
    background: #fdaf17 !important;
}
</style>