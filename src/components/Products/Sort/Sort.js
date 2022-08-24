// React
import React from "react";
// Icons
import { BsFillGridFill, BsList } from "react-icons/bs";
// Redux Toolkit
import { useDispatch } from "react-redux";
import { productsActions } from "../../../store/productsSlice";
// CSS
import styles from "./Sort.module.css";

const Sort = () => {
  const dispatch = useDispatch();
  const handleSorts = (e) => {
    // (e.target.value);
  };

  return (
    <section className={styles["sort-container"]}>
      <div className={styles["btn-container"]}>
        <button
          type="button"
          onClick={() => dispatch(productsActions.productView())}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          onClick={() => dispatch(productsActions.productView())}
        >
          <BsList />
        </button>
      </div>
      <p>17 products found</p>
      <hr />
      <div>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          onChange={handleSorts}
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
