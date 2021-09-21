<template>
  <div>
    <TheHeader />
    <div class="page-hero-section bg-image hero-mini">
      <div class="overlay"></div>
      <div class="hero-caption">
        <div class="container fg-white h-100">
          <div class="row justify-content-center align-items-center text-center h-100">
            <div class="col-lg-6">
              <h3 class="mb-4 fw-medium">Investment Packages</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!kycReady">
      <div class="page-section">
        <div class="container">
          <div v-for="(p, index) in packages" :key="index" class="pricing-table mt-5 wow fadeInUp">
            <div class="pricing-item active no-transform">
              <div class="pricing-header text-center">
                <h5 class="fw-normal">{{ Object.keys(p)[0] }}</h5>
              </div>
              <div v-for="(subPackage, j) in p" :key="j">
                <div class="sub-package" v-for="(value, k) in subPackage" :key="k">
                  <h6 class="text-center">{{ value.PackageName }}</h6>
                  <div class="pricing-body">
                    <ul class="theme-list">
                      <li class="list-item">Minimum Investment of ${{ value.minprice }}</li>
                      <li class="list-item">Maximum Investment of ${{ value.maxprice }}</li>
                      <li class="list-item">RETURNS {{ value.percentageReturns }}%</li>
                      <li class="list-item">REFERRAL BONUS {{ value.referral_bonus }}%</li>
                    </ul>
                  </div>
                  <hr>
                </div>
              </div>
              <div class="pricing-btn text-center">
                <router-link :to="'/investment-packages/'+Object.keys(p)[0]" class="btn btn-dark">Choose Plan</router-link>
              </div>
            </div>
          </div>
          <div class="pricing-table mt-5 wow fadeInUp">
            <div class="pricing-item">
              <div class="pricing-header text-center">
                <h5 class="fw-normal">Non-farm Payroll</h5>
                <h6>Platinum</h6>
              </div>
              <div class="pricing-body">
                <ul class="theme-list">
                  <li class="list-item">Minimum Investment of $3,000</li>
                  <li class="list-item">Maximum Investment of $1,000,000</li>
                  <li class="list-item">Get monthly returns of up to 50% profit</li>
                  <li class="list-item">WHAT IS NFP(NON FARM PAYROLL):</li>
                  <li class="list-item">The non-farm payroll (NFP) report is a key economic indicator for the United States. It is intended to represent the total number of paid workers in the U.S. minus farm employees, government employees, private household employees and employees of non-profit organizations. Non-Farm Payroll is among the biggest  market movers  in the foreign exchange  market . on the first Friday of every month, the U.S bureau of labour releases numbers of new jobs in U.S- long with other labour market. While every Saturday is the profit payday.</li>
                  <!-- <li class="list-item">24/7 Support</li> -->
                </ul>
              </div>
              <div class="pricing-btn text-center">
                <button @click="showForm('nfp')" class="btn btn-dark">Choose Plan</button>
              </div>
            </div>
          </div>
          <div class="row text-center mt-5">
            <div class="col-md-12">
              <a @click.prevent="kycReady = true" href="#" class="btn btn-primary">Upload proof of payment</a>
            </div>
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 offset-lg-1 py-3 mt-lg-5 wow fadeInUp">
              <h1 class="mb-4">Risk Disclaimer</h1>
              <p>Services include products that are traded on margin and carry a risk of losses. Please ensure that you fully understand the risks involved. In light of any risk involved or encountered during trading, Lunar Alliance Investments guarantees a 90% refund of capital although, fortunately, we have recorded zero losses since our inception in 2015.
                Lunar Alliance Investments is issued by Lunar Alliance Investments Branch ("Issuer"). By
                submitting this application, you are requesting Issuer ("we", "us", or "our") to establish an Lunar Alliance Investments account (the "Account") in your name, and you are agreeing to the following terms and conditions. If approved, your Account will be governed by Lunar Alliance Investments Customer Agreement provided to you at Account opening. The rates and terms associated with your Account are subject to change at any time, subject to applicable law.</p>
                <p class="small mb-0">
                All investment packages will run for 15 weeks from the day recorded of each investors first profit before renewal.
              </p>
            </div>

              
          </div>
        </div>
      </div>
    </div>
    <KnowYourCustomer @closeKyc="close" v-else-if="kycReady" />
    <TheFooter />
  </div>
</template>
<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import KnowYourCustomer from "@/components/KnowYourCustomer.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
    KnowYourCustomer
  },

  data() {
    return {
      user: localStorage.getItem("user"),
      kycReady: false
    }
  },

  beforeMount() {
    this.$store.dispatch("subscription/getInvestmentPackages");
  },

  computed: {
    packages() {
      return this.$store.getters["subscription/getPackages"];
    },

    btcAddress() {
      return this.$store.getters["subscription/getBtcAddress"];
    }
  },

  methods: {
    close() {
      this.kycReady = false;
    },
    showForm(pkg_name) {
      if (this.user) {
        this.$swal({
          title: "Input Amount",
          input: "text",
          showConfirmButton: true,
          confirmButtonText: "Submit"
        }).then((result) => {
          if (result.value) {
            const amount = this.$swal.getInput().value;
            console.log("amount: ", amount);
            const user = JSON.parse(localStorage.getItem("user"));
            this.$store.dispatch("subscription/createDeposit", {
                user_id: user.id,
                // locked_deposit: +amount,
                initial_deposit: +amount,
                package_name: pkg_name
              })
              .then((data) => {
                console.log("deposit data: ", data.data.data);
                // this.dep_id = data.data.data;
                localStorage.setItem("deposit_id", data.data.data);
              })
              .catch(err => console.log(err))
            this.$swal({
              title: "BTC Address",
              text: "Make payment using BTC address, then upload proof of payment",
              input: "text",
              inputValue: this.btcAddress,
              inputAttributes: {
                disabled: true
              },
              showConfirmButton: true,
              confirmButtonText: "Copy BTC address"
            }).then((result) => {
              if (result.value) {
                const copyText = this.$swal.getInput();
                copyText.select();
                navigator.clipboard.writeText(copyText.value);
                this.$swal({
                  position: "center",
                  icon: "success",
                  title: "Copied",
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            });
          }
        })
      } else {
        this.$router.push("/login")
      }
    }
  }
};
</script>
<style scoped>
hr {
  border-color: #3d58f3 !important;
  width: 250px;
}

.bg-image {
  background-image: url(../assets/img/bitcoin-pocket_1.jpg);
}

/*.pricing-table hr:nth-child(3) {
  display: none;
}*/
</style>