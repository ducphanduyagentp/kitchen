<template>
<b-navbar>
    <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
            Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/fridge' }">
            The Fridge
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/receipes' }">
            Receipes
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/inventory' }">
            Inventory
        </b-navbar-item>
    </template>
</b-navbar>
</template>

<script>
</script>

<style>
</style>