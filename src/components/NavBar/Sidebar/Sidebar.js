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
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// React Icons
import { FaUserPlus, FaUserMinus } from "react-icons/fa";
// CSS
import styles from "./Sidebar.module.css";
// Components
import CartButtons from "../CartButtons/CartButtons";
const Sidebar = () => {
  const isOpen = useSelector((state) => state.navBar.isOpen);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
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
      <li>{user && <Link to="/checkout">Checkout</Link>}</li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      {!isAuthenticated && (
        <li>
          <button
            type="button"
            onClick={loginWithRedirect}
            className={styles["auth-btn"]}
          >
            Login <FaUserPlus />
          </button>
        </li>
      )}
      {isAuthenticated && (
        <li>
          <button
            type="button"
            onClick={() => logout({ returnTo: window.location.origin })}
            className={styles["auth-btn"]}
          >
            Logout <FaUserMinus />
          </button>
        </li>
      )}
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
        <ul
          className={styles.links}
          onClick={() => dispatch(navBarActions.toggleNavbar())}
        >
          {sideBarLinks}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
