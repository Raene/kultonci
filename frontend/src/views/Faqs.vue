<template>
    <div>
    	<TheHeader />
        <!-- page-header -->
        <div class="page-header faq-header">
            <div class="other-overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                        <div class="page-caption">
                            <!-- <h1 class="page-title mb30">FAQs</h1>
                        <div class="widget-search">
                            <form role="search">
                                <input class="form-control" placeholder="Find Here" type="text">
                                <button class="" type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.page-header-->
        <div class="content">
            <div class="container">
                <div class="row ">
                    <!--  section-title -->
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div class="section-title text-center">
                            <h2>FAQs</h2>
                        </div>
                    </div>
                    <!--  /.section-title -->
                </div>
                <div class="row">
                    <div class="offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12">
                        <!-- faq-section -->
                        <div class="mb30">
                            <h2 class="mb40">Account Management</h2>
                            <div class="mb30">
                                <h4>How can I register a new account?</h4>
                                <p>You can signup for an e-currency account and create a username and password. Follow all necessary steps to identify yourself.</p>
                            </div>
                            <div class="mb30">
                                <h4>How can I check my account balance?</h4>
                                <p>You can access the account information 24 hours, seven days a week over the Internet.</p>
                            </div>
                            <div class="mb30">
                                <h4>After I make a withdrawal request, when will the funds be available on my e-currency account?</h4>
                                <p>Funds are usually available instantly or within 24 hours.</p>
                            </div>
                        </div>
                        <!-- /.faq-section -->
                        <hr>
                        <!-- faq-section -->
                        <div class="mb30">
                            <h2 class="mb40">Investment</h2>
                            <div class="mb30">
                                <h4>How can I invest with Kulton CI?</h4>
                                <p>To make a investment you must first become a member of Kulton CI and have an e-currency account. Once you are signed up, you can make your first deposit. All deposits for investments must be made through the <a href="investment.html">Investment Packages</a> page.</p>
                            </div>
                            <div class="mb30">
                                <h4>How long does it take for my deposit to be added to my account?</h4>
                                <p>Your account will be updated as fast, as you deposit for bitcoin and litcoin it will automatically credited to your account after 3 confirmations.</p>
                            </div>
                            <div class="mb30">
                                <h4>How can I withdraw funds?</h4>
                                <p>Login to your account using your username and password and submit a withdrawal ticket. If you are eligible, your request will be processed in 24 hours.</p>
                            </div>
                        </div>
                        <!-- /.faq-section -->
                        <hr>
                        <!-- faq-section -->
                        <!-- /.faq-section -->
                        <!-- faq-section -->
                        <div class="mb30">
                            <h2 class="mb40">Security</h2>
                            <div class="mb30">
                                <h4>How can I change my email address or password?</h4>
                                <p>Log into your kultonci.com account and click on the "Account Information". You can change your e-mail address and password there.</p>
                            </div>
                            <div class="mb30">
                                <h4>How can I change my password?</h4>
                                <p>You can change your password directly from your members area by editing it in your personal profile.</p>
                            </div>
                            <div class="mb30">
                                <h4>What if I can't log into my account because i forgot my password?</h4>
                                <p>Click the "Forgot Password" link, type your username or e-mail and retreive your account information.</p>
                            </div>
                        </div>
                        <!-- /.faq-section -->
                    </div>
                </div>
            </div>
        </div>
        <!-- /.faq -->
        <TheFooter />
    </div>
</template>
<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
    name: "Home",
    components: {
        TheHeader,
        TheFooter
    }
};
</script>