import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import moviesReducer from '../features/movies/moviesSlice'
import userDataReducer from '../features/userData/userDataSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
    userData: userDataReducer,
  },
})
