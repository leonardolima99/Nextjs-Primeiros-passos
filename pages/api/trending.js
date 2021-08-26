const { API_KEY, API_BASE } = process.env

const trending = async (req, res) => {
  const response = await fetch(`${API_BASE}/trending/movie/week?api_key=${API_KEY}`)
  const { results } = await response.json()

  res.status(200).json({
    list: results
  })
}

export default trending
