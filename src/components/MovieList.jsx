import MovieCard from "./MovieCard.jsx"

export default function MovieList({ movies }) {
  if (!movies.length) {
    return <p>Ingen filmer funnet.</p>
  }

  return (
    <ul className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  )
}