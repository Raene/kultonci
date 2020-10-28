	<template>
    <section id="testimonial">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="section-title">
                        <h2>Well, what are you waiting for?
                        </h2>
                    </div>
                    <router-link to="/login" class="section-btn btn btn-default smoothScroll">Invest Now</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container-fluid {
	background-color: #ffffff;
	/*background: rgba(255, 215, 0, 0.8);*/
	padding: 40px;
}

.section-btn {
    background-color: black;
    color: gold;
    border-color: black;
}

.section-btn:hover {
    background: gold;
    color: black;
    border-color: black;
}

.container {
	padding-left: 11%;
	padding-right: 11%;
}

hr {
	border-color: #ffffff;
}

.section-title {
	padding-bottom: 0;
}

h2 {
	text-transform: none;
	color: #000000;
}

section {
	padding-bottom: 0;
}
</style>