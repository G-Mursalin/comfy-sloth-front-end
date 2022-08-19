// React
import React, { useState } from "react";
// React Router
import { Link } from "react-router-dom";
// CSS
import styles from "./AddToCart.module.css";
// Icons
import { FaPlus, FaMinus } from "react-icons/fa";
const AddToCart = ({ product }) => {
  const { name, price, stock, id, colors } = product;
  const [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount((perviousAmount) => {
      let tempAmount = perviousAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((perviousAmount) => {
      let tempAmount = perviousAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <section>
      <div className={styles["add-to-cart-container"]}>
        <button type="button" onClick={decrease}>
          <FaMinus />
        </button>
        <h2 className="amount">{amount}</h2>
        <button type="button" onClick={increase}>
          <FaPlus />
        </button>
      </div>
      <Link to="/cart" className={`btn ${styles["btn-add-to-cart"]}`}>
        add to cart
      </Link>
    </section>
  );
};

export default AddToCart;
