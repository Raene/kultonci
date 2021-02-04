<template>
  <div class="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="post-holder">
          <div class="leave-comments">
            <h3 class="leave-comments-title">My Profile</h3>
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
                    <label class="control-label required sr-only ">Name <span class="require">*</span></label>
                    <input v-model="name" type="text" class="form-control" placeholder="Name" required>
                  </div>
                </div>
                <!-- <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label  sr-only required  ">Email <span class="require">*</span></label>
                                        <input v-model="email" type="email" class="form-control" placeholder="Email" required>
                                    </div>
                                </div> -->
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="form-group">
                    <label class="control-label sr-only required  ">Address <span class="require">*</span></label>
                    <input v-model="address" type="text" class="form-control" placeholder="Address" required>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div class="form-group">
                    <label class="control-label sr-only required  ">City <span class="require">*</span></label>
                    <input v-model="city" type="text" class="form-control" placeholder="City" required>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div class="form-group">
                    <label class="control-label sr-only required  ">State <span class="require">*</span></label>
                    <input v-model="state" type="text" class="form-control" placeholder="State" required>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div class="form-group">
                    <label class="control-label sr-only required  ">Country <span class="require">*</span></label>
                    <input v-model="country" type="text" class="form-control" placeholder="Country" required>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div class="form-group">
                    <label class="control-label sr-only required  ">Zip <span class="require">*</span></label>
                    <input v-model="zip" type="text" class="form-control" placeholder="Zip" required>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div class="form-group">
                    <label class="control-label sr-only required  ">Phone number <span class="require">*</span></label>
                    <input v-model="phone" type="text" class="form-control" placeholder="Phone number" required>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div class="form-group">
                    <label class="control-label sr-only required  ">SSN <span class="require">*</span></label>
                    <input v-model="ssn" type="text" class="form-control" placeholder="SSN" required>
                  </div>
                </div>
                <!-- <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only">Messages <span class="require">*</span></label>
                                        <textarea v-model="" class="form-control" rows="5" placeholder="Security question"></textarea>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only required  ">What was your first car? <span class="require">*</span></label>
                                        <input type="text" class="form-control" placeholder="What was your first car?" required>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only required  ">What is your mother's maiden name? <span class="require">*</span></label>
                                        <input type="text" class="form-control" placeholder="What is your mother's maiden name?" required>
                                    </div>
                                </div> -->
                <div @click.prevent="updateUser" class="align-center col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <button id="singlebutton" name="singlebutton" class="btn btn-primary">Submit</button>
                </div>
                <div class="align-center secnd col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <router-link to="/user-wallet/change-password" id="singlebutton" name="singlebutton" class="btn btn-primary">Change password</router-link>
                </div>
                <div class="align-center secnd col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <router-link to="/user-wallet/change-email" id="singlebutton" name="singlebutton" class="btn btn-primary">Change Email</router-link>
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
@media (max-width: 480px) {
  .align-center {
    text-align: center;
  }

  .align-center .btn-primary {
    width: 100%;
  }

  .align-center.secnd {
    margin-top: 10px;
  }
}
</style>