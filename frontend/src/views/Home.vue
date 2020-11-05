<template>
    <div id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
        <!-- <Preloader /> -->
        <TheHeader />
        <Banner id="home" />
        <SecondBanner />
        <AboutPreview />
        <HowItWorks />
        <WhyUs />
        <InvestmentPreview />
        <Stat />
        <RiskDisclaimer />
        <!-- <BitcoinConverter /> -->
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
// @ is an alias to /src
import VueInjectJs from "vue-inject-js";
// import Preloader from "@/components/Preloader.vue";
import TheHeader from "@/components/TheHeader.vue";
import Banner from "@/components/Banner.vue";
import SecondBanner from "@/components/SecondBanner.vue";
import AboutPreview from "@/components/AboutPreview.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import WhyUs from "@/components/WhyUs.vue";
import Stat from "@/components/Stat.vue";
import InvestmentPreview from "@/components/InvestmentPreview.vue";
import RiskDisclaimer from "@/components/RiskDisclaimer.vue";
// import BitcoinConverter from "@/components/BitcoinConverter.vue";
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
        AboutPreview,
        HowItWorks,
        WhyUs,
        Stat,
        InvestmentPreview,
        RiskDisclaimer,
        // BitcoinConverter,
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