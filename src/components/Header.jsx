import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="navbar">
        <NavLink to="/" className="site-logo">
          #VANLIFE
        </NavLink>
        <nav className="pages">
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;

// //   const activeStyle = {
//   fontWeight: "bold",
//   textDecoration: "underline",
//   color: "red"
// }
