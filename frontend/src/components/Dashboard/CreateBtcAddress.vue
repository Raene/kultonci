<template>
  <div class="row">
    <div class="col-lg-6 col-md-12 mx-auto">
      <div class="row">
        <div class="col-12 mt-5">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">Create BTC address <br /> Current BTC address: {{ BTC }}</h4>
              <div class="form-group">
                <label for="change-address" class="col-form-label">Btc address</label>
                <input v-model="btcAddress" class="form-control" type="text" id="change-address">
              </div>
              <button @click.prevent="changeBtcAddress" class="btn btn-lg btn-outline-success btn-block">
              	Change address
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
            btcAddress: null
        };
    },

    mounted() {
        const btc = localStorage.getItem("btcAddress");
        if(!btc) {
            this.$store.commit("btc/SET_BTC_ADDRESS", null);
        }
        this.$store.commit("btc/SET_BTC_ADDRESS", btc);
    },

    computed: {
        BTC() {
            if (!this.$store.getters["btc/getBtcAddress"]) {
                return "null"
            }
            return this.$store.getters["btc/getBtcAddress"];
        }
    },

    methods: {
        changeBtcAddress() {
            console.log("changed to: ", this.btcAddress);
            this.$store.dispatch("btc/create_btc_address", { address: this.btcAddress })
                .then((data) => {
                    console.log("btc data: ", data.data.address);
                    this.$store.commit("btc/SET_BTC_ADDRESS", data.data.address);
                    this.$swal({
                        position: "center",
                        icon: "success",
                        title: data.data.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    this.btcAddress = null;
                })
                .catch(err => console.log(err));
        }
    }
}
</script>