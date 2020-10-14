<template>
  <div id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
  	<!-- <Preloader /> -->
    	<TheHeader />
    	<Support />
    	<TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import Support from "@/components/Support.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
	components: {
		TheHeader,
		Support,
		TheFooter
	}
}
</script>