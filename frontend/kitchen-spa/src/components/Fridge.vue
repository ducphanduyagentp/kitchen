<template>
<div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="title">The Fridge</h2>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="card" v-for="item in items" v-bind:key="item.id">
        <div class="card-content">
          <p class="title">{{ item.item_name}}</p>
          <p class='subtitle'>{{ item.quantity + " " + item.unit }}</p>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import { fetchItems } from '@/api'
export default {
  name: 'Fridge',
  data () {
    return {
      items: []
    }
  },
  beforeMount() {
    fetchItems().then(response => {
      this.items = response
    });
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
