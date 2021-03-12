<template>
  <div class="col-lg-8 py-3">
    <div class="comment-form-wrap pt-5">
      <h3 class="mb-5">Change Email</h3>
      <form @submit.prevent="updateUser">
        <div class="form-group">
          <label for="new_email">New Email</label>
          <input v-model="new_email" type="text" class="form-control" id="new_email">
        </div>
        <div class="form-row form-group">
          <div class="col-md-6">
            <input type="submit" value="Submit" class="btn btn-primary">
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