<template>
  <div class="page-section no-scroll wow fadeInUp">
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-lg-10">
          <!-- <div class="row justify-content-center"> -->
          <h2 v-if="path.includes('signup')" class="form-title text-center">Verify your identity</h2>
          <h2 style="color: #000000 !important;" v-else class="form-title text-center">Upload proof of payment</h2>
          <form @submit.prevent="runKyc" class="register-form">
            <div class="form-group">
              <p v-if="path === '/signup'" class="text-center">Upload your passport image, national ID, or Driver's Licence</p>
              <!-- <input id="kyc-input" type="file" name="kyc"> -->
              <!-- <label for="fileInput" class="form-control-label">Upload your passport image, national ID, or Driver's Licence</label> -->
              <br />
              <label class="form-submit btn btn-dark btn-lg mb10">
                <input @change="preview" type="file" id="file-Input" />
                Insert Image
              </label>
              <div class="imagepreview" id="image-Preview">
                <img src="" alt="Image Preview" class="imagepreview__image">
                <span class="imagepreview__default-text">Image Preview</span>
              </div>
            </div>
            <div v-if="path === '/signup'" class=" form-button d-flex justify-content-around">
              <button type="submit" class="form-submit form-submit btn btn-dark mb10">Upload</button>
              <button @click.prevent="goBack" type="submit" class="form-submit form-submit btn btn-dark mb10">Back</button>
              <!-- <input type="submit" name="signup" id="signup" class="form-submit " value="Signup" /> -->
            </div>
            <div v-else class="form-group form-button d-flex justify-content-around" style="flex-direction: row !important;">
              <button type="submit" class="form-submit btn btn-dark btn-lg mb10">Upload</button>
              <button @click.prevent="goBack" type="submit" class="form-submit form-submit btn btn-dark mb10">Back</button>
            </div>
          </form>
          <!-- <div v-for="pkg in packages" :key="pkg.PackageId" class="col-md-6 col-lg-4 py-3 wow fadeInLeft">
              <div class="card card-body border-0 text-center shadow pt-5">
                <h5 class="fg-gray">{{ pkg.PackageName }}</h5>
                <hr>
                <p class="fs-small">Minimum Investment 0f ${{ pkg.minprice }}</p>
                <p class="fs-small">Minimum Investment 0f ${{ pkg.maxprice }}</p>
                <a @click.prevent="showForm(pkg.PackageName, pkg.name)" href="#" class="btn btn-dark">Invest</a>
              </div>
            </div> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase/app"
import "firebase/storage"
export default {
  data() {
    return {
      handyAttachments: [],
      // isLoggingIn: false,
      path: this.$route.path,
      invId: null

    };
  },

  computed: {
    initialSignupDetails() {
      return this.$store.getters["user/getInitialSignupDetails"];
    },

    userAddressDetails() {
      return this.$store.getters["user/getUserAddressDetails"];
    }
  },

  methods: {
    uploadImage() {
      const picture = document.getElementById("file-Input");
      const file = picture.files[0]
      const storageRef = firebase.storage().ref("user_images/" + file.name)
      const uploadTask = storageRef.put(file)
      console.log(picture.files[0])
      return uploadTask
    },
    runKyc() {
      if (this.path.includes("signup")) {
        this.signup();
      } else {
        this.uploadProofOfPayment();
      }
    },
    signup() {
      // const kyc = document.querySelector("#file-Input");
      // console.log("kyc: ", kyc);
      const uploadTask = this.uploadImage()
      uploadTask.on("state_changed", (snapshot) => { console.log(snapshot) },
        (error) => console.log("upload error: ", error),
        () => {
          // if upload is successful
          uploadTask.snapshot.ref.getDownloadURL()
            .then((downloadURL) => {
              console.log("file available at", downloadURL)
              // this.store_user(userData, data, downloadURL)
              const fd = new FormData();
              console.log("initial: ", this.initialSignupDetails);
              fd.append("name", this.initialSignupDetails.user.name);
              fd.append("email", this.initialSignupDetails.user.email);
              fd.append("password", this.initialSignupDetails.user.password);
              fd.append("repeat_password", this.initialSignupDetails.user.repeat_password);
              fd.append("dob", this.initialSignupDetails.user.dob);
              fd.append("phone", this.initialSignupDetails.user.phone);
              fd.append("ssn", this.initialSignupDetails.user.ssn);
              fd.append("address", this.userAddressDetails.user_address.address);
              fd.append("city", this.userAddressDetails.user_address.city);
              fd.append("state", this.userAddressDetails.user_address.state);
              fd.append("country", this.userAddressDetails.user_address.country);
              fd.append("zip", this.userAddressDetails.user_address.zip);
              fd.append("answer", this.initialSignupDetails.questions_user.answer);
              fd.append("security_questions_id", this.initialSignupDetails.questions_user.security_questions_id);
              fd.append("referral_code", this.initialSignupDetails.referral_code ? this.initialSignupDetails.referral_code : "");
              fd.append("kyc", downloadURL);
              // this.initialSignupDetails.user.kyc = kyc.files[0];
              console.log("init signup: ", this.initialSignupDetails);
              console.log("address signup: ", this.userAddressDetails);
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
            })
        }
      )
      // .catch(err => console.log(err));
    },

    uploadProofOfPayment() {
      // const kyc = document.querySelector("#file-Input");
      const uploadTask = this.uploadImage()
      uploadTask.on("state_changed", (snapshot) => { console.log(snapshot) },
        (error) => console.log("upload error: ", error),
        () => {
          // if upload is successful
          uploadTask.snapshot.ref.getDownloadURL()
            .then((downloadURL) => {
              console.log("file available at", downloadURL)
              // this.store_user(userData, data, downloadURL)
              const fd = new FormData();
              fd.append("paymentImg", downloadURL);
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
            })
        }
      )
      // console.log("beans: ", kyc);
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
    },

    goBack() {
      this.$emit("closeKyc");
    }
  }
};
</script>
<style scoped>
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

.form-title {
  color: #ffffff !important;
  font-size: 3rem !important;
}

.text-center {
  text-align: center;
  color: #ffffff;
  font-size: 20px;
}

p.text-center {
  color: #ffffff;
}

.page-section {
  padding-bottom: 0;
  padding-top: 20px;
}
</style>