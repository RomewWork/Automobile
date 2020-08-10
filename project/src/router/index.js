import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from "../views/404";

Vue.use(VueRouter);

const routes = [{
<<<<<<< HEAD
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
=======
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import('../views/Reg.vue')
  }, {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }, {
    path: '/',
    redirect: '/home'
  }
>>>>>>> bc533d89d137bb4be9a24e00c3aae1f8d3d437ea
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router