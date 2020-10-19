<template>
    <div id="sign_up">
        <div class="main">
            <Preloader v-if="isLoggingIn" />
            <!-- Sing in  Form -->
            <section class="sign-in" v-if="!isLoggingIn">
                <div class="signin-content">
                    <div class="signin-form">
                        <h2 class="form-title">Log in</h2>
                        <ValidationObserver v-slot="{ invalid }">
                            <form @submit.prevent="login" class="register-form" id="login-form">
                                <div class="form-group">
                                    <label for="email"><i class="zmdi zmdi-email"></i></label>
                                    <ValidationProvider rules="required|email" v-slot="{ errors, invalid, valid, untouched }">
                                        <input :class="{ invalid, valid, untouched }" v-model="user.email" type="email" name="your_name" id="email" placeholder="Your Email" />
                                        <span>{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group">
                                    <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                    <ValidationProvider rules="required" v-slot="{ errors, invalid, valid, untouched }">
                                        <input :class="{ invalid, valid, untouched }" v-model="user.password" type="password" name="your_pass" id="your_pass" placeholder="Password" />
                                        <span>{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                    <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                                </div>
                                <div class="form-group form-button">
                                    <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" :disabled="invalid" />
                                    <div class="spinner-border text-warning" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </form>
                        </ValidationObserver>
                        <!-- <div class="social-login">
                            <span class="social-label">Or login with</span>
                            <ul class="socials">
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div> -->
                        <div class="alt-text">
                            <p>
                                New to this site?
                                <router-link :to="{ path: '/signup' }" style="display: inline-block;">Sign up</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <VueInjectJs src="/landing/js/jquery.js" />
        <VueInjectJs src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js" />
        <VueInjectJs src="/js/main.js" />
    </div>
</template>
<script>
import VueInjectJs from "vue-inject-js";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import Preloader from "@/components/Preloader.vue";
export default {
    components: {
        VueInjectJs,
        ValidationProvider,
        ValidationObserver,
        Preloader
    },

    data() {
        return {
            user: {
                email: null,
                password: null
            },
            isLoggingIn: false
        }
    },

    methods: {
        login() {
            this.isLoggingIn = true;
            this.$store.dispatch("user/login", {
                email: this.user.email,
                password: this.user.password
            })
            .then((data) => {
                    console.log("login data says: ", data.data.message);
                    this.$store.commit("user/SET_PROFILE", data.data.message);
                    localStorage.setItem("token", data.data.message.token);
                    this.isLoggingIn = false;
                    if (data.data.message.role === 0) {
                        this.$router.push({ path: "/investment-packages" });
                    } else {
                        this.$router.push({ path: "/login" });
                    }
            })
            .catch(err => {
                this.isLoggingIn = false;
                console.log(err);
            });
        }
    }
};
</script>
<style scoped>
@import "../assets/fonts/material-icon/css/material-design-iconic-font.min.css";
@import "../assets/css/style.css";

.main {
    padding: 0;
}

body {
    background: #ffffff !important;
}
</style>