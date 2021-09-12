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
        <a href="/">Home</a>
      </div>
      <div className="mid">
        <ul className="navbar">
          <li>
            <Link to="/">Sign in</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/export-csv">Export CSV</Link>
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