import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar.jsx"
import MovieList from "../components/MovieList.jsx"
import { getDefaultBondMovies, searchMoviesByTitle } from "../services/omdb.jsx"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [headline, setHeadline] = useState("James Bond-filmer")

  useEffect(() => {
    async function loadDefaultMovies() {
      setIsLoading(true)
      const bondMovies = await getDefaultBondMovies()
      setMovies(bondMovies)
      setHeadline("James Bond-filmer")
      setIsLoading(false)
    }

    loadDefaultMovies()
  }, [])

  useEffect(() => {
    async function loadMovies() {
      if (searchTerm.trim().length < 3) {
        const bondMovies = await getDefaultBondMovies()
        setMovies(bondMovies)
        setHeadline("James Bond-filmer")
        setIsLoading(false)
        return
      }

      setIsLoading(true)
      const results = await searchMoviesByTitle(searchTerm)
      setMovies(results)
      setHeadline(`Søkeresultater for "${searchTerm}"`)
      setIsLoading(false)
    }

    loadMovies()
  }, [searchTerm])

  function handleChange(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <main className="page-layout">
      <header className="page-header">
        <h1>Movie Search</h1>
        <p>Finn filmer med OMDb API</p>
      </header>

      <section aria-labelledby="search-heading">
        <h2 id="search-heading">Søk</h2>
        <SearchBar value={searchTerm} onChange={handleChange} />
      </section>

      <section aria-labelledby="movie-list-heading">
        <h2 id="movie-list-heading">{headline}</h2>
        {isLoading ? <p>Laster filmer...</p> : <MovieList movies={movies} />}
      </section>
    </main>
  )
}