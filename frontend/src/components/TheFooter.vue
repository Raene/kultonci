<template>
  <div class="page-footer-section bg-dark fg-white">
    <div class="container mb-5">
      <div class="row justify-content-center text-center wow fadeInUp">
        <div class="col-lg-8">
          <div class="text-center mb-3">
            <img src="../assets/img/lunaralliance.png" alt="" height="80">
          </div>
          <!-- <h3 class="mb-3"><span class="fg-primary">Mob</span>ster</h3> -->
          <!-- <p class="caption">Lunar Alliance Investments is under supervision of Lunar A/S  under the supervision of the Danish FSA. Lunar A/S, Hack Kampmanns Plads 10, DK-8000 Aarhus C, CVR nr: 36982837. We give our clients all required guarantees, including confidentiality of data provided by clients at the registration procedure.</p> -->
          <ul class="nav justify-content-center py-3">
            <li class="nav-item"><router-link to="/" class="nav-link fg-white px-4">Home</router-link></li>
            <li class="nav-item"><router-link to="/about" class="nav-link fg-white px-4">About</router-link></li>
            <li class="nav-item"><router-link to="/investment-packages" class="nav-link fg-white px-4">Invest now</router-link></li>
            <li class="nav-item"><router-link to="/testimonies" class="nav-link fg-white px-4">Testimonies</router-link></li>
            <li class="nav-item"><router-link to="/faqs" class="nav-link fg-white px-4">FAQ</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <hr>
    <!-- Please don't remove or modify the credits below -->
    <p class="text-center mt-4 wow fadeIn">Copyright &copy; 2015 <router-link to="/" class="fg-white fw-medium">Lunar Alliance</router-link>. All right reserved</p>
  </div>
</template>