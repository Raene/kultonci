<template>
  <div class="col-lg-8 py-3">
    <div class="comment-form-wrap pt-5">
      <h3 class="mb-5">Change password</h3>
      <form @submit.prevent="changePassword">
        <div class="form-group">
          <label for="current_password">Current password</label>
          <input v-model="current_password" type="password" class="form-control" id="current_password">
        </div>
        <div class="form-group">
          <label for="new_password">New password</label>
          <input v-model="new_password" type="password" class="form-control" id="new_password">
        </div>
        <div class="form-row form-group">
          <div class="col-md-6">
            <input type="submit" value="Change password" class="btn btn-primary">
          </div>
          <div class="col-md-6">
            <router-link to="/user-wallet/user/profile" id="singlebutton" name="singlebutton" class="btn btn-primary">Back</router-link>
          </div>
        </div>
      </form>
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

<style scoped>
@media (max-width: 500px) {
  .btn-primary {
    display: block;
    width: 100%;
  }

  .btn-primary {
  	margin-bottom: 1.5rem;
  }
}
</style>