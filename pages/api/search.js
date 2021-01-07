export default async (req, res) => {
  const { query } = req.query

  const searchResults = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&type=movie&s=${query}`
  ).then((res) => res.json())
  console.log(searchResults)
  // Handle OMDB error but don't consider empty results as an error
  if (searchResults.Error && searchResults.Error !== 'Movie not found!') {
    res.statusCode = 500
    res.json({ error: searchResults.Error })
  } else {
    res.statusCode = 200
    // If no movies were found, send an empty array
    res.json(searchResults.Search || [])
  }
}
