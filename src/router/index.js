import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddCurrencyView from '../views/AddCurrencyView.vue';
import LoginView from '@/views/LoginView.vue';
import Register from '@/views/Register.vue';
import AddPairView from '@/views/AddPairView.vue';
import EditPairView from '@/views/EditPairView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: { authOnly: true }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: { authOnly: true }
    },
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/addcurrency",
      name: "addcurrency",
      component: AddCurrencyView,
      meta: { authOnly: true }
    },
    {
      path: "/addpair",
      name: "addpair",
      component: AddPairView,
      meta: { authOnly: true }
    },
    {
      path: '/editpair/:id',
      name: 'editpair',
      component: EditPairView,
      meta: { authOnly: true }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
  
});

function isLoggedIn() {
  return localStorage.getItem("token");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: "/",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      next({
        path: "/home",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
