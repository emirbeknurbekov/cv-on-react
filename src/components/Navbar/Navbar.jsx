import React from "react";
import "./Navbar.css";
import logo from "../../icons/logo.png";
const Navbar = () => {
  return (
    <div id="nav">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <img className="logo__img" src={logo} alt="" />
            <h2 className="logo__title">Almurut Resume</h2>
          </div>
          <div className="navbar">
            <ul className="navbar__item">
              <li className="navbar__title">
                <a href="#about">About</a>
              </li>
              <li className="navbar__title">
                <a href="#experience">Experience</a>
              </li>
              <li className="navbar__title">
                <a href="#skills">Skills</a>
              </li>
              <li className="navbar__title">
                <a href="#education">Education</a>
              </li>
              <li className="navbar__title">
                <a href="#portfolio">Portfolios</a>
              </li>
              <li id="navbar__title_last" className="navbar__title">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
