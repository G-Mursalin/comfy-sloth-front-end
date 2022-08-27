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
  const { text, company, category, min_price, max_price, price, shipping } =
    useSelector((state) => state.products.filters_initial_state);

  // Search Handler
  const searchHandler = (e) => {
    dispatch(productsActions.searchHandler({ searchValue: e.target.value }));
  };
  // Handle Catagories
  const catagoriesHandler = (c) => {
    dispatch(productsActions.catagoriesHandler({ categoryValue: c }));
  };
  // Handle Companies
  const handleCompanies = (e) => {
    dispatch(
      productsActions.companiesHandler({ companyValue: e.target.value })
    );
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
              onChange={searchHandler}
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
                  onClick={() => catagoriesHandler(c.toLowerCase())}
                  className={`${
                    category === c.toLowerCase()
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
              onChange={handleCompanies}
            >
              {companies.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          {/* End of Companies */}
        </form>
      </div>
    </section>
  );
};

export default Filters;
