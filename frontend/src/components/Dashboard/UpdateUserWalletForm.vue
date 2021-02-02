<template>
  <div class="row">
    <div class="col-lg-6 col-md-12 mx-auto">
      <div class="row">
        <div class="col-12 mt-5">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">Update user wallet</h4>
              <div class="form-group">
                <label for="initial-deposit" class="col-form-label">Initial deposit</label>
                <input v-model="initial_deposit" class="form-control" type="number" id="initial-deposit">
              </div>
              <div class="form-group">
                <label for="total-deposit" class="col-form-label">Total deposit</label>
                <input v-model="total_deposit" class="form-control" type="number" id="total-deposit">
              </div>
              <div class="form-group">
                <label for="locked-deposit" class="col-form-label">Locked deposit</label>
                <input v-model="locked_deposit" class="form-control" type="number" id="locked-deposit">
              </div>
              <div class="form-group">
                <label for="compounded-deposit" class="col-form-label">Compounded deposit</label>
                <input v-model="compounded_deposit" class="form-control" type="number" id="compounded-deposit">
              </div>
              <div class="form-group">
                <label for="total-earnings" class="col-form-label">Total earnings</label>
                <input v-model="total_earnings" class="form-control" type="number" id="total-earnings">
              </div>
              <div class="form-group">
                <label for="paid-earnings" class="col-form-label">Paid earnings</label>
                <input v-model="paid_earnings" class="form-control" type="number" id="paid-earnings">
              </div>
              <div class="form-group">
                <label for="compounded-earnings" class="col-form-label">Compounded earnings</label>
                <input v-model="compounded_earnings" class="form-control" type="number" id="compounded-earnings">
              </div>
              <div class="form-group">
                <label for="referral-earnings" class="col-form-label">Referral earnings</label>
                <input v-model="referral_earnings" class="form-control" type="number" id="referral-earnings">
              </div>
              <div class="form-group">
                <label for="pending-withdrawals" class="col-form-label">pending withdrawals</label>
                <input v-model="pending_withdrawals" class="form-control" type="number" id="pending-withdrawals">
              </div>
              <div class="form-group">
                <label for="total-withdrawals" class="col-form-label">Total withdrawals</label>
                <input v-model="total_withdrawals" class="form-control" type="number" id="total-withdrawals">
              </div>
              <div class="form-group">
                <label for="referral-withdrawals" class="col-form-label">Referral withdrawals</label>
                <input v-model="referral_withdrawals" class="form-control" type="number" id="referral-withdrawals">
              </div>
              <div class="form-group">
                <label for="package-level" class="col-form-label">Package Level</label>
                <input v-model="package_level" class="form-control" type="text" id="package-level">
              </div>
              <div class="form-group">
                <label for="Package Name" class="col-form-label">Package Name</label>
                <input v-model="package_name" class="form-control" type="text" value="Carlos Rath" id="Package Name">
              </div>
              <button @click="updateWallet" class="btn btn-lg btn-outline-success btn-block">
              	Update Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // deposit
      initial_deposit: null,
      total_deposit: null,
      locked_deposit: null,
      compounded_deposit: null,
      // earnings
      paid_earnings: null,
      total_earnings: null,
      compounded_earnings: null,
      referral_earnings: null,
      // withdrawals
      total_withdrawals: null,
      pending_withdrawals: null,
      referral_withdrawals: null,
      package_level: null,
      package_name: null
    }
  },

  computed: {
    currentInvestment() {
      if (this.$store.getters["subscription/getCurrentInvestment"] !== undefined) {
        return this.$store.getters["subscription/getCurrentInvestment"];
      }
      return {
        total_deposit: 0.00,
        package_level: "null",
        package_name: "null"
      }
    }
  },

  mounted() {
    this.$store.dispatch("subscription/getUserInvestment", this.userId)
      .then((paymentProof) => {
        console.log("paymentProof: ", paymentProof);
        this.paymentProof = paymentProof;
      });
    console.log("wallet: ", this.currentInvestment);
    this.total_deposit = this.currentInvestment.total_deposit;
    this.locked_deposit = this.currentInvestment.locked_deposit;
    this.initial_deposit = this.currentInvestment.initial_deposit;
    this.compounded_deposit = this.currentInvestment.compounded_deposits;
    this.paid_earnings = this.currentInvestment.paid_earnings;
    this.total_earnings = this.currentInvestment.total_earnings;
    this.compounded_earnings = this.currentInvestment.compounded_earnings;
    this.referral_earnings = this.currentInvestment.referral_earnings;
    this.total_withdrawals = this.currentInvestment.total_withdrawals;
    this.pending_withdrawals = this.currentInvestment.pending_withdrawals;
    this.referral_withdrawals = this.currentInvestment.referral_withdrawals;
    this.package_level = this.currentInvestment.package_level;
    this.package_name = this.currentInvestment.package_name;
  },

  methods: {
    updateWallet() {
      this.$store.dispatch("user/updateDeposit", {
          id: this.currentInvestment.id,
          // amount: 0,
          initial_deposit: +this.initial_deposit,
          total_deposit: +this.total_deposit,
          locked_deposit: +this.locked_deposit,
          compounded_deposits: +this.compounded_deposit,
          paid_earnings: +this.paid_earnings,
          total_earnings: +this.total_earnings,
          compounded_earnings: +this.compounded_earnings,
          referral_earnings: +this.referral_earnings,
          total_withdrawals: +this.total_withdrawals,
          pending_withdrawals: +this.pending_withdrawals,
          referral_withdrawals: +this.referral_withdrawals,
          package_level: this.package_level,
          package_name: this.package_name,
          verified: this.currentInvestment.verified,
          paymentProof: this.currentInvestment.paymentProof
        })
        .then((data) => {
          console.log("updated wallet", data.data);
          this.$swal({
            icon: "success",
            title: "Wallet updated successfully",
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          console.log(err);
          this.$swal({
            icon: "error",
            title: "Wallet update unsuccessful",
            showConfirmButton: false,
            timer: 1500
          })
        });
    }
  }
}
</script>