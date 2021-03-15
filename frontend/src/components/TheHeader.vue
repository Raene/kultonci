<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-floating">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/img/lunaralliance.jpg" alt="" width="60">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ml-auto mt-3 mt-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/investment-packages">Investment Packages</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/faqs">FAQs</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/testimonies">Testimonies</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
        <div v-if="!profile" class="ml-auto my-2 my-lg-0">
          <router-link to="/login" class="btn btn-primary rounded-pill">Login</router-link>
        </div>
        <div v-else-if="profile && !path.includes('user-wallet')" class="ml-auto my-2 my-lg-0">
          <router-link to="/user-wallet/user" class="btn btn-outline-primary rounded-pill">My wallet</router-link>
        </div>
        <div v-if="profile && path.includes('user-wallet')" class="ml-auto my-2 my-lg-0">
          <a href="#"  @click="logout" to="/login" class="btn btn-primary rounded-pill">Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            routeName: this.$route.name,
            path: this.$route.path
        };
    },

    computed: {
        profile() {
            return this.$store.getters["user/getProfile"];
        }
    },

    mounted() {
        const user = localStorage.getItem("user");
        console.log("route name: ", this.profile);
        if (!user) {
            this.$store.commit("user/SET_PROFILE", null);
        }
        this.$store.commit("user/SET_PROFILE", JSON.parse(user));
    },

    methods: {
        logout() {
            this.$store.commit("user/CLEAR_TOKEN");
            this.$router.push("/");
            this.$swal({
                icon: "success",
                title: "You've been logged out",
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
        }
    }
}
</script>

<style scoped>
  .navbar-dark .navbar-toggler {
    background-color: #2c75af !important; 
  }
</style>