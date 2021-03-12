<template>
  <div class="col-lg-8 py-3">
  	<!-- Deposits -->
  	<div class="row">
  		<div class="col-lg-12">
  			<h3>Deposits</h3>
  		</div>
  	</div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card card-body border-0 text-center shadow pt-5 bg-primary">
          <h5 class="fg-gray">USD {{ currentInvestment.total_deposit === null || isApproved === false?"0.00": currentInvestment.total_deposit }}</h5>
          <hr>
          <p class="fs-small">Total Deposits</p>
        </div>
      </div>
      <div class="col-lg-6 mg-mt">
        <div class="card card-body border-0 text-center shadow pt-5 bg-primary">
          <h5 class="fg-gray">USD {{ currentInvestment.initial_deposit === null || isApproved === false?"0.00": currentInvestment.initial_deposit }}</h5>
          <hr>
          <p class="fs-small">Initial Deposits</p>
        </div>
      </div>
      <div class="col-lg-6 mt-4">
        <div class="card card-body border-0 text-center shadow pt-5 bg-primary">
          <h5 class="fg-gray">USD {{ currentInvestment.locked_deposit === null || isApproved === false?"0.00": currentInvestment.locked_deposit }}</h5>
          <hr>
          <p class="fs-small">Locked Deposits</p>
        </div>
      </div>
      <div class="col-lg-6 mt-4">
        <div class="card card-body border-0 text-center shadow pt-5 bg-primary">
          <h5 class="fg-gray">USD {{ isApproved === false?"0.00": currentInvestment.compounded_deposits }}</h5>
          <hr>
          <p class="fs-small">Compounded Deposits</p>
        </div>
      </div>
    </div>
    <!-- End deposits -->

    <!-- Withdrawals -->
    <div class="row mt-4">
  		<div class="col-lg-12">
  			<h3>Withdrawals</h3>
  		</div>
  	</div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card card-body border-0 text-center shadow pt-5 bg-success">
          <h5 class="fg-gray">USD {{ currentInvestment.total_withdrawals === null || isApproved === false?"0.00": currentInvestment.total_withdrawals }}</h5>
          <hr>
          <p class="fs-small">Total Withdrawals</p>
        </div>
      </div>
      <div class="col-lg-6 mg-mt">
        <div class="card card-body border-0 text-center shadow pt-5 bg-success">
          <h5 class="fg-gray">USD {{ currentInvestment.pending_withdrawals === null || isApproved === false?"0.00": currentInvestment.pending_withdrawals }}</h5>
          <hr>
          <p class="fs-small">Pending Withdrawals</p>
        </div>
      </div>
      <div class="col-lg-6 mt-4">
        <div class="card card-body border-0 text-center shadow pt-5 bg-success">
          <h5 class="fg-gray">USD {{ currentInvestment.referral_withdrawals === null || isApproved === false?"0.00": currentInvestment.referral_withdrawals }}</h5>
          <hr>
          <p class="fs-small">Referral Withdrawals</p>
        </div>
      </div>
    </div>
    <!-- End withdrawals -->

    <!-- Earnings -->
    <div class="row mt-4">
  		<div class="col-lg-12">
  			<h3>Earnings</h3>
  		</div>
  	</div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card card-body border-0 text-center shadow pt-5 bg-warning">
          <h5 class="fg-gray">USD {{ currentInvestment.total_earnings === null || isApproved === false?"0.00": currentInvestment.total_earnings }}</h5>
          <hr>
          <p class="fs-small">Total Earnings</p>
        </div>
      </div>
      <div class="col-lg-6 mg-mt">
        <div class="card card-body border-0 text-center shadow pt-5 bg-warning">
          <h5 class="fg-gray">USD {{ currentInvestment.paid_earnings === null || isApproved === false?"0.00": currentInvestment.paid_earnings }}</h5>
          <hr>
          <p class="fs-small">Paid Earnings</p>
        </div>
      </div>
      <div class="col-lg-6 mt-4">
        <div class="card card-body border-0 text-center shadow pt-5 bg-warning">
          <h5 class="fg-gray">USD {{ currentInvestment.compounded_earnings === null || isApproved === false?"0.00": currentInvestment.compounded_earnings }}</h5>
          <hr>
          <p class="fs-small">Compounded Earnings</p>
        </div>
      </div>
      <div class="col-lg-6 mt-4">
        <div class="card card-body border-0 text-center shadow pt-5 bg-warning">
          <h5 class="fg-gray">USD {{ currentInvestment.referral_earnings === null || isApproved === false?"0.00": currentInvestment.referral_earnings }}</h5>
          <hr>
          <p class="fs-small">Referral Earnings</p>
        </div>
      </div>
    </div>
    <!-- End Earnings -->
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
<style scoped>
.fg-gray,
.fs-small {
  color: #ffffff !important;
}

@media (max-width: 500px) {
	.mg-mt {
		margin-top: 1.5rem;
	}
}
</style>