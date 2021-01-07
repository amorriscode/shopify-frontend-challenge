import Button from './Button'
import MovieCard from './MovieCard'

export default function NominatableMovie({ movie, onRemoveNomination }) {
  const removeNomination = () => {
    onRemoveNomination(movie)
  }

  const action = <Button onClick={removeNomination}>Remove</Button>

  return <MovieCard movie={movie} action={action} />
}
