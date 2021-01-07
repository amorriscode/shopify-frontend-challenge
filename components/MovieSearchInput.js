import { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'

import debounce from '../lib/debounce'

export default function MovieSearchInput({
  searchQuery,
  onSearchQueryChange,
  onFocusChange,
  isFocused,
}) {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (!searchQuery) {
      setValue('')
    }
  }, [searchQuery])

  // Limit the frequency of API calls
  const debouncedQueryHandler = debounce(onSearchQueryChange, 500, false)

  return (
    <form className="relative">
      <FiSearch className="absolute text-4xl mt-5 ml-3 pointer-events-none text-gray-600" />

      <label className="hidden" htmlFor="search">
        Search
      </label>

      <input
        id="search"
        name="search"
        value={value}
        className={`w-full rounded pl-14 p-4 text-4xl font-bold transition duration-150 ease-in-out ring-4 ${
          isFocused ? 'ring-brand-red' : 'ring-white'
        }`}
        placeholder="Search for a movie..."
        onChange={(event) => {
          setValue(event.target.value)
          debouncedQueryHandler(event.target.value)
        }}
        onFocus={() => onFocusChange(true)}
        onBlur={() => onFocusChange(false)}
      />
    </form>
  )
}
