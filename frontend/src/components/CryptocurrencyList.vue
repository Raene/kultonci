<template>
    <section id="testimonial">
        <div class="container">
            <div class="row coingecko-script">
                <div class="col-md-12 col-sm-12">
                    <coingecko-coin-price-marquee-widget coin-ids="bitcoin,eos,ethereum,litecoin,ripple,bitcoin-cash,tether,stellar,tron,binancecoin" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="section-title">
                        <h2>Get updated prices
                            <small>on the <span class="bold-color">Top 10 Cryptocurrencies</span>.</small></h2>
                        <hr>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <coingecko-coin-compare-chart-widget coin-ids="bitcoin,eos,ethereum,litecoin,ripple,bitcoin-cash,tether,stellar,tron,binancecoin" currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
                </div>
            </div>
        </div>
        <VueInjectJs src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js" />
        <VueInjectJs src="https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js" />
    </section>
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
@media (min-width: 960px) {
    .col-md-4 {
        max-width: 100% !important;
    }
}

@media (min-width: 600px) {
    .col-sm-4 {
        max-width: 100% !important;
    }
}

/*h2 {
    margin-bottom: 20px;
}*/

h2 small {
    font-size: 82%;
    font-weight: 600;
}

p {
    font-size: 15px;
    text-align: center;
}

h5 {
    font-size: 23px;
}

.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-btn {
    background: #e3e17b;
    border-radius: 50px;
    border: 1px solid #000000;
    color: #000000;
    font-size: inherit;
    font-weight: normal;
    padding: 15px 30px;
    transition: 0.5s;
    margin-top: 7px;
}

.section-btn:hover {
    background: #000000;
    border-color: #e3e17b;
    color: #e3e17b;
}

.feature-thumb {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sub-packages {
    margin-bottom: 7px;
}

.bold-color {
    font-weight: 700;
    color: #e3e17b;
}

small {
    color: #353535;
}

section {
    padding-top: 0;
}

.coingecko-script {
    margin-bottom: 50px;
}
</style>