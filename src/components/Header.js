import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo">
      <Link to="/">Math Magicians</Link>
    </div>
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/Quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
