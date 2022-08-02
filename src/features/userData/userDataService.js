import axios from 'axios'

const API_URL = 'https://afternoon-badlands-59179.herokuapp.com/users/'

const user = JSON.parse(localStorage.getItem('user'))
const token = localStorage.getItem('token')

// Get userData
const getUserData = async (token) => {
  const response = await axios.get(API_URL + user.Username, {
    headers: { Authorization: `Bearer ${token}` },
  })

  return response.data
}

// add id to list of favs
const addToFavorites = async (movie) => {
  const response = await axios.post(
    API_URL + user.Username + '/movies/' + movie._id,
    null,
    { headers: { Authorization: `Bearer ${token}` } }
  )

  return response.data
}

// remove id from list of favs
const removeFromFavorites = async (movie) => {
  const response = await axios.delete(
    API_URL + user.Username + '/movies/' + movie._id,
    { headers: { Authorization: `Bearer ${token}` } }
  )

  return response.data
}

// set favorite movies array
const setFavoriteMovies = (movies) => {
  return movies
}

const userDataService = {
  getUserData,
  addToFavorites,
  removeFromFavorites,
  setFavoriteMovies,
}

export default userDataService
