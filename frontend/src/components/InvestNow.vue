<template>
  <div class="page-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-1 py-3 mt-lg-5 wow fadeInUp">
          <h1 class="mb-4">What are you waiting for?</h1>
          <!-- <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, molestiae, perspiciatis laboriosam quia placeat recusandae repudiandae corrupti similique delectus, aliquam commodi possimus eveniet optio magnam quis vel. Reiciendis, fuga excepturi.</p> -->
        </div>
        <div class="col-lg-5 py-3 mt-lg-5">
          <div class="img-place mobile-preview wow zoomIn">
            <!-- <img src="../assets/img/forex.svg" alt=""> -->
            <router-link :to="user? '/investment-packages' : '/login'" class="btn btn-outline-primary rounded-pill">Get Started Today</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: localStorage.getItem("user")
    }
  }
}
</script>