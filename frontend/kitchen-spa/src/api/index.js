import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

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