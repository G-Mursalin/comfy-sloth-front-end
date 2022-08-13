// React
import { React, useEffect } from "react";
// CSS
import styles from "./SingleProduct.module.css";
// React Router
import { useParams, useNavigate, Link } from "react-router-dom";
// Components
import Loading from "../Shared/Loading/Loading";
import PageHero from "../Shared/PageHero/PageHero";
import FetchDataError from "../Shared/FetchDataError/FetchDataError";
import ProductImages from "./ProductImages";
// React Query
import { useQuery } from "@tanstack/react-query";
const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Fetching Single product Info.
  const { isLoading, error, data } = useQuery([id], () =>
    fetch(`https://course-api.com/react-store-single-product?id=${id}`).then(
      (res) => res.json()
    )
  );
  useEffect(() => {
    if (error) {
      setTimeout(() => navigate("/"), 3000);
    }
  }, [error, navigate]);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <FetchDataError />;
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = data;
  return (
    <main>
      <PageHero title="Products" name={name} />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className={styles["product-center"]}>
          <ProductImages images={images} />
          <div className=""></div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
