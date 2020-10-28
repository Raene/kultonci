<template>
    <div class="col-md-12 my-4">
        <div class="card shadow mb-4">
            <div class="card-header">
                <strong class="card-title">Change BTC address</strong>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <form @submit.prevent="changeBtcAddress">
                            <div class="form-group mb-3">
                                <!-- <label for="simpleinput">Text</label> -->
                                <input v-model="btcAddress" type="text" id="simpleinput" class="form-control" placeholder="Enter BTC address">
                            </div>
                            <button type="submit" class="btn btn-primary">Change</button>
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

    methods: {
        changeBtcAddress() {
            console.log("changed to: ", this.btcAddress);
            this.$swal({
                position: "center",
                icon: "success",
                title: "BTC address changed",
                showConfirmButton: false,
                timer: 1500
            })
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