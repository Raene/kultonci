<template>
    <div id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
        <!-- <Preloader /> -->
        <TheHeader />
        <Banner id="home" />
        <SecondBanner />
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <coingecko-coin-list-widget coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" locale="en"></coingecko-coin-list-widget>
                </div>
            </div>
        </div>
        <AboutPreview />
        <HowItWorks />
        <!-- <About id="about-us" /> -->
        <!-- <Mission />
        <Vision />
        <Goals /> -->
        <WhyUs />
        <InvestmentPreview />
        <RiskDisclaimer />
        <InvestNow />
        <TheFooter />
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <VueInjectJs src="https://widgets.coingecko.com/coingecko-coin-list-widget.js" />
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
import AboutPreview from "@/components/AboutPreview.vue";
import HowItWorks from "@/components/HowItWorks.vue";
// import Mission from "@/components/Mission.vue";
// import Vision from "@/components/Vision.vue";
// import Goals from "@/components/Goals.vue";
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
        AboutPreview,
        HowItWorks,
        // Mission,
        // Vision,
        // Goals,
        WhyUs,
        InvestmentPreview,
        RiskDisclaimer,
        InvestNow,
        TheFooter
    },
    mounted() {
        this.$swal({
            position: "center",
            icon: "info",
            title: "ANNOUNCEMENT!!",
            html: `<strong>Promotion Commencement<br></strong>
            I would like to announce to you the commencement of our promotion packages for the months of October and November. Promotion investments start with $25,000 to $300,000 and All the clients involved with this will be receiving a 60% Profits of every amount you start with on the Promotion Package every week. This promotion is for both new and existing clients and it will last for the months of October and November. Good luck dear esteemed investors.<br> <strong><i>Brought to you by the Chief Trader, Kulton CI Trade</i></strong>`,
            showCloseButton: true,
            showCancelButton: false
            // timer: 1500
        });
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