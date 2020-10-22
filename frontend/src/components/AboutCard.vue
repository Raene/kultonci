<template>
    <div class="container-fluid">
        <div class="grid-container">
            <div class="grid-item">
                <i class="fa fa-globe"></i>
                <h4>FINANCIAL FREEDOM</h4>
                <p>Our customers have since being part of us, became financially free with a steady income source.</p>
            </div>
            <div class="grid-item">
                <i class="fa fa-users"></i>
                <h4>MOUTHWATERING ROI</h4>
                <p>ROI offered by KULTON CI can't be matched by any bank while still enjoying full coverage of insurance.</p>
            </div>
            <div class="grid-item">
                <i class="fa fa-shield"></i>
                <h4>100% SECURED</h4>
                <p>We are 100% hack-proof! We keep all the cryptocurrency in hardware accessible offline wallets.</p>
            </div>
            <div class="grid-item">
                <i class="fa fa-user"></i>
                <h4>POWERFUL DASHBOARD</h4>
                <p>Manage multiple investments using our powerful cutting-edge dashboard built on modern technology.</p>
            </div>
            <div class="grid-item">
                <i class="fa fa-shield"></i>
                <h4>PAYMENT OPTIONS</h4>
                <p>Our payment system supports local banks, Deposits and withdrawals are fully automated.</p>
            </div>
            <div class="grid-item">
                <i class="fa fa-users"></i>
                <h4>24/7 CUSTOMER SUPPORT</h4>
                <p>It is our mission to offer top notch services to all our traders, and to provide that service on the highest level possible.</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-fluid {
    background-color: transparent;
    padding: 20px;
    margin-top: 40px; 
}

i {
    font-size: 2em;
    color: gold
}

h4 {
    color: gold;
}

.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
}

.grid-item {
    border: 0px solid #e3e17b;
    text-align: center;
    color: white;
    padding: 20px;
    background: #000000;
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
}

/*.grid-item:nth-child(1) {
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

.grid-item:nth-child(5) {
    grid-area: fifth;
}

.grid-item:nth-child(6) {
    grid-area: sixth;
}*/

/*@media (max-width: 769px) {
    .grid-item:nth-child(1) {
        grid-column: 1 /  2;
    }
    .grid-item:nth-child(2) {
        grid-column: 1 /  2;
    }
    .grid-item:nth-child(3) {
        grid-row: 2;
    }
      .grid-item:nth-child(4) {
        grid-row: 2;
    }
      .grid-item:nth-child(5) {
        grid-row: 3;
    }
      .grid-item:nth-child(6) {
        grid-row: 3;
    }
}*/

@media (max-width: 627px) {
    .grid-item {
        grid-column: 1 / span 3;
    }

    /*.grid-item:nth-child(1) {
        grid-column: 1 / span 3;
    }
    .grid-item:nth-child(3) {
        grid-column: 1 / span 3;
    }
    .grid-item:nth-child(2) {
        grid-column: 1 / span 3;
    }*/
}
</style>