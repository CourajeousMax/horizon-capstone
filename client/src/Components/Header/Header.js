import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Blathers from "../../assets/images/blathers.png";
import "./Header.scss"
const Header = () => {
    return (
      <>
        <nav className="nav">
          <Link to="/">
            <img className="nav__logo" src={Blathers} alt="logo" />
            <h1>CHIRP!</h1>
          </Link>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to="/signup">
                SignUp
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
};

export default Header;