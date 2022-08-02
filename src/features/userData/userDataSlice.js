import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userDataService from './userDataService'

const initialState = {
  userData: [],
  favoriteMovieIDs: [],
  favoriteMovieArray: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

const token = localStorage.getItem('token')

// get userData
export const getUserData = createAsyncThunk(
  'userData/get',
  async (_, thunkAPI) => {
    try {
      return await userDataService.getUserData(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// add to favorites
export const addToFavorites = createAsyncThunk(
  'userData/addFav',
  async (movie, thunkAPI) => {
    try {
      return await userDataService.addToFavorites(movie)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// remove from favorites
export const removeFromFavorites = createAsyncThunk(
  'userData/removeFav',
  async (movie, thunkAPI) => {
    try {
      return await userDataService.removeFromFavorites(movie)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// set favorite movie array
export const setFavoriteMovies = createAsyncThunk(
  'userData/setFavoriteMovies',
  async (movies, thunkAPI) => {
    try {
      return await userDataService.setFavoriteMovies(movies)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.userDataSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.isLoading = false
        state.userDataSuccess = true
        state.userData = action.payload
        state.favoriteMovieIDs = action.payload.FavoriteMovies
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(addToFavorites.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.isLoading = false
        state.userDataSuccess = true
        state.favoriteMovieIDs = action.payload.FavoriteMovies
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(removeFromFavorites.pending, (state) => {
        state.isLoading = true
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.isLoading = false
        state.userDataSuccess = true
        state.favoriteMovieIDs = action.payload.FavoriteMovies
      })
      .addCase(removeFromFavorites.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(setFavoriteMovies.pending, (state) => {
        state.isLoading = true
      })
      .addCase(setFavoriteMovies.fulfilled, (state, action) => {
        state.isLoading = false
        state.userDataSuccess = true
        state.favoriteMovieArray = action.payload
      })
      .addCase(setFavoriteMovies.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export default userDataSlice.reducer
