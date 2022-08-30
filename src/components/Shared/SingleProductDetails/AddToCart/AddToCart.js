// React
import React, { useState } from "react";
// React Router
import { Link } from "react-router-dom";
// CSS
import styles from "./AddToCart.module.css";
// Redux Toolkit
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cartSlice";
// Icons
import { FaPlus, FaMinus } from "react-icons/fa";
const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const { name, images, price, stock, id } = product;
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
      <Link
        to="/cart"
        onClick={() =>
          dispatch(
            cartActions.addToCart({
              id,
              name,
              image: images[0],
              price,
              quantity: amount,
              stock,
            })
          )
        }
        className={`btn ${styles["btn-add-to-cart"]}`}
      >
        add to cart
      </Link>
    </section>
  );
};

export default AddToCart;
