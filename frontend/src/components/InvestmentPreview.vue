<template>
    <section id="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="section-title">
                        <h2>See Our Investment Packages
                        </h2>
                        <hr>
                        <div class="container">
                            <p>We take great pride in working with honesty and building trust with clients. As professionals in the field, we aim to use our trading knowledge and experience in order to help create a positive investment outcome. Take a look below to see all that we offer, and get in touch.</p>
                    </div>
                        </div>
                    <div class="read-btn">
                        <router-link to="/investment-packages" class="section-btn btn btn-default smoothScroll">read more <i class="fa fa-angle-double-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.container:nth-child(1) {
    border: 1px solid gold;
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