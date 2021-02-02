<template>
    <div>
    	<TheHeader />
        <div class="page-header">
        	<div class="other-overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="page-caption">
                            <!-- <h1 class="page-title">Bitcoin Widget</h1> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.page-header-->
        <!-- bitcoin-widget -->
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mb30 ">
                        <h2>Cryptocurrency List</h2>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb60">
                        <div class="chart-block">
                            <coingecko-coin-compare-chart-widget coin-ids="bitcoin,eos,ethereum,litecoin,ripple,bitcoin-cash,tether,stellar,tron,binancecoin" currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <VueInjectJs src="https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js" />
        <TheFooter />
    </div>
    <!-- page-header -->
    <!-- /.bitcoin-widget -->
    <!-- /.contact -->
    <!-- <a href="javascript:" id="return-to-top"><i class="fa fa-angle-up"></i></a> -->
    <!-- <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/menumaker.js"></script>
    <script src="js/return-to-top.js"></script>
    <script src="js/navigation.js"></script>
    <script>
    (function(b, i, t, C, O, I, N) {
        window.addEventListener('load', function() {
            if (b.getElementById(C)) return;
            I = b.createElement(i), N = b.getElementsByTagName(i)[0];
            I.src = t;
            I.id = C;
            N.parentNode.insertBefore(I, N);
        }, false)
    })(document, 'script', 'https://widgets.bitcoin.com/widget.js', 'btcwdgt');
    </script> -->
</template>

<script>
import VueInjectJs from "vue-inject-js";
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
	components: {
		VueInjectJs,
		TheHeader,
        TheFooter
	}
};
</script>