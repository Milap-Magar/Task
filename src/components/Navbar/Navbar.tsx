import NavMenu from "./NavMenu";
import Logo  from "../../assets/logo.svg";
import "./Nav.css";

const Navbar = () => {
  return (
    <header className="container">
      <figure className="figure-container">
        <img src={Logo} alt="Logo image" id="logo-img" />
      </figure>
      <NavMenu />
    </header>
  );
};

export default Navbar;
