import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moviesService from './moviesService'

const initialState = {
  movies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// get movies
export const getMovies = createAsyncThunk('movies/get', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('token')
    return await moviesService.getMovies(token)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.movies = action.payload
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export default moviesSlice.reducer
