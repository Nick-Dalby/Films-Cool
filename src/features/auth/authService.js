import axios from 'axios'

const API_URL = 'https://movieapi-production-e1fd.up.railway.app/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'users', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.user))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))
  }

  return response.data.user
}

// Logout user
const logout = () => {
  localStorage.clear()
}

const authService = {
  register,
  logout,
  login,
}

export default authService
