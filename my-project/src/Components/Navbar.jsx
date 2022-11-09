import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className="nav">
      <div className="navBox">
        <NavLink id="navlogo" className="navPage" to="/">
          {/* <img src={logo} alt="logo" /> */}
          UJJAWAL.
        </NavLink>
      </div>
      <div className="navBox">
        <NavLink className="navPage" to="/fiverrBusiness">
          Fiverr Business
        </NavLink>
        <NavLink className="navPage" to="/explore">
          Explore
        </NavLink>
        <NavLink className="navPage" to="/english">
          English
        </NavLink>
        <NavLink className="navPage" to="/inr">
          $ INR
        </NavLink>
        <NavLink className="navPage" to="/becomeAseller">
          Become a Seller
        </NavLink>
        <NavLink className="navPage" to="/signIn">
          Sign In
        </NavLink>
        <NavLink className="navPage" to="/join">
          <button>Join</button>
        </NavLink>
      
      </div>
    </div>
  );
};

export default Navbar;
