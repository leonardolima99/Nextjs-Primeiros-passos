const { API_KEY, API_BASE } = process.env

const search = async (req, res) => {
  const { q } = req.query
  
  const response = await fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${q}`)
  const { results } = await response.json()

  res.status(200).json({
    list: results
  })
}

export default search
