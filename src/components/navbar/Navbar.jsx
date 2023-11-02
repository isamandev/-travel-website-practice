import { useState } from "react";
import "./Navbar.scss";
import Wrapper from "../wrapper/Wrapper";
import Logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="navbar">
      <Wrapper className="navbar__container">
        <a href="#" className="navbar__logo" onClick={() => setShowNav(false)}>
          <img src={Logo} alt="logo" />
        </a>
        <div className={`navbar__flex ${showNav ? "show-nav" : ""}`}>
          <ul className="navbar__links">
            <li onClick={() => setShowNav(false)}>Home</li>
            <li onClick={() => setShowNav(false)}>About Us</li>
            <li onClick={() => setShowNav(false)}>Menu</li>
            <li onClick={() => setShowNav(false)}>Blog</li>
          </ul>
          <button className="button-outline" onClick={() => setShowNav(false)}>
            Make A Reservation
          </button>
        </div>
        <div
          className={`navbar__menu ${showNav ? "bg-color" : ""}`}
          onClick={() => setShowNav(!showNav)}
        >
          <FaBars />
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
