import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
const App = () => {
  return (
    <BrowserRouter>
      <header className="navbar">
          <Link to="/"  className="site-logo">#VANLIFE</Link>
        <nav className="pages">
          <Link to="/about">About</Link>
          <Link to="/">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
