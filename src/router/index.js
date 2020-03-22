import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@views/main/index.vue'
import Login from '@views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@views/main/home.vue'),
      },
      {
        path: 'items',
        name: 'items',
        component: () => import('@views/main/items/index.vue'),
      },
      {
        path: 'items/:id/:action?',
        name: 'item-detail',
        component: () => import('@views/main/items/details.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
