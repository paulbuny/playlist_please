import './Search.css';
import { useState } from 'react';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  function handleOnChangeSearchQuery (query) {
    setSearchQuery(query.target.value);
    console.log(searchQuery);
  }

  return (
    <div className="search-bar">
      <form className="search-bar__search-form">
        <input className="search-bar__search-input" type="search" placeholder="Enter your track" onChange={handleOnChangeSearchQuery}></input>
        <div className="search-bar__search-icon">
        <svg height={24} width={24} color={'#8D8D8D'} role="img" viewBox="0 0 512 512" aria-hidden="true">
          <path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" />
        </svg>
        </div>
      </form>
    </div>
  )
}

export default Search;