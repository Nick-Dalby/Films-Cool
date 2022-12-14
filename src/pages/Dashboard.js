import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { Transition } from 'react-transition-group'
import DetailsPanel from '../components/Details-Panel/DetailsPanel'

import Search from '../components/Search/Search'
import MoviesContainer from '../components/MoviesContainer/MoviesContainer'
import { getMovies } from '../features/movies/moviesSlice'
import { getUserData } from '../features/userData/userDataSlice'

const Dashboard = () => {
  const { movies, isLoading } = useSelector((state) => state.movies)
  const [filteredMovies, setFilteredMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [showPanel, setShowPanel] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    dispatch(getMovies())
    dispatch(getUserData())
  }, [user, navigate, dispatch])

  useEffect(() => {
    setFilteredMovies(movies)
  }, [movies])

  const pickMovie = (movie) => {
    setSelectedMovie(movie)
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
  }

  const filterMovies = (searchTerm) => {
    if (!searchTerm) {
      setFilteredMovies(movies)
    } else {
      setFilteredMovies(
        movies.filter((movie) => movie.Title.toLowerCase().includes(searchTerm))
      )
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      {/* call the function to set filtered movies from the input of the search component */}
      <Search filterMovies={filterMovies} />
      {/* pass list of filtered movies as movies prop to the movies container */}
      <MoviesContainer
        pickMovie={pickMovie}
        isPanelOpen={showPanel}
        movies={filteredMovies}
      />

      <Transition in={showPanel} timeout={300}>
        {(state) => (
          <DetailsPanel
            movie={selectedMovie}
            closePanel={closePanel}
            state={state}
          />
        )}
      </Transition>
    </div>
  )
}

export default Dashboard
