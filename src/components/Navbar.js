import React from 'react';
import { ReactComponent as Logo } from './../images/logoipsum-logo-31.svg';
import "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <div className="left">
        <Logo />
        <br />
        <a href="/">Animal Navbar</a>
      </div>
      <div className="mid">
        <ul className="navbar">
          <li>
            <Link to="/">Dogs</Link>
          </li>
          <li>
            <Link to="/cats">Cats</Link>
          </li>
          <li>
            <Link to="/sheeps">Sheep</Link>
          </li>
          <li>
            <Link to="/goats">Goats</Link>
          </li>
        </ul>

      </div>
      <div className="right">
        <a href="/">Welcome</a>
      </div>

    </header>
  );
}
export default Navbar;