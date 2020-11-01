<template>
    <div class="col-12">
        <h2 class="page-title text-center">Update User Wallet</h2>
        <div class="row">
            <div class="col-md-6">
                <div class="card shadow mb-4">
                    <div class="card-body">
                        <form @submit.prevent="updateWallet">
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
                            <p class="mb-2"><strong>Enter earnings</strong></p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input v-model="earnings" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
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
            total_deposit: null,
            locked_deposit: null,
            earnings: null,
            package_level: null,
            package_name: null
        }
    },

    mounted() {
    	this.total_deposit = this.wallet_details.total_deposit;
    	this.locked_deposit = this.wallet_details.locked_deposit;
    	this.earnings = this.wallet_details.earnings;
    	this.package_level = this.wallet_details.package_level;
    	this.package_name = this.wallet_details.package_name;
    },

    methods: {
        updateWallet() {
            this.$store.dispatch("user/approveDeposit", {
                id: this.wallet_details.id,
                total_deposit: this.total_deposit,
                locked_deposit: this.locked_deposit,
                earnings: this.earnings,
                package_level: this.package_level,
                package_name: this.package_name,
                verified: this.wallet_details.verified,
                paymentProof: this.wallet_details.paymentProof,
                user_id: this.$route.params.id
            })
            .then((data) => {
            	console.log("updated wallet", data.data.success);
            	if (data.data.success === true) {
            		this.$swal({
            			icon: "success",
            			title: "Wallet updated successfully",
            			showConfirmButton: false,
            			timer: 1500
            		})
            	}
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