import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL + '/api'

export function fetchItems(jwt) {
  return axios.get(`${API_URL}/items/`, { headers: { Authorization: `Bearer: ${jwt}` } });
}

export function fetchItem(itemId, jwt) {
  return axios.get(`${API_URL}/items/${itemId}/`, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function updateItem(item, jwt) {
  return axios.put(`${API_URL}/items/${item.id}/`, item, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function addItem(item, jwt) {
  return axios.post(`${API_URL}/items/`, item, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function removeItem(itemId, jwt) {
  return axios.delete(`${API_URL}/items/${itemId}/`, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function fetchRecipes(jwt) {
  return axios.get(`${API_URL}/recipes/`, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function fetchRecipe(recipeId, jwt) {
  return axios.get(`${API_URL}/recipes/${recipeId}/`, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function updateRecipe(recipe, jwt) {
  return axios.put(`${API_URL}/recipes/${recipe.id}/`, recipe, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function addRecipe(recipe, jwt) {
  return axios.post(`${API_URL}/recipes/`, recipe, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function removeRecipe(recipeId, jwt) {
  return axios.delete(`${API_URL}/recipes/${recipeId}/`, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function authenticate(userData) {
  return axios.post(`${API_URL}/login/`, userData)
}

export function register(userData) {
  return axios.post(`${API_URL}/register/`, userData)
}