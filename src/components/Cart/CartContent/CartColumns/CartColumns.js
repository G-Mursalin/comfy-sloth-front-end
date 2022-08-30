// React
import React from "react";
// CSS
import styles from "./CartColumns.module.css";
const CartColumns = () => {
  return (
    <div className={styles.column}>
      <div className={styles.content}>
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </div>
  );
};

export default CartColumns;
