import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Fridge from '@/components/Fridge'
import Recipe from '@/components/Recipe'

Vue.use(Router)

export default new Router({
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
