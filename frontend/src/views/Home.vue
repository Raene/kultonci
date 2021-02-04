<template>
    <div id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
        <!-- <Preloader /> -->
        <TheHeader />
        <Banner id="home" />
        <AboutPreview />
        <SecondBanner />
        <HowItWorks />
        <WhyUs />
        <InvestmentPreview />
        <Stat />
        <RiskDisclaimer />
        <PrivacyPolicy />
        <InvestNow />
        <TheFooter />
        <VueInjectJs src="/landing/js/jquery.js" />
        <VueInjectJs src="/landing/js/bootstrap.min.js" />
        <VueInjectJs src="/landing/js/owl.carousel.min.js" />
        <VueInjectJs src="/landing/js/custom.js" />
    </div>
</template>
<script>
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import VueInjectJs from "vue-inject-js";
import TheHeader from "@/components/TheHeader.vue";
import Banner from "@/components/Banner.vue";
import SecondBanner from "@/components/SecondBanner.vue";
import AboutPreview from "@/components/AboutPreview.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import WhyUs from "@/components/WhyUs.vue";
import Stat from "@/components/Stat.vue";
import InvestmentPreview from "@/components/InvestmentPreview.vue";
import RiskDisclaimer from "@/components/RiskDisclaimer.vue";
import PrivacyPolicy from "@/components/PrivacyPolicy.vue";
import InvestNow from "@/components/InvestNow.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
    name: "Home",
    components: {
        VueInjectJs,
        TheHeader,
        Banner,
        SecondBanner,
        AboutPreview,
        HowItWorks,
        WhyUs,
        Stat,
        InvestmentPreview,
        RiskDisclaimer,
        PrivacyPolicy,
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