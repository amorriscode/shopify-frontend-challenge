import { useState } from 'react'

import { useNominationsState } from '../context/NominationsContext'

export default function NominatedMovie({ movie, onNominateMovie }) {
  const [isHovering, setIsHovering] = useState(false)
  const { nominations, handleNominateMovie } = useNominationsState()

  const isNominated = nominations.find(
    (nomination) => nomination.imdbID === movie.imdbID
  )

  const nominationClasses = isNominated
    ? 'text-gray-400'
    : 'hover:bg-gray-100 hover:cursor-pointer hover:text-brand-red hover:font-bold'

  const nominateMovie = () => {
    if (!isNominated) {
      handleNominateMovie(movie)
    }

    if (onNominateMovie) {
      onNominateMovie()
    }
  }

  return (
    <>
      <div
        className={`p-4 ${nominationClasses}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => nominateMovie()}
      >
        {movie.Title} ({movie.Year})
      </div>

      {isHovering && movie.Poster !== 'N/A' && (
        <div
          className="w-48 h-64 bg-cover bg-center rounded absolute top-0 right-0 mr-4 -mt-14"
          style={{ backgroundImage: `url(${movie.Poster})` }}
        >
          {isNominated && (
            <span className="uppercase bg-brand-red rounded-b text-white p-4 text-xs absolute bottom-0 w-full text-center">
              Nominated
            </span>
          )}
        </div>
      )}
    </>
  )
}
