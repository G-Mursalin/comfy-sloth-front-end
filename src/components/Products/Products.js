// React
import React from "react";
// CSS
import styles from "./Products.module.css";
// Components
import Filters from "./Filters/Filters";
import Sort from "./Sort/Sort";
import ProductList from "./ProductList/ProductList";
import PageHero from "../Shared/PageHero/PageHero";

const Products = () => {
  return (
    <main>
      <PageHero title="products" />
      <div className="page">
        <div className={`section-center ${styles.products}`}>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
