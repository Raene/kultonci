<template>
    <div>
    	<TheHeader />
        <!-- page-header -->
        <div class="post-pageheader">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="post-pagecaption">
                            <h1 class="text-white">REVIEWS & FEEDBACK</h1>
                            <div class="meta text-white">
                                <span class="meta-comments">Trading Experiences Of Our New And Returning Investors </span>
                            </div>
                            <hr>
                            <p class="text-white">We invest a huge amount of time and effort in staying up to date on trends in the financial industry. We have been advising clients on their investment decisions since 2015, during which time we established our honest and successful reputation. Most of our clients come from referrals and repeat investors. Here is a sampling of what they have to say.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.page-header-->
        <div class="content content-testimony">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12 mx-auto">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="post-holder">
                                    <!-- post block -->
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="author-block">
                                                <!-- Post author -->
                                                <!-- <div class="author-img">
                                                <a href="#"><img src="images/author.jpg" alt=""></a>
                                            </div> -->
                                                <div class="author-content">
                                                    <div class="author-header">
                                                        <h5 class="author-title">Diana Bateman </h5> <span class="author-meta ">(Business Owner)</span>
                                                    </div>
                                                    <p class="author-text">"Kulton CI is the REAL DEAL. It is honest, cares about it’s clients, and offers up well vetted Investment contracts. They stay on top of our “investments” and so far have always, each deal has ended with a positive outcome for me. I highly recommend this company so you can count on a positive return on your hard earned money."
                                                    </p>
                                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> </div> -->
                                                </div>
                                            </div>
                                            <!-- /.post author -->
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="author-block">
                                                <!-- Post author -->
                                                <!-- <div class="author-img">
                                                <a href="#"><img src="images/author.jpg" alt=""></a>
                                            </div> -->
                                                <div class="author-content">
                                                    <div class="author-header">
                                                        <h5 class="author-title">Mark Robinson </h5> <span class="author-meta ">(Business Owner)</span>
                                                    </div>
                                                    <p class="author-text">"Working with Kulton CI has been like working with an extension of our family business. Their strong business ethics and integrity is top notch and has made our working relationship very pleasurable and efficient."
                                                    </p>
                                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> </div> -->
                                                </div>
                                            </div>
                                            <!-- /.post author -->
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="author-block">
                                                <!-- Post author -->
                                                <!-- <div class="author-img">
                                                <a href="#"><img src="images/author.jpg" alt=""></a>
                                            </div> -->
                                                <div class="author-content">
                                                    <div class="author-header">
                                                        <h5 class="author-title">Chad Shockley </h5> <span class="author-meta ">(Global Investor)</span>
                                                    </div>
                                                    <p class="author-text">"As an overseas investor, I needed assurance in a company through every stage of the process, Kulton CI have provided just that. Their professionalism and commitment meant that my money is in safe hands."
                                                    </p>
                                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> </div> -->
                                                </div>
                                            </div>
                                            <!-- /.post author -->
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="author-block">
                                                <!-- Post author -->
                                                <!-- <div class="author-img">
                                                <a href="#"><img src="images/author.jpg" alt=""></a>
                                            </div> -->
                                                <div class="author-content">
                                                    <div class="author-header">
                                                        <h5 class="author-title">George Gabrielson </h5> <span class="author-meta ">(Global Investor)</span>
                                                    </div>
                                                    <p class="author-text">I have a dozen different investments throughout the world and Kulton CI rank among the absolute best. Wesley and his team are very knowledgeable in their field, professional and only look for the opportunities that promise good returns. I am in numerous investments with Kulton CI and can say enough good.
                                                    </p>
                                                    <!-- <a href="#" class="btn btn-default btn-sm">View All Post</a> </div> -->
                                                </div>
                                            </div>
                                            <!-- /.post author -->
                                        </div>
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
    name: "Home",
    components: {
        TheHeader,
        TheFooter
    }
};
</script>