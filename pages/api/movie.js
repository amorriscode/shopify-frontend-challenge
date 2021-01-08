export default async (req, res) => {
  const { id } = req.query

  // If an invalid query is passed then return an empty array
  if (!id) {
    res.statusCode = 200
    res.json([])
    return
  }

  const searchResult = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&type=movie&i=${id}`
  ).then((res) => res.json())

  // Always send 200 because our server is still okay
  // and let the frontend handle the error
  res.statusCode = 200

  // Handle OMDB error but don't consider empty results as an error
  if (searchResult.Error) {
    res.json({ error: searchResult.Error })
  } else {
    res.json(searchResult)
  }
}
