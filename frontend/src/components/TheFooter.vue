<template>
    <!-- <footer id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <div class="footer-info">
                        <div class="section-title">
                            <h2>Headquarter</h2>
                        </div>
                        <address>
                            <p>1800 dapibus a tortor pretium,<br> Integer nisl dui, ABC 12000</p>
                        </address>
                        <ul class="social-icon">
                            <li><a href="#" class="fa fa-facebook-square" attr="facebook icon"></a></li>
                            <li><a href="#" class="fa fa-twitter"></a></li>
                            <li><a href="#" class="fa fa-instagram"></a></li>
                        </ul>
                        <div class="copyright-text">
                            <p>Copyright &copy; 2015 - 2020 Kulton CI Trading</p>
                            <p>All rights reserved</p>
                        </div>
                    </div>
                </div>
                <div class="footer-col">
                    <div class="footer-info">
                        <div class="section-title">
                            <h2>Kulton CI</h2>
                        </div>
                        <address>
                            <p style="margin-bottom: 20px;">Quick support? Please Call:  +1 (503) 809-0295</p>
                            <p><a href="mailto:kultoncitrades@gmail.com">kultoncitrades@gmail.com</a></p>
                        </address>
                        <div class="copyright-text">
                            <p>Copyright &copy; 2015 - 2020 Kulton CI Trading</p>
                            <p>All rights reserved</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="footer-info newsletter-form">
                        <div class="section-title">
                            <h2>Newsletter Signup</h2>
                        </div>
                        <div>
                            <div class="form-group">
                                <form action="#" method="get">
                                    <input type="email" class="form-control" placeholder="Enter your email" name="email" id="email" required="">
                                    <input type="submit" class="form-control" name="submit" id="form-submit" value="Send me">
                                </form>
                                <span><sup>*</sup> Please note - we do not spam your email.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
 -->
    <footer id="footer">
        <section class="page-top-banner section-gap-full relative" data-stellar-background-ratio="0.5">
            <div class="overlay overlay-bg"></div>
            <div class="container">
                <div class="make-flex">
                    <div class="col-flex-1">
                        <div class="footer-info">
                            <div class="section-title m-bottom">
                                <h2>Contact Us</h2>
                            </div>
                            <p class="m-bottom"><i class="fa fa-address-card"></i>
                                1210 8th St SW
                                Petrowest Plaza
                                Calgary, AB
                            </p>
                            <p class="m-bottom"><i class="fa fa-envelope"></i><a href="mailto:support@kultonci.com">support@kultonci.com</a></p>
                            <!-- <figure>
                                <span><i class="fa fa-envelope"></i></span>
                                <figcaption>
                                    <h4>Email</h4>
                                    <p><a href="mailto:support@kultonci.com">support@kultonci.com</a></p>
                                </figcaption>
                            </figure>
 -->
                        </div>
                    </div>
                    <div class="col-flex-2">
                        <!-- <img class="img-fluid footer_image" src="@/assets/landing/images/Kulton CI.png"> -->
                        <div class="footer-info about-content">
                            <p>Kulton CI Trades is an officially registered company in Canada. Kulton CI Trades operates under the strict compliance of Canada's law. We give our clients all required guarantees, including confidentiality of data provided by clients at the registration procedure.</p>
                        </div>
                    </div>
                    <div class="col-flex-3">
                        <div class="footer-info link-info">
                            <div class="section-title">
                                <h2 class="center">Quick Links</h2>
                            </div>
                            <div class="footer_menu">
                                <ul class="center">
                                    <li><a href="#">Investments</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                            </div>
                            <!-- <div class="footer_image">
                                <img class="img-responsive" src="@/assets/landing/images/Kulton CI.jpg">
                            </div>
                            <div class="copyright-text" style="margin-top: 30px;">
                                <p>Copyright &copy; 2015 - 2020 Kulton CI Trading</p>
                                <p>All rights reserved</p>
                            </div> -->
                        </div>
                    </div>
                    <!-- <div class="col-md-4 col-sm-12">
                    <div class="footer-info newsletter-form">
                        <div class="section-title">
                            <h2>Newsletter Signup</h2>
                        </div>
                        <div>
                            <div class="form-group">
                                <form action="#" method="get">
                                    <input type="email" class="form-control" placeholder="Enter your email" name="email" id="email" required="">
                                    <input type="submit" class="form-control" name="submit" id="form-submit" value="Send me">
                                </form>
                                <span><sup>*</sup> Please note - we do not spam your email.</span>
                            </div>
                        </div>
                    </div>
                </div> -->
                </div>
            </div>
            <div class="row bg-white">
                <div class="col-md-12">
                    <p class="text-center">Copyright &copy; 2015 - 2020 Kulton CI Trading</p>
                </div>
            </div>
        </section>
    </footer>
</template>
<style scoped>
.make-flex {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    flex-wrap: wrap;
}

.col-flex-1 {
    flex-basis: 220px;
}

.col-flex-2 {
    flex-basis: 350px;
}

.footer-info.about-content {
    padding-top: 20px !important;
}

p,
li a {
    font-size: 12px !important;
}

section {
    padding-bottom: 0;
}

.bg-white {
    background-color: #ffffff;
}

.bg-white p {
    color: #000000;
}

.m-bottom {
    margin-bottom: 10px !important;
}

.fa {
    margin-right: 7px;
}

/*.link-info {
    width: 200px !important;
    margin: 0 auto !important;
}*/

/*.center {
    text-align: center !important;
}*/

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
    background: url(../assets/landing/images/coin_1.jpg);
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    
}
*/
section {
    margin-bottom: 0;
}

footer h2 {
    font-size: 15px !important;
    text-transform: uppercase;
    text-align: left;
}

figure {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
}

figure span i {
    background: transparent;
    border: 1px solid black;
    /*border-radius: 50px;*/
    color: #000000;
    font-size: 25px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
}

footer {
    padding: 0;
}

figcaption {
    margin-left: 10px;
    line-height: 17px;
}

figcaption h4 {
    color: black;
}


address p {
    line-height: 20px;
}

.footer_image {
    width: 60px;
    text-align: center;
}

@media (max-width: 480px) {
    p {
        text-align: left !important;
        padding-left: 0 !important;
        padding-bottom: 0 !important;
        margin-bottom: 0 !important;
    }

    .bg-white p {
        text-align: center !important;
    }

    /*.link-info {
        margin-left: 0 !important;
    }*/
}

/*figure {
    display: inline-block;
    vertical-align: top;
    margin-left: 15px;
    width: 100%;
}

figure span {
    float: left;
    margin-left: -35px;
    padding: 15px 20px;
    position: relative;
    top: 20px;
}

figure span i {
    background: #e3e17b;
    border: 1px solid black;
    border-radius: 50px;
    color: #000000;
    font-size: 25px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
*/
/*.container, .footer-col {
    display: flex;
    flex-direction: column;
    align-items: center;
}

footer {
    padding: 56px 0;
}

.footer-col {
    text-align: center;
}*/
</style>