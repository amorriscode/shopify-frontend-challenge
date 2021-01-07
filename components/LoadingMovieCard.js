export default function LoadingMovieCard() {
  return (
    <div className="flex items-center space-x-4 animate-pulse">
      <div className="w-28 h-36 bg-gray-200 rounded flex justify-center items-center text-6xl"></div>

      <div className="xl:flex items-center justify-between w-full bg-gray-100 p-8 rounded space-y-2">
        <div className="w-full h-auto flex space-x-4">
          <div className="w-40 h-8 bg-gray-200"></div>
          <div className="w-24 h-8 bg-gray-200"></div>
        </div>
      </div>
    </div>
  )
}
