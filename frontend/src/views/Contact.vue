<template>
    <div>
        <TheHeader />
        <div class="page-header">
            <div class="other-overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="page-caption">
                            <h1 class="page-title">Contact us</h1>
                            <hr>
                            <p class="text-white text-center">Do you have any questions? If you need advice or technical assistance, do not hesitate to contact our specialists. Customer support is available around the clock. You just need to send a letter or a request via the form below to promptly receive the necessary assistance. Remember that the more detailed the description of your problem is, the sooner it will be solved. Do not forget to indicate your login, if you are a registered user of the website.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content pdb0">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                    <h2>Reach out to us and we'll respond as soon as we can.</h2>
                </div>
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 ">
                    <!-- contact-form -->
                    <form action="contactus.php" method="post">
                        <div class="contact-form">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <div class="form-group ">
                                        <label class="control-label sr-only" for="name"></label>
                                        <input id="name" type="text" name="name" placeholder="Name" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <div class="form-group">
                                        <label class="control-label sr-only" for="email"></label>
                                        <input id="email" type="email" name="email" placeholder="Email" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <div class="form-group">
                                        <label class="control-label sr-only" for="phone"></label>
                                        <input id="phone" type="text" name="phone" placeholder="Phone" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <div class="form-group">
                                        <label class="control-label sr-only" for="subject"></label>
                                        <input id="subject" type="text" name="subject" placeholder="subject" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div class="form-group">
                                        <label class="control-label sr-only" for="message"></label>
                                        <textarea class="form-control" id="message" name="message" rows="3" placeholder="Messages"></textarea>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <button type="submit" class="btn btn-default mb10">send message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <!-- /.contact-form -->
                </div>
            </div>
        </div>
        <!-- contact-info -->
        <div class=" bg-light mt80 pdt60 pdb60">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <h2>Contact <br>
                            Information</h2>
                        <p class="mb0">1210 8th St SW Petrowest Plaza Calgary, AB</p>
                        <!-- <p class="text-bold text-primary mb0">+ 180 - 123 - 4567</p> -->
                        <p class="text-bold text-primary">support@kultonci.com</p>
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
    name: "Home",
    components: {
        TheHeader,
        TheFooter
    }
};
</script>