// React
import React from "react";
// Redux Toolkit
import { useSelector } from "react-redux";
// Components
import ListView from "./ListView/ListView";
import GridView from "./GridView/GridView";
const ProductList = () => {
  const filteredProducts = useSelector(
    (state) => state.products.filtered_products
  );
  const productsView = useSelector((state) => state.products.products_view);
  console.log(filteredProducts.length);
  if (filteredProducts.length === 0) {
    return (
      <h5 style={{ color: "red" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }

  if (productsView) {
    return <ListView products={filteredProducts} />;
  }
  return <GridView products={filteredProducts}>product list</GridView>;
};

export default ProductList;
