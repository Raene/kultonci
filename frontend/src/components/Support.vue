<template>
    <div>
        <section class="page-top-banner section-gap-full relative" data-stellar-background-ratio="0.5">
            <div class="overlay overlay-bg"></div>
            <div class="container">
                <div class="row section-gap-half">
                    <div class="col-lg-12 text-center">
                        <h1>Support</h1>
                        <h4>Contact Us For Request & Inquiries</h4>
                    </div>
                </div>
            </div>
        </section>
        <section id="testimonial">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="section-title">
                            <!-- <h2>Support</h2> -->
                            <hr>
                            <p style="font-size: 18px;">Do You have any questions? If you need advice or technical assistance, do not hesitate to contact our specialists. Customer support is available around the clock. You just need to send a letter or a request via the form below to promptly receive the necessary assistance. Remember that the more detailed the description of your problem is, the sooner it will be solved. Do not forget to indicate your login, if you are a registered user of the website.</p>
                        </div>
                        <Contact />
                        <!-- <div class="bottom-btns">
                        <router-link style="margin-left: 20px;" to="/login" class="section-btn btn btn-default smoothScroll">Contact Support</router-link>
                    </div> -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Contact from "@/components/Contact.vue";
export default {
    components: {
        Contact
    }
};
</script>
<style scoped>
section {
    padding:  120px 0;
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
}
.page-top-banner {
  background: url(../assets/landing/images/talk.jpg);
  background-size: cover;
  /* opacity: .9; */
  /* background-color: black; */
}
.page-top-banner .overlay-bg {
  opacity: .8;
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