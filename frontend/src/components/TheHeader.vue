<template>
    <section class="navbar custom-navbar navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon icon-bar"></span>
                    <span class="icon icon-bar"></span>
                    <span class="icon icon-bar"></span>
                </button>
                <!-- lOGO TEXT HERE -->
                <a href="https://kultonci.com" class="navbar-brand"><img class="navbar-img" src="@/assets/landing/images/Kulton CI.png"></a>
            </div>
            <!-- MENU LINKS -->
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link v-if="routeName!=='Home'" to="/" class="smoothScroll">Home</router-link>
                        <a v-else href="#home" class="smoothScroll">Home</a>
                    </li>
                    <li>
                        <!-- <a v-if="routeName==='Home'" href="#about-us" class="smoothScroll">About</a> -->
                        <router-link to="/about-us" class="smoothScroll">About</router-link>
                    </li>
                    <li>
                        <router-link to="/investment-packages" class="smoothScroll">Investment Packages</router-link>
                    </li>
                    <li>
                        <router-link to="/cryptocurrency-list" class="smoothScroll">Cryptocurrency List</router-link>
                    </li>
                    <li>
                        <router-link to="/faqs" class="smoothScroll">FAQs</router-link>
                    </li>
                    <li>
                        <router-link to="/testimonies" class="smoothScroll">Testimony</router-link>
                    </li>
                    <li>
                        <router-link to="/support" class="smoothScroll">Support</router-link>
                    </li>
                    <!-- <li><a href="#riskdisclaimer" class="smoothScroll">Risk Disclaimer</a></li> -->
                </ul>
                <ul class="nav navbar-nav navbar-nav-first">
                    <li>
                        <router-link v-if="!profile" to="/login"><i class="fa fa-user"></i> Log In or Sign Up</router-link>
                        <router-link v-else-if="profile && routeName!=='UserWallet'" to="/user-wallet"><i class="fa fa-user"></i> {{ profile.name }}</router-link>
                        <button style="margin-top: 10px;" @click="logout" v-if="profile && routeName === 'UserWallet'" class="section-btn btn btn-default"><i class="fa fa-user"></i> Log Out</button>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            routeName: this.$route.name
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
.navbar-img {
    max-width: 87px;
    margin-top: -25px;
}

@media (max-width: 768px) {
    .navbar-img {
        max-width: 87px;
        margin-top: -21px;
    }
}

@media (max-width: 480px) {
    .navbar-img {
        max-width: 87px;
        margin-top: -33px;
    }
}

.section-btn {
    background-color: black;
    color: gold;
    border: none;
    /*transform: scale(1); */
    text-transform: none;
    letter-spacing: normal;
    transition: all .3s ease-out;
}

.section-btn:hover {
    /*transform: scale(1.01);*/
    background-color: gold;
    color: black;
}

.section-btn:active {
    background-color: black;
    color: gold;
    border: none;
}

.section-btn:focus {
    background-color: black;
    color: gold;
    border: none;
    outline: none;
}

.container {
    padding-right: 15px !important;
    padding-left: 15px !important;
    margin-right: auto !important;
    margin-left: auto !important;
    padding-top: 0;
    padding-bottom: 0;
}

.custom-navbar .navbar-brand,
.top-nav-collapse .navbar-brand {
    color: gold;
    font-weight: 600;
}

.custom-navbar .nav li a,
.top-nav-collapse .nav li a {
    color: gold;
}

.custom-navbar .navbar-toggle .icon-bar {
    background: gold;
    border-color: transparent;
}

.router-link-exact-active {
    background-color: gold;
    color: #000000 !important;
}
</style>