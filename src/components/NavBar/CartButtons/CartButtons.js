// React
import React from "react";
// React Router
import { Link } from "react-router-dom";
// React Icons
import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";
// Redux Toolkit
import { useSelector } from "react-redux";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// CSS
import styles from "./CartButtons.module.css";
// Components
import Loading from "../../Shared/Loading/Loading";
const CartButtons = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAddedItems = items.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
  const { loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={`${styles["wrapper"]} ${styles["cart-btn-wrapper"]}`}>
      <Link to="/cart" className={styles["cart-btn"]}>
        Cart
        <span className={styles["cart-container"]}>
          <FaShoppingCart />
          <span className={styles["cart-value"]}>{totalAddedItems}</span>
        </span>
      </Link>
      {!isAuthenticated && (
        <button
          onClick={loginWithRedirect}
          type="button"
          className={styles["auth-btn"]}
        >
          Login <FaUserPlus />
        </button>
      )}
      {isAuthenticated && (
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          type="button"
          className={styles["auth-btn"]}
        >
          Logout <FaUserMinus />
        </button>
      )}
    </div>
  );
};

export default CartButtons;
