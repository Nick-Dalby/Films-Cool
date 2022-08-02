import { useEffect, useState, useRef } from 'react'
import { Container, MovieList } from './styles'
import { debounce } from 'lodash-es'

import Movie from '../Movie/Movie'

const MoviesContainer = ({ pickMovie, isPanelOpen, movies }) => {
  const [scroll, setScroll] = useState(0)
  const prevPanelState = useRef(false)

  // const { movies } = useSelector((state) => state.movies)

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScroll(window.scrollY)
    }, 100)

    if (!isPanelOpen) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isPanelOpen])

  useEffect(() => {
    if (prevPanelState.current && !isPanelOpen) {
      window.scroll(0, scroll)
    }
    prevPanelState.current = isPanelOpen
  }, [isPanelOpen, prevPanelState, scroll])

  return (
    <Container $isPanelOpen={isPanelOpen} $top={scroll}>
      <MovieList>
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie} pickMovie={pickMovie} />
        ))}
      </MovieList>
    </Container>
  )
}

export default MoviesContainer
