export default function SearchBar({ value, onChange }) {
  return (
    <form role="search">
      <label htmlFor="search">Search movie</label>
      <input
        id="search"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Type at least 3 letters"
      />
    </form>
  )
}