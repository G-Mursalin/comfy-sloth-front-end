// React
import React from "react";
// CSS
import styles from "./CartItem.module.css";
// Icons
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
// Helpers
import { formatPrice } from "../../../Shared/Helpers/helpers";
// Redux Toolkit
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cartSlice";
const CartItem = ({ id, image, name, price, quantity, stock, subTotal }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles["item-container"]}>
      <div className={styles.title}>
        <img src={image.url} alt={name} />
        <div>
          <h5 className={styles.name}>{name}</h5>
          <h5 className={styles["price-small"]}>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className={styles.price}>{formatPrice(price)}</h5>
      <div className={styles["add-to-cart-container"]}>
        <button
          type="button"
          onClick={() => dispatch(cartActions.removeFromCartOneByOne({ id }))}
        >
          <FaMinus />
        </button>
        <h2 className="amount">{quantity}</h2>
        <button
          type="button"
          onClick={() => dispatch(cartActions.addToCartOneByOne({ id }))}
        >
          <FaPlus />
        </button>
      </div>
      <h5 className={styles.subtotal}>{formatPrice(subTotal)}</h5>
      <button
        type="button"
        className={styles["remove-btn"]}
        onClick={() => dispatch(cartActions.removeOneItem({ id }))}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
