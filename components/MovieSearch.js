import Container from './Container'
import MovieSearchResults from './MovieSearchResults'
import EmptySearch from './EmptySearch'

export default function SearchResults({
  searchQuery,
  onNominateMovie,
  nominations,
}) {
  return (
    <Container>
      {searchQuery.length > 3 ? (
        <MovieSearchResults
          searchQuery={searchQuery}
          onNominateMovie={onNominateMovie}
          nominations={nominations}
        />
      ) : (
        <EmptySearch />
      )}
    </Container>
  )
}
