const API_KEY = import.meta.env.VITE_APP_API_KEY
const URL = "https://www.omdbapi.com/"

export async function searchMovies(title) {
  const res = await fetch(`${URL}?apikey=${API_KEY}&s=${title}`)
  const data = await res.json()

  if (data.Response === "False") return []

  return data.Search
}

export async function getMovie(title) {
  const res = await fetch(`${URL}?apikey=${API_KEY}&t=${title}`)
  const data = await res.json()

  return data
}

export async function getBondMovies() {
  const res = await fetch(`${URL}?apikey=${API_KEY}&s=james bond`)
  const data = await res.json()

  if (data.Response === "False") return []

  return data.Search.slice(0, 10)
}