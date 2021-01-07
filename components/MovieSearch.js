import { useState, useRef } from 'react'
import { Transition } from 'react-transition-group'

import { useNominationsState } from '../context/NominationsContext'
import useOnClickOutside from '../hooks/onClickOutside'

import MovieSearchInput from './MovieSearchInput'
import MovieSearchResults from './MovieSearchResults'
import EmptySearch from './EmptySearch'
import ThankYouBanner from './ThankYouBanner'

const transitionStyles = {
  entering: { display: 'block', opacity: 0 },
  entered: { display: 'block', opacity: 1 },
  exiting: { display: 'block', opacity: 0 },
  exited: { display: 'none', opacity: 0 },
}

export default function SearchResults() {
  const { nominations, hasNominationsRemaining } = useNominationsState()
  const [searchQuery, setSearchQuery] = useState('')
  const [displayResults, setDisplayResults] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const searchResultsRef = useRef(null)

  const handleSearchQuery = (newSearchQuery) => {
    if (searchQuery !== newSearchQuery) {
      setSearchQuery(newSearchQuery)
    }

    setDisplayResults(newSearchQuery.length > 3)
  }

  const handleNominateMovie = () => {
    setSearchQuery('')
    setDisplayResults(false)
  }

  const handleFocusChange = (newFocus) => {
    setIsFocused(newFocus)
    if (newFocus && searchQuery.length > 3) {
      setDisplayResults(true)
    }
  }

  useOnClickOutside(searchResultsRef, () => setDisplayResults(false))

  return (
    <>
      <section className="relative">
        <MovieSearchInput
          searchQuery={searchQuery}
          onSearchQueryChange={handleSearchQuery}
          onFocusChange={handleFocusChange}
          isFocused={isFocused}
        />

        <Transition
          in={displayResults}
          timeout={{
            appear: 0,
            enter: 500,
            exit: 100,
          }}
        >
          {(state) => (
            <div
              className={`transition ease-in duration-75 rounded-b bg-white absolute -mt-2 -ml-1 z-10 w-full box-content border-4 border-t-0 ${
                isFocused
                  ? 'border-brand-red -mt-1 box-content'
                  : 'border-white'
              }`}
              style={{
                opacity: 0,
                ...transitionStyles[state],
              }}
              ref={searchResultsRef}
            >
              <MovieSearchResults
                searchQuery={searchQuery}
                nominations={nominations}
                onNominateMovie={handleNominateMovie}
              />
            </div>
          )}
        </Transition>
      </section>

      {!hasNominationsRemaining && <ThankYouBanner />}

      {hasNominationsRemaining && (
        <section className="text-center">
          <EmptySearch light />
        </section>
      )}
    </>
  )
}
