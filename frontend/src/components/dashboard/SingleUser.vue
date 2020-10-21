<template>
    <div>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12">
                    <!-- <div class="row align-items-center my-4">
                        <div class="col">
                            <h2 class="h3 mb-0 page-title">Contacts</h2>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn btn-secondary"><span class="fe fe-trash fe-12 mr-2"></span>Delete</button>
                            <button type="button" class="btn btn-primary"><span class="fe fe-filter fe-12 mr-2"></span>Create</button>
                        </div>
                    </div> -->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card shadow mb-4">
                                <div class="card-body text-center">
                                    <div class="avatar avatar-lg mt-4">
                                        <a href="">
                                            <img src="../../../../backend/images/img7.png" alt="..." class="avatar-img rounded-circle">
                                        </a>
                                    </div>
                                    <div class="card-text my-2">
                                        <h3><strong class="card-title my-0">{{ user.name }} </strong></h3>
                                        <p class="small mb-0" style="color: white;"><strong>{{ user.email }}</strong></p>
                                        <!-- <p class="small" style="color: white; font-weight: 400;"><span class="badge badge-success">Verify</span></p> -->
                                    </div>
                                </div> <!-- ./card-text -->
                                <div class="card-footer">
                                    <div class="row align-items-center justify-content-between">
                                        <div class="col-auto">
                                            <button @click="verifyUser" :disabled="user.verified===1" class="btn btn-success">{{ user.verified === 0?"Verify":"User Verified"}}</button>
                                        </div>
                                        <div class="col-auto">
                                            <button class="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                </div> <!-- /.card-footer -->
                            </div>
                        </div> <!-- .col -->
                        <div class="col-md-9">
                        </div> <!-- .col -->
                    </div> <!-- .row -->
                </div> <!-- .col-12 -->
            </div> <!-- .row -->
        </div> <!-- .container-fluid -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            userId: this.$route.params.id,
            kycPath: null
        }
    },
    computed: {
        user() {
            return this.$store.getters['user/getUser'];
        },

        users() {
            return this.$store.getters['user/getUsers'];
        }
    },

    beforeMount() {
        this.$store.dispatch("user/getUser", this.userId)
            .then((data) => {
					console.log("userdata: ", data.data.data[0]);
					this.$store.commit("user/SET_USER", data.data.data[0]);
					const fullUserPath = data.data.data[0].kycPath;
					const userPath = fullUserPath.slice(23);
					this.kycPath = userPath;
				})
				.catch(err => {
					console.log(err);
				});
    },

    mounted() {
        
    },

    methods: {
        verifyUser() {
            this.$store.dispatch("user/verifyUser", { id: this.user.id })
                .then((err) => {
                    if (err) {
                        console.log(err);
                        this.$swal({
                            position: "center",
                            icon: "error",
                            title: "User Not verified",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    } else {
                        this.$swal({
                            position: "center",
                            icon: "success",
                            title: "User verified",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.user.verified = 1;
                    }
                })
        }
    }
}
</script>
<style scoped>
.btn {
    text-transform: uppercase;
    letter-spacing: 3px;
    color: white;
}
</style>