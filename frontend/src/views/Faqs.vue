<template>
  <div>
    <TheHeader />
    <div class="page-hero-section bg-image hero-mini">
    	<div class="overlay"></div>
      <div class="hero-caption">
        <div class="container fg-white h-100">
          <div class="row justify-content-center align-items-center text-center h-100">
            <div class="col-lg-6">
              <h3 class="mb-4 fw-medium">Frequently asked questions</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-section bg-light">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-10 py-3 no-scroll-x mx-auto">
            <div class="accordion accordion-gap" id="accordionFAQ">
              <div class="accordion-item wow fadeInRight">
                <div class="accordion-trigger" id="headingFour">
                  <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">How can I register a new account?</button>
                </div>
                <div id="collapse1" class="collapse" aria-labelledby="headingFour" data-parent="#accordionFAQ">
                  <div class="accordion-content">
                    <p>You can signup for an e-currency account and create a username and password. Follow all necessary steps to identify yourself.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item wow fadeInRight">
                <div class="accordion-trigger" id="headingFive">
                  <button class="btn" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">How can I check my account balance?</button>
                </div>
                <div id="collapse2" class="collapse show" aria-labelledby="headingFive" data-parent="#accordionFAQ">
                  <div class="accordion-content">
                    <p>You can access the account information 24 hours, seven days a week over the Internet.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item wow fadeInRight">
                <div class="accordion-trigger" id="headingSix">
                  <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">After I make a withdrawal request, when will the funds be available on my e-currency account?</button>
                </div>
                <div id="collapse3" class="collapse" aria-labelledby="headingSix" data-parent="#accordionFAQ">
                  <div class="accordion-content">
                    <p>Funds are usually available instantly or within 24 hours</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item wow fadeInRight">
                <div class="accordion-trigger" id="headingSeven">
                  <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">How can I invest with Lunar Alliance?</button>
                </div>
                <div id="collapse4" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionFAQ">
                  <div class="accordion-content">
                    <p>To make a investment you must first become a member of Lunar Alliance and have an e-currency account. Once you are signed up, you can make your first deposit. All deposits for investments must be made through the <router-link to="/investment-packages">Investment Packages</router-link> page.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item wow fadeInRight">
                <div class="accordion-trigger" id="headingEight">
                  <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">How long does it take for my deposit to be added to my account?</button>
                </div>
                <div id="collapse5" class="collapse" aria-labelledby="headingEight" data-parent="#accordionFAQ">
                  <div class="accordion-content">
                    <p>Your account will be updated as fast, as you deposit for bitcoin and litcoin it will automatically credited to your account after 3 confirmations.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item wow fadeInRight">
                <div class="accordion-trigger" id="headingNine">
                  <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">How can I withdraw funds?</button>
                </div>
                <div id="collapse6" class="collapse" aria-labelledby="headingNine" data-parent="#accordionFAQ">
                  <div class="accordion-content">
                    <p>Login to your account using your username and password and submit a withdrawal ticket. If you are eligible, your request will be processed in 24 hours.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item wow fadeInRight">
                <div class="accordion-trigger" id="headingNine">
                  <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">How can I change my email address or password?</button>
                </div>
                <div id="collapse6" class="collapse" aria-labelledby="headingNine" data-parent="#accordionFAQ">
                  <div class="accordion-content">
                    <p>Log into your lunaralliance.investments account and click on the "Account Information". You can change your e-mail address and password there.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item wow fadeInRight">
                <div class="accordion-trigger" id="headingNine">
                  <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">How can I change my password?</button>
                </div>
                <div id="collapse6" class="collapse" aria-labelledby="headingNine" data-parent="#accordionFAQ">
                  <div class="accordion-content">
                    <p>You can change your password directly from your members area by editing it in your personal profile.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item wow fadeInRight">
                <div class="accordion-trigger" id="headingNine">
                  <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">What if I can't log into my account because i forgot my password?</button>
                </div>
                <div id="collapse6" class="collapse" aria-labelledby="headingNine" data-parent="#accordionFAQ">
                  <div class="accordion-content">
                    <p>Click the "Forgot Password" link, type your username or e-mail and retreive your account information.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>
<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style scoped>
	.bg-image {
		background-image: url(../assets/img/talk_1.jpg);
	}
</style>