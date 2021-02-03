<template>
    <!--  hero-section -->
    <div>
        <div id="particles-js" class="hero-section">
        </div>
        <div class="overlay"></div>
        <div class="hero-container">
            <div class="container">
                <div class="row ">
                    <div class="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12 text-center ">
                        <!--  hero-block-->
                        <div class="hero-block">
                            <h1 class="hero-title mb30">Create A Timely Passive Income</h1>
                            <p class="text-white">Trade CFDs on Shares, Indices, Forex, Binary and Cryptocurrencies.</p>
                            <router-link to="/user-wallet/user" class="btn btn-default btn-lg">Get Started</router-link>
                        </div>
                        <!--  /.hero-block-->
                    </div>
                </div>
            </div>
        </div>
        <!--  bitcoin-price-section -->
        <div class="bg-light">
            <div class="container-fluid">
                <div class="row ">
                    <div class="col-lg-12">
                        <coingecko-coin-price-marquee-widget coin-ids="bitcoin,eos,ethereum,litecoin,ripple,bitcoin-cash,tether,stellar,tron,binancecoin" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>
                    </div>
                </div>
            </div>
        </div>
        <!--  /.bitcoin-price-section -->
        <VueInjectJs src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js" />
    </div>
    <!--  /.hero-section -->
</template>
<script>
import VueInjectJs from "vue-inject-js";
export default {
    components: {
        VueInjectJs
    }
}
</script>