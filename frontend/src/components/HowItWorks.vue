<template>
    <section id="testimonial">
        <div class="section-title show-on-scroll">
            <h2>How it works</h2>
            <em>Four easy steps to start earning</em>
            <hr>
        </div>
        <div class="container">
            <div class="grid-container">
                <div class="grid-item">
                    <span><i class="fa fa-user-plus"></i></span>
                    <h4>sign up</h4>
                    <p>Register an account and fill in necessary information.</p>
                </div>
                <div class="grid-item">
                    <span><i class="fa fa-calendar"></i></span>
                    <h4>fund your wallet</h4>
                    <p>Fund your wallet using your local bank card.</p>
                </div>
                <div class="grid-item">
                    <span><i class="fa fa-tasks"></i></span>
                    <h4>invest</h4>
                    <p>Invest Preferred amount from your funded wallet.</p>
                </div>
                <div class="grid-item">
                    <span><i class="fa fa-shield"></i></span>
                    <h4>withdraw</h4>
                    <p>Withdraw accrued ROIs to your bank account.</p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.grid-container {
    display: grid;
    grid-template-areas: "first second third fourth";
    grid-column-gap: 20px;
}

.grid-item {
    border: 1px solid #e3e17b;
    text-align: center;
    padding: 28px;
}

.grid-item:nth-child(1) {
    grid-area: first;
}

.grid-item:nth-child(2) {
    grid-area: second;
}

.grid-item:nth-child(3) {
    grid-area: third;
}

.grid-item:nth-child(4) {
    grid-area: fourth;
}

/*i {
    font-size: 100%;
}*/

h4 {
    text-transform: uppercase;
}

span {
    background: #e3e17b;
    border-radius: 50px;
    color: #000000;
    font-size: 30px;
    font-weight: bold;
    display: inline-block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-bottom: 20px;
}

@media (max-width: 768px) {
    .grid-container {
        /*display: grid;*/
        grid-template-areas: 
        	"first second" 
        	"third fourth";
        grid-row-gap: 20px;
    }
}

@media (max-width: 538px) {
    .grid-container {
        /*display: grid;*/
        grid-template-areas: 
        	"first" "second" 
        	"third" "fourth";
        /*grid-row-gap: 20px;*/
        grid-column-gap: 0;
    }
}
</style>