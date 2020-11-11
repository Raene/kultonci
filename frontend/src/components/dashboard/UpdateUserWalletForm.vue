<template>
    <div class="col-12">
        <h2 class="page-title text-center">Update User Wallet</h2>
        <div class="row">
            <div class="col-md-6">
                <div class="card shadow mb-4">
                    <div class="card-body">
                        <form @submit.prevent="updateWallet">
                            <!-- deposits -->
                            <p class="mb-2"><strong>Enter initial deposit</strong></p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input v-model="initial_deposit" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                            <p class="mb-2"><strong>Enter total deposit</strong></p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input v-model="total_deposit" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                            <p class="mb-2"><strong>Enter locked deposit</strong></p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input v-model="locked_deposit" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                            <p class="mb-2"><strong>Enter compounded deposit</strong></p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input v-model="compounded_deposit" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                            <!-- earnings -->
                            <p class="mb-2"><strong>Enter total earnings</strong></p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input v-model="total_earnings" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                            <p class="mb-2"><strong>Enter paid earnings</strong></p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input v-model="paid_earnings" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                            <p class="mb-2"><strong>Enter compounded earnings</strong></p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input v-model="compounded_earnings" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                            <p class="mb-2"><strong>Enter referral earnings</strong></p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input v-model="referral_earnings" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                            <!-- withdrawals -->
                            <p class="mb-2"><strong>Enter total withdrawals</strong></p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input v-model="total_withdrawals" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                            <p class="mb-2"><strong>Enter pending withdrawals</strong></p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input v-model="pending_withdrawals" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                            <p class="mb-2"><strong>Enter referral withdrawals</strong></p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input v-model="referral_withdrawals" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                            <p class="mb-2"><strong>Enter package level</strong></p>
                            <div class="form-group mb-3">
                                <input v-model="package_level" type="text" id="package_level" class="form-control">
                            </div>
                            <p class="mb-2"><strong>Enter package name</strong></p>
                            <div class="form-group mb-3">
                                <input v-model="package_name" type="text" id="name" class="form-control">
                            </div>
                            <button type="submit" class="btn mt-3 mb-2 btn-primary btn-lg">Submit</button>
                        </form>
                    </div>
                </div>
            </div> <!-- /.col -->
        </div>
    </div>
</template>
<script>
export default {
    props: ["wallet_details"],
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

    mounted() {
        console.log("wallet: ", this.wallet_details);
        this.total_deposit = this.wallet_details.total_deposit;
        this.locked_deposit = this.wallet_details.locked_deposit;
        this.initial_deposit = this.wallet_details.initial_deposit;
        this.compounded_deposit = this.wallet_details.compounded_deposits;
        this.paid_earnings = this.wallet_details.paid_earnings;
        this.total_earnings = this.wallet_details.total_earnings;
        this.compounded_earnings = this.wallet_details.compounded_earnings;
        this.referral_earnings = this.wallet_details.referral_earnings;
        this.total_withdrawals = this.wallet_details.total_withdrawals;
        this.pending_withdrawals = this.wallet_details.pending_withdrawals;
        this.referral_withdrawals = this.wallet_details.referral_withdrawals;
        this.package_level = this.wallet_details.package_level;
        this.package_name = this.wallet_details.package_name;
    },

    methods: {
        updateWallet() {
            this.$store.dispatch("user/updateDeposit", {
                    id: this.wallet_details.id,
                    amount: 0,
                    initial_deposit: this.initial_deposit,
                    total_deposit: this.total_deposit,
                    locked_deposit: this.locked_deposit,
                    compounded_deposits: this.compounded_deposit,
                    paid_earnings: this.paid_earnings,
                    total_earnings: +this.total_earnings,
                    compounded_earnings: this.compounded_earnings,
                    referral_earnings: this.referral_earnings,
                    total_withdrawals: this.total_withdrawals,
                    pending_withdrawals: this.pending_withdrawals,
                    referral_withdrawals: this.referral_withdrawals,
                    package_level: this.package_level,
                    package_name: this.package_name,
                    verified: this.wallet_details.verified,
                    paymentProof: this.wallet_details.paymentProof
                })
                .then((data) => {
                    console.log("updated wallet", data.data.success);
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
<style scoped>
.col-md-6 {
    margin: 0 auto;
}
</style>