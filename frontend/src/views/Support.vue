<template>
    <div id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
        <!-- <Preloader /> -->
        <TheHeader />
        <Support />
        <VueInjectJs src="/landing/js/jquery.js" />
        <!-- <VueInjectJs src="/landing/js/bootstrap.min.js" /> -->
        <VueInjectJs src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js" />
        <TheFooter />
    </div>
</template>
<script>
import VueInjectJs from "vue-inject-js";
import TheHeader from "@/components/TheHeader.vue";
import Support from "@/components/Support.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
    components: {
        VueInjectJs,
        TheHeader,
        Support,
        TheFooter
    }
}
</script>