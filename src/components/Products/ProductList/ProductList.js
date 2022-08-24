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
  const gridView = useSelector((state) => state.products.grid_view);
  if (filteredProducts.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }

  if (gridView) {
    return <GridView products={filteredProducts}>product list</GridView>;
  }
  return <ListView products={filteredProducts} />;
};

export default ProductList;
