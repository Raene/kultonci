<template>
    <!-- Start stat section -->
    <section id="testimonial" class="stat-section section-gap-half page-top-banner section-gap-full relative" data-stellar-background-ratio="0.5">
        <div class=" overlay overlay-bg">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-stat">
                        <h1>
                            <span class="counter">640</span>
                        </h1>
                        <h4>Total Investors</h4>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-stat">
                        <h1>
                            $<span class="counter">2415391400</span>
                        </h1>
                        <h4>Total Deposited</h4>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-stat">
                        <h1>
                            $<span class="counter">5973645930</span>
                        </h1>
                        <h4>Total Withdraw</h4>
                    </div>
                </div>
                <!-- <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-stat">
                        <h1>
                            <span class="counter">40</span>
                        </h1>
                        <h4>Countries Accepted</h4>
                    </div>
                </div> -->
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-stat">
                        <h1>
                            <span class="counter">100</span>%
                        </h1>
                        <h4>Satisfied Customers</h4>
                    </div>
                </div>
            </div>
        </div>
        <!-- <script src="/js/jquery.counterup.min.js"></script>
    <script src="/landing/js/custom.js"></script>
    <script src="/js/main.js"></script> -->
        <!-- <script src="/landing/js/jquery.js"></script> -->
        <VueInjectJs src="/landing/js/jquery.js" />
        <VueInjectJs src="/js/waypoints.min.js" />
        <VueInjectJs src="/js/jquery.counterup.min.js" />
        <VueInjectJs src="/js/main.js" />
    </section>
    <!-- End stat section -->
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
h1 {
    font-size: 3.6em;
}
section {
  padding: 60px 0;
}
.stat-section {
    background: gold;
    /*opacity: .2;*/
}

.stat-section h1,
.stat-section h4 {
    color: black;
}

.stat-section .single-stat {
    color: black;
}

.stat-section .single-stat i {
    font-size: 35px;
}

.stat-section .single-stat h1 {
    margin: 20px 0px;
    font-size: 25px;
}

/*.relative {
    position: relative;
}

.overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 215, 0, 0.6);
}

.page-top-banner {
    background: url(../assets/landing/images/Kulton CI.jpg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}*/
</style>