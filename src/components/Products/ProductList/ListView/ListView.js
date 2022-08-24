// React
import React from "react";
// CSS
import styles from "./ListView.module.css";
// React Router
import { Link } from "react-router-dom";
// Components
import Product from "../../../Shared/Product/Product";
const ListView = ({ products }) => {
  return (
    <section className={styles["list-container"]}>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className={styles.price}>{price / 1000}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className={`btn ${styles["p-btn"]}`}>
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
