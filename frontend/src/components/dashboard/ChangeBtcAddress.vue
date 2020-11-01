<template>
    <div class="col-md-12 my-4">
        <div class="card shadow mb-4">
            <div class="card-header">
                <strong class="card-title">Create BTC address</strong>
                <strong><br>Current BTC address: {{ BTC }}</strong>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <form @submit.prevent="changeBtcAddress">
                            <div class="form-group mb-3">
                                <!-- <label for="simpleinput">Text</label> -->
                                <input v-model="btcAddress" type="text" id="simpleinput" class="form-control" placeholder="Enter BTC address">
                            </div>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </form>
                    </div> <!-- /.col -->
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
<style scoped>
.card {
    max-width: 500px;
    margin: 0 auto;
}

input:focus::-webkit-input-placeholder {
    color: transparent;
}
</style>