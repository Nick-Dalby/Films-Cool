import axios from 'axios'

const API_URL = 'https://movieapi-production-e1fd.up.railway.app/movies'

// Get movies
const getMovies = async (token) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  })

  return response.data
}

const moviesService = {
  getMovies,
}

export default moviesService
