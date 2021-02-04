<template>
  <div id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
  	<!-- <Preloader /> -->
    	<TheHeader />
    	<About />
    	<TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import About from "@/components/About.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
	components: {
		TheHeader,
		About,
		TheFooter
	}
}
</script>