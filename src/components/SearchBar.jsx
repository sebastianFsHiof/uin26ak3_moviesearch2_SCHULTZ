export default function SearchBar({ value, onChange }) {
  return (
    <form role="search" className="search-form">
      <label htmlFor="movie-search">Søk etter film</label>
      <input
        id="movie-search"
        name="movie-search"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Skriv minst 3 tegn..."
      />
    </form>
  )
}