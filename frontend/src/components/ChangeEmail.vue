<template>
	<div class="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="post-holder">
                	<div class="leave-comments">
                        <h3 class="leave-comments-title">Change Email</h3>
                        <form>
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label required sr-only ">New Email <span class="require">*</span></label>
                                        <input v-model="new_email" type="email" class="form-control" placeholder="New email" required>
                                    </div>
                                </div>
                                <div class="align-center secnd col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <button @click.prevent="changeEmail" id="singlebutton" name="singlebutton" class="btn btn-primary">Change email</button>
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
			new_email: null
		}
	},

	computed: {
		user() {
			return this.$store.getters["user/getProfile"];
		}
	},

	methods: {
		changeEmail() {
            console.log("id: ", this.user.id);
			this.$store.dispatch("user/updateEmail", {
				id: this.user.id,
				email: this.new_email,
			})
			.then((data) => {
        			console.log("email data: ", data.data);
        			this.$swal({
                        icon: "success",
                        title: data.data.message,
                        position: "center",
                        timer: 1500
                    });
                    this.new_email = "";
        		})
        		.catch((err) => {
        			console.log(err);
        			this.$swal({
                        icon: "error",
                        title: "Email change unsuccessful",
                        position: "center",
                        timer: 1500
                    });
                    this.new_email = "";
        		});
		}
	}
} 
</script>