import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar.jsx"
import MovieList from "../components/MovieList.jsx"
import { getBondMovies, searchMovies } from "../services/omdb.jsx"

export default function Home() {

  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  useEffect(() => {
    loadBond()
  }, [])

  async function loadBond() {
    const data = await getBondMovies()
    setMovies(data)
  }

  async function handleSearch(e) {

    const value = e.target.value
    setSearch(value)

    if (value.length < 3) {
      loadBond()
      return
    }

    const results = await searchMovies(value)
    setMovies(results)
  }

  return (
    <main>

      <header>
        <h1>Movie Search</h1>
      </header>

      <section>
        <SearchBar value={search} onChange={handleSearch} />
      </section>

      <section>
        <MovieList movies={movies} />
      </section>

    </main>
  )
}