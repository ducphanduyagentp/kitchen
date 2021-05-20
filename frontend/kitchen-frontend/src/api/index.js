import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL + '/api'

export function fetchItems() {
  return axios.get(`${API_URL}/items/`)
}

export function fetchItem(itemId) {
  return axios.get(`${API_URL}/items/${itemId}/`)
}

export function updateItem(item) {
  return axios.put(`${API_URL}/items/${item.id}/`, item)
}

export function addItem(item) {
  return axios.post(`${API_URL}/items/`, item)
}

export function removeItem(itemId) {
  return axios.delete(`${API_URL}/items/${itemId}/`)
}

export function fetchRecipes() {
  return axios.get(`${API_URL}/recipes/`)
}

export function fetchRecipe(recipeId) {
  return axios.get(`${API_URL}/recipes/${recipeId}/`)
}

export function updateRecipe(recipe) {
  return axios.put(`${API_URL}/recipes/${recipe.id}/`, recipe)
}

export function addRecipe(recipe) {
  return axios.post(`${API_URL}/recipes/`, recipe)
}

export function removeRecipe(recipeId) {
  return axios.delete(`${API_URL}/recipes/${recipeId}/`)
}