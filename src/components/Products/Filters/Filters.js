// React
import React from "react";
// React Redux
import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "../../../store/productsSlice";
// CSS
import styles from "./Filters.module.css";
const Filters = () => {
  const dispatch = useDispatch();
  // Get Data Dynamically for Filters
  const { companies, categories, max_priceDy } = useSelector(
    (state) => state.products.filters
  );
  // Get State values fo Filter
  const { text, company, category, min_price, price, shipping } = useSelector(
    (state) => state.products.filters_initial_state
  );
  //  Update Filters
  const updateFilters = (e) => {
    const filterName = e.target.name;
    let filterValue = e.target.value;
    if (filterName === "category") {
      filterValue = e.target.textContent;
    }
    if (filterName === "shipping") {
      filterValue = e.target.checked;
    }

    dispatch(productsActions.updateFilters({ filterName, filterValue }));
  };
  //
  const resetInitialFilters = () => {
    dispatch(productsActions.resetInitialFilters());
  };
  return (
    <section>
      <div className={styles["filter-content"]}>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Search Input */}
          <div className={styles["form-control"]}>
            <input
              type="text"
              name="text"
              placeholder="search"
              className={styles["search-input"]}
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* End of Search Input */}
          {/* Categories */}
          <div className={styles["form-control"]}>
            <h5>category</h5>
            <div>
              {categories.map((c, index) => (
                <button
                  key={index}
                  type="button"
                  name="category"
                  onClick={updateFilters}
                  className={`${
                    category.toLowerCase() === c.toLowerCase()
                      ? styles["active-filter"]
                      : null
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          {/* End of Categories */}
          {/* Companies */}
          <div className={styles["form-control"]}>
            <h5>company</h5>
            <select
              name="company"
              value={company}
              className={styles["company"]}
              onChange={updateFilters}
            >
              {companies.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          {/* End of Companies */}
          {/* price */}
          <div className={styles["form-control"]}>
            <h5>price</h5>
            <p className={styles["price-filter"]}>${price / 100}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_priceDy}
              onChange={updateFilters}
              value={price}
            />
          </div>
          {/* end of price */}
          {/* Shipping */}
          <div
            className={`${styles["form-control"]} ${styles["shipping-filter"]}`}
          >
            <label htmlFor="shipping"> free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* End of  Shipping */}
        </form>
        <button
          type="button"
          className={`btn ${styles["clear-btn"]}`}
          onClick={resetInitialFilters}
        >
          clear filters
        </button>
      </div>
    </section>
  );
};

export default Filters;
