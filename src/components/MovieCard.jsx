import { Link } from "react-router-dom"
import { createSlug } from "../utils/slug.jsx"

export default function MovieCard({ movie }) {
  const slug = createSlug(movie.Title)

  return (
    <li>
      <article className="movie-card">
        <Link to={`/${slug}`} aria-label={`Se detaljer om ${movie.Title}`}>
          {movie.Poster !== "N/A" ? (
            <img
              src={movie.Poster}
              alt={`Filmplakat for ${movie.Title}`}
              className="movie-poster"
            />
          ) : (
            <figure className="poster-fallback">
              <figcaption>Ingen plakat tilgjengelig</figcaption>
            </figure>
          )}

          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </Link>
      </article>
    </li>
  )
}