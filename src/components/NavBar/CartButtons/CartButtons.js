// React
import React from "react";
// React Router
import { Link } from "react-router-dom";
// React Icons
import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";
// Redux Toolkit
import { useSelector, useDispatch } from "react-redux";
// CSS
import styles from "./CartButtons.module.css";

const CartButtons = () => {
  const totalAddedItems = useSelector((state) => state.cart.totalAddedItems);
  return (
    <div className={`${styles["wrapper"]} ${styles["cart-btn-wrapper"]}`}>
      <Link to="/cart" className={styles["cart-btn"]}>
        Cart
        <span className={styles["cart-container"]}>
          <FaShoppingCart />
          <span className={styles["cart-value"]}>{totalAddedItems}</span>
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
