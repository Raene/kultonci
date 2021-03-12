<template>
  <div>
    <TheHeader />
    <main>
      <div class="page-hero-section bg-image hero-mini">
        <div class="overlay"></div>
        <div class="hero-caption">
          <div class="container fg-white h-100">
            <div class="row justify-content-center align-items-center text-center h-100">
              <div class="col-lg-6">
                <h3 class="mb-4 fw-medium">{{ profile.name }}'s Wallet</h3>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                    <li class="breadcrumb-item">
                    	<p v-if="currentInvestment.package_name === 'null'">No package</p>
                    	<p v-else-if="currentInvestment.package_name !== 'null' && currentInvestment.verified !== 0">{{ currentInvestment.package_name }}</p>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                    	<router-link to="/user-wallet/user/profile" class="meta-link">View Profile</router-link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="container">
          <div class="row">
            <!-- Sidebar -->
            <div class="col-lg-4 py-3">
              <div class="widget-wrap">
                <h3 class="widget-title">Wallet</h3>
                <div class="tag-clouds">
                  <router-link to="/user-wallet/user" class="tag-cloud-link">Dashboard</router-link> <br>
                  <router-link to="/user-wallet/user/profile" class="tag-cloud-link">View Profile</router-link> <br>
                  <router-link to="/investment-packages" class="tag-cloud-link">Invest</router-link> <br>
                  <router-link to="#" class="tag-cloud-link">Request Withdrawal</router-link> <br>
                  <router-link to="/user-wallet/referrals" class="tag-cloud-link">Referrals</router-link> <br>
                </div>
              </div>
              <div class="widget-wrap">
                <h3 class="widget-title">Referral Link</h3>
                <form>
                  <input id="referral_value"  v-model="referral_code" type="text" class="form-control" disabled>
                  <button @click.prevent="copyLink" id="singlebutton" name="singlebutton" class="btn btn-dark mt-3 link-btn">Copy Link</button>
                </form>
              </div>
            </div> <!-- end sidebar -->
            <router-view />
          </div>
        </div>
      </div>
    </main>
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
<style scoped>
.bg-image {
  background-image: url(../assets/img/man-silver-bitcoin_1.jpg);
}
</style>