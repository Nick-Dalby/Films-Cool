import { useState, useEffect, useRef } from 'react'
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'
import { Panel, P, Em, CloseWrapper, BG, Fav } from './styles'
import { Close } from '../../styles'
import Movie from '../Movie/Movie'

const DetailsPanel = ({ movie, closePanel, state }) => {
  const [showGenre, setShowGenre] = useState(false)
  const [showDirector, setShowDirector] = useState(false)
  const [isFav, setIsFav] = useState(false)

  const panelEl = useRef(null)
  const prevMovie = useRef(null)

  useEffect(() => {
    if (prevMovie.current !== movie) {
      panelEl.current.scrollTop = 0
    }
    prevMovie.current = movie
  }, [movie, prevMovie])

  const showGenreInfo = () => {
    setShowGenre(!showGenre)
  }

  const showDirectorInfo = () => {
    setShowDirector(!showDirector)
  }

  const handleFavClick = () => {
    setIsFav(!isFav)
    // more logic to add and remove favs from the db
    // need to save this in state/redux too
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
