<template>
    <section id="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="section-title">
                        <h2>Testimonies</h2>
                        <hr>
                        <div class="row">
                            <div class="col-md-6 grid-item">
                                <video width="300" height="300" controls>
                                    <source src="@/assets/videos/vid-1.mp4" type="video/mp4">
                                    Your browser does not support HTML video.
                                </video>
                            </div>
                            <div class="col-md-6 grid-item">
                                <video width="300" height="300" controls>
                                    <source src="@/assets/videos/vid-2.mp4" type="video/mp4">
                                    Your browser does not support HTML video.
                                </video>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="read-btn text-center">
                                <router-link to="/testimonies" class="section-btn btn btn-default smoothScroll">view more <i class="fa fa-angle-double-right"></i></router-link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
#testimonial {
    border: 1px solid gold;
    margin-top: 20px;
}

h2 {
    color: #fff;
}

hr {
    border-top: 3px solid gold;
}

.grid-container {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
}

.grid-item {
    border: 0px solid #e3e17b;
    color: white;
    padding: 20px;
    background: #000;
}
.read-btn {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>