import { useState, useEffect, useRef } from 'react'
import { Transition } from 'react-transition-group'

import { useNominationsState } from '../context/NominationsContext'
import useOnClickOutside from '../hooks/onClickOutside'

import NominatedMovie from './NominatedMovie'

const transitionStyles = {
  entering: 'scale-125',
  entered: 'scale-100',
  exiting: 'scale-0',
  exited: 'scale-0',
}

export default function Nominations() {
  const [displayNominations, setDisplayNominations] = useState(false)
  const {
    nominations,
    remainingNominations,
    hasNominationsRemaining,
  } = useNominationsState()
  const nominationsRef = useRef(null)

  useEffect(() => {
    if (nominations.length < 1) {
      setDisplayNominations(false)
    }
  }, [nominations])

  useOnClickOutside(nominationsRef, () => setDisplayNominations(false))

  return (
    <>
      {displayNominations && (
        <div
          className="rounded bg-white p-8 fixed bottom-0 right-0 mb-28 mr-4 z-30 shadow-lg overflow-y-scroll"
          style={{ maxHeight: '80vh' }}
          ref={nominationsRef}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Your nominations
          </h2>

          <p className="mb-4 text-xs">
            You have {hasNominationsRemaining ? remainingNominations : 'no'}{' '}
            nomination
            {remainingNominations !== 1 ? 's' : ''} remaining.
          </p>
          <div className={`space-y-8 ${!remainingNominations && 'pb-8'}`}>
            {nominations.map((movie) => (
              <NominatedMovie key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      )}

      <Transition in={nominations.length > 0} timeout={500}>
        {(state) => (
          <div
            onClick={() => setDisplayNominations(!displayNominations)}
            className={`bg-brand-red w-20 h-20 fixed bottom-0 z-30 right-0 flex justify-center items-center rounded-full mr-4 mb-4 shadow-lg hover:cursor-pointer transition-all duration-300 ease-in-out transform scale-0 ${transitionStyles[state]}`}
          >
            <span className="text-4xl">🍿</span>
          </div>
        )}
      </Transition>
    </>
  )
}
