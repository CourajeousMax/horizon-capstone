import React from "react";
import { Link, NavLink } from "react-router-dom";
import Blathers from "../../assets/images/blathers.png";
import "../../Components/Header/Header.scss";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/">
          <img className="nav__logo" src={Blathers} alt="blathers logo" />
          <h1>CHIRP!</h1>
        </Link>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink className="nav__link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="/journal">
              Journal
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;