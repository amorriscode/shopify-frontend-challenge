import Button from './Button'
import MovieCard from './MovieCard'

export default function NominatedMovie({
  movie,
  nominations,
  onNominateMovie,
}) {
  const isNominated = nominations.find(
    (nomination) => nomination.imdbID === movie.imdbID
  )

  const nominateMovie = () => {
    if (!isNominated) {
      onNominateMovie(movie)
    }
  }

  const action = isNominated ? (
    <div className="text-sm text-gray-600">Nominated!</div>
  ) : (
    <Button onClick={nominateMovie} primary disabled={nominations.length >= 5}>
      Nominate
    </Button>
  )

  return <MovieCard movie={movie} action={action} />
}
