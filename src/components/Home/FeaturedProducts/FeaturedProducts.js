// React
import React from "react";
// CSS
import styles from "./FeaturedProducts.module.css";
// React Toolkit
import { useSelector, useDispatch } from "react-redux";
// Components
import Loading from "./../../Shared/Loading/Loading";
import FetchDataError from "../../Shared/FetchDataError/FetchDataError";
const FeaturedProducts = () => {
  const isLoading = useSelector((state) => state.products.productsLoading);
  const isError = useSelector((state) => state.products.productsError);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <FetchDataError />;
  }

  return <div>FeaturedProducts</div>;
};

export default FeaturedProducts;
