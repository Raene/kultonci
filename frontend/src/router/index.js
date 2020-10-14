import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/signup",
    name: "SignUp",
    // route level code-splitting
    // this generates a separate chunk (signup.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignUp.vue")
  },
  {
    path: "/login",
    name: "LogIn",
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LogIn.vue")
  },
  {
    path: "/investment-packages",
    name: "Packages",
    // route level code-splitting
    // this generates a separate chunk (investment-packages.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "investment-packages" */ "../views/InvestmentPackages.vue")
  },
  {
    path: "/faqs",
    name: "FAQs",
    // route level code-splitting
    // this generates a separate chunk (faqs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "faqs" */ "../views/Faqs.vue")
  },
  {
    path: "/support",
    name: "Support",
    // route level code-splitting
    // this generates a separate chunk (support.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "support" */ "../views/Support.vue")
  },
  {
    path: "/user-wallet",
    name: "UserWallet",
    // route level code-splitting
    // this generates a separate chunk (user-wallet.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "support" */ "../views/UserWallet.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
