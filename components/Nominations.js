import Container from './Container'
import NominatedMovie from './NominatedMovie'

export default function NominationsContainer({
  nominations,
  onRemoveNomination,
}) {
  const remainingNominations = 5 - nominations.length

  return (
    <Container>
      {!nominations.length ? (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">
            Watch any good movies lately?
          </h2>

          <p>
            Search for your favourite movies and then nominate them for the
            Shoppies. What're the Shoppies? The internet's best movie awards, of
            course!
          </p>

          <p>Wait, you're saying you haven't heard of them? Impossible!</p>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Your nominations
          </h2>

          <p className="mb-4 text-xs">
            You have {nominations.length < 5 ? remainingNominations : 'no'}{' '}
            nomination
            {remainingNominations !== 1 ? 's' : ''} remaining.
          </p>
          <div className="space-y-8">
            {nominations.map((movie) => (
              <NominatedMovie
                key={movie.imdbID}
                movie={movie}
                onRemoveNomination={onRemoveNomination}
              />
            ))}
          </div>
        </>
      )}
    </Container>
  )
}
