import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from "../views/404";

Vue.use(VueRouter);

const routes = [{
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  }, {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import('../views/Reg.vue')
  }, {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: "/list",
    name: "list",
    component: () => import('../views/List.vue')
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import('../views/Detail.vue')
  },
  {
    path: "/collection",
    name: "collection",
    component: () => import('../views/Collection.vue')
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/',
    redirect: '/home'
  }, {
    path: "/404",
    component: NotFound
  }, {
    path: "*",
    component: NotFound
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router