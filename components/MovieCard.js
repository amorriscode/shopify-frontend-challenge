export default function MovieCard({ movie, action }) {
  return (
    <div className="flex items-center space-x-4">
      {movie.Poster !== 'N/A' ? (
        <div
          className="w-28 h-36 bg-cover bg-center rounded"
          style={{ backgroundImage: `url(${movie.Poster})` }}
        ></div>
      ) : (
        <div className="w-28 h-36 bg-brand-red-dark rounded flex justify-center items-center text-6xl">
          🍿
        </div>
      )}

      <div className="xl:flex items-center justify-between w-full bg-gray-100 p-8 rounded space-y-2">
        <div className="font-bold">
          {movie.Title} ({movie.Year})
        </div>

        {action}
      </div>
    </div>
  )
}
