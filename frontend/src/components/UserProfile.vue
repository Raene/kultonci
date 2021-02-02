<template>
	<div class="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="post-holder">
                	<div class="leave-comments">
                        <h3 class="leave-comments-title">My Profile</h3>
                        <form>
                            <div class="row">
                               <!--  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only">Messages <span class="require">*</span></label>
                                        <textarea class="form-control" rows="5" placeholder="Comments"></textarea>
                                    </div>
                                </div> -->
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label required sr-only ">Name <span class="require">*</span></label>
                                        <input type="text" class="form-control" placeholder="Name" required>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label  sr-only required  ">Email <span class="require">*</span></label>
                                        <input type="email" class="form-control" placeholder="Email" required>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only required  ">Address <span class="require">*</span></label>
                                        <input type="text" class="form-control" placeholder="Address" required>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only required  ">City <span class="require">*</span></label>
                                        <input type="text" class="form-control" placeholder="City" required>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only required  ">State <span class="require">*</span></label>
                                        <input type="text" class="form-control" placeholder="State" required>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only required  ">Country <span class="require">*</span></label>
                                        <input type="text" class="form-control" placeholder="Country" required>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only required  ">Zip <span class="require">*</span></label>
                                        <input type="text" class="form-control" placeholder="Zip" required>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only required  ">Phone number <span class="require">*</span></label>
                                        <input type="text" class="form-control" placeholder="Phone number" required>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only required  ">SSN <span class="require">*</span></label>
                                        <input type="text" class="form-control" placeholder="SSN" required>
                                    </div>
                                </div>
                                 <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only">Messages <span class="require">*</span></label>
                                        <textarea class="form-control" rows="5" placeholder="Security question"></textarea>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only required  ">What was your first car? <span class="require">*</span></label>
                                        <input type="text" class="form-control" placeholder="What was your first car?" required>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only required  ">What is your mother's maiden name? <span class="require">*</span></label>
                                        <input type="text" class="form-control" placeholder="What is your mother's maiden name?" required>
                                    </div>
                                </div>
                                <div class="align-center col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <button id="singlebutton" name="singlebutton" class="btn btn-primary">Submit</button>
                                </div>
                                <div class="align-center secnd col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <button id="singlebutton" name="singlebutton" class="btn btn-primary">Change password</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>        
</template>


<style scoped>
@media (max-width: 480px) {
	.align-center {
		text-align: center;
	}

	.align-center .btn-primary {
		width: 100%;
	}

	.align-center.secnd {
		margin-top: 10px;
	}
}
</style>