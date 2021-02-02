<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <TheHeader />
    <Banner />
    <About />
    <Process />
    <InvestmentPreview />
    <Feature />
    <InvestNow />
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import Banner from "@/components/Banner.vue";
import About from "@/components/About.vue";
import Process from "@/components/Process.vue";
import InvestmentPreview from "@/components/InvestmentPreview.vue";
import Feature from "@/components/Feature.vue";
import InvestNow from "@/components/InvestNow.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "Home",
  components: {
    TheHeader,
    Banner,
    About,
    Process,
    InvestmentPreview,
    Feature,
    InvestNow,
    TheFooter
  }
};
</script>
