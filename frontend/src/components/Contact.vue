<template>
    <!-- CONTACT -->
    <section id="contact" class="inner-section">
        <div class="container">
            <div class="row">
                <div style="max-width: 700px; margin: 0 auto;" class="col-md-12 col-sm-12">
                    <form id="contact-form" role="form" action="" method="post">
                        <div class="section-title">
                            <h2>Contact us <small>We love conversations. Let us talk!</small></h2>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <input type="text" class="form-control" placeholder="Enter full name" name="name" required="">
                            <input type="email" class="form-control" placeholder="Enter email address" name="email" required="">
                            <textarea class="form-control" rows="6" placeholder="Tell us about your message" name="message" required=""></textarea>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <input type="submit" class="form-control" name="send message" value="Send Message">
                        </div>
                    </form>
                </div>
                <!-- <div class="col-md-6 col-sm-12">
                    <div class="contact-image">
                        <img src="images/contact-image.jpg" class="img-responsive" alt="Smiling Two Girls">
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<style scoped>
.inner-section {
    padding: 0 0;
}

</style>