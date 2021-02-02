<template>
  <div class="row">
    <!-- table info start -->
    <div class="col-lg-9 mt-5 mx-auto">
      <div class="card">
        <div class="card-body">
          <h4 class="header-title">Users</h4>
          <div class="single-table">
            <div class="table-responsive">
              <table class="table text-center">
                <thead class="text-uppercase bg-info">
                  <tr class="text-white">
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">email</th>
                    <th scope="col">verified status</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <th scope="row">{{ user.userId }}</th>
                    <td>
                      <router-link class="link-text" :to="'/dashboard/users/' + user.userId + '/profile'">{{ user.name }}</router-link>
                    </td>
                    <td>{{ user.userEmail }}</td>
                    <td>
                      <router-link :to="'/dashboard/users/' + user.userId"><span :class="{ badge: true, 'badge-pill': true, 'badge-danger': user.userVerified === 0, 'badge-success': user.userVerified === 1 }">{{ user.userVerified === 0? "Verify User":"Verified" }}</span></router-link>
                    </td>
                    <td><i @click="deleteUser(user.userId)" class="ti-trash"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- table info end -->
  </div>
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
          this.$store.dispatch("user/deleteUser", userId).then((data) => {
            console.log("delete data: ", data);
            this.$swal(
              "Deleted!",
              "User has been deleted.",
              "success"
            );
            this.$store.commit("user/DELETE_USER", userId);
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
  color: white;
  padding: 10px;
  text-transform: uppercase;
  font-weight: normal;
  cursor: pointer;
}

.badge-complete {
  background: #00c292;
}

.badge-pending {
  background: #fb9678;
}
</style>