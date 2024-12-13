import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Featuring Characters</Link>
        </li>
        <li>
          <Link to="/characters">All Characters</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
