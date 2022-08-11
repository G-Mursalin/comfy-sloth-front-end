// React
import React from "react";
// CSS
import styles from "./FeaturedProducts.module.css";
// React Toolkit
import { useSelector, useDispatch } from "react-redux";
// Components
import Loading from "./../../Shared/Loading/Loading";
const FeaturedProducts = () => {
  const isLoading = useSelector((state) => state.products.productsLoading);
  console.log(isLoading);
  if (isLoading) {
    return <Loading />;
  }
  return <div>FeaturedProducts</div>;
};

export default FeaturedProducts;
