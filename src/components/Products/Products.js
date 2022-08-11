// React
import React from "react";
// React Toolkit
import { useSelector, useDispatch } from "react-redux";
const Products = () => {
  const products = useSelector((state) => state.products.products);
  return <div>Products {products.length}</div>;
};

export default Products;
