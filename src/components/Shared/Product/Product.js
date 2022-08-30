// React
import React from "react";
// React Router
import { Link } from "react-router-dom";
// Icons
import { FaSearch } from "react-icons/fa";
//CSS
import styles from "./Product.module.css";
// Helpers
import { formatPrice } from "../Helpers/helpers";

const Product = ({ image, name, price, id }) => {
  return (
    <div>
      <div className={styles.container}>
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className={styles.link}>
          <FaSearch />
        </Link>
      </div>
      <footer className={styles.productFooter}>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </div>
  );
};

export default Product;
