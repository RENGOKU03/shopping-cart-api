import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shadow-sm gap-4">
      <Link
        to="/"
        className="text-2xl md:text-4xl font-bold text-red-800 uppercase text-center"
      >
        React Redux Shopping Cart
      </Link>
      <div className="flex gap-4 items-center">
        <NavLink to="/">
          <button className="text-lg md:text-xl font-semibold text-red-800 uppercase px-4 py-2 border-2 border-red-800 rounded-md hover:bg-red-800 hover:text-white transition-all duration-300">
            Home
          </button>
        </NavLink>
        <NavLink to="/cart" className="relative">
          <button className="text-lg md:text-xl font-semibold text-red-800 uppercase px-4 py-2 border-2 border-red-800 rounded-md hover:bg-red-800 hover:text-white transition-all duration-300">
            Cart
          </button>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
