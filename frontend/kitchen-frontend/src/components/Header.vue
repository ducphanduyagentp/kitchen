<template>
<b-navbar>
     <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img src="logo.png">
        </b-navbar-item>
    </template>
    <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
            Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/fridge' }">
            The Fridge
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/recipes' }">
            Recipes
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/inventory' }">
            Inventory
        </b-navbar-item>
        <b-navbar-item tag="router-link" v-if="!isAuthenticated" :to="{ path: '/login' }">
            Login / Register
        </b-navbar-item>
        <b-navbar-item tag="router-link" v-else :to="{ path: '/logout' }">
            Logout
        </b-navbar-item>
    </template>
</b-navbar>
</template>

<script>
export default {
  computed: {
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>

<style>
</style>