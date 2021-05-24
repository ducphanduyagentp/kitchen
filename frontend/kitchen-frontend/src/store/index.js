import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItems, fetchItem, addItem, updateItem, removeItem } from '@/api'
import { fetchRecipes, fetchRecipe, addRecipe, updateRecipe, removeRecipe } from '@/api'
import { authenticate, register } from '@/api'
import { isValidJwt, EventBus } from '@/utils'

Vue.use(Vuex)

const state = {
  items: [],
  currentItem: {},
  recipes: [],
  currentRecipe: {},
  loading: false,
  user: {},
  jwt: ''
}

const mutations = {
  initializeStore(state) {
    if (localStorage.getItem('token')) {
      state.jwt = {'token': localStorage.getItem('token')};
    }
  },
  clearStore(state) {
    localStorage.clear();
    state.jwt = '';
  },
  setUserData (state, payload) {
    console.log('setUserData payload = ', payload)
    state.userData = payload.userData
  },
  setJwtToken (state, payload) {
    console.log('setJwtToken payload = ', payload)
    localStorage.token = payload.jwt.token
    state.jwt = payload.jwt
  },
  setItems(state, payload) {
    state.items = payload.items;
    state.loading = false;
  },
  setItem(state, payload) {
    state.currentItem = payload.item;
  },
  setRecipes(state, payload) {
    state.recipes = payload.recipes;
    state.loading = false;
  },
  setRecipe(state, payload) {
    state.currentRecipe = payload.recipe;
  },
  setLoading(state, payload) {
    state.loading = payload.loading;
  }
}

const actions = {
  initializeStore(context) {
    context.commit('initializeStore');
  },
  clearStore(context) {
    context.commit('clearStore');
  },
  login(context, userData) {
    context.commit('setUserData', { userData })
    return authenticate(userData)
      .then(response => context.commit('setJwtToken', { jwt: response.data }))
      .catch(error => {
        console.log('Error Authenticating: ', error)
        EventBus.$emit('failedAuthentication', error)
      })
  },
  register(context, userData) {
    context.commit('setUserData', { userData })
    return register(userData)
      .then(context.dispatch('login', userData))
      .catch(error => {
        console.log('Error Registering: ', error)
        EventBus.$emit('failedRegistering: ', error)
      })
  },
  loadItems(context) {
    context.commit('setLoading', { loading: true });

    return setTimeout( () => {
      fetchItems(context.state.jwt.token)
      .then((response) => context.commit('setItems', { items: response.data }));
    }, 500);
  },
  loadItem(context, { id }) {
    return fetchItem(id, context.state.jwt.token)
    .then((response) => context.commit('setItem', { item: response.data }));
  },
  addItem(context, { item }) {
    return addItem(item, context.state.jwt.token);
  },
  updateItem(context, { item }) {
    return updateItem(item, context.state.jwt.token);
  },
  removeItem(context, { id }) {
    return removeItem(id, context.state.jwt.token);
  },
  loadRecipes(context) {
    context.commit('setLoading', { loading: true });

    return setTimeout( () => {
      fetchRecipes(context.state.jwt.token)
      .then((response) => context.commit('setRecipes', { recipes: response.data }));
    }, 500);
  },
  loadRecipe(context, { id }) {
    return fetchRecipe(id, context.state.jwt.token)
    .then((response) => context.commit('setRecipe', { recipe: response.data }));
  },
  addRecipe(context, { recipe }) {
    return addRecipe(recipe, context.state.jwt.token);
  },
  updateRecipe(context, { recipe }) {
    return updateRecipe(recipe, context.state.jwt.token);
  },
  removeRecipe(context, { id }) {
    return removeRecipe(id, context.state.jwt.token);
  }
}

const modules = {

}


const getters = {
  isAuthenticated (state) {
    return isValidJwt(state.jwt.token)
  }
}

const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations : mutations,
  actions: actions,
  modules: modules
});

export default store