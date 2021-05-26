<template>
<div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="title">Welcome to The Kitchen</h2>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <b-message> Welcome to the Kitchen, boss! </b-message>
      <b-message>
        You have 10 items in the fridge
      </b-message>
      <b-button type="is-success" @click="ping">Ping</b-button>
    </div>
  </section>
</div>
</template>

<script>
import { ping as apiPing } from '@/api'
export default {
  methods: {
    ping: function () {
      return apiPing();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
