<template>
    <div id="kyc">
        <Preloader v-if="isLoggingIn" />
        <div class="container" v-if="!isLoggingIn">
            <h2 v-if="path === '/signup'" class="form-title">Verify your identity</h2>
            <h2 v-else class="form-title">Upload proof of payment</h2>
            <form @submit.prevent="runKyc" class="register-form">
                <div class="form-group">
                    <p v-if="path === '/signup'" class="text-center">Upload your passport image, national ID, or Driver's Licence</p>
                    <!-- <input id="kyc-input" type="file" name="kyc"> -->
                    <!-- <label for="fileInput" class="form-control-label">Upload your passport image, national ID, or Driver's Licence</label> -->
                    <br />
                    <label class="form-submit">
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
                    <button type="submit" class="form-submit">Upload</button>
                    <!-- <input type="submit" name="signup" id="signup" class="form-submit " value="Signup" /> -->
                </div>
                <div v-else class="form-group form-button">
                    <button type="submit" class="form-submit">Upload</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import Preloader from "@/components/Preloader.vue";
// import handyUploader from 'handy-uploader/src/components/handyUploader';
export default {
    components: {
        // handyUploader
        Preloader
    },
    data() {
        return {
            handyAttachments: [],
            isLoggingIn: false,
            path: this.$route.path

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

    methods: {
        runKyc() {
            if (this.path === "/signup") {
                this.signup();
            } else {
                this.uploadProofOfPayment();
            }
        },
        signup() {
            const kyc = document.querySelector("#file-Input");
            console.log("kyc: ", kyc);
            const fd = new FormData();
            fd.append("name", this.initialSignupDetails.name);
            fd.append("email", this.initialSignupDetails.email);
            fd.append("password", this.initialSignupDetails.password);
            fd.append("repeat_password", this.initialSignupDetails.repeat_password);
            fd.append("kyc", kyc.files[0]);
            this.$store.dispatch("user/signup", fd)
                .then((err) => {
                    if (err) {
                        this.isLoggingIn = false;
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
                        this.isLoggingIn = false;
                        this.$swal({
                        position: "center",
                        icon: "success",
                        title: "Signup Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                        this.$router.push({ path: "/login" });
                    }
                });
            // .catch(err => console.log(err));
        },

        uploadProofOfPayment() {
            const kyc = document.querySelector("#file-Input");
            console.log("beans: ", kyc);
            const fd = new FormData();
            fd.append("kyc", kyc.files[0]);
            // this.$store.dispatch("user/uploadProof", fd)
            //     .then((err) => {
            //         if (err) {
            //             this.isLoggingIn = false;
            //             console.log(err);
            //             this.$swal({
            //             icon: "error",
            //             title: "Signup Unsuccessful",
            //             toast: true,
            //             position: "top-end",
            //             showConfirmButton: false,
            //             timer: 3000,
            //             timerProgressBar: true,
            //             onOpen: (toast) => {
            //                 toast.addEventListener("mouseenter", this.$swal.stopTimer);
            //                 toast.addEventListener("mouseleave", this.$swal.resumeTimer);
            //             }
            //         });
            //         } else {
            //             this.isLoggingIn = false;
            //             this.$swal({
            //             position: "center",
            //             icon: "success",
            //             title: "Signup Successful",
            //             showConfirmButton: false,
            //             timer: 1500
            //         });
            //             this.$router.push({ path: "/login" });
            //         }
            //     });
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
@import url('https://fonts.googleapis.com/css?family=Muli:300,700|Nunito');
@import "../assets/fonts/material-icon/css/material-design-iconic-font.min.css";
@import "../assets/css/style.css";

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
    border: 1px dashed gold;
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