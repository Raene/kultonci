<template>
    <div id="kyc">
        <div class="container">
        	<h2 class="form-title">Verify your identity</h2>
        	<form @submit.prevent="signup" class="register-form">
        		<div class="form-group">
        			<p class="text-center">Upload your passport image, national ID, or Driver's Licence</p>
        			<handy-uploader data-app :documentAttachment.sync="handyAttachments" :fileUploaderType="'simple'" :maxFileSize="10240" :imageCompressor="true" :imageCompressLevel="0.8" :maxFileCount="10" :badgeCounter="false" :thumb="true" :changeFileName="true" :addFileDescription="true" :addFileTag="true" :tags="['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']" :btnColor="'#6dabe4'" :cardType="'raised'"></handy-uploader>
        		</div>
        		<div class="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  class="form-submit "
                  value="Signup"
                />
              </div>
        	</form>
        </div>
    </div>
</template>
<script>
import handyUploader from 'handy-uploader/src/components/handyUploader';
export default {
    components: {
        handyUploader
    },
    data() {
        return {
            handyAttachments: []

        };
    },

    mounted() {
        document.querySelector(".v-btn").style.color = 'white';
        document.querySelector(".v-btn__content").style.color = 'white';
    },

    computed: {
        initialSignupDetails() {
            return this.$store.getters["user/getInitialSignupDetails"];
        }
    },
    // updated() {
    //     console.log("handyAttachments: ", this.handyAttachments);
    // },

    methods: {
        signup() {
            console.log("handyfile: ", this.handyAttachments[0]);
            this.$store.dispatch("user/signup", { ...this.initialSignupDetails, kyc: this.handyAttachments[0] })
                .then((data) => {
                    console.log("signup data: ", data);
                })
                .catch(err => console.log(err));
        }
    }
};
</script>
<style scoped>
@import "../assets/fonts/material-icon/css/material-design-iconic-font.min.css";
@import "../assets/css/style.css";

.form-submit {
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
	background: #f8f8f8;
}

.text-center {
	text-align: center;
}

.v-btn {
    color: white !important;
}
</style>