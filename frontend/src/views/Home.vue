<template>
  <div class="home">
    <TheHeader />
    <Banner />
    <!-- <About /> -->
    <GetStarted />
    <InvestmentPreview />
    <Features />
    <InvestNow />
    <Clients />
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import Banner from "@/components/Banner.vue";
import GetStarted from "@/components/GetStarted.vue";
// import About from "@/components/About.vue";
import InvestmentPreview from "@/components/InvestmentPreview.vue";
import Features from "@/components/Features.vue";
import InvestNow from "@/components/InvestNow.vue";
import Clients from "@/components/Clients.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "Home",
  components: {
    TheHeader,
    Banner,
    // About,
    GetStarted,
    InvestmentPreview,
    Features,
    InvestNow,
    Clients,
    TheFooter
  }
};
</script>
