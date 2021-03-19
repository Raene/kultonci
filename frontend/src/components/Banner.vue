<template>
  <div class="page-hero-section bg-image hero-home-2">
    <div class="overlay"></div>
    <div class="hero-caption">
      <div class="container fg-white h-100">
        <div class="row align-items-center h-100">
          <div class="col-lg-6 wow zoomIn floating-animate">
            <!-- <div class="badge badge-soft mb-2">#1 Finances App on 2020</div> -->
            <h1 class="mb-4 fw-normal">Create a timely passive income</h1>
            <p class="mb-4">Trade CFDs on Shares, Indices, Forex, Options and Cryptocurrencies.</p>
            <router-link to="/user-wallet/user" class="btn btn-dark">Get Started</router-link>
          </div>
          <!-- <div class="col-lg-6 d-none d-lg-block wow zoomIn">
            <div class="img-place mobile-preview shadow floating-animate">
              <img src="../assets/img/app_showcase.svg" alt="">
            </div>
          </div> -->
        </div>
      </div>
      <coingecko-coin-price-marquee-widget coin-ids="bitcoin,eos,ethereum,litecoin,ripple,bitcoin-cash,tether,stellar,tron,binancecoin" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>
    </div>
    <VueInjectJs src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js" />
  </div>
</template>

<script>
import VueInjectJs from "vue-inject-js";
export default {
    components: {
        VueInjectJs
    }
}
</script>

<style scoped>
.bg-image {
  background-image: url(../assets/img/deal_1.jpg);
}

</style>