<template>
    <section id="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="section-title">
                        <h2>Frequently Asked Questions</h2>
                        <hr>
                        <p style="font-size: 18px;">Economic markets, financial investing, and stock trading can get confusing at times. If you still have questions after going through these common FAQs, that are already clearly explained in the different sections of our website, contact support so your question(s) can be cleared up as soon as possible.</p>
                    </div>
                    <section id="feature" class="inner-section">
                        <div class="container">
                            <div class="row">
                                <!-- <div class="col-md-6 col-sm-12">
                                    <div class="contact-image">
                                        <img src="../assets/landing/images/contact-image.jpg" class="img-responsive" alt="Smiling Two Girls">
                                    </div>
                                </div> -->
                                <div class="col-md-6 col-sm-12">
                                    <div class="feature-thumb">
                                        <span>01</span>
                                        <h3>How can I register a new account?</h3>
                                        <hr>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="feature-thumb">
                                        <span>02</span>
                                        <h3>How does Kulton CI earn profits for its members?</h3>
                                        <hr>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                    <div class="feature-thumb">
                                        <span>03</span>
                                        <h3>Are there any withdrawal fees?</h3>
                                        <hr>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="feature-thumb">
                                        <span>04</span>
                                        <h3>How long does it take for my withdrawal to be sent?</h3>
                                        <hr>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                    <div class="feature-thumb">
                                        <span>05</span>
                                        <h3>How can I contact your support?</h3>
                                        <hr>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="feature-thumb">
                                        <span>06</span>
                                        <h3>Do I need to make a deposit to refer new members?</h3>
                                        <hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="bottom-btns">
                        <router-link style="margin-left: 20px;" to="/login" class="section-btn btn btn-default smoothScroll">Contact Support</router-link>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
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

/*h2 {
    margin-bottom: 20px;
}*/

h2 small {
    font-size: 82%;
    font-weight: 600;
}

p {
    font-size: 15px;
    text-align: center;
}

.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-top: 7px;
}

.section-btn:hover {
    background: #000000;
    border-color: #e3e17b;
    color: #e3e17b;
}

.feature-thumb {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sub-packages {
    margin-bottom: 7px;
}
</style>