import { useState, useEffect, useRef } from 'react'
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'
import { Panel, P, Em, CloseWrapper, BG, Fav } from './styles'
import { Close } from '../../styles'
import Movie from '../Movie/Movie'

import { useDispatch, useSelector } from 'react-redux'

import {
  addToFavorites,
  removeFromFavorites,
  setFavoriteMovies,
} from '../../features/userData/userDataSlice'

const DetailsPanel = ({ movie, closePanel, state }) => {
  const [showGenre, setShowGenre] = useState(false)
  const [showDirector, setShowDirector] = useState(false)
  const [isFav, setIsFav] = useState(true)

  const { movies } = useSelector((state) => state.movies)

  // favorite movie ids
  const { favoriteMovieIDs } = useSelector((state) => state.userData)

  const dispatch = useDispatch()

  const panelEl = useRef(null)
  const prevMovie = useRef(null)

  useEffect(() => {
    if (prevMovie.current !== movie) {
      panelEl.current.scrollTop = 0
    }
    prevMovie.current = movie
  }, [movie, prevMovie])

  // filtering fav movies
  useEffect(() => {
    if (movies && favoriteMovieIDs) {
      const favMovieArray = movies.filter((movie) =>
        favoriteMovieIDs.includes(movie._id)
      )

      if (favMovieArray.includes(movie)) {
        setIsFav(true)
      } else {
        setIsFav(false)
      }
      dispatch(setFavoriteMovies(favMovieArray))
    }
  }, [dispatch, movies, favoriteMovieIDs, movie])

  const showGenreInfo = () => {
    setShowGenre(!showGenre)
  }

  const showDirectorInfo = () => {
    setShowDirector(!showDirector)
  }

  const handleFavClick = () => {
    if (isFav) {
      dispatch(removeFromFavorites(movie))
      setIsFav(false)
    } else {
      dispatch(addToFavorites(movie))
      setIsFav(true)
    }
  }

  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state} ref={panelEl}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>
        <Fav $state={state} onClick={handleFavClick}>
          {isFav ? <FaRegThumbsDown /> : <FaRegThumbsUp />}
        </Fav>

        {movie && (
          <>
            <Movie movie={movie} isLarge={true} />

            <P>{movie.Description}</P>
            <>
              <P>
                <Em onClick={showGenreInfo}>Genre info</Em>
              </P>
              {showGenre ? (
                <P>
                  {movie.Genre.Name}: {movie.Genre.Description}
                </P>
              ) : null}
            </>
            <>
              <P>
                <Em onClick={showDirectorInfo}>Director info</Em>
              </P>
              {showDirector ? (
                <P>
                  {movie.Director.Name}: {movie.Director.Bio}
                </P>
              ) : null}
            </>
          </>
        )}
      </Panel>
    </>
  )
}

export default DetailsPanel
