<template>
  <div id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
  	<!-- <Preloader /> -->
    	<TheHeader />
    	<Faqs />
    	<TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import Faqs from "@/components/Faqs.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
	components: {
		TheHeader,
		Faqs,
		TheFooter
	}
}
</script>