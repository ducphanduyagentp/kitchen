import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Fridge from '@/components/Fridge'
import Recipe from '@/components/Recipe'
import Login from '@/components/Login'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/fridge',
      name: 'Fridge',
      component: Fridge,
      beforeEnter (to, from, next) {
        if (!store.getters.isAuthenticated) {
          next('/login')
        } else {
          next()
        }
      }
    },
    {
      path: '/recipes',
      name: 'Recipe',
      component: Recipe,
      beforeEnter (to, from, next) {
        if (!store.getters.isAuthenticated) {
          next('/login')
        } else {
          next()
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

export default router