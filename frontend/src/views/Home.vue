<template>
    <div id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
    	<!-- <Preloader /> -->
    	<TheHeader />
    	<Banner id="home" />
        <About id="about-us" />
    	<Reviews />
        <WhyUs />
    	<RiskDisclaimer />
    	<TheFooter />
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <VueInjectJs src="/landing/js/jquery.js" />
        <!-- <VueInjectJs src="/landing/js/smoothscroll.js" /> -->
        <VueInjectJs src="/landing/js/bootstrap.min.js" />
        <VueInjectJs src="/landing/js/owl.carousel.min.js" />
        <VueInjectJs src="/landing/js/custom.js" />
    </div>
</template>
<script>
// @ is an alias to /src
import VueInjectJs from "vue-inject-js";
// import Preloader from "@/components/Preloader.vue";
import TheHeader from "@/components/TheHeader.vue";
import Banner from "@/components/Banner.vue";
import About from "@/components/About.vue";
import Reviews from "@/components/Reviews.vue";
import WhyUs from "@/components/WhyUs.vue";
import RiskDisclaimer from "@/components/RiskDisclaimer.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
    name: "Home",
    components: {
        VueInjectJs,
        // Preloader,
        TheHeader,
        Banner,
        About,
        Reviews,
        WhyUs,
        RiskDisclaimer,
        TheFooter
    }
};
</script>
<style scoped>
@import "../assets/landing/css/bootstrap.min.css";
@import "../assets/landing/css/font-awesome.min.css";
@import "../assets/landing/css/owl.carousel.css";
@import "../assets/landing/css/owl.theme.default.min.css";
@import "../assets/landing/css/templatemo-style.css";
</style>