<template>
  <div class="row">
    <div class="col-md-6 mt-5 mb-3">
      <div class="card">
        <div class="seo-fact sbg1">
          <div class="p-4 d-flex justify-content-between align-items-center">
            <div class="seofct-icon"><i class="ti-user"></i></div>
            <h2>{{ user.name }}</h2>
          </div>
          <router-link :to="'/dashboard/users/'+ $route.params.id+'/profile/update-user-wallet'" class="btn btn-lg btn-block btn-success purple text-center">Update User Wallet</router-link>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-5 mb-3 mb-lg-0">
      <div class="card">
        <div class="seo-fact sbg1">
          <div class="p-4 d-flex justify-content-between align-items-center">
            <div class="seofct-icon">Investment Plan</div>
            <h2>{{ currentInvestment.package_name }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-md-5 mb-3">
      <div class="card">
        <LightBox ref="lightbox" :media="media" :showLightBox="showLightBox"></LightBox>
        <div class="seo-fact sbg2">
          <div class="p-4 d-flex justify-content-between align-items-center">
            <div class="seofct-icon"><i class="ti-share"></i> Initial deposits</div>
            <h2>${{ currentInvestment.initial_deposit }}</h2>
          </div>
          <div class="d-flex justify-content-around mb-3">
            <button @click="approveDeposit" class="btn btn-lg btn-success"><span>{{ depositApproved || currentInvestment.verified === 1? "Deposit Approved": "Approve Deposit"}}</span></button>
            <button @click="openLightBox" class="btn btn-lg btn-success"><span>View Payment Proof</span></button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-md-5 mb-3">
      <div class="card">
        <div class="seo-fact sbg2">
          <div class="p-4 d-flex justify-content-between align-items-center">
            <div class="seofct-icon"><i class="ti-share"></i> Total deposits</div>
            <h2>${{ currentInvestment.total_deposit }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-md-5 mb-3">
      <div class="card">
        <div class="seo-fact sbg2">
          <div class="p-4 d-flex justify-content-between align-items-center">
            <div class="seofct-icon"><i class="ti-share"></i> Locked deposits</div>
            <h2>${{ currentInvestment.locked_deposit }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-md-5 mb-3">
      <div class="card">
        <div class="seo-fact sbg2">
          <div class="p-4 d-flex justify-content-between align-items-center">
            <div class="seofct-icon"><i class="ti-share"></i> Compounded deposits</div>
            <h2>${{ currentInvestment.compounded_deposit }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-md-5 mb-3">
      <div class="card">
        <div class="seo-fact sbg3">
          <div class="p-4 d-flex justify-content-between align-items-center">
            <div class="seofct-icon"><i class="ti-share"></i> Paid earnings</div>
            <h2>${{ currentInvestment.paid_earnings }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-md-5 mb-3">
      <div class="card">
        <div class="seo-fact sbg3">
          <div class="p-4 d-flex justify-content-between align-items-center">
            <div class="seofct-icon"><i class="ti-share"></i> Total earnings</div>
            <h2>${{ currentInvestment.total_earnings }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-md-5 mb-3">
      <div class="card">
        <div class="seo-fact sbg3">
          <div class="p-4 d-flex justify-content-between align-items-center">
            <div class="seofct-icon"><i class="ti-share"></i> Compounded earnings</div>
            <h2>${{ currentInvestment.compounded_earnings }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-md-5 mb-3">
      <div class="card">
        <div class="seo-fact sbg3">
          <div class="p-4 d-flex justify-content-between align-items-center">
            <div class="seofct-icon"><i class="ti-share"></i> Referral earnings</div>
            <h2>${{ currentInvestment.referral_earnings }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-md-5 mb-3">
      <div class="card">
        <div class="seo-fact sbg4">
          <div class="p-4 d-flex justify-content-between align-items-center">
            <div class="seofct-icon"><i class="ti-share"></i> Total withdrawals</div>
            <h2>${{ currentInvestment.total_withdrawals }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-md-5 mb-3">
      <div class="card">
        <div class="seo-fact sbg4">
          <div class="p-4 d-flex justify-content-between align-items-center">
            <div class="seofct-icon"><i class="ti-share"></i> Referral withdrawals</div>
            <h2>${{ currentInvestment.referral_withdrawals }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 mt-md-5 mb-3">
      <div class="card">
        <div class="seo-fact sbg4">
          <div class="p-4 d-flex justify-content-between align-items-center">
            <div class="seofct-icon"><i class="ti-share"></i> Pending withdrawals</div>
            <h2>${{ currentInvestment.pending_withdrawals }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import UpdateUserWalletForm from "@/components/dashboard/UpdateUserWalletForm.vue";
import LightBox from 'vue-image-lightbox'
export default {
  components: {
    // UpdateUserWalletForm
    LightBox
  },

  data() {
    return {
      userId: this.$route.params.id,
      kycPath: null,
      url: process.env.VUE_APP_IMAGE_URL,
      displayImage: false,
      depositApproved: false,
      paymentProof: null,
      showForm: false,
      media: [],
      showLightBox: false
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
    openLightBox() {
      this.$refs.lightbox.showImage(0);
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
        console.log("paymentProof: ", paymentProof);
        this.paymentProof = paymentProof;
        this.media.push({
          thumb: this.url + paymentProof,
          src: this.url + paymentProof
        })
      });
    this.$store.dispatch("user/getWithdrawals", this.userId);
  }
}
</script>
<style scoped>
.purple {
  background: #6c8fea !important;
}
</style>