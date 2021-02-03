<template>
	<!-- Process Step -->
    <div class="space-medium">
        <div class="container">
            <div class="row ">
                <div class="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-12 col-sm-12 col-12 text-center">
                    <div class="section-title">
                        <h2>Simple Steps to Get Started</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12">
                    <div class="row desktop">
                        <!-- Step-1 -->
                        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                            <img src="../assets/images/form.png" alt="">
                        </div>
                        <div class="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="pdt120">
                                <h3>SIGN UP</h3>
                                <p>Register an account and fill in necessary information.</p>
                            </div>
                        </div>
                        <!-- /.Step-1 -->
                        <!-- Step-2 -->
                        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                            <div class="pdt120">
                                <h3>INVEST</h3>
                            <p>Fund your wallet using your local bank and start investing.</p>
                            </div>
                        </div>
                        <!-- /.Step-2 -->
                        <!-- Step-3 -->
                        <div class="offset-xl-2 col-xl-5 offset-lg-2 col-lg-5 col-md-6 col-sm-12 col-12">
                            <img src="../assets/images/connect.png" alt="">
                        </div>
                        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                            <img src="../assets/images/bitcoin.png" alt="">
                        </div>
                        <div class="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="pdt120">
                                <h3>WITHDRAW</h3>
                                <p>Withdraw accrued ROIs to your bank account. </p>
                            </div>
                        </div>
                        <!-- /.Step-2 -->
                    </div>

                    <!-- mobile -->
                    <div class="row laptop">
                        <!-- Step-1 -->
                        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                            <img src="../assets/images/form.png" alt="">
                        </div>
                        <div class="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="pdt120">
                                <h3>SIGN UP</h3>
                                <p>Register an account and fill in necessary information.</p>
                            </div>
                        </div>
                        <!-- /.Step-1 -->
                        <!-- Step-2 -->
                        <div class="offset-xl-2 col-xl-5 offset-lg-2 col-lg-5 col-md-6 col-sm-12 col-12">
                            <img src="../assets/images/connect.png" alt="">
                        </div>
                        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                            <div class="pdt120">
                                <h3>INVEST</h3>
                            <p>Fund your wallet using your local bank and start investing.</p>
                            </div>
                        </div>
                        <!-- /.Step-2 -->
                        <!-- Step-3 -->
                        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                            <img src="../assets/images/bitcoin.png" alt="">
                        </div>
                        <div class="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="pdt120">
                                <h3>WITHDRAW</h3>
                                <p>Withdraw accrued ROIs to your bank account. </p>
                            </div>
                        </div>
                        <!-- /.Step-2 -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/. Process Step -->
</template>

<style scoped>
.space-medium {
	background-color: #ffffff;
}

h2, h3 {
	color: #161f23;
}
p {
	color: #6d767a
}

.laptop {
    display: none;
}

@media (max-width: 500px) {
    .laptop {
        display: block;
    }

    .desktop {
        display: none;
    }

    .pdt120 {
        padding-top: 58px;
        padding-bottom: 100px;
    }

}
</style>