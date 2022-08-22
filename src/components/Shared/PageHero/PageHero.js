// React
import React from "react";
// React Router
import { Link } from "react-router-dom";
// CSS
import styles from "./PageHero.module.css";
const PageHero = ({ title, name }) => {
  return (
    <div className={styles.wrapper}>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link> /{" "}
          {name ? (
            <Link to="/products" className={styles["p-name"]}>
              {title}
            </Link>
          ) : (
            <spam className={styles["p-name"]}>{title}</spam>
          )}
          {name && <spam className={styles["p-name"]}>{`/ ${name}`}</spam>}
        </h3>
      </div>
    </div>
  );
};

export default PageHero;
