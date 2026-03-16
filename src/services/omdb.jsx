const API_KEY = import.meta.env.VITE_APP_API_KEY
const BASE_URL = "https://www.omdbapi.com/"

export async function searchMoviesByTitle(query) {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`
  )

  const data = await response.json()

  if (data.Response === "False") {
    return []
  }

  return data.Search
}

export async function getMovieByTitle(title) {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}&plot=full`
  )

  const data = await response.json()

  if (data.Response === "False") {
    return null
  }

  return data
}

export async function getDefaultBondMovies() {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent("James Bond")}&type=movie&page=1`
  )

  const data = await response.json()

  if (data.Response === "False") {
    return []
  }

  return data.Search.slice(0, 10)
}