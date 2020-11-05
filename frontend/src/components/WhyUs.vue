<template>
    <section id="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="section-title">
                        <h2>Why You Should Choose Us?</h2>
                        <hr>
                        <AboutCard />
                        <!-- <figure>
                            <span><i class="fa fa-bar-chart-o"></i></span>
                            <figcaption>
                                <h3>Secure and Reliable</h3>
                                <p>Five years of experience in digital asset financial services.</p>
                            </figcaption>
                        </figure>
                        <figure>
                            <span><i class="fa fa-certificate"></i></span>
                            <figcaption>
                                <h3>Global Ecological Layout</h3>
                                <p>Local trading service centers in many countries around the world.</p>
                            </figcaption>
                        </figure>
                        <figure>
                            <span><i class="fa fa-users"></i></span>
                            <figcaption>
                                <h3>Users First</h3>
                                <p>Develop compensation first system.</p>
                            </figcaption>
                        </figure> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AboutCard from "@/components/AboutCard.vue";
export default {
    components: {
        AboutCard
    }
}
</script>

<style scoped>
#testimonial {
    background: gold;
}

h2 {
    color: black;
}

hr {
    border-top: 3px solid black;
}
</style>