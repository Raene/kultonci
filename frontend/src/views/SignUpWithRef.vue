<template>
  <div>
    <div v-if="!kycReady" class="bg-primary pdt30 pdb30">
      <div class="content">
        <div class="container">
          <div class="row">
            <!-- register-form -->
            <div class="offset-xl-3 col-xl-6 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12 ">
              <div class="register-form">
                <h2 class="text-center mb30">Create Your Account</h2>
                <ValidationObserver v-slot="{ invalid }">
                  <form>
                    <div class="form-group">
                      <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }"> <label class="control-label sr-only" for="name"></label>
                        <input v-model="user.name" id="name" type="text" placeholder="name" :class="{ 'form-control': true, invalid, valid, untouched }" required>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }"> <label class="control-label sr-only" for="email"></label>
                        <input v-model="user.email" id="email" type="text" name="email" placeholder="Email" :class="{ 'form-control': true, invalid, valid, untouched }" required>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }"> <label class="control-label sr-only" for="dob"></label>
                        <input v-model="user.dob" id="dob" type="date" name="email" placeholder="Date of Birth" :class="{ 'form-control': true, invalid, valid, untouched }" required>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }"> <label class="control-label sr-only" for="address"></label>
                        <input v-model="user.address" id="address" type="text" placeholder="address" :class="{ 'form-control': true, invalid, valid, untouched }" required>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }"> <label class="control-label sr-only" for="city"></label>
                        <input v-model="user.city" id="city" type="text" placeholder="city" :class="{ 'form-control': true, invalid, valid, untouched }" required>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }"> <label class="control-label sr-only" for="state"></label>
                        <input v-model="user.state" id="state" type="text" placeholder="state" :class="{ 'form-control': true, invalid, valid, untouched }" required>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }"> <label class="control-label sr-only" for="country"></label>
                        <input v-model="user.country" id="country" type="text" placeholder="country" :class="{ 'form-control': true, invalid, valid, untouched }" required>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }"> <label class="control-label sr-only" for="zip"></label>
                        <input v-model="user.zip" id="zip" type="text" placeholder="zip" :class="{ 'form-control': true, invalid, valid, untouched }" required>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }"> <label class="control-label sr-only" for="phone"></label>
                        <input v-model="user.phone" id="phone" type="tel" placeholder="phone number" :class="{ 'form-control': true, invalid, valid, untouched }" required>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }"> <label class="control-label sr-only" for="ssn"></label>
                        <input v-model="user.ssn" id="ssn" type="text" placeholder="SSN" :class="{ 'form-control': true, invalid, valid, untouched }" required>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }"> <label class="control-label sr-only" for="security-question"></label>
                        <!--  <input v-model="" id="security-question" type="text" placeholder="security question" :class="{ 'form-control': true, invalid, valid, untouched }" required> -->
                        <select id="security_question" :class="{ 'form-control': true, invalid, valid, untouched }" v-model="user.security_question">
                          <option value="" disabled selected>Select a security question (For those in the US region only)</option>
                          <option v-for="question in security_questions" :key="question.id">{{ question.question }}</option>
                        </select>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }"> <label class="control-label sr-only" for="answer"></label>
                        <input v-model="user.answer" id="answer" type="text" placeholder="answer" :class="{ 'form-control': true, invalid, valid, untouched }" required>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider rules="required|password:@confirm" v-slot="{ errors, invalid, valid, untouched }"> <label class="control-label sr-only" for="password"></label>
                        <input v-model="user.password" id="password" type="password" placeholder="create password" :class="{ 'form-control': true, invalid, valid, untouched }" required>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }" name="confirm"> <label class="control-label sr-only" for="password"></label>
                        <input v-model="user.repeat_password" id="repeat-password" type="password" placeholder="confirm password" :class="{ 'form-control': true, invalid, valid, untouched }" required>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <span>
                      <input id="box1" type="checkbox" class="with-font">
                      <label for="box1"></label>
                    </span>
                    <p class="register-text">I certify that I agree to the User Agreement and<a href="#" class="btn-link"> Privacy Policy.</a></p>
                    <button @click.prevent="storeSignUpDetails" type="submit" :disabled="invalid" name="singlebutton" class="btn btn-default btn-lg  btn-block mb10">create Account</button>
                  </form>
                </ValidationObserver>
              </div>
              <p class="text-white">Already have an account?<router-link to="/login" class="text-yellow"> Log in</router-link> <span class="pull-right">
                  <router-link to="/" class="text-white">Back to Home</router-link>
                </span> </p>
            </div>
            <!-- /.register-form -->
          </div>
        </div>
      </div>
    </div>
    <KnowYourCustomer v-else />
  </div>
</template>
<script>
// import VueInjectJs from "vue-inject-js";
import KnowYourCustomer from "@/components/KnowYourCustomer.vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  components: {
    // VueInjectJs,
    KnowYourCustomer,
    ValidationProvider,
    ValidationObserver
  },

  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        repeat_password: null,
        dob: null,
        phone: null,
        address: null,
        city: null,
        state: null,
        country: null,
        zip: null,
        security_question: "Security Question",
        answer: null
      },
      kycReady: false
    };
  },

  computed: {
    security_questions() {
      return this.$store.getters["user/getSecurityQuestions"];
    }
  },

  mounted() {
    this.$store.dispatch("user/getSecurityQuestions");
    console.log("gotten");
  },

  methods: {
    storeSignUpDetails() {
      let qId;
      for (const q of this.security_questions) {
        if (q.question === this.user.security_question) {
          qId = q.id;
        }
      }
      let info = {
        user: {
          email: this.user.email,
          name: this.user.name,
          password: this.user.password,
          repeat_password: this.user.repeat_password,
          dob: this.user.dob,
          phone: this.user.phone,
          referral_code: this.$route.params.referral_code
        },
        address: {
          address: this.user.address,
          city: this.user.city,
          state: this.user.state,
          country: this.user.country,
          zip: this.user.zip
        },
        questions_user: {
          answer: this.user.answer,
          security_questions_id: qId
        }
      }
      // this.$store.dispatch("user/signup", info)
      //   .then((err) => {
      //     if (err) {
      //       // this.isLoggingIn = false;
      //       console.log(err);
      //       this.$swal({
      //         icon: "error",
      //         title: "Signup Unsuccessful",
      //         toast: true,
      //         position: "top-end",
      //         showConfirmButton: false,
      //         timer: 3000,
      //         timerProgressBar: true,
      //         onOpen: (toast) => {
      //           toast.addEventListener("mouseenter", this.$swal.stopTimer);
      //           toast.addEventListener("mouseleave", this.$swal.resumeTimer);
      //         }
      //       });
      //     } else {
      //       // this.isLoggingIn = false;
      //       this.$swal({
      //         position: "center",
      //         icon: "success",
      //         title: "Signup Successful",
      //         showConfirmButton: false,
      //         timer: 1500
      //       });
      //       this.$router.replace({ path: "/login" });
      //     }
      //   });
      this.$store.commit("user/SET_INITIAL_SIGNUP_DETAILS", info);
      this.kycReady = true;
      // console.log("shit, it worked");
    }
  }
};
</script>