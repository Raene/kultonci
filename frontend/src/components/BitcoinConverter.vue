<template>
    <div id="bitcoin-converter" class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="section-title text-center">
                    <h2>Bitcoin Converter</h2>
                    <hr>
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