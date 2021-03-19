<template>
  <div id="bitcoin-converter" class="container-fluid">
    <div class="row">
      <div class="col-md-12 col-xs-3 mt-lg-5 wow fadeInUp">
        <div class="section-title text-center">
          <h2 class="text-white">Know Bitcoin Price Instantly</h2>
          <hr>
          <h3 class="text-white">Bitcoin Currency Converter</h3>
        </div>
      </div>
      <div class="container mt-4">
        <coingecko-coin-converter-widget coin-id="bitcoin" currency="usd" background-color="#ffffff" font-color="#4c4c4c" locale="en"></coingecko-coin-converter-widget>
      </div>
    </div>
    <VueInjectJs src="https://widgets.coingecko.com/coingecko-coin-converter-widget.js" />
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
#bitcoin .cg-container {
  min-width: 200px !important;
}

#bitcoin-converter {
  background: #2c75af;
  padding-top: 40px;
  padding-bottom: 60px;
}

h3 {
  color: black;
  font-size: 24px;
  text-transform: uppercase;
}

.col-md-12 {
  padding-bottom: 0;
}

h2 {
  color: black;
}

hr {
  border-top: 1px solid #ffffff;
  width: 300px;
}
</style>