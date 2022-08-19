// React
import React from "react";
// Redux Toolkit
import { useSelector } from "react-redux";
// React Router
import { Link } from "react-router-dom";
// CSS
import styles from "./Cart.module.css";
// Components
import PageHero from "../Shared/PageHero/PageHero";
import CartContent from "./CartContent";

const Cart = () => {
  const totalAddedItems = useSelector((state) => state.cart.totalAddedItems);

  if (!totalAddedItems) {
    return (
      <main className="page-100">
        <div className={styles.empty}>
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <PageHero title="Cart" />
      <div className="page">
        <CartContent />
      </div>
    </main>
  );
};

export default Cart;
