import { useQuery } from 'react-query'

import Container from './Container'
import NominatableMovies from './NominatableMovies'
import EmptySearch from './EmptySearch'
import LoadingMovieCard from './LoadingMovieCard'

export default function SearchResults({
  searchQuery,
  onNominateMovie,
  nominations,
}) {
  const { isLoading, data } = useQuery(`query-${searchQuery}`, () =>
    fetch(`/api/search?query=${searchQuery}`).then((res) => res.json())
  )

  // Encourage a new query if it is too show
  if (searchQuery.length < 3)
    return (
      <Container>
        <EmptySearch />
      </Container>
    )

  // Show our loading state
  if (isLoading)
    return (
      <Container>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Taking a look for some movies...
        </h2>

        <div className="space-y-4">
          {[1, 2].map((i) => (
            <LoadingMovieCard key={i} />
          ))}
        </div>
      </Container>
    )

  // Handle our error state
  if (data?.error)
    return (
      <Container>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Whoops, something went wrong!
        </h2>

        <div>{data.error}</div>
      </Container>
    )

  // We made it! Show results
  return (
    <Container>
      {data.length ? (
        <>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
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
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            We couldn't find anything for "{searchQuery}".
          </h2>

          <img
            className="rounded"
            src="https://media.giphy.com/media/3o6wrebnKWmvx4ZBio/giphy.gif"
          />
        </>
      )}
    </Container>
  )
}
