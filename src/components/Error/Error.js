// React
import React from "react";
// React Router
import { Link } from "react-router-dom";
// CSS
import styles from "./Error.module.css";
const Error = () => {
  return (
    <section className={`${styles.wrapper} page-100`}>
      <div>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
