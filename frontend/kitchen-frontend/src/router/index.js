import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Fridge from '@/components/Fridge'
import Recipe from '@/components/Recipe'
import Login from '@/components/Login'
import Inventory  from '@/components/Inventory'
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
        store.dispatch('initializeStore');
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
        store.dispatch('initializeStore');
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
    },
    {
      path: '/logout',
      name: 'Logout',
      beforeEnter (to, from, next) {
        store.dispatch('clearStore');
        next('/');
      }
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: Inventory
    }
  ]
})

export default router