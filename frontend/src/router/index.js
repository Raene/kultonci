import Vue from "vue";
import store from "@/store/modules/user";
import _ from "lodash";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UserProfile from "@/components/UserProfile.vue";
import User from "@/components/User.vue";
import UserList from "@/components/Dashboard/UserList.vue";
import SingleUser from "@/components/Dashboard/SingleUser.vue";
import UserProfileAdmin from "@/components/Dashboard/UserProfile.vue";
import UpdateUserWalletForm from "@/components/Dashboard/UpdateUserWalletForm.vue";
import CreateBtcAddress from "@/components/Dashboard/CreateBtcAddress.vue";

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
    path: "/investment-packages",
    name: "InvestmentPackages",
    component: () =>
      import(/* webpackChunkName: "investment" */ "../views/InvestmentPackages.vue")
  },
  {
    path: "/investment-packages/:id",
    name: "SinglePackage",
    component: () =>
      import(/* webpackChunkName: "single-package" */ "../views/SinglePackage.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/testimonies",
    name: "Testimonies",
    component: () =>
      import(/* webpackChunkName: "testimonies" */ "../views/Testimonies.vue")
  },
  {
    path: "/faqs",
    name: "Faqs",
    component: () =>
      import(/* webpackChunkName: "faqs" */ "../views/Faqs.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: { isLoggedIn: true }
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue")
  },
  {
    path: "/user-wallet",
    name: "UserWallet",
    component: () =>
      import(/* webpackChunkName: "user-wallet" */ "../views/UserWallet.vue"),
      children: [
        {
          path: "user/profile",
          component: UserProfile
        },
        {
          path: "user",
          component: User
        }
      ],
      meta: { requiresAuth: true }
  },
  {
    path: "/cryptocurrency-list",
    name: "CryptoCurrency",
    component: () =>
      import(/* webpackChunkName: "cryptocurrency-list" */ "../views/CryptocurrencyList.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard */ "../views/Dashboard.vue"),
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
        path: "users/:id/profile",
        component: UserProfileAdmin
      },
      {
        path: "users/:id/profile/update-user-wallet",
        component: UpdateUserWalletForm
      },
      {
        path: "create-btc-address",
        component: CreateBtcAddress
      }
    ],
    meta: { requiresAuth: true, isAdmin: true }
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
        name: "Login"
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

  if (to.matched.some(record => record.meta.isAdmin)) {
    if (_.isEmpty(JSON.parse(localStorage.getItem("user")))=== false && JSON.parse(localStorage.getItem("user")).role !== 0) {
      next()
    } else {
      console.log("role: ", JSON.parse(localStorage.getItem("user")).role)
      next({
        name: "Home"
      });
    }
  } else {
    next();
  }
});

export default router;
