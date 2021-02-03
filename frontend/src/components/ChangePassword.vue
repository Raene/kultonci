<template>
	<div class="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="post-holder">
                	<div class="leave-comments">
                        <h3 class="leave-comments-title">Change Password</h3>
                        <form>
                            <div class="row">
                               <!--  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only">Messages <span class="require">*</span></label>
                                        <textarea class="form-control" rows="5" placeholder="Comments"></textarea>
                                    </div>
                                </div> -->
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label required sr-only ">Current password <span class="require">*</span></label>
                                        <input v-model="current_password" type="password" class="form-control" placeholder="Current password" required>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label required sr-only ">New password <span class="require">*</span></label>
                                        <input v-model="new_password" type="password" class="form-control" placeholder="New password" required>
                                    </div>
                                </div>
                                <div @click.prevent="changePassword" class="align-center secnd col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <button id="singlebutton" name="singlebutton" class="btn btn-primary">Change password</button>
                                </div>
                            </div>
                        </form>
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
			current_password: null,
			new_password: null
		}
	},

	computed: {
		user() {
			return this.$store.getters["user/getProfile"];
		}
	},

	methods: {
		changePassword() {
			this.$store.dispatch("user/updatePassword", {
				id: this.user.id,
				email: this.user.email,
				oldPassword: this.current_password,
				password: this.new_password
			})
			.then((data) => {
        			console.log("password data: ", data.data);
        			this.$swal({
                        icon: "success",
                        title: data.data.message,
                        position: "center",
                        timer: 1500
                    });
                    this.current_password = "";
                    this.new_password = "";
        		})
        		.catch((err) => {
        			console.log(err);
        			this.$swal({
                        icon: "error",
                        title: "Passwor change unsuccessful",
                        position: "center",
                        timer: 1500
                    });
                    this.current_password = "";
                    this.new_password = "";
        		});
		}
	}
} 
</script>