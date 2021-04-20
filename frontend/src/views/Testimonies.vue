<template>
  <div>
    <TheHeader />
    <div class="page-hero-section bg-image hero-mini">
      <div class="overlay"></div>
      <div class="hero-caption">
        <div class="container fg-white h-100">
          <div class="row justify-content-center align-items-center text-center h-100">
            <div class="col-lg-6">
              <h3 class="mb-4 fw-medium">Reviews</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-section pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card-page">
              <h5 class="fg-primary">Diana Bateman</h5>
              <hr>
              <p>"Lunar Alliance is the real deal. It is honest, cares about it’s clients, and offers up well vetted Investment contracts. They stay on top of our “investments” and so far have always, each deal has ended with a positive outcome for me. I highly recommend this company so you can count on a positive return on your hard earned money."</p>
              <!-- Video -->
              <!--  <div class="text-center py-5">
            <embed class="embed-video" src="https://www.youtube.com/embed/k1D0_wFlXgo?list=PLl-K7zZEsYLmnJ_FpMOZgyg6XcIGBu2OX">
          </div> -->
            </div>
            <div class="card-page mt-5">
              <h5 class="fg-primary">Mark Robinson</h5>
              <hr>
              <p>"Working with Lunar Alliance has been like working with an extension of our family business. Their strong business ethics and integrity is top notch and has made our working relationship very pleasurable and efficient."</p>
            </div>
            <div class="card-page mt-5">
              <h5 class="fg-primary">Chad Shockley</h5>
              <hr>
              <p>"As an overseas investor, I needed assurance in a company through every stage of the process, Lunar Alliance have provided just that. Their professionalism and commitment meant that my money is in safe hands."</p>
            </div>
            <div class="card-page mt-5">
              <h5 class="fg-primary">George Gabrielson</h5>
              <hr>
              <p>"I have a dozen different investments throughout the world and Lunar Alliance rank among the absolute best. Wesley and his team are very knowledgeable in their field, professional and only look for the opportunities that promise good returns. I am in numerous investments with Lunar Alliance and can say enough good."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>
<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
<style scoped>
.bg-image {
  background-image: url(../assets/img/old-man-money_1.jpg);
}
</style>