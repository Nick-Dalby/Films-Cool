import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { Transition } from 'react-transition-group'
import DetailsPanel from '../components/Details-Panel/DetailsPanel'

import Search from '../components/Search/Search'
import MoviesContainer from '../components/MoviesContainer/MoviesContainer'
import { getMovies } from '../features/movies/moviesSlice'

const Dashboard = () => {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [showPanel, setShowPanel] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { movies, isLoading } = useSelector((state) => state.movies)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    dispatch(getMovies())
  }, [user, navigate, dispatch])

  const pickMovie = (movie) => {
    setSelectedMovie(movie)
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <Search />
      <MoviesContainer pickMovie={pickMovie} isPanelOpen={showPanel} />

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
