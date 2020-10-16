<template>
    <section id="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="section-title">
                        <h2>Kulton CI
                            <hr>
                            <small>Welcome to Kulton CI</small></h2>
                        <p><strong>Kulton CI</strong> is a trading platform managed by a private trader who trades mostly Cryptocurrency. The chief-trader<strong>Mr. Wesley Hargraves</strong>, has been trading for more than 6 years now with a vast knowledge of the crypto online market.
                            <br>
                            Trading in Kulton involves the weekly investments where profits are paid directly to clients every week, the <strong>monthly compounding investments</strong> and <strong>the NFP</strong>.</p>
                        <p>
                            <strong>Kulton CI</strong> is a global market place for people to trade Currencies, Commodities, Indices and CFD Stock online in a simple and transparent way. Our goal is to make trading accessible to all investors regardless of age, location, investment, technical knowledge or experience.
                        </p>
                        <p>
                            <strong>Kulton CI</strong> believes every client is different and requires a unique approach. Our mission is to help people navigate through changing market conditions and several kinds of investment opportunities in order to find a strategic plan that best fits their trading goals.
                        </p>
                        <p>
                            To this end, we carefully analyse each individual’s financial situation and work with them in order to optimise results within their parameters. Whether it’s making sure you get the right background information so you can make smart decisions, or assisting with diversifying your portfolio, we look forward to helping you on your path towards a secure financial future.
                        </p>
                    </div>
                    <!--  <div class="bottom-btns">
                        <a href="/login" class="section-btn btn btn-default smoothScroll">Send an email to our chief-trader</a>
                        <router-link style="margin-left: 20px;" to="/login" class="section-btn btn btn-default smoothScroll">I want to invest</router-link>
                        
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
    }
};
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

h2 {
    margin-bottom: 20px;
}

h2 small {
    font-size: 82%;
    font-weight: 600;
}

p {
    font-size: 18px;
    text-align: left;
}

.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
}

.section-btn:hover {
    background: #000000;
    border-color: #e3e17b;
    color: #e3e17b;
}

.bottom-btns {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
</style>