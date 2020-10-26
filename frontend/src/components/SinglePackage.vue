<template>
    <section id="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="section-title">
                        <h2>Select a subpackage</h2>
                        <hr style="border-color: gold;">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div class="feature-thumb">
                        <h4>Daily - Bronze</h4>
                        <hr>
                        <div>
                            <p>Minimum Investment of <strong>$2,500</strong></p>
                            <p>Maximum Investment of <strong>$4,999</strong></p>
                        </div>
                        <router-link to="/login" class="section-btn btn btn-default smoothScroll">Select<i class="fa fa-angle-right"></i></router-link>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="feature-thumb">
                        <h4>Daily - Silver</h4>
                        <hr>
                        <div>
                            <p>Minimum Investment of <strong>$5,000</strong></p>
                            <p>Maximum Investment of <strong>$9,999</strong></p>
                        </div>
                        <router-link to="/login" class="section-btn btn btn-default smoothScroll">Select<i class="fa fa-angle-right"></i></router-link>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="feature-thumb">
                        <h4>Daily - Gold</h4>
                        <hr>
                        <div>
                            <p>Minimum Investment of <strong>$10,000</strong></p>
                            <p>Maximum Investment of <strong>$19,999</strong></p>
                        </div>
                        <router-link to="/login" class="section-btn btn btn-default smoothScroll">Select<i class="fa fa-angle-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.feature-thumb {
    background-color: gold;
}

hr {
    border-color: black;
}

h4,
p {
    color: black;
}

.section-btn {
    background: black;
    color: gold;
}

.section-btn:hover {
    background: gold;
    color: black;
    border-color: black;
}
</style>