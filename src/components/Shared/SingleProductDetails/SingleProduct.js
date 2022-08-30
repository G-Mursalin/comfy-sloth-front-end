// React
import { React, useEffect } from "react";
// CSS
import styles from "./SingleProduct.module.css";
// React Router
import { useParams, useNavigate, Link } from "react-router-dom";
// Components
import Loading from "../Loading/Loading";
import PageHero from "../PageHero/PageHero";
import FetchDataError from "../FetchDataError/FetchDataError";
import ProductImages from "./ProductImages/ProductImages";
import Stars from "./Stars/Stars";
// React Query
import { useQuery } from "@tanstack/react-query";
// Helpers
import { formatPrice } from "../Helpers/helpers";
// Components
import AddToCart from "./AddToCart/AddToCart";
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
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className={styles.price}> {formatPrice(price)}</h5>
            <p className={styles.desc}> {description}</p>
            <p className={styles.info}>
              <span>Available : </span>
              {stock > 0 ? `In stock (${stock})` : "out of stock"}
            </p>
            <p className={styles.info}>
              <span>SKU : </span>
              {sku}
            </p>
            <p className={styles.info}>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={data} />}
          </section>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
