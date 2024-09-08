import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <span>React Redux Shopping Cart</span>
      </Link>
      <div className="div-buttons">
        <NavLink to={"/"}>
          <button>Home</button>
        </NavLink>
        <NavLink to={"/cart"}>
          <button>Cart</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
