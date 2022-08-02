import { Container, Cover, Title, Director } from './styles'

const Movie = ({ movie, isLarge, pickMovie }) => {
  return (
    <Container $isLarge={isLarge} onClick={() => pickMovie(movie)}>
      <Cover
        src={movie.ImagePath}
        alt={`Image for the movie ${movie.Title}`}
        $isLarge={isLarge}
      />

      <figcaption>
        <Title $isLarge={isLarge}>{movie.Title}</Title>
        <Director>Director: {movie.Director.Name}</Director>
      </figcaption>
    </Container>
  )
}

export default Movie
