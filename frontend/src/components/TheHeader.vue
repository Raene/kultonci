<template>
	<!-- header-section-->
    <div class="header-wrapper fixed-top">
        <div class="container">
            <div class="row">
                <div class="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div class="logo"> <a href="index.html"><img class="img-fluid" src="../assets/images/lunaralliance-2.png" alt=""> </a> </div>
                </div>
                <div class="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12">
                    <!-- navigations-->
                    <div class="navigation">
                        <div id="navigation">
                            <ul>
                                <li class="active"><router-link to="/">Home</router-link></li>
                                <li class="active"><router-link to="/about">About</router-link></li>
                                <li class="active"><router-link to="/Investment-packages">Investment Packages</router-link></li>
                                <li class="active"><router-link to="/cryptocurrency-list">Cryptocurrency</router-link></li>
                                <li class="active"><router-link to="/testimonies">Testimonies</router-link></li>
                                <li class="active"><router-link to="/faqs">FAQS</router-link></li>
                                <li class="active"><router-link to="contact">Contact</router-link></li>
                              
                                <!-- <li class="has-sub"><a href="#">Blog</a>
                                    <ul>
                                        <li><a href="blog-default.html">Blog Default</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                    <!-- /.navigations-->
                </div>
                <div class="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12 d-none d-xl-block d-lg-block">
                    <div v-if="!profile" class="header-quick-info">
                        <router-link to="/login" class="btn btn-white btn-xs mr-1">Login</router-link>
                        <router-link to="/signup" class="btn btn-default btn-xs">Sign up</router-link>
                    </div>
                    <div v-else-if="profile && !path.includes('user-wallet')" class="header-quick-info">
                        <router-link to="/user-wallet/user" class="btn btn-default btn-xs">My wallet</router-link>
                    </div>
                    <div v-if="profile && path.includes('user-wallet')" class="header-quick-info">
                        <a @click="logout" href="#" class="btn btn-default btn-xs">Logout</a>
                    </div>
                </div>
            </div>
        </div>
        <VueInjectJs src="/js/menumaker.js" />
    </div>
    <!-- /. header-section-->
</template>

<script>
import VueInjectJs from "vue-inject-js"
export default {
	components: {
		VueInjectJs
	},
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
img {
    width: 150px !important;
}
</style>