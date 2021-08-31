import './Search.css';

function Search() {
  return (
    <div className="search-bar">
      <form className="search-bar__search-form">
        <input type="search" className="search-bar__text-input" placeholder="Enter your track"></input>
      </form>
    </div>
  )
}

export default Search;