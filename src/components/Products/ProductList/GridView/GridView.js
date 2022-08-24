// React
import React from "react";
// CSS
import styles from "./GridView.module.css";
// Components
import Product from "../../../Shared/Product/Product";
const GridView = ({ products }) => {
  return (
    <div className={styles["products-container"]}>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default GridView;
