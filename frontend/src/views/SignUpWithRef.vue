<template>
  <div class="page-hero-section bg-image hero-home-2">
    <div class="overlay"></div>
    <div class="hero-caption">
      <div class="container fg-white h-100">
        <div class="row align-items-center h-100">
          <div v-if="!isAddressForm" class="col-lg-10 d-lg-block wow fadeInUp mx-auto">
            <div class="form-title">
              <h3 class="text-center">Sign up</h3>
            </div>
            <div class="shadow floating-animate">
              <!-- <img src="../assets/img/app_showcase.svg" alt=""> -->
              <form>
                <div class="form-group">
                  <label class="control-label sr-only" for="name"></label>
                  <input v-model="user.name" id="name" type="text" name="name" placeholder="Name" class="form-control" required>
                </div>
                <div class="form-group">
                  <label class="control-label sr-only" for="email"></label>
                  <input v-model="user.email" id="email" type="email" name="email" placeholder="Email" class="form-control" required>
                </div>
                <div class="form-group">
                  <label class="control-label sr-only" for="dob"></label>
                  <input v-model="user.email" id="dob" type="date" name="dob" placeholder="Date of birth" class="form-control" required>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="control-label sr-only" for="phone"></label>
                      <input v-model="user.phone" id="phone" type="tel" placeholder="Phone number" class="form-control" required>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="control-label sr-only" for="ssn"></label>
                      <input v-model="user.ssn" id="ssn" type="text" placeholder="SSN" class="form-control" required>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <select class="form-control" v-model="user.security_question">
                        <option value="" disabled selected>Select a security question (For those in the US region only)</option>
                        <option v-for="question in security_questions" :key="question.id">{{ question.question }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="control-label sr-only" for="answer"></label>
                      <input v-model="user.answer" id="answer" type="text" placeholder="Answer" class="form-control" required>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label sr-only" for="password"></label>
                  <input v-model="user.password" id="password" type="password" placeholder="password" class="form-control" required>
                </div>
                <div class="form-group">
                  <label class="control-label sr-only" for="confirm_password"></label>
                  <input v-model="user.confirm_password" id="confirm_password" type="password" placeholder="Confirm password" class="form-control" required>
                </div>
                <button @click.prevent="storeSignUpDetails" class="btn btn-dark">Next</button>
              </form>
            </div>
            <p class="text-white mt-5">Already a member? <router-link to="/login" class="text-yellow">Sign in</router-link><span class="pull-right">
                <router-link to="/" class="text-white">Back to Home</router-link>
              </span></p>
          </div>
          <AddressForm @goback="closeAddressForm" v-else/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddressForm from "@/components/AddressForm.vue"
export default {
  components: {
    AddressForm
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
        ssn: null,
        security_question: null,
        answer: null
      },
      isAddressForm: false
    }
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
    showAddressForm() {
      this.isAddressForm = true;
    },

    closeAddressForm() {
      this.isAddressForm = false;
    },

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
          ssn: this.user.ssn,
          referral_code: this.$route.params.referral_code
        },
        questions_user: {
          answer: this.user.answer,
          security_questions_id: qId
        }
      }
      this.$store.commit("user/SET_INITIAL_SIGNUP_DETAILS", info);
      this.isAddressForm = true;
    }
  }
}
</script>
<style scoped>
.bg-image {
  background-image: url(../assets/img/deal_1.jpg);
}

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

.overlay {
  background: rgba(0, 0, 0, 0.75);
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