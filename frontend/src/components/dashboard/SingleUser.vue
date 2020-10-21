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
                                            <img :src="kycPath" alt="..." class="avatar-img rounded-circle">
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
                                            <button class="btn btn-success">Verify</button>
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
	data () {
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
			.then(() => {
				console.log("getuser endpoint hit");
			});
		this.$store.dispatch("user/getUsers")
            .then((err) => {
                if (err) {console.log(err)}
                else {console.log("load from singleuser successful")}
            })
            .catch(err => console.log("err from mounted", err));
	},

	mounted(){
		for (const user of this.users) {
			if (+user.kycId === +this.user.kyc_id) {
				this.kycPath = user.kycPath;
			}
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