<template>
    <div id="kyc">
        <div class="container">
        	<h2 class="form-title">Verify your identity</h2>
        	<form class="register-form">
        		<div class="form-group">
        			<p class="text-center">Upload your passport image</p>
        			<handy-uploader data-app :documentAttachment.sync="handyAttachments" :fileUploaderType="'simple'" :maxFileSize="10240" :imageCompressor="true" :imageCompressLevel="0.8" :maxFileCount="10" :badgeCounter="true" :thumb="true" :changeFileName="true" :addFileDescription="true" :addFileTag="true" :tags="['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']" :btnColor="'#6dabe4'"></handy-uploader>
        		</div>
        		<div class="form-group">
        			<p class="text-center">Upload your national ID card</p>
        			<handy-uploader data-app :documentAttachment.sync="handyAttachments2" :fileUploaderType="'simple'" :maxFileSize="10240" :imageCompressor="true" :imageCompressLevel="0.8" :maxFileCount="10" :badgeCounter="true" :thumb="true" :changeFileName="true" :addFileDescription="true" :addFileTag="true" :tags="['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']" :btnColor="'#6dabe4'"></handy-uploader>
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
            handyAttachments: [],
            handyAttachments2: []

        };
    },

    updated() {
        console.log("handyAttachments: ", this.handyAttachments);
    }
};
</script>
<style scoped>
@import "../assets/fonts/material-icon/css/material-design-iconic-font.min.css";
@import "../assets/css/style.css";

.form-submit {
    width: 300px;
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
</style>