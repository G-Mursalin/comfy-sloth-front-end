// React
import React from "react";
// Icons
import { BsFillGridFill, BsList } from "react-icons/bs";
// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../../store/productsSlice";
// CSS
import styles from "./Sort.module.css";

const Sort = () => {
  const dispatch = useDispatch();
  const productView = useSelector((state) => state.products.products_view);
  const sortBy = useSelector((state) => state.products.sort_by);
  console.log(sortBy);
  const filteredProducts = useSelector(
    (state) => state.products.filtered_products
  );
  const handleSorts = (e) => {
    // (e.target.value);
    dispatch(productsActions.getSortByValue({ sortValue: e.target.value }));
  };

  return (
    <section className={styles["sort-container"]}>
      <div className={styles["btn-container"]}>
        <button
          type="button"
          onClick={() => dispatch(productsActions.productViewGrid())}
          className={!productView ? `${styles["active"]}` : ""}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          onClick={() => dispatch(productsActions.productViewList())}
          className={productView ? `${styles["active"]}` : ""}
        >
          <BsList />
        </button>
      </div>
      <p>{filteredProducts.length} products found</p>
      <hr />
      <div>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          onChange={handleSorts}
          value={sortBy}
          className={styles["sort-input"]}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </div>
    </section>
  );
};

export default Sort;
