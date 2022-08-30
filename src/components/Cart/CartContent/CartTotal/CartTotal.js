// React
import React from "react";
// React Router
import { Link } from "react-router-dom";
// React Redux
import { useSelector } from "react-redux";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// Helpers
import { formatPrice } from "../../../Shared/Helpers/helpers";
// CSS
import styles from "./CartTotal.module.css";
const CartTotal = () => {
  const { user, loginWithRedirect } = useAuth0();
  const items = useSelector((state) => state.cart.items);
  const total_amount = items.reduce(
    (previousValue, currentValue) => previousValue + currentValue.subTotal,
    0
  );
  const shipping_amount = useSelector((state) => state.cart.shippingAmount);

  return (
    <section className={styles["cart-total"]}>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_amount)}</span>
          </p>
          <hr />
          <h4>
            order total :{" "}
            <span>{formatPrice(total_amount + shipping_amount)}</span>
          </h4>
        </article>
        {user ? (
          <Link to="/checkout" className={`btn ${styles["cart-total-btn"]}`}>
            proceed to checkout
          </Link>
        ) : (
          <button
            type="button"
            className={`btn ${styles["cart-total-btn"]}`}
            onClick={loginWithRedirect}
          >
            login
          </button>
        )}
      </div>
    </section>
  );
};

export default CartTotal;
