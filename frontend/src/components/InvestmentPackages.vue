<template>
    <div>
        <section class="page-top-banner section-gap-full relative" data-stellar-background-ratio="0.5">
            <div class="overlay overlay-bg"></div>
            <div class="container">
                <div class="row section-gap-half">
                    <div class="col-lg-12 text-center">
                        <h1>Investment Packages</h1>
                        <!-- <h4>Contact Us For Request & Inquiries</h4> -->
                        <hr>
                        <h4>We take great pride in working with honesty and building trust with clients. As professionals in the field, we aim to use our trading knowledge and experience in order to help create a positive investment outcome. Take a look below to see all that we offer, and get in touch.</h4>
                    </div>
                </div>
            </div>
        </section>
        <section id="testimonial" class="sect">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="section-title">
                        </div>
                        <section id="feature" class="inner-section">
                            <div class="container">
                                <div v-for="(p, index) in packages" :key="index" class="row">
                                    <!-- <div class="col-md-12 col-sm-12">
                                    <div class="contact-image">
                                        <img src="../assets/landing/images/contact-image.jpg" class="img-responsive" alt="Smiling Two Girls">
                                    </div>
                                </div> -->
                                    <div class="col-md-12 col-sm-12">
                                        <div class="feature-thumb">
                                            <!-- <span>01</span> -->
                                            <h3 class="inv-title">{{ Object.keys(p)[0] }}</h3>
                                            <!-- <hr> -->
                                            <div v-for="(subPackage, j) in p" :key="j" class="sub-packages">
                                                <div v-for="(value, k) in subPackage" :key="k">
                                                    <h5>{{ value.PackageName }}</h5>
                                                    <!-- <span v-if="false">{{ holdId.push(value.investmentPkg_id) }}</span> -->
                                                    <p>Minimum Investment of <strong>${{ value.minprice }}</strong></p>
                                                    <p>Maximum Investment of <strong>${{ value.maxprice }}</strong></p>
                                                    <p><strong>RETURNS {{ value.percentageReturns }}%</strong></p>
                                                    <p><strong>REFERRAL BONUS {{ value.referral_bonus }}%</strong></p>
                                                    <hr>
                                                </div>
                                            </div>
                                            <!-- <div class="sub-packages">
                                            <h5>DAILY - SILVER</h5>
                                            <p>Minimum Investment of <strong>$5,000</strong></p>
                                            <p>Maximum Investment of <strong>$9,999</strong></p>
                                            <p><strong>DAILY RETURNS 1.5%</strong></p>
                                            <p><strong>REFERRAL BONUS 7%</strong></p>
                                        </div>
                                        <hr>
                                        <div class="sub-packages">
                                            <h5>DAILY - GOLD</h5>
                                            <p>Minimum Investment of <strong>$10,000</strong></p>
                                            <p>Maximum Investment of <strong>$19,999</strong></p>
                                            <p><strong>DAILY RETURNS 2%</strong></p>
                                            <p><strong>REEFERRAL BONUS 10%</strong></p>
                                        </div> -->
                                            <router-link :to="!user? '/login': '/investment-packages/'+Object.keys(p)[0]" class="section-btn btn btn-default smoothScroll">Select package <i class="fa fa-angle-right"></i></router-link>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="row">
                                <div class="col-md-12 col-sm-12">
                                    <div class="feature-thumb middle">
                                        <h3 class="inv-title2">Weekly Investment Packages</h3>
                                        <div class="sub-packages">
                                            <h5>WEEKLY - BRONZE</h5>
                                            <p>Minimum Investment of <strong>$2,000</strong></p>
                                            <p>Maximum Investment of <strong>$4,999</strong></p>
                                            <p><strong>WEEKLY RETURNS 10%</strong></p>
                                            <p><strong>REFERRAL BONUS 5%</strong></p>
                                        </div>
                                        <hr>
                                        <div class="sub-packages">
                                            <h5>WEEKLY - SILVER</h5>
                                            <p>Minimum Investment of <strong>$5,000</strong></p>
                                            <p>Maximum Investment of <strong>$19,999</strong></p>
                                            <p><strong>WEEKLY RETURNS 15%</strong></p>
                                            <p><strong>REFERRAL BONUS 7%</strong></p>
                                        </div>
                                        <hr>
                                        <div class="sub-packages">
                                            <h5>WEEKLY - GOLD</h5>
                                            <p>Minimum Investment of <strong>$20,000</strong></p>
                                            <p>Maximum Investment of <strong>$29,999</strong></p>
                                            <p><strong>WEEKLY RETURNS 20%</strong></p>
                                            <p><strong>REEFERRAL BONUS 10%</strong></p>
                                        </div>
                                        <hr>
                                        <div class="sub-packages">
                                            <h5>WEEKLY - DIAMOND</h5>
                                            <p>Minimum Investment of <strong>$30,000</strong></p>
                                            <p>Maximum Investment of <strong>$350,000</strong></p>
                                            <p><strong>WEEKLY RETURNS 25%</strong></p>
                                            <p><strong>REFERRAL BONUS 15%</strong></p>
                                        </div>
                                        <router-link to="/login" class="section-btn btn btn-default smoothScroll">Select package <i class="fa fa-angle-right"></i></router-link>
                                    </div>
                                </div>
                            </div> -->
                                <!-- <div class="row">
                                <div class="col-md-12 col-sm-12">
                                    <div class="feature-thumb">
                                        <h3 class="inv-title">Compounding Investment Packages</h3>
                                        <div class="sub-packages">
                                            <h5>MONTHLY - BRONZE</h5>
                                            <p>Minimum Investment of <strong>$2,000</strong></p>
                                            <p>Maximum Investment of <strong>$3,999</strong></p>
                                            <p><strong>11% weekly for 4 weeks</strong></p>
                                            <p><strong>REFERRAL BONUS 5%</strong></p>
                                        </div>
                                        <hr>
                                        <div class="sub-packages">
                                            <h5>MONTHLY - SILVER</h5>
                                            <p>Minimum Investment of <strong>$4,000</strong></p>
                                            <p>Maximum Investment of <strong>$7,999</strong></p>
                                            <p><strong>13% weekly for 8 weeks</strong></p>
                                            <p><strong>REFERRAL BONUS 7%</strong></p>
                                        </div>
                                        <hr>
                                        <div class="sub-packages">
                                            <h5>MONTHLY - GOLD</h5>
                                            <p>Minimum Investment of <strong>$8,000</strong></p>
                                            <p>Maximum Investment of <strong>$11,999</strong></p>
                                            <p><strong>16% weekly for 12 weeks</strong></p>
                                            <p><strong>REEFERRAL BONUS 10%</strong></p>
                                        </div>
                                        <hr>
                                        <div class="sub-packages">
                                            <h5>MONTHLY - DIAMOND</h5>
                                            <p>Minimum Investment of <strong>$12,000</strong></p>
                                            <p>Maximum Investment of <strong>$15,999</strong></p>
                                            <p><strong>19% weekly for 24 weeks</strong></p>
                                            <p><strong>REFERRAL BONUS 15%</strong></p>
                                            <P><strong>INVESTED CAPITAL IS DUE FOR WITHDRAWAL AFTER 4 WEEKS (28 days).</strong></P>
                                        </div>
                                        <router-link to="/login" class="section-btn btn btn-default smoothScroll">Select package <i class="fa fa-angle-right"></i></router-link>
                                    </div>
                                </div>
                            </div> -->
                                <div class="row">
                                    <div class="col-md-12 col-sm-12">
                                        <div class="feature-thumb">
                                            <h3 class="inv-title">Investment Plan For NFP Trade</h3>
                                            <div class="sub-packages">
                                                <h5>INVESTMENT PLAN FOR NFP TRADE</h5>
                                                <p>Minimum Investment of <strong>$3,000</strong></p>
                                                <p>Maximum Investment of <strong>$1,000,000</strong></p>
                                                <p><strong>MONTHLY RETURNS 50% PROFIT</strong></p>
                                                <P>Every first Saturday of the month is the payday for NFP.</P>
                                            </div>
                                            <hr>
                                            <div class="sub-packages">
                                                <h5>WHAT IS NFP ( NON-FARM PAYROLL)?</h5>
                                                <p>The non-farm payroll ( NFP) report is a key economic indicator for the United States. It is intended to represent the total number of paid workers in the U.S. minus farm employees, government employees, private household employees and employees of nonprofit organisations. Non-farm Payroll is among the biggest market movers in the foreign exchange market. On the first Friday of every month, the U.S bureau of labour releases numbers of new jobs in U.S - along with other labour market.</p>
                                            </div>
                                            <button @click="showForm('nfp')" class="section-btn btn btn-default smoothScroll">Select package <i class="fa fa-angle-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 col-sm-12">
                                        <button @click="kycReady = true" class="section-btn btn btn-default smoothScroll">Upload Proof of Payment<i class="fa fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section v-if="kycReady" id="kycSection">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12">
                                        <KnowYourCustomer />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import KnowYourCustomer from "@/components/KnowYourCustomer.vue";
export default {
    components: {
        KnowYourCustomer
    },
    data() {
        return {
            user: localStorage.getItem("user"),
            kycReady: false
        }
    },

    beforeMount() {
        this.$store.dispatch("subscription/getInvestmentPackages");
    },

    computed: {
        packages() {
            return this.$store.getters["subscription/getPackages"];
        },

        btcAddress() {
            return this.$store.getters["subscription/getBtcAddress"];
        }
    },

    methods: {
        showForm(pkg_name) {
            this.$swal({
                title: "Input Amount",
                input: "text",
                showConfirmButton: true,
                confirmButtonText: "Submit"
            }).then((result) => {
                if (result.value) {
                    const amount = this.$swal.getInput().value;
                    console.log("amount: ", amount);
                    const user = JSON.parse(localStorage.getItem("user"));
                    this.$store.dispatch("subscription/createDeposit", {
                            user_id: user.id,
                            // locked_deposit: +amount,
                            initial_deposit: +amount,
                            package_name: pkg_name
                        })
                        .then((data) => {
                            console.log("deposit data: ", data.data.data);
                            // this.dep_id = data.data.data;
                            localStorage.setItem("deposit_id", data.data.data);
                        })
                        .catch(err => console.log(err))
                    this.$swal({
                        title: "BTC Address",
                        text: "Make payment using BTC address, then upload proof of payment",
                        input: "text",
                        inputValue: this.btcAddress,
                        inputAttributes: {
                            disabled: true
                        },
                        showConfirmButton: true,
                        confirmButtonText: "Copy BTC address"
                    }).then((result) => {
                        if (result.value) {
                            const copyText = this.$swal.getInput();
                            copyText.select();
                            navigator.clipboard.writeText(copyText.value);
                            this.$swal({
                                position: "center",
                                icon: "success",
                                title: "Copied",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });
                }
            })
        }
    }
}
</script>
<style scoped>
@media (max-width: 1600px) {
    .col-md-12 {
        max-width: 650px;
        margin: 0 135px;
    }
}

@media (max-width: 1262px) {
    .col-md-12 {
        max-width: 650px;
        margin: 0 63px;
    }
}

@media (max-width: 892px) {
    .col-md-12 {
        max-width: 650px;
        margin: 0 auto;
    }
}

section {
    padding: 230px 0;
}

#kycSection {
    padding: 80px 0 !important;
}

.sect {
    padding: 40px 0 !important;
}

.inner-section {
    padding: 30px 0;
}

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
    background: url(../assets/landing/images/gir bitcoin hand_1.jpg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* opacity: .9; */
    /* background-color: black; */
}

.page-top-banner .overlay-bg {
    opacity: 1;
}

.page-top-banner h1 {
    color: #fff;
    font-size: 55px;
    margin-bottom: 10px;
}

.page-top-banner h4 {
    color: #fff;
    font-weight: 400;
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

h5 {
    color: gold;
    text-transform: uppercase;
}

.container .row {
    margin-bottom: 40px;
}

.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-btn {
    background: gold;
    border-radius: 10px;
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
    border-color: gold;
    color: gold;
}

.feature-thumb {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sub-packages {
    margin-bottom: 7px;
}

.inv-title {
    border: 1px solid gold;
    padding: 20px;
    border-radius: 10px;
    background-color: gold;
    color: black;
    width: 100%;
    text-transform: uppercase;
}

.middle {
    background-color: gold;
}

.middle h5,
.middle p {
    color: black;
}

.middle hr {
    border-top: 2.5px solid #000000;
}

.middle .section-btn {
    background: black;
    border-radius: 10px;
    border: 1px solid gold;
    color: gold;
    font-size: inherit;
    font-weight: normal;
    padding: 15px 30px;
    transition: 0.5s;
    margin-top: 7px;
}

.middle .section-btn:hover {
    background: gold;
    border-color: black;
    color: black;
}

/*.middle:nth-child(1) {
    padding-bottom: 167px;
}

middle:nth-child(1) .section-btn {
    margin-top: 200px;
}*/

.inv-title2 {
    border: 1px solid black;
    padding: 20px;
    border-radius: 10px;
    background-color: black;
    color: gold;
    width: 100%;
    text-transform: uppercase;
}
</style>