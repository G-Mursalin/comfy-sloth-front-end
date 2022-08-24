// React
import React from "react";
// CSS
import styles from "./FeaturedProducts.module.css";
// React Toolkit
import { useSelector } from "react-redux";
// Components
import Loading from "./../../Shared/Loading/Loading";
import FetchDataError from "../../Shared/FetchDataError/FetchDataError";
import Product from "../../Shared/Product/Product";
const FeaturedProducts = () => {
  const isLoading = useSelector((state) => state.products.productsLoading);
  const isError = useSelector((state) => state.products.productsError);
  const featuredProducts = useSelector(
    (state) => state.products.products
  ).filter((product) => product.featured === true);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <FetchDataError />;
  }

  return (
    <div className={styles.wrapper}>
      <div className="section">
        <div className={styles.title}>
          <h2>featured products</h2>
          <div className={styles.underline}></div>
        </div>
        <div className={`section-center ${styles.featured}`}>
          {featuredProducts.slice(0, 3).map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
