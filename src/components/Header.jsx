import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="navbar">
        <Link to="/" className="site-logo">
          #VANLIFE
        </Link>
        <nav className="pages">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
