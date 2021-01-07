import { FiSearch } from 'react-icons/fi'

import debounce from '../lib/debounce'

export default function MovieSearchInput({ onSearchQueryChange }) {
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
        className="w-full rounded pl-14 p-4 focus:ring-4 focus:ring-brand-red text-4xl font-bold transition duration-150 ease-in-out"
        placeholder="Search for a movie..."
        onChange={(event) => debouncedQueryHandler(event.target.value)}
      />
    </form>
  )
}
