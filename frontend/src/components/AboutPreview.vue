<template>
    <section id="testimonial">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="section-title">
                        <h2>About Us
                        </h2>
                        <hr>
                        <div class="container">
                            <p>Kulton CI, founded in 2015, CI is a trading platform managed by a private trader, Mr. Wesley Hargraves, who trades mostly Cryptocurrency. Mr. Wesley Hargraves has been trading for more than 6 years now and has a vast knowledge of the Crypto Online Market and Cryptocurrency Trading Investment. Kulton CI is being known for it's transparency and accountability of managing finance in the world of Cryptocurrency Trading Investment and Account Management. We had a breakthrough in the market during the middle of 2016.</p>
                    </div>
                        </div>
                    <div class="read-btn">
                        <router-link to="/about-us" class="section-btn btn btn-default smoothScroll">read more <i class="fa fa-angle-double-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.container-fluid {
    /*border: 1px solid gold;*/
    padding: 20px;
}

.container {
    padding-left: 11%;
    padding-right: 11%;
}

hr {
    border-color: gold;
}

.section-title {
    padding-bottom: 0;
}

.section-btn {
    background-color: #000000 !important;
    border-radius: 50px;
    border: none;
    transform: scale(1);
    color: gold !important;
    font-size: inherit;
    font-weight: normal;
    padding: 15px 30px;
    transition: 0.5s;
    width: 250px;
    transition: .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.section-btn:hover {
    background: #000000;
    border-color: gold;
    color: gold;
    transform: scale(1.1);
}

.read-btn {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>