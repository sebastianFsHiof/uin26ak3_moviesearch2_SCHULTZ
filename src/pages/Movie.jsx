import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getMovieByTitle } from "../services/omdb.jsx"
import { slugToTitle } from "../utils/slug.jsx"

export default function Movie() {
  const { movie } = useParams()
  const [movieData, setMovieData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadMovie() {
      setIsLoading(true)
      const titleFromSlug = slugToTitle(movie)
      const data = await getMovieByTitle(titleFromSlug)
      setMovieData(data)
      setIsLoading(false)
    }

    loadMovie()
  }, [movie])

  if (isLoading) {
    return (
      <main className="page-layout">
        <p>Laster film...</p>
      </main>
    )
  }

  if (!movieData) {
    return (
      <main className="page-layout">
        <header className="page-header">
          <h1>Film ikke funnet</h1>
        </header>

        <nav aria-label="Tilbake til forsiden">
          <Link to="/" className="back-link">
            Til forsiden
          </Link>
        </nav>
      </main>
    )
  }

  return (
    <main className="page-layout">
      <header className="page-header">
        <h1>{movieData.Title}</h1>
        <p>
          {movieData.Year} · {movieData.Genre}
        </p>
      </header>

      <nav aria-label="Tilbake til forsiden">
        <Link to="/" className="back-link">
          Til forsiden
        </Link>
      </nav>

      <section aria-labelledby="movie-details-heading" className="movie-detail">
        <h2 id="movie-details-heading">Filminformasjon</h2>

        {movieData.Poster !== "N/A" ? (
          <img
            src={movieData.Poster}
            alt={`Filmplakat for ${movieData.Title}`}
            className="detail-poster"
          />
        ) : (
          <p>Ingen plakat tilgjengelig.</p>
        )}

        <p>{movieData.Plot}</p>
        <p>
          <strong>Regissør:</strong> {movieData.Director}
        </p>
        <p>
          <strong>Skuespillere:</strong> {movieData.Actors}
        </p>
        <p>
          <strong>IMDb-rating:</strong> {movieData.imdbRating}
        </p>
      </section>
    </main>
  )
}