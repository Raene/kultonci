import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/modules/user";
import _ from "lodash";
import Home from "../views/Home.vue";
import UserList from "@/components/dashboard/UserList.vue";
import SingleUser from "@/components/dashboard/SingleUser.vue";
import ChangeBtcAddress from "@/components/dashboard/ChangeBtcAddress.vue";
import UserProfile from "@/components/dashboard/UserProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about-us",
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
    path: "/signup/:referral_code",
    name: "SignUpWithRef",
    // route level code-splitting
    // this generates a separate chunk (signup.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "signupwithref" */ "../views/SignUpWithRef.vue")
  },
  {
    path: "/login",
    name: "LogIn",
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LogIn.vue"),
    meta: { isLoggedIn: true }
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
    path: "/investment-packages/:id",
    name: "singlePackage",
    // route level code-splitting
    // this generates a separate chunk (investment-packages.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "single-package" */ "../views/SinglePackage.vue")
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
      import(/* webpackChunkName: "user--wallet" */ "../views/UserWallet.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/cryptocurrency-list",
    name: "CryptocurrencyList",
    // route level code-splitting
    // this generates a separate chunk (cryptocurrency-list.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "cryptocurrency-list" */ "../views/CryptocurrencyList.vue")
  },
  {
    path: "/testimonies",
    name: "Testimonies",
    // route level code-splitting
    // this generates a separate chunk (testimonies.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "testimonies" */ "../views/Testimonies.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    // route level code-splitting
    // this generates a separate chunk (dashboard.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
      children: [
        {
          path: "users",
          component: UserList
        },
        {
          path: "users/:id",
          component: SingleUser
        },
        {
          path: "users/:profileId/profile",
          component: UserProfile
        },
        {
          path: "change_btc_address",
          component: ChangeBtcAddress
        }
      ],
      meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("profile: ", _.isEmpty(store.state.profile));
    if(_.isEmpty(JSON.parse(localStorage.getItem("user")))) {
      next({
        name: "LogIn"
      })
    } else {
      next();
    }
  } else {
    next();
  }

  if (to.matched.some(record => record.meta.isLoggedIn)) {
    if (_.isEmpty(JSON.parse(localStorage.getItem("user")))===false) {
      next({
        name: "Home"
      })
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
