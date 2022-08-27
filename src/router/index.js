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
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/addcurrency",
      name: "addcurrency",
      component: AddCurrencyView,
    },
    {
      path: "/addpair",
      name: "addpair",
      component: AddPairView,
    },
    {
      path: '/editpair/:id',
      name: 'editpair',
      component: EditPairView
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

export default router;
