import {React, useState} from "react";
import { Link, NavLink } from "react-router-dom";
import Blathers from "../../assets/images/blathers.png";
import "../../Components/Header/Header.scss";

const NavBar = () => {
      const [user, setUser] = useState(null);
      const [failedAuth, setFailedAuth] = useState(false);
    const handleLogout = () => {
      sessionStorage.removeItem("token");
      setUser(null);
      setFailedAuth(true);
    };

  return (
    <>
      <nav className="nav">
        <Link to="/">
          <div className="nav__container">
            <img className="nav__logo" src={Blathers} alt="logo" />
            <h1 className="nav__text">CHIRP!</h1>
          </div>
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
