<template>
  <div class="bg-primary pdt30 pdb30">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-lg-11 mx-auto">
            <h2 v-if="path.includes('signup')" class="form-title text-center">Verify your identity</h2>
            <h2 v-else class="form-title text-center">Upload proof of payment</h2>
            <form @submit.prevent="runKyc" class="register-form">
              <div class="form-group">
                <p v-if="path === '/signup'" class="text-center">Upload your passport image, national ID, or Driver's Licence</p>
                <!-- <input id="kyc-input" type="file" name="kyc"> -->
                <!-- <label for="fileInput" class="form-control-label">Upload your passport image, national ID, or Driver's Licence</label> -->
                <br />
                <label class="form-submit btn btn-default btn-lg mb10">
                  <input @change="preview" type="file" id="file-Input" />
                  Insert Image
                </label>
                <div class="imagepreview" id="image-Preview">
                  <img src="" alt="Image Preview" class="imagepreview__image">
                  <span class="imagepreview__default-text">Image Preview</span>
                </div>
                <!-- <span class="help-block">Please enter your password</span> -->
                <!-- <handy-uploader data-app :documentAttachment.sync="handyAttachments" :fileUploaderType="'simple'" :maxFileSize="10240" :imageCompressor="true" :imageCompressLevel="0.8" :maxFileCount="10" :badgeCounter="false" :thumb="true" :changeFileName="true" :addFileDescription="true" :addFileTag="true" :tags="['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']" :btnColor="'#6dabe4'" :cardType="'raised'"></handy-uploader> -->
              </div>
              <div v-if="path === '/signup'" class="form-group form-button">
                <button type="submit" class="form-submit form-submit btn btn-default btn-lg btn-block mb10">Upload</button>
                <!-- <input type="submit" name="signup" id="signup" class="form-submit " value="Signup" /> -->
              </div>
              <div v-else class="form-group form-button">
                <button type="submit" class="form-submit btn btn-default btn-lg btn-block mb10">Upload</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- <Preloader v-if="isLoggingIn" /> -->
  </div>
</template>
<script>
// import Preloader from "@/components/Preloader.vue";
// import handyUploader from 'handy-uploader/src/components/handyUploader';
export default {
  components: {
    // handyUploader
    // Preloader
  },

  data() {
    return {
      handyAttachments: [],
      // isLoggingIn: false,
      path: this.$route.path,
      invId: null

    };
  },

  // mounted() {
  //     document.querySelector(".v-btn").style.color = 'white';
  //     document.querySelector(".v-btn__content").style.color = 'white';
  // },

  computed: {
    initialSignupDetails() {
      return this.$store.getters["user/getInitialSignupDetails"];
    }
  },
  // updated() {
  //     console.log("handyAttachments: ", this.handyAttachments);
  // },

  // beforeMount() {
  //     this.$store.dispatch("subscription/getUserInvestment", localStorage.getItem("deposit_id"));
  // },

  methods: {
    runKyc() {
      if (this.path.includes("signup")) {
        this.signup();
      } else {
        this.uploadProofOfPayment();
      }
    },
    signup() {
      const kyc = document.querySelector("#file-Input");
      console.log("kyc: ", kyc);
      const fd = new FormData();
      console.log("initial: ", this.initialSignupDetails);
      fd.append("name", this.initialSignupDetails.user.name);
      fd.append("email", this.initialSignupDetails.user.email);
      fd.append("password", this.initialSignupDetails.user.password);
      fd.append("repeat_password", this.initialSignupDetails.user.repeat_password);
      fd.append("dob", this.initialSignupDetails.user.dob);
      fd.append("phone", this.initialSignupDetails.user.phone);
      fd.append("address", this.initialSignupDetails.address.address);
      fd.append("city", this.initialSignupDetails.address.city);
      fd.append("state", this.initialSignupDetails.address.state);
      fd.append("country", this.initialSignupDetails.address.country);
      fd.append("zip", this.initialSignupDetails.address.zip);
      fd.append("answer", this.initialSignupDetails.questions_user.answer);
      fd.append("security_questions_id", this.initialSignupDetails.questions_user.security_questions_id);
      fd.append("referral_code", this.initialSignupDetails.referral_code ? this.initialSignupDetails.referral_code : "");
      fd.append("kyc", kyc.files[0]);
      // this.initialSignupDetails.user.kyc = kyc.files[0];
      // console.log("kyc: ", this.initialSignupDetails);
      // this.initialSignupDetails.user.referral_code = kyc.files[0];
      this.$store.dispatch("user/signup", fd)
        .then((err) => {
          if (err) {
            // this.isLoggingIn = false;
            console.log(err);
            this.$swal({
              icon: "error",
              title: "Signup Unsuccessful",
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
          } else {
            // this.isLoggingIn = false;
            this.$swal({
              position: "center",
              icon: "success",
              title: "Signup Successful",
              showConfirmButton: false,
              timer: 1500
            });
            this.$router.replace({ path: "/login" });
          }
        });
      // .catch(err => console.log(err));
    },

    uploadProofOfPayment() {
      const kyc = document.querySelector("#file-Input");
      console.log("beans: ", kyc);
      const fd = new FormData();
      fd.append("paymentImg", kyc.files[0]);
      fd.append("id", localStorage.getItem("deposit_id"));
      this.$store.dispatch("subscription/uploadProofOfPaymnent", fd)
        .then((err) => {
          if (err) {
            console.log(err);
            this.$swal({
              icon: "error",
              title: "Upload Unsuccessful",
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
          } else {
            this.$swal({
              position: "center",
              icon: "success",
              title: "Payment proof upload successful. Awaiting approval.",
              showConfirmButton: false,
              timer: 1500
            });
            this.$router.push({ path: "/investment-packages" });
            this.$emit("closeKyc");
          }
        });
    },

    preview() {
      const imgFile = document.getElementById("file-Input");
      const previewContainer = document.getElementById("image-Preview");
      const previewImage = previewContainer.querySelector(".imagepreview__image");
      const previewDefaultText = previewContainer.querySelector(".imagepreview__default-text");
      const file = imgFile.files[0];
      const vm = this;
      if (file) {
        const reader = new FileReader();
        previewDefaultText.style.display = "none";
        previewImage.style.display = "block";
        reader.addEventListener("load", function() {
          previewImage.setAttribute("src", this.result);
          vm.$store.commit("setImgUrl", this.result);
          localStorage.setItem("imageUrl", this.result);
          console.log("result: ", this.result);
        });
        reader.readAsDataURL(file);
      } else {
        previewDefaultText.style.display = null;
        previewImage.style.display = null;
        previewImage.setAttribute("src", "");
      }
    }
  }
};
</script>
<style scoped>
.pdb30 {
    padding-bottom: 120px !important;
}
#kyc {
  font-family: 'Nunito', sans-serif;
}

input[type="file"] {
  display: none;
}

.form-submit {
  position: relative;
  font-weight: 300;
  font-size: 15px;
}

.custom-file-upload {
  border: 1px solid #ccc;
  display: block;
  padding: 6px 12px;
  cursor: pointer;
  position: relative;
  margin-top: 10px;
}

.form-button .form-submit {
  width: 300px;
}

@media (min-width: 960px) {
  .col-md-4 {
    max-width: 100% !important;
  }
}

.container {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  /*background: #f8f8f8;*/
}

.form-group {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  /*background: #f8f8f8;*/
  /*border: 1px dashed gold;*/
}

.text-center {
  text-align: center;
  color: #ffffff;
  font-size: 20px;
}

p.text-center {
    color: #000000;
}

.imagepreview {
  width: 300px;
  min-height: 100px;
  border: 2px solid #dddddd;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #eeeeee;
}

.imagepreview__image {
  display: none;
  width: 100%;
}
</style>