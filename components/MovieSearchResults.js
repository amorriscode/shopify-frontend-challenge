import { useQuery } from 'react-query'

import NominatableMovies from './NominatableMovies'

export default function SearchResults({
  searchQuery,
  onNominateMovie,
  nominations,
}) {
  const { isLoading, data } = useQuery(`query-${searchQuery}`, () =>
    fetch(`/api/search?query=${searchQuery}`).then((res) => res.json())
  )

  // Don't render anything if we are loading
  if ((isLoading && !data?.length) || searchQuery.length <= 3) return <></>

  // Handle our error state
  if (data?.error)
    return (
      <>
        <h2 className="text-xl font-bold text-gray-800 px-4">
          Whoops, something went wrong!
        </h2>

        <p className="text-sm p-4">Try another search, on the house.</p>
      </>
    )

  // We made it! Show results
  return (
    <>
      {data.length ? (
        <>
          <h2 className="text-xl font-bold text-gray-800 px-4 mb-2">
            Here's what we found for "{searchQuery}"...
          </h2>

          <NominatableMovies
            movies={data}
            onNominateMovie={onNominateMovie}
            nominations={nominations}
          />
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold text-gray-800 px-4">
            We couldn't find anything for "{searchQuery}".
          </h2>

          <p className="text-sm p-4">Try another search, on the house.</p>
        </>
      )}
    </>
  )
}
