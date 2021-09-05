import './Header.css';
import Search from '../Search/Search';

function Header() {
  return (
    <header className="header">
      <div className="logo"></div>
      <Search />
    </header>
  )
}

export default Header;