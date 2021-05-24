// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Buefy from 'buefy'
import './assets/styles.scss'

Vue.use(Buefy);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.dispatch('initializeStore');
  },
  created() {
    document.title = 'The Kitchen';
  }
}).$mount('#app')
