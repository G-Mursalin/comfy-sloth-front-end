// React
import React from "react";
// CSS
import styles from "./CartContent.module.css";
// React Router
import { Link } from "react-router-dom";
// Redux Toolkit
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/cartSlice";
// Components
import CartItem from "./CartItem/CartItem";
import CartColumns from "./CartColumns/CartColumns";
import CartTotal from "./CartTotal/CartTotal";
const CartContent = () => {
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  const dispatch = useDispatch();
  return (
    <section className="section section-center">
      {/* Header */}
      <CartColumns />
      {/* Rows */}
      {items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className={styles["link-container"]}>
        <Link to="/products" className={styles["link-btn"]}>
          continue shopping
        </Link>
        <button
          type="button"
          className={`${styles["link-btn"]} ${styles["clear-btn"]}`}
          onClick={() => dispatch(cartActions.removeAllItems())}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotal />
    </section>
  );
};

export default CartContent;
