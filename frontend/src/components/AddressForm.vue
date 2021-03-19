<template>
  <div class="col-lg-10 d-lg-block wow fadeInUp mx-auto">
    <div v-if="!kycReady">
      <div class="form-title">
        <h3 class="text-center">Enter additional info</h3>
      </div>
      <div class="shadow floating-animate">
        <form class="wow fadeInUp">
          <div class="form-group">
            <label class="control-label sr-only" for="address"></label>
            <input v-model="user.address" id="address" type="text" placeholder="Address" class="form-control" required>
          </div>
          <div class="form-group">
            <label class="control-label sr-only" for="city"></label>
            <input v-model="user.city" id="city" type="text" placeholder="City" class="form-control" required>
          </div>
          <div class="form-group">
            <label class="control-label sr-only" for="state"></label>
            <input v-model="user.state" id="state" type="text" placeholder="State" class="form-control" required>
          </div>
          <div class="form-group">
            <label class="control-label sr-only" for="country"></label>
            <input v-model="user.country" id="country" type="text" placeholder="Country" class="form-control" required>
          </div>
          <div class="form-group">
            <label class="control-label sr-only" for="zip"></label>
            <input v-model="user.zip" id="zip" type="text" placeholder="Zip" class="form-control" required>
          </div>
          <div class="form-check mb-4 mt-4">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">I agree to the <router-link to="/about">terms of service</router-link></label>
          </div>
          <div class="d-flex justify-content-between">
            <button @click="storeSignUpDetails" class="btn btn-dark">Next</button>
            <button @click.prevent="goBack" class="btn btn-dark">Back</button>
          </div>
        </form>
      </div>
      <p class="text-white mt-5">Already a member? <router-link to="/login" class="text-yellow">Sign in</router-link><span class="pull-right">
          <router-link to="/" class="text-white">Back to Home</router-link>
        </span></p>
    </div>
    <KnowYourCustomer @closeKyc="kycReady=false" v-else />
  </div>
</template>
<script>
import KnowYourCustomer from "@/components/KnowYourCustomer.vue";
export default {
  components: {
    KnowYourCustomer
  },
  data() {
    return {
      user: {
        address: null,
        city: null,
        state: null,
        country: null,
        zip: null,
      },
      kycReady: false
    }
  },

  methods: {
    goBack() {
      this.$emit("goback");
    },
    storeSignUpDetails() {
      let info = {
        user_address: {
          address: this.user.address,
          city: this.user.city,
          state: this.user.state,
          country: this.user.country,
          zip: this.user.zip
        }
      }
      this.$store.commit("user/SET_USER_ADDRESS_DETAILS", info);
      this.kycReady = true;
    }
  }
}
</script>
<style scoped>
.form-control {
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #2c75af;
  box-shadow: none;
}

.form-control:focus {
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #2c75af;
  box-shadow: none;
}

::placeholder {
  color: #ffffff;
}

.mobile-preview1 {
  width: 100%;
  height: auto;
  border-radius: 30px;
}

.hero-home-2 .mobile-preview1 {
  border-radius: 40px;
}
</style>