<template>
  <div>
    <TheHeader />
    <div class="page-hero-section bg-image hero-mini">
      <div class="overlay"></div>
      <div class="hero-caption">
        <div class="container fg-white h-100">
          <div class="row justify-content-center align-items-center text-center h-100">
            <div class="col-lg-6">
              <h3 class="mb-4 fw-medium">Select a sub package</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!kycReady" class="page-section no-scroll">
      <div class="row justify-content-center mt-5">
        <div class="col-lg-10">
          <div class="row justify-content-center">
            <div v-for="pkg in packages" :key="pkg.PackageId" class="col-md-6 col-lg-6 py-3 wow fadeInLeft">
              <div class="card card-body border-0 text-center shadow pt-5">
                <h5 class="fg-gray">{{ pkg.PackageName }}</h5>
                <hr>
                <p class="fs-small">Minimum Investment 0f ${{ pkg.minprice }}</p>
                <p class="fs-small">Minimum Investment 0f ${{ pkg.maxprice }}</p>
                <a @click.prevent="showForm(pkg.PackageName, pkg.name)" href="#" class="btn btn-dark">Invest</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
      	<div class="col-lg-4 mx-auto">
      		<a @click.prevent="kycReady = true" href="#" class="btn btn-dark">Upload proof of payment</a>
      	</div>
      </div>
    </div>
    <KnowYourCustomer @closeKyc="kycReady = false" v-else />
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

<style scoped>
hr {
  border-color: #3d58f3 !important;
  /*width: 250px;*/
}

.bg-image {
  background-image: url(../assets/img/bitcoin-pocket_1.jpg);
}

.col-lg-4 {
	flex: 0 0 20%;
	/*width: 300px;*/
}

.form-title {
	color: #000000 !important-
}
</style>