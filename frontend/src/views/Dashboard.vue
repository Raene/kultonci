<template>
    <div class="wrapper">
      <TheHeader />
      <!-- <TheSidebar /> -->
      <main role="main" class="main-content">
        <router-view />
      </main>
      <VueInjectJs src="/dashboard/js/jquery.min.js" />
      <VueInjectJs src="/dashboard/js/popper.min.js" />
      <VueInjectJs src="/dashboard/js/moment.min.js" />
      <VueInjectJs src="/dashboard/js/simplebar.min.js" />
      <VueInjectJs src="/dashboard/js/tinycolor-min.js" />
      <VueInjectJs src="/dashboard/js/apexcharts.custom.js" />
      <VueInjectJs src="/dashboard/js/apexcharts.min.js" />
      <VueInjectJs src="/dashboard/js/apps.js" />
    </div>
</template>

<script>
import VueInjectJs from "vue-inject-js";
import TheHeader from "@/components/dashboard/TheHeader.vue";
// import TheSidebar from "@/components/dashboard/TheSidebar.vue";
export default {
  components: {
    VueInjectJs,
    TheHeader,
    // TheSidebar
  }
}
</script>

<style>
@import "../assets/dashboard/css/simplebar.css";
@import "../assets/dashboard/css/feather.css";
@import "../assets/dashboard/css/select2.css";
@import "../assets/dashboard/css/dropzone.css";
@import "../assets/dashboard/css/uppy.min.css";
@import "../assets/dashboard/css/jquery.steps.css";
@import "../assets/dashboard/css/jquery.timepicker.css";
@import "../assets/dashboard/css/quill.snow.css";
@import "../assets/dashboard/css/daterangepicker.css";
@import "../assets/dashboard/css/app-light.css";
@import "../assets/dashboard/css/app-dark.css";
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
