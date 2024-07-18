import { Link } from "react-router-dom";
import "./Nav.css";

const NavMenu = () => {
  return (
    <nav className="nav-container">
      <ul className="list-items">
        <Link to="/" className="item">
          <li>Home</li>
        </Link>
        <Link to="/about" className="item">
          <li>About</li>
        </Link>
        <Link to="/about" className="item">
          <li>Project</li>
        </Link>
        <Link to="/contact" className="item">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavMenu;
