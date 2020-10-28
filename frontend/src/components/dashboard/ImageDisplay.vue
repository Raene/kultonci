<template>
    <div class="card shadow mb-4">
        <div class="card-body text-center">
            <img :src="'https://kultonci.com/images/'+path" alt="...">
            <div class="card-footer">
                <div class="row align-items-center justify-content-between">
                    <!-- <div class="col-auto">
                        <button @click="verifyUser" :disabled="user.userVerified===1" class="btn btn-success">{{ user.userVerified === 0?"Verify":"User Verified"}}</button>
                    </div> -->
                    <div class="col-auto">
                        <button @click="closePreview" class="btn btn-danger">Close</button>
                    </div>
                </div>
            </div> <!-- /.card-footer -->
        </div>
    </div>
</template>
<script>
export default {
    props: ['path', 'displayImage'],
    methods: {
    	closePreview() {
    		this.$emit("exitPreview", false);
    	}
    }
}
</script>
<style scoped>
img {
    object-fit: contain !important;
    height: 500px;
    width: 100% !important;
    float: left !important;
}

.card-footer .row {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

@media (max-width: 380px) {
	.card-footer .row {
		justify-content: center !important;
	}
}

</style>