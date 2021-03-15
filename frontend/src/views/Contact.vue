<template>
  <div>
    <TheHeader />
    <div class="bg-light">
      <div class="page-hero-section bg-image hero-mini">
      	<div class="overlay"></div>
        <div class="hero-caption">
          <div class="container fg-white h-100">
            <div class="row justify-content-center align-items-center text-center h-100">
              <div class="col-lg-6">
                <h3 class="mb-4 fw-medium">Contact</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 my-3 wow fadeInUp">
              <div class="card-page">
                <div class="row row-beam-md">
                  <div class="col-md-6 text-center py-3 py-md-2">
                    <i class="mai-location-outline h3"></i>
                    <p class="fg-primary fw-medium fs-vlarge">Location</p>
                    <p class="mb-0">1210 8th St SW Petrowest Plaza Calgary, AB</p>
                  </div>
                  <!-- <div class="col-md-4 text-center py-3 py-md-2">
                    <i class="mai-call-outline h3"></i>
                    <p class="fg-primary fw-medium fs-vlarge">Contact</p>
                    <p class="mb-1">+213 908 92034</p>
                    <p class="mb-0">+415 123 89245</p>
                  </div> -->
                  <div class="col-md-6 text-center py-3 py-md-2">
                    <i class="mai-mail-open-outline h3"></i>
                    <p class="fg-primary fw-medium fs-vlarge">Email</p>
                    <p class="mb-1">support@lunaralliance.investments</p>
                    <!-- <p class="mb-0">support@macodeid.com</p>
 -->                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-lg-7 my-3 wow fadeInUp mx-auto">
              <div class="card-page">
                <h3 class="fw-normal">Get in touch</h3>
                <form method="POST" class="mt-3">
                  <div class="form-group">
                    <label for="name" class="fw-medium fg-grey">Fullname</label>
                    <input type="text" class="form-control" id="name">
                  </div>
                  <div class="form-group">
                    <label for="email" class="fw-medium fg-grey">Email</label>
                    <input type="text" class="form-control" id="email">
                  </div>
                  <div class="form-group">
                    <label for="message" class="fw-medium fg-grey">Message</label>
                    <textarea rows="6" class="form-control" id="message"></textarea>
                  </div>
                  <p>*Your information will never be shared with any third party.</p>
                  <div class="form-group mt-4">
                    <button type="submit" class="btn btn-primary">Send Message</button>
                  </div>
                </form>
              </div>
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
  background-image: url(../assets/img/girl-bitcoin-body_1.jpg);
}
</style>