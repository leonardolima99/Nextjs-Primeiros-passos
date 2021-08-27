const { API_KEY, API_BASE } = process.env

const movie = async (req, res) => {
  const { id } = req.query
  
  const response = await fetch(`${API_BASE}/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
  const results = await response.json()

  res.status(200).json({
    info: results
  })
}

export default movie
