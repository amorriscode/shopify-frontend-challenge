import { useState, createContext, useContext, useEffect } from 'react'

const NominationsStateContext = createContext({
  nominations: [],
  hasNominationsRemaining: false,
  handleNominateMovie: () => null,
  handleRemoveNomination: () => null,
  remainingNominations: 0,
})

export function NominationsProvider({ children }) {
  const [nominations, setNomintations] = useState([])
  const [nominationsQueue, setNominationsQueue] = useState([])

  // Load nominations from local storage if they exist
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedNominations = localStorage.getItem('nominations') || []

      if (storedNominations.length) {
        setNomintations(JSON.parse(storedNominations))
      }
    }
  }, [])

  useEffect(() => {
    const queue = [...nominationsQueue]
    const movieToFetch = queue.shift()

    if (movieToFetch) {
      fetch(`/api/movie?id=${movieToFetch.imdbID}`)
        .then((res) => res.json())
        .then((movie) => {
          console.log(movie)
          const newNominations = [...nominations, movie]
          storeNominations(newNominations)
          setNomintations(newNominations)
          setNominationsQueue(queue)
        })
    }
  }, [nominationsQueue.length])

  const storeNominations = (nominations) =>
    localStorage.setItem('nominations', JSON.stringify(nominations))

  const handleNominateMovie = (movie) => {
    setNominationsQueue([...nominationsQueue, movie])
  }

  const handleRemoveNomination = (movie) => {
    const newNominations = nominations.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    )

    storeNominations(newNominations)
    setNomintations(newNominations)
  }

  return (
    <NominationsStateContext.Provider
      value={{
        nominations,
        handleNominateMovie,
        handleRemoveNomination,
        hasNominationsRemaining: nominations.length < 5,
        remainingNominations: 5 - nominations.length,
      }}
    >
      {children}
    </NominationsStateContext.Provider>
  )
}

export function useNominationsState() {
  const context = useContext(NominationsStateContext)

  if (context === undefined) {
    throw new Error(
      'useNominationsState must be used within a NominationsProvider'
    )
  }

  return context
}
