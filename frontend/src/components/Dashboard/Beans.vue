<template>
	<!-- sidebar menu area start -->
        <div class="sidebar-menu">
            <div class="sidebar-header">
                <div class="logo">
                    <a href="index.html"><img src="../../assets/images/lunaralliance-2.png" alt="logo"></a>
                </div>
            </div>
            <div class="main-menu">
                <div class="menu-inner">
                    <nav>
                        <ul class="metismenu" id="menu">
                            <li><router-link to="/dashboard/users"><i class="ti-user"></i> <span>users</span></router-link></li>
                            <li><router-link to="/dashboard/create-btc-address"><i class="ti-receipt"></i> <span>Create BTC Address</span></router-link></li>
                            <li><a @click.prevent="logout" href="#"><i class="ti-power-off"></i> <span>logout</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <!-- sidebar menu area end -->
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