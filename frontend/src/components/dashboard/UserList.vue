<template>
    <div class="col-md-12 my-4">
        <div class="card shadow">
            <div class="card-body">
                <h5 class="card-title">User List</h5>
                <p class="card-text">There are currently {{ userCount }} users</p>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified Status</th>
                            <th>Delete User</th>
                            <!-- <th>Date</th> -->
                            <!-- <th>Status</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                                <td>{{ user.userId }}</td>
                                <td><router-link class="link-text" :to="'/dashboard/users/' + user.userId + '/profile'">{{ user.name }}</router-link></td>
                                <td>{{ user.userEmail }}</td>
                                <td>
                                    <router-link :to="'/dashboard/users/' + user.userId"><span :class="{ badge: true, 'badge-pill': true, 'badge-danger': user.userVerified === 0, 'badge-success': user.userVerified === 1 }">{{ user.userVerified === 0? "Verify User":"Verified" }}</span></router-link>
                                </td>
                                <!-- <td>901-6206 Cras Av.</td> -->
                                <!-- <td>Apr 24, 2019</td> -->
                                <td><span @click="deleteUser(user.userId)" class="badge badge-pill badge-danger">Delete</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div> <!-- simple table -->
</template>
<script>
export default {
    computed: {
        users() {
            return this.$store.getters['user/getUsers'];
        },

        userCount() {
            return this.$store.getters['user/getUserCount'];
        }
    },

    methods: {
        deleteUser(userId) {
            this.$swal({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete user!"
            }).then((result) => {
                if (result.value) {
                    this.$store.dispatch("user/deleteUser", userId).then(() => {
                        this.$swal(
                            "Deleted!",
                            "User has been deleted.",
                            "success"
                        );
                        this.$store.commit("user/deleteUser", userId);
                    }).catch((e) => {
                        console.log(e);
                        this.$swal({
                            position: "center",
                            icon: "error",
                            title: "User delete unsuccessful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
                }
            });
        }
    },

    mounted() {
        this.$store.dispatch("user/getUsers")
            .then((err) => {
                if (err) { console.log(err) } else { console.log("load successful") }
            })
            .catch(err => console.log("err from mounted", err));
    }
};
</script>
<style scoped>
.badge {
    cursor: pointer;
}

.link-text {
    color: #ced4da;
}

.link-text:hover {
    color: #3ad29f
}
</style>