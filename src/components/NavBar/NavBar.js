// React
import React from "react";
// React Icons
import { FaBars } from "react-icons/fa";
//React Router
import { Link, NavLink } from "react-router-dom";
// CSS
import styles from "./NavBar.module.css";
// Images
import logo from "./../../assets/logo.svg";
const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "2px solid rgb(197, 164, 145)" : "",
            };
          }}
          to="/home"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "2px solid rgb(197, 164, 145)" : "",
            };
          }}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "2px solid rgb(197, 164, 145)" : "",
            };
          }}
          to="/products"
        >
          Products
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className={styles["nav"]}>
      <div className={styles["nav-center"]}>
        <div className={styles["nav-header"]}>
          <Link to="/">
            <img src={logo} alt="comfy sloth" />
          </Link>
          <button type="button" className={styles["nav-toggle"]}>
            <FaBars />
          </button>
        </div>
        <ul className={styles["nav-links"]}>{navLinks}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
