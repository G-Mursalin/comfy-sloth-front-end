// React
import React from "react";
// React Icons
import { FaBars } from "react-icons/fa";
//React Router
import { Link, NavLink } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { navBarActions } from "../../store/navBarSlice";
// CSS
import styles from "./NavBar.module.css";
// Images
import logo from "./../../assets/logo.svg";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// Components
import CartButtons from "./CartButtons/CartButtons";
import Loading from "../Shared/Loading/Loading";
const NavBar = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
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
      <li>
        {user && (
          <NavLink
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid rgb(197, 164, 145)" : "",
              };
            }}
            to="/checkout"
          >
            Check Out
          </NavLink>
        )}
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
          <button
            onClick={() => dispatch(navBarActions.toggleNavbar())}
            type="button"
            className={styles["nav-toggle"]}
          >
            <FaBars />
          </button>
        </div>
        <ul className={styles["nav-links"]}>{navLinks}</ul>
        <CartButtons />
      </div>
    </nav>
  );
};

export default NavBar;
