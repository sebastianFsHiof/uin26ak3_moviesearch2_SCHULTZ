import MovieCard from "./MovieCard.jsx"

export default function MovieList({ movies }) {

  if (!movies.length) return <p>No movies found</p>

  return (
    <ul>
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </ul>
  )
}