<template>
  <div>
    <div v-if="!kycReady">
      <TheHeader />
      <!-- page-header -->
      <div class="page-header invest-header">
        <div class="other-overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="page-caption">
                <!-- <h1 class="page-title">Blog Page</h1> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.page-header-->
      <div class="content">
        <div class="container">
          <div class="row ">
            <!--  section-title -->
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
              <div class="section-title text-center">
                <h2>Investment Packages</h2>
              </div>
            </div>
            <!--  /.section-title -->
          </div>
          <div class="row">
            <div class="offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12">
              <div v-for="(p, index) in packages" :key="index" class="row">
                <!-- post block -->
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 mx-auto">
                  <div class="post-block">
                    <div class="post-content text-center">
                      <h2 class="post-title"><a href="#" class="title">{{ Object.keys(p)[0] }}</a></h2>
                      <div v-for="(subPackage, j) in p" :key="j" class="sub-packages">
                        <div v-for="(value, k) in subPackage" :key="k">
                          <div class="meta">
                            <span class="meta-comments">{{ value.PackageName }}</span>
                          </div>
                          <p>Minimum Investment 0f ${{ value.minprice }}</p>
                          <p>Maximum Investment 0f ${{ value.maxprice }}</p>
                          <p>RETURNS {{ value.percentageReturns }}%</p>
                          <p>REFERRAL BONUS {{ value.referral_bonus }}%</p>
                          <hr>
                        </div>
                      </div>
                      <!-- <div class="meta">
                      <span class="meta-comments">Silver</span>
                    </div>
                    <p>Minimum Investment 0f $5000</p>
                    <p>Maximum Investment 0f $9999</p>
                    <p>RETURNS 2%</p>
                    <p>REFERRAL BONUS 7%</p>
                    <hr> -->
                      <!-- <div class="meta">
                      <span class="meta-comments">Gold</span>
                    </div>
                    <p>Minimum Investment 0f $10000</p>
                    <p>Maximum Investment 0f $19999</p>
                    <p>RETURNS 2%</p>
                    <p>REFERRAL BONUS 10%</p> -->
                      <!-- <router-link :to="!user? '/login': '/investment-packages/'+Object.keys(p)[0]" class="btn btn-default">Get Started</router-link> -->
                      <router-link :to="'/investment-packages/'+Object.keys(p)[0]" class="btn btn-default">Get Started</router-link>
                    </div>
                  </div>
                </div>
                <!-- <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                            <div class="post-img">
                                <a href="#" class="imghover">
                         <img src="./images/post_img_1.jpg" alt="" class="img-fluid"> </a>
                            </div>
                        </div> -->
                <!-- /.post block -->
              </div>
              <!-- <hr> -->
              <div class="row">
                <!-- post block -->
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 mx-auto">
                  <div class="post-block">
                    <div class="post-content text-center">
                      <h2 class="post-title"><a href="#" class="title">Non-farm Payroll</a></h2>
                      <div class="meta">
                        <!-- <span class="meta-date meta-divider">18 March, 2020 </span>
                                        <span class="meta-admin meta-divider">By <a href="#" class="meta-link">Admin</a></span> -->
                        <span class="meta-comments">Platinum</span>
                      </div>
                      <p>Minimum Investment of $3,000</p>
                      <p>Maximum Investment of $1,000,000</p>
                      <p>Get monthly returns of up to 50% profit</p>
                      <p>Every first Saturday of the month is the payday for NFP.</p>
                      <a @click.prevent="showForm('nfp')" href="#" class="btn btn-default">Get Started</a>
                    </div>
                  </div>
                </div>
                <!-- <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                            <div class="post-img">
                                 <a href="#" class="imghover">
                         <img src="./images/post_img_4.jpg" alt="" class="img-fluid"></a>
                            </div>
                        </div> -->
                <!-- /.post block -->
              </div>
              <div class="row mt-5">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto text-center">
                  <a @click.prevent="kycReady = true" href="#" class="btn btn-default">Upload proof of payment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.blog -->
      <div class="space-medium">
        <div class="container">
          <div class="row ">
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 ">
              <h2>RISK <br> DISCLAIMER</h2>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 ">
              <div class="">
                <span>
                  <p>Services include products that are traded on margin and carry a risk of losses. Please ensure that you fully understand the risks involved. In light of any risk involved or encountered during trading, KULTON CI TRADING guarantees a 90% refund of capital although, fortunately, we have recorded zero losses since our inception in 2015.</p>
                </span>
                <!-- <span><a href="#"><img src="./images/google_app.png" alt=""></a></span> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <TheFooter />
    </div>
    <KnowYourCustomer @closeKyc="close" v-else-if="kycReady" />
  </div>
</template>
<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import KnowYourCustomer from "@/components/KnowYourCustomer.vue";

export default {
  name: "Home",
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
  width: 160px !important;
  border-top: 2px solid #ff9f2a !important;
}
</style>