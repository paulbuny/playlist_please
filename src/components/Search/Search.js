import './Search.css';

function Search() {
  return (
    <div className="search-bar">
      <form className="search-bar__search-form">
        <input className="search-bar__search-input" type="search" placeholder="Enter your track"></input>
      </form>
    </div>
  )
}

export default Search;