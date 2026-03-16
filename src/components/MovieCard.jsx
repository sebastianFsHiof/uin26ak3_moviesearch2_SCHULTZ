import { Link } from "react-router-dom"
import { createSlug } from "../utils/slug.jsx"

export default function MovieCard({ movie }) {

  const slug = createSlug(movie.Title)

  return (
    <li>
      <article>

        <Link to={`/${slug}`}>

          {movie.Poster !== "N/A"
            ? <img src={movie.Poster} alt={movie.Title}/>
            : <p>No image</p>
          }

          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>

        </Link>

      </article>
    </li>
  )
}