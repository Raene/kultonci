<template>
    <div class="container-fluid">
        <div v-if="!displayImage" class="row justify-content-center">
            <div v-if="!showForm" class="col-12">
                <h2 class="h3 mb-4 page-title">Profile</h2>
                <div class="row mt-5 align-items-center">
                    <div class="col-md-3 text-center mb-5">
                        <div class="avatar avatar-xl">
                            <img :src="url + kycPath" alt="..." class="avatar-img rounded-circle img-thumbnail">
                        </div>
                    </div>
                    <div class="col">
                        <div class="row align-items-center">
                            <div class="col-md-7">
                                <h4 class="mb-1">{{ user.name }}</h4>
                                <p class="small mb-3"><span class="badge badge-dark">{{ user.userEmail }}</span></p>
                            </div>
                        </div>
                        <div class="row mb-4">
                    <div class="col-md-7">
                      <button @click="showUpdateForm" class="btn btn-success"> Update user wallet </button>
                    </div>
                    <!-- <div class="col">
                      <p class="small mb-0 text-muted">Nec Urna Suscipit Ltd</p>
                      <p class="small mb-0 text-muted">P.O. Box 464, 5975 Eget Avenue</p>
                      <p class="small mb-0 text-muted">(537) 315-1481</p>
                    </div> -->
                  </div>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-md-6">
                        <div class="card mb-4 shadow">
                            <div class="card-body my-n3">
                                <div class="row align-items-center">
                                    <div class="col-3 text-center">
                                        <span class="circle circle-lg bg-light">
                                            <i class="fe fe-dollar-sign fe-24 text-primary"></i>
                                        </span>
                                    </div> <!-- .col -->
                                    <div class="col">
                                        <a href="#">
                                            <h3 class="h5 mt-4 mb-1">Initial Deposits</h3>
                                        </a>
                                        <p class="text-muted">USD {{ currentInvestment.initial_deposit }}</p>
                                    </div> <!-- .col -->
                                </div> <!-- .row -->
                            </div> <!-- .card-body -->
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-auto">
                                        <button @click="approveDeposit" class="btn btn-success d-flex justify-content-between"><span>{{ depositApproved || currentInvestment.verified === 1? "Deposit Approved": "Approve Deposit"}}</span></button>
                                    </div>
                                    <div class="col-auto">
                                        <button @click="viewImage" class="btn btn-success d-flex justify-content-between"><span>View Payment Proof</span></button>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- .card -->
                    </div> <!-- .col-md-->
                    <div class="col-md-6">
                        <div class="card mb-4 shadow">
                            <div class="card-body my-n3">
                                <div class="row align-items-center">
                                    <div class="col-3 text-center">
                                        <span class="circle circle-lg bg-light">
                                            <i class="fe fe-credit-card fe-24 text-primary"></i>
                                        </span>
                                    </div> <!-- .col -->
                                    <div class="col">
                                        <a href="#">
                                            <h3 class="h5 mt-4 mb-1">Total Deposit</h3>
                                        </a>
                                        <p class="text-muted">USD {{ currentInvestment.total_deposit }}</p>
                                    </div> <!-- .col -->
                                </div> <!-- .row -->
                            </div> <!-- .card-body -->
                            <!-- <div class="card-footer">
                      <a href="" class="d-flex justify-content-between text-muted"><span>Security Settings</span><i class="fe fe-chevron-right"></i></a>
                    </div> -->
                        </div> <!-- .card -->
                    </div> <!-- .col-md-->
                </div> <!-- .row-->
                <div class="row my-4">
                    <div class="col-md-6">
                        <div class="card mb-4 shadow">
                            <div class="card-body my-n3">
                                <div class="row align-items-center">
                                    <div class="col-3 text-center">
                                        <span class="circle circle-lg bg-light">
                                            <i class="fe fe-dollar-sign fe-24 text-primary"></i>
                                        </span>
                                    </div> <!-- .col -->
                                    <div class="col">
                                        <a href="#">
                                            <h3 class="h5 mt-4 mb-1">Locked Deposit</h3>
                                        </a>
                                        <p class="text-muted">USD {{ currentInvestment.locked_deposit }}</p>
                                    </div> <!-- .col -->
                                </div> <!-- .row -->
                            </div> <!-- .card-body -->
                        </div> <!-- .card -->
                    </div> <!-- .col-md-->
                    <div class="col-md-6">
                        <div class="card mb-4 shadow">
                            <div class="card-body my-n3">
                                <div class="row align-items-center">
                                    <div class="col-3 text-center">
                                        <span class="circle circle-lg bg-light">
                                            <i class="fe fe-credit-card fe-24 text-primary"></i>
                                        </span>
                                    </div> <!-- .col -->
                                    <div class="col">
                                        <a href="#">
                                            <h3 class="h5 mt-4 mb-1">Compounded Deposit</h3>
                                        </a>
                                        <p class="text-muted">USD {{ currentInvestment.compounded_deposits }}</p>
                                    </div> <!-- .col -->
                                </div> <!-- .row -->
                            </div> <!-- .card-body -->
                            <!-- <div class="card-footer">
                      <a href="" class="d-flex justify-content-between text-muted"><span>Security Settings</span><i class="fe fe-chevron-right"></i></a>
                    </div> -->
                        </div> <!-- .card -->
                    </div> <!-- .col-md-->
                </div> <!-- .row-->
                <div class="row my-4">
                    <div class="col-md-6">
                        <div class="card mb-4 shadow">
                            <div class="card-body my-n3">
                                <div class="row align-items-center">
                                    <div class="col-3 text-center">
                                        <span class="circle circle-lg bg-light">
                                            <i class="fe fe-dollar-sign fe-24 text-primary"></i>
                                        </span>
                                    </div> <!-- .col -->
                                    <div class="col">
                                        <a href="#">
                                            <h3 class="h5 mt-4 mb-1">Paid Earnings</h3>
                                        </a>
                                        <p class="text-muted">USD {{ currentInvestment.paid_earnings }}</p>
                                    </div> <!-- .col -->
                                </div> <!-- .row -->
                            </div> <!-- .card-body -->
                        </div> <!-- .card -->
                    </div> <!-- .col-md-->
                    <div class="col-md-6">
                        <div class="card mb-4 shadow">
                            <div class="card-body my-n3">
                                <div class="row align-items-center">
                                    <div class="col-3 text-center">
                                        <span class="circle circle-lg bg-light">
                                            <i class="fe fe-credit-card fe-24 text-primary"></i>
                                        </span>
                                    </div> <!-- .col -->
                                    <div class="col">
                                        <a href="#">
                                            <h3 class="h5 mt-4 mb-1">Total Earnings</h3>
                                        </a>
                                        <p class="text-muted">USD {{ currentInvestment.total_earnings }}</p>
                                    </div> <!-- .col -->
                                </div> <!-- .row -->
                            </div> <!-- .card-body -->
                            <!-- <div class="card-footer">
                      <a href="" class="d-flex justify-content-between text-muted"><span>Security Settings</span><i class="fe fe-chevron-right"></i></a>
                    </div> -->
                        </div> <!-- .card -->
                    </div> <!-- .col-md-->
                </div> <!-- .row-->
                <div class="row my-4">
                    <div class="col-md-6">
                        <div class="card mb-4 shadow">
                            <div class="card-body my-n3">
                                <div class="row align-items-center">
                                    <div class="col-3 text-center">
                                        <span class="circle circle-lg bg-light">
                                            <i class="fe fe-dollar-sign fe-24 text-primary"></i>
                                        </span>
                                    </div> <!-- .col -->
                                    <div class="col">
                                        <a href="#">
                                            <h3 class="h5 mt-4 mb-1">Compounded Earnings</h3>
                                        </a>
                                        <p class="text-muted">USD {{ currentInvestment.compounded_earnings }}</p>
                                    </div> <!-- .col -->
                                </div> <!-- .row -->
                            </div> <!-- .card-body -->
                        </div> <!-- .card -->
                    </div> <!-- .col-md-->
                    <div class="col-md-6">
                        <div class="card mb-4 shadow">
                            <div class="card-body my-n3">
                                <div class="row align-items-center">
                                    <div class="col-3 text-center">
                                        <span class="circle circle-lg bg-light">
                                            <i class="fe fe-credit-card fe-24 text-primary"></i>
                                        </span>
                                    </div> <!-- .col -->
                                    <div class="col">
                                        <a href="#">
                                            <h3 class="h5 mt-4 mb-1">Referral Earnings</h3>
                                        </a>
                                        <p class="text-muted">USD {{ currentInvestment.referral_earnings }}</p>
                                    </div> <!-- .col -->
                                </div> <!-- .row -->
                            </div> <!-- .card-body -->
                            <!-- <div class="card-footer">
                      <a href="" class="d-flex justify-content-between text-muted"><span>Security Settings</span><i class="fe fe-chevron-right"></i></a>
                    </div> -->
                        </div> <!-- .card -->
                    </div> <!-- .col-md-->
                </div> <!-- .row-->
                <div class="row my-4">
                    <div class="col-md-6">
                        <div class="card mb-4 shadow">
                            <div class="card-body my-n3">
                                <div class="row align-items-center">
                                    <div class="col-3 text-center">
                                        <span class="circle circle-lg bg-light">
                                            <i class="fe fe-dollar-sign fe-24 text-primary"></i>
                                        </span>
                                    </div> <!-- .col -->
                                    <div class="col">
                                        <a href="#">
                                            <h3 class="h5 mt-4 mb-1">Total Withdrawals</h3>
                                        </a>
                                        <p class="text-muted">USD {{ currentInvestment.total_withdrawals }}</p>
                                    </div> <!-- .col -->
                                </div> <!-- .row -->
                            </div> <!-- .card-body -->
                        </div> <!-- .card -->
                    </div> <!-- .col-md-->
                    <div class="col-md-6">
                        <div class="card mb-4 shadow">
                            <div class="card-body my-n3">
                                <div class="row align-items-center">
                                    <div class="col-3 text-center">
                                        <span class="circle circle-lg bg-light">
                                            <i class="fe fe-credit-card fe-24 text-primary"></i>
                                        </span>
                                    </div> <!-- .col -->
                                    <div class="col">
                                        <a href="#">
                                            <h3 class="h5 mt-4 mb-1">Referral Withdrawals</h3>
                                        </a>
                                        <p class="text-muted">USD {{ currentInvestment.referral_withdrawals }}</p>
                                    </div> <!-- .col -->
                                </div> <!-- .row -->
                            </div> <!-- .card-body -->
                            <!-- <div class="card-footer">
                      <a href="" class="d-flex justify-content-between text-muted"><span>Security Settings</span><i class="fe fe-chevron-right"></i></a>
                    </div> -->
                        </div> <!-- .card -->
                    </div> <!-- .col-md-->
                </div> <!-- .row-->
                <div class="row my-4">
                    <div class="col-md-6">
                        <div class="card mb-4 shadow">
                            <div class="card-body my-n3">
                                <div class="row align-items-center">
                                    <div class="col-3 text-center">
                                        <span class="circle circle-lg bg-light">
                                            <i class="fe fe-dollar-sign fe-24 text-primary"></i>
                                        </span>
                                    </div> <!-- .col -->
                                    <div class="col">
                                        <a href="#">
                                            <h3 class="h5 mt-4 mb-1">Pending Withdrawals</h3>
                                        </a>
                                        <p class="text-muted">USD {{ currentInvestment.pending_withdrawals }}</p>
                                    </div> <!-- .col -->
                                </div> <!-- .row -->
                            </div> <!-- .card-body -->
                        </div> <!-- .card -->
                    </div> <!-- .col-md-->
                </div> <!-- .row-->
                <h3>Subscription</h3>
                <!-- <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus.</p> -->
                <div class="card-deck my-4">
                    <div class="card mb-4 shadow">
                        <div class="card-body text-center my-4">
                            <a href="#">
                                <h3 class="h5 mt-4 mb-0">{{ currentInvestment.package_name }}</h3>
                            </a>
                            <p class="text-muted">{{ currentInvestment.package_level }}</p>
                            <span class="h1 mb-0">${{ currentInvestment.total_deposit }}</span>
                            <!-- <p class="text-muted">year</p>
                            <ul <button type="button" class="btn mb-2 btn-primary btn-lg">Ugrade</button>class="list-unstyled">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Eget porttitor lorem</li>
                            </ul> -->
                            <div>
                                <span class="dot dot-lg bg-success"></span>
                                <span class="text-muted ml-3">Active</span>
                            </div>
                            <button v-if="currentInvestment.verified === 1" type="button" class="btn mt-3 mb-2 btn-primary btn-lg">Deactivate</button>
                        </div> <!-- .card-body -->
                    </div> <!-- .card -->
                    <!-- <div class="card mb-4">
                        <div class="card-body text-center my-4">
                            <a href="#">
                                <h3 class="h5 mt-4 mb-0">Professional</h3>
                            </a>
                            <p class="text-muted">package</p>
                            <span class="h1 mb-0">$16.9</span>
                            <p class="text-muted">year</p>
                            <ul class="list-unstyled">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Eget porttitor lorem</li>
                            </ul>
                            <button type="button" class="btn mb-2 btn-primary btn-lg">Ugrade</button>
                        </div> .card-body
                    </div> .card -->
                </div> <!-- .card-group -->
                <h6 v-if="false" class="mb-3">Withdrawals History</h6>
              <table v-if="false" class="table table-borderless table-striped">
                <thead>
                  <tr role="row">
                    <th>ID</th>
                    <th>Withdrawal Date</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col">1331</th>
                    <td>2020-12-26 01:32:21</td>
                    <td>$16.9</td>
                    <td>
                      <div class="dropdown">
                        <button class="btn btn-sm dropdown-toggle more-vertical" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span class="text-muted sr-only">Action</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">1156</th>
                    <td>2020-04-21 00:38:38</td>
                    <td>$9.9</td>
                    <td>
                      <div class="dropdown">
                        <button class="btn btn-sm dropdown-toggle more-vertical" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span class="text-muted sr-only">Action</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">1038</th>
                    <td>2019-06-25 19:13:36</td>
                    <td>$9.9</td>
                    <td>
                      <div class="dropdown">
                        <button class="btn btn-sm dropdown-toggle more-vertical" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span class="text-muted sr-only">Action</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">1227</th>
                    <td>2021-01-22 13:28:00</td>
                    <td>$9.9</td>
                    <td>
                      <div class="dropdown">
                        <button class="btn btn-sm dropdown-toggle more-vertical" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span class="text-muted sr-only">Action</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <UpdateUserWalletForm v-else :wallet_details="currentInvestment"/>
        </div>
        <div v-else class="row justify-content-center">
            <div class="col-12">
                <ImageDisplay @exitPreview="closePreview($event)" :path="paymentProof" :displayImage="displayImage" />
            </div>
        </div>
    </div>
</template>
<script>
import ImageDisplay from "@/components/dashboard/ImageDisplay.vue";
import UpdateUserWalletForm from "@/components/dashboard/UpdateUserWalletForm.vue";
export default {
    components: {
        ImageDisplay,
        UpdateUserWalletForm
    },

    data() {
        return {
            userId: this.$route.params.profileId,
            kycPath: null,
            url: process.env.VUE_APP_IMAGE_URL,
            displayImage: false,
            depositApproved: false,
            paymentProof: null,
            showForm: false
        };
    },

    computed: {
        user() {
            return this.$store.getters["user/getUser"];
        },

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

    methods: {
        viewImage() {
            this.displayImage = true;
        },

        closePreview(value) {
            this.displayImage = value;
        },

        approveDeposit() {
            this.$store.dispatch("user/approveDeposit", { id: this.currentInvestment.id, verified: true })
                .then((data) => {
                    console.log("approve data: ", data.data.success);
                    if (data.data.success === true) {
                        this.depositApproved = true;
                        this.$swal({
                            icon: "success",
                            title: "Deposit Approved",
                            timer: 1500
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                    this.$swal({
                            icon: "error",
                            title: "Deposit Not Approved",
                            timer: 1500
                        });
                });
        },

        showUpdateForm() {
            this.showForm = true;
        }
    },

    mounted() {
        console.log("userId: ", this.userId);
        this.$store.dispatch("user/getUser", this.userId)
            .then((data) => {
                console.log("userdata: ", data.data.data[0]);
                this.$store.commit("user/SET_USER", data.data.data[0]);
                const fullUserPath = data.data.data[0].kycPath;
                this.kycPath = fullUserPath;
                console.log("kycPath: ", this.kycPath);
            })
            .catch(err => {
                console.log(err);
            });
        this.$store.dispatch("subscription/getUserInvestment", this.userId)
            .then((paymentProof) => {
                this.paymentProof = paymentProof;
            });
        this.$store.dispatch("user/getWithdrawals", this.userId);
    }
}
</script>
<style scoped>
.text-muted {
    font-weight: bolder;
}

img {
    border-radius: 0 !important;
}

.card-footer .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media (max-width: 380px) {
    .card-footer .row {
        justify-content: center !important;
    }
}
</style>