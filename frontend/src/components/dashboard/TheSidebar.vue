<template>
    <aside class="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
        <a href="#" class="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
            <i class="fe fe-x"><span class="sr-only"></span></i>
        </a>
        <nav class="vertnav navbar navbar-light">
            <!-- nav bar -->
            <div class="w-100 mb-4 d-flex">
                <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
                    <!-- <img class="navbar-img" src="@/assets/landing/images/Kulton CI.png"> -->
                </a>
            </div>
            <ul class="navbar-nav flex-fill w-100 mb-2">
                <li class="nav-item">
                    <router-link to="/dashboard/users" class="nav-link pl-3">
                        <i class="fe fe-user fe-16"></i>
                        <span class="ml-3 item-text">Users</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/dashboard/change_btc_address" class="nav-link pl-3">
                        <i class="fe fe-edit-3 fe-16"></i>
                        <span class="ml-3 item-text">Create BTC Address</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a @click.prevent="logout" href="#" class="nav-link pl-3">
                        <i class="fe fe-log-out fe-16"></i>
                        <span class="ml-3 item-text">Log out</span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
</template>
<script>
export default {
    methods: {
        logout() {
            this.$store.commit("user/CLEAR_TOKEN");
            window.location.href = process.env.VUE_APP_HOME_URL;
            this.$swal({
                icon: "success",
                title: "You've been logged out",
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener("mouseenter", this.$swal.stopTimer);
                    toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                }
            });
        }
    }
}
</script>
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