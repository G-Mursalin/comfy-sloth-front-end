// React
import React from "react";
// CSS
import styles from "./CheckOut.module.css";
// React Router
import { Link } from "react-router-dom";
// Redux Toolkit
import { useSelector } from "react-redux";
// Components
import PageHero from "../Shared/PageHero/PageHero";
import StripeCheckout from "./Payment/StripeCheckout";
const CheckOut = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <main>
      <PageHero title="check out" />
      <div className={`page ${styles["checkout-wrapper"]}`}>
        {items?.length === 0 ? (
          <div className={styles.empty}>
            <h2>your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <div style={{ width: "80vh", padding: "20px" }}>
            <StripeCheckout />
          </div>
        )}
      </div>
    </main>
  );
};

export default CheckOut;
