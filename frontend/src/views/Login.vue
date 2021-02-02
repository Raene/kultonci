<template>
    <div class="bg-primary pdt100">
        <div class="content">
            <div class="container">
                <div class="row">
                    <!-- login-form -->
                    <div class="offset-xl-3 col-xl-6 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12 ">
                        <div class="login-form">
                            <h2 class="text-center mb30">Sign in to CoinTrade</h2>
                            <form>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="email"></label>
                                    <input v-model="user.email" id="email" type="text" name="email" placeholder="Email" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only" for="password"></label>
                                    <input v-model="user.password" id="password" type="password" name="password" placeholder="password" class="form-control" required>
                                </div>
                                <span>
                                    <input id="box1" type="checkbox" class="with-font">
                                    <label for="box1">Keep me signed in on this computer</label>
                                </span>
                                <button @click.prevent="login" type="submit" name="singlebutton" class="btn btn-default btn-lg  btn-block mt20">Sign In</button>
                            </form>
                        </div>
                        <p class="text-white">Not a member? <router-link to="/signup" class="text-yellow">Sign up</router-link><span class="pull-right"><router-link to="/" class="text-white">Back to Home</router-link> </span></p>
                    </div>
                    <!-- /.login-form -->
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
</style>