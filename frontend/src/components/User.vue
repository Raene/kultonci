<template>
    <div class="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-md-12 col-12 mb30">
                        <h3 class="related-post-title">Deposits</h3>
                    </div>
                </div>
                <div class="post-holder">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="author-block">
                                <!-- Post author -->
                                <div class="author-img">
                                    <a href="#"><img src="../assets/images/deposit.svg" alt=""></a>
                                </div>
                                <div class="author-content">
                                    <div class="author-header">
                                        <h5 class="author-title">USD {{ currentInvestment.total_deposit === null || isApproved === false?"0.00": currentInvestment.total_deposit }} </h5> <span class="author-meta ">Total Deposits</span>
                                    </div>
                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="author-block">
                                <!-- Post author -->
                                <div class="author-img">
                                    <a href="#"><img src="../assets/images/deposit.svg" alt=""></a>
                                </div>
                                <div class="author-content">
                                    <div class="author-header">
                                        <h5 class="author-title">USD {{ currentInvestment.total_deposit === null || isApproved === false?"0.00": currentInvestment.initial_deposit }} </h5> <span class="author-meta ">Initial Deposits</span>
                                    </div>
                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="author-block">
                                <!-- Post author -->
                                <div class="author-img">
                                    <a href="#"><img src="../assets/images/deposit.svg" alt=""></a>
                                </div>
                                <div class="author-content">
                                    <div class="author-header">
                                        <h5 class="author-title">USD {{ currentInvestment.locked_deposit === null || isApproved === false?"0.00": currentInvestment.locked_deposit }} </h5> <span class="author-meta ">Locked Deposits</span>
                                    </div>
                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> -->
                                </div>
                            </div>
                        </div>
                        <!-- /.post author -->
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="author-block">
                                <!-- Post author -->
                                <div class="author-img">
                                    <a href="#"><img src="../assets/images/deposit.svg" alt=""></a>
                                </div>
                                <div class="author-content">
                                    <div class="author-header">
                                        <h5 class="author-title">USD {{ isApproved === false?"0.00": currentInvestment.compounded_deposits }} </h5> <span class="author-meta ">Compounded Deposits</span>
                                    </div>
                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-md-12 col-12 mb30">
                            <h3 class="related-post-title">Withdrawals</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="author-block bg-gold">
                                <!-- Post author -->
                                <div class="author-img">
                                    <a href="#"><img src="../assets/images/withdrawal.svg" alt=""></a>
                                </div>
                                <div class="author-content">
                                    <div class="author-header">
                                        <h5 class="author-title">USD {{ currentInvestment.total_withdrawals === null || isApproved === false?"0.00": currentInvestment.total_withdrawals }} </h5> <span class="author-meta ">Total Withdrawals</span>
                                    </div>
                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="author-block bg-gold">
                                <!-- Post author -->
                                <div class="author-img">
                                    <a href="#"><img src="../assets/images/withdrawal.svg" alt=""></a>
                                </div>
                                <div class="author-content">
                                    <div class="author-header">
                                        <h5 class="author-title">USD {{ currentInvestment.pending_withdrawals === null || isApproved === false?"0.00": currentInvestment.pending_withdrawals }} </h5> <span class="author-meta ">Pending Withdrawals</span>
                                    </div>
                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="author-block bg-gold">
                                <!-- Post author -->
                                <div class="author-img">
                                    <a href="#"><img src="../assets/images/withdrawal.svg" alt=""></a>
                                </div>
                                <div class="author-content">
                                    <div class="author-header">
                                        <h5 class="author-title">USD {{ currentInvestment.referral_withdrawals === null || isApproved === false?"0.00": currentInvestment.referral_withdrawals }} </h5> <span class="author-meta ">Referral Withdrawals</span>
                                    </div>
                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> -->
                                </div>
                            </div>
                        </div>
                        <!-- /.post author -->
                    </div>
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-md-12 col-12 mb30">
                            <h3 class="related-post-title">Earnings</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="author-block">
                                <!-- Post author -->
                                <div class="author-img">
                                    <a href="#"><img src="../assets/images/earnings.svg" alt=""></a>
                                </div>
                                <div class="author-content">
                                    <div class="author-header">
                                        <h5 class="author-title">USD {{ currentInvestment.total_earnings === null || isApproved === false?"0.00": currentInvestment.total_earnings }} </h5> <span class="author-meta ">Total Earnings</span>
                                    </div>
                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="author-block">
                                <!-- Post author -->
                                <div class="author-img">
                                    <a href="#"><img src="../assets/images/earnings.svg" alt=""></a>
                                </div>
                                <div class="author-content">
                                    <div class="author-header">
                                        <h5 class="author-title">USD {{ currentInvestment.paid_earnings === null || isApproved === false?"0.00": currentInvestment.paid_earnings }} </h5> <span class="author-meta ">Paid Earnings</span>
                                    </div>
                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="author-block">
                                <!-- Post author -->
                                <div class="author-img">
                                    <a href="#"><img src="../assets/images/earnings.svg" alt=""></a>
                                </div>
                                <div class="author-content">
                                    <div class="author-header">
                                        <h5 class="author-title">USD {{ currentInvestment.compounded_earnings === null || isApproved === false?"0.00": currentInvestment.compounded_earnings }} </h5> <span class="author-meta ">Compounded Earnings</span>
                                    </div>
                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="author-block">
                                <!-- Post author -->
                                <div class="author-img">
                                    <a href="#"><img src="../assets/images/earnings.svg" alt=""></a>
                                </div>
                                <div class="author-content">
                                    <div class="author-header">
                                        <h5 class="author-title">USD {{ currentInvestment.referral_earnings === null || isApproved === false?"0.00": currentInvestment.referral_earnings }} </h5> <span class="author-meta ">Referral Earnings</span>
                                    </div>
                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> -->
                                </div>
                            </div>
                        </div>
                        <!-- /.post author -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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