import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="nav">
        <ul>
      <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/buynow">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        
      </div>
    </>
  );
}

export default SideBar;
