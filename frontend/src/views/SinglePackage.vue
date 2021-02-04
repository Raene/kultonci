<template>
    <div id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
        <!-- <Preloader /> -->
        <TheHeader />
        <SinglePackage />
        <VueInjectJs src="/landing/js/jquery.js" />
        <!-- <VueInjectJs src="/landing/js/bootstrap.min.js" /> -->
        <VueInjectJs src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js" />
        <TheFooter />
    </div>
</template>
<script>
import VueInjectJs from "vue-inject-js";
import TheHeader from "@/components/TheHeader.vue";
import SinglePackage from "@/components/SinglePackage.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
    components: {
        VueInjectJs,
        TheHeader,
        SinglePackage,
        TheFooter
    }
}
</script>