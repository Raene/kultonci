<template>
  <div class="col-lg-8 py-3">
    <div class="comment-form-wrap pt-5">
      <h3 class="mb-5">My profile</h3>
      <form @submit.prevent="updateUser">
      	<div class="form-group">
          <label for="name">Name</label>
          <input v-model="name" type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <input v-model="address" type="text" class="form-control" id="address">
        </div>
        <div class="form-row form-group">
          <div class="col-md-6">
            <label for="city">City</label>
            <input v-model="city" type="text" class="form-control" id="city">
          </div>
          <div class="col-md-6">
            <label for="state">State</label>
            <input v-model="state" type="text" class="form-control" id="state">
          </div>
        </div>
        <div class="form-row form-group">
          <div class="col-md-6">
            <label for="city">Country</label>
            <input v-model="country" type="text" class="form-control" id="city">
          </div>
          <div class="col-md-6">
            <label for="zip">Zip</label>
            <input v-model="zip" type="text" class="form-control" id="zip">
          </div>
        </div>
        <div class="form-row form-group">
          <div class="col-md-6">
            <label for="phone">Phone</label>
            <input v-model="phone" type="text" class="form-control" id="phone">
          </div>
          <div class="col-md-6">
            <label for="ssn">SSN</label>
            <input v-model="ssn" type="text" class="form-control" id="ssn">
          </div>
        </div>
        <div class="form-row form-group">
        	<div class="col-md-4">
        		<input type="submit" value="Submit" class="btn btn-primary">
        	</div>
        	<div class="col-md-4">
        		<router-link to="/user-wallet/change-password" id="singlebutton" name="singlebutton" class="btn btn-primary">Change password</router-link>
        	</div>
        	<div class="col-md-4">
        		<router-link to="/user-wallet/change-email" id="singlebutton" name="singlebutton" class="btn btn-primary">Change Email</router-link>
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
      name: null,
      address: null,
      city: null,
      state: null,
      country: null,
      zip: null,
      phone: null,
      ssn: null
    }
  },

  computed: {
    user() {
      return this.$store.getters["user/getProfile"];
    }
  },

  mounted() {
    this.$store.dispatch("user/getAddress", this.user.id)
        .then((data) => {
            this.address = data.address;
            this.city = data.city;
            this.country = data.country;
            this.state = data.state;
            this.zip = data.zip;
            this.ssn = this.user.ssn;
            this.phone = this.user.phone;
            this.name = this.user.name;
        })
  },

  methods: {
    resetFields() {
        this.name = null;
        this.address = null;
        this.city = null;
        this.state = null;
        this.country = null;
        this.zip = null;
        this.phone = null;
        this.ssn = null;
    },

    updateUser() {
      let user_info;
      let address_info;
      if (this.name !== null || this.phone !== null || this.ssn !== null) {
        user_info = {
          id: this.user.id,
          name: this.name,
          phone: this.phone,
          ssn: this.ssn
        }
        console.log("user_info: ", user_info)
        this.$store.dispatch("user/updateUser", user_info)
        .then((data) => {
          console.log("update: ", data.data.message);
          this.resetFields();
          this.$swal({
            icon: "success",
            title: data.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          console.log(err.response);
          this.$swal({
            icon: "success",
            title: "error",
            showConfirmButton: false,
            timer: 1500
          })
        });
      }
      if (this.address !== null || this.city !== null || this.state !== null || this.country !== null || this.zip !== null) {
        address_info = {
          user_id: this.user.id,
          address: this.address,
          city: this.city,
          state: this.state,
          country: this.country,
          zip: this.zip,
        }
        console.log("address: ", address_info);
        this.$store.dispatch("user/updateAddress", address_info)
        .then((data) => {
          console.log("update: ", data.data.message);
          this.resetFields();
          this.$swal({
            icon: "success",
            title: data.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          console.log(err.response);
          this.$swal({
            icon: "error",
            title: "error",
            showConfirmButton: false,
            timer: 1500
          })
        });
      }
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