<template>
    <div id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
    	<!-- <Preloader /> -->
    	<TheHeader />
    	<Banner id="home" />
        <SecondBanner />
        <About id="about-us" />
        <HowItWorks />
        <Mission />
        <Vision />
        <Goals />
        <WhyUs />
        <InvestmentPreview />
    	<RiskDisclaimer />
        <InvestNow />
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
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
// @ is an alias to /src
import VueInjectJs from "vue-inject-js";
// import Preloader from "@/components/Preloader.vue";
import TheHeader from "@/components/TheHeader.vue";
import Banner from "@/components/Banner.vue";
import SecondBanner from "@/components/SecondBanner.vue";
import About from "@/components/About.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import Mission from "@/components/Mission.vue";
import Vision from "@/components/Vision.vue";
import Goals from "@/components/Goals.vue";
import WhyUs from "@/components/WhyUs.vue";
import InvestmentPreview from "@/components/InvestmentPreview.vue";
import RiskDisclaimer from "@/components/RiskDisclaimer.vue";
import InvestNow from "@/components/InvestNow.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
    name: "Home",
    components: {
        VueInjectJs,
        // Preloader,
        TheHeader,
        Banner,
        SecondBanner,
        About,
        HowItWorks,
        Mission,
        Vision,
        Goals,
        WhyUs,
        InvestmentPreview,
        RiskDisclaimer,
        InvestNow,
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