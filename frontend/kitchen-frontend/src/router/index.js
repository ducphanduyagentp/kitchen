import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Fridge from '@/components/Fridge'
import Recipe from '@/components/Recipe'

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
      component: Fridge
    },
    {
      path: '/recipes',
      name: 'Recipe',
      component: Recipe
    }
  ]
})

export default router