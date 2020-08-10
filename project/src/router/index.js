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
  path: "/list",
  name: "list",
  component: () => import('../components/List/List.vue')
},
{
  path: "/404",
  component: NotFound
},
{
  path: "*",
  component: NotFound
}
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router