import { useEffect, useState } from 'react'

import NominatableMovie from './NominatableMovie'

const sortFunctions = {
  Title: {
    asc: (movieA, movieB) => movieB.Title.localeCompare(movieA.Title),
    desc: (movieA, movieB) => movieA.Title.localeCompare(movieB.Title),
  },
  Year: {
    asc: (movieA, movieB) => movieA.Year - movieB.Year,
    desc: (movieA, movieB) => movieB.Year - movieA.Year,
  },
}

export default function NominatableMovies({ movies, onNominateMovie }) {
  const [sortedMovies, setSortedMovies] = useState(movies)
  const [sortParam, setSortParam] = useState('Year')
  const [sortDirection, setSortDirection] = useState('desc')

  // Sort by year desc by default
  useEffect(() => {
    setSortedMovies([...sortedMovies].sort(sortFunctions.Year.desc))
  }, [])

  // Sort any time the sortParam or sortDirection is changed
  useEffect(() => {
    setSortedMovies(
      [...sortedMovies].sort(sortFunctions[sortParam][sortDirection])
    )
  }, [sortParam, sortDirection])

  const changeSortParam = () => {
    setSortParam(sortParam === 'Year' ? 'Title' : 'Year')
  }

  const changeSortDirection = () => {
    setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc')
  }

  return (
    <>
      <div className="mb-4 text-xs px-4">
        Sort movies by{' '}
        <span
          className="font-bold hover:text-brand-red hover:cursor-pointer"
          onClick={changeSortParam}
        >
          {sortParam.toLowerCase()}
        </span>{' '}
        <span
          className="font-bold hover:text-brand-red hover:cursor-pointer"
          onClick={changeSortDirection}
        >
          {sortDirection}
        </span>
      </div>

      {sortedMovies.map((movie) => (
        <NominatableMovie
          key={movie.imdbID}
          movie={movie}
          onNominateMovie={onNominateMovie}
        />
      ))}
    </>
  )
}
