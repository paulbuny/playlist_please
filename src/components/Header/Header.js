import './Header.css';
import Search from '../Search/Search';

function Header() {
  return (
    <div className="header">
      <div className="logo"></div>
      <Search />
    </div>
  )
}

export default Header;