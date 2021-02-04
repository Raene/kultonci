<template>
  <div id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
  	<!-- <Preloader /> -->
    	<TheHeader />
    	<UserWallet />
    	<TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import UserWallet from "@/components/UserWallet.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
	components: {
		TheHeader,
		UserWallet,
		TheFooter
	}
}
</script>