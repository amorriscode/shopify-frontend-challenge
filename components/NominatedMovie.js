import { useNominationsState } from '../context/NominationsContext'

import MovieCard from './MovieCard'

export default function NominatableMovie({ movie }) {
  const { handleRemoveNomination } = useNominationsState()

  const action = (
    <button
      className="text-xs text-brand-red hover:text-brand-red-dark hover:cursor-pointer"
      onClick={() => handleRemoveNomination(movie)}
    >
      Remove Nomination
    </button>
  )

  return <MovieCard movie={movie} action={action} />
}
