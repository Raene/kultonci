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
                    <div v-if="!displayImage" class="row">
                        <div class="col-md-12">
                            <div class="card shadow mb-4">
                                <div class="card-body text-center">
                                    <div class="avatar avatar-lg mt-4">
                                        <a @click.prevent="viewImage" href="">
                                            <img :src="'http://198.211.96.170:3000/'+kycPath" alt="..." class="avatar-img rounded-circle">
                                        </a>
                                    </div>
                                    <div class="card-text my-2">
                                        <h3><strong class="card-title my-0">{{ user.name }} </strong></h3>
                                        <p class="small mb-0" style="color: white;"><strong>{{ user.userEmail }}</strong></p>
                                        <!-- <p class="small" style="color: white; font-weight: 400;"><span class="badge badge-success">Verify</span></p> -->
                                    </div>
                                </div> <!-- ./card-text -->
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-auto">
                                            <button @click="verifyUser" :disabled="user.userVerified===1" class="btn btn-success">{{ user.userVerified === 0?"Verify":"User Verified"}}</button>
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
                    <div v-else class="row">
                        <div class="col-md-12">
                            <ImageDisplay @exitPreview="closePreview($event)" :path="kycPath" :displayImage="displayImage"/>
                        </div>
                    </div>
                </div> <!-- .col-12 -->
            </div> <!-- .row -->
        </div> <!-- .container-fluid -->
    </div>
</template>
<script>
import ImageDisplay from "@/components/dashboard/ImageDisplay.vue";
export default {
    components: {
        ImageDisplay
    },
    data() {
        return {
            userId: this.$route.params.id,
            kycPath: null,
            displayImage: false
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
                this.kycPath = fullUserPath;
            })
            .catch(err => {
                console.log(err);
            });
    },

    mounted() {

    },

    methods: {
        verifyUser() {
            this.$store.dispatch("user/verifyUser", { id: this.user.userId })
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
                        this.user.userVerified = 1;
                    }
                })
        },

        viewImage() {
        	this.displayImage = true;
        },

        closePreview(value) {
        	this.displayImage = value;
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

.card-footer .row {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

@media (max-width: 380px) {
	.card-footer .row {
		justify-content: center !important;
	}
}
</style>