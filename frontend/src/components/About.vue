<template>
  <div>
    <section
      id="testimonial"
      class="sect page-top-banner section-gap-full relative"
      data-stellar-background-ratio="0.5"
    >
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="section-title">
              <h2 class="about-us show-on-scroll">
                About Us
                <hr />
              </h2>
            </div>
            <div class="container">
              <p>Kulton CI, founded in 2015, CI is a trading platform managed by a private trader, Mr. Wesley Hargraves, who trades mostly Cryptocurrency. Mr. Hargraves has been trading for more than 6 years now and has a vast knowledge of the Crypto Online Market and Cryptocurrency Trading Investment. Kulton CI is being known for it's transparency and accountability of managing finance in the world of Cryptocurrency Trading Investment and Account Management. We had a breakthrough in the market during the middle of 2016.</p>
              <p>
                Kulton CI is a global market place for people to trade Currencies, Commodities, Indices and CFD Stock online in a simple and transparent way. Our goal is to make trading accessible to all investors regardless of age, location, investment, technical knowledge or experience. Investing in Kulton CI involves the
                <strong>Daily Packages</strong> where profits are paid directly to our client's wallet every day,
                <strong>Weekly Packages</strong> where profits are paid directly to our client's wallet every week, the
                <strong>Monthly Compounding Investments</strong> and the
                <strong>NFP</strong>.
              </p>
              <p>The company is successful thanks to the big amount of profitable trades and some of the best specialists. We are existing on the market since 2015 and still give our investors significant profits till now. There are no unrealistic promises presented here, just steady and consistent results with the best possible and achievable returns at minimun risk.</p>
              <p>We believe every client is different and requires a unique approach. Our mission is to help people navigate through changing market conditions and several kinds of investment opportunities in order to find a strategic plan that best fits their trading goals.</p>
            </div>
            <!-- <div v-if="!routeName" class="read-btn show-on-scroll">
                        <router-link to="/about-us" class="section-btn btn btn-default smoothScroll">read more <i class="fa fa-angle-double-right"></i></router-link>
            </div>-->
          </div>
        </div>
      </div>
    </section>
    <section id="section-background">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="contact-image">
              <img
                src="@/assets/landing/images/coin_1.jpg"
                class="img-responsive img-thumbnail"
                alt="Smiling Two Girls"
              />
            </div>
          </div>
          <div class="col-md-6 col-sm-12 text-col">
            <div class="section-title">
              <h2 class="about-us show-on-scroll">
                Our Mission
                <hr />
              </h2>
            </div>
            <p>It is our mission to offer top notch services to all our traders, and to provide that service on the highest level possible. We offer strategic ideas to our clients, we also provide the best possible support for realizing individual investment ideas.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12 text-col">
            <div class="section-title">
              <h2 class="about-us show-on-scroll">
                Our Vision
                <hr />
              </h2>
            </div>
            <p>Whether it's making sure you get the right background information so you can make smart decisions, or assisting with diversifying your portfolio, we look forward to helping you on your path towards a secure financial future. Our Vision, in line with Our Mission, is to carefully analyse each individual's financial situation and work with them in order to optimise results within their parameters.</p>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="contact-image">
              <img
                src="@/assets/landing/images/deal_1.jpg"
                class="img-responsive img-thumbnail"
                alt="Smiling Two Girls"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="contact-image">
              <img
                src="@/assets/landing/images/man silver bitcoin_1.jpg"
                class="img-responsive img-thumbnail"
                alt="Smiling Two Girls"
              />
            </div>
          </div>
          <div class="col-md-6 col-sm-12 text-col">
            <div class="section-title">
              <h2 class="about-us show-on-scroll">
                Our Goals
                <hr />
              </h2>
            </div>
            <p>Kulton CI was founded with the client in mind, and its goal is to produce extra revenue for people to earn with confidence. Our core values of integrity and innovation are a keystone in us, as we always put the customer in the first place, and all efforts are centered on making him a successful and profitable investor.</p>
            <p>Whether it is our customer service, variety of instruments and platform or any of our other services – we work hard to insure our clients have a pleasant earning experience with us.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  computed: {
    routeName() {
      if (this.$route.name !== "About") {
        return false;
      }
      return true;
    }
  }
};
</script>
<style scoped>
#section-background {
  background: #ffffff;
}

.contact-image img {
  object-fit: cover;
  float: left;
  /*max-width: 80%;*/
  /*height: 50em;*/
}

.contact-image {
  max-width: 80%;
  margin: 0 auto;
}

.text-col {
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  background: url(../assets/landing/images/meeting_1.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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

#section-background h2, #section-background p {
  color: #000000;
}

h2 {
  margin-bottom: 20px;
}

h2 small {
  font-size: 82%;
  font-weight: 600;
}

p {
  font-size: 18px;
  /*font-weight: 600;*/
  text-align: center;
  /*color: #000000;*/
}

.section-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 0;
}

.section-btn {
  background-color: #000000 !important;
  border-radius: 50px;
  border: none;
  transform: scale(0);
  color: #e3e17b !important;
  font-size: inherit;
  font-weight: normal;
  padding: 15px 30px;
  transition: 0.5s;
  width: 250px;
  opacity: 0;
  transition: transform 0.8s 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0.5s 0.4s ease-out;
}

.is-visible .section-btn {
  transform: scale(1);
  opacity: 1;
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

/*.about-us {
    transform: translateY(-4rem);
    opacity: 0;
    transition: transform 1s 0.4s ease-out, opacity 0.5s 0.4s ease-out;
    will-change: transform, opacity;
}

.about-us.is-visible {
    transform: translateY(0);
    opacity: 1;   
}

.about-text {
    transform: translateY(4rem);
    opacity: 0;
    transition: transform 1s 0.4s ease-out, opacity 0.5s 0.4s ease-out;
    will-change: transform, opacity;
}

.about-text.is-visible {
    transform: translateY(0);
    opacity: 1;   
}*/
</style>