<template>
    <div id="bitcoin-converter" class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="section-title text-center">
                    <h2>Know Bitcoin Price Instantly</h2>
                    <hr>
                    <h3>Bitcoin Currency Converter</h3>
                </div>
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
    border: 2px solid black;
}
</style>