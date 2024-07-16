import "./Nav.css";

const NavMenu = () => {
  return (
    <nav className="nav-container">
      <ul className="list-items">
        <li className="item"><a href="#home"></a>Home</li>
        <li className="item"><a href="#about"></a>About</li>
        <li className="item"><a href="#contact"></a>Contact</li>
      </ul>
    </nav>
  );
};

export default NavMenu;
