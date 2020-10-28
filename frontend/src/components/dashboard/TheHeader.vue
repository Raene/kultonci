<template>
      <nav class="topnav navbar navbar-light">
      	<a href="https://kultonci.com" class="navbar-brand"><img class="navbar-img" src="@/assets/landing/images/Kulton CI.png"></a>
        <button type="button" class="navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar">
          <i class="fe fe-menu navbar-toggler-icon"></i>
        </button>
        <!-- <form class="form-inline mr-auto searchform text-muted">
          <input class="form-control mr-sm-2 bg-transparent border-0 pl-4 text-muted" type="search" placeholder="Type something..." aria-label="Search">
        </form> -->
      </nav>
</template>

<style scoped>
.navbar-img {
    max-width: 87px;
    margin-top: -25px;
}

@media (max-width: 768px) {
    .navbar-img {
        max-width: 87px;
        margin-top: -21px;
    }
}

@media (max-width: 480px) {
    .navbar-img {
        max-width: 87px;
        margin-top: -33px;
    }
}
</style>