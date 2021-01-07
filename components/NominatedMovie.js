import { useNominationsState } from '../context/NominationsContext'

import Button from './Button'
import MovieCard from './MovieCard'

export default function NominatableMovie({ movie }) {
  const { handleRemoveNomination } = useNominationsState()

  const action = (
    <div className="text-xs">
      <Button onClick={() => handleRemoveNomination(movie)}>
        Remove Nomination
      </Button>
    </div>
  )

  return <MovieCard movie={movie} action={action} />
}
