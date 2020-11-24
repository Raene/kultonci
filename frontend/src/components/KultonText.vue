<template>
	<section id="testimonial" class="page-top-banner section-gap-full relative" data-stellar-background-ratio="0.5">
		<div class="overlay overlay-bg"></div>
		<div class="container">
                <div class="row section-gap-half">
                    <div class="col-lg-12 text-center">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
            </div>
	</section>
</template>

<style scoped>
section {
	margin: 30px 0;
}
p {
	font-size: 24px !important;
	padding-top: 40px; 
	padding-bottom: 40px; 
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
    background-color: rgba(0,0,0,0.7);

}
.page-top-banner {
  background: url(../assets/landing/images/coin_1.jpg);
  background-size: cover;
  background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  /* opacity: .9; */
  /* background-color: black; */
}
</style>