
function Search({search, setSearch}) {
    return (
        <div className="search">
        <label id="spyglass" htmlFor="search">🔎</label>
        <input
          className = "searchTerm"
          type="text"
          id="search"
          placeholder=" Search by client or role..."
          value = {search}
          onChange={(e) => setSearch(e.target.value)}
        />
        </div>
    )
}

export default Search;