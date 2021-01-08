import { useState } from 'react'

import GenrePill from './GenrePill'

export default function MovieCard({ movie, action }) {
  const [displayMetascore, setDisplayMetascore] = useState()

  const hasMoviePoster = movie.Poster !== 'N/A'
  const backgroundImage = hasMoviePoster ? `url(${movie.Poster})` : 'none'
  console.log(movie)
  return (
    <div className="flex items-center ">
      <div
        className="w-40 h-56 bg-cover bg-center rounded relative z-10 flex-shrink-0"
        style={{ backgroundImage }}
        onMouseEnter={() => setDisplayMetascore(true)}
        onMouseLeave={() => setDisplayMetascore(false)}
      >
        {!hasMoviePoster && <>🍿</>}
        {displayMetascore && movie.Metascore && (
          <div className="w-full h-full bg-brand-red rounded flex flex-col justify-center items-center bg-opacity-75">
            <div className="font-extrabold text-5xl">{movie.Metascore}</div>
            <div className="font-bold uppercase text-xs">Metascore</div>
          </div>
        )}
      </div>

      <div className="w-full -ml-4 pl-4">
        <div className="w-full h-full bg-gray-100 p-4 rounded flex flex-col justify-between">
          <div className="font-bold mb-2">
            {movie.Title} ({movie.Year})
          </div>

          {movie.Plot && <div className="text-xs mb-2">{movie.Plot}</div>}

          <div className="space-x-2 hidden md:block">
            {movie.Genre.split(',').map((genre) => (
              <GenrePill key={genre} genre={genre} />
            ))}
          </div>
        </div>

        <div className="ml-4 mt-2">{action}</div>
      </div>
    </div>
  )
}
