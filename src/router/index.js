import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/member',
    name: 'member',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Member.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: () => import('../views/Shopcart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
