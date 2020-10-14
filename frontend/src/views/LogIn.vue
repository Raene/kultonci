<template>
  <div id="sign_up">
    <div class="main">
      <!-- Sing in  Form -->
      <section class="sign-in">
        <div class="signin-content">
          <div class="signin-form">
            <h2 class="form-title">Log in</h2>
            <form method="POST" class="register-form" id="login-form">
              <div class="form-group">
                <label for="email"><i class="zmdi zmdi-email"></i></label>
                <input
                  type="email"
                  name="your_name"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div class="form-group">
                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                <input
                  type="password"
                  name="your_pass"
                  id="your_pass"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  class="agree-term"
                />
                <label for="remember-me" class="label-agree-term"
                  ><span><span></span></span>Remember me</label
                >
              </div>
              <div class="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  class="form-submit"
                  value="Log in"
                />
              </div>
            </form>
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
    <VueInjectJs src="/js/main.js" />
    <VueInjectJs src="/landing/js/jquery.js" />
  </div>
</template>
<script>
import VueInjectJs from "vue-inject-js";
export default {
  components: {
    VueInjectJs
  }
};
</script>
<style scoped>
@import "../assets/fonts/material-icon/css/material-design-iconic-font.min.css";
@import "../assets/css/style.css";
.main {
  padding: 0;
}

</style>
