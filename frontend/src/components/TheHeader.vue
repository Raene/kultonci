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
                <a href="#" class="navbar-brand">Kulton CI</a>
            </div>
            <!-- MENU LINKS -->
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link v-if="routeName!=='Home'" to="/" class="smoothScroll">Home</router-link>
                        <a v-else href="#home" class="smoothScroll">Home</a>
                    </li>
                    <li>
                        <a v-if="routeName==='Home'" href="#about-us" class="smoothScroll">About</a>
                        <router-link v-else to="/#about-us" class="smoothScroll">About</router-link>    
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
                    <!-- <li><a href="#reviews" class="smoothScroll">Testimonials</a></li> -->
                    <li>
                        <router-link to="/support" class="smoothScroll">Support</router-link>
                    </li>
                    <!-- <li><a href="#riskdisclaimer" class="smoothScroll">Risk Disclaimer</a></li> -->
                </ul>
                <ul class="nav navbar-nav navbar-nav-first">
                    <li>
                        <router-link to="/login"><i class="fa fa-user"></i> Log In or Sign Up</router-link>
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

    mounted() {
        console.log("route name: ", this.routeName);
    }
}
</script>
<style scoped>
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
    color: #e3e17b;
    font-weight: 600;
}

.custom-navbar .nav li a,
.top-nav-collapse .nav li a {
    color: #e3e17b;
}

.custom-navbar .navbar-toggle .icon-bar {
    background: #e3e17b;
    border-color: transparent;
}

.router-link-exact-active {
    background-color: #e3e17b;
    color: #000000 !important;
}
</style>