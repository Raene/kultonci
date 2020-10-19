<template>
    <section id="testimonial" class="testimonial show-on-scroll">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="section-title">
                        <h2>Make Money
                            Quickly & Easily
                            with Kulton CI.
                        </h2>
                        <hr>
                        <div class="container">
                            <p>Trade CFDs on Shares, Indices, Forex, Binary and Cryptocurrencies.</p>
                        </div>
                    </div>
                    <div class="read-btn">
                        <router-link to="/investment-packages" class="section-btn btn btn-default smoothScroll">learn more <i class="fa fa-angle-double-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.container-fluid {
    border: 1px solid #e3e17b;
    padding: 20px;
}

.container {
    padding-left: 11%;
    padding-right: 11%;
}

hr {
    border-color: #ffffff;
}

.section-title {
    padding-bottom: 0;
}

.section-btn {
    background-color: #000000 !important;
    border-radius: 50px;
    border: none;
    transform: scale(1);
    color: #e3e17b !important;
    font-size: inherit;
    font-weight: normal;
    padding: 15px 30px;
    transition: 0.5s;
    width: 250px;
    transition: .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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

.testimonial {
    transform: translateY(4rem);
    opacity: 0;
    transition: transform 1s 0.4s ease-out, opacity 0.5s 0.4s ease-out;
    will-change: transform, opacity;
}
.testimonial.is-visible {
    transform: translateY(0);
    opacity: 1;
}
</style>