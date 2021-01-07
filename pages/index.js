import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Transition } from 'react-transition-group'

import MovieSearchInput from '../components/MovieSearchInput'
import MovieSearch from '../components/MovieSearch'
import Nominations from '../components/Nominations'
import ThankYouBanner from '../components/ThankYouBanner'
import EmptySearch from '../components/EmptySearch'

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [displayResults, setDisplayResults] = useState(false)
  const [nominations, setNomintations] = useState([])

  // Load nominations from local storage if they exist
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedNominations = localStorage.getItem('nominations') || []

      if (storedNominations.length) {
        setNomintations(JSON.parse(storedNominations))
        setDisplayResults(true)
      }
    }
  }, [])

  const storeNominations = (nominations) =>
    localStorage.setItem('nominations', JSON.stringify(nominations))

  const handleSearchQuery = (newSearchQuery) => {
    if (searchQuery !== newSearchQuery) {
      setSearchQuery(newSearchQuery)
    }

    // If we haven't show the results and our query is long enough
    // then we will display the result/nominations containers
    if (newSearchQuery.length > 3 && !displayResults) {
      setDisplayResults(true)
    }
  }

  const handleNominateMovie = (movie) => {
    const newNominations = [...nominations, movie]
    storeNominations(newNominations)
    setNomintations(newNominations)
  }

  const handleRemoveNomination = (movie) => {
    const newNominations = nominations.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    )

    storeNominations(newNominations)
    setNomintations(newNominations)
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>The Shoppies</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍿</text></svg>"
        />
      </Head>

      <main className="container mx-auto space-y-8 p-8">
        <h1 className="text-brand-red text-6xl font-bold text-center">
          The Shoppies 🍿
        </h1>

        <h2 className="text-white text-2xl font-bold text-center">
          Nominate your favourite movies!
        </h2>

        <MovieSearchInput onSearchQueryChange={handleSearchQuery} />

        {nominations.length >= 5 && <ThankYouBanner />}

        {!displayResults && (
          <section className="text-center">
            <EmptySearch light />
          </section>
        )}

        <Transition in={displayResults} timeout={500}>
          {(state) => (
            <section
              className="grid lg:grid-cols-2 gap-8 transition-opacity ease-in duration-700"
              style={{
                opacity: 0,
                ...transitionStyles[state],
              }}
            >
              <MovieSearch
                searchQuery={searchQuery}
                nominations={nominations}
                onNominateMovie={handleNominateMovie}
              />

              <Nominations
                nominations={nominations}
                onRemoveNomination={handleRemoveNomination}
              />
            </section>
          )}
        </Transition>
      </main>

      <footer className="text-center text-white pt-0 p-8">
        Made with 🍿 by{' '}
        <a
          target="_blank"
          className="text-brand-red hover:text-brand-red-dark font-bold"
          href="https://anthonymorris.dev"
        >
          Anthony Morris
        </a>
      </footer>
    </div>
  )
}
