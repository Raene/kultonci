<template>
  <div class="page-hero-section bg-image hero-home-2">
    <div class="overlay"></div>
    <div class="hero-caption">
      <div class="container fg-white h-100">
        <div class="row align-items-center h-100">
          <div class="col-lg-6 d-lg-block wow fadeInUp mx-auto">
          	<div class="form-title">
          		<h3 class="text-center">Sign in</h3>
          	</div>
            <div class="img-place mobile-preview1 shadow floating-animate">
              <!-- <img src="../assets/img/app_showcase.svg" alt=""> -->
              <form @submit.prevent="login">
                <div class="form-group">
                  <label class="control-label sr-only" for="email"></label>
                  <input v-model="user.email" id="email" type="text" name="email" placeholder="Email" class="form-control" required>
                </div>
                <div class="form-group">
                  <label class="control-label sr-only" for="password"></label>
                  <input v-model="user.password" id="password" type="password" name="password" placeholder="password" class="form-control" required>
                </div>
                <button class="btn btn-dark">Login</button>
              </form>
            </div>
            <p class="text-white mt-5">Not a member? <router-link to="/signup" class="text-yellow">Sign up</router-link><span class="pull-right"><router-link to="/" class="text-white">Back to Home</router-link> </span></p>
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
                    this.$swal({
                        position: "center",
                        icon: "success",
                        title: "Login Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log("login data says: ", data.data.message);
                    this.$store.commit("user/SET_PROFILE", data.data.message);
                    localStorage.setItem("token", data.data.message.token);
                    localStorage.setItem("user", JSON.stringify(data.data.message));
                    this.isLoggingIn = false;
                    if (data.data.message.role === 0) {
                        this.$router.push({ path: "/user-wallet" });
                    } else {
                        this.$router.push({ path: "/dashboard/users" });
                    }
                })
                .catch(err => {
                    this.isLoggingIn = false;
                    console.log(err);
                    this.$swal({
                        icon: "error",
                        title: "Login Unsuccessful",
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener("mouseenter", this.$swal.stopTimer);
                            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                        }
                    });
                });
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
  color: #ffffff;
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