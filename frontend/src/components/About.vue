<template>
    <section id="testimonial" class="sect page-top-banner section-gap-full relative" data-stellar-background-ratio="0.5">
        <div class="overlay overlay-bg"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="section-title">
                        <h2 class="about-us show-on-scroll">About Us
                            <hr>
                        </h2>
                        <div class="container about-text show-on-scroll">
                            <p>Kulton CI, founded in 2015, CI is a trading platform managed by a private trader, Mr. Wesley Hargraves, who trades mostly Cryptocurrency. Mr. Wesley Hargraves has been trading for more than 6 years now and has a vast knowledge of the Crypto Online Market and Cryptocurrency Trading Investment. Kulton CI is being known for it's transparency and accountability of managing finance in the world of Cryptocurrency Trading Investment and Account Management. We had a breakthrough in the market during the middle of 2016.</p>
                            <p>Kulton CI is a global market place for people to trade Currencies, Commodities, Indices and CFO Stock online in a simple and transparent way. Our goal is to make trading accessible to all investors regardless of age, location, investment, technical knowledge or experience. Trading in Kulton involves the weekly investments where profits are paid directly to clients every week, the Monthly Compounding Investments and the NFP.</p>
                            <p> Kulton CI believes every client is different and requires a unique approach. Our mission is to help people navigate through changing market conditions and several kinds of investment opportunities in order to find a strategic plan that best fits their trading goals.
                            </p>
                        </div>
                    </div>
                    <!-- <div v-if="!routeName" class="read-btn show-on-scroll">
                        <router-link to="/about-us" class="section-btn btn btn-default smoothScroll">read more <i class="fa fa-angle-double-right"></i></router-link>
                    </div> -->
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <coingecko-coin-list-widget coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" locale="en"></coingecko-coin-list-widget>
                </div>
            </div>
        </div>
        <VueInjectJs src="https://widgets.coingecko.com/coingecko-coin-list-widget.js" />
    </section>
</template>
<script>
import VueInjectJs from "vue-inject-js";
export default {
    components: {
        VueInjectJs
    },

    computed: {
        routeName() {
            if (this.$route.name !== "About") {
                return false;
            }
            return true;
        }
    }
};
</script>
<style scoped>
.relative {
    position: relative;
}

.overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.page-top-banner {
    background: url(../assets/landing/images/coins effect.jpg);
      background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
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

h2 {
    margin-bottom: 20px;
}

h2 small {
    font-size: 82%;
    font-weight: 600;
}

p {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
}

.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 0;
}

.section-btn {
    background-color: #000000 !important;
    border-radius: 50px;
    border: none;
    transform: scale(0);
    color: #e3e17b !important;
    font-size: inherit;
    font-weight: normal;
    padding: 15px 30px;
    transition: 0.5s;
    width: 250px;
    opacity: 0;
    transition: transform .8s .4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.5s 0.4s ease-out;
}

.is-visible .section-btn {
    transform: scale(1);
    opacity: 1;
}

.section-btn:hover {
    background: #000000;
    border-color: #e3e17b;
    color: #e3e17b;
    transform: scale(1.1);
}

.read-btn {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.about-us {
    transform: translateY(-4rem);
    opacity: 0;
    transition: transform 1s 0.4s ease-out, opacity 0.5s 0.4s ease-out;
    will-change: transform, opacity;
}

.about-us.is-visible {
    transform: translateY(0);
    opacity: 1;   
}

.about-text {
    transform: translateY(4rem);
    opacity: 0;
    transition: transform 1s 0.4s ease-out, opacity 0.5s 0.4s ease-out;
    will-change: transform, opacity;
}

.about-text.is-visible {
    transform: translateY(0);
    opacity: 1;   
}
</style>