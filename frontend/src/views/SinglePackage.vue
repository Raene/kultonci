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
                <h2>Select a subpackage</h2>
              </div>
            </div>
            <!--  /.section-title -->
          </div>
          <div class="row">
            <div class="offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12">
              <div class="row">
                <!-- post block -->
                <div v-for="pkg in packages" :key="pkg.PackageId" class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mx-auto">
                  <div class="post-block">
                    <div class="post-content text-center">
                      <h2 class="post-title"><a href="#" class="title">{{ pkg.PackageName }}</a></h2>
                      <hr>
                      <p>Minimum Investment 0f ${{ pkg.minprice }}</p>
                      <p>Maximum Investment 0f ${{ pkg.maxprice }}</p>
                      <a @click.prevent="showForm(pkg.PackageName, pkg.name)" href="#" class="btn btn-default">Get Started</a>
                    </div>
                  </div>
                </div>
                <!-- /.post block -->
              </div>
              <!-- <hr> -->
              <hr>
            </div>
          </div>
          <div class="row">
            <div class="offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mx-auto">
                  <a @click.prevent="kycReady = true" href="#" class="btn btn-default">Upload proof of payment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TheFooter />
    </div>
    <KnowYourCustomer v-else />
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
      kycReady: false,
      routeId: this.$route.params.id
    }
  },

  computed: {
    packages() {
      return this.$store.getters["subscription/getPackage"];
    },

    btcAddress() {
      return this.$store.getters["subscription/getBtcAddress"];
    }
  },

  created() {
    this.$store.dispatch("subscription/getInvestmentPackage", this.routeId);
  },

  mounted() {
    console.log("package: ", this.btcAddress);
  },

  methods: {
    showForm(pkg_level, pkg_name) {
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
              package_level: pkg_level,
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
    }
  }
}
</script>