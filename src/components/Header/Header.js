import './Header.css';
import Search from '../Search/Search';
import SearchResult from '../SearchResult/SearchResult';
import { useState } from 'react';

function Header (props) {
  const [isShown, setIsShown] = useState(false);

  function isShownHandler (query) {
    if (query.length !== 0) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  }
  return (
    <header className="header">
      <div className="logo"></div>
      <div className="search">
      <Search onSearchQueryUpdate={props.onSearchQueryUpdate}
              onHandleSubmit={props.onHandleSubmit}
              isShownHandler={isShownHandler}
              />
      <SearchResult isShown={isShown}
                    searchResult={props.searchResult}
                    />
      </div>
    </header>
  )
}

export default Header;