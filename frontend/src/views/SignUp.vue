<template>
    <div id="sign_up">
        <div class="main">
            <!-- Sign up form -->
            <section class="signup" v-if="!kycReady">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form @submit.prevent="storeSignUpDetails" method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account"></i></label>
                                <input v-model="user.name" type="text" name="name" id="name" placeholder="Your Name" />
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input v-model="user.email" type="email" name="email" id="email" placeholder="Your Email" />
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input v-model="user.password" type="password" name="pass" id="pass" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input v-model="user.repeat_password" type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                            </div>
                            <div class="form-group">
                                <input v-model="termAgreementisChecked" type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span>I accept
                                    <a href="#" class="term-service">terms & conditons</a></label>
                            </div>
                            <div class="form-group">
                                <input v-model="subscribeIsChecked" type="checkbox" name="agree-term" id="subscribe" class="agree-term" />
                                <label for="subscribe" class="label-agree-term"><span><span></span></span>I want to subscribe to the
                                    newsletter</label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Continue" />
                            </div>
                        </form>
                        <div class="alt-text">
                            <p>
                                Already a member?
                                <router-link :to="{ path: '/login' }" style="display: inline-block;">Log in</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <KnowYourCustomer v-else />
        </div>
        <VueInjectJs src="/js/main.js" />
        <VueInjectJs src="/landing/js/jquery.js" />
    </div>
</template>
<script>
import VueInjectJs from "vue-inject-js";
import KnowYourCustomer from "@/components/KnowYourCustomer.vue";
export default {
    components: {
        VueInjectJs,
        KnowYourCustomer
    },

    data() {
        return {
            user: {
                name: null,
                email: null,
                password: null,
                repeat_password: null
            },
            termAgreementisChecked: null,
            subscribeIsChecked: null,
            kycReady: false
        };
    },

    methods: {
        storeSignUpDetails() {
            this.$store.commit("user/SET_INITIAL_SIGNUP_DETAILS", {
                name: this.user.name,
                email: this.user.email,
                password: this.user.password,
                repeat_password: this.user.repeat_password
                // subscribe: this.subscribeIsChecked
            });
            this.kycReady = true;
            console.log("shit, it worked");
        }
    }
};
</script>
<style scoped src="../assets/fonts/material-icon/css/material-design-iconic-font.min.css"></style>
<style scoped src="../assets/css/style.css"></style> 
<style scoped>
.main {
    padding: 0 !important;
}

section {
    padding: 0;
}

.signup {
    margin-bottom: 0;
}
</style>