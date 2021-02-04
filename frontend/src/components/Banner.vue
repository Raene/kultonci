<template>
    <section id="home">
        <!-- <section class="page-top-banner section-gap-full relative" data-stellar-background-ratio="0.5">
            <div class="overlay overlay-bg"></div>
            <div class="container">
                <div class="row section-gap-half">
                    <div class="col-lg-12 text-center banner-caption show-on-scroll">
                        <h1>Finance Your Future with Kulton CI.</h1>
                        <hr>
                        <h3>Become a member of our company to start growing your funds every day!</h3>
                        <router-link to="/login" class="section-btn btn btn-default smoothScroll">Get Started</router-link>
                    </div>
                </div>
            </div>
        </section> -->
        <div class="row">
            <coingecko-coin-price-marquee-widget coin-ids="bitcoin,eos,ethereum,litecoin,ripple,bitcoin-cash,tether,stellar,tron,binancecoin" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>
            <div class="owl-carousel owl-theme home-slider">
                <div class="item item-first">
                    <div class="caption banner-caption show-on-scroll">
                        <div class="container">
                            <div class="col-md-6 col-sm-12 banner-caption show-on-scroll">
                                <h1>Welcome To Kulton CI.</h1>
                                <hr>
                                <!-- <h3>Become a member of our company to start growing your funds every day!</h3> -->                                <router-link to="/login" class="section-btn btn btn-default smoothScroll">Get Started</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item item-second">
                    <div class="caption">
                        <div class="container">
                            <div class="col-md-6 col-sm-12">
                                <h1>Finance Your Future
                                    With Kulton CI.</h1>
                                    <hr>
                                <h3>Trade CFDs on Shares, Indices, Forex, Binary and Cryptocurrencies.</h3>
                                <a href="#courses" class="section-btn btn btn-default smoothScroll">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item item-third">
                    <div class="caption">
                        <div class="container">
                            <div class="col-md-6 col-sm-12">
                                <h1>Create a Timely Passive Income</h1>
                                    <hr>
                                <!-- <h3>Trade CFDs on Shares, Indices, Forex, Binary and Cryptocurrencies.</h3> -->
                                <a href="#courses" class="section-btn btn btn-default smoothScroll">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item item-fourth">
                    <div class="caption">
                        <div class="container">
                            <div class="col-md-6 col-sm-12">
                                <h1>Become a Member</h1>
                                    <hr>
                                <!-- <h3>Trade CFDs on Shares, Indices, Forex, Binary and Cryptocurrencies.</h3> -->
                                <a href="#courses" class="section-btn btn btn-default smoothScroll">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <VueInjectJs src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js" />
        <VueInjectJs src="/landing/js/show-on-scroll.js" />
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
section {
    padding: 192px 0;
}

.relative {
    position: relative;
}

.overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
}

.page-top-banner {
    background: url(../assets/landing/images/coins_1.jpg);
    background-size: cover;
    /* opacity: .9; */
    /* background-color: black; */
}

.page-top-banner .overlay-bg {
    /*opacity: 1;*/
    /*background-color: black;*/
}

.page-top-banner h1 {
    color: #fff;
    font-size: 55px;
    margin-bottom: 10px;
}

.page-top-banner h4 {
    color: #fff;
    font-weight: 400;
}

@media (max-width: 430px) {
    section {
        padding: 125px 0;
    }

    .page-top-banner h1 {
        font-size: 3.4375em;
    }
}

@media (max-width: 330px) {
    section {
        padding: 40px 0;
    }
}
.banner-caption {
    transform: translateY(4rem);
    opacity: 0;
    transition: transform 1s 0.4s ease-out, opacity 0.5s 0.4s ease-out;
    will-change: transform, opacity;
}
.banner-caption.is-visible {
    transform: translateY(0);
        opacity: 1;
}
</style>