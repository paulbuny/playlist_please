import './Header.css';
import Search from '../Search/Search';
import SearchResult from '../SearchResult/SearchResult';

function Header (props) {
  return (
    <header className="header">
      <div className="logo"></div>
      <Search onSearchQueryUpdate={props.onSearchQueryUpdate}
              onHandleSubmit={props.onHandleSubmit}
              />
      <SearchResult />
    </header>
  )
}

export default Header;