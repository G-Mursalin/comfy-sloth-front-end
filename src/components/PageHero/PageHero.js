// React
import React from "react";
// React Router
import { Link } from "react-router-dom";
// CSS
import styles from "./PageHero.module.css";
const PageHero = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link> / {title}
        </h3>
      </div>
    </div>
  );
};

export default PageHero;
