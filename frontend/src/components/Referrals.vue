<template>
  <div>
    <div v-if="referrals.length > 0" class="col-lg-8 py-3">
      <h3 class="mb-5">Referrals</h3>
      <div class="table-responsive ">
        <table class="table table-striped ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date Joined</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(referral, index) in referrals" :key="index">
              <td>{{ referral.name }}</td>
              <td>{{ referral.email }}</td>
              <td>{{ referral.dateJoined }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-12 py-3">
      <h3 class="mb20 msg">No Referrals</h3>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    referrals() {
      let referralData = [];
      if (this.$store.getters["user/getReferrals"].length > 0) {
        referralData = this.$store.getters["user/getReferrals"];
      }
      return referralData;
    },

    profile() {
    	return this.$store.getters["user/getProfile"];
    }
  },

  mounted() {
    this.$store.dispatch("user/getReferrals",
      this.profile.id);
  }
}
</script>

<style scoped>
.msg {
    font-size: 4rem;
}
</style>
