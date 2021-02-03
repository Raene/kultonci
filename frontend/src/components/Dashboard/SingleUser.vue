<template>
  <div class="row">
    <div class="col-lg-8 mt-5 mx-auto">
      <div class="card">
        <div class="card-body">
          <div class="media mb-5">
            <!-- <img class="img-fluid mr-4" :src="url + kycPath" alt="image"> -->
            <LightBox ref="lightbox" :media="media" :showLightBox="showLightBox"></LightBox>
            <div class="media-body">
              <h4 class="mb-3">{{ user.name }}</h4> {{ user.userEmail }}
            </div>
          </div>
          <div class="media d-flex justify-content-between">
            <button @click="verifyUser" :disabled="user.userVerified===1" class="btn btn-lg btn-outline-success">{{ user.userVerified === 0?"Verify":"User Verified"}}</button>
            <button @click="openLightBox" class="btn btn-lg btn-outline-success">View Image</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LightBox from 'vue-image-lightbox'
export default {
  components: {
    LightBox
  },
  data() {
    return {
      userId: this.$route.params.id,
      kycPath: null,
      displayImage: false,
      url: process.env.VUE_APP_IMAGE_URL,
      media: [],
      showLightBox: false
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser'];
    },

    users() {
      return this.$store.getters['user/getUsers'];
    }
  },

  beforeMount() {
    this.$store.dispatch("user/getUser", this.userId)
      .then((data) => {
        console.log("userdata: ", data.data.data[0]);
        this.$store.commit("user/SET_USER", data.data.data[0]);
        const fullUserPath = data.data.data[0].kycPath;
        this.kycPath = fullUserPath;
        this.media.push({
          thumb: this.url + this.kycPath,
          src: this.url + this.kycPath
        })
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    verifyUser() {
      this.$store.dispatch("user/verifyUser", { id: this.user.userId })
        .then((err) => {
          if (err) {
            console.log(err);
            this.$swal({
              position: "center",
              icon: "error",
              title: "User Not verified",
              showConfirmButton: false,
              timer: 1500
            });
          } else {
            this.$swal({
              position: "center",
              icon: "success",
              title: "User verified",
              showConfirmButton: false,
              timer: 1500
            });
            this.user.userVerified = 1;
          }
        })
    },

    openLightBox() {
      this.$refs.lightbox.showImage(0);
    }
  }
}
</script>