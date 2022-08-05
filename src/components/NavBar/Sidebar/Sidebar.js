// React
import React from "react";
// Images
import logo from "./../../../assets/logo.svg";
// React Icons
import { FaTimes } from "react-icons/fa";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { navBarActions } from "../../../store/navBarSlice";
// React Route
import { Link } from "react-router-dom";
// CSS
import styles from "./Sidebar.module.css";
// Components
import CartButtons from "../CartButtons/CartButtons";
const Sidebar = () => {
  const isOpen = useSelector((state) => state.navBar.isOpen);
  const dispatch = useDispatch();
  const sideBarLinks = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  return (
    <aside className={styles["sidebar-container"]}>
      <div
        className={
          isOpen
            ? `${styles["sidebar"]} ${styles["show-sidebar"]}`
            : `${styles["sidebar"]}`
        }
      >
        <div className={styles["sidebar-header"]}>
          <img src={logo} className={styles.logo} alt="comfy sloth" />
          <button
            onClick={() => dispatch(navBarActions.toggleNavbar())}
            className={styles["close-btn"]}
            type="button"
          >
            <FaTimes />
          </button>
        </div>
        <ul className={styles.links}>{sideBarLinks}</ul>
      </div>
    </aside>
  );
};

export default Sidebar;
