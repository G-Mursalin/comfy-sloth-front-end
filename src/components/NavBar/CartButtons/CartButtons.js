// React
import React from "react";
// React Router
import { Link } from "react-router-dom";
// React Icons
import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";
// CSS
import styles from "./CartButtons.module.css";

const CartButtons = () => {
  return (
    <div className={`${styles["wrapper"]} ${styles["cart-btn-wrapper"]}`}>
      <Link to="/cart" className={styles["cart-btn"]}>
        Cart
        <span className={styles["cart-container"]}>
          <FaShoppingCart />
          <span className={styles["cart-value"]}>12</span>
        </span>
      </Link>
      <Link to="/login">
        <button type="button" className={styles["auth-btn"]}>
          Login <FaUserPlus />
        </button>
      </Link>
    </div>
  );
};

export default CartButtons;
