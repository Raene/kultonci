<template>
	<div>
		<span id="navigation" style="display: none;"></span>
		<!-- <div id="preloader">
			<div class="loader"></div>
		</div> -->
		<div class="page-container">
			<TheSidebar />
			<div class="main-content">
				<TheHeader />
				<div class="main-content-inner">
					<router-view />
				</div>
			</div>
		</div>
		<VueInjectJs src="/dashboard/js/jquery-2.2.4.min.js" />
		<VueInjectJs src="/dashboard/js/popper.min.js" />
		<VueInjectJs src="/dashboard/js/bootstrap.min.js" />
		<VueInjectJs src="/dashboard/js/owl.carousel.min.js" />
		<VueInjectJs src="/dashboard/js/metisMenu.min.js" />
		<VueInjectJs src="/dashboard/js/jquery.slimscroll.min.js" />
		<VueInjectJs src="/dashboard/js/jquery.slicknav.min.js" />
		<VueInjectJs src="/dashboard/js/plugins.js" />
		<VueInjectJs src="/dashboard/js/scripts.js" />
	</div>
</template>

<script>
import VueInjectJs from "vue-inject-js";
import TheHeader from "@/components/Dashboard/TheHeader.vue";
import TheSidebar from "@/components/Dashboard/Beans.vue";
// import TheSidebar from "../components/Dashboard/TheSidebar.vue";
export default {
	components: {
		VueInjectJs,
		TheHeader,
		TheSidebar
	}
}
</script>

<style>
@import "../assets/dashboard/css/bootstrap.min.css";
@import "../assets/dashboard/css/font-awesome.min.css";
@import "../assets/dashboard/css/themify-icons.css";
@import "../assets/dashboard/css/metisMenu.css";
/*@import "../assets/dashboard/css/owl.carousel.min.css";*/
@import "../assets/dashboard/css/slicknav.min.css";
@import "../assets/dashboard/css/typography.css";
@import "../assets/dashboard/css/default-css.css";
@import "../assets/dashboard/css/styles.css";
@import "../assets/dashboard/css/responsive.css";
</style>